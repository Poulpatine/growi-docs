(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{803:function(t,e,a){"use strict";a.r(e);var v=a(48),s=Object(v.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"旧版-起動"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版-起動","aria-hidden":"true"}},[t._v("#")]),t._v(" (旧版) 起動")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("このページで紹介している開発スタートアップは"),a("strong",[t._v("旧版")]),t._v("です。"),a("br"),t._v("\nホストOSで node をセットアップし、実行します。")]),t._v(" "),a("p",[t._v("より快適な開発を行うには、Dev in Container を採用した "),a("RouterLink",{attrs:{to:"/ja/dev/startup-v2/dev-env.html"}},[t._v("開発スタートアップ v2")]),t._v(" を利用してください。")],1)]),t._v(" "),a("h2",{attrs:{id:"初回起動"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初回起動","aria-hidden":"true"}},[t._v("#")]),t._v(" 初回起動")]),t._v(" "),a("h3",{attrs:{id:"リポジトリの-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#リポジトリの-clone","aria-hidden":"true"}},[t._v("#")]),t._v(" リポジトリの clone")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/weseek/growi.git\n")])])]),a("h3",{attrs:{id:"実行環境のバージョンの確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#実行環境のバージョンの確認","aria-hidden":"true"}},[t._v("#")]),t._v(" 実行環境のバージョンの確認")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ja/dev/startup-v1/dev-env.html#バージョンの確認"}},[t._v("開発環境の構築#バージョンの確認")]),t._v(" を参照")],1),t._v(" "),a("h3",{attrs:{id:"開発用データストアの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#開発用データストアの準備","aria-hidden":"true"}},[t._v("#")]),t._v(" 開発用データストアの準備")]),t._v(" "),a("p",[t._v("Docker 利用可能な環境で以下を実行")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Windows の場合は "),a("RouterLink",{attrs:{to:"/ja/dev/startup-v1/dev-env.html#開発環境の依存インフラの準備"}},[t._v("開発環境の構築#開発環境の依存インフラの準備")]),t._v(" で準備した Linux マシンの中で実行する")],1),t._v(" "),a("p",[t._v("docker-compose コマンドがない場合はインストールしよう"),a("br"),t._v(" "),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker docs公式ページ　Install Docker Compose"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/weseek/growi-docker-compose.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" growi-docker-compose\ndocker-compose -f docker-compose.dev.yml up\n")])])]),a("p",[t._v("以下のコンテナ群が起動します")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Product")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Port")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Desc")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("27017")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ElasticSearch")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/mobz/elasticsearch-head",target:"_blank",rel:"noopener noreferrer"}},[t._v("elasticsearch-head"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9100")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A web front end for an Elasticsearch cluster")])])])]),t._v(" "),a("h3",{attrs:{id:"依存ライブラリの取得"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依存ライブラリの取得","aria-hidden":"true"}},[t._v("#")]),t._v(" 依存ライブラリの取得")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("code",[t._v("npm install")]),t._v(" は利用しないでください")])]),t._v(" "),a("h3",{attrs:{id:"データマイグレーション"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#データマイグレーション","aria-hidden":"true"}},[t._v("#")]),t._v(" データマイグレーション")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run migrate\n")])])]),a("h3",{attrs:{id:"フロントエンド・バックエンドサーバーの起動"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#フロントエンド・バックエンドサーバーの起動","aria-hidden":"true"}},[t._v("#")]),t._v(" フロントエンド・バックエンドサーバーの起動")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("yarn build")]),t._v(" "),a("ol",[a("li",[t._v("クライアントをビルドし、webpack-dev-server を起動します")]),t._v(" "),a("li",[t._v("クライアント用ファイル群の変更を検知し、リビルドします")])])]),t._v(" "),a("li",[a("code",[t._v("yarn server")]),t._v(" "),a("ol",[a("li",[t._v("Express サーバーを起動します")]),t._v(" "),a("li",[t._v("サーバー用ファイル群の変更を検知し、Express サーバーをリスタートします")])])])]),t._v(" "),a("p",[t._v("それぞれ、"),a("code",[t._v("Ctrl-C")]),t._v("で終了することが出来ます。")]),t._v(" "),a("h2",{attrs:{id:"_2回目以降の起動"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2回目以降の起動","aria-hidden":"true"}},[t._v("#")]),t._v(" 2回目以降の起動")]),t._v(" "),a("p",[t._v("上記の "),a("a",{attrs:{href:"#%E5%88%9D%E5%9B%9E%E8%B5%B7%E5%8B%95"}},[t._v("初回起動")]),t._v(" のセクションを参考に、以下を実行")]),t._v(" "),a("ol",[a("li",[t._v("実行環境のバージョンの確認")]),t._v(" "),a("li",[t._v("開発用データストアの準備")]),t._v(" "),a("li",[t._v("依存ライブラリの取得")]),t._v(" "),a("li",[t._v("データマイグレーション")]),t._v(" "),a("li",[t._v("フロントエンド・バックエンドサーバーの起動")])]),t._v(" "),a("h2",{attrs:{id:"npm-コマンドリスト"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-コマンドリスト","aria-hidden":"true"}},[t._v("#")]),t._v(" npm コマンドリスト")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("command")]),t._v(" "),a("th",[t._v("詳細")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("build")])]),t._v(" "),a("td",[a("code",[t._v("build:dev:watch")]),t._v(" を実行します")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("build:dev")])]),t._v(" "),a("td",[t._v("開発用にクライアントのビルドを行います（自動で再ビルドしない）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("build:dev:watch")])]),t._v(" "),a("td",[t._v("開発用にクライアントのビルドを行います（変更時に自動で再ビルドします）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("build:prod")])]),t._v(" "),a("td",[t._v("プロダクション用にクライアントのビルドを行います")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server")])]),t._v(" "),a("td",[a("code",[t._v("server:dev:watch")]),t._v(" を実行します")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server:dev")])]),t._v(" "),a("td",[t._v("開発用にサーバーを起動します")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server:dev:watch")])]),t._v(" "),a("td",[t._v("ファイルを監視して変更時に自動で再起動します")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server:prod")])]),t._v(" "),a("td",[t._v("プロダクション用にサーバーを起動します")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("start")])]),t._v(" "),a("td",[a("code",[t._v("build:prod")]),t._v(" と "),a("code",[t._v("server:prod")]),t._v(" を実行します")])])])])])},[],!1,null,null,null);e.default=s.exports}}]);