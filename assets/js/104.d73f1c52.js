(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{684:function(t,e,s){"use strict";s.r(e);var a=s(48),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"upgrading-growi-to-v3-5-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-growi-to-v3-5-x","aria-hidden":"true"}},[t._v("#")]),t._v(" Upgrading GROWI to v3.5.x")]),t._v(" "),s("p",[t._v("GROWI v3.5 no longer supports Plugins that have schema version 2, newly supports Plugins that have schema version 3.")]),t._v(" "),s("p",[t._v("Addition, v3.5 no longer supports following features:")]),t._v(" "),s("ul",[s("li",[t._v("Basic Authentication")]),t._v(" "),s("li",[t._v("Crowi Classic Authentication")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://medium.com/crowi-book/crowi-v1-5-0-5a62e7c6be90",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crowi Template syntax"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Systems that is launched by "),s("a",{attrs:{href:"https://hub.docker.com/r/weseek/growi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the official docker image"),s("OutboundLink")],1),t._v(" will not be affected")])]),t._v(" "),s("p",[t._v("Upgrade the official plugins "),s("a",{attrs:{href:"https://github.com/weseek/growi-plugin-lsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("weseek/growi-plugin-lsx"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/weseek/growi-plugin-pukiwiki-like-linker",target:"_blank",rel:"noopener noreferrer"}},[t._v("weseek/growi-plugin-pukiwiki-like-linker\n"),s("OutboundLink")],1),t._v(" to the latest version that are released with schema version 3.")]),t._v(" "),s("h3",{attrs:{id:"upgrade-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Upgrade Plugins")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("yarn upgrade growi-plugin-lsx --latest\nyarn upgrade growi-plugin-pukiwiki-like-linker --latest\n")])])]),s("h2",{attrs:{id:"basic-authentication-discontinued"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-authentication-discontinued","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic Authentication Discontinued")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Systems that do not have Basic Authentication (GROWI admin page) set will not be affected")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("After upgrading, systems that have Basic Authentication (GROWI admin page) set will NOT be protected by Basic Authentication")])]),t._v(" "),s("h3",{attrs:{id:"check-before-upgrading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-before-upgrading","aria-hidden":"true"}},[t._v("#")]),t._v(" Check before Upgrading")]),t._v(" "),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Whether Basic Authentication on the GROWI admin (security settings) page is set")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(' What setting "Guest users access" on the GROWI admin (security settings) page is set to\n'),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(' If "Guest users access" is set to "View only", check the confidentiality of pre-existing pages.')])])])]),t._v(" "),s("h3",{attrs:{id:"alternative-means"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alternative-means","aria-hidden":"true"}},[t._v("#")]),t._v(" Alternative Means")]),t._v(" "),s("ul",[s("li",[t._v("If Basic Authentication is required, consider setting up a reverse proxy with Apache or nginx.")])]),t._v(" "),s("h2",{attrs:{id:"crowi-classic-authentication-discontinued"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crowi-classic-authentication-discontinued","aria-hidden":"true"}},[t._v("#")]),t._v(" Crowi Classic Authentication Discontinued")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Systems using the Passport Authentication mechanism will not be affected")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("For systems using the Crowi Classic Authentication mechanism, the users' Google OAuth Authentication link settings will be disabled")])]),t._v(" "),s("h3",{attrs:{id:"affects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#affects","aria-hidden":"true"}},[t._v("#")]),t._v(" Affects")]),t._v(" "),s("ul",[s("li",[t._v("As default, GROWI v3.5.x or above will automatically use the Passport Authentication mechanism")]),t._v(" "),s("li",[t._v("Users that login with username/E-mail and password will be able to do so as usual")]),t._v(" "),s("li",[t._v("Google OAuth Authentication links will be disabled\n"),s("ul",[s("li",[t._v("Users who forgot their username/E-mail and password will not be able to login")])])])]),t._v(" "),s("h3",{attrs:{id:"check-before-upgrading-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-before-upgrading-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Check before Upgrading")]),t._v(" "),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Whether there are no users using Google OAuth to login\n"),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Among the users that do, whether they remember their username/E-mail and password\n"),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Among the users that forgot, reissue a new password and check whether they can login")])])])])]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Before upgrading to versions beyond v3.5, whether a period of time can be prepared to switch to the Passport Authentication mechanism")])]),t._v(" "),s("h3",{attrs:{id:"alternative-means-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alternative-means-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Alternative Means")]),t._v(" "),s("ul",[s("li",[t._v("After switching to the Passport Authentication mechanism, newly set up Google OAuth on the admin (security settings) page")])]),t._v(" "),s("h2",{attrs:{id:"crowi-template-syntax-discontinued"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crowi-template-syntax-discontinued","aria-hidden":"true"}},[t._v("#")]),t._v(" Crowi Template syntax Discontinued")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Crowi Template syntax will not be processed anymore")])]),t._v(" "),s("h3",{attrs:{id:"check-before-upgrading-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-before-upgrading-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Check before Upgrading")]),t._v(" "),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Whether there are no users using Crowi Template syntax")])]),t._v(" "),s("h3",{attrs:{id:"alternative-means-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alternative-means-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Alternative Means")]),t._v(" "),s("ul",[s("li",[t._v('Consider whether usage of the "Identical Layer Template" "Lower Layer Template" features (GROWI provides) are alternatives')])])])},[],!1,null,null,null);e.default=i.exports}}]);