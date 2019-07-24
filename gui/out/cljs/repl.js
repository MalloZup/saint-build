// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1732){
var map__1733 = p__1732;
var map__1733__$1 = (((((!((map__1733 == null))))?(((((map__1733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1733):map__1733);
var m = map__1733__$1;
var n = cljs.core.get.call(null,map__1733__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
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
var seq__1735_1767 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1736_1768 = null;
var count__1737_1769 = (0);
var i__1738_1770 = (0);
while(true){
if((i__1738_1770 < count__1737_1769)){
var f_1771 = cljs.core._nth.call(null,chunk__1736_1768,i__1738_1770);
cljs.core.println.call(null,"  ",f_1771);


var G__1772 = seq__1735_1767;
var G__1773 = chunk__1736_1768;
var G__1774 = count__1737_1769;
var G__1775 = (i__1738_1770 + (1));
seq__1735_1767 = G__1772;
chunk__1736_1768 = G__1773;
count__1737_1769 = G__1774;
i__1738_1770 = G__1775;
continue;
} else {
var temp__5720__auto___1776 = cljs.core.seq.call(null,seq__1735_1767);
if(temp__5720__auto___1776){
var seq__1735_1777__$1 = temp__5720__auto___1776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1735_1777__$1)){
var c__4550__auto___1778 = cljs.core.chunk_first.call(null,seq__1735_1777__$1);
var G__1779 = cljs.core.chunk_rest.call(null,seq__1735_1777__$1);
var G__1780 = c__4550__auto___1778;
var G__1781 = cljs.core.count.call(null,c__4550__auto___1778);
var G__1782 = (0);
seq__1735_1767 = G__1779;
chunk__1736_1768 = G__1780;
count__1737_1769 = G__1781;
i__1738_1770 = G__1782;
continue;
} else {
var f_1783 = cljs.core.first.call(null,seq__1735_1777__$1);
cljs.core.println.call(null,"  ",f_1783);


var G__1784 = cljs.core.next.call(null,seq__1735_1777__$1);
var G__1785 = null;
var G__1786 = (0);
var G__1787 = (0);
seq__1735_1767 = G__1784;
chunk__1736_1768 = G__1785;
count__1737_1769 = G__1786;
i__1738_1770 = G__1787;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1788 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1788);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1788)))?cljs.core.second.call(null,arglists_1788):arglists_1788));
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
var seq__1739_1789 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1740_1790 = null;
var count__1741_1791 = (0);
var i__1742_1792 = (0);
while(true){
if((i__1742_1792 < count__1741_1791)){
var vec__1753_1793 = cljs.core._nth.call(null,chunk__1740_1790,i__1742_1792);
var name_1794 = cljs.core.nth.call(null,vec__1753_1793,(0),null);
var map__1756_1795 = cljs.core.nth.call(null,vec__1753_1793,(1),null);
var map__1756_1796__$1 = (((((!((map__1756_1795 == null))))?(((((map__1756_1795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1756_1795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1756_1795):map__1756_1795);
var doc_1797 = cljs.core.get.call(null,map__1756_1796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1798 = cljs.core.get.call(null,map__1756_1796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1794);

cljs.core.println.call(null," ",arglists_1798);

if(cljs.core.truth_(doc_1797)){
cljs.core.println.call(null," ",doc_1797);
} else {
}


var G__1799 = seq__1739_1789;
var G__1800 = chunk__1740_1790;
var G__1801 = count__1741_1791;
var G__1802 = (i__1742_1792 + (1));
seq__1739_1789 = G__1799;
chunk__1740_1790 = G__1800;
count__1741_1791 = G__1801;
i__1742_1792 = G__1802;
continue;
} else {
var temp__5720__auto___1803 = cljs.core.seq.call(null,seq__1739_1789);
if(temp__5720__auto___1803){
var seq__1739_1804__$1 = temp__5720__auto___1803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1739_1804__$1)){
var c__4550__auto___1805 = cljs.core.chunk_first.call(null,seq__1739_1804__$1);
var G__1806 = cljs.core.chunk_rest.call(null,seq__1739_1804__$1);
var G__1807 = c__4550__auto___1805;
var G__1808 = cljs.core.count.call(null,c__4550__auto___1805);
var G__1809 = (0);
seq__1739_1789 = G__1806;
chunk__1740_1790 = G__1807;
count__1741_1791 = G__1808;
i__1742_1792 = G__1809;
continue;
} else {
var vec__1758_1810 = cljs.core.first.call(null,seq__1739_1804__$1);
var name_1811 = cljs.core.nth.call(null,vec__1758_1810,(0),null);
var map__1761_1812 = cljs.core.nth.call(null,vec__1758_1810,(1),null);
var map__1761_1813__$1 = (((((!((map__1761_1812 == null))))?(((((map__1761_1812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1761_1812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1761_1812):map__1761_1812);
var doc_1814 = cljs.core.get.call(null,map__1761_1813__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1815 = cljs.core.get.call(null,map__1761_1813__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1811);

cljs.core.println.call(null," ",arglists_1815);

if(cljs.core.truth_(doc_1814)){
cljs.core.println.call(null," ",doc_1814);
} else {
}


var G__1816 = cljs.core.next.call(null,seq__1739_1804__$1);
var G__1817 = null;
var G__1818 = (0);
var G__1819 = (0);
seq__1739_1789 = G__1816;
chunk__1740_1790 = G__1817;
count__1741_1791 = G__1818;
i__1742_1792 = G__1819;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__1763 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1764 = null;
var count__1765 = (0);
var i__1766 = (0);
while(true){
if((i__1766 < count__1765)){
var role = cljs.core._nth.call(null,chunk__1764,i__1766);
var temp__5720__auto___1820__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1820__$1)){
var spec_1821 = temp__5720__auto___1820__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1821));
} else {
}


var G__1822 = seq__1763;
var G__1823 = chunk__1764;
var G__1824 = count__1765;
var G__1825 = (i__1766 + (1));
seq__1763 = G__1822;
chunk__1764 = G__1823;
count__1765 = G__1824;
i__1766 = G__1825;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__1763);
if(temp__5720__auto____$1){
var seq__1763__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1763__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1763__$1);
var G__1826 = cljs.core.chunk_rest.call(null,seq__1763__$1);
var G__1827 = c__4550__auto__;
var G__1828 = cljs.core.count.call(null,c__4550__auto__);
var G__1829 = (0);
seq__1763 = G__1826;
chunk__1764 = G__1827;
count__1765 = G__1828;
i__1766 = G__1829;
continue;
} else {
var role = cljs.core.first.call(null,seq__1763__$1);
var temp__5720__auto___1830__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1830__$2)){
var spec_1831 = temp__5720__auto___1830__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1831));
} else {
}


var G__1832 = cljs.core.next.call(null,seq__1763__$1);
var G__1833 = null;
var G__1834 = (0);
var G__1835 = (0);
seq__1763 = G__1832;
chunk__1764 = G__1833;
count__1765 = G__1834;
i__1766 = G__1835;
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
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
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
var G__1836 = cljs.core.conj.call(null,via,t);
var G__1837 = cljs.core.ex_cause.call(null,t);
via = G__1836;
t = G__1837;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
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
var map__1840 = datafied_throwable;
var map__1840__$1 = (((((!((map__1840 == null))))?(((((map__1840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1840):map__1840);
var via = cljs.core.get.call(null,map__1840__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1840__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1840__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1841 = cljs.core.last.call(null,via);
var map__1841__$1 = (((((!((map__1841 == null))))?(((((map__1841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1841):map__1841);
var type = cljs.core.get.call(null,map__1841__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1841__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1841__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1842 = data;
var map__1842__$1 = (((((!((map__1842 == null))))?(((((map__1842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1842):map__1842);
var problems = cljs.core.get.call(null,map__1842__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1842__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1842__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1843 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1843__$1 = (((((!((map__1843 == null))))?(((((map__1843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1843):map__1843);
var top_data = map__1843__$1;
var source = cljs.core.get.call(null,map__1843__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1848 = phase;
var G__1848__$1 = (((G__1848 instanceof cljs.core.Keyword))?G__1848.fqn:null);
switch (G__1848__$1) {
case "read-source":
var map__1849 = data;
var map__1849__$1 = (((((!((map__1849 == null))))?(((((map__1849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1849):map__1849);
var line = cljs.core.get.call(null,map__1849__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1849__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1851 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1851__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1851,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1851);
var G__1851__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1851__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1851__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1851__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1851__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1852 = top_data;
var G__1852__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1852,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1852);
var G__1852__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1852__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1852__$1);
var G__1852__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1852__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1852__$2);
var G__1852__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1852__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1852__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1852__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1852__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1853 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1853,(0),null);
var method = cljs.core.nth.call(null,vec__1853,(1),null);
var file = cljs.core.nth.call(null,vec__1853,(2),null);
var line = cljs.core.nth.call(null,vec__1853,(3),null);
var G__1856 = top_data;
var G__1856__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1856);
var G__1856__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1856__$1);
var G__1856__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__1856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1856__$2);
var G__1856__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1856__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1856__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1856__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1856__$4;
}

break;
case "execution":
var vec__1857 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1857,(0),null);
var method = cljs.core.nth.call(null,vec__1857,(1),null);
var file = cljs.core.nth.call(null,vec__1857,(2),null);
var line = cljs.core.nth.call(null,vec__1857,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__1857,source__$1,method,file,line,G__1848,G__1848__$1,map__1840,map__1840__$1,via,trace,phase,map__1841,map__1841__$1,type,message,data,map__1842,map__1842__$1,problems,fn,caller,map__1843,map__1843__$1,top_data,source){
return (function (p1__1839_SHARP_){
var or__4131__auto__ = (p1__1839_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1839_SHARP_);
}
});})(vec__1857,source__$1,method,file,line,G__1848,G__1848__$1,map__1840,map__1840__$1,via,trace,phase,map__1841,map__1841__$1,type,message,data,map__1842,map__1842__$1,problems,fn,caller,map__1843,map__1843__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__1860 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1860__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1860,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1860);
var G__1860__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1860__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1860__$1);
var G__1860__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__1860__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1860__$2);
var G__1860__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1860__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1860__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1860__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1860__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1848__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1864){
var map__1865 = p__1864;
var map__1865__$1 = (((((!((map__1865 == null))))?(((((map__1865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1865):map__1865);
var triage_data = map__1865__$1;
var phase = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1865__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__1867 = phase;
var G__1867__$1 = (((G__1867 instanceof cljs.core.Keyword))?G__1867.fqn:null);
switch (G__1867__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1868_1877 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1869_1878 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1870_1879 = true;
var _STAR_print_fn_STAR__temp_val__1871_1880 = ((function (_STAR_print_newline_STAR__orig_val__1868_1877,_STAR_print_fn_STAR__orig_val__1869_1878,_STAR_print_newline_STAR__temp_val__1870_1879,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1868_1877,_STAR_print_fn_STAR__orig_val__1869_1878,_STAR_print_newline_STAR__temp_val__1870_1879,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1870_1879;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1871_1880;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1868_1877,_STAR_print_fn_STAR__orig_val__1869_1878,_STAR_print_newline_STAR__temp_val__1870_1879,_STAR_print_fn_STAR__temp_val__1871_1880,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1868_1877,_STAR_print_fn_STAR__orig_val__1869_1878,_STAR_print_newline_STAR__temp_val__1870_1879,_STAR_print_fn_STAR__temp_val__1871_1880,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1862_SHARP_){
return cljs.core.dissoc.call(null,p1__1862_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1868_1877,_STAR_print_fn_STAR__orig_val__1869_1878,_STAR_print_newline_STAR__temp_val__1870_1879,_STAR_print_fn_STAR__temp_val__1871_1880,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1868_1877,_STAR_print_fn_STAR__orig_val__1869_1878,_STAR_print_newline_STAR__temp_val__1870_1879,_STAR_print_fn_STAR__temp_val__1871_1880,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1869_1878;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1868_1877;
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
var _STAR_print_newline_STAR__orig_val__1872_1881 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1873_1882 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1874_1883 = true;
var _STAR_print_fn_STAR__temp_val__1875_1884 = ((function (_STAR_print_newline_STAR__orig_val__1872_1881,_STAR_print_fn_STAR__orig_val__1873_1882,_STAR_print_newline_STAR__temp_val__1874_1883,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1872_1881,_STAR_print_fn_STAR__orig_val__1873_1882,_STAR_print_newline_STAR__temp_val__1874_1883,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1874_1883;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1875_1884;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1872_1881,_STAR_print_fn_STAR__orig_val__1873_1882,_STAR_print_newline_STAR__temp_val__1874_1883,_STAR_print_fn_STAR__temp_val__1875_1884,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1872_1881,_STAR_print_fn_STAR__orig_val__1873_1882,_STAR_print_newline_STAR__temp_val__1874_1883,_STAR_print_fn_STAR__temp_val__1875_1884,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1863_SHARP_){
return cljs.core.dissoc.call(null,p1__1863_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1872_1881,_STAR_print_fn_STAR__orig_val__1873_1882,_STAR_print_newline_STAR__temp_val__1874_1883,_STAR_print_fn_STAR__temp_val__1875_1884,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1872_1881,_STAR_print_fn_STAR__orig_val__1873_1882,_STAR_print_newline_STAR__temp_val__1874_1883,_STAR_print_fn_STAR__temp_val__1875_1884,sb__4661__auto__,G__1867,G__1867__$1,loc,class_name,simple_class,cause_type,format,map__1865,map__1865__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1873_1882;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1872_1881;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1867__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
