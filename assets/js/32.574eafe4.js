(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{259:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("模块是异步的，并且具有导入和导出的功能，并且这些模块也在顶层表示。实际的含义是，如果您想提供一个依赖于某些异步任务的模块来执行某项操作，那么您实际上没有好的选择")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("在顶层等待的情况下，下一个代码将按您期望的方式在模块中工作")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("这允许模块使用运行时值来确定依赖性。")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("ul",[a("li",[t._v("原文 "),a("a",{attrs:{href:"https://medium.com/javascript-in-plain-english/javascript-top-level-await-in-a-nutshell-4e352b3fc8c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("How the new ‘Top Level Await’ feature works in JavaScript"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("作者 "),a("a",{attrs:{href:"https://medium.com/@kesk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kesk noren"),a("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以前，为了使用 "),s("code",[this._v("await")]),this._v(" ，代码必须位于标记为异步的函数中。这意味着您不能在任何函数符号之外使用 "),s("code",[this._v("await")]),this._v(" 。 "),s("code",[this._v("Top Level Await")]),this._v(" 可以使模块像异步函数一样工作。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("Top Level Await")]),t._v(" 可以解决此问题，并使开发人员可以在异步函数之外使用 "),a("code",[t._v("await")]),t._v(" 关键字。使用 "),a("code",[t._v("Top Level Await")]),t._v(" ，"),a("code",[t._v("ECMAScript")]),t._v(" 模块可以等待资源，从而使其他导入资源的模块在开始评估其主体之前等待，而且如果模块加载失败或用作加载第一个模块，也可以将加载好的依赖项回退资源下载。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("注意：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("顶层等待仅在顶层模块上起作用。不支持经典脚本或非异步功能。")]),this._v(" "),s("li",[this._v("截至撰写本文时（2020年2月23日）"),s("code",[this._v("ECMAScript")]),this._v(" 为第三阶段。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-模块加载失败时使用回调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-模块加载失败时使用回调"}},[this._v("#")]),this._v(" 1. 模块加载失败时使用回调")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以下示例尝试从 "),s("code",[this._v("first.com")]),this._v(" 加载 "),s("code",[this._v("JavaScript")]),this._v(" 模块，如果失败则使用回调：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//module.mjs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://first.com/libs.com/module1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://second.com/libs/module1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-使用加载速度最快的资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用加载速度最快的资源"}},[this._v("#")]),this._v(" 2. 使用加载速度最快的资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此处 "),s("code",[this._v("res")]),this._v(" 变量通过首先完成的下载来初始化")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//module.mjs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resPromises "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("    \n    donwloadFromResource1Site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    donwloadFromResource2Site\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resPromises"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-初始化资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化资源"}},[this._v("#")]),this._v(" 3. 初始化资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("顶层等待允许你可以在模块中等待 "),s("code",[this._v("promises")]),this._v(" ，就像将它们包装在异步函数中一样。例如，初始化应用程序：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//module.mjs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dbConnector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dbUtils.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//connect() return a promise.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" dbConnector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-动态加载模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-动态加载模块"}},[this._v("#")]),this._v(" 4. 动态加载模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//module.mjs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLSearchParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lang "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lang'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("./messages-")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".mjs")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-控制台中，在异步函数之外使用await"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-控制台中，在异步函数之外使用await"}},[this._v("#")]),this._v(" 5. 控制台中，在异步函数之外使用await")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在使用 "),a("code",[t._v("async / await")]),t._v(" 之前，尝试在 "),a("code",[t._v("async")]),t._v(" 函数之外使用 "),a("code",[t._v("await")]),t._v(" 会导致: "),a("code",[t._v("“ SyntaxError: await is only valid in async function” Now, you can use it without it being inside in an async function.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这已在 "),s("code",[this._v("chrome 80")]),this._v(" 和 "),s("code",[this._v("firefox 72.0.2 DevTools")]),this._v(" 中进行了测试。但是，此功能是非标准功能，无法在 "),s("code",[this._v("nodejs")]),this._v(" 中使用。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" helloPromise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" helloPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5 seconds later...:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Hello world!")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"implementations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementations"}},[this._v("#")]),this._v(" Implementations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("V8 with flag: — — harmony-top-level-await")]),this._v(" "),s("li",[this._v("Webpack (experimental support in 5.0.0)")]),this._v(" "),s("li",[this._v("Parser support has been added to Babel (babel/plugin-syntax-top-level-await).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("https://github.com/bmeck/top-level-await-talking/")]),this._v(" "),s("li",[this._v("https://github.com/tc39/proposal-top-level-await#use-cases")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"感谢阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#感谢阅读"}},[this._v("#")]),this._v(" 感谢阅读")])}],!1,null,null,null);s.default=n.exports}}]);