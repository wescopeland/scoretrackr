module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=16)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@material-ui/core")},function(e,t){e.exports=require("reactstrap")},function(e,t){e.exports=require("react-i18next")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("i18next")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("@material-ui/styles")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("i18next-fs-backend")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("i18next-http-backend")},function(e,t){e.exports=require("@material-ui/core/colors")},function(e,t){e.exports=require("@material-ui/core/styles")},function(e,t,n){e.exports=n(17)},function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r);let s=n(22).default;a.a.createServer(s).listen(3e3,()=>{console.log("🚀 started")}).on("error",e=>{console.log(e)})},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e){e.exports=JSON.parse('{"client":{"css":"/static/css/bundle.7aa39a76.css","js":"/static/js/bundle.1a2ed123.js"},"":{"json":"/../chunks.json","txt":"/static/js/bundle.1a2ed123.js.LICENSE.txt","cjs":"/static/media/getFetch.5e98861f.cjs"}}')},function(e,t){e.exports=require("i18next-http-middleware")},function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(6),s=n.n(a),o=n(9),l=n.n(o),c=n(10),i=n.n(c),u=n(11),p=n.n(u),m=n(0),d=n.n(m),f=n(12),y=n(3),g=n(4),x=n(1),h=(n(18),n(19),n(2));const b=()=>d.a.createElement(x.AppBar,{position:"static"},d.a.createElement(x.Toolbar,{variant:"dense"})),E=Object(x.styled)(x.Typography)({letterSpacing:"0.8rem",textTransform:"uppercase",textAlign:"center"}),v=Object(x.styled)(x.Typography)({letterSpacing:"0.1rem",textAlign:"center"}),S=()=>{const{t:e}=Object(y.useTranslation)("common");return d.a.createElement(h.Container,null,d.a.createElement(h.Row,null,d.a.createElement(h.Col,{className:"p-3"},d.a.createElement(E,{variant:"h4",className:"p-2"},"Scoretrac.kr"),d.a.createElement(v,null,e("header.description")))))},j=Object(x.styled)(x.Typography)({flex:"1 1 auto"}),O=()=>d.a.createElement(d.a.Fragment,null,d.a.createElement(x.List,{className:"pt-1 pb-1"},d.a.createElement(x.ListItem,{className:"d-flex"},d.a.createElement(x.ListItemText,{primary:"Donkey Kong"}),d.a.createElement(x.ListItemText,{primary:"1,218,000",secondary:"Factory settings"}),d.a.createElement(j,null,"Wes Copeland"),d.a.createElement(x.Typography,null,"5 days ago")))),w=()=>d.a.createElement(d.a.Fragment,null,d.a.createElement(O,null),d.a.createElement(x.Divider,null),d.a.createElement(O,null),d.a.createElement(x.Divider,null),d.a.createElement(O,null)),q=()=>d.a.createElement("div",null,d.a.createElement(S,null),d.a.createElement(b,null),d.a.createElement(h.Container,{className:"mt-5"},d.a.createElement(h.Row,null,d.a.createElement(h.Col,null,d.a.createElement(x.Typography,{variant:"h6"},"Most recent submissions"))),d.a.createElement(h.Row,{className:"mt-2"},d.a.createElement(h.Col,null,d.a.createElement(w,null)))));var T=()=>d.a.createElement(d.a.Fragment,null,d.a.createElement(x.CssBaseline,null),d.a.createElement(g.Switch,null,d.a.createElement(g.Route,{exact:!0,path:"/",component:q}))),k=n(5),N=n.n(k),C=n(13),M=n.n(C);const I={fallbackLng:"en",load:"languageOnly",ns:["common"],defaultNS:"common",saveMissing:!0,debug:!0,react:{useSuspense:!1},interpolation:{escapeValue:!1,formatSeparator:",",format:(e,t,n)=>"uppercase"===t?e.toUpperCase():e},wait:process&&!process.release};process&&!process.release&&N.a.use(M.a).use(y.initReactI18next),N.a.isInitialized||N.a.init(I);var P=N.a,R=n(14),$=n(15);var L=Object($.createMuiTheme)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:R.red.A400},type:"light"}});const _=l.a.realpathSync(process.cwd()),A=(D="src",p.a.resolve(_,D));var D;const F=n(20),J=n(21),U=s()();P.use(i.a).init({debug:!1,preload:["en","jp"],ns:["common"],defaultNS:"common",backend:{loadPath:A+"/locales/{{lng}}/{{ns}}.json",addPath:A+"/locales/{{lng}}/{{ns}}.missing.json"},react:{useSuspense:!1}},()=>{U.disable("x-powered-by").use(J.handle(P)).use("/locales",s.a.static(A+"/locales")).use(s.a.static("/Users/wescopeland/Documents/GitHub/scoretrackr-override/scoretrackr/build/public")).get("/*",(e,t)=>{const n=new r.ServerStyleSheets,a={},s=Object(f.renderToString)(n.collect(d.a.createElement(r.ThemeProvider,{theme:L},d.a.createElement(y.I18nextProvider,{i18n:e.i18n},d.a.createElement(g.StaticRouter,{context:a,location:e.url},d.a.createElement(T,null)))))),o=n.toString(),{url:l}=a;if(l)t.redirect(l);else{const n={};e.i18n.languages.forEach(t=>{n[t]=e.i18n.services.resourceStore.data[t]});const r=e.i18n.language;t.status(200).send(`\n            <!doctype html>\n              <html lang="">\n              <head>\n                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n                  <meta charset="utf-8" />\n\n                  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500">\n\n                  <title>Scoretrac.kr</title>\n\n                  <meta name="viewport" content="width=device-width, initial-scale=1">\n                  ${F.client.css?`<link rel="stylesheet" href="${F.client.css}">`:""}\n                  ${o?`<style id='jss-ssr'>${o}</style>`:""}\n                  <script src="${F.client.js}" defer><\/script>\n\n                  <link\n                    rel="stylesheet"\n                    crossOrigin="anonymous"\n                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n                  />\n\n                  <script>\n                    window.initialI18nStore = JSON.parse('${JSON.stringify(n)}');\n                    window.initialLanguage = '${r}';\n                  <\/script>\n              </head>\n              <body>\n                  <div id="root">${s}</div>\n              </body>\n            </html>\n          `)}})});t.default=U}]);
//# sourceMappingURL=server.js.map