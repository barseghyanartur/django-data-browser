(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),i=(a(12),a(3)),o=a(4),m=a(5),u=a(6);a(13);function s(e){return e.field.concrete?l.a.createElement("a",{href:e.field.add_filter_link},"Y"):l.a.createElement(l.a.Fragment,null,"\xa0\xa0")}var d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isToggleOn:!1},n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"link toggle_link",onClick:this.handleClick.bind(this)},"+ ",this.props.title),l.a.createElement("div",{className:"toggle_div",style:{display:this.state.isToggleOn?"block":"none"}},this.props.children))}}]),a}(l.a.Component);function f(e){return l.a.createElement("ul",{className:"fields_list"},e.fields.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(s,{field:e})," ",l.a.createElement("a",{href:e.add_link},e.name))})),e.fks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(d,{title:e.name},l.a.createElement(f,e)))})))}function E(e){return l.a.createElement("div",{id:"body"},l.a.createElement("h1",null,e.query.model),l.a.createElement("p",null,l.a.createElement("a",{href:e.query.csv_link},"Download as CSV")),l.a.createElement("p",null,l.a.createElement("a",{href:e.query.save_link},"Save View")),l.a.createElement("form",{className:"filters",method:"get",action:e.query.base_url},e.query.filters.map((function(e,t){return l.a.createElement("p",{className:e.is_valid?void 0:"error",key:t},l.a.createElement("a",{href:e.remove_link},"\u2718")," ",e.name," ",l.a.createElement("select",{defaultValue:e.lookup},e.lookups.map((function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})))," ","= ",l.a.createElement("input",{type:"text",name:e.url_name,defaultValue:e.value}))})),l.a.createElement("p",null,l.a.createElement("input",{type:"submit"})),l.a.createElement("p",null,"Showing ",e.data.length," results")),l.a.createElement("div",{className:"main_space"},l.a.createElement("div",null,l.a.createElement(f,e.query.all_fields_nested)),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,e.query.sort_fields.map((function(e){var t=e.field,a=e.sort_icon;return l.a.createElement("th",{key:t.name},l.a.createElement("a",{href:t.remove_link},"\u2718")," ",t.concrete?l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:t.add_filter_link},"Y")," ",l.a.createElement("a",{href:t.toggle_sort_link},t.name)," ",a):t.name)})),!e.query.sort_fields.length&&l.a.createElement("th",null,"No fields selected"))),l.a.createElement("tbody",null,e.data.map((function(t,a){return l.a.createElement("tr",{key:a},t.map((function(t,a){return l.a.createElement("td",{key:e.query.sort_fields[a].field.name},t)})))}))))))}var h=function(){var e=JSON.parse(document.getElementById("django-data").textContent);return l.a.createElement(E,e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8ec7ffbb.chunk.js.map