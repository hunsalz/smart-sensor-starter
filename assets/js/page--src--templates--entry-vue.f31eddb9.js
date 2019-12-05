(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{356:function(t,a,e){},357:function(t,a,e){},358:function(t,a,e){},359:function(t,a,e){},360:function(t,a,e){},361:function(t,a,e){},364:function(t,a,e){"use strict";var s=e(356);e.n(s).a},365:function(t,a,e){"use strict";var s=e(357);e.n(s).a},366:function(t,a,e){"use strict";var s=e(358);e.n(s).a},367:function(t,a,e){"use strict";var s=e(359);e.n(s).a},368:function(t,a,e){"use strict";var s=e(360);e.n(s).a},369:function(t,a,e){"use strict";var s=e(361);e.n(s).a},370:function(t,a,e){"use strict";e(13);var s=e(363),i=s.c.reactiveProp,n={extends:s.a,mixins:[i],props:{options:{type:Object,required:!0},width:{value:null},height:{value:null}},mounted:function(){this.renderChart(this.chartData,this.options)}},l={props:["datetime"],methods:{format:function(t){return t?this.$moment(t).format("L / LTS"):"n/a"}}},r=(e(364),e(17)),o=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"last-update"},[this._v("Last update: "+this._s(this.format(this.datetime)))])}),[],!1,null,null,null).exports,c={components:{BarChart:n,LastUpdate:o},props:["title","labels","values","unit","color"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1,beginAtZero:!0}}]},tooltips:{callbacks:{}}}}},computed:{computedData:function(){return{labels:this.labels,datasets:[{backgroundColor:this.color?this.color:"#f87979",data:this.values}]}}}},u=(e(365),Object(r.a)(c,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"bar-chart-title"},[this._v(this._s(this.title))]),a("div",{staticClass:"bar-chart"},[a("BarChart",{attrs:{"chart-data":this.computedData,options:this.options}})],1),a("LastUpdate",{attrs:{datetime:this.labels[0]}})],1)}),[],!1,null,null,null).exports),p=s.c.reactiveProp,d={components:{LineChart:{extends:s.b,mixins:[p],props:{options:{type:Object,required:!0},width:{value:null},height:{value:null}},mounted:function(){this.renderChart(this.chartData,this.options)}},LastUpdate:o},props:["title","labels","values","unit"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1,beginAtZero:!0}}]},tooltips:{callbacks:{}}}}},methods:{foo:function(){return"foo"}},computed:{computedData:function(){return{labels:this.labels,datasets:[{backgroundColor:"#f87979",data:this.values}]}}}},h=(e(366),Object(r.a)(d,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"line-chart-title"},[this._v(this._s(this.title))]),a("div",{staticClass:"line-chart"},[a("LineChart",{attrs:{"chart-data":this.computedData,options:this.options}})],1),a("LastUpdate",{attrs:{datetime:this.labels[0]}})],1)}),[],!1,null,null,null).exports),v={components:{LastUpdate:o},props:["title","label","value","unit"]},_=(e(367),{components:{BarChart:u,LineChart:h,ValueChart:Object(r.a)(v,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"value-layout"},[e("div",{staticClass:"value-layout__title"},[t._v(t._s(t.title))]),e("div",[e("span",{staticClass:"value-layout__value"},[t._v(t._s(t.value)+" ")]),e("span",{staticClass:"value-layout__unit"},[t._v(t._s(t.unit))])]),e("LastUpdate",{attrs:{datetime:t.label}})],1)}),[],!1,null,null,null).exports},props:["entry"]}),f=(e(368),Object(r.a)(_,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-layout"},t._l(t.entry.data,(function(a){return e("div",{key:a.title},[0===a.labels.length||0===a.values.length?e("div",{staticClass:"chart-layout__container"}):t._e(),"Bar"===a.type?e("div",{staticClass:"chart-layout__container"},[e("BarChart",{attrs:{title:a.title,labels:a.labels,values:a.values,unit:a.unit,color:a.color}})],1):"Line"===a.type?e("div",{staticClass:"chart-layout__container"},[e("LineChart",{attrs:{title:a.title,labels:a.labels,values:a.values,unit:a.unit}})],1):e("div",{staticClass:"chart-layout__container"},[e("ValueChart",{attrs:{title:a.title,label:a.labels[0],value:a.values[0],unit:a.unit}})],1)])})),0)}),[],!1,null,null,null));a.a=f.exports},371:function(t,a,e){"use strict";var s={props:["entry"]},i=(e(369),e(17)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tag-list"},t._l(t.entry.tags,(function(a){return e("g-link",{key:a.id,staticClass:"tag-list__link",attrs:{to:a.path}},[e("span",[t._v("#")]),t._v("\n    "+t._s(a.title)+"\n  ")])})),1)}),[],!1,null,null,null);a.a=n.exports},374:function(t,a,e){},375:function(t,a){},381:function(t,a,e){"use strict";var s=e(374);e.n(s).a},382:function(t,a,e){"use strict";var s=e(375),i=e.n(s);a.default=i.a},386:function(t,a,e){"use strict";e.r(a);var s=e(370),i=e(371),n={components:{ChartLayout:s.a,TagList:i.a},metaInfo:function(){return{title:this.$page.entry.title,meta:[{name:"description",content:this.$page.entry.content}]}}},l=(e(381),e(17)),r=e(382),o=Object(l.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",{staticClass:"entry"},[e("div",{staticClass:"entry__title"},[e("h1",{staticClass:"entry__title__text"},[t._v(t._s(t.$page.entry.title))])]),e("div",{staticClass:"content-box"},[e("div",{staticClass:"entry__header"},[t.$page.entry.cover_image?e("g-image",{staticClass:"entry__image",attrs:{src:t.$page.entry.cover_image,alt:"Cover image"}}):t._e()],1),e("div",{staticClass:"entry__main"},[e("ChartLayout",{attrs:{entry:t.$page.entry}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"entry__content",domProps:{innerHTML:t._s(t.$page.entry.content)}}),e("TagList",{staticClass:"entry__tags",attrs:{entry:t.$page.entry}})],1)])])}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(o);a.default=o.exports}}]);