(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(t,s,a){},227:function(t,s,a){},228:function(t,s,a){},229:function(t,s,a){},231:function(t,s,a){"use strict";var n=a(226);a.n(n).a},232:function(t,s,a){"use strict";var n=a(227);a.n(n).a},233:function(t,s,a){"use strict";var n=a(228);a.n(n).a},234:function(t,s,a){"use strict";var n=a(229);a.n(n).a},235:function(t,s,a){"use strict";var n={props:["data"]},e=(a(233),a(16)),i={components:{DataLayout:Object(e.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"data-layout"},[a("div",{staticClass:"data-layout__label"},[t._v(t._s(t.data.key))]),a("div",[a("span",{staticClass:"data-layout__value"},[t._v(t._s(t.data.value)+" ")]),a("span",{staticClass:"data-layout__unit"},[t._v(t._s(t.data.unit))])])])}),[],!1,null,null,null).exports},props:["sensor"]},r=(a(234),Object(e.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sensor-list"},this._l(this.sensor.data,(function(t){return s("div",{key:t.key},[s("DataLayout",{staticClass:"sensor-list__label",attrs:{data:t}})],1)})),0)}),[],!1,null,null,null));s.a=r.exports},236:function(t,s,a){"use strict";var n={props:["sensor"]},e=(a(231),a(16)),i=Object(e.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"meta-info"},[this._v("Last updated at "+this._s(this.sensor.date))])}),[],!1,null,null,null);s.a=i.exports},237:function(t,s,a){"use strict";var n={props:["sensor"]},e=(a(232),a(16)),i=Object(e.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tag-list"},t._l(t.sensor.tags,(function(s){return a("g-link",{key:s.id,staticClass:"tag-list__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v("\n    "+t._s(s.title)+"\n  ")])})),1)}),[],!1,null,null,null);s.a=i.exports},240:function(t,s,a){},241:function(t,s){},246:function(t,s,a){"use strict";var n=a(240);a.n(n).a},247:function(t,s,a){"use strict";var n=a(241),e=a.n(n);s.default=e.a},251:function(t,s,a){"use strict";a.r(s);var n=a(236),e=a(235),i=a(237),r={components:{MetaInfo:n.a,SensorList:e.a,TagList:i.a},metaInfo:function(){return{title:this.$page.sensor.title,meta:[{name:"description",content:this.$page.sensor.content}]}}},o=(a(246),a(16)),l=a(247),c=Object(o.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Layout",[a("div",{staticClass:"sensor-title"},[a("h1",{staticClass:"sensor-title__text"},[t._v(t._s(t.$page.sensor.title))]),a("MetaInfo",{attrs:{sensor:t.$page.sensor}})],1),a("div",{staticClass:"sensor content-box"},[a("div",{staticClass:"sensor__header"},[t.$page.sensor.cover_image?a("g-image",{attrs:{alt:"Cover image",src:t.$page.sensor.cover_image}}):t._e()],1),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"sensor__content",domProps:{innerHTML:t._s(t.$page.sensor.content)}}),a("SensorList",{attrs:{sensor:t.$page.sensor}}),a("div",{staticClass:"sensor__footer"},[a("TagList",{attrs:{sensor:t.$page.sensor}})],1)],1)])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(c);s.default=c.exports}}]);