(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{227:function(s,t,n){},228:function(s,t,n){},229:function(s,t,n){},230:function(s,t,n){},231:function(s,t,n){"use strict";var e=n(227);n.n(e).a},232:function(s,t,n){"use strict";var e=n(228);n.n(e).a},233:function(s,t,n){"use strict";var e=n(229);n.n(e).a},234:function(s,t,n){"use strict";var e={props:["sensor"]},a=(n(231),n(16)),r=Object(a.a)(e,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"sensor-values"},s._l(s.sensor.data,(function(t){return n("div",{key:t.key,staticClass:"sensor-values__data"},[n("span",[s._v(s._s(t.key)+" / "+s._s(t.value)+" "+s._s(t.unit))])])})),0)}),[],!1,null,null,null);t.a=r.exports},235:function(s,t,n){"use strict";var e={props:["sensor"]},a=(n(232),n(16)),r=Object(a.a)(e,(function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"meta-info"},[this._v("\n  Last updated at "+this._s(this.sensor.date)+"\n  ")])}),[],!1,null,null,null);t.a=r.exports},236:function(s,t,n){"use strict";var e={props:["sensor"]},a=(n(233),n(16)),r=Object(a.a)(e,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"tag-list"},s._l(s.sensor.tags,(function(t){return n("g-link",{key:t.id,staticClass:"tag-list__link",attrs:{to:t.path}},[n("span",[s._v("#")]),s._v("\n    "+s._s(t.title)+"\n  ")])})),1)}),[],!1,null,null,null);t.a=r.exports},237:function(s,t,n){"use strict";var e=n(230);n.n(e).a},241:function(s,t,n){},242:function(s,t){},243:function(s,t,n){"use strict";var e=n(234),a=n(235),r=n(236),i={components:{SensorValues:e.a,MetaInfo:a.a,TagList:r.a},props:["sensor"]},o=(n(237),n(16)),c=Object(o.a)(i,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"sensor-card content-box",class:{"sensor-card--has-sensorer":s.sensor.sensorer}},[n("div",{staticClass:"sensor-card__header"},[s.sensor.cover_image?n("g-image",{staticClass:"sensor-card__image",attrs:{alt:"Cover image",src:s.sensor.cover_image}}):s._e()],1),n("div",{staticClass:"sensor-card__content"},[n("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"sensor-card__title",domProps:{innerHTML:s._s(s.sensor.title)}}),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"sensor-card__content",domProps:{innerHTML:s._s(s.sensor.content)}}),n("p",[n("SensorValues",{staticClass:"sensor-card__meta",attrs:{sensor:s.sensor}})],1),n("TagList",{staticClass:"sensor-card__tags",attrs:{sensor:s.sensor}}),n("p"),n("MetaInfo",{staticClass:"sensor-card__meta",attrs:{sensor:s.sensor}}),n("g-link",{staticClass:"sensor-card__link",attrs:{to:s.sensor.path}},[s._v("Link")])],1)])}),[],!1,null,null,null);t.a=c.exports},247:function(s,t,n){"use strict";var e=n(241);n.n(e).a},248:function(s,t,n){"use strict";var e=n(242),a=n.n(e);t.default=a.a},251:function(s,t,n){"use strict";n.r(t);var e={components:{SensorCard:n(243).a},metaInfo:{title:"Smart Sensor",titleTemplate:"%s"}},a=(n(247),n(16)),r=n(248),i=Object(a.a)(e,(function(){var s=this.$createElement,t=this._self._c||s;return t("Layout",{attrs:{"show-back-button":!1}},[t("div",{staticClass:"grid"},this._l(this.$page.sensors.edges,(function(s){return t("SensorCard",{key:s.node.id,attrs:{sensor:s.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(i);t.default=i.exports}}]);