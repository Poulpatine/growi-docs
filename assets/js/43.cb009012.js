(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{525:function(a,t,i){a.exports=i.p+"assets/img/slack1.ba45ed83.png"},526:function(a,t,i){a.exports=i.p+"assets/img/slack2.29984604.png"},781:function(a,t,i){"use strict";i.r(t);var r=i(48),e=Object(r.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"slack-mattermost-への通知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slack-mattermost-への通知","aria-hidden":"true"}},[a._v("#")]),a._v(" Slack/Mattermost への通知")]),a._v(" "),r("h2",{attrs:{id:"概要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),r("p",[a._v("GROWI では、 Incoming Webhook を利用した Slack 通知が可能です。"),r("br"),a._v("\n1つの GROWI につき 1つのワークスペースを登録でき、ワークスペースに属する全てのチャンネルに通知できます。")]),a._v(" "),r("h2",{attrs:{id:"slack-configuration-設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slack-configuration-設定","aria-hidden":"true"}},[a._v("#")]),a._v(" Slack Configuration 設定")]),a._v(" "),r("p",[a._v("通知を行う Slack ワークスペースを設定します。")]),a._v(" "),r("ol",[r("li",[a._v("管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。")]),a._v(" "),r("li",[a._v("Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。")])]),a._v(" "),r("ul",[r("li",[r("p",[r("strong",[a._v("Wrbhook URL")]),r("br"),a._v(" "),r("a",{attrs:{href:"https://itizawa.slack.com/apps/new/A0F7XDUAZ--incoming-webhook-",target:"_blank",rel:"noopener noreferrer"}},[a._v("Incoming Webhooks"),r("OutboundLink")],1),a._v(" で取得できます。")])]),a._v(" "),r("li",[r("p",[r("strong",[a._v("Slack アプリより Incoming Webhook を優先する")]),r("br"),a._v("\nこのオプションをオンにすると、 Slack App が有効になっていても GROWI は Incoming Webhook を使用します。")])])]),a._v(" "),r("h3",{attrs:{id:"設定が反映されているかの確認"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#設定が反映されているかの確認","aria-hidden":"true"}},[a._v("#")]),a._v(" 設定が反映されているかの確認")]),a._v(" "),r("p",[a._v("上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。")]),a._v(" "),r("p",[r("img",{attrs:{src:i(525),alt:"slack1"}})]),a._v(" "),r("p",[a._v("ページの保存・更新時に 入力したチャンネルに Slack 通知が届きます。"),r("br"),a._v("\nこの方法で通知を行うことを GROWI では "),r("strong",[a._v("User Trigger Notification")]),a._v(" といいます。")]),a._v(" "),r("h2",{attrs:{id:"user-trigger-notification-設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-trigger-notification-設定","aria-hidden":"true"}},[a._v("#")]),a._v(" User Trigger Notification 設定")]),a._v(" "),r("p",[a._v("通常、通知先のチャンネルを通知する度に入力する必要がありますが、\nデフォルトパターンを設定することで入力を省くことが可能です。")]),a._v(" "),r("h3",{attrs:{id:"デフォルトパターンの設定方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#デフォルトパターンの設定方法","aria-hidden":"true"}},[a._v("#")]),a._v(" デフォルトパターンの設定方法")]),a._v(" "),r("ol",[r("li",[a._v("管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。")]),a._v(" "),r("li",[a._v("User Trigger Notification のタブを開きます。")]),a._v(" "),r("li",[a._v("パターンとチャンネル名を入力します。")])]),a._v(" "),r("ul",[r("li",[a._v("設定値を表示するパスをパターンといいます。例えば "),r("code",[a._v("/event/*")]),a._v(" と設定した場合 event 配下のページのみに設定したデフォルトパターンが表示されます。")]),a._v(" "),r("li",[a._v("全てのページにデフォルトパターン表示したい場合は "),r("code",[a._v("/*")]),a._v(" と入力してください。")])]),a._v(" "),r("h3",{attrs:{id:"デフォルトパターン設定が反映されているかの確認"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#デフォルトパターン設定が反映されているかの確認","aria-hidden":"true"}},[a._v("#")]),a._v(" デフォルトパターン設定が反映されているかの確認")]),a._v(" "),r("p",[a._v("例えば、パターンを "),r("code",[a._v("/event/*")]),a._v(" チャンネルを "),r("code",[a._v("general")]),a._v(" と設定した場合、"),r("br"),a._v(" "),r("code",[a._v("/event/忘年会のお知らせ")]),a._v("というパスのページを作成すると Slack 通知フォームに "),r("code",[a._v("general")]),a._v(" が設定された状態で編集モードに遷移します。")]),a._v(" "),r("p",[r("img",{attrs:{src:i(526),alt:"slack2"}})]),a._v(" "),r("p",[a._v("チェックボックスを有効にした状態でページを更新した場合、 "),r("code",[a._v("general")]),a._v(" チャンネルに Slack 通知が届きます。")]),a._v(" "),r("h2",{attrs:{id:"global-notification-設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#global-notification-設定","aria-hidden":"true"}},[a._v("#")]),a._v(" Global Notification 設定")]),a._v(" "),r("p",[a._v("Wiki 利用者が所定のアクションをしたタイミングで発信される Slack 通知を設定できます。")]),a._v(" "),r("h3",{attrs:{id:"global-notification-の設定方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#global-notification-の設定方法","aria-hidden":"true"}},[a._v("#")]),a._v(" Global Notification の設定方法")]),a._v(" "),r("ol",[r("li",[a._v("管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。")]),a._v(" "),r("li",[a._v("Global Notification のタブを開きます。")]),a._v(" "),r("li",[a._v("通知設定の一覧の右側にある通知設定の追加ボタンを押します。")]),a._v(" "),r("li",[a._v("通知詳細設定で各種設定を行います。")])]),a._v(" "),r("ul",[r("li",[a._v("通知機構はトリガーパスで起きるイベントを感知します。"),r("br"),a._v("\n例えば "),r("code",[a._v("/event/*")]),a._v(" と設定した場合、"),r("code",[a._v("/event")]),a._v(" 配下のページで Global Notification が有効になります。")])]),a._v(" "),r("h3",{attrs:{id:"通知の有効-無効"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通知の有効-無効","aria-hidden":"true"}},[a._v("#")]),a._v(" 通知の有効 / 無効")]),a._v(" "),r("p",[a._v("Global Notification は通常 public なページ内のイベントのみ通知が届きます。")]),a._v(" "),r("p",[a._v("チェックボックスを有効にすることで以下のページ内のイベントを感知するようになります。")]),a._v(" "),r("ul",[r("li",[a._v("'自分のみ'に閲覧制限をしているページ")]),a._v(" "),r("li",[a._v("'特定グループにのみ'に閲覧制限をしているページ")])]),a._v(" "),r("p",[a._v("linkを知っている人のみ閲覧できるページは設定に関わらず常に通知されません。")])])},[],!1,null,null,null);t.default=e.exports}}]);