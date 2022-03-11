(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{1082:function(s,a,t){"use strict";t.r(a);var e=t(35),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Convert value to string")]),s._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" into string "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".args "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])])]),t("h2",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),t("ul",[t("li",[s._v("...args: column paths to convert to string (for table input)")])]),s._v(" "),t("h2",{attrs:{id:"flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[s._v("#")]),s._v(" Flags")]),s._v(" "),t("ul",[t("li",[s._v("-h, --help: Display this help message")]),s._v(" "),t("li",[s._v("-d, --decimals "),t("integer",[s._v(": decimal digits to which to round")])],1)]),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("p",[s._v("convert decimal to string and round to nearest integer")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" into string -d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("convert decimal to string")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" into string\n")])])]),t("p",[s._v("convert string to string")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" into string\n")])])]),t("p",[s._v("convert boolean to string")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" into string\n")])])]),t("p",[s._v("convert date to string")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" now "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" into string\n")])])]),t("p",[s._v("convert filepath to string")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" Cargo.toml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" into string\n")])])]),t("p",[s._v("convert filesize to string")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" Cargo.toml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" into string\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);