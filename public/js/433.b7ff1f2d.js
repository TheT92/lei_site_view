"use strict";(self["webpackChunkmy_site"]=self["webpackChunkmy_site"]||[]).push([[433],{928:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"design page-container"},e._l(e.DESIGN_CONTENTS,(function(t,i){return s("div",{key:i,staticClass:"info-paragraph"},[s("h2",[e._v(e._s(t.title))]),e._l(t.paragraphs,(function(t,i){return[t.type&&"img"==t.type?s("img",{key:i+"i",staticClass:"info-img",class:t.class,attrs:{src:e.getImg(t.url)}}):t.type&&"rich"==t.type?s("div",{key:i+"r",class:t.class,domProps:{innerHTML:e._s(t.content)}}):t.type&&"slide"==t.type?s("div",{key:i+"s",staticClass:"slide-box",class:t.class,on:{mouseleave:function(s){return e.resetSlide(t.name)}}},[e._l(t.images,(function(i,n){return[s("img",{key:n,staticClass:"slide-img",class:e.getClass(n,t.name),attrs:{src:e.getImg(i)},on:{mouseenter:function(s){return e.onHover(n,t.name)}}})]}))],2):t.type&&"swipe"==t.type?s("div",{key:i+"sw",staticClass:"position-relative w-100 overflow-hidden",class:t.class},[s("img",{staticClass:"img-icon arrow-left",attrs:{src:e.getImg("aftersale/arrowleft.png")},on:{click:function(s){return e.onSwipe(0)}}}),s("img",{staticClass:"img-icon arrow-right",attrs:{src:e.getImg("aftersale/arrowright.png")},on:{click:function(s){return e.onSwipe(1)}}}),e._l(t.images,(function(t,i){return[s("img",{key:i,staticClass:"w-100 swipe-img",class:0==i&&e.swipeIndex?"swiped":"",attrs:{src:e.getImg(t)}})]}))],2):t.type&&"imgViewer"==t.type?s("img-viewer",{key:i+"iv",class:t.className,attrs:{galleryID:t.id,images:t.images}}):s("p",{key:i+"p",staticClass:"fs-20 fw-3",domProps:{innerHTML:e._s(t)}})]}))],2)})),0)},n=[],r=t(7763),a=t(722),c={name:"DesignPage",components:{imgViewer:a.A},data(){return{DESIGN_CONTENTS:r.m3,slideIndices:{},swipeIndex:0}},computed:{getImg(){return function(e){return t(290)(`./${e}`)}},getClass(){return function(e,s){const t=this.slideIndices[s];return e==t?"active":e==t+1||e==t-1?"secondary":""}}},methods:{onHover(e,s){this.slideIndices={...this.slideIndices,[s]:e}},resetSlide(e){this.slideIndices={...this.slideIndices,[e]:r.WC[e]}},onSwipe(e){this.swipeIndex=e}},mounted(){this.slideIndices={...r.WC}}},l=c,o=t(1656),g=(0,o.A)(l,i,n,!1,null,null,null),d=g.exports}}]);
//# sourceMappingURL=433.b7ff1f2d.js.map