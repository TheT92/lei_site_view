"use strict";(self["webpackChunkmy_site"]=self["webpackChunkmy_site"]||[]).push([[138],{6138:function(t,s,e){e.r(s),e.d(s,{default:function(){return m}});var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"project page-container d-flex"},[s("div",{staticClass:"info-wrap pr-8"},[s("h3",{staticClass:"mb-2"},[t._v("Company")]),s("p",{staticClass:"mb-8 text-light"},[t._v(t._s(t.currentPorject.company))]),s("h3",{staticClass:"mb-2"},[t._v("Team")]),s("p",{staticClass:"mb-8 text-light"},[t._v(t._s(t.currentPorject.team))]),s("h3",{staticClass:"mb-2"},[t._v("Year")]),s("p",{staticClass:"mb-8 text-light"},[t._v(t._s(t.currentPorject.year))]),s("h3",{staticClass:"mb-2"},[t._v("My Deliverable")]),s("p",{staticClass:"mb-8 text-light"},[t._v(t._s(t.currentPorject.deliverable))]),s("h3",{staticClass:"mb-2"},[t._v("Software")]),s("p",{staticClass:"mb-8 text-light pre-wrap"},[t._v(t._s(t.currentPorject.software))])]),s("div",{staticClass:"flex-1 overflow-hidden"},[s("h1",{staticClass:"mb-8"},[t._v(t._s(t.currentPorject.name))]),t.currentPorject.paragraphs&&t.currentPorject.paragraphs.length>0?t._l(t.currentPorject.paragraphs,(function(e,r){return s("div",{key:r,staticClass:"info-paragraph mb-5"},[s("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(e.title)}}),t._l(e.content,(function(e,r){return[e.type&&"img"==e.type?s("img",{key:r+"i",staticClass:"info-img mb-5",class:e.class,attrs:{src:t.getImg(e.url)}}):e.type&&"rich"==e.type?s("div",{key:r+"i",class:e.class,domProps:{innerHTML:t._s(e.content)}}):e.type&&"slide"==e.type?s("div",{key:r+"i",staticClass:"slide-box",class:e.class},[t._l(e.images,(function(r,a){return[s("img",{key:a,staticClass:"slide-img",class:t.getClass(a,e.name),attrs:{src:t.getImg(r)},on:{mouseenter:function(s){return t.onHover(a,e.name)}}})]}))],2):s("p",{key:r+"p",staticClass:"info-text mt-2 mb-5",domProps:{innerHTML:t._s(e)}})]}))],2)})):t._e()],2)])},a=[],i=e(7763),c={name:"ProjectDetail",components:{},data(){return{PROJECT_DETAILS:i.$U,projectName:"",currentPorject:{},slideIndices:{}}},computed:{getImg(){return function(t){return e(290)(`./${t}`)}},getClass(){return function(t,s){const e=this.slideIndices[s];return t==e?"active":t==e+1||t==e-1?"secondary":""}}},methods:{onHover(t,s){this.slideIndices={...this.slideIndices,[s]:t}}},mounted(){const{params:{projectName:t}}=this.$route;this.projectName=t,this.currentPorject={...this.PROJECT_DETAILS[t]},this.slideIndices={...i.WC}}},n=c,l=e(1656),o=(0,l.A)(n,r,a,!1,null,null,null),m=o.exports}}]);
//# sourceMappingURL=138.dd0ff53c.js.map