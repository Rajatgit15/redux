(this.webpackJsonppractical=this.webpackJsonppractical||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=(a(19),a(1)),o=a(2),i=a(5),u=a(4),p=a(3),m=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=e.getTitle.value,n=e.getMessage.value,r={id:new Date,title:a,message:n,edit:!1};e.props.dispatch({type:"ADD_POST",data:r}),e.getTitle.value="",e.getMessage.value=""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"post-container"},r.a.createElement("h1",{className:"post_heading"},"Create Post"),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("input",{required:!0,type:"text",placeholder:"Enter post title",ref:function(t){return e.getTitle=t}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{required:!0,row:"5",cols:"28",placeholder:"Enter post",ref:function(t){return e.getMessage=t}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"post")))}}]),a}(n.Component),d=Object(p.b)()(m),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"post"},r.a.createElement("h2",{className:"post_title"},this.props.post.title),r.a.createElement("p",{className:"post_message"},this.props.post.message),r.a.createElement("div",{className:"control-buttons"},r.a.createElement("button",{className:"edit",onClick:function(){return e.props.dispatch({type:"EDIT_POST",id:e.props.post.id})}},"Edit"),r.a.createElement("button",{className:"delete",onClick:function(){return e.props.dispatch({type:"DELETE_POST",id:e.props.post.id})}},"Delete")))}}]),a}(n.Component),b=Object(p.b)()(E),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleEdit=function(t){t.preventDefault();var a={newTitle:e.getTitle.value,newMessage:e.getMessage.value};e.props.dispatch({type:"UPDATE",id:e.props.post.id,data:a})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{key:this.props.post.id,className:"post"},r.a.createElement("form",{className:"form",onSubmit:this.handleEdit},r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getTitle=t},defaultValue:this.props.post.title,placeholder:"Enter Post Title"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{required:!0,rows:"5",ref:function(t){return e.getMessage=t},defaultValue:this.props.post.message,cols:"28",placeholder:"Enter Post"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Update")))}}]),a}(n.Component),f=Object(p.b)()(h),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"post_heading"},"All Posts"),this.props.posts.map((function(e){return r.a.createElement("div",{key:e.id},e.edit?r.a.createElement(f,{post:e,key:e.id}):r.a.createElement(b,{key:e.id,post:e}))})))}}]),a}(n.Component),O=Object(p.b)((function(e){return{posts:e}}))(v),g=(a(26),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"navbar"},r.a.createElement("h2",{className:"center"},"Post It")),r.a.createElement(d,null),r.a.createElement(O,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(6),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return e.concat([t.data]);case"DELETE_POST":return e.filter((function(e){return e.id!==t.id}));case"EDIT_POST":return e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{edit:!e.edit}):e}));case"UPDATE":return e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{title:t.data.newTitle,message:t.data.newMessage,edit:!e.edit}):e}));default:return e}},T=a(8),w=Object(T.b)(y);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:w},r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7a79a281.chunk.js.map