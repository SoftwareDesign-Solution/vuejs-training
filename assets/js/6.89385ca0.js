(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{282:function(e,n,o){},338:function(e,n,o){"use strict";o(282)},865:function(e,n,o){"use strict";o.r(n);var t={data:()=>({todos:[{label:"See list transitions",done:!1},{label:"Learn Vue",done:!1},{label:"Use v-for",done:!0}]}),computed:{todos_after_sort(){return this.todos.sort((e,n)=>+e.done-n.done)}}},s=(o(338),o(8)),r=Object(s.a)(t,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"demo"},[n("transition-group",{attrs:{name:"flip-list",tag:"ul"}},e._l(e.todos_after_sort,(function(o,t){return n("li",{key:o.label},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:o.done,expression:"todo.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.done)?e._i(o.done,null)>-1:o.done},on:{change:function(n){var t=o.done,s=n.target,r=!!s.checked;if(Array.isArray(t)){var a=e._i(t,null);s.checked?a<0&&e.$set(o,"done",t.concat([null])):a>-1&&e.$set(o,"done",t.slice(0,a).concat(t.slice(a+1)))}else e.$set(o,"done",r)}}}),e._v("\r\n    Task "+e._s(t)+" : "+e._s(o.label)+"\r\n  ")]),e._v("\r\n  - "),n("i",[e._v(e._s(o.done?"DONE !":"in progress..."))])])})),0)],1)}),[],!1,null,null,null);n.default=r.exports}}]);