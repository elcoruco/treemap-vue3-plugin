import{ref as n,computed as t,openBlock as e,createElementBlock as r,normalizeClass as i,normalizeStyle as o,unref as u,Fragment as a,renderList as h,createCommentVNode as l,createElementVNode as c}from"vue";function f(n){var t=0,e=n.children,r=e&&e.length;if(r)for(;--r>=0;)t+=e[r].value;else t=1;n.value=t}function d(n,t){n instanceof Map?(n=[void 0,n],void 0===t&&(t=p)):void 0===t&&(t=s);for(var e,r,i,o,u,a=new y(n),h=[a];e=h.pop();)if((i=t(e.data))&&(u=(i=Array.from(i)).length))for(e.children=i,o=u-1;o>=0;--o)h.push(r=i[o]=new y(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(g)}function s(n){return n.children}function p(n){return Array.isArray(n)?n[1]:null}function v(n){void 0!==n.data.value&&(n.value=n.data.value),n.data=n.data.data}function g(n){var t=0;do{n.height=t}while((n=n.parent)&&n.height<++t)}function y(n){this.data=n,this.depth=this.height=0,this.parent=null}function x(n){if("function"!=typeof n)throw new Error;return n}function m(){return 0}function w(n){return function(){return n}}function k(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}function B(n,t,e,r,i){for(var o,u=n.children,a=-1,h=u.length,l=n.value&&(r-t)/n.value;++a<h;)(o=u[a]).y0=e,o.y1=i,o.x0=t,o.x1=t+=o.value*l}function M(n,t,e,r,i){for(var o,u=n.children,a=-1,h=u.length,l=n.value&&(i-e)/n.value;++a<h;)(o=u[a]).x0=t,o.x1=r,o.y0=e,o.y1=e+=o.value*l}y.prototype=d.prototype={constructor:y,count:function(){return this.eachAfter(f)},each:function(n,t){let e=-1;for(const r of this)n.call(t,r,++e,this);return this},eachAfter:function(n,t){for(var e,r,i,o=this,u=[o],a=[],h=-1;o=u.pop();)if(a.push(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r]);for(;o=a.pop();)n.call(t,o,++h,this);return this},eachBefore:function(n,t){for(var e,r,i=this,o=[i],u=-1;i=o.pop();)if(n.call(t,i,++u,this),e=i.children)for(r=e.length-1;r>=0;--r)o.push(e[r]);return this},find:function(n,t){let e=-1;for(const r of this)if(n.call(t,r,++e,this))return r},sum:function(n){return this.eachAfter((function(t){for(var e=+n(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)e+=r[i].value;t.value=e}))},sort:function(n){return this.eachBefore((function(t){t.children&&t.children.sort(n)}))},path:function(n){for(var t=this,e=function(n,t){if(n===t)return n;var e=n.ancestors(),r=t.ancestors(),i=null;n=e.pop(),t=r.pop();for(;n===t;)i=n,n=e.pop(),t=r.pop();return i}(t,n),r=[t];t!==e;)t=t.parent,r.push(t);for(var i=r.length;n!==e;)r.splice(i,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,t=[n];n=n.parent;)t.push(n);return t},descendants:function(){return Array.from(this)},leaves:function(){var n=[];return this.eachBefore((function(t){t.children||n.push(t)})),n},links:function(){var n=this,t=[];return n.each((function(e){e!==n&&t.push({source:e.parent,target:e})})),t},copy:function(){return d(this).eachBefore(v)},[Symbol.iterator]:function*(){var n,t,e,r,i=this,o=[i];do{for(n=o.reverse(),o=[];i=n.pop();)if(yield i,t=i.children)for(e=0,r=t.length;e<r;++e)o.push(t[e])}while(o.length)}};var b=function n(t){function e(n,e,r,i,o){!function(n,t,e,r,i,o){for(var u,a,h,l,c,f,d,s,p,v,g,y=[],x=t.children,m=0,w=0,k=x.length,b=t.value;m<k;){h=i-e,l=o-r;do{c=x[w++].value}while(!c&&w<k);for(f=d=c,g=c*c*(v=Math.max(l/h,h/l)/(b*n)),p=Math.max(d/g,g/f);w<k;++w){if(c+=a=x[w].value,a<f&&(f=a),a>d&&(d=a),g=c*c*v,(s=Math.max(d/g,g/f))>p){c-=a;break}p=s}y.push(u={value:c,dice:h<l,children:x.slice(m,w)}),u.dice?B(u,e,r,i,b?r+=l*c/b:o):M(u,e,r,b?e+=h*c/b:i,o),b-=c,m=w}}(t,n,e,r,i,o)}return e.ratio=function(t){return n((t=+t)>1?t:1)},e}((1+Math.sqrt(5))/2);const _=c("h1",null,null,-1),A=["viewBox"],T={key:0},I=["x","y","fill","width","height"];var O={__name:"TreemapView",props:["width","height","background","data","margin","color"],setup(c){const f=c,s=n({top:10,right:10,bottom:50,left:50}),p=n(400),v=n(400),g=n("black"),y=n("white"),B=t((()=>f.width||v.value)),M=t((()=>f.height||p.value)),O=t((()=>f.background||y.value));t((()=>f.margin||s.value)),t((()=>f.color||g.value));const $=t((()=>f.data?d({name:"root",children:f.data}):null)),z=t((()=>function(){var n=b,t=!1,e=1,r=1,i=[0],o=m,u=m,a=m,h=m,l=m;function c(n){return n.x0=n.y0=0,n.x1=e,n.y1=r,n.eachBefore(f),i=[0],t&&n.eachBefore(k),n}function f(t){var e=i[t.depth],r=t.x0+e,c=t.y0+e,f=t.x1-e,d=t.y1-e;f<r&&(r=f=(r+f)/2),d<c&&(c=d=(c+d)/2),t.x0=r,t.y0=c,t.x1=f,t.y1=d,t.children&&(e=i[t.depth+1]=o(t)/2,r+=l(t)-e,c+=u(t)-e,(f-=a(t)-e)<r&&(r=f=(r+f)/2),(d-=h(t)-e)<c&&(c=d=(c+d)/2),n(t,r,c,f,d))}return c.round=function(n){return arguments.length?(t=!!n,c):t},c.size=function(n){return arguments.length?(e=+n[0],r=+n[1],c):[e,r]},c.tile=function(t){return arguments.length?(n=x(t),c):n},c.padding=function(n){return arguments.length?c.paddingInner(n).paddingOuter(n):c.paddingInner()},c.paddingInner=function(n){return arguments.length?(o="function"==typeof n?n:w(+n),c):o},c.paddingOuter=function(n){return arguments.length?c.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):c.paddingTop()},c.paddingTop=function(n){return arguments.length?(u="function"==typeof n?n:w(+n),c):u},c.paddingRight=function(n){return arguments.length?(a="function"==typeof n?n:w(+n),c):a},c.paddingBottom=function(n){return arguments.length?(h="function"==typeof n?n:w(+n),c):h},c.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:w(+n),c):l},c}().size([B.value,M.value]).padding(3).paddingOuter(10))),L=t((()=>$.value?z.value($.value.sum((n=>n.value))).descendants():null));return(n,t)=>(e(),r("div",{class:i("gf_simplestack_container")},[_,(e(),r("svg",{ref:"svg",xmlns:"http://www.w3.org/2000/svg",style:o({background:u(O)}),version:"1.2",baseProfile:"tiny",width:"100%",height:"100%",viewBox:`0 0 ${u(B)} ${u(M)}`,"stroke-linecap":"round","stroke-linejoin":"round",class:i("gf_simplestack_svg")},[u(L)?(e(),r("g",T,[(e(!0),r(a,null,h(u(L),((n,t)=>(e(),r("rect",{x:n.x0,y:n.y0,fill:n.color,width:n.x1-n.x0,height:n.y1-n.y0,key:`rect-${t}`},null,8,I)))),128))])):l("v-if",!0)],14,A))],2))},__file:"src/TreemapView.vue"},$={install:(n,t)=>{n.component("gf-treemap",O)}};export{$ as default};
