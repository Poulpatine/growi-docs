(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{478:function(_,t,e){_.exports=e.p+"assets/img/fileUpload1.ae3e2d56.png"},479:function(_,t,e){_.exports=e.p+"assets/img/fileUpload2.69019d4e.png"},756:function(_,t,e){"use strict";e.r(t);var v=e(48),a=Object(v.a)({},function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"ファイルアップロード設定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ファイルアップロード設定","aria-hidden":"true"}},[_._v("#")]),_._v(" ファイルアップロード設定")]),_._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#概要"}},[_._v("概要")])]),v("li",[v("a",{attrs:{href:"#添付ファイル保存先の指定"}},[_._v("添付ファイル保存先の指定")])]),v("li",[v("a",{attrs:{href:"#添付ファイルのサイズ制限"}},[_._v("添付ファイルのサイズ制限")])]),v("li",[v("a",{attrs:{href:"#添付ファイル参照方法"}},[_._v("添付ファイル参照方法")])])])]),v("p"),_._v(" "),v("h2",{attrs:{id:"概要"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[_._v("#")]),_._v(" 概要")]),_._v(" "),v("p",[_._v("GROWI ページへのファイルアップロードに関する設定について紹介します。")]),_._v(" "),v("h2",{attrs:{id:"添付ファイル保存先の指定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添付ファイル保存先の指定","aria-hidden":"true"}},[_._v("#")]),_._v(" 添付ファイル保存先の指定")]),_._v(" "),v("p",[_._v("GROWI ページの添付ファイルの保存先は以下を利用できます。詳細は"),v("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/app-settings.html#ファイルアップロード設定"}},[_._v("こちら")]),_._v("を参照してください。")],1),_._v(" "),v("ul",[v("li",[_._v("Amazon S3")]),_._v(" "),v("li",[_._v("Google Cloud Storage")]),_._v(" "),v("li",[_._v("MongoDB")]),_._v(" "),v("li",[_._v("ローカルファイルシステム")])]),_._v(" "),v("h3",{attrs:{id:"環境変数による添付ファイル保存先の固定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#環境変数による添付ファイル保存先の固定","aria-hidden":"true"}},[_._v("#")]),_._v(" 環境変数による添付ファイル保存先の固定")]),_._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),v("p",[_._v("ファイル保存先を途中で変更すると、これまでにアップロードしたファイル等へのアクセスができなくなりますのでご注意ください。")])]),_._v(" "),v("p",[_._v("添付ファイルの保存先を環境変数によって固定したい場合は、環境変数 "),v("code",[_._v("FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE")]),_._v(" を "),v("code",[_._v("true")]),_._v(" にし、以下の表を参考に環境変数 "),v("code",[_._v("FILE_UPLOAD")]),_._v(" の値を設定してください。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("保存先")]),_._v(" "),v("th",[v("code",[_._v("FILE_UPLOAD")])])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("Amazon S3")]),_._v(" "),v("td",[v("code",[_._v("aws")])])]),_._v(" "),v("tr",[v("td",[_._v("Google Cloud Storage")]),_._v(" "),v("td",[v("code",[_._v("gcs")])])]),_._v(" "),v("tr",[v("td",[_._v("MongoDB")]),_._v(" "),v("td",[v("code",[_._v("mongodb")])])]),_._v(" "),v("tr",[v("td",[_._v("ローカルファイルシステム")]),_._v(" "),v("td",[v("code",[_._v("local")])])])])]),_._v(" "),v("p",[_._v("環境変数 "),v("code",[_._v("FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE")]),_._v(" によって保存先が固定されている場合、管理画面での保存先選択機能は無効となります。")]),_._v(" "),v("h3",{attrs:{id:"環境変数による-google-cloud-storage-設定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#環境変数による-google-cloud-storage-設定","aria-hidden":"true"}},[_._v("#")]),_._v(" 環境変数による Google Cloud Storage 設定")]),_._v(" "),v("p",[_._v("ファイルアップロード設定内の GCS 設定のフォームで値を指定していない場合は、以下のデフォルト値を利用します。")]),_._v(" "),v("ul",[v("li",[_._v("Api Key Json Path: "),v("code",[_._v("GCS_API_KEY_JSON_PATH")])]),_._v(" "),v("li",[_._v("バケット名: "),v("code",[_._v("GCS_BUCKET")])]),_._v(" "),v("li",[_._v("Name Space: "),v("code",[_._v("GCS_UPLOAD_NAMESPACE")])])]),_._v(" "),v("h4",{attrs:{id:"環境変数による-gcs-設定の固定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#環境変数による-gcs-設定の固定","aria-hidden":"true"}},[_._v("#")]),_._v(" 環境変数による GCS 設定の固定")]),_._v(" "),v("p",[_._v("GCS 設定を環境変数によって固定したい場合は、環境変数 "),v("code",[_._v("GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")]),_._v(" を "),v("code",[_._v("true")]),_._v(" にし、上記の環境変数に値を入れてください。未設定の場合は、null が入ります。")]),_._v(" "),v("p",[_._v("環境変数 "),v("code",[_._v("GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")]),_._v(" による GCS 設定の固定が有効な場合、ファイルアップロード設定での GCS 設定のフォームの値は無効となり、変更もできなくなります。")]),_._v(" "),v("h2",{attrs:{id:"添付ファイルのサイズ制限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添付ファイルのサイズ制限","aria-hidden":"true"}},[_._v("#")]),_._v(" 添付ファイルのサイズ制限")]),_._v(" "),v("p",[_._v("以下の環境変数により、一度にアップロードできるファイルのサイズ上限と全ページに添付されているファイルの累計サイズの上限を設定することができます。いずれも単位は "),v("code",[_._v("bytes")]),_._v(" です。デフォルトではいずれの値も "),v("code",[_._v("Infinity")]),_._v(" となっており、ファイルサイズは制限されません。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("MAX_FILE_SIZE")]),_._v(" : [アップロード可能なファイルのサイズ上限(bytes)]")]),_._v(" "),v("li",[v("code",[_._v("FILE_UPLOAD_TOTAL_LIMIT")]),_._v(" : [アップロードされたファイルの累計サイズ上限(bytes)]")])]),_._v(" "),v("h2",{attrs:{id:"添付ファイル参照方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添付ファイル参照方法","aria-hidden":"true"}},[_._v("#")]),_._v(" 添付ファイル参照方法")]),_._v(" "),v("p",[_._v("v4.2.3 より 添付ファイル参照方法に変更が加わりました。")]),_._v(" "),v("p",[_._v("Amazon S3, Google Cloud Storage を利用する場合、下記の2種類の方法から選択できます。"),v("br"),_._v("\nなお、v4.2.3 以降はデフォルトが Redirect Mode になります。")]),_._v(" "),v("p",[_._v("完全なセキュリティーが必要な場合のみ、"),v("br"),_._v(" "),v("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/app-settings.html#ファイルアップロード設定"}},[_._v("管理画面のアプリ設定")]),_._v("から\nRelay Mode に変更してください。")],1),_._v(" "),v("h3",{attrs:{id:"relay-mode-オプショナル-v4-2-2-以前のデフォルト仕様"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#relay-mode-オプショナル-v4-2-2-以前のデフォルト仕様","aria-hidden":"true"}},[_._v("#")]),_._v(" Relay Mode (オプショナル / v4.2.2 以前のデフォルト仕様)")]),_._v(" "),v("p",[v("img",{attrs:{src:e(478),alt:"fileUpload1"}})]),_._v(" "),v("p",[_._v("Relay Mode では GROWI サーバーが Cloud Service との通信を中継し、クライアントにデータをリレー配信します。")]),_._v(" "),v("p",[_._v("クライアントは GROWI サーバーとの通信しか行わないため、"),v("br"),_._v("\nファイル参照に関してはセキュリティー的には最も安全な手段となります。")]),_._v(" "),v("p",[_._v("ただしリレーの特性上、画像の数や容量、リクエスト数に応じて GROWI サーバーと Cloud Service との間のトラフィックが増大するというデメリットがあります。")]),_._v(" "),v("h3",{attrs:{id:"redirect-mode-v4-2-3-以降のデフォルト仕様"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redirect-mode-v4-2-3-以降のデフォルト仕様","aria-hidden":"true"}},[_._v("#")]),_._v(" Redirect Mode (v4.2.3 以降のデフォルト仕様)")]),_._v(" "),v("p",[v("img",{attrs:{src:e(479),alt:"fileUpload2"}})]),_._v(" "),v("p",[_._v("Redirect Mode では Cloud Service にファイル参照用の署名付きURLの発行を依頼し、"),v("br"),_._v("\nそれをクライアントに知らせ、リダイレクトを促します。")]),_._v(" "),v("p",[_._v("クライアントは受け取った署名付きURLにアクセスし、Cloud Service から画像を直接取得します。")]),_._v(" "),v("p",[_._v("GROWI サーバーがトラフィックの中継を行うことなくクライアントそれぞれが直接 Cloud Service から画像を受け取るので、\n画像の数や容量、リクエスト数によって GROWI サーバーに負荷がかかることがなく、全体的に優れたパフォーマンスを発揮できる設定です。")]),_._v(" "),v("p",[_._v("また署名付きURLの発行時は十分に短い失効期間が設定されるため、セキュリティ上もバランスの取れた仕様となっています。")]),_._v(" "),v("p",[_._v("GROWI サーバーは失効期間と同じ長さだけ署名付きURLをキャッシュします(デフォルトでは120秒)。"),v("br"),_._v("\nキャッシュを保持する秒数は"),v("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/env-vars.html"}},[_._v("環境変数")]),_._v("で設定できます。")],1),_._v(" "),v("ul",[v("li",[_._v("AWS(S3)\n"),v("ul",[v("li",[v("code",[_._v("S3_LIFETIME_SEC_FOR_TEMPORARY_URL")])])])]),_._v(" "),v("li",[_._v("GCP(GCS)\n"),v("ul",[v("li",[v("code",[_._v("GCS_LIFETIME_SEC_FOR_TEMPORARY_URL")])])])])])])},[],!1,null,null,null);t.default=a.exports}}]);