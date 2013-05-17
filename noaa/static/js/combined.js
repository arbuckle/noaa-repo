/* serializeObject function for getting a JSON object from a form.
 * http://stackoverflow.com/questions/1184624/convert-form-data-to-js-object-with-jquery
 */
$.fn.serializeObject = function() {
    "use strict";
    var o = {},
        a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


/*Underscore.js*/
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);


//     Backbone.js 0.9.10

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

    // Initial Setup
    // -------------

    // Save a reference to the global object (`window` in the browser, `exports`
    // on the server).
    var root = this;

    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;

    // Create a local reference to array methods.
    var array = [];
    var push = array.push;
    var slice = array.slice;
    var splice = array.splice;

    // The top-level namespace. All public Backbone classes and modules will
    // be attached to this. Exported for both CommonJS and the browser.
    var Backbone;
    if (typeof exports !== 'undefined') {
        Backbone = exports;
    } else {
        Backbone = root.Backbone = {};
    }

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '0.9.10';

    // Require Underscore, if we're on the server, and it's not already present.
    var _ = root._;
    if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

    // For Backbone's purposes, jQuery, Zepto, or Ender owns the `$` variable.
    Backbone.$ = root.jQuery || root.Zepto || root.ender;

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return this;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
    // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
    // set a `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Backbone.Events
    // ---------------

    // Regular expression used to split event strings.
    var eventSplitter = /\s+/;

    // Implement fancy features of the Events API such as multiple event
    // names `"change blur"` and jQuery-style event maps `{change: action}`
    // in terms of the existing API.
    var eventsApi = function(obj, action, name, rest) {
        if (!name) return true;
        if (typeof name === 'object') {
            for (var key in name) {
                obj[action].apply(obj, [key, name[key]].concat(rest));
            }
        } else if (eventSplitter.test(name)) {
            var names = name.split(eventSplitter);
            for (var i = 0, l = names.length; i < l; i++) {
                obj[action].apply(obj, [names[i]].concat(rest));
            }
        } else {
            return true;
        }
    };

    // Optimized internal dispatch function for triggering events. Tries to
    // keep the usual cases speedy (most Backbone events have 3 arguments).
    var triggerEvents = function(events, args) {
        var ev, i = -1, l = events.length;
        switch (args.length) {
            case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx);
                return;
            case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0]);
                return;
            case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1]);
                return;
            case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1], args[2]);
                return;
            default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
        }
    };

    // A module that can be mixed in to *any object* in order to provide it with
    // custom events. You may bind with `on` or remove with `off` callback
    // functions to an event; `trigger`-ing an event fires all callbacks in
    // succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.on('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    var Events = Backbone.Events = {

        // Bind one or more space separated events, or an events map,
        // to a `callback` function. Passing `"all"` will bind the callback to
        // all events fired.
        on: function(name, callback, context) {
            if (!(eventsApi(this, 'on', name, [callback, context]) && callback)) return this;
            this._events || (this._events = {});
            var list = this._events[name] || (this._events[name] = []);
            list.push({callback: callback, context: context, ctx: context || this});
            return this;
        },

        // Bind events to only be triggered a single time. After the first time
        // the callback is invoked, it will be removed.
        once: function(name, callback, context) {
            if (!(eventsApi(this, 'once', name, [callback, context]) && callback)) return this;
            var self = this;
            var once = _.once(function() {
                self.off(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
            this.on(name, once, context);
            return this;
        },

        // Remove one or many callbacks. If `context` is null, removes all
        // callbacks with that function. If `callback` is null, removes all
        // callbacks for the event. If `name` is null, removes all bound
        // callbacks for all events.
        off: function(name, callback, context) {
            var list, ev, events, names, i, l, j, k;
            if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
            if (!name && !callback && !context) {
                this._events = {};
                return this;
            }

            names = name ? [name] : _.keys(this._events);
            for (i = 0, l = names.length; i < l; i++) {
                name = names[i];
                if (list = this._events[name]) {
                    events = [];
                    if (callback || context) {
                        for (j = 0, k = list.length; j < k; j++) {
                            ev = list[j];
                            if ((callback && callback !== ev.callback &&
                                callback !== ev.callback._callback) ||
                                (context && context !== ev.context)) {
                                events.push(ev);
                            }
                        }
                    }
                    this._events[name] = events;
                }
            }

            return this;
        },

        // Trigger one or many events, firing all bound callbacks. Callbacks are
        // passed the same arguments as `trigger` is, apart from the event name
        // (unless you're listening on `"all"`, which will cause your callback to
        // receive the true name of the event as the first argument).
        trigger: function(name) {
            if (!this._events) return this;
            var args = slice.call(arguments, 1);
            if (!eventsApi(this, 'trigger', name, args)) return this;
            var events = this._events[name];
            var allEvents = this._events.all;
            if (events) triggerEvents(events, args);
            if (allEvents) triggerEvents(allEvents, arguments);
            return this;
        },

        // An inversion-of-control version of `on`. Tell *this* object to listen to
        // an event in another object ... keeping track of what it's listening to.
        listenTo: function(obj, name, callback) {
            var listeners = this._listeners || (this._listeners = {});
            var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
            listeners[id] = obj;
            obj.on(name, typeof name === 'object' ? this : callback, this);
            return this;
        },

        // Tell this object to stop listening to either specific events ... or
        // to every object it's currently listening to.
        stopListening: function(obj, name, callback) {
            var listeners = this._listeners;
            if (!listeners) return;
            if (obj) {
                obj.off(name, typeof name === 'object' ? this : callback, this);
                if (!name && !callback) delete listeners[obj._listenerId];
            } else {
                if (typeof name === 'object') callback = this;
                for (var id in listeners) {
                    listeners[id].off(name, callback, this);
                }
                this._listeners = {};
            }
            return this;
        }
    };

    // Aliases for backwards compatibility.
    Events.bind   = Events.on;
    Events.unbind = Events.off;

    // Allow the `Backbone` object to serve as a global event bus, for folks who
    // want global "pubsub" in a convenient place.
    _.extend(Backbone, Events);

    // Backbone.Model
    // --------------

    // Create a new model, with defined attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    var Model = Backbone.Model = function(attributes, options) {
        var defaults;
        var attrs = attributes || {};
        this.cid = _.uniqueId('c');
        this.attributes = {};
        if (options && options.collection) this.collection = options.collection;
        if (options && options.parse) attrs = this.parse(attrs, options) || {};
        if (defaults = _.result(this, 'defaults')) {
            attrs = _.defaults({}, attrs, defaults);
        }
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Model.prototype, Events, {

        // A hash of attributes whose current and previous value differ.
        changed: null,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute: 'id',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // Return a copy of the model's `attributes` object.
        toJSON: function(options) {
            return _.clone(this.attributes);
        },

        // Proxy `Backbone.sync` by default.
        sync: function() {
            return Backbone.sync.apply(this, arguments);
        },

        // Get the value of an attribute.
        get: function(attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape: function(attr) {
            return _.escape(this.get(attr));
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has: function(attr) {
            return this.get(attr) != null;
        },

        // ----------------------------------------------------------------------

        // Set a hash of model attributes on the object, firing `"change"` unless
        // you choose to silence it.
        set: function(key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (key == null) return this;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options || (options = {});

            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Extract attributes and options.
            unset           = options.unset;
            silent          = options.silent;
            changes         = [];
            changing        = this._changing;
            this._changing  = true;

            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;

            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

            // For each `set` attribute, update or delete the current value.
            for (attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val)) changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    this.changed[attr] = val;
                } else {
                    delete this.changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }

            // Trigger all relevant attribute changes.
            if (!silent) {
                if (changes.length) this._pending = true;
                for (var i = 0, l = changes.length; i < l; i++) {
                    this.trigger('change:' + changes[i], this, current[changes[i]], options);
                }
            }

            if (changing) return this;
            if (!silent) {
                while (this._pending) {
                    this._pending = false;
                    this.trigger('change', this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },

        // Remove an attribute from the model, firing `"change"` unless you choose
        // to silence it. `unset` is a noop if the attribute doesn't exist.
        unset: function(attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {unset: true}));
        },

        // Clear all attributes on the model, firing `"change"` unless you choose
        // to silence it.
        clear: function(options) {
            var attrs = {};
            for (var key in this.attributes) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {unset: true}));
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function(attr) {
            if (attr == null) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function(diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], (val = diff[attr]))) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function(attr) {
            if (attr == null || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function() {
            return _.clone(this._previousAttributes);
        },

        // ---------------------------------------------------------------------

        // Fetch the model from the server. If the server's representation of the
        // model differs from its current attributes, they will be overriden,
        // triggering a `"change"` event.
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var success = options.success;
            options.success = function(model, resp, options) {
                if (!model.set(model.parse(resp, options), options)) return false;
                if (success) success(model, resp, options);
            };
            return this.sync('read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function(key, val, options) {
            var attrs, success, method, xhr, attributes = this.attributes;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (key == null || typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            // If we're not waiting and attributes exist, save acts as `set(attr).save(null, opts)`.
            if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;

            options = _.extend({validate: true}, options);

            // Do not persist invalid models.
            if (!this._validate(attrs, options)) return false;

            // Set temporary attributes if `{wait: true}`.
            if (attrs && options.wait) {
                this.attributes = _.extend({}, attributes, attrs);
            }

            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            if (options.parse === void 0) options.parse = true;
            success = options.success;
            options.success = function(model, resp, options) {
                // Ensure attributes are restored during synchronous saves.
                model.attributes = attributes;
                var serverAttrs = model.parse(resp, options);
                if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
                if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                    return false;
                }
                if (success) success(model, resp, options);
            };

            // Finish configuring and sending the Ajax request.
            method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
            if (method === 'patch') options.attrs = attrs;
            xhr = this.sync(method, this, options);

            // Restore attributes.
            if (attrs && options.wait) this.attributes = attributes;

            return xhr;
        },

        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;

            var destroy = function() {
                model.trigger('destroy', model, model.collection, options);
            };

            options.success = function(model, resp, options) {
                if (options.wait || model.isNew()) destroy();
                if (success) success(model, resp, options);
            };

            if (this.isNew()) {
                options.success(this, null, options);
                return false;
            }

            var xhr = this.sync('delete', this, options);
            if (!options.wait) destroy();
            return xhr;
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url: function() {
            var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function(resp, options) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone: function() {
            return new this.constructor(this.attributes);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew: function() {
            return this.id == null;
        },

        // Check if the model is currently in a valid state.
        isValid: function(options) {
            return !this.validate || !this.validate(this.attributes, options);
        },

        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. Otherwise, fire a general
        // `"error"` event and call the error callback, if specified.
        _validate: function(attrs, options) {
            if (!options.validate || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error) return true;
            this.trigger('invalid', this, error, options || {});
            return false;
        }

    });

    // Backbone.Collection
    // -------------------

    // Provides a standard collection class for our sets of models, ordered
    // or unordered. If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    var Collection = Backbone.Collection = function(models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator !== void 0) this.comparator = options.comparator;
        this.models = [];
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) this.reset(models, _.extend({silent: true}, options));
    };

    // Define the Collection's inheritable methods.
    _.extend(Collection.prototype, Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model: Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function(options) {
            return this.map(function(model){ return model.toJSON(options); });
        },

        // Proxy `Backbone.sync` by default.
        sync: function() {
            return Backbone.sync.apply(this, arguments);
        },

        // Add a model, or list of models to the set.
        add: function(models, options) {
            models = _.isArray(models) ? models.slice() : [models];
            options || (options = {});
            var i, l, model, attrs, existing, doSort, add, at, sort, sortAttr;
            add = [];
            at = options.at;
            sort = this.comparator && (at == null) && options.sort != false;
            sortAttr = _.isString(this.comparator) ? this.comparator : null;

            // Turn bare objects into model references, and prevent invalid models
            // from being added.
            for (i = 0, l = models.length; i < l; i++) {
                if (!(model = this._prepareModel(attrs = models[i], options))) {
                    this.trigger('invalid', this, attrs, options);
                    continue;
                }

                // If a duplicate is found, prevent it from being added and
                // optionally merge it into the existing model.
                if (existing = this.get(model)) {
                    if (options.merge) {
                        existing.set(attrs === model ? model.attributes : attrs, options);
                        if (sort && !doSort && existing.hasChanged(sortAttr)) doSort = true;
                    }
                    continue;
                }

                // This is a new model, push it to the `add` list.
                add.push(model);

                // Listen to added models' events, and index models for lookup by
                // `id` and by `cid`.
                model.on('all', this._onModelEvent, this);
                this._byId[model.cid] = model;
                if (model.id != null) this._byId[model.id] = model;
            }

            // See if sorting is needed, update `length` and splice in new models.
            if (add.length) {
                if (sort) doSort = true;
                this.length += add.length;
                if (at != null) {
                    splice.apply(this.models, [at, 0].concat(add));
                } else {
                    push.apply(this.models, add);
                }
            }

            // Silently sort the collection if appropriate.
            if (doSort) this.sort({silent: true});

            if (options.silent) return this;

            // Trigger `add` events.
            for (i = 0, l = add.length; i < l; i++) {
                (model = add[i]).trigger('add', model, this, options);
            }

            // Trigger `sort` if the collection was sorted.
            if (doSort) this.trigger('sort', this, options);

            return this;
        },

        // Remove a model, or a list of models from the set.
        remove: function(models, options) {
            models = _.isArray(models) ? models.slice() : [models];
            options || (options = {});
            var i, l, index, model;
            for (i = 0, l = models.length; i < l; i++) {
                model = this.get(models[i]);
                if (!model) continue;
                delete this._byId[model.id];
                delete this._byId[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }
                this._removeReference(model);
            }
            return this;
        },

        // Add a model to the end of the collection.
        push: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, _.extend({at: this.length}, options));
            return model;
        },

        // Remove a model from the end of the collection.
        pop: function(options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },

        // Add a model to the beginning of the collection.
        unshift: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, _.extend({at: 0}, options));
            return model;
        },

        // Remove a model from the beginning of the collection.
        shift: function(options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },

        // Slice out a sub-array of models from the collection.
        slice: function(begin, end) {
            return this.models.slice(begin, end);
        },

        // Get a model from the set by id.
        get: function(obj) {
            if (obj == null) return void 0;
            this._idAttr || (this._idAttr = this.model.prototype.idAttribute);
            return this._byId[obj.id || obj.cid || obj[this._idAttr] || obj];
        },

        // Get the model at the given index.
        at: function(index) {
            return this.models[index];
        },

        // Return models with matching attributes. Useful for simple cases of `filter`.
        where: function(attrs) {
            if (_.isEmpty(attrs)) return [];
            return this.filter(function(model) {
                for (var key in attrs) {
                    if (attrs[key] !== model.get(key)) return false;
                }
                return true;
            });
        },

        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort: function(options) {
            if (!this.comparator) {
                throw new Error('Cannot sort a set without a comparator');
            }
            options || (options = {});

            // Run sort based on type of `comparator`.
            if (_.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(_.bind(this.comparator, this));
            }

            if (!options.silent) this.trigger('sort', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck: function(attr) {
            return _.invoke(this.models, 'get', attr);
        },

        // Smartly update a collection with a change set of models, adding,
        // removing, and merging as necessary.
        update: function(models, options) {
            options = _.extend({add: true, merge: true, remove: true}, options);
            if (options.parse) models = this.parse(models, options);
            var model, i, l, existing;
            var add = [], remove = [], modelMap = {};

            // Allow a single model (or no argument) to be passed.
            if (!_.isArray(models)) models = models ? [models] : [];

            // Proxy to `add` for this case, no need to iterate...
            if (options.add && !options.remove) return this.add(models, options);

            // Determine which models to add and merge, and which to remove.
            for (i = 0, l = models.length; i < l; i++) {
                model = models[i];
                existing = this.get(model);
                if (options.remove && existing) modelMap[existing.cid] = true;
                if ((options.add && !existing) || (options.merge && existing)) {
                    add.push(model);
                }
            }
            if (options.remove) {
                for (i = 0, l = this.models.length; i < l; i++) {
                    model = this.models[i];
                    if (!modelMap[model.cid]) remove.push(model);
                }
            }

            // Remove models (if applicable) before we add and merge the rest.
            if (remove.length) this.remove(remove, options);
            if (add.length) this.add(add, options);
            return this;
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any `add` or `remove` events. Fires `reset` when finished.
        reset: function(models, options) {
            options || (options = {});
            if (options.parse) models = this.parse(models, options);
            for (var i = 0, l = this.models.length; i < l; i++) {
                this._removeReference(this.models[i]);
            }
            options.previousModels = this.models.slice();
            this._reset();
            if (models) this.add(models, _.extend({silent: true}, options));
            if (!options.silent) this.trigger('reset', this, options);
            return this;
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `update: true` is passed, the response
        // data will be passed through the `update` method instead of `reset`.
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var success = options.success;
            options.success = function(collection, resp, options) {
                var method = options.update ? 'update' : 'reset';
                collection[method](resp, options);
                if (success) success(collection, resp, options);
            };
            return this.sync('read', this, options);
        },

        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function(model, options) {
            options = options ? _.clone(options) : {};
            if (!(model = this._prepareModel(model, options))) return false;
            if (!options.wait) this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function(model, resp, options) {
                if (options.wait) collection.add(model, options);
                if (success) success(model, resp, options);
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse: function(resp, options) {
            return resp;
        },

        // Create a new collection with an identical list of models as this one.
        clone: function() {
            return new this.constructor(this.models);
        },

        // Reset all internal state. Called when the collection is reset.
        _reset: function() {
            this.length = 0;
            this.models.length = 0;
            this._byId  = {};
        },

        // Prepare a model or hash of attributes to be added to this collection.
        _prepareModel: function(attrs, options) {
            if (attrs instanceof Model) {
                if (!attrs.collection) attrs.collection = this;
                return attrs;
            }
            options || (options = {});
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model._validate(attrs, options)) return false;
            return model;
        },

        // Internal method to remove a model's ties to a collection.
        _removeReference: function(model) {
            if (this === model.collection) delete model.collection;
            model.off('all', this._onModelEvent, this);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function(event, model, collection, options) {
            if ((event === 'add' || event === 'remove') && collection !== this) return;
            if (event === 'destroy') this.remove(model, options);
            if (model && event === 'change:' + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                if (model.id != null) this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        },

        sortedIndex: function (model, value, context) {
            value || (value = this.comparator);
            var iterator = _.isFunction(value) ? value : function(model) {
                return model.get(value);
            };
            return _.sortedIndex(this.models, model, iterator, context);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
        'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
        'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
        'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
        'tail', 'drop', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf',
        'isEmpty', 'chain'];

    // Mix in each Underscore method as a proxy to `Collection#models`.
    _.each(methods, function(method) {
        Collection.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });

    // Underscore methods that take a property name as an argument.
    var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

    // Use attributes instead of properties.
    _.each(attributeMethods, function(method) {
        Collection.prototype[method] = function(value, context) {
            var iterator = _.isFunction(value) ? value : function(model) {
                return model.get(value);
            };
            return _[method](this.models, iterator, context);
        };
    });

    // Backbone.Router
    // ---------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    var Router = Backbone.Router = function(options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var optionalParam = /\((.*?)\)/g;
    var namedParam    = /(\(\?)?:\w+/g;
    var splatParam    = /\*\w+/g;
    var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Router.prototype, Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route: function(route, name, callback) {
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (!callback) callback = this[name];
            Backbone.history.route(route, _.bind(function(fragment) {
                var args = this._extractParameters(route, fragment);
                callback && callback.apply(this, args);
                this.trigger.apply(this, ['route:' + name].concat(args));
                this.trigger('route', name, args);
                Backbone.history.trigger('route', this, name, args);
            }, this));
            return this;
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate: function(fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes: function() {
            if (!this.routes) return;
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                this.route(route, this.routes[route]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp: function(route) {
            route = route.replace(escapeRegExp, '\\$&')
                .replace(optionalParam, '(?:$1)?')
                .replace(namedParam, function(match, optional){
                    return optional ? match : '([^\/]+)';
                })
                .replace(splatParam, '(.*?)');
            return new RegExp('^' + route + '$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted parameters.
        _extractParameters: function(route, fragment) {
            return route.exec(fragment).slice(1);
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on URL fragments. If the
    // browser does not support `onhashchange`, falls back to polling.
    var History = Backbone.History = function() {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');

        // Ensure that `History` can be used outside of the browser.
        if (typeof window !== 'undefined') {
            this.location = window.location;
            this.history = window.history;
        }
    };

    // Cached regex for stripping a leading hash/slash and trailing space.
    var routeStripper = /^[#\/]|\s+$/g;

    // Cached regex for stripping leading and trailing slashes.
    var rootStripper = /^\/+|\/+$/g;

    // Cached regex for detecting MSIE.
    var isExplorer = /msie [\w.]+/;

    // Cached regex for removing a trailing slash.
    var trailingSlash = /\/$/;

    // Has the history handling already been started?
    History.started = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(History.prototype, Events, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval: 50,

        // Gets the true hash value. Cannot use location.hash directly due to bug
        // in Firefox where location.hash will always be decoded.
        getHash: function(window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },

        // Get the cross-browser normalized URL fragment, either from the URL,
        // the hash, or the override.
        getFragment: function(fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                    fragment = this.location.pathname;
                    var root = this.root.replace(trailingSlash, '');
                    if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, '');
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start: function(options) {
            if (History.started) throw new Error("Backbone.history has already been started");
            History.started = true;

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            this.options          = _.extend({}, {root: '/'}, this.options, options);
            this.root             = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState  = !!this.options.pushState;
            this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
            var fragment          = this.getFragment();
            var docMode           = document.documentMode;
            var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

            // Normalize root to always include a leading and trailing slash.
            this.root = ('/' + this.root + '/').replace(rootStripper, '/');

            if (oldIE && this._wantsHashChange) {
                this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
                this.navigate(fragment);
            }

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if (this._hasPushState) {
                Backbone.$(window).on('popstate', this.checkUrl);
            } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
                Backbone.$(window).on('hashchange', this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }

            // Determine if we need to change the base url, for a pushState link
            // opened by a non-pushState browser.
            this.fragment = fragment;
            var loc = this.location;
            var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

            // If we've started off with a route from a `pushState`-enabled browser,
            // but we're currently in a browser that doesn't support it...
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
                this.fragment = this.getFragment(null, true);
                this.location.replace(this.root + this.location.search + '#' + this.fragment);
                // Return immediately as browser will do redirect to new url
                return true;

                // Or if we've started out with a hash-based route, but we're currently
                // in a browser where it could be `pushState`-based instead...
            } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                this.fragment = this.getHash().replace(routeStripper, '');
                this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
            }

            if (!this.options.silent) return this.loadUrl();
        },

        // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        stop: function() {
            Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
            clearInterval(this._checkUrlInterval);
            History.started = false;
        },

        // Add a route to be tested when the fragment changes. Routes added later
        // may override previous routes.
        route: function(route, callback) {
            this.handlers.unshift({route: route, callback: callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl: function(e) {
            var current = this.getFragment();
            if (current === this.fragment && this.iframe) {
                current = this.getFragment(this.getHash(this.iframe));
            }
            if (current === this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl() || this.loadUrl(this.getHash());
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl: function(fragmentOverride) {
            var fragment = this.fragment = this.getFragment(fragmentOverride);
            var matched = _.any(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
            return matched;
        },

        // Save a fragment into the hash history, or replace the URL state if the
        // 'replace' option is passed. You are responsible for properly URL-encoding
        // the fragment in advance.
        //
        // The options object can contain `trigger: true` if you wish to have the
        // route callback be fired (not usually desirable), or `replace: true`, if
        // you wish to modify the current URL without adding an entry to the history.
        navigate: function(fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {trigger: options};
            fragment = this.getFragment(fragment || '');
            if (this.fragment === fragment) return;
            this.fragment = fragment;
            var url = this.root + fragment;

            // If pushState is available, we use it to set the fragment as a real URL.
            if (this._hasPushState) {
                this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

                // If hash changes haven't been explicitly disabled, update the hash
                // fragment to store history.
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
                    // Opening and closing the iframe tricks IE7 and earlier to push a
                    // history entry on hash-tag change.  When replace is true, we don't
                    // want this.
                    if(!options.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, fragment, options.replace);
                }

                // If you've told us that you explicitly don't want fallback hashchange-
                // based history, then `navigate` becomes a page refresh.
            } else {
                return this.location.assign(url);
            }
            if (options.trigger) this.loadUrl(fragment);
        },

        // Update the hash location, either replacing the current entry, or adding
        // a new one to the browser history.
        _updateHash: function(location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, '');
                location.replace(href + '#' + fragment);
            } else {
                // Some browsers require that `hash` contains a leading #.
                location.hash = '#' + fragment;
            }
        }

    });

    // Create the default Backbone.history.
    Backbone.history = new History;

    // Backbone.View
    // -------------

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    var View = Backbone.View = function(options) {
        this.cid = _.uniqueId('view');
        this._configure(options || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };

    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(View.prototype, Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName: 'div',

        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be prefered to global lookups where possible.
        $: function(selector) {
            return this.$el.find(selector);
        },

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render: function() {
            return this;
        },

        // Remove this view by taking the element out of the DOM, and removing any
        // applicable Backbone.Events listeners.
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this;
        },

        // Change the view's element (`this.el` property), including event
        // re-delegation.
        setElement: function(element, delegate) {
            if (this.$el) this.undelegateEvents();
            this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
            this.el = this.$el[0];
            if (delegate !== false) this.delegateEvents();
            return this;
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save'
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        // This only works for delegate-able events: not `focus`, `blur`, and
        // not `change`, `submit`, and `reset` in Internet Explorer.
        delegateEvents: function(events) {
            if (!(events || (events = _.result(this, 'events')))) return;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) throw new Error('Method "' + events[key] + '" does not exist');
                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += '.delegateEvents' + this.cid;
                if (selector === '') {
                    this.$el.on(eventName, method);
                } else {
                    this.$el.on(eventName, selector, method);
                }
            }
        },

        // Clears all callbacks previously bound to the view with `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function() {
            this.$el.off('.delegateEvents' + this.cid);
        },

        // Performs the initial configuration of a View with a set of options.
        // Keys with special meaning *(model, collection, id, className)*, are
        // attached directly to the view.
        _configure: function(options) {
            if (this.options) options = _.extend({}, _.result(this, 'options'), options);
            _.extend(this, _.pick(options, viewOptions));
            this.options = options;
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement: function() {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, 'attributes'));
                if (this.id) attrs.id = _.result(this, 'id');
                if (this.className) attrs['class'] = _.result(this, 'className');
                var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
                this.setElement($el, false);
            } else {
                this.setElement(_.result(this, 'el'), false);
            }
        }

    });

    // Backbone.sync
    // -------------

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'patch':  'PATCH',
        'delete': 'DELETE',
        'read':   'GET'
    };

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded`
    // instead of `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];

        // Default options, unless specified.
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });

        // Default JSON-request options.
        var params = {type: type, dataType: 'json'};

        // Ensure that we have a URL.
        if (!options.url) {
            params.url = _.result(model, 'url') || urlError();
        }

        // Ensure that we have the appropriate request data.
        if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(options.attrs || model.toJSON(options));
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if (options.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model: params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
            params.type = 'POST';
            if (options.emulateJSON) params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader('X-HTTP-Method-Override', type);
                if (beforeSend) return beforeSend.apply(this, arguments);
            };
        }

        // Don't process data on a non-GET request.
        if (params.type !== 'GET' && !options.emulateJSON) {
            params.processData = false;
        }

        var success = options.success;
        options.success = function(resp) {
            if (success) success(model, resp, options);
            model.trigger('sync', model, resp, options);
        };

        var error = options.error;
        options.error = function(xhr) {
            if (error) error(model, xhr, options);
            model.trigger('error', model, xhr, options);
        };

        // Make the request, allowing the user to override any Ajax options.
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger('request', model, xhr, options);
        return xhr;
    };

    // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
    Backbone.ajax = function() {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };

    // Helpers
    // -------

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var extend = function(protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }

        // Add static properties to the constructor function, if supplied.
        _.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Set up inheritance for the model, collection, router, view and history.
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function() {
        throw new Error('A "url" property or function must be specified');
    };

}).call(this);
















// Backbone.Marionette, v1.0.0-rc6
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
// http://github.com/marionettejs/backbone.marionette


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


// Backbone.BabySitter, v0.0.4
// Copyright (c)2012 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
// http://github.com/marionettejs/backbone.babysitter
// Backbone.ChildViewContainer
// ---------------------------
//
// Provide a container to store, retrieve and
// shut down child views.

Backbone.ChildViewContainer = (function(Backbone, _){

    // Container Constructor
    // ---------------------

    var Container = function(initialViews){
        this._views = {};
        this._indexByModel = {};
        this._indexByCollection = {};
        this._indexByCustom = {};
        this._updateLength();

        this._addInitialViews(initialViews);
    };

    // Container Methods
    // -----------------

    _.extend(Container.prototype, {

        // Add a view to this container. Stores the view
        // by `cid` and makes it searchable by the model
        // and/or collection of the view. Optionally specify
        // a custom key to store an retrieve the view.
        add: function(view, customIndex){
            var viewCid = view.cid;

            // store the view
            this._views[viewCid] = view;

            // index it by model
            if (view.model){
                this._indexByModel[view.model.cid] = viewCid;
            }

            // index it by collection
            if (view.collection){
                this._indexByCollection[view.collection.cid] = viewCid;
            }

            // index by custom
            if (customIndex){
                this._indexByCustom[customIndex] = viewCid;
            }

            this._updateLength();
        },

        // Find a view by the model that was attached to
        // it. Uses the model's `cid` to find it, and
        // retrieves the view by it's `cid` from the result
        findByModel: function(model){
            var viewCid = this._indexByModel[model.cid];
            return this.findByCid(viewCid);
        },

        // Find a view by the collection that was attached to
        // it. Uses the collection's `cid` to find it, and
        // retrieves the view by it's `cid` from the result
        findByCollection: function(col){
            var viewCid = this._indexByCollection[col.cid];
            return this.findByCid(viewCid);
        },

        // Find a view by a custom indexer.
        findByCustom: function(index){
            var viewCid = this._indexByCustom[index];
            return this.findByCid(viewCid);
        },

        // Find by index. This is not guaranteed to be a
        // stable index.
        findByIndex: function(index){
            return _.values(this._views)[index];
        },

        // retrieve a view by it's `cid` directly
        findByCid: function(cid){
            return this._views[cid];
        },

        // Remove a view
        remove: function(view){
            var viewCid = view.cid;

            // delete model index
            if (view.model){
                delete this._indexByModel[view.model.cid];
            }

            // delete collection index
            if (view.collection){
                delete this._indexByCollection[view.collection.cid];
            }

            // delete custom index
            var cust;

            for (var key in this._indexByCustom){
                if (this._indexByCustom.hasOwnProperty(key)){
                    if (this._indexByCustom[key] === viewCid){
                        cust = key;
                        break;
                    }
                }
            }

            if (cust){
                delete this._indexByCustom[cust];
            }

            // remove the view from the container
            delete this._views[viewCid];

            // update the length
            this._updateLength();
        },

        // Call a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.call`.
        call: function(method, args){
            args = Array.prototype.slice.call(arguments, 1);
            this.apply(method, args);
        },

        // Apply a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.apply`.
        apply: function(method, args){
            var view;

            // fix for IE < 9
            args = args || [];

            _.each(this._views, function(view, key){
                if (_.isFunction(view[method])){
                    view[method].apply(view, args);
                }
            });

        },

        // Update the `.length` attribute on this container
        _updateLength: function(){
            this.length = _.size(this._views);
        },

        // set up an initial list of views
        _addInitialViews: function(views){
            if (!views){ return; }

            var view, i,
                length = views.length;

            for (i=0; i<length; i++){
                view = views[i];
                this.add(view);
            }
        }
    });

    // Borrowing this code from Backbone.Collection:
    // http://backbonejs.org/docs/backbone.html#section-106
    //
    // Mix in methods from Underscore, for iteration, and other
    // collection related features.
    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
        'select', 'reject', 'every', 'all', 'some', 'any', 'include',
        'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
        'last', 'without', 'isEmpty', 'pluck'];

    _.each(methods, function(method) {
        Container.prototype[method] = function() {
            var views = _.values(this._views);
            var args = [views].concat(_.toArray(arguments));
            return _[method].apply(_, args);
        };
    });

    // return the public API
    return Container;
})(Backbone, _);

