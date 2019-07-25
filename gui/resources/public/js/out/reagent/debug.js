// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__14758__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14759__i = 0, G__14759__a = new Array(arguments.length -  0);
while (G__14759__i < G__14759__a.length) {G__14759__a[G__14759__i] = arguments[G__14759__i + 0]; ++G__14759__i;}
  args = new cljs.core.IndexedSeq(G__14759__a,0,null);
} 
return G__14758__delegate.call(this,args);};
G__14758.cljs$lang$maxFixedArity = 0;
G__14758.cljs$lang$applyTo = (function (arglist__14760){
var args = cljs.core.seq(arglist__14760);
return G__14758__delegate(args);
});
G__14758.cljs$core$IFn$_invoke$arity$variadic = G__14758__delegate;
return G__14758;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__14761__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14762__i = 0, G__14762__a = new Array(arguments.length -  0);
while (G__14762__i < G__14762__a.length) {G__14762__a[G__14762__i] = arguments[G__14762__i + 0]; ++G__14762__i;}
  args = new cljs.core.IndexedSeq(G__14762__a,0,null);
} 
return G__14761__delegate.call(this,args);};
G__14761.cljs$lang$maxFixedArity = 0;
G__14761.cljs$lang$applyTo = (function (arglist__14763){
var args = cljs.core.seq(arglist__14763);
return G__14761__delegate(args);
});
G__14761.cljs$core$IFn$_invoke$arity$variadic = G__14761__delegate;
return G__14761;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
