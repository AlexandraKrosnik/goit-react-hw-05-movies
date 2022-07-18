"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[448],{4448:function(n,e,t){t.r(e),t.d(e,{Home:function(){return A},MoviePage:function(){return V},SearchMovie:function(){return Y}});var r,i,a,c,s,o,u,l,p,d,f,x=t(5861),h=t(9439),m=t(7757),v=t.n(m),g=t(3623),w=t(501),Z=t(6871),j=t(3830),b=t(168),y=t(6031),_=y.ZP.li(r||(r=(0,b.Z)(["\n  @media screen and (max-width: 767px) {\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    flex-basis: calc(100% / 3 - 32px);\n    width: 213.3px;\n    margin-left: 32px;\n    margin-top: 32px;\n  }\n  @media screen and (min-width: 1024px) {\n    flex-basis: calc(100% / 4 - 16px);\n    width: 228px;\n    margin-left: 16px;\n  }\n"]))),k=(0,y.ZP)(j.Z)(i||(i=(0,b.Z)(["\n  line-height: 1.2;\n\n  .ant-card-body {\n    padding: 10px;\n    overflow: hidden;\n    flex-grow: 1;\n  }\n\n  .ant-card-meta-description {\n    white-space: nowrap;\n    overflow-x: hidden;\n  }\n"]))),P=y.ZP.img(a||(a=(0,b.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  flex-grow: 1;\n  @media screen and (min-width: 768px) {\n    height: 320px;\n  }\n  @media screen and (min-width: 1024px) {\n    height: 340px;\n  }\n"]))),S=t(184),C=j.Z.Meta,I=function(n){var e=n.id,t=n.title,r=n.img,i=(0,Z.TH)(),a=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://www.remosoftware.com/info/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png";return(0,S.jsx)(_,{children:(0,S.jsx)(w.rU,{to:"/movies/".concat(e),state:{from:i},children:(0,S.jsx)(k,{hoverable:!0,cover:(0,S.jsx)(P,{alt:t,src:a}),children:(0,S.jsx)(C,{title:t,description:t})})})})},E=y.ZP.ul(c||(c=(0,b.Z)(["\n  padding: 0;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -32px;\n    margin-top: -32px;\n  }\n  @media screen and (min-width: 1024px) {\n    margin-left: -16px;\n  }\n"]))),R=function(n){var e=n.list;return(0,S.jsx)(S.Fragment,{children:!!e&&(0,S.jsx)(E,{children:e.map((function(n){var e=n.id,t=n.original_title,r=n.original_name,i=n.poster_path,a=t||r;return(0,S.jsx)(I,{id:e,title:a,img:i},e)}))})})},T=t(2791),W=y.ZP.section(s||(s=(0,b.Z)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]))),z=function(n){var e=n.children;return(0,S.jsx)(W,{children:e})},U=t(9364),H=t(9421),M=t(4307),A=function(){var n=(0,T.useState)(),e=(0,h.Z)(n,2),t=e[0],r=e[1],i=(0,T.useState)(),a=(0,h.Z)(i,2),c=a[0],s=a[1],o=(0,T.useState)(),u=(0,h.Z)(o,2),l=u[0],p=u[1],d=(0,w.lr)(),f=(0,h.Z)(d,2),m=f[0],Z=f[1],j=m.get("page");(0,T.useEffect)((function(){!j&&Z({page:1})}),[Z,j]),(0,T.useEffect)((function(){function n(){return(n=(0,x.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U.rj(j);case 3:e=n.sent,p(e.total_pages),r(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),s("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[j]);return(0,S.jsx)(z,{children:(0,S.jsxs)(g.W,{children:[!!t&&(0,S.jsx)(R,{list:t}),!!c&&(0,S.jsx)(H.Z,{description:c}),!!t&&(0,S.jsx)(M.Z,{defaultCurrent:j,total:l,onChange:function(n){Z({page:n}),window.scrollTo(0,0)},style:{display:"flex",justifyContent:"center"}})]})})},B=y.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: row;\n\n  width: 100%;\n  margin-bottom: 20px;\n"]))),D=y.ZP.h1(u||(u=(0,b.Z)([""]))),F=y.ZP.div(l||(l=(0,b.Z)(["\n  width: 30%;\n\n  margin-right: 30px;\n"]))),G=y.ZP.img(p||(p=(0,b.Z)(["\n  display: inline-block;\n  border: 1px solid #716f6f;\n  padding: 5px;\n\n  width: 100%;\n"]))),q=y.ZP.div(d||(d=(0,b.Z)(["\n  display: block;\n  width: 100%;\n  font-size: 18px;\n\n  & .ant-descriptions-item {\n    padding-bottom: 8px;\n  }\n  & .ant-descriptions-item-content {\n    font-size: 18px;\n  }\n  & .ant-descriptions-item-label {\n    font-size: 18px;\n    font-weight: 700;\n  }\n"]))),K=y.ZP.div(f||(f=(0,b.Z)(["\n  font-size: 18px;\n"]))),L=t(394),O=function(n){var e,t=n.movie,r=t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://www.remosoftware.com/info/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png";return(0,S.jsxs)(g.W,{children:[(0,S.jsx)(D,{children:t.original_title}),(0,S.jsxs)(B,{children:[(0,S.jsx)(F,{children:(0,S.jsx)(G,{src:r,alt:t.original_title})}),(0,S.jsx)(q,{children:(0,S.jsxs)(L.Z,{column:1,children:[(0,S.jsxs)(L.Z.Item,{label:"Rating",children:[t.vote_average," (",t.vote_count,")"]}),(0,S.jsx)(L.Z.Item,{label:"Release date",children:t.release_date?t.release_date.substr(0,4):""}),(0,S.jsx)(L.Z.Item,{label:"Country",children:null===t||void 0===t||null===(e=t.production_countries[0])||void 0===e?void 0:e.name}),(0,S.jsx)(L.Z.Item,{label:"Production companies",children:null===t||void 0===t?void 0:t.production_companies.map((function(n){return n.name})).join(", ")}),(0,S.jsx)(L.Z.Item,{label:"Genre",children:null===t||void 0===t?void 0:t.genres.map((function(n){return n.name})).join(", ")}),(0,S.jsx)(L.Z.Item,{label:"Status",children:null===t||void 0===t?void 0:t.status}),(0,S.jsxs)(L.Z.Item,{label:"Runtime",children:[null===t||void 0===t?void 0:t.runtime," min."]})]})})]}),(0,S.jsxs)(K,{children:[(0,S.jsx)("h2",{children:"About:"}),(0,S.jsx)("p",{children:t.overview})]})]})},J=t(6899),N=t(435),Q=t(9372),V=function(){var n=(0,T.useState)(),e=(0,h.Z)(n,2),t=e[0],r=e[1],i=(0,T.useState)(),a=(0,h.Z)(i,2),c=a[0],s=a[1],o=(0,Z.UO)().movieId,u=(0,Z.TH)().state,l=J.Z.TabPane,p=(0,Z.s0)();(0,T.useEffect)((function(){function n(){return(n=(0,x.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U.Pg(o);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),s("\u041d\u0435\u043c\u0430\u0454 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457 \u043f\u0440\u043e \u0444\u0456\u043b\u044c\u043c!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[o]);return(0,S.jsxs)(z,{children:[(0,S.jsx)(g.W,{children:(0,S.jsx)(N.Z,{type:"text ",icon:(0,S.jsx)(Q.Z,{}),onClick:function(){null!==u&&void 0!==u&&u.from?p(u.from.pathname+u.from.search):p("/")},children:"Go back"})}),!!t&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(O,{movie:t}),(0,S.jsx)(g.W,{children:(0,S.jsxs)(J.Z,{activeKey:"3",onChange:function(n){"1"===n?p("/movies/".concat(o,"/cast")):"2"===n&&p("/movies/".concat(o,"/reviews"))},children:[(0,S.jsx)(l,{tab:"Cast"},"1"),(0,S.jsx)(l,{tab:"Reviews"},"2")]})}),(0,S.jsx)(Z.j3,{})]}),!t&&(0,S.jsx)(H.Z,{description:c})]})},X=t(7031).Z.Search,Y=function(){var n=(0,T.useState)(!1),e=(0,h.Z)(n,2),t=e[0],r=e[1],i=(0,T.useState)(),a=(0,h.Z)(i,2),c=a[0],s=a[1],o=(0,T.useState)(),u=(0,h.Z)(o,2),l=u[0],p=u[1],d=(0,T.useState)("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443"),f=(0,h.Z)(d,2),m=f[0],Z=f[1],j=(0,w.lr)(),b=(0,h.Z)(j,2),y=b[0],_=b[1],k=y.get("movie"),P=y.get("page");(0,T.useEffect)((function(){!P&&_({page:1})}),[_,P]),(0,T.useEffect)((function(){function n(){return(n=(0,x.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!1),r(!0),n.next=5,U.Ph(k,P);case 5:e=n.sent,p(e.total_pages),s(e.results),r(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),Z("\u041f\u043e \u0434\u0430\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u0444\u0456\u043b\u044c\u043c\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}k&&function(){n.apply(this,arguments)}()}),[k,P]);return(0,S.jsxs)(g.W,{children:[(0,S.jsx)(z,{children:(0,S.jsx)(X,{placeholder:"Search movie",onSearch:function(n){_({movie:n.trim(),page:P})},enterButton:!0,loading:t})}),(0,S.jsxs)(z,{children:[!!c&&(0,S.jsx)(R,{list:c}),(!!m||!c)&&(0,S.jsx)(H.Z,{description:m}),!!c&&(0,S.jsx)(M.Z,{defaultCurrent:P,total:l,onChange:function(n){_({movie:k,page:n}),window.scrollTo(0,0)},style:{display:"flex",justifyContent:"center"}})]})]})}},9364:function(n,e,t){t.d(e,{BA:function(){return p},Pg:function(){return l},Ph:function(){return f},Uj:function(){return d},rj:function(){return u}});var r=t(5861),i=t(7757),a=t.n(i),c=t(4569),s=t.n(c),o="0fd9891b8c0278b88b0a2b325b6369a1";s().defaults.baseURL="https://api.themoviedb.org/";var u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e||(e=1),n.next=3,s().get("3/trending/all/day?api_key=".concat(o,"&page=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/movie/".concat(e,"?api_key=").concat(o,"&append_to_response=videos"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/search/movie?api_key=".concat(o,"&query=").concat(e,"&page=1&include_adult=false&page=").concat(t));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=448.8680da0a.chunk.js.map