// Backbone.Wreqr, v0.1.1
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
// http://github.com/marionettejs/backbone.wreqr
Backbone.Wreqr = (function(Backbone, Marionette, _){
    "use strict";
    var Wreqr = {};

    // Handlers
    // --------
    // A registry of functions to call, given a name

    Wreqr.Handlers = (function(Backbone, _){
        "use strict";

        // Constructor
        // -----------

        var Handlers = function(){
            this._handlers = {};
        };

        Handlers.extend = Backbone.Model.extend;

        // Instance Members
        // ----------------

        _.extend(Handlers.prototype, {

            // Add a handler for the given name, with an
            // optional context to run the handler within
            addHandler: function(name, handler, context){
                var config = {
                    callback: handler,
                    context: context
                };

                this._handlers[name] = config;
            },

            // Get the currently registered handler for
            // the specified name. Throws an exception if
            // no handler is found.
            getHandler: function(name){
                var config = this._handlers[name];

                if (!config){
                    throw new Error("Handler not found for '" + name + "'");
                }

                return function(){
                    var args = Array.prototype.slice.apply(arguments);
                    return config.callback.apply(config.context, args);
                };
            },

            // Remove a handler for the specified name
            removeHandler: function(name){
                delete this._handlers[name];
            },

            // Remove all handlers from this registry
            removeAllHandlers: function(){
                this._handlers = {};
            }
        });

        return Handlers;
    })(Backbone, _);

    // Wreqr.Commands
    // --------------
    //
    // A simple command pattern implementation. Register a command
    // handler and execute it.
    Wreqr.Commands = (function(Wreqr){
        "use strict";

        return Wreqr.Handlers.extend({
            execute: function(){
                var name = arguments[0];
                var args = Array.prototype.slice.call(arguments, 1);

                this.getHandler(name).apply(this, args);
            }
        });

    })(Wreqr);

    // Wreqr.RequestResponse
    // ---------------------
    //
    // A simple request/response implementation. Register a
    // request handler, and return a response from it
    Wreqr.RequestResponse = (function(Wreqr){
        "use strict";

        return Wreqr.Handlers.extend({
            request: function(){
                var name = arguments[0];
                var args = Array.prototype.slice.call(arguments, 1);

                return this.getHandler(name).apply(this, args);
            }
        });

    })(Wreqr);

    // Event Aggregator
    // ----------------
    // A pub-sub object that can be used to decouple various parts
    // of an application through event-driven architecture.

    Wreqr.EventAggregator = (function(Backbone, _){
        "use strict";
        var EA = function(){};

        // Copy the `extend` function used by Backbone's classes
        EA.extend = Backbone.Model.extend;

        // Copy the basic Backbone.Events on to the event aggregator
        _.extend(EA.prototype, Backbone.Events);

        return EA;
    })(Backbone, _);


    return Wreqr;
})(Backbone, Backbone.Marionette, _);

