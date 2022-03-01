(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1044:function(s,a,n){"use strict";n.r(a);var e=n(56),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"group-by"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[s._v("#")]),s._v(" group-by")]),s._v(" "),n("p",[s._v("This command creates a new table with the data from the table rows grouped by the column given.")]),s._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),n("p",[s._v("Let's say we have this table of all countries in the world sorted by their population:")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" countries_by_population.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" first "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n━━━┯━━━━━━┯━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━┯━━━━━━━━\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ rank │ country or area │ UN continental region │ UN statistical region │ population 2018 │ population 2019 │ change")]),s._v("\n───┼──────┼─────────────────┼───────────────────────┼───────────────────────┼─────────────────┼─────────────────┼────────\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    │ China           │ Asia                  │ Eastern Asia          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,427")]),s._v(",647,786   │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,433")]),s._v(",783,686   │ +0.4%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    │ India           │ Asia                  │ Southern Asia         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,352")]),s._v(",642,280   │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,366")]),s._v(",417,754   │ +1.0%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("    │ United States   │ Americas              │ Northern America      │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("327,096")]),s._v(",265     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("329,064")]),s._v(",917     │ +0.6%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("    │ Indonesia       │ Asia                  │ South-eastern Asia    │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("267,670")]),s._v(",543     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("270,625")]),s._v(",568     │ +1.1%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("    │ Pakistan        │ Asia                  │ Southern Asia         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("212,228")]),s._v(",286     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("216,565")]),s._v(",318     │ +2.0%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("    │ Brazil          │ Americas              │ South America         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("209,469")]),s._v(",323     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("211,049")]),s._v(",527     │ +0.8%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("    │ Nigeria         │ Africa                │ Western Africa        │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("195,874")]),s._v(",683     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200,963")]),s._v(",599     │ +2.6%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("    │ Bangladesh      │ Asia                  │ Southern Asia         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("161,376")]),s._v(",708     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("163,046")]),s._v(",161     │ +1.0%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("    │ Russia          │ Europe                │ Eastern Europe        │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145,734")]),s._v(",038     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("145,872")]),s._v(",256     │ +0.1%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("   │ Mexico          │ Americas              │ Central America       │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("126,190")]),s._v(",788     │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127,575")]),s._v(",529     │ +1.1%\n━━━┷━━━━━━┷━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━┷━━━━━━━━\n")])])]),n("p",[s._v("Here we have listed only the first 10 lines. In total this table has got 233 rows which is to big to get information easily out of it.")]),s._v(" "),n("p",[s._v("We can use the "),n("code",[s._v("group-by")]),s._v(" command on 'UN statistical region' to create a table per continental region.")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" countries_by_population.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" group-by "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UN continental region"')]),s._v("\n━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━\n Asia             │ Americas         │ Africa           │ Europe           │ Oceania\n──────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────────\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("58")]),s._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" rows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━\n")])])]),n("p",[s._v('Now we can already get some information like "which continental regions are there" and "how many countries are in each region".\nIf we want to see only the countries in the continental region of Oceania we can type:')]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" countries_by_population.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" group-by "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UN continental region"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get Oceania\n━━━━┯━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━┯━━━━━━━━\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ rank │ country or area                │ UN continental region │ UN statistical region     │ population 2018 │ population 2019 │ change")]),s._v("\n────┼──────┼────────────────────────────────┼───────────────────────┼───────────────────────────┼─────────────────┼─────────────────┼────────\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("   │ Australia                      │ Oceania               │ Australia and New Zealand │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24,898")]),s._v(",152      │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25,203")]),s._v(",198      │ +1.2%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("98")]),s._v("   │ Papua New Guinea               │ Oceania               │ Melanesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8,606")]),s._v(",323       │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8,776")]),s._v(",109       │ +2.0%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("125")]),s._v("  │ New Zealand                    │ Oceania               │ Australia and New Zealand │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4,743")]),s._v(",131       │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4,783")]),s._v(",063       │ +0.8%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("161")]),s._v("  │ Fiji                           │ Oceania               │ Melanesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("883,483")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("889,953")]),s._v("         │ +0.7%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("166")]),s._v("  │ Solomon Islands                │ Oceania               │ Melanesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("652,857")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("669,823")]),s._v("         │ +2.6%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("181")]),s._v("  │ Vanuatu                        │ Oceania               │ Melanesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("292,680")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("299,882")]),s._v("         │ +2.5%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("183")]),s._v("  │ New Caledonia                  │ Oceania               │ Melanesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("279,993")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("282,750")]),s._v("         │ +1.0%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("185")]),s._v("  │ French Polynesia               │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("277,679")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("279,287")]),s._v("         │ +0.6%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v("  │ Samoa                          │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("196,129")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("197,097")]),s._v("         │ +0.5%\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("191")]),s._v("  │ Guam                           │ Oceania               │ Micronesia                │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("165,768")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("167,294")]),s._v("         │ +0.9%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("193")]),s._v("  │ Kiribati                       │ Oceania               │ Micronesia                │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("115,847")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("117,606")]),s._v("         │ +1.5%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("194")]),s._v("  │ Federated States of Micronesia │ Oceania               │ Micronesia                │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("112,640")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("113,815")]),s._v("         │ +1.0%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("196")]),s._v("  │ Tonga                          │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("110,589")]),s._v("         │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("110,940")]),s._v("         │ +0.3%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("207")]),s._v("  │ Marshall Islands               │ Oceania               │ Micronesia                │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("58,413")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("58,791")]),s._v("          │ +0.6%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("209")]),s._v("  │ Northern Mariana Islands       │ Oceania               │ Micronesia                │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("56,882")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("56,188")]),s._v("          │ −1.2%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("210")]),s._v("  │ American Samoa                 │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("55,465")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("55,312")]),s._v("          │ −0.3%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("221")]),s._v("  │ Palau                          │ Oceania               │ Micronesia                │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17,907")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18,008")]),s._v("          │ +0.6%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v("  │ Cook Islands                   │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17,518")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17,548")]),s._v("          │ +0.2%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("224")]),s._v("  │ Tuvalu                         │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11,508")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11,646")]),s._v("          │ +1.2%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("225")]),s._v("  │ Wallis and Futuna              │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11,661")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11,432")]),s._v("          │ −2.0%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("226")]),s._v("  │ Nauru                          │ Oceania               │ Micronesia                │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10,670")]),s._v("          │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10,756")]),s._v("          │ +0.8%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("231")]),s._v("  │ Niue                           │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,620")]),s._v("           │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,615")]),s._v("           │ −0.3%\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("232")]),s._v("  │ Tokelau                        │ Oceania               │ Polynesia                 │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,319")]),s._v("           │ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,340")]),s._v("           │ +1.6%\n━━━━┷━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━┷━━━━━━━━\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);