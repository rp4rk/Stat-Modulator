webpackJsonp([2,0],[function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var n=a(17),i=r(n),s=a(81),o=r(s),c=a(39),u=r(c);new i["default"]({store:u["default"],el:"#app",render:function(t){return t(o["default"])}})},,,,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_CHARACTER="GET_CHARACTER",e.SET_REALMS="SET_REALMS",e.SET_APP_LOAD_STATE="SET_APP_LOAD_STATE"},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e["default"]=t,e}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(18),s=n(i),o=a(11),c=r(o);e["default"]={loadCharacter:function(t){var e=t.commit,a=t.state,r=a.character.name,n=a.character.realm,i=a.character.region,o="https://"+i+".api.battle.net/wow/character/"+n+"/"+r+"?fields=stats,talents&locale=en_US&apikey=vhrjucbkk5edzr7qqh9br4ytqmskszv7";s["default"].get(o).then(function(t){return e(c.GET_CHARACTER,t)})},setAppLoaded:function(t){var e=t.commit;e(c.SET_APP_LOAD_STATE,!1)},loadRealms:function(t){var e=t.commit,a="https://eu.api.battle.net/wow/realm/status?locale=en_GB&apikey=vhrjucbkk5edzr7qqh9br4ytqmskszv7";s["default"].get(a).then(function(t){return e(c.SET_REALMS,t)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"",realm:"",region:"",image:"",mainStat:"",appLoaded:!1,realms:[],stats:{intellect:{value:0,ratio:null,label:"Intellect",modifier:0},agility:{value:0,ratio:null,label:"Agility",modifier:0},strength:{value:0,ratio:null,label:"Strength",modifier:0},crit:{value:0,ratio:350,label:"Critical Strike",modifier:0,isSecondary:!0},haste:{value:0,ratio:325,label:"Haste",modifier:0,isSecondary:!0},mastery:{value:0,ratio:350,label:"Mastery",modifier:0,isSecondary:!0},vers:{value:0,ratio:400,label:"Versatility",modifier:0,isSecondary:!0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(17),i=r(n),s=a(7),o=r(s),c=a(40),u=a(38),l=r(u),d=a(36),h=r(d);i["default"].use(o["default"]),e["default"]=new o["default"].Store({state:c.state,mutations:c.mutations,getters:l["default"],actions:h["default"]})},function(t,e,a){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e["default"]=t,e}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=e.state=e.STORAGE_KEY=void 0;var i,s=a(48),o=n(s),c=a(47),u=n(c),l=a(37),d=n(l),h=a(11),f=r(h),p=e.STORAGE_KEY="stat-modulator";e.state={character:JSON.parse(window.localStorage.getItem(p))||d["default"]},e.mutations=(i={},(0,o["default"])(i,f.GET_CHARACTER,function(t,e){t.character.image="http://render-api-"+t.character.region+".worldofwarcraft.com/static-render/"+t.character.region+"/"+e.data.thumbnail,t.character.name=e.data.name,t.character.realm=e.data.realm,t.character.stats.intellect.value=e.data.stats["int"],t.character.stats.agility.value=e.data.stats.agi,t.character.stats.strength.value=e.data.stats.str,t.character.mainStat=(0,u["default"])(t.character.stats).reduce(function(e,a){var r=t.character.stats;return r[e].value<r[a].value?a:e}),t.character.stats.crit.value=e.data.stats.critRating,t.character.stats.haste.value=e.data.stats.hasteRating,t.character.stats.mastery.value=e.data.stats.masteryRating,t.character.stats.vers.value=e.data.stats.versatility,t.character.appLoaded=!0}),(0,o["default"])(i,f.SET_APP_LOAD_STATE,function(t,e){t.character.appLoaded=e}),(0,o["default"])(i,f.SET_REALMS,function(t,e){t.character.realms=e.data.realms}),i)},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(85),i=r(n),s=a(84),o=r(s),c=a(82),u=r(c),l=a(83),d=r(l);e["default"]={components:{Slider:i["default"],Sidebar:o["default"],Badge:u["default"],NewCharacter:d["default"]},computed:{character:function(){return this.$store.state.character}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["character"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(7);e["default"]={methods:(0,r.mapActions)(["setAppLoaded"])}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(7);e["default"]={props:["character"],methods:(0,r.mapActions)(["loadCharacter","loadRealms"])}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["stat","mainStat"],computed:{isMainStat:function(){return this.stat.label.toLowerCase()===this.mainStat},getStatPercentage:function(){var t=this.stat;return t.ratio?{base:Math.round(t.value/t.ratio*100)/100,modifier:Math.round(t.modifier/t.ratio*100)/100}:null},getRelativeStatIncrease:function(){var t=this.stat,e=t.value,a=e+t.modifier;return Math.round(1e4*(a/e-1))/100},getOverallIncrease:function(){if(this.isMainStat)return this.getRelativeStatIncrease;var t=this.getStatPercentage.base/100+1,e=(this.getStatPercentage.base+this.getStatPercentage.modifier)/100+1;return Math.round(1e4*(e/t-1))/100}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){var r,n;a(75),r=a(41);var i=a(86);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,a){var r,n;a(78),r=a(42);var i=a(89);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,a){var r,n;a(79),r=a(43);var i=a(90);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,a){var r,n;a(77),r=a(44);var i=a(88);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,e,a){var r,n;a(76),r=a(45);var i=a(87);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_h("div",{attrs:{id:"app"}},[character.appLoaded?_h("NewCharacter"):_e()," ",character.appLoaded?_e():_h("sidebar",{attrs:{character:character}})," ",character.appLoaded?_h("badge",{attrs:{character:character}}):_e()," ",character.appLoaded?_h("div",{staticClass:"grid"},[_l(character.stats,function(t){return _h("slider",{attrs:{stat:t,mainStat:character.mainStat}})})]):_e()])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"header"},[_h("h1",{staticClass:"header-title"},["Stat Modulator"])])}]}},function(module,exports){module.exports={render:function(){with(this)return isMainStat||stat.isSecondary?_h("div",{staticClass:"stat-pane"},[_h("div",{staticClass:"stat-header-wrapper"},[_h("h2",{staticClass:"stat-header"},[_s(stat.label)])," ",stat.ratio?_h("span",{staticClass:"stat-ratio"},[_s(stat.ratio+" / point")]):_e()])," ",_h("div",{staticClass:"stat-inputs"},[_h("input",{directives:[{name:"model",value:stat.value,expression:"stat.value"}],staticClass:"base-amount",attrs:{type:"number"},domProps:{value:_s(stat.value)},on:{input:function(t){t.target.composing||(stat.value=_n(t.target.value))}}})," ",_h("input",{directives:[{name:"model",value:stat.modifier,expression:"stat.modifier"}],staticClass:"increase-amount",attrs:{type:"number"},domProps:{value:_s(stat.modifier)},on:{input:function(t){t.target.composing||(stat.modifier=_n(t.target.value))}}})])," ",getStatPercentage?_h("div",{staticClass:"stat-overviews"},[_h("span",{staticClass:"base-perc"},[_s(getStatPercentage.base)+"%"])," ",_h("span",{staticClass:"mod-perc"},[_s(getStatPercentage.modifier)+"%"])]):_e()," ",getStatPercentage?_e():_h("div",{staticClass:"stat-overviews error"},[_h("span",[_s(stat.label)+" does not have a coefficient."])])," ",_h("p",["This results in a relative increase of "+_s(getRelativeStatIncrease)+"% to your "+_s(stat.label.toLowerCase())+" statistic alone."]),_m(0),_h("p",["Overall, this change would give you roughly "+_s(getOverallIncrease)+"% more output!"])," ","Mastery"==stat.label?_h("span",["* Assuming a 1% increase per point, this is not true for all classes!"]):_e()]):_e()},staticRenderFns:[function(){with(this)return _h("p")}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_h("div",{staticClass:"sidebar"},[_m(1)," ",_h("div",[_h("form",{staticClass:"character-form",on:{submit:function(t){t.preventDefault(),loadCharacter(t)}}},[_h("p",[_m(2)," ",_h("select",{directives:[{name:"model",value:character.region,expression:"character.region"}],attrs:{type:"text",name:"region",id:"region"},on:{change:[function(t){character.region=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value})[0]},loadRealms]}},[_m(3)," ",_m(4)," ",_m(5)," ",_m(6)," ",_m(7)])])," ",_h("p",[_m(8)," ",_h("input",{directives:[{name:"model",value:character.name,expression:"character.name"}],attrs:{type:"text",name:"character",id:"character"},domProps:{value:_s(character.name)},on:{input:function(t){t.target.composing||(character.name=t.target.value)}}})])," ",_h("p",[_m(9)," ",_h("select",{directives:[{name:"model",value:character.realm,expression:"character.realm"}],attrs:{type:"text",name:"realm",id:"realm"},on:{change:function(t){character.realm=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value})[0]}}},[_l(character.realms,function(t){return _h("option",{domProps:{value:t.name}},["\n                "+_s(t.name)+"\n              "])})])])," ",_m(10)])])])])},staticRenderFns:[function(){with(this)return _h("h2",{staticClass:"no-margin-pls"},["Import Character"])},function(){with(this)return _h("div",{staticClass:"info"},[_h("p",["\n        This stat modulator will allow you to see the relative benefit of increasing stats on your character.\n        Increasing a certain statistic will increase the value of others, therefore devaluing the stat.\n        The calculations involved in determining these increases are annoying to do, and hard to automate.\n      "])," ",_h("p",["\n        For example, going from 0% critical strike to 1% critical strike is an increase of\n        roughly 1%. However going from 49% critical strike to 50% is an increase of only\n        0.67%. The same dichotomy exists for every statistic in the game.\n      "])," ",_h("p",["- Sharambe of Pure, Turalyon EU. ",_h("a",{attrs:{href:"https://www.twitter.com/Reglitch_"}},[" @Reglitch_ "])])])},function(){with(this)return _h("label",{attrs:{"for":"region"}},["Region"])},function(){with(this)return _h("option",["EU"])},function(){with(this)return _h("option",["US"])},function(){with(this)return _h("option",["KR"])},function(){with(this)return _h("option",["TW"])},function(){with(this)return _h("option",["SEA"])},function(){with(this)return _h("label",{attrs:{"for":"character"}},["Character"])},function(){with(this)return _h("label",{attrs:{"for":"realm"}},["Realm"])},function(){with(this)return _h("button",["\n            Load Character\n          "])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"badge"},[_h("img",{staticClass:"character-image",attrs:{alt:"character image",src:character.image.toLowerCase()}})," ",_h("caption",{staticClass:"character-name"},["\n    "+_s(character.name)+"\n  "])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("button",{staticClass:"new-character",on:{click:setAppLoaded}},[_h("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[_h("path",{attrs:{d:"M1037 1395l102-102q19-19 19-45t-19-45l-307-307 307-307q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zm627-499q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z",fill:"#fff"}})])," ",_m(0)])},staticRenderFns:[function(){with(this)return _h("span",["Load Another Character"])}]}}]);
//# sourceMappingURL=app.87d22c83401c9f30016c.js.map