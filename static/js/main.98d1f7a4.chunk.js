(this["webpackJsonpfilmaria-app"]=this["webpackJsonpfilmaria-app"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(20),s=n.n(a),r=(n(26),n(7)),o=n(8),l=n(10),j=n(9),u=(n(27),n(12)),h=n(2),f=n(14),m=(n(28),n(1)),b=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={filmes:[]},c.loadFilmes=c.loadFilmes.bind(Object(f.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadFilmes()}},{key:"loadFilmes",value:function(){var t=this;fetch("https://sujeitoprogramador.com/r-api/?api=filmes").then((function(t){return t.json()})).then((function(e){t.setState({filmes:e}),console.log(e)}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"lista-filmes",children:this.state.filmes.map((function(t){return Object(m.jsxs)("article",{className:"filme",children:[Object(m.jsx)("strong",{children:t.nome}),Object(m.jsx)("img",{src:t.foto,alt:"Capa"}),Object(m.jsx)(u.b,{to:"/filme/".concat(t.id),children:"Acessar"})]},t.id)}))})})}}]),n}(c.Component),d=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada"})})}}]),n}(c.Component),p=(n(35),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={filme:[]},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id,n="https://sujeitoprogramador.com/r-api/?api=filmes/".concat(e);fetch(n).then((function(t){return t.json()})).then((function(e){t.setState({filme:e}),console.log(e)}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"filme-info",children:[Object(m.jsx)("h1",{children:this.state.filme.nome}),Object(m.jsx)("img",{src:this.state.filme.foto,alt:""}),0!==this.state.filme.length&&Object(m.jsx)("h3",{children:"Sinopse"}),this.state.filme.sinopse]})}}]),n}(c.Component)),O=(n(36),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"header",children:Object(m.jsx)(u.b,{to:"/",children:"Filmaria"})})}}]),n}(c.Component)),x=function(){return Object(m.jsxs)(u.a,{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{exact:!0,path:"/",component:b}),Object(m.jsx)(h.a,{exact:!0,path:"/filme/:id",component:p}),Object(m.jsx)(h.a,{path:"*",component:d})]})]})},v=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"app",children:Object(m.jsx)(x,{})})}}]),n}(c.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.98d1f7a4.chunk.js.map