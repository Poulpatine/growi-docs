(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{331:function(t,a,s){},643:function(t,a,s){"use strict";var e=s(331);s.n(e).a},649:function(t,a,s){"use strict";s.r(a);var e=s(344),n={components:{Page:s(345).a,Navbar:e.a},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}}},o=(s(643),s(48)),i=Object(o.a)(n,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"theme-container fluid",class:this.pageClasses},[this.shouldShowNavbar?a("Navbar"):this._e(),this._v(" "),a("Page",[this._t("page-top",null,{slot:"top"}),this._v(" "),this._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null);a.default=i.exports}}]);