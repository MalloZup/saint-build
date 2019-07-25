// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23205){
var map__23206 = p__23205;
var map__23206__$1 = (((((!((map__23206 == null))))?(((((map__23206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23206):map__23206);
var m = map__23206__$1;
var n = cljs.core.get.call(null,map__23206__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23206__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23208_23240 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23209_23241 = null;
var count__23210_23242 = (0);
var i__23211_23243 = (0);
while(true){
if((i__23211_23243 < count__23210_23242)){
var f_23244 = cljs.core._nth.call(null,chunk__23209_23241,i__23211_23243);
cljs.core.println.call(null,"  ",f_23244);


var G__23245 = seq__23208_23240;
var G__23246 = chunk__23209_23241;
var G__23247 = count__23210_23242;
var G__23248 = (i__23211_23243 + (1));
seq__23208_23240 = G__23245;
chunk__23209_23241 = G__23246;
count__23210_23242 = G__23247;
i__23211_23243 = G__23248;
continue;
} else {
var temp__5735__auto___23249 = cljs.core.seq.call(null,seq__23208_23240);
if(temp__5735__auto___23249){
var seq__23208_23250__$1 = temp__5735__auto___23249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23208_23250__$1)){
var c__4550__auto___23251 = cljs.core.chunk_first.call(null,seq__23208_23250__$1);
var G__23252 = cljs.core.chunk_rest.call(null,seq__23208_23250__$1);
var G__23253 = c__4550__auto___23251;
var G__23254 = cljs.core.count.call(null,c__4550__auto___23251);
var G__23255 = (0);
seq__23208_23240 = G__23252;
chunk__23209_23241 = G__23253;
count__23210_23242 = G__23254;
i__23211_23243 = G__23255;
continue;
} else {
var f_23256 = cljs.core.first.call(null,seq__23208_23250__$1);
cljs.core.println.call(null,"  ",f_23256);


var G__23257 = cljs.core.next.call(null,seq__23208_23250__$1);
var G__23258 = null;
var G__23259 = (0);
var G__23260 = (0);
seq__23208_23240 = G__23257;
chunk__23209_23241 = G__23258;
count__23210_23242 = G__23259;
i__23211_23243 = G__23260;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23261 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23261);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23261)))?cljs.core.second.call(null,arglists_23261):arglists_23261));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23212_23262 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23213_23263 = null;
var count__23214_23264 = (0);
var i__23215_23265 = (0);
while(true){
if((i__23215_23265 < count__23214_23264)){
var vec__23226_23266 = cljs.core._nth.call(null,chunk__23213_23263,i__23215_23265);
var name_23267 = cljs.core.nth.call(null,vec__23226_23266,(0),null);
var map__23229_23268 = cljs.core.nth.call(null,vec__23226_23266,(1),null);
var map__23229_23269__$1 = (((((!((map__23229_23268 == null))))?(((((map__23229_23268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23229_23268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23229_23268):map__23229_23268);
var doc_23270 = cljs.core.get.call(null,map__23229_23269__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23271 = cljs.core.get.call(null,map__23229_23269__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23267);

cljs.core.println.call(null," ",arglists_23271);

if(cljs.core.truth_(doc_23270)){
cljs.core.println.call(null," ",doc_23270);
} else {
}


var G__23272 = seq__23212_23262;
var G__23273 = chunk__23213_23263;
var G__23274 = count__23214_23264;
var G__23275 = (i__23215_23265 + (1));
seq__23212_23262 = G__23272;
chunk__23213_23263 = G__23273;
count__23214_23264 = G__23274;
i__23215_23265 = G__23275;
continue;
} else {
var temp__5735__auto___23276 = cljs.core.seq.call(null,seq__23212_23262);
if(temp__5735__auto___23276){
var seq__23212_23277__$1 = temp__5735__auto___23276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23212_23277__$1)){
var c__4550__auto___23278 = cljs.core.chunk_first.call(null,seq__23212_23277__$1);
var G__23279 = cljs.core.chunk_rest.call(null,seq__23212_23277__$1);
var G__23280 = c__4550__auto___23278;
var G__23281 = cljs.core.count.call(null,c__4550__auto___23278);
var G__23282 = (0);
seq__23212_23262 = G__23279;
chunk__23213_23263 = G__23280;
count__23214_23264 = G__23281;
i__23215_23265 = G__23282;
continue;
} else {
var vec__23231_23283 = cljs.core.first.call(null,seq__23212_23277__$1);
var name_23284 = cljs.core.nth.call(null,vec__23231_23283,(0),null);
var map__23234_23285 = cljs.core.nth.call(null,vec__23231_23283,(1),null);
var map__23234_23286__$1 = (((((!((map__23234_23285 == null))))?(((((map__23234_23285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23234_23285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23234_23285):map__23234_23285);
var doc_23287 = cljs.core.get.call(null,map__23234_23286__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23288 = cljs.core.get.call(null,map__23234_23286__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23284);

cljs.core.println.call(null," ",arglists_23288);

if(cljs.core.truth_(doc_23287)){
cljs.core.println.call(null," ",doc_23287);
} else {
}


var G__23289 = cljs.core.next.call(null,seq__23212_23277__$1);
var G__23290 = null;
var G__23291 = (0);
var G__23292 = (0);
seq__23212_23262 = G__23289;
chunk__23213_23263 = G__23290;
count__23214_23264 = G__23291;
i__23215_23265 = G__23292;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__23236 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23237 = null;
var count__23238 = (0);
var i__23239 = (0);
while(true){
if((i__23239 < count__23238)){
var role = cljs.core._nth.call(null,chunk__23237,i__23239);
var temp__5735__auto___23293__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___23293__$1)){
var spec_23294 = temp__5735__auto___23293__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23294));
} else {
}


var G__23295 = seq__23236;
var G__23296 = chunk__23237;
var G__23297 = count__23238;
var G__23298 = (i__23239 + (1));
seq__23236 = G__23295;
chunk__23237 = G__23296;
count__23238 = G__23297;
i__23239 = G__23298;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__23236);
if(temp__5735__auto____$1){
var seq__23236__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23236__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23236__$1);
var G__23299 = cljs.core.chunk_rest.call(null,seq__23236__$1);
var G__23300 = c__4550__auto__;
var G__23301 = cljs.core.count.call(null,c__4550__auto__);
var G__23302 = (0);
seq__23236 = G__23299;
chunk__23237 = G__23300;
count__23238 = G__23301;
i__23239 = G__23302;
continue;
} else {
var role = cljs.core.first.call(null,seq__23236__$1);
var temp__5735__auto___23303__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___23303__$2)){
var spec_23304 = temp__5735__auto___23303__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23304));
} else {
}


var G__23305 = cljs.core.next.call(null,seq__23236__$1);
var G__23306 = null;
var G__23307 = (0);
var G__23308 = (0);
seq__23236 = G__23305;
chunk__23237 = G__23306;
count__23238 = G__23307;
i__23239 = G__23308;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__23309 = cljs.core.conj.call(null,via,t);
var G__23310 = cljs.core.ex_cause.call(null,t);
via = G__23309;
t = G__23310;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__23313 = datafied_throwable;
var map__23313__$1 = (((((!((map__23313 == null))))?(((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23313):map__23313);
var via = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__23313__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23314 = cljs.core.last.call(null,via);
var map__23314__$1 = (((((!((map__23314 == null))))?(((((map__23314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23314):map__23314);
var type = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23315 = data;
var map__23315__$1 = (((((!((map__23315 == null))))?(((((map__23315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23315):map__23315);
var problems = cljs.core.get.call(null,map__23315__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__23315__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__23315__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23316 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__23316__$1 = (((((!((map__23316 == null))))?(((((map__23316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23316):map__23316);
var top_data = map__23316__$1;
var source = cljs.core.get.call(null,map__23316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__23321 = phase;
var G__23321__$1 = (((G__23321 instanceof cljs.core.Keyword))?G__23321.fqn:null);
switch (G__23321__$1) {
case "read-source":
var map__23322 = data;
var map__23322__$1 = (((((!((map__23322 == null))))?(((((map__23322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23322):map__23322);
var line = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23324 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__23324__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__23324,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23324);
var G__23324__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__23324__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23324__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__23324__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23324__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23325 = top_data;
var G__23325__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__23325,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23325);
var G__23325__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__23325__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23325__$1);
var G__23325__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__23325__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23325__$2);
var G__23325__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__23325__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23325__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__23325__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23325__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23326 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__23326,(0),null);
var method = cljs.core.nth.call(null,vec__23326,(1),null);
var file = cljs.core.nth.call(null,vec__23326,(2),null);
var line = cljs.core.nth.call(null,vec__23326,(3),null);
var G__23329 = top_data;
var G__23329__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__23329,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23329);
var G__23329__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__23329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23329__$1);
var G__23329__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__23329__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23329__$2);
var G__23329__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__23329__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23329__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__23329__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23329__$4;
}

break;
case "execution":
var vec__23330 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__23330,(0),null);
var method = cljs.core.nth.call(null,vec__23330,(1),null);
var file = cljs.core.nth.call(null,vec__23330,(2),null);
var line = cljs.core.nth.call(null,vec__23330,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__23330,source__$1,method,file,line,G__23321,G__23321__$1,map__23313,map__23313__$1,via,trace,phase,map__23314,map__23314__$1,type,message,data,map__23315,map__23315__$1,problems,fn,caller,map__23316,map__23316__$1,top_data,source){
return (function (p1__23312_SHARP_){
var or__4131__auto__ = (p1__23312_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__23312_SHARP_);
}
});})(vec__23330,source__$1,method,file,line,G__23321,G__23321__$1,map__23313,map__23313__$1,via,trace,phase,map__23314,map__23314__$1,type,message,data,map__23315,map__23315__$1,problems,fn,caller,map__23316,map__23316__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__23333 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23333__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__23333,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23333);
var G__23333__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__23333__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23333__$1);
var G__23333__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__23333__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23333__$2);
var G__23333__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__23333__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23333__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__23333__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23333__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23321__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23337){
var map__23338 = p__23337;
var map__23338__$1 = (((((!((map__23338 == null))))?(((((map__23338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23338):map__23338);
var triage_data = map__23338__$1;
var phase = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__23340 = phase;
var G__23340__$1 = (((G__23340 instanceof cljs.core.Keyword))?G__23340.fqn:null);
switch (G__23340__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23341_23350 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23342_23351 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23343_23352 = true;
var _STAR_print_fn_STAR__temp_val__23344_23353 = ((function (_STAR_print_newline_STAR__orig_val__23341_23350,_STAR_print_fn_STAR__orig_val__23342_23351,_STAR_print_newline_STAR__temp_val__23343_23352,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23341_23350,_STAR_print_fn_STAR__orig_val__23342_23351,_STAR_print_newline_STAR__temp_val__23343_23352,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23343_23352;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23344_23353;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__23341_23350,_STAR_print_fn_STAR__orig_val__23342_23351,_STAR_print_newline_STAR__temp_val__23343_23352,_STAR_print_fn_STAR__temp_val__23344_23353,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__23341_23350,_STAR_print_fn_STAR__orig_val__23342_23351,_STAR_print_newline_STAR__temp_val__23343_23352,_STAR_print_fn_STAR__temp_val__23344_23353,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__23335_SHARP_){
return cljs.core.dissoc.call(null,p1__23335_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__23341_23350,_STAR_print_fn_STAR__orig_val__23342_23351,_STAR_print_newline_STAR__temp_val__23343_23352,_STAR_print_fn_STAR__temp_val__23344_23353,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__23341_23350,_STAR_print_fn_STAR__orig_val__23342_23351,_STAR_print_newline_STAR__temp_val__23343_23352,_STAR_print_fn_STAR__temp_val__23344_23353,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23342_23351;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23341_23350;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23345_23354 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23346_23355 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23347_23356 = true;
var _STAR_print_fn_STAR__temp_val__23348_23357 = ((function (_STAR_print_newline_STAR__orig_val__23345_23354,_STAR_print_fn_STAR__orig_val__23346_23355,_STAR_print_newline_STAR__temp_val__23347_23356,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23345_23354,_STAR_print_fn_STAR__orig_val__23346_23355,_STAR_print_newline_STAR__temp_val__23347_23356,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23347_23356;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23348_23357;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__23345_23354,_STAR_print_fn_STAR__orig_val__23346_23355,_STAR_print_newline_STAR__temp_val__23347_23356,_STAR_print_fn_STAR__temp_val__23348_23357,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__23345_23354,_STAR_print_fn_STAR__orig_val__23346_23355,_STAR_print_newline_STAR__temp_val__23347_23356,_STAR_print_fn_STAR__temp_val__23348_23357,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__23336_SHARP_){
return cljs.core.dissoc.call(null,p1__23336_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__23345_23354,_STAR_print_fn_STAR__orig_val__23346_23355,_STAR_print_newline_STAR__temp_val__23347_23356,_STAR_print_fn_STAR__temp_val__23348_23357,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__23345_23354,_STAR_print_fn_STAR__orig_val__23346_23355,_STAR_print_newline_STAR__temp_val__23347_23356,_STAR_print_fn_STAR__temp_val__23348_23357,sb__4661__auto__,G__23340,G__23340__$1,loc,class_name,simple_class,cause_type,format,map__23338,map__23338__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23346_23355;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23345_23354;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23340__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
