(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(14),c=a.n(s),i=(a(21),a(3)),l=a.n(i),o=a(4),u=a(16),d=a(15),j=a.n(d),m={getAll:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},b=a(0),f=function(e){var t=e.onClick;return Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("div",{className:"header-title",children:"Twitch Streamers"}),Object(b.jsxs)("div",{className:"header-status",onClick:t,children:[Object(b.jsx)("div",{id:"header-status-all",className:"status-select",children:"All"}),Object(b.jsx)("div",{id:"header-status-online",className:"status-select",children:"Online"}),Object(b.jsx)("div",{id:"header-status-offline",className:"status-select",children:"Offline"})]})]})},h=function(e){var t=e.streamer,a=t[0].is_live?"streamer-online":"streamer-offline";return Object(b.jsxs)("div",{className:"streamer ".concat(a),children:[Object(b.jsxs)("div",{className:"stream-logo-name",children:[Object(b.jsx)("div",{className:"stream-logo-section",children:Object(b.jsx)("img",{src:t[0].thumbnail_url,className:"logo",alt:"logo of streamer"})}),Object(b.jsx)("div",{className:"stream-name-section",children:Object(b.jsx)("a",{href:"https://www.twitch.tv/".concat(t[0].display_name),children:t[0].display_name})})]}),Object(b.jsx)("div",{className:"stream-status-section",children:t[0].is_live?"".concat(t[0].game_name,": ").concat(t[0].title):"Offline"})]})},v=function(){var e="all",t="online",a="offline",r=Object(n.useState)([]),s=Object(u.a)(r,2),c=s[0],i=s[1],d=function(e,t){var a=e[0].is_live,n=t[0].is_live,r=e[0].display_name,s=t[0].display_name;return n-a||r.localeCompare(s)},j=function(){var n=Object(o.a)(l.a.mark((function n(r){var s,c,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.getAll();case 2:s=n.sent,n.t0=r,n.next=n.t0===e?6:n.t0===t?8:n.t0===a?11:14;break;case 6:return i(s.sort(d)),n.abrupt("break",16);case 8:return c=s.filter((function(e){return!0===e[0].is_live})).sort(d),i(c),n.abrupt("break",16);case 11:return o=s.filter((function(e){return!1===e[0].is_live})).sort(d),i(o),n.abrupt("break",16);case 14:return console.error("no keyword"),n.abrupt("break",16);case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(n.useEffect)((function(){j(e)}),[]),console.log(c),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsx)(f,{onClick:function(n){switch(console.log("clicked: ".concat(n.target.id)),n.target.id){case"header-status-all":j(e);break;case"header-status-online":j(t);break;case"header-status-offline":j(a)}}}),Object(b.jsx)("div",{className:"body-container",children:c.map((function(e){return Object(b.jsx)(h,{streamer:e},e[0].id)}))})]})})};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c6827a37.chunk.js.map