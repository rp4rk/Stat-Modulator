webpackJsonp([2,0],{0:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var n=a(88),i=r(n),s=a(225),o=r(s),c=a(114),u=r(c);new i["default"]({store:u["default"],el:"#app",render:function(t){return t(o["default"])}})},48:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_CHARACTER="GET_CHARACTER",e.SET_REALMS="SET_REALMS",e.SET_APP_LOAD_STATE="SET_APP_LOAD_STATE"},108:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={CLASSES:["Warrior","Paladin","Hunter","Rogue","Priest","Death Knight","Shaman","Mage","Warlock","Monk","Druid","Demon Hunter"],STATS:[["int",0,"Intellect"],["agi",0,"Agility"],["str",0,"Strength"],["critRating",350,"Critical Strike"],["hasteRating",325,"Haste"],["versatility",400,"Versatility"],["masteryRating",350,"Mastery"]]}},109:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(126),i=r(n);e["default"]={showStat:function(t){var e=new i["default"](["Versatility","Critical Strike","Mastery","Haste"]);return e.has(this.name)||t===this.name},amountString:function(){var t=function(t){return"Mastery"===t?" Point(s)":"%"},e=new i["default"](["Intellect","Strength","Agility"]);return e.has(this.name)?"":t(this.name)},getStatAmount:function(){return this.coefficient>0?Math.round(this.value/this.coefficient*100)/100:this.value},getModifiedAmount:function(){return this.coefficient?Math.round(this.modifier/this.coefficient*100)/100:this.modifier},modifierString:function(){return this.modifier>=0?"increase":"decrease"},getStaticIncrease:function(){var t=this.value+this.modifier;return Math.round(1e4*(t/this.value-1))/100},getRelativeIncrease:function(){return Math.round(this.getModifiedAmount()/this.getStatAmount()*1e4)/100},getRelativeToBaseIncrease:function(){var t=1+this.getStatAmount()/100,e=t+this.getModifiedAmount()/100;return this.coefficient?100*(e/t-1):this.getRelativeIncrease()}}},110:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(127),i=r(n),s=function o(t,e,a){(0,i["default"])(this,o),this.name=a,this.value=t,this.coefficient=e,this.modifier=0,this.bonuses=[]};e["default"]=s},111:function(t,e,a){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e["default"]=t,e}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(90),s=n(i),o=a(48),c=r(o);e["default"]={loadCharacter:function(t){var e=t.commit,a=t.state,r=a.character.name,n=a.character.realm,i=a.character.region,o="https://"+i+".api.battle.net/wow/character/"+n+"/"+r+"?fields=stats,talents,items&locale=en_US&apikey=vhrjucbkk5edzr7qqh9br4ytqmskszv7";s["default"].get(o).then(function(t){return e(c.GET_CHARACTER,t)})},setAppLoaded:function(t){var e=t.commit;e(c.SET_APP_LOAD_STATE,!1)},loadRealms:function(t){var e=t.commit,a=t.state,r=a.character.region,n="https://"+r+".api.battle.net/wow/realm/status?locale=en_US&apikey=vhrjucbkk5edzr7qqh9br4ytqmskszv7";s["default"].get(n).then(function(t){return e(c.SET_REALMS,t)})}}},112:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"",realm:"",region:"",image:"",mainStat:"",appLoaded:!1,"class":-1,realms:[],artifact:{},stats:{}}},113:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(49),i=r(n),s=a(109),o=r(s);e["default"]={getCharacter:function(t){return t.character},getStats:function(t){return t.character.stats},getMainStat:function(t){return t.character.mainStat},getStatsWithProperties:function(t){return t.character.stats.map(function(t){return(0,i["default"])(t,o["default"])})},getTotalIncrease:function(t){return Math.round(100*(t.character.stats.map(function(t){return(0,i["default"])(t,o["default"])}).reduce(function(t,e){var a=1+e.getRelativeToBaseIncrease()/100;return t*a},100)-100))/100}}},114:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(88),i=r(n),s=a(19),o=r(s),c=a(115),u=a(113),l=r(u),d=a(111),f=r(d);i["default"].use(o["default"]),e["default"]=new o["default"].Store({state:c.state,mutations:c.mutations,getters:l["default"],actions:f["default"]})},115:function(t,e,a){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e["default"]=t,e}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=e.state=e.STORAGE_KEY=void 0;var i,s=a(128),o=n(s),c=a(125),u=n(c),l=a(123),d=n(l),f=a(112),h=n(f),_=a(48),p=r(_),m=a(108),v=n(m),g=a(110),y=n(g),C=e.STORAGE_KEY="stat-modulator";e.state={character:JSON.parse(window.localStorage.getItem(C))||h["default"]},e.mutations=(i={},(0,o["default"])(i,p.GET_CHARACTER,function(t,e){t.character.artifact=e.data.items.mainHand,t.character["class"]=e.data["class"],t.character.image="http://render-api-"+t.character.region+".worldofwarcraft.com/static-render/"+t.character.region+"/"+e.data.thumbnail,t.character.name=e.data.name,t.character.realm=e.data.realm;var a=new d["default"](v["default"].STATS);t.character.stats=(0,u["default"])(e.data.stats).filter(function(t){return a.has(t)}).map(function(t){return new y["default"](e.data.stats[t],a.get(t),v["default"].STATS.filter(function(e){return e[0]===t})[0][2])});var r=t.character.stats.reduce(function(t,e){return t.value<e.value?e:t});t.character.mainStat=r.name,t.character.appLoaded=!0}),(0,o["default"])(i,p.SET_APP_LOAD_STATE,function(t,e){t.character.appLoaded=e}),(0,o["default"])(i,p.SET_REALMS,function(t,e){t.character.realms=e.data.realms}),i)},116:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(28),i=r(n),s=a(19),o=a(231),c=r(o),u=a(230),l=r(u),d=a(226),f=r(d),h=a(228),_=r(h),p=a(229),m=r(p),v=a(227),g=r(v);e["default"]={components:{Slider:c["default"],Sidebar:l["default"],Badge:f["default"],NewCharacter:_["default"],OverallIncrease:m["default"],Graph:g["default"]},computed:(0,i["default"])({},(0,s.mapGetters)({stats:"getStatsWithProperties",character:"getCharacter"}))}},117:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["character"]}},118:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(185),i=r(n);e["default"]={mounted:function(){(0,i["default"])({title:"Value of QA in Haste",target:this.$el,disableZoom:!0,xAxis:{label:"Critical Strike %",domain:[0,100]},yAxis:{label:"Haste",domain:[0,1e4]},data:[{fn:"(1 - (1 - x / 100)^5) * 15 * 325"},{fn:"(1 - (1 - x / 100)^4) * 15 * 325"},{fn:"(1 - (1 - x / 100)^5) * 20 * 325"},{fn:"(1 - (1 - x / 100)^4) * 20 * 325"}]})}}},119:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(19);e["default"]={methods:(0,r.mapActions)(["setAppLoaded"])}},120:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(28),i=r(n),s=a(19);e["default"]={computed:(0,i["default"])({},(0,s.mapGetters)({totalIncrease:"getTotalIncrease"}))}},121:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(19);e["default"]={props:["character"],methods:(0,r.mapActions)(["loadCharacter","loadRealms"])}},122:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(28),i=r(n),s=a(19);e["default"]={props:["stat"],computed:(0,i["default"])({},(0,s.mapGetters)({mainStat:"getMainStat"}))}},174:function(t,e){},175:function(t,e){},176:function(t,e){},177:function(t,e){},225:function(t,e,a){var r,n;a(175),r=a(116);var i=a(234);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},226:function(t,e,a){var r,n;a(176),r=a(117);var i=a(235);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},227:function(t,e,a){var r,n;r=a(118);var i=a(236);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},228:function(t,e,a){var r,n;r=a(119);var i=a(237);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},229:function(t,e,a){var r,n;r=a(120);var i=a(233);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},230:function(t,e,a){var r,n;a(177),r=a(121);var i=a(238);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},231:function(t,e,a){var r,n;a(174),r=a(122);var i=a(232);n=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=r},232:function(module,exports){module.exports={render:function(){with(this)return stat.showStat(mainStat)?_h("div",{staticClass:"card stat-card"},[_h("header",{staticClass:"card-header"},[_h("span",{staticClass:"card-header-title"},[" "+_s(stat.name)+" "])])," ",stat.coefficient?_h("p",{staticClass:"panel-block"},[_m(0),"\n    For 1"+_s(stat.amountString())+", you require "+_s(stat.coefficient)+" rating.\n  "]):_e()," ",_h("p",{staticClass:"panel-block"},[_m(1),"\n    You currently have ",_h("strong",[_s(stat.value)])," "+_s(stat.name.toLowerCase())+".\n  "])," ",stat.coefficient?_h("p",{staticClass:"panel-block"},[_m(2),"\n    This represents a ",_h("strong",[_s(stat.getStatAmount())+_s(stat.amountString())])," increase in output.\n  "]):_e()," ",_h("p",{staticClass:"panel-block"},["\n    An "+_s(stat.modifierString())+" of ",_h("input",{directives:[{name:"model",rawName:"v-model",value:stat.modifier,expression:"stat.modifier"}],staticClass:"increase-amount",attrs:{type:"number"},domProps:{value:_s(stat.modifier)},on:{input:function(t){t.target.composing||(stat.modifier=_n(t.target.value))}}})," would have the following effects,\n  "])," ",stat.coefficient?_h("p",{staticClass:"panel-block"},["\n    Your "+_s(stat.name.toLowerCase())+" will be increased by ",_h("strong",[_s(stat.getModifiedAmount())+_s(stat.amountString())]),".\n  "]):_e()," ",_h("p",{staticClass:"panel-block"},["\n    This is a ",_h("strong",[_s(Math.abs(stat.getRelativeIncrease()))+"%"])," relative "+_s(stat.modifierString())+" to your "+_s(stat.name.toLowerCase())+".\n  "])," ",_h("p",{staticClass:"panel-block"},[_m(3),"\n    This is a ",_h("strong",[_s(Math.round(100*stat.getRelativeToBaseIncrease())/100)+"%"])," "+_s(stat.modifierString())+" over your base output.\n  "])]):_e()},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"panel-icon"},[_h("i",{staticClass:"fa fa-info-circle"})])},function(){with(this)return _h("span",{staticClass:"panel-icon"},[_h("i",{staticClass:"fa fa-info-circle"})])},function(){with(this)return _h("span",{staticClass:"panel-icon"},[_h("i",{staticClass:"fa fa-line-chart"})])},function(){with(this)return _h("span",{staticClass:"panel-icon"},[_h("i",{staticClass:"fa fa-exclamation-circle"})])}]}},233:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"card is-fullwidth"},[_h("div",{staticClass:"card-content"},[_h("p",["Your changes to your stat profile would result in a "+_s(totalIncrease)+"% increase in output."])])])},staticRenderFns:[]}},234:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_h("div",{attrs:{id:"app"}},[character.appLoaded?_h("NewCharacter"):_e()," ",character.appLoaded?_e():_h("sidebar",{attrs:{character:character}})," ",character.appLoaded?_h("badge",{attrs:{character:character}}):_e()," ",character.appLoaded?_h("div",{staticClass:"columns"},[_l(stats,function(t){return _h("slider",{staticClass:"column",attrs:{stat:t}})})]):_e()," ",character.appLoaded?_h("OverallIncrease"):_e()])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"header"},[_h("h1",{staticClass:"header-title"},["Stat Modulator"])])}]}},235:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"badge"},[_h("img",{staticClass:"character-image",attrs:{alt:"character image",src:character.image.toLowerCase()}})," ",_h("caption",{staticClass:"character-name"},["\n    "+_s(character.name)+"\n  "])])},staticRenderFns:[]}},236:function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"card"})}]}},237:function(module,exports){module.exports={render:function(){with(this)return _h("a",{staticClass:"button is-primary is-medium is-outlined",on:{click:setAppLoaded}},[_m(0)," ",_m(1)])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"icon"},[_h("i",{staticClass:"fa fa-chevron-circle-left"})])},function(){with(this)return _h("span",["Load Another Character"])}]}},238:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"content"},[_m(0)," ",_h("div",{staticClass:"sidebar"},[_m(1)," ",_h("div",[_h("form",{staticClass:"character-form"},[_h("p",{staticClass:"control"},[_m(2)," ",_h("select",{directives:[{name:"model",rawName:"v-model",value:character.region,expression:"character.region"}],staticClass:"select",attrs:{type:"text",name:"region",id:"region"},on:{change:[function(t){character.region=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value})[0]},loadRealms]}},[_m(3)," ",_m(4)])])," ",_h("p",{staticClass:"control"},[_m(5)," ",_h("select",{directives:[{name:"model",rawName:"v-model",value:character.realm,expression:"character.realm"}],staticClass:"select",attrs:{type:"text",name:"realm",id:"realm"},on:{change:function(t){character.realm=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value})[0]}}},[_l(character.realms,function(t){return _h("option",{domProps:{value:t.name}},["\n                "+_s(t.name)+"\n              "])})])])," ",_h("p",{staticClass:"control"},[_m(6)," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:character.name,expression:"character.name"}],staticClass:"input",attrs:{type:"text",name:"character",id:"character"},domProps:{value:_s(character.name)},on:{input:function(t){t.target.composing||(character.name=t.target.value)}}})])," ",_h("a",{staticClass:"button is-primary",on:{click:loadCharacter}},["\n            Load Character\n          "])])])])])},staticRenderFns:[function(){with(this)return _h("h2",["Import Character"])},function(){with(this)return _h("div",{staticClass:"info"},[_h("p",["\n        This stat modulator will allow you to see the relative benefit of increasing stats on your character.\n        Increasing a certain statistic will increase the value of others, therefore devaluing the stat in relation to your other choices.\n        The calculations involved in determining these increases are annoying to do, and hard to with conventional tools.\n      "])," ",_h("p",["\n        For example, going from 0% critical strike to 1% critical strike is an increase of\n        roughly 1%. However going from 49% critical strike to 50% is an increase of only\n        0.67%. The same relationship exists for every statistic in the game.\n      "])," ",_h("p",["- Sharambane of Pure, Turalyon EU. ",_h("a",{attrs:{href:"https://www.twitter.com/Reglitch_"}},[" @Reglitch_ "])])])},function(){with(this)return _h("label",{staticClass:"label",attrs:{"for":"region"}},["Region"])},function(){with(this)return _h("option",["EU"])},function(){with(this)return _h("option",["US"])},function(){with(this)return _h("label",{staticClass:"label",attrs:{"for":"realm"}},["Realm"])},function(){with(this)return _h("label",{staticClass:"label",attrs:{"for":"character"}},["Character"])}]}}});
//# sourceMappingURL=app.c77c5b4e30f2a436b027.js.map