var Marionette = (function(Backbone, _, $){
    "use strict";

    var Marionette = {};
    Backbone.Marionette = Marionette;

// Helpers
// -------

// For slicing `arguments` in functions
    var slice = Array.prototype.slice;

// Marionette.extend
// -----------------

// Borrow the Backbone `extend` method so we can use it as needed
    Marionette.extend = Backbone.Model.extend;

// Marionette.getOption
// --------------------

// Retrieve an object, function or other value from a target
// object or it's `options`, with `options` taking precedence.
    Marionette.getOption = function(target, optionName){
        if (!target || !optionName){ return; }
        var value;

        if (target.options && (optionName in target.options) && (target.options[optionName] !== undefined)){
            value = target.options[optionName];
        } else {
            value = target[optionName];
        }

        return value;
    };

// Mairionette.createObject
// ------------------------

// A wrapper / shim for `Object.create`. Uses native `Object.create`
// if available, otherwise shims it in place for Marionette to use.
    Marionette.createObject = (function(){
        var createObject;

        // Define this once, and just replace the .prototype on it as needed,
        // to improve performance in older / less optimized JS engines
        function F() {}


        // Check for existing native / shimmed Object.create
        if (typeof Object.create === "function"){

            // found native/shim, so use it
            createObject = Object.create;

        } else {

            // An implementation of the Boodman/Crockford delegation
            // w/ Cornford optimization, as suggested by @unscriptable
            // https://gist.github.com/3959151

            // native/shim not found, so shim it ourself
            createObject = function (o) {

                // set the prototype of the function
                // so we will get `o` as the prototype
                // of the new object instance
                F.prototype = o;

                // create a new object that inherits from
                // the `o` parameter
                var child = new F();

                // clean up just in case o is really large
                F.prototype = null;

                // send it back
                return child;
            };

        }

        return createObject;
    })();

// Trigger an event and a corresponding method name. Examples:
//
// `this.triggerMethod("foo")` will trigger the "foo" event and
// call the "onFoo" method.
//
// `this.triggerMethod("foo:bar") will trigger the "foo:bar" event and
// call the "onFooBar" method.
    Marionette.triggerMethod = function(){
        var args = Array.prototype.slice.apply(arguments);
        var eventName = args[0];
        var segments = eventName.split(":");
        var segment, capLetter, methodName = "on";

        for (var i = 0; i < segments.length; i++){
            segment = segments[i];
            capLetter = segment.charAt(0).toUpperCase();
            methodName += capLetter + segment.slice(1);
        }

        this.trigger.apply(this, args);

        if (_.isFunction(this[methodName])){
            args.shift();
            return this[methodName].apply(this, args);
        }
    };

// DOMRefresh
// ----------
//
// Monitor a view's state, and after it has been rendered and shown
// in the DOM, trigger a "dom:refresh" event every time it is
// re-rendered.

    Marionette.MonitorDOMRefresh = (function(){
        // track when the view has been rendered
        function handleShow(view){
            view._isShown = true;
            triggerDOMRefresh(view);
        }

        // track when the view has been shown in the DOM,
        // using a Marionette.Region (or by other means of triggering "show")
        function handleRender(view){
            view._isRendered = true;
            triggerDOMRefresh(view);
        }

        // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
        function triggerDOMRefresh(view){
            if (view._isShown && view._isRendered){
                if (_.isFunction(view.triggerMethod)){
                    view.triggerMethod("dom:refresh");
                }
            }
        }

        // Export public API
        return function(view){
            view.listenTo(view, "show", function(){
                handleShow(view);
            });

            view.listenTo(view, "render", function(){
                handleRender(view);
            });
        };
    })();


// Marionette.bindEntityEvents & unbindEntityEvents
// ---------------------------
//
// These methods are used to bind/unbind a backbone "entity" (collection/model)
// to methods on a target object.
//
// The first paremter, `target`, must have a `listenTo` method from the
// EventBinder object.
//
// The second parameter is the entity (Backbone.Model or Backbone.Collection)
// to bind the events from.
//
// The third parameter is a hash of { "event:name": "eventHandler" }
// configuration. Multiple handlers can be separated by a space. A
// function can be supplied instead of a string handler name.

    (function(Marionette){
        "use strict";

        // Bind the event to handlers specified as a string of
        // handler names on the target object
        function bindFromStrings(target, entity, evt, methods){
            var methodNames = methods.split(/\s+/);

            _.each(methodNames,function(methodName) {

                var method = target[methodName];
                if(!method) {
                    throw new Error("Method '"+ methodName +"' was configured as an event handler, but does not exist.");
                }

                target.listenTo(entity, evt, method, target);
            });
        }

        // Bind the event to a supplied callback function
        function bindToFunction(target, entity, evt, method){
            target.listenTo(entity, evt, method, target);
        }

        // Bind the event to handlers specified as a string of
        // handler names on the target object
        function unbindFromStrings(target, entity, evt, methods){
            var methodNames = methods.split(/\s+/);

            _.each(methodNames,function(methodName) {
                var method = target[method];
                target.stopListening(entity, evt, method, target);
            });
        }

        // Bind the event to a supplied callback function
        function unbindToFunction(target, entity, evt, method){
            target.stopListening(entity, evt, method, target);
        }


        // generic looping function
        function iterateEvents(target, entity, bindings, functionCallback, stringCallback){
            if (!entity || !bindings) { return; }

            // allow the bindings to be a function
            if (_.isFunction(bindings)){
                bindings = bindings.call(target);
            }

            // iterate the bindings and bind them
            _.each(bindings, function(methods, evt){

                // allow for a function as the handler,
                // or a list of event names as a string
                if (_.isFunction(methods)){
                    functionCallback(target, entity, evt, methods);
                } else {
                    stringCallback(target, entity, evt, methods);
                }

            });
        }

        // Export Public API
        Marionette.bindEntityEvents = function(target, entity, bindings){
            iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
        };

        Marionette.unbindEntityEvents = function(target, entity, bindings){
            iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
        };

    })(Marionette);


// Callbacks
// ---------

// A simple way of managing a collection of callbacks
// and executing them at a later point in time, using jQuery's
// `Deferred` object.
    Marionette.Callbacks = function(){
        this._deferred = $.Deferred();
        this._callbacks = [];
    };

    _.extend(Marionette.Callbacks.prototype, {

        // Add a callback to be executed. Callbacks added here are
        // guaranteed to execute, even if they are added after the
        // `run` method is called.
        add: function(callback, contextOverride){
            this._callbacks.push({cb: callback, ctx: contextOverride});

            this._deferred.done(function(context, options){
                if (contextOverride){ context = contextOverride; }
                callback.call(context, options);
            });
        },

        // Run all registered callbacks with the context specified.
        // Additional callbacks can be added after this has been run
        // and they will still be executed.
        run: function(options, context){
            this._deferred.resolve(context, options);
        },

        // Resets the list of callbacks to be run, allowing the same list
        // to be run multiple times - whenever the `run` method is called.
        reset: function(){
            var that = this;
            var callbacks = this._callbacks;
            this._deferred = $.Deferred();
            this._callbacks = [];
            _.each(callbacks, function(cb){
                that.add(cb.cb, cb.ctx);
            });
        }
    });


// Marionette Controller
// ---------------------
//
// A multi-purpose object to use as a controller for
// modules and routers, and as a mediator for workflow
// and coordination of other objects, views, and more.
    Marionette.Controller = function(options){
        this.triggerMethod = Marionette.triggerMethod;
        this.options = options || {};

        if (_.isFunction(this.initialize)){
            this.initialize(this.options);
        }
    };

    Marionette.Controller.extend = Marionette.extend;

// Controller Methods
// --------------

// Ensure it can trigger events with Backbone.Events
    _.extend(Marionette.Controller.prototype, Backbone.Events, {
        close: function(){
            this.stopListening();
            this.triggerMethod("close");
            this.unbind();
        }
    });

// Region
// ------
//
// Manage the visual regions of your composite application. See
// http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/

    Marionette.Region = function(options){
        this.options = options || {};

        this.el = Marionette.getOption(this, "el");

        if (!this.el){
            var err = new Error("An 'el' must be specified for a region.");
            err.name = "NoElError";
            throw err;
        }

        if (this.initialize){
            var args = Array.prototype.slice.apply(arguments);
            this.initialize.apply(this, args);
        }
    };


// Region Type methods
// -------------------

    _.extend(Marionette.Region, {

        // Build an instance of a region by passing in a configuration object
        // and a default region type to use if none is specified in the config.
        //
        // The config object should either be a string as a jQuery DOM selector,
        // a Region type directly, or an object literal that specifies both
        // a selector and regionType:
        //
        // ```js
        // {
        //   selector: "#foo",
        //   regionType: MyCustomRegion
        // }
        // ```
        //
        buildRegion: function(regionConfig, defaultRegionType){
            var regionIsString = (typeof regionConfig === "string");
            var regionSelectorIsString = (typeof regionConfig.selector === "string");
            var regionTypeIsUndefined = (typeof regionConfig.regionType === "undefined");
            var regionIsType = (typeof regionConfig === "function");

            if (!regionIsType && !regionIsString && !regionSelectorIsString) {
                throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
            }

            var selector, RegionType;

            // get the selector for the region

            if (regionIsString) {
                selector = regionConfig;
            }

            if (regionConfig.selector) {
                selector = regionConfig.selector;
            }

            // get the type for the region

            if (regionIsType){
                RegionType = regionConfig;
            }

            if (!regionIsType && regionTypeIsUndefined) {
                RegionType = defaultRegionType;
            }

            if (regionConfig.regionType) {
                RegionType = regionConfig.regionType;
            }

            // build the region instance

            var regionManager = new RegionType({
                el: selector
            });

            return regionManager;
        }

    });

// Region Instance Methods
// -----------------------

    _.extend(Marionette.Region.prototype, Backbone.Events, {

        // Displays a backbone view instance inside of the region.
        // Handles calling the `render` method for you. Reads content
        // directly from the `el` attribute. Also calls an optional
        // `onShow` and `close` method on your view, just after showing
        // or just before closing the view, respectively.
        show: function(view){

            this.ensureEl();
            this.close();

            view.render();
            this.open(view);

            Marionette.triggerMethod.call(view, "show");
            Marionette.triggerMethod.call(this, "show", view);

            this.currentView = view;
        },

        ensureEl: function(){
            if (!this.$el || this.$el.length === 0){
                this.$el = this.getEl(this.el);
            }
        },

        // Override this method to change how the region finds the
        // DOM element that it manages. Return a jQuery selector object.
        getEl: function(selector){
            return $(selector);
        },

        // Override this method to change how the new view is
        // appended to the `$el` that the region is managing
        open: function(view){
            this.$el.empty().append(view.el);
        },

        // Close the current view, if there is one. If there is no
        // current view, it does nothing and returns immediately.
        close: function(){
            var view = this.currentView;
            if (!view || view.isClosed){ return; }

            if (view.close) { view.close(); }
            Marionette.triggerMethod.call(this, "close");

            delete this.currentView;
        },

        // Attach an existing view to the region. This
        // will not call `render` or `onShow` for the new view,
        // and will not replace the current HTML for the `el`
        // of the region.
        attachView: function(view){
            this.currentView = view;
        },

        // Reset the region by closing any existing view and
        // clearing out the cached `$el`. The next time a view
        // is shown via this region, the region will re-query the
        // DOM for the region's `el`.
        reset: function(){
            this.close();
            delete this.$el;
        }
    });

// Copy the `extend` function used by Backbone's classes
    Marionette.Region.extend = Marionette.extend;


// Template Cache
// --------------

// Manage templates stored in `<script>` blocks,
// caching them for faster access.
    Marionette.TemplateCache = function(templateId){
        this.templateId = templateId;
    };

// TemplateCache object-level methods. Manage the template
// caches from these method calls instead of creating
// your own TemplateCache instances
    _.extend(Marionette.TemplateCache, {
        templateCaches: {},

        // Get the specified template by id. Either
        // retrieves the cached version, or loads it
        // from the DOM.
        get: function(templateId){
            var that = this;
            var cachedTemplate = this.templateCaches[templateId];

            if (!cachedTemplate){
                cachedTemplate = new Marionette.TemplateCache(templateId);
                this.templateCaches[templateId] = cachedTemplate;
            }

            return cachedTemplate.load();
        },

        // Clear templates from the cache. If no arguments
        // are specified, clears all templates:
        // `clear()`
        //
        // If arguments are specified, clears each of the
        // specified templates from the cache:
        // `clear("#t1", "#t2", "...")`
        clear: function(){
            var i;
            var args = Array.prototype.slice.apply(arguments);
            var length = args.length;

            if (length > 0){
                for(i=0; i<length; i++){
                    delete this.templateCaches[args[i]];
                }
            } else {
                this.templateCaches = {};
            }
        }
    });

// TemplateCache instance methods, allowing each
// template cache object to manage it's own state
// and know whether or not it has been loaded
    _.extend(Marionette.TemplateCache.prototype, {

        // Internal method to load the template
        load: function(){
            var that = this;

            // Guard clause to prevent loading this template more than once
            if (this.compiledTemplate){
                return this.compiledTemplate;
            }

            // Load the template and compile it
            var template = this.loadTemplate(this.templateId);
            this.compiledTemplate = this.compileTemplate(template);

            return this.compiledTemplate;
        },

        // Load a template from the DOM, by default. Override
        // this method to provide your own template retrieval
        // For asynchronous loading with AMD/RequireJS, consider
        // using a template-loader plugin as described here:
        // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
        loadTemplate: function(templateId){
            var template = $(templateId).html();

            if (!template || template.length === 0){
                var msg = "Could not find template: '" + templateId + "'";
                var err = new Error(msg);
                err.name = "NoTemplateError";
                throw err;
            }

            return template;
        },

        // Pre-compile the template before caching it. Override
        // this method if you do not need to pre-compile a template
        // (JST / RequireJS for example) or if you want to change
        // the template engine used (Handebars, etc).
        compileTemplate: function(rawTemplate){
            return _.template(rawTemplate);
        }
    });


// Renderer
// --------

// Render a template with data by passing in the template
// selector and the data to render.
    Marionette.Renderer = {

        // Render a template with data. The `template` parameter is
        // passed to the `TemplateCache` object to retrieve the
        // template function. Override this method to provide your own
        // custom rendering and template handling for all of Marionette.
        render: function(template, data){
            var templateFunc = typeof template === 'function' ? template : Marionette.TemplateCache.get(template);
            var html = templateFunc(data);
            return html;
        }
    };



// Marionette.View
// ---------------

// The core view type that other Marionette views extend from.
    Marionette.View = Backbone.View.extend({

        constructor: function(){
            _.bindAll(this, "render");

            var args = Array.prototype.slice.apply(arguments);
            Backbone.View.prototype.constructor.apply(this, args);

            Marionette.MonitorDOMRefresh(this);
            this.listenTo(this, "show", this.onShowCalled, this);
        },

        // import the "triggerMethod" to trigger events with corresponding
        // methods if the method exists
        triggerMethod: Marionette.triggerMethod,

        // Get the template for this view
        // instance. You can set a `template` attribute in the view
        // definition or pass a `template: "whatever"` parameter in
        // to the constructor options.
        getTemplate: function(){
            return Marionette.getOption(this, "template");
        },

        // Mix in template helper methods. Looks for a
        // `templateHelpers` attribute, which can either be an
        // object literal, or a function that returns an object
        // literal. All methods and attributes from this object
        // are copies to the object passed in.
        mixinTemplateHelpers: function(target){
            target = target || {};
            var templateHelpers = this.templateHelpers;
            if (_.isFunction(templateHelpers)){
                templateHelpers = templateHelpers.call(this);
            }
            return _.extend(target, templateHelpers);
        },

        // Configure `triggers` to forward DOM events to view
        // events. `triggers: {"click .foo": "do:foo"}`
        configureTriggers: function(){
            if (!this.triggers) { return; }

            var that = this;
            var triggerEvents = {};

            // Allow `triggers` to be configured as a function
            var triggers = _.result(this, "triggers");

            // Configure the triggers, prevent default
            // action and stop propagation of DOM events
            _.each(triggers, function(value, key){

                // build the event handler function for the DOM event
                triggerEvents[key] = function(e){

                    // stop the event in it's tracks
                    if (e && e.preventDefault){ e.preventDefault(); }
                    if (e && e.stopPropagation){ e.stopPropagation(); }

                    // buil the args for the event
                    var args = {
                        view: this,
                        model: this.model,
                        collection: this.collection
                    };

                    // trigger the event
                    that.triggerMethod(value, args);
                };

            });

            return triggerEvents;
        },

        // Overriding Backbone.View's delegateEvents to handle
        // the `triggers`, `modelEvents`, and `collectionEvents` configuration
        delegateEvents: function(events){
            this._delegateDOMEvents(events);
            Marionette.bindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
            Marionette.bindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
        },

        // internal method to delegate DOM events and triggers
        _delegateDOMEvents: function(events){
            events = events || this.events;
            if (_.isFunction(events)){ events = events.call(this); }

            var combinedEvents = {};
            var triggers = this.configureTriggers();
            _.extend(combinedEvents, events, triggers);

            Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
        },

        // Overriding Backbone.View's undelegateEvents to handle unbinding
        // the `triggers`, `modelEvents`, and `collectionEvents` config
        undelegateEvents: function(){
            var args = Array.prototype.slice.call(arguments);
            Backbone.View.prototype.undelegateEvents.apply(this, args);

            Marionette.unbindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
            Marionette.unbindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
        },

        // Internal method, handles the `show` event.
        onShowCalled: function(){},

        // Default `close` implementation, for removing a view from the
        // DOM and unbinding it. Regions will call this method
        // for you. You can specify an `onClose` method in your view to
        // add custom code that is called after the view is closed.
        close: function(){
            if (this.isClosed) { return; }

            // allow the close to be stopped by returning `false`
            // from the `onBeforeClose` method
            var shouldClose = this.triggerMethod("before:close");
            if (shouldClose === false){
                return;
            }

            // mark as closed before doing the actual close, to
            // prevent infinite loops within "close" event handlers
            // that are trying to close other views
            this.isClosed = true;
            this.triggerMethod("close");

            this.remove();
        },

        // This method binds the elements specified in the "ui" hash inside the view's code with
        // the associated jQuery selectors.
        bindUIElements: function(){
            if (!this.ui) { return; }

            var that = this;

            if (!this.uiBindings) {
                // We want to store the ui hash in uiBindings, since afterwards the values in the ui hash
                // will be overridden with jQuery selectors.
                this.uiBindings = _.result(this, "ui");
            }

            // refreshing the associated selectors since they should point to the newly rendered elements.
            this.ui = {};
            _.each(_.keys(this.uiBindings), function(key) {
                var selector = that.uiBindings[key];
                that.ui[key] = that.$(selector);
            });
        }
    });

// Item View
// ---------

// A single item view implementation that contains code for rendering
// with underscore.js templates, serializing the view's model or collection,
// and calling several methods on extended views, such as `onRender`.
    Marionette.ItemView =  Marionette.View.extend({
        constructor: function(){
            var args = Array.prototype.slice.apply(arguments);
            Marionette.View.prototype.constructor.apply(this, args);
        },

        // Serialize the model or collection for the view. If a model is
        // found, `.toJSON()` is called. If a collection is found, `.toJSON()`
        // is also called, but is used to populate an `items` array in the
        // resulting data. If both are found, defaults to the model.
        // You can override the `serializeData` method in your own view
        // definition, to provide custom serialization for your view's data.
        serializeData: function(){
            var data = {};

            if (this.model) {
                data = this.model.toJSON();
            }
            else if (this.collection) {
                data = { items: this.collection.toJSON() };
            }

            return data;
        },

        // Render the view, defaulting to underscore.js templates.
        // You can override this in your view definition to provide
        // a very specific rendering for your view. In general, though,
        // you should override the `Marionette.Renderer` object to
        // change how Marionette renders views.
        render: function(){
            this.isClosed = false;

            this.triggerMethod("before:render", this);
            this.triggerMethod("item:before:render", this);

            var data = this.serializeData();
            data = this.mixinTemplateHelpers(data);

            var template = this.getTemplate();
            var html = Marionette.Renderer.render(template, data);
            this.$el.html(html);
            this.bindUIElements();

            this.triggerMethod("render", this);
            this.triggerMethod("item:rendered", this);

            return this;
        },

        // Override the default close event to add a few
        // more events that are triggered.
        close: function(){
            if (this.isClosed){ return; }

            this.triggerMethod('item:before:close');

            var args = Array.prototype.slice.apply(arguments);
            Marionette.View.prototype.close.apply(this, args);

            this.triggerMethod('item:closed');
        }
    });

// Collection View
// ---------------

// A view that iterates over a Backbone.Collection
// and renders an individual ItemView for each model.
    Marionette.CollectionView = Marionette.View.extend({
        // used as the prefix for item view events
        // that are forwarded through the collectionview
        itemViewEventPrefix: "itemview",

        // constructor
        constructor: function(options){
            this._initChildViewStorage();

            var args = Array.prototype.slice.apply(arguments);
            Marionette.View.prototype.constructor.apply(this, args);

            this._initialEvents();
        },

        // Configured the initial events that the collection view
        // binds to. Override this method to prevent the initial
        // events, or to add your own initial events.
        _initialEvents: function(){
            if (this.collection){
                this.listenTo(this.collection, "add", this.addChildView, this);
                this.listenTo(this.collection, "remove", this.removeItemView, this);
                this.listenTo(this.collection, "reset", this.render, this);
            }
        },

        // Handle a child item added to the collection
        addChildView: function(item, collection, options){
            this.closeEmptyView();
            var ItemView = this.getItemView(item);
            var index = this.collection.indexOf(item);
            this.addItemView(item, ItemView, index);
        },

        // Override from `Marionette.View` to guarantee the `onShow` method
        // of child views is called.
        onShowCalled: function(){
            this.children.each(function(child){
                Marionette.triggerMethod.call(child, "show");
            });
        },

        // Internal method to trigger the before render callbacks
        // and events
        triggerBeforeRender: function(){
            this.triggerMethod("before:render", this);
            this.triggerMethod("collection:before:render", this);
        },

        // Internal method to trigger the rendered callbacks and
        // events
        triggerRendered: function(){
            this.triggerMethod("render", this);
            this.triggerMethod("collection:rendered", this);
        },

        // Render the collection of items. Override this method to
        // provide your own implementation of a render function for
        // the collection view.
        render: function(){
            this.isClosed = false;
            this.triggerBeforeRender();
            this._renderChildren();
            this.triggerRendered();
            return this;
        },

        // Internal method. Separated so that CompositeView can have
        // more control over events being triggered, around the rendering
        // process
        _renderChildren: function(){
            this.closeEmptyView();
            this.closeChildren();

            if (this.collection && this.collection.length > 0) {
                this.showCollection();
            } else {
                this.showEmptyView();
            }
        },

        // Internal method to loop through each item in the
        // collection view and show it
        showCollection: function(){
            var that = this;
            var ItemView;
            this.collection.each(function(item, index){
                ItemView = that.getItemView(item);
                that.addItemView(item, ItemView, index);
            });
        },

        // Internal method to show an empty view in place of
        // a collection of item views, when the collection is
        // empty
        showEmptyView: function(){
            var EmptyView = Marionette.getOption(this, "emptyView");

            if (EmptyView && !this._showingEmptyView){
                this._showingEmptyView = true;
                var model = new Backbone.Model();
                this.addItemView(model, EmptyView, 0);
            }
        },

        // Internal method to close an existing emptyView instance
        // if one exists. Called when a collection view has been
        // rendered empty, and then an item is added to the collection.
        closeEmptyView: function(){
            if (this._showingEmptyView){
                this.closeChildren();
                delete this._showingEmptyView;
            }
        },

        // Retrieve the itemView type, either from `this.options.itemView`
        // or from the `itemView` in the object definition. The "options"
        // takes precedence.
        getItemView: function(item){
            var itemView = Marionette.getOption(this, "itemView");

            if (!itemView){
                var err = new Error("An `itemView` must be specified");
                err.name = "NoItemViewError";
                throw err;
            }

            return itemView;
        },

        // Render the child item's view and add it to the
        // HTML for the collection view.
        addItemView: function(item, ItemView, index){
            var that = this;

            // get the itemViewOptions if any were specified
            var itemViewOptions = Marionette.getOption(this, "itemViewOptions");
            if (_.isFunction(itemViewOptions)){
                itemViewOptions = itemViewOptions.call(this, item);
            }

            // build the view
            var view = this.buildItemView(item, ItemView, itemViewOptions);

            // set up the child view event forwarding
            this.addChildViewEventForwarding(view);

            // this view is about to be added
            this.triggerMethod("before:item:added", view);

            // Store the child view itself so we can properly
            // remove and/or close it later
            this.children.add(view);

            // Render it and show it
            this.renderItemView(view, index);

            // call the "show" method if the collection view
            // has already been shown
            if (this._isShown){
                Marionette.triggerMethod.call(view, "show");
            }

            // this view was added
            this.triggerMethod("after:item:added", view);
        },

        // Set up the child view event forwarding. Uses an "itemview:"
        // prefix in front of all forwarded events.
        addChildViewEventForwarding: function(view){
            var prefix = Marionette.getOption(this, "itemViewEventPrefix");

            // Forward all child item view events through the parent,
            // prepending "itemview:" to the event name
            this.listenTo(view, "all", function(){
                var args = slice.call(arguments);
                args[0] = prefix + ":" + args[0];
                args.splice(1, 0, view);

                Marionette.triggerMethod.apply(this, args);
            }, this);
        },

        // render the item view
        renderItemView: function(view, index) {
            view.render();
            this.appendHtml(this, view, index);
        },

        // Build an `itemView` for every model in the collection.
        buildItemView: function(item, ItemViewType, itemViewOptions){
            var options = _.extend({model: item}, itemViewOptions);
            var view = new ItemViewType(options);
            return view;
        },

        // get the child view by item it holds, and remove it
        removeItemView: function(item){
            var view = this.children.findByModel(item);
            this.removeChildView(view);
            this.checkEmpty();
        },

        // Remove the child view and close it
        removeChildView: function(view){

            // shut down the child view properly,
            // including events that the collection has from it
            if (view){
                this.stopListening(view);

                if (view.close){
                    view.close();
                }

                this.children.remove(view);
            }

            this.triggerMethod("item:removed", view);
        },

        // helper to show the empty view if the collection is empty
        checkEmpty: function() {
            // check if we're empty now, and if we are, show the
            // empty view
            if (!this.collection || this.collection.length === 0){
                this.showEmptyView();
            }
        },

        // Append the HTML to the collection's `el`.
        // Override this method to do something other
        // then `.append`.
        appendHtml: function(collectionView, itemView, index){
            collectionView.$el.append(itemView.el);
        },

        // Internal method to set up the `children` object for
        // storing all of the child views
        _initChildViewStorage: function(){
            this.children = new Backbone.ChildViewContainer();
        },

        // Handle cleanup and other closing needs for
        // the collection of views.
        close: function(){
            if (this.isClosed){ return; }

            this.triggerMethod("collection:before:close");
            this.closeChildren();
            this.triggerMethod("collection:closed");

            var args = Array.prototype.slice.apply(arguments);
            Marionette.View.prototype.close.apply(this, args);
        },

        // Close the child views that this collection view
        // is holding on to, if any
        closeChildren: function(){
            this.children.each(function(child){
                this.removeChildView(child);
            }, this);
            this.checkEmpty();
        }
    });


// Composite View
// --------------

// Used for rendering a branch-leaf, hierarchical structure.
// Extends directly from CollectionView and also renders an
// an item view as `modelView`, for the top leaf
    Marionette.CompositeView = Marionette.CollectionView.extend({
        constructor: function(options){
            var args = Array.prototype.slice.apply(arguments);
            Marionette.CollectionView.apply(this, args);

            this.itemView = this.getItemView();
        },

        // Configured the initial events that the composite view
        // binds to. Override this method to prevent the initial
        // events, or to add your own initial events.
        _initialEvents: function(){
            if (this.collection){
                this.listenTo(this.collection, "add", this.addChildView, this);
                this.listenTo(this.collection, "remove", this.removeItemView, this);
                this.listenTo(this.collection, "reset", this._renderChildren, this);
            }
        },

        // Retrieve the `itemView` to be used when rendering each of
        // the items in the collection. The default is to return
        // `this.itemView` or Marionette.CompositeView if no `itemView`
        // has been defined
        getItemView: function(item){
            var itemView = Marionette.getOption(this, "itemView") || this.constructor;

            if (!itemView){
                var err = new Error("An `itemView` must be specified");
                err.name = "NoItemViewError";
                throw err;
            }

            return itemView;
        },

        // Serialize the collection for the view.
        // You can override the `serializeData` method in your own view
        // definition, to provide custom serialization for your view's data.
        serializeData: function(){
            var data = {};

            if (this.model){
                data = this.model.toJSON();
            }

            return data;
        },

        // Renders the model once, and the collection once. Calling
        // this again will tell the model's view to re-render itself
        // but the collection will not re-render.
        render: function(){
            this.isClosed = false;
            this.resetItemViewContainer();

            this.triggerBeforeRender();
            var html = this.renderModel();
            this.$el.html(html);
            // the ui bindings is done here and not at the end of render since they
            // will not be available until after the model is rendered, but should be
            // available before the collection is rendered.
            this.bindUIElements();
            this.triggerMethod("composite:model:rendered");

            this._renderChildren();

            this.triggerMethod("composite:rendered");
            this.triggerRendered();
            return this;
        },

        _renderChildren: function(){
            Marionette.CollectionView.prototype._renderChildren.call(this);
            this.triggerMethod("composite:collection:rendered");
        },

        // Render the collection for the composite view
        renderCollection: function(){
            var args = Array.prototype.slice.apply(arguments);
            Marionette.CollectionView.prototype.render.apply(this, args);

        },

        // Render an individual model, if we have one, as
        // part of a composite view (branch / leaf). For example:
        // a treeview.
        renderModel: function(){
            var data = {};
            data = this.serializeData();
            data = this.mixinTemplateHelpers(data);

            var template = this.getTemplate();
            return Marionette.Renderer.render(template, data);
        },

        // Appends the `el` of itemView instances to the specified
        // `itemViewContainer` (a jQuery selector). Override this method to
        // provide custom logic of how the child item view instances have their
        // HTML appended to the composite view instance.
        appendHtml: function(cv, iv){
            var $container = this.getItemViewContainer(cv);
            $container.append(iv.el);
        },

        // Internal method to ensure an `$itemViewContainer` exists, for the
        // `appendHtml` method to use.
        getItemViewContainer: function(containerView){
            if ("$itemViewContainer" in containerView){
                return containerView.$itemViewContainer;
            }

            var container;
            if (containerView.itemViewContainer){

                var selector = _.result(containerView, "itemViewContainer");
                container = containerView.$(selector);
                if (container.length <= 0) {
                    var err = new Error("The specified `itemViewContainer` was not found: " + containerView.itemViewContainer);
                    err.name = "ItemViewContainerMissingError";
                    throw err;
                }

            } else {
                container = containerView.$el;
            }

            containerView.$itemViewContainer = container;
            return container;
        },

        // Internal method to reset the `$itemViewContainer` on render
        resetItemViewContainer: function(){
            if (this.$itemViewContainer){
                delete this.$itemViewContainer;
            }
        }
    });


// Layout
// ------

// Used for managing application layouts, nested layouts and
// multiple regions within an application or sub-application.
//
// A specialized view type that renders an area of HTML and then
// attaches `Region` instances to the specified `regions`.
// Used for composite view management and sub-application areas.
    Marionette.Layout = Marionette.ItemView.extend({
        regionType: Marionette.Region,

        // Ensure the regions are avialable when the `initialize` method
        // is called.
        constructor: function () {
            this._firstRender = true;
            this.initializeRegions();

            var args = Array.prototype.slice.apply(arguments);
            Marionette.ItemView.apply(this, args);
        },

        // Layout's render will use the existing region objects the
        // first time it is called. Subsequent calls will close the
        // views that the regions are showing and then reset the `el`
        // for the regions to the newly rendered DOM elements.
        render: function(){

            if (this._firstRender){
                // if this is the first render, don't do anything to
                // reset the regions
                this._firstRender = false;
            } else {
                // If this is not the first render call, then we need to
                // re-initializing the `el` for each region
                this.closeRegions();
                this.reInitializeRegions();
            }

            var args = Array.prototype.slice.apply(arguments);
            var result = Marionette.ItemView.prototype.render.apply(this, args);

            return result;
        },

        // Handle closing regions, and then close the view itself.
        close: function () {
            if (this.isClosed){ return; }

            this.closeRegions();
            this.destroyRegions();

            var args = Array.prototype.slice.apply(arguments);
            Marionette.ItemView.prototype.close.apply(this, args);
        },

        // Initialize the regions that have been defined in a
        // `regions` attribute on this layout. The key of the
        // hash becomes an attribute on the layout object directly.
        // For example: `regions: { menu: ".menu-container" }`
        // will product a `layout.menu` object which is a region
        // that controls the `.menu-container` DOM element.
        initializeRegions: function () {
            if (!this.regionManagers){
                this.regionManagers = {};
            }

            var that = this;
            var regions = this.regions || {};
            _.each(regions, function (region, name) {

                var regionManager = Marionette.Region.buildRegion(region, that.regionType);
                regionManager.getEl = function(selector){
                    return that.$(selector);
                };

                that.regionManagers[name] = regionManager;
                that[name] = regionManager;
            });

        },

        // Re-initialize all of the regions by updating the `el` that
        // they point to
        reInitializeRegions: function(){
            if (this.regionManagers && _.size(this.regionManagers)===0){
                this.initializeRegions();
            } else {
                _.each(this.regionManagers, function(region){
                    region.reset();
                });
            }
        },

        // Close all of the regions that have been opened by
        // this layout. This method is called when the layout
        // itself is closed.
        closeRegions: function () {
            var that = this;
            _.each(this.regionManagers, function (manager, name) {
                manager.close();
            });
        },

        // Destroys all of the regions by removing references
        // from the Layout
        destroyRegions: function(){
            var that = this;
            _.each(this.regionManagers, function (manager, name) {
                delete that[name];
            });
            this.regionManagers = {};
        }
    });



// AppRouter
// ---------

// Reduce the boilerplate code of handling route events
// and then calling a single method on another object.
// Have your routers configured to call the method on
// your object, directly.
//
// Configure an AppRouter with `appRoutes`.
//
// App routers can only take one `controller` object.
// It is recommended that you divide your controller
// objects in to smaller peices of related functionality
// and have multiple routers / controllers, instead of
// just one giant router and controller.
//
// You can also add standard routes to an AppRouter.

    Marionette.AppRouter = Backbone.Router.extend({

        constructor: function(options){
            var args = Array.prototype.slice.apply(arguments);
            Backbone.Router.prototype.constructor.apply(this, args);

            this.options = options;

            if (this.appRoutes){
                var controller = Marionette.getOption(this, "controller");
                this.processAppRoutes(controller, this.appRoutes);
            }
        },

        // Internal method to process the `appRoutes` for the
        // router, and turn them in to routes that trigger the
        // specified method on the specified `controller`.
        processAppRoutes: function(controller, appRoutes){
            var method, methodName;
            var route, routesLength, i;
            var routes = [];
            var router = this;

            for(route in appRoutes){
                if (appRoutes.hasOwnProperty(route)){
                    routes.unshift([route, appRoutes[route]]);
                }
            }

            routesLength = routes.length;
            for (i = 0; i < routesLength; i++){
                route = routes[i][0];
                methodName = routes[i][1];
                method = controller[methodName];

                if (!method){
                    var msg = "Method '" + methodName + "' was not found on the controller";
                    var err = new Error(msg);
                    err.name = "NoMethodError";
                    throw err;
                }

                method = _.bind(method, controller);
                router.route(route, methodName, method);
            }
        }
    });


// Application
// -----------

// Contain and manage the composite application as a whole.
// Stores and starts up `Region` objects, includes an
// event aggregator as `app.vent`
    Marionette.Application = function(options){
        this.initCallbacks = new Marionette.Callbacks();
        this.vent = new Backbone.Wreqr.EventAggregator();
        this.commands = new Backbone.Wreqr.Commands();
        this.reqres = new Backbone.Wreqr.RequestResponse();
        this.submodules = {};

        _.extend(this, options);

        this.triggerMethod = Marionette.triggerMethod;
    };

    _.extend(Marionette.Application.prototype, Backbone.Events, {
        // Command execution, facilitated by Backbone.Wreqr.Commands
        execute: function(){
            var args = Array.prototype.slice.apply(arguments);
            this.commands.execute.apply(this.commands, args);
        },

        // Request/response, facilitated by Backbone.Wreqr.RequestResponse
        request: function(){
            var args = Array.prototype.slice.apply(arguments);
            return this.reqres.request.apply(this.reqres, args);
        },

        // Add an initializer that is either run at when the `start`
        // method is called, or run immediately if added after `start`
        // has already been called.
        addInitializer: function(initializer){
            this.initCallbacks.add(initializer);
        },

        // kick off all of the application's processes.
        // initializes all of the regions that have been added
        // to the app, and runs all of the initializer functions
        start: function(options){
            this.triggerMethod("initialize:before", options);
            this.initCallbacks.run(options, this);
            this.triggerMethod("initialize:after", options);

            this.triggerMethod("start", options);
        },

        // Add regions to your app.
        // Accepts a hash of named strings or Region objects
        // addRegions({something: "#someRegion"})
        // addRegions{{something: Region.extend({el: "#someRegion"}) });
        addRegions: function(regions){
            var that = this;
            _.each(regions, function (region, name) {
                var regionManager = Marionette.Region.buildRegion(region, Marionette.Region);
                that[name] = regionManager;
            });
        },

        // Removes a region from your app.
        // Accepts the regions name
        // removeRegion('myRegion')
        removeRegion: function(region) {
            this[region].close();
            delete this[region];
        },

        // Create a module, attached to the application
        module: function(moduleNames, moduleDefinition){
            // slice the args, and add this application object as the
            // first argument of the array
            var args = slice.call(arguments);
            args.unshift(this);

            // see the Marionette.Module object for more information
            return Marionette.Module.create.apply(Marionette.Module, args);
        }
    });

// Copy the `extend` function used by Backbone's classes
    Marionette.Application.extend = Marionette.extend;

// Module
// ------

// A simple module system, used to create privacy and encapsulation in
// Marionette applications
    Marionette.Module = function(moduleName, app){
        this.moduleName = moduleName;

        // store sub-modules
        this.submodules = {};

        this._setupInitializersAndFinalizers();

        // store the configuration for this module
        this.app = app;
        this.startWithParent = true;

        this.triggerMethod = Marionette.triggerMethod;
    };

// Extend the Module prototype with events / listenTo, so that the module
// can be used as an event aggregator or pub/sub.
    _.extend(Marionette.Module.prototype, Backbone.Events, {

        // Initializer for a specific module. Initializers are run when the
        // module's `start` method is called.
        addInitializer: function(callback){
            this._initializerCallbacks.add(callback);
        },

        // Finalizers are run when a module is stopped. They are used to teardown
        // and finalize any variables, references, events and other code that the
        // module had set up.
        addFinalizer: function(callback){
            this._finalizerCallbacks.add(callback);
        },

        // Start the module, and run all of it's initializers
        start: function(options){
            // Prevent re-starting a module that is already started
            if (this._isInitialized){ return; }

            // start the sub-modules (depth-first hierarchy)
            _.each(this.submodules, function(mod){
                // check to see if we should start the sub-module with this parent
                var startWithParent = true;
                startWithParent = mod.startWithParent;

                // start the sub-module
                if (startWithParent){
                    mod.start(options);
                }
            });

            // run the callbacks to "start" the current module
            this.triggerMethod("before:start", options);

            this._initializerCallbacks.run(options, this);
            this._isInitialized = true;

            this.triggerMethod("start", options);
        },

        // Stop this module by running its finalizers and then stop all of
        // the sub-modules for this module
        stop: function(){
            // if we are not initialized, don't bother finalizing
            if (!this._isInitialized){ return; }
            this._isInitialized = false;

            Marionette.triggerMethod.call(this, "before:stop");

            // stop the sub-modules; depth-first, to make sure the
            // sub-modules are stopped / finalized before parents
            _.each(this.submodules, function(mod){ mod.stop(); });

            // run the finalizers
            this._finalizerCallbacks.run(undefined,this);

            // reset the initializers and finalizers
            this._initializerCallbacks.reset();
            this._finalizerCallbacks.reset();

            Marionette.triggerMethod.call(this, "stop");
        },

        // Configure the module with a definition function and any custom args
        // that are to be passed in to the definition function
        addDefinition: function(moduleDefinition, customArgs){
            this._runModuleDefinition(moduleDefinition, customArgs);
        },

        // Internal method: run the module definition function with the correct
        // arguments
        _runModuleDefinition: function(definition, customArgs){
            if (!definition){ return; }

            // build the correct list of arguments for the module definition
            var args = _.flatten([
                this,
                this.app,
                Backbone,
                Marionette,
                $, _,
                customArgs
            ]);

            definition.apply(this, args);
        },

        // Internal method: set up new copies of initializers and finalizers.
        // Calling this method will wipe out all existing initializers and
        // finalizers.
        _setupInitializersAndFinalizers: function(){
            this._initializerCallbacks = new Marionette.Callbacks();
            this._finalizerCallbacks = new Marionette.Callbacks();
        }
    });

// Type methods to create modules
    _.extend(Marionette.Module, {

        // Create a module, hanging off the app parameter as the parent object.
        create: function(app, moduleNames, moduleDefinition){
            var that = this;
            var module = app;

            // get the custom args passed in after the module definition and
            // get rid of the module name and definition function
            var customArgs = slice.apply(arguments);
            customArgs.splice(0, 3);

            // split the module names and get the length
            moduleNames = moduleNames.split(".");
            var length = moduleNames.length;

            // store the module definition for the last module in the chain
            var moduleDefinitions = [];
            moduleDefinitions[length-1] = moduleDefinition;

            // Loop through all the parts of the module definition
            _.each(moduleNames, function(moduleName, i){
                var parentModule = module;
                module = that._getModule(parentModule, moduleName, app);
                that._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
            });

            // Return the last module in the definition chain
            return module;
        },

        _getModule: function(parentModule, moduleName, app, def, args){
            // Get an existing module of this name if we have one
            var module = parentModule[moduleName];

            if (!module){
                // Create a new module if we don't have one
                module = new Marionette.Module(moduleName, app);
                parentModule[moduleName] = module;
                // store the module on the parent
                parentModule.submodules[moduleName] = module;
            }

            return module;
        },

        _addModuleDefinition: function(parentModule, module, def, args){
            var fn;
            var startWithParent;

            if (_.isFunction(def)){
                // if a function is supplied for the module definition
                fn = def;
                startWithParent = true;

            } else if (_.isObject(def)){
                // if an object is supplied
                fn = def.define;
                startWithParent = def.startWithParent;

            } else {
                // if nothing is supplied
                startWithParent = true;
            }

            // add module definition if needed
            if (fn){
                module.addDefinition(fn, args);
            }

            // `and` the two together, ensuring a single `false` will prevent it
            // from starting with the parent
            var tmp = module.startWithParent;
            module.startWithParent = module.startWithParent && startWithParent;

            // setup auto-start if needed
            if (module.startWithParent && !module.startWithParentIsConfigured){

                // only configure this once
                module.startWithParentIsConfigured = true;

                // add the module initializer config
                parentModule.addInitializer(function(options){
                    if (module.startWithParent){
                        module.start(options);
                    }
                });

            }

        }
    });



    return Marionette;
})(Backbone, _, $ || window.jQuery || window.Zepto || window.ender);

Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return mango.compile(rawTemplate);
};
