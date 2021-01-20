(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{811:function(t,a,r){"use strict";r.r(a);var e=r(48),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"logger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#logger","aria-hidden":"true"}},[t._v("#")]),t._v(" Logger")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("GROWI は "),r("a",{attrs:{href:"https://github.com/trentm/node-bunyan",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bunyan"),r("OutboundLink")],1),t._v(" および "),r("a",{attrs:{href:"https://github.com/philmander/browser-bunyan",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-bunyan"),r("OutboundLink")],1),t._v(" を利用しています。")]),t._v(" "),r("p",[t._v("また、古いコードでは "),r("a",{attrs:{href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("debug"),r("OutboundLink")],1),t._v(" を利用してログを出力していますが、 "),r("code",[t._v("debug()")]),t._v(" は Bunyan の "),r("code",[t._v("logger.debug()")]),t._v(" に置き換えられます。")])]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#ログレベル"}},[t._v("ログレベル")])]),r("li",[r("a",{attrs:{href:"#ログの記録"}},[t._v("ログの記録")])]),r("li",[r("a",{attrs:{href:"#ログの出力設定の変更"}},[t._v("ログの出力設定の変更")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"ログレベル"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ログレベル","aria-hidden":"true"}},[t._v("#")]),t._v(" ログレベル")]),t._v(" "),r("p",[t._v("ログレベルの定義は "),r("a",{attrs:{href:"https://github.com/trentm/node-bunyan#levels",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bunyan#Levels"),r("OutboundLink")],1),t._v(" を参照してください")]),t._v(" "),r("p",[t._v("デフォルトでは環境毎に以下のログレベルが設定されています。")]),t._v(" "),r("ul",[r("li",[t._v("Development\n"),r("ul",[r("li",[r("code",[t._v("info")])])])]),t._v(" "),r("li",[t._v("Production\n"),r("ul",[r("li",[r("code",[t._v("info")])])])])]),t._v(" "),r("h2",{attrs:{id:"ログの記録"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ログの記録","aria-hidden":"true"}},[t._v("#")]),t._v(" ログの記録")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/trentm/node-bunyan#log-method-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bunyan#Log Method API"),r("OutboundLink")],1),t._v(" を参照してください。")]),t._v(" "),r("h2",{attrs:{id:"ログの出力設定の変更"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ログの出力設定の変更","aria-hidden":"true"}},[t._v("#")]),t._v(" ログの出力設定の変更")]),t._v(" "),r("p",[t._v("以下の2つの方法でログの出力設定を行う事ができます。")]),t._v(" "),r("h3",{attrs:{id:"環境毎の設定ファイルを編集する"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#環境毎の設定ファイルを編集する","aria-hidden":"true"}},[t._v("#")]),t._v(" 環境毎の設定ファイルを編集する")]),t._v(" "),r("ul",[r("li",[t._v("Development\n"),r("ul",[r("li",[r("code",[t._v("config/logger/config.dev.js")])])])]),t._v(" "),r("li",[t._v("Production\n"),r("ul",[r("li",[r("code",[t._v("config/logger/config.prod.js")])])])])]),t._v(" "),r("h4",{attrs:{id:"設定ルール"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#設定ルール","aria-hidden":"true"}},[t._v("#")]),t._v(" 設定ルール")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("${ログネームスペース}: '${ログレベル}',")]),t._v(" の形式で列挙してください"),r("br"),t._v("\ne.g."),r("div",{staticClass:"language-javascript extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("br"),r("br"),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[t._v("module"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'growi:crowi'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'growi:routes:login-passport'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),r("li",[t._v("デフォルトのログレベルは、キー "),r("code",[t._v("default")]),t._v(" で変更することができます")])]),t._v(" "),r("h3",{attrs:{id:"環境変数で設定する"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#環境変数で設定する","aria-hidden":"true"}},[t._v("#")]),t._v(" 環境変数で設定する")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("環境変数による設定は、上記の設定ファイルの設定を上書きします")])]),t._v(" "),r("h4",{attrs:{id:"設定ルール-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#設定ルール-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 設定ルール")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("${ログレベルの大文字表現}=${ログネームスペース1},${ログネームスペース2}, ...")])])]),t._v(" "),r("p",[t._v("e.g.")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("DEBUG"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("growi:crowi,growi:routes:login-passport\nWARN"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("growi:crowi:express-init\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);