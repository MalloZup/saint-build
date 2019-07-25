// Compiled by ClojureScript 1.10.520 {}
goog.provide('myapp.core');
goog.require('cljs.core');
goog.require('reagent.core');
myapp.core.lister = (function myapp$core$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function myapp$core$lister_$_iter__23604(s__23605){
return (new cljs.core.LazySeq(null,(function (){
var s__23605__$1 = s__23605;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23605__$1);
if(temp__5735__auto__){
var s__23605__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23605__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23605__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23607 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23606 = (0);
while(true){
if((i__23606 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__23606);
cljs.core.chunk_append.call(null,b__23607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__23608 = (i__23606 + (1));
i__23606 = G__23608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23607),myapp$core$lister_$_iter__23604.call(null,cljs.core.chunk_rest.call(null,s__23605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23607),null);
}
} else {
var item = cljs.core.first.call(null,s__23605__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),myapp$core$lister_$_iter__23604.call(null,cljs.core.rest.call(null,s__23605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,items);
})()], null);
});
myapp.core.lister_user = (function myapp$core$lister_user(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"50px"], null)], null),"Welcome to saint-build"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.core.lister,cljs.core.range.call(null,(5))], null)], null);
});
myapp.core.reload = (function myapp$core$reload(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myapp.core.lister_user], null),document.getElementById("app"));
});
myapp.core.init_BANG_ = (function myapp$core$init_BANG_(){
return myapp.core.reload.call(null);
});
myapp.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map
