"use strict";(self.webpackChunkhw=self.webpackChunkhw||[]).push([[180],{180:function(t,e,n){n.r(e),n.d(e,{MovieReviews:function(){return w}});var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),s=n(6871),i=n(2791),o=n(9364),p=n(3623),f=n(7711),v=n(3708),d=n(9529),h=n(184),l=function(t){var e=t.reviewsMovie;return(0,h.jsx)(f.ZP,{itemLayout:"horizontal",dataSource:e,renderItem:function(t){var e=t.author,n=t.author_details,r=t.content,a=null!==n&&void 0!==n&&n.avatar_path?null!==n&&void 0!==n&&n.avatar_path.includes("/https://")?n.avatar_path.slice(1):"https://image.tmdb.org/t/p/w500/".concat(n.avatar_path):(0,h.jsx)(d.Z,{});return(0,h.jsx)(f.ZP.Item,{children:(0,h.jsx)(f.ZP.Item.Meta,{avatar:(0,h.jsx)(v.C,{src:a}),title:(0,h.jsx)("a",{href:"https://ant.design",children:e}),description:r})},e)}})},x=n(7106),w=function(){var t=(0,i.useState)(),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,i.useState)(!1),v=(0,a.Z)(f,2),d=v[0],w=v[1],m=(0,s.UO)().movieId;return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,o.Uj(m);case 4:e=t.sent,c(e.results),w(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),w(!1),c(null);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[m]),(0,h.jsxs)(p.W,{children:[d&&(0,h.jsx)(x.Z,{style:{fontSize:36,display:"flex",justifyContent:"center"},spin:!0}),0!==(null===n||void 0===n?void 0:n.length)&&n?(0,h.jsx)(l,{reviewsMovie:n}):!d&&(0,h.jsx)("p",{children:"We don`t have any reviews for this movie"})]})}},9364:function(t,e,n){n.d(e,{BA:function(){return f},Pg:function(){return p},Ph:function(){return d},Uj:function(){return v},rj:function(){return o}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),i="0fd9891b8c0278b88b0a2b325b6369a1";s().defaults.baseURL="https://api.themoviedb.org/";var o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||(e=1),t.next=3,s().get("3/trending/all/day?api_key=".concat(i,"&page=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("3/movie/".concat(e,"?api_key=").concat(i,"&append_to_response=videos"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("3/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("3/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("3/search/movie?api_key=".concat(i,"&query=").concat(e,"&page=1&include_adult=false&page=").concat(n));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=180.0c7b248e.chunk.js.map