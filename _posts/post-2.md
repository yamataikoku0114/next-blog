---
title: 'Notion APIでNotionDBのデータをGASのログに出力してみる'
date: '2023/11/30'
tags:
  - Notion
  - GAS
---

## 目次

# はじめに

今回はタイトルにもある通り、**NotionAPI**と**GAS**を使って、NotionDBのデータをGASのログに出力していこうと思います。

背景としては、NotionDBはタスク管理をしつつ、データを簡単に溜めていくのには有用ですが、グラフや図を使って分析はしづらいため、スプレッドシートに出力していきたいなと思ったのがきっかけです。

ボリュームが出そうなので、ログを出力するところまでで今回は一度区切ろうと思います。

# 前提

NotionAPIの設定・利用にあたり、以下の条件が必要です。

- Notionアカウントを作成し、ご自身のワークスペースが存在する
- ワークスペースオーナー（管理者）権限を持つ

**参考記事**

[Notion API利用のためのトークン取得・初期設定方法](https://programming-zero.net/notion-api-setting/)

# Integrationの作成

NotionAPIの使用にはIntegrationの作成と認証が必要です。

早速、作っていきましょう。

## 新しいIntegrationの作成

Integrationというのは連携管理をするための場所です。

自分が作成したアプリケーションを統合するための設定や編集を行うことができます。

以下のURLにアクセスします。

[Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.](https://www.notion.com/my-integrations)

開くと以下のような画面となると思います。

Create new integrationをクリックします

![キャプチャ1](/posts/post-2/Notion-and-GAS1.png)
Integration名の設定画面になるので、任意の名前を入力してください

入力できたら、Submitします

![キャプチャ2](/posts/post-2/Notion-and-GAS2.png)

Integration Tokenをここで取得することができます。

後で使用するため、コピーしておきましょう。

Tokenは秘密にしておきましょう。

![キャプチャ3](/posts/post-2/Notion-and-GAS3.png)

これで、Integrationの作成は終了です。

# 作成したIntegrationとデータベースを紐づける

このセクションでは、作成したIntegrationとデータベースがあるNotionのページがやり取りできるように

そのページに対して、読み込みと書き込みの権限を与えていきます。

まずは取得したいデータベースのページに行って、紐づけを行っていきましょう！

## 取得したいデータベースの確認

いきなり紐づけとは関係がありませんが、特定のデータベースにアクセスするために

データベースIDが必要となるので、確認します。

### データベースIDはどこ？？

こちらはURLに記載されています。

Notion公式リファレンス記載のURLを拝借

https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...

myworkspace/より後ろで、?vよりも前の数字と英語の文字列がデータベースIDです。

※私の場合はmyworkspaceディレクトリはありませんでした。

なくても気にせずに?vよりも手前部分がデータベースIDとなるようです。

## 作成したIntegrationとデータベースを紐づける

取得したいデータベースのページに行って、画面右上のミートボールを押下します。

以下のように、ポップアップが表示されますので、Add connectionsを押下します。

![キャプチャ4](/posts/post-2/Notion-and-GAS4.png)
左側のポップアップから先ほど作成したIntegrationを選択し、Confirmをクリックすれば紐づけ完了！

# NotionAPIの実行とログの出力

このセクションではNotionAPIをGASで実行し、NotionDBのデータをログに出力していきます。

## エンドポイントの確認

エンドポイントは[Notion開発者ページ](https://developers.notion.com/reference/post-database-query)に記載があります。

ここで先ほど説明して、データベースIDが必要となってきます。

このエンドポイントにHTTPリクエストを送信することで、NotionDBのデータを取得できます！

```tsx
https://api.notion.com/v1/databases/{database_id}/query
```

## リクエストに必要な情報を定義

リクエストに必要な情報は主に以下です。

- HTTPメソッド
- ヘッダー情報
- エンドポイント

これらの情報を構成するのに、データベースIDやIntegration Tokenが必要となってきます。

それでは、実際にGASスクリプトエディタに書いていきましょう。

```tsx
function getNotionData() {
  const database_id = '**************';
  const url = 'https://api.notion.com/v1/databases/' + database_id + '/query';
  const token = '****************';

  let headers = {
    'content-type': 'application/json; charset=UTF-8',
    Authorization: 'Bearer ' + token,
    'Notion-Version': '2021-08-16',
  };

  let options = {
    method: 'post',
    headers: headers,
  };
}
```

## headersとoptionsについての説明

### headers

- content-type
  - [Notion開発者ページの規則](https://developers.notion.com/reference/intro#conventions)にはリクエストをJSONにエンコードしてあるとの記述があります。
  - APIがJSON形式を期待していることが分かるので`application/json`を明示的に示してあげましょう。
- Authorization
  - [Notion開発者ページの認証ページ](https://developers.notion.com/reference/authentication)にはリクエストはHTTP Authorizationヘッダを用いて、操作の認証と認可を行うとの記述があります。
  - 先ほど取得したIntegration Tokenを用いて、リクエストができるようにしましょう。
- Notion-Version
  - ヘッダー情報にNotion-Versionをつけるのは必須のようです。詳しくは[こちら](https://developers.notion.com/reference/post-database-query)を参照
  - Versionの種類がNotion開発者ページにあります。
    - Versionの違いなどは見れていません。

```tsx
let headers = {
  'content-type': 'application/json; charset=UTF-8',
  Authorization: 'Bearer ' + token,
  'Notion-Version': '2021-08-16',
};
```

### options

- method
  - メソッドはPOSTを使うようです。（GETではないのはなぜなのか、、）

```tsx
let options = {
  method: 'post',
  headers: headers,
};
```

## HTTPリクエストの送信とログの出力

リクエストに必要な情報はそろったので、データを取得してログを出力します。

```tsx
let notion_data = UrlFetchApp.fetch(url, options);
notion_data = JSON.parse(notion_data);
Logger.log(notion_data);
```

### 簡単に説明

- UrlFetchApp
  - UrlFetchAppはGASの中の一つのクラスで、メソッドの一つとしてfetchがあります。
  - 詳しくは[リファレンス](<https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app?hl=ja#fetch(String,Object)>)を読んでみるのがよいと思います。
- JSON.parse
  - JSON形式の文字列をJavaScriptのオブジェクトに変換します。
- Logeer.log
  - JavaScriptでいうconsole.logです。
  - Loggerがクラスでlogがメソッドということになります。

# 全体のコード

全体のコードは以下のようになります。

```tsx
function getNotionData() {
  const database_id = '***********************';
  const url = 'https://api.notion.com/v1/databases/' + database_id + '/query';
  const token = '*****************';

  let headers = {
    'content-type': 'application/json; charset=UTF-8',
    Authorization: 'Bearer ' + token,
    'Notion-Version': '2021-08-16',
  };

  let options = {
    method: 'post',
    headers: headers,
  };

  let notion_data = UrlFetchApp.fetch(url, options);
  notion_data = JSON.parse(notion_data);
  Logger.log(notion_data);
}
```

# 実行！

こんな感じでログが出力されたのではないかと思います。

![キャプチャ5](/posts/post-2/Notion-and-GAS5.png)

# まとめ

今回はログまで出力しました。

スプレッドシートへの書き出しについては別記事でまとめようと思いますので、よろしければ参照ください。
