(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(t,s,e){},228:function(t,s,e){},229:function(t,s,e){},230:function(t,s,e){},231:function(t,s,e){"use strict";var n=e(227);e.n(n).a},232:function(t,s,e){"use strict";var n=e(228);e.n(n).a},233:function(t,s,e){"use strict";var n=e(229);e.n(n).a},234:function(t,s,e){"use strict";var n={props:["sensor"]},a=(e(231),e(16)),r=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"meta-info"},[this._v("Last updated at "+this._s(this.sensor.date))])}),[],!1,null,null,null);s.a=r.exports},235:function(t,s,e){"use strict";var n={props:["sensor"]},a=(e(232),e(16)),r=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sensor-values"},t._l(t.sensor.data,(function(s){return e("div",{key:s.key,staticClass:"sensor-values__data"},[e("span",[t._v(t._s(s.key)+" = "+t._s(s.value)+" "+t._s(s.unit))])])})),0)}),[],!1,null,null,null);s.a=r.exports},236:function(t,s,e){"use strict";var n={props:["sensor"]},a=(e(233),e(16)),r=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tag-list"},t._l(t.sensor.tags,(function(s){return e("g-link",{key:s.id,staticClass:"tag-list__link",attrs:{to:s.path}},[e("span",[t._v("#")]),t._v("\n    "+t._s(s.title)+"\n  ")])})),1)}),[],!1,null,null,null);s.a=r.exports},237:function(t,s,e){"use strict";var n=e(230);e.n(n).a},238:function(t,s){},243:function(t,s,e){"use strict";var n=e(234),a=e(235),r=e(236),i={components:{MetaInfo:n.a,SensorValues:a.a,TagList:r.a},props:["sensor"]},o=(e(237),e(16)),c=Object(o.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sensor-card content-box",class:{"sensor-card--has-sensorer":t.sensor.sensorer}},[e("div",{staticClass:"sensor-card__header"},[t.sensor.cover_image?e("g-image",{staticClass:"sensor-card__image",attrs:{alt:"Cover image",src:t.sensor.cover_image}}):t._e()],1),e("div",{staticClass:"sensor-card__content"},[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"sensor-card__title",domProps:{innerHTML:t._s(t.sensor.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"sensor-card__content",domProps:{innerHTML:t._s(t.sensor.content)}}),e("g-link",{staticClass:"sensor-card__link",attrs:{to:t.sensor.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=c.exports},244:function(t,s,e){"use strict";var n=e(238),a=e.n(n);s.default=a.a},249:function(t,s,e){"use strict";e.r(s);var n={components:{SensorCard:e(243).a},metaInfo:function(){return{title:this.$page.tag.title}}},a=e(16),r=e(244),i=Object(a.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("# "+this._s(this.$page.tag.title))]),s("div",{staticClass:"sensors"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("SensorCard",{key:t.node.id,attrs:{sensor:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(i);s.default=i.exports}}]);