(this["webpackJsonpreact-chat-lite"]=this["webpackJsonpreact-chat-lite"]||[]).push([[0],{10:function(e,t,o){},11:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(1),d=o.n(i),c=o(3),s=o.n(c),r=(o(9),o(10),"ADD-TODO"),a="DELETE-TODO",h="CHANGE-TODO",l="CHANGE-CHECKED",u="ADD-TODO-TO-STORAGE",p="todo",g={_todo:[{todos:"todo 1",checked:!1,id:1},{todos:"todo 2",checked:!0,id:2},{todos:"todo 3",checked:!1,id:3}],newTodoLine:"",_rerender:function(){},getTodo:function(){return this._todo},getTodosFromStorage:function(){var e=localStorage.getItem(p);return console.log(e),"string"===typeof e?(console.log("nan"),JSON.parse(e)):[]},subscriber:function(e){this._rerender=e},_setTodo:function(e){localStorage.setItem(p,JSON.stringify(e)),this._rerender(g)},dispatch:function(e){if(e.type===r){if(console.log("add task"),this.newTodoLine.trim().length>0){var t={todos:this.newTodoLine,checked:!1,id:Date.now()};this._todo.push(t),this.newTodoLine="",this._rerender(g)}}else if(e.type===a){console.log("delete todo");for(var o=this.getTodosFromStorage(),n=0;n<o.length;n++)e.id==o[n].id&&o.splice(n,1);this._setTodo(o)}else if(e.type===h)this.newTodoLine=e.value,console.log("CHANGE-TODO"),this._rerender(g);else if(e.type===l)for(var i=this.getTodosFromStorage(),d=0;d<i.length;d++)e.id==i[d].id&&(i[d].checked=!i[d].checked,this._setTodo(i));else if(e.type===u){console.log("storage todo");var c=this.getTodosFromStorage();if(this.newTodoLine.trim().length>0){var s={todos:this.newTodoLine,checked:!1,id:Date.now()};c.push(s),this.newTodoLine="",this._rerender(g),this._setTodo(c)}}}},f=function(){return{type:u}};window.state=g;var j=g,T=function(e){var t="todo-item ".concat(e.checked);return Object(n.jsxs)("div",{className:t,id:e.id,children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",checked:e.checked,onChange:function(t){var o=t.target.parentElement.parentElement.id;e.dispatch({type:l,id:o})}}),e.todos]}),Object(n.jsx)("button",{className:"delete",onClick:function(t){var o=t.target.parentElement.id;e.dispatch({type:a,id:o})},children:"\u2716"})]})},O=function(e){return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("textarea",{onChange:function(t){var o=t.target.value;e.dispatch({type:h,value:o})},onKeyDown:function(t){13===t.keyCode&&(t.preventDefault(),e.dispatch(f()))},rows:"3",value:e.text,placeholder:"Do you really wanna make a new todo?"}),Object(n.jsx)("button",{className:"add-todo",onClick:function(){e.dispatch(f())},children:"Add Todo"})]})};var b=function(e){var t=e.state.getTodosFromStorage().map((function(t){return Object(n.jsx)(T,{id:t.id,todos:t.todos,checked:t.checked,dispatch:e.dispatch})}));return console.log(t),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"header",children:"To-do List by React"}),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{children:t.length?t:Object(n.jsx)("p",{className:"no-todo",children:"You don't have todo!"})}),Object(n.jsx)(O,{dispatch:e.dispatch,text:e.state.newTodoLine})]})]})},v=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,12)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,d=t.getLCP,c=t.getTTFB;o(e),n(e),i(e),d(e),c(e)}))},m=function(e){s.a.render(Object(n.jsx)(d.a.StrictMode,{children:Object(n.jsx)(b,{state:e,dispatch:e.dispatch.bind(e)})}),document.getElementById("root"))};m(j),j.subscriber(m),v()},9:function(e,t,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.98842124.chunk.js.map