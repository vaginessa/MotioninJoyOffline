(function (a, b)
{
    function cA(a)
    {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cx(a)
    {
        if (!cm[a])
        {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "")
            {
                cn || (cn = c.createElement("iframe"), cn.frameBorder = cn.width = cn.height = 0), b.appendChild(cn);
                if (!co || !cn.createElement) co = (cn.contentWindow || cn.contentDocument).document, co.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), co.close();
                d = co.createElement(a), co.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cn)
            }
            cm[a] = e
        }
        return cm[a]
    }
    function cw(a, b)
    {
        var c = {};
        f.each(cs.concat.apply([], cs.slice(0, b)), function ()
        {
            c[this] = a
        });
        return c
    }
    function cv()
    {
        ct = b
    }
    function cu()
    {
        setTimeout(cv, 0);
        return ct = f.now()
    }
    function cl()
    {
        try
        {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (b)
        {}
    }
    function ck()
    {
        try
        {
            return new a.XMLHttpRequest
        }
        catch (b)
        {}
    }
    function ce(a, c)
    {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++)
        {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k)
            {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n)
                {
                    p = b;
                    for (o in e)
                    {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*")
                        {
                            p = e[j[1] + " " + k];
                            if (p)
                            {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function cd(a, c, d)
    {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h))
        {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else
        {
            for (i in d)
            {
                if (!f[0] || a.converters[i + " " + f[0]])
                {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j)
        {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function cc(a, b, c, d)
    {
        if (f.isArray(b)) f.each(b, function (b, e)
        {
            c || bG.test(a) ? d(a, e) : cc(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object") for (var e in b) cc(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function cb(a, c)
    {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function ca(a, c, d, e, f, g)
    {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bV,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = ca(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = ca(a, c, d, e, "*", g));
        return l
    }
    function b_(a)
    {
        return function (b, c)
        {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c))
            {
                var d = b.toLowerCase().split(bR),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }
    function bE(a, b, c)
    {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bz : bA;
        if (d > 0)
        {
            c !== "border" && f.each(e, function ()
            {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bB(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0, c && f.each(e, function ()
        {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
        });
        return d + "px"
    }
    function br(a, b)
    {
        b.src ? f.ajax(
        {
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bi, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }
    function bq(a)
    {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bp(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bp)
    }
    function bp(a)
    {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }
    function bo(a)
    {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bn(a, b)
    {
        var c;
        if (b.nodeType === 1)
        {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio")
            {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            }
            else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }
    function bm(a, b)
    {
        if (b.nodeType === 1 && !! f.hasData(a))
        {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i)
            {
                delete h.handle, h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend(
            {}, h.data))
        }
    }
    function bl(a, b)
    {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function X(a)
    {
        var b = Y.split(" "),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function W(a, b, c)
    {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d)
        {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d)
        {
            return a === b === c
        });
        if (typeof b == "string")
        {
            var d = f.grep(a, function (a)
            {
                return a.nodeType === 1
            });
            if (R.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d)
        {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function V(a)
    {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function N()
    {
        return !0
    }
    function M()
    {
        return !1
    }
    function n(a, b, c)
    {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function ()
        {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }
    function m(a)
    {
        for (var b in a)
        {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }
    function l(a, c, d)
    {
        if (d === b && a.nodeType === 1)
        {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string")
            {
                try
                {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                }
                catch (g)
                {}
                f.data(a, c, d)
            }
            else d = b
        }
        return d
    }
    function h(a)
    {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function ()
        {
            function K()
            {
                if (!e.isReady)
                {
                    try
                    {
                        c.documentElement.doScroll("left")
                    }
                    catch (a)
                    {
                        setTimeout(K, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b)
            {
                return new e.fn.init(a, b, h)
            },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                x = /^-ms-/,
                y = function (a, b)
                {
                    return (b + "").toUpperCase()
                },
                z = d.userAgent,
                A, B, C, D = Object.prototype.toString,
                E = Object.prototype.hasOwnProperty,
                F = Array.prototype.push,
                G = Array.prototype.slice,
                H = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f)
                {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType)
                    {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body)
                    {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string")
                    {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d))
                        {
                            if (g[1])
                            {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode)
                            {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7",
                length: 0,
                size: function ()
                {
                    return this.length
                },
                toArray: function ()
                {
                    return G.call(this, 0)
                },
                get: function (a)
                {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c)
                {
                    var d = this.constructor();
                    e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b)
                {
                    return e.each(this, a, b)
                },
                ready: function (a)
                {
                    e.bindReady(), B.add(a);
                    return this
                },
                eq: function (a)
                {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function ()
                {
                    return this.eq(0)
                },
                last: function ()
                {
                    return this.eq(-1)
                },
                slice: function ()
                {
                    return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
                },
                map: function (a)
                {
                    return this.pushStack(e.map(this, function (b, c)
                    {
                        return a.call(b, c, b)
                    }))
                },
                end: function ()
                {
                    return this.prevObject || this.constructor(null)
                },
                push: F,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function ()
            {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a)
                {
                    d = i[c], f = a[c];
                    if (i === f) continue;
                    l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                }
                return i
            }, e.extend(
            {
                noConflict: function (b)
                {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a)
                {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a)
                {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady)
                    {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        B.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function ()
                {
                    if (!B)
                    {
                        B = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent)
                        {
                            c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try
                            {
                                b = a.frameElement == null
                            }
                            catch (d)
                            {}
                            c.documentElement.doScroll && b && K()
                        }
                    }
                },
                isFunction: function (a)
                {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray ||
                function (a)
                {
                    return e.type(a) === "array"
                },
                isWindow: function (a)
                {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNumeric: function (a)
                {
                    return a != null && m.test(a) && !isNaN(a)
                },
                type: function (a)
                {
                    return a == null ? String(a) : J[D.call(a)] || "object"
                },
                isPlainObject: function (a)
                {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try
                    {
                        if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    }
                    catch (c)
                    {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || E.call(a, d)
                },
                isEmptyObject: function (a)
                {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a)
                {
                    throw a
                },
                parseJSON: function (b)
                {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c)
                {
                    var d, f;
                    try
                    {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    }
                    catch (g)
                    {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function ()
                {},
                globalEval: function (b)
                {
                    b && j.test(b) && (a.execScript ||
                    function (b)
                    {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a)
                {
                    return a.replace(x, "ms-").replace(w, y)
                },
                nodeName: function (a, b)
                {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d)
                {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d)
                    {
                        if (i)
                        {
                            for (f in a) if (c.apply(a[f], d) === !1) break
                        }
                        else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                    }
                    else if (i)
                    {
                        for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                    }
                    else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                },
                trim: H ?
                function (a)
                {
                    return a == null ? "" : H.call(a)
                } : function (a)
                {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b)
                {
                    var c = b || [];
                    if (a != null)
                    {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c)
                {
                    var d;
                    if (b)
                    {
                        if (I) return I.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++) if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, c)
                {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function (a, b, c)
                {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) e = !! b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d)
                {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c)
                {
                    if (typeof c == "string")
                    {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = G.call(arguments, 2),
                        g = function ()
                        {
                            return a.apply(c, f.concat(G.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h)
                {
                    var i = a.length;
                    if (typeof c == "object")
                    {
                        for (var j in c) e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b)
                    {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function ()
                {
                    return (new Date).getTime()
                },
                uaMatch: function (a)
                {
                    a = a.toLowerCase();
                    var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function ()
                {
                    function a(b, c)
                    {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f)
                    {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b)
            {
                J["[object " + b + "]"] = b.toLowerCase()
            }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function ()
            {
                c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
            } : c.attachEvent && (C = function ()
            {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready())
            }), typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function ()
            {
                return e
            });
            return e
        }(),
        g = {};
    f.Callbacks = function (a)
    {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m = function (b)
            {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            },
            n = function (b, f)
            {
                f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++) if (c[l].apply(b, f) === !1 && a.stopOnFalse)
                {
                    e = !0;
                    break
                }
                i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
            },
            o = {
                add: function ()
                {
                    if (c)
                    {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                    }
                    return this
                },
                remove: function ()
                {
                    if (c)
                    {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f])
                        {
                            i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                            if (a.unique) break
                        }
                    }
                    return this
                },
                has: function (a)
                {
                    if (c)
                    {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function ()
                {
                    c = [];
                    return this
                },
                disable: function ()
                {
                    c = d = e = b;
                    return this
                },
                disabled: function ()
                {
                    return !c
                },
                lock: function ()
                {
                    d = b, (!e || e === !0) && o.disable();
                    return this
                },
                locked: function ()
                {
                    return !d
                },
                fireWith: function (b, c)
                {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function ()
                {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function ()
                {
                    return !!e
                }
            };
        return o
    };
    var i = [].slice;
    f.extend(
    {
        Deferred: function (a)
        {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function ()
                    {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c)
                    {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function ()
                    {
                        return i.done.apply(i, arguments).fail.apply(i, arguments)
                    },
                    pipe: function (a, b, c)
                    {
                        return f.Deferred(function (d)
                        {
                            f.each(
                            {
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b)
                            {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function ()
                                {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a)
                    {
                        if (a == null) a = h;
                        else for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise(
                {}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function ()
            {
                e = "resolved"
            }, c.disable, d.lock).fail(function ()
            {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function (a)
        {
            function m(a)
            {
                return function (b)
                {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }
            function l(a)
            {
                return function (c)
                {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1)
            {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            }
            else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function ()
    {
        var a = c.createElement("div"),
            b = c.documentElement,
            d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !! a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            unknownElems: !! a.getElementsByTagName("nav").length,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: a.className !== "t",
            enctype: !! c.createElement("form").enctype,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try
        {
            delete a.test
        }
        catch (v)
        {
            k.deleteExpando = !1
        }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function ()
        {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.lastChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, m && f.extend(p, {
            position: "absolute",
            left: "-999px",
            top: "-999px"
        });
        for (t in p) o.style[t] = p[t];
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (a.attachEvent) for (t in {
            submit: 1,
            change: 1,
            focusin: 1
        }) s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u;
        f(function ()
        {
            var a, b, d, e, g, h, i = 1,
                j = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
                l = "visibility:hidden;border:0;",
                n = "style='" + j + "border:5px solid #000;padding:0;'",
                p = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>";
            m = c.getElementsByTagName("body")[0];
            !m || (a = c.createElement("div"), a.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + i + "px", m.insertBefore(a, m.firstChild), o = c.createElement("div"), o.style.cssText = j + l, o.innerHTML = p, a.appendChild(o), b = o.firstChild, d = b.firstChild, g = b.nextSibling.firstChild.firstChild, h = {
                doesNotAddBorder: d.offsetTop !== 5,
                doesAddBorderForTableAndCells: g.offsetTop === 5
            }, d.style.position = "fixed", d.style.top = "20px", h.fixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", b.style.overflow = "hidden", b.style.position = "relative", h.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, h.doesNotIncludeMarginInBodyOffset = m.offsetTop !== i, m.removeChild(a), o = a = null, f.extend(k, h))
        }), o.innerHTML = "", n.removeChild(o), o = l = g = h = m = j = a = i = null;
        return k
    }(), f.boxModel = f.support.boxModel;
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend(
    {
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a)
        {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e)
        {
            if ( !! f.acceptData(a))
            {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[f.expando] : a[f.expando] && f.expando,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[f.expando] = n = ++f.uuid : n = f.expando), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c)
        {
            if ( !! f.acceptData(a))
            {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[f.expando] : f.expando;
                if (!j[k]) return;
                if (b)
                {
                    d = c ? j[k] : j[k].data;
                    if (d)
                    {
                        f.isArray(b) ? b = b : b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" "));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c)
                {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
            }
        },
        _data: function (a, b, c)
        {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a)
        {
            if (a.nodeName)
            {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend(
    {
        data: function (a, c)
        {
            var d, e, g, h = null;
            if (typeof a == "undefined")
            {
                if (this.length)
                {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs"))
                    {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") return this.each(function ()
            {
                f.data(this, a)
            });
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b)
            {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function ()
            {
                var b = f(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function (a)
        {
            return this.each(function ()
            {
                f.removeData(this, a)
            })
        }
    }), f.extend(
    {
        _mark: function (a, b)
        {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c)
        {
            a !== !0 && (c = b, b = a, a = !1);
            if (b)
            {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c)
        {
            var d;
            if (a)
            {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function (a, b)
        {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function ()
            {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend(
    {
        queue: function (a, c)
        {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function ()
            {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a)
        {
            return this.each(function ()
            {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b)
        {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c)
            {
                var d = setTimeout(b, a);
                c.stop = function ()
                {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a)
        {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c)
        {
            function m()
            {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend(
    {
        attr: function (a, b)
        {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function (a)
        {
            return this.each(function ()
            {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b)
        {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function (a)
        {
            a = f.propFix[a] || a;
            return this.each(function ()
            {
                try
                {
                    this[a] = b, delete this[a]
                }
                catch (c)
                {}
            })
        },
        addClass: function (a)
        {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b)
            {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string")
            {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++)
                {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else
                    {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        },
        removeClass: function (a)
        {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b)
            {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b)
            {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++)
                {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a)
                    {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    }
                    else g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b)
        {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c)
            {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function ()
            {
                if (c === "string")
                {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                }
                else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a)
        {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a)
        {
            var c, d, e, g = this[0];
            if (!arguments.length)
            {
                if (g)
                {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
                return b
            }
            e = f.isFunction(a);
            return this.each(function (d)
            {
                var g = f(this),
                    h;
                if (this.nodeType === 1)
                {
                    e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a)
                    {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                }
            })
        }
    }), f.extend(
    {
        valHooks: {
            option: {
                get: function (a)
                {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a)
                {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++)
                    {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup")))
                        {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function (a, b)
                {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function ()
                    {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e)
        {
            var g, h, i, j = a.nodeType;
            if (!a || j === 3 || j === 8 || j === 2) return b;
            if (e && c in f.attrFn) return f(a)[c](d);
            if (!("getAttribute" in a)) return f.prop(a, c, d);
            i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
            if (d !== b)
            {
                if (d === null)
                {
                    f.removeAttr(a, c);
                    return b
                }
                if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                a.setAttribute(c, "" + d);
                return d
            }
            if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
            g = a.getAttribute(c);
            return g === null ? b : g
        },
        removeAttr: function (a, b)
        {
            var c, d, e, g, h = 0;
            if (a.nodeType === 1)
            {
                d = (b || "").split(p), g = d.length;
                for (; h < g; h++) e = d[h].toLowerCase(), c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1)
            }
        },
        attrHooks: {
            type: {
                set: function (a, b)
                {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input"))
                    {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function (a, b)
                {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function (a, b, c)
                {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d)
        {
            var e, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return b;
            h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
            return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a)
                {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c)
        {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c)
        {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0
    }, w = f.valHooks.button = {
        get: function (a, c)
        {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d)
        {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b)
    {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c)
            {
                if (c === "")
                {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c)
        {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c)
    {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a)
            {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a)
        {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b)
        {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a)
        {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function ()
    {
        f.valHooks[this] = {
            get: function (a)
            {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function ()
    {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b)
            {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /\.(.*)$/,
        A = /^(?:textarea|input|select)$/i,
        B = /\./g,
        C = / /g,
        D = /[^\w\s.|`]/g,
        E = /^([^\.]*)?(?:\.(.+))?$/,
        F = /\bhover(\.\S+)?/,
        G = /^key/,
        H = /^(?:mouse|contextmenu)|click/,
        I = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        J = function (a)
        {
            var b = I.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        K = function (a, b)
        {
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || a.id === b[2]) && (!b[3] || b[3].test(a.className))
        },
        L = function (a)
        {
            return f.event.special.hover ? a : a.replace(F, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g)
        {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a))))
            {
                d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a)
                {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = L(c).split(" ");
                for (k = 0; k < c.length; k++)
                {
                    l = E.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend(
                    {
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        namespace: n.join(".")
                    }, p), g && (o.quick = J(g), !o.quick && f.expr.match.POS.test(g) && (o.isPositional = !0)), r = j[m];
                    if (!r)
                    {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d)
        {
            var e = f.hasData(a) && f._data(a),
                g, h, i, j, k, l, m, n, o, p, q;
            if ( !! e && !! (m = e.events))
            {
                b = L(b || "").split(" ");
                for (g = 0; g < b.length; g++)
                {
                    h = E.exec(b[g]) || [], i = h[1], j = h[2];
                    if (!i)
                    {
                        j = j ? "." + j : "";
                        for (l in m) f.event.remove(a, l + j, c, d);
                        return
                    }
                    n = f.event.special[i] || {}, i = (d ? n.delegateType : n.bindType) || i, p = m[i] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    if (c || j || d || n.remove) for (l = 0; l < p.length; l++)
                    {
                        q = p[l];
                        if (!c || c.guid === q.guid) if (!j || j.test(q.namespace)) if (!d || d === q.selector || d === "**" && q.selector) p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q)
                    }
                    else p.length = 0;
                    p.length === 0 && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && f.removeEvent(a, i, e.handle), delete m[i])
                }
                f.isEmptyObject(m) && (o = e.handle, o && (o.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g)
        {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8)
            {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "", (g || !e) && c.preventDefault();
                if (!e)
                {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e))
                {
                    s = p.delegateType || h, n = null;
                    for (m = e.parentNode; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length; l++)
                {
                    m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d);
                    if (c.isPropagationStopped()) break
                }
                c.type = h, c.isDefaultPrevented() || (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c)
        {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = (f.event.special[c.type] || {}).handle,
                j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) for (m = c.target; m != this; m = m.parentNode || this)
            {
                o = {}, q = [];
                for (k = 0; k < e; k++) r = d[k], s = r.selector, t = o[s], r.isPositional ? t = (t || (o[s] = f(s))).index(m) >= 0 : t === b && (t = o[s] = r.quick ? K(m, r.quick) : f(m).is(s)), t && q.push(r);
                q.length && j.push(
                {
                    elem: m,
                    matches: q
                })
            }
            d.length > e && j.push(
            {
                elem: this,
                matches: d.slice(e)
            });
            for (k = 0; k < j.length && !c.isPropagationStopped(); k++)
            {
                p = j[k], c.currentTarget = p.elem;
                for (l = 0; l < p.matches.length && !c.isImmediatePropagationStopped(); l++)
                {
                    r = p.matches[l];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) c.data = r.data, c.handleObj = r, n = (i || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b)
            {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
            filter: function (a, d)
            {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a)
        {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {},
                i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            focus: {
                delegateType: "focusin",
                noBubble: !0
            },
            blur: {
                delegateType: "focusout",
                noBubble: !0
            },
            beforeunload: {
                setup: function (a, b, c)
                {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b)
                {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d)
        {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ?
    function (a, b, c)
    {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c)
    {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b)
    {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? N : M) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function ()
        {
            this.isDefaultPrevented = N;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function ()
        {
            this.isPropagationStopped = N;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function ()
        {
            this.isImmediatePropagationStopped = N, this.stopPropagation()
        },
        isDefaultPrevented: M,
        isPropagationStopped: M,
        isImmediatePropagationStopped: M
    }, f.each(
    {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b)
    {
        f.event.special[a] = f.event.special[b] = {
            delegateType: b,
            bindType: b,
            handle: function (a)
            {
                var b = this,
                    c = a.relatedTarget,
                    d = a.handleObj,
                    e = d.selector,
                    g, h;
                if (!c || d.origType === a.type || c !== b && !f.contains(b, c)) g = a.type, a.type = d.origType, h = d.handler.apply(this, arguments), a.type = g;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function ()
        {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a)
            {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a)
                {
                    this.parentNode && f.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        },
        teardown: function ()
        {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function ()
        {
            if (A.test(this.nodeName))
            {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a)
                {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a)
                {
                    this._just_changed && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a)
            {
                var b = a.target;
                A.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a)
                {
                    this.parentNode && !a.isSimulated && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function (a)
        {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function ()
        {
            f.event.remove(this, "._change");
            return A.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each(
    {
        focus: "focusin",
        blur: "focusout"
    }, function (a, b)
    {
        var d = 0,
            e = function (a)
            {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function ()
            {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function ()
            {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend(
    {
        on: function (a, c, d, e, g)
        {
            var h, i;
            if (typeof a == "object")
            {
                typeof c != "string" && (d = c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = M;
            else if (!e) return this;
            g === 1 && (h = e, e = function (a)
            {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function ()
            {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d)
        {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function (a, c, d)
        {
            if (a && a.preventDefault && a.handleObj)
            {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object")
            {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = M);
            return this.each(function ()
            {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c)
        {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b)
        {
            return this.off(a, null, b)
        },
        live: function (a, b, c)
        {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function (a, b)
        {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function (a, b, c, d)
        {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c)
        {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a, b)
        {
            return this.each(function ()
            {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b)
        {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a)
        {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c)
                {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b)
        {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b)
    {
        f.fn[b] = function (a, c)
        {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), G.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), H.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function ()
    {
        function x(a, b, c, e, f, g)
        {
            for (var h = 0, i = e.length; h < i; h++)
            {
                var j = e[h];
                if (j)
                {
                    var k = !1;
                    j = j[a];
                    while (j)
                    {
                        if (j[d] === c)
                        {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1)
                        {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string")
                            {
                                if (j === b)
                                {
                                    k = !0;
                                    break
                                }
                            }
                            else if (m.filter(b, [j]).length > 0)
                            {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g)
        {
            for (var h = 0, i = e.length; h < i; h++)
            {
                var j = e[h];
                if (j)
                {
                    var k = !1;
                    j = j[a];
                    while (j)
                    {
                        if (j[d] === c)
                        {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b)
                        {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;[0, 0].sort(function ()
        {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f)
        {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
                v = m.isXML(d),
                w = [],
                x = b;
            do
            {
                a.exec(""), i = a.exec(x);
                if (i)
                {
                    x = i[3], w.push(i[1]);
                    if (i[2])
                    {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
            else
            {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            }
            else
            {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d)
                {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                }
                else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k);
            else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a)
        {
            if (u)
            {
                h = i, a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b)
        {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b)
        {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c)
        {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++)
            {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a))
                {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\")
                    {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null)
                        {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }, m.filter = function (a, c, d, e)
        {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length)
            {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2])
                {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h])
                    {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (n = 0;
                    (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b)
                    {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a);
                else break;
                q = a
            }
            return s
        }, m.error = function (a)
        {
            throw "Syntax error, unrecognized expression: " + a
        };
        var n = m.getText = function (a)
        {
            var b, c, d = a.nodeType,
                e = "";
            if (d)
            {
                if (d === 1)
                {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                }
                else if (d === 3 || d === 4) return a.nodeValue
            }
            else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        },
            o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a)
                    {
                        return a.getAttribute("href")
                    },
                    type: function (a)
                    {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b)
                    {
                        var c = typeof b == "string",
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f])
                        {
                            while ((h = h.previousSibling) && h.nodeType !== 1);
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                        e && m.filter(b, a, !0)
                    },
                    ">": function (a, b)
                    {
                        var c, d = typeof b == "string",
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b))
                        {
                            b = b.toLowerCase();
                            for (; e < f; e++)
                            {
                                c = a[e];
                                if (c)
                                {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        }
                        else
                        {
                            for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function (a, b, c)
                    {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                    },
                    "~": function (a, b, c)
                    {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function (a, b, c)
                    {
                        if (typeof b.getElementById != "undefined" && !c)
                        {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function (a, b)
                    {
                        if (typeof b.getElementsByName != "undefined")
                        {
                            var c = [],
                                d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b)
                    {
                        if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f)
                    {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) return a;
                        for (var g = 0, h;
                        (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function (a)
                    {
                        return a[1].replace(j, "")
                    },
                    TAG: function (a, b)
                    {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function (a)
                    {
                        if (a[1] === "nth")
                        {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                        }
                        else a[2] && m.error(a[0]);
                        a[0] = e++;
                        return a
                    },
                    ATTR: function (a, b, c, d, e, f)
                    {
                        var g = a[1] = a[1].replace(j, "");
                        !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function (b, c, d, e, f)
                    {
                        if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                        else
                        {
                            var g = m.filter(b[3], c, d, !0 ^ f);
                            d || e.push.apply(e, g);
                            return !1
                        }
                        else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                        return b
                    },
                    POS: function (a)
                    {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function (a)
                    {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function (a)
                    {
                        return a.disabled === !0
                    },
                    checked: function (a)
                    {
                        return a.checked === !0
                    },
                    selected: function (a)
                    {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0
                    },
                    parent: function (a)
                    {
                        return !!a.firstChild
                    },
                    empty: function (a)
                    {
                        return !a.firstChild
                    },
                    has: function (a, b, c)
                    {
                        return !!m(c[3], a).length
                    },
                    header: function (a)
                    {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a)
                    {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function (a)
                    {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function (a)
                    {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function (a)
                    {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function (a)
                    {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function (a)
                    {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function (a)
                    {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function (a)
                    {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function (a)
                    {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function (a)
                    {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function (a)
                    {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b)
                    {
                        return b === 0
                    },
                    last: function (a, b, c, d)
                    {
                        return b === d.length - 1
                    },
                    even: function (a, b)
                    {
                        return b % 2 === 0
                    },
                    odd: function (a, b)
                    {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c)
                    {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c)
                    {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c)
                    {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c)
                    {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d)
                    {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not")
                        {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function (a, b)
                    {
                        var c, e, f, g, h, i, j, k = b[1],
                            l = a;
                        switch (k)
                        {
                        case "only":
                        case "first":
                            while (l = l.previousSibling) if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling) if (l.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex))
                            {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function (a, b)
                    {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a, b)
                    {
                        return b === "*" && a.nodeType === 1 || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b)
                    {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b)
                    {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function (a, b, c, d)
                    {
                        var e = b[2],
                            f = o.setFilters[e];
                        if (f) return f(a, c, b, d)
                    }
                }
            },
            p = o.match.POS,
            q = function (a, b)
            {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function (a, b)
        {
            a = Array.prototype.slice.call(a, 0);
            if (b)
            {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try
        {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        }
        catch (t)
        {
            s = function (a, b)
            {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b)
        {
            if (a === b)
            {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b)
        {
            if (a === b)
            {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c)
        {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d)
            {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }), function ()
        {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d)
            {
                if (typeof c.getElementById != "undefined" && !d)
                {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b)
            {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function ()
        {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b)
            {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*")
                {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a)
            {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll &&
        function ()
        {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0)
            {
                m = function (b, e, f, g)
                {
                    e = e || c;
                    if (!g && !m.isXML(e))
                    {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9))
                        {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9)
                        {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3])
                            {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try
                            {
                                return s(e.querySelectorAll(b), f)
                            }
                            catch (j)
                            {}
                        }
                        else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object")
                        {
                            var k = e,
                                l = e.getAttribute("id"),
                                n = l || d,
                                p = e.parentNode,
                                q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try
                            {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            }
                            catch (r)
                            {}
                            finally
                            {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(), function ()
        {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b)
            {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try
                {
                    b.call(c.documentElement, "[test!='']:sizzle")
                }
                catch (f)
                {
                    e = !0
                }
                m.matchesSelector = function (a, c)
                {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try
                    {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c))
                        {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    }
                    catch (g)
                    {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function ()
        {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0)
            {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c)
                {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b)
        {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b)
        {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function ()
        {
            return !1
        }, m.isXML = function (a)
        {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c)
        {
            var d, e = [],
                f = "",
                g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var O = /Until$/,
        P = /^(?:parents|prevUntil|prevAll)/,
        Q = /,/,
        R = /^.[^:#\[\.,]*$/,
        S = Array.prototype.slice,
        T = f.expr.match.POS,
        U = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend(
    {
        find: function (a)
        {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function ()
            {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++)
            {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h])
                {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        },
        has: function (a)
        {
            var b = f(a);
            return this.filter(function ()
            {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a)
        {
            return this.pushStack(W(this, a, !1), "not", a)
        },
        filter: function (a)
        {
            return this.pushStack(W(this, a, !0), "filter", a)
        },
        is: function (a)
        {
            return !!a && (typeof a == "string" ? T.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b)
        {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a))
            {
                var h = 1;
                while (g && g.ownerDocument && g !== b)
                {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push(
                    {
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = T.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++)
            {
                g = this[d];
                while (g)
                {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a))
                    {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a)
        {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b)
        {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(V(c[0]) || V(d[0]) ? d : f.unique(d))
        },
        andSelf: function ()
        {
            return this.add(this.prevObject)
        }
    }), f.each(
    {
        parent: function (a)
        {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a)
        {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c)
        {
            return f.dir(a, "parentNode", c)
        },
        next: function (a)
        {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a)
        {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a)
        {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a)
        {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c)
        {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c)
        {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a)
        {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function (a)
        {
            return f.sibling(a.firstChild)
        },
        contents: function (a)
        {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b)
    {
        f.fn[a] = function (c, d)
        {
            var e = f.map(this, b, c),
                g = S.call(arguments);
            O.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !U[a] ? f.unique(e) : e, (this.length > 1 || Q.test(d)) && P.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","))
        }
    }), f.extend(
    {
        filter: function (a, b, c)
        {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d)
        {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function (a, b, c, d)
        {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b)
        {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var Y = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        Z = / jQuery\d+="(?:\d+|null)"/g,
        $ = /^\s+/,
        _ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        ba = /<([\w:]+)/,
        bb = /<tbody/i,
        bc = /<|&#?\w+;/,
        bd = /<(?:script|style)/i,
        be = /<(?:script|object|embed|option|style)/i,
        bf = new RegExp("<(?:" + Y.replace(" ", "|") + ")", "i"),
        bg = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bh = /\/(java|ecma)script/i,
        bi = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bj = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bk = X(c);
    bj.optgroup = bj.option, bj.tbody = bj.tfoot = bj.colgroup = bj.caption = bj.thead, bj.th = bj.td, f.support.htmlSerialize || (bj._default = [1, "div<div>", "</div>"]), f.fn.extend(
    {
        text: function (a)
        {
            if (f.isFunction(a)) return this.each(function (b)
            {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        },
        wrapAll: function (a)
        {
            if (f.isFunction(a)) return this.each(function (b)
            {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0])
            {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function ()
                {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a)
        {
            if (f.isFunction(a)) return this.each(function (b)
            {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function ()
            {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a)
        {
            return this.each(function ()
            {
                f(this).wrapAll(a)
            })
        },
        unwrap: function ()
        {
            return this.parent().each(function ()
            {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function ()
        {
            return this.domManip(arguments, !0, function (a)
            {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function ()
        {
            return this.domManip(arguments, !0, function (a)
            {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function ()
        {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a)
            {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length)
            {
                var a = f(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function ()
        {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a)
            {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length)
            {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f(arguments[0]).toArray());
                return a
            }
        },
        remove: function (a, b)
        {
            for (var c = 0, d;
            (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function ()
        {
            for (var a = 0, b;
            (b = this[a]) != null; a++)
            {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b)
        {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function ()
            {
                return f.clone(this, a, b)
            })
        },
        html: function (a)
        {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Z, "") : null;
            if (typeof a == "string" && !bd.test(a) && (f.support.leadingWhitespace || !$.test(a)) && !bj[(ba.exec(a) || ["", ""])[1].toLowerCase()])
            {
                a = a.replace(_, "<$1></$2>");
                try
                {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                }
                catch (e)
                {
                    this.empty().append(a)
                }
            }
            else f.isFunction(a) ? this.each(function (b)
            {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a)
        {
            if (this[0] && this[0].parentNode)
            {
                if (f.isFunction(a)) return this.each(function (b)
                {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function ()
                {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a)
        {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d)
        {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bg.test(j)) return this.each(function ()
            {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e)
            {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0])
            {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g)
                {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bl(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, br)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d)
    {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !be.test(j) && (f.support.checkClone || !bg.test(j)) && !f.support.unknownElems && bf.test(j) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each(
    {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b)
    {
        f.fn[a] = function (c)
        {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1)
            {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++)
            {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend(
    {
        clone: function (a, b, c)
        {
            var d = a.cloneNode(!0),
                e, g, h;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a))
            {
                bn(a, d), e = bo(a), g = bo(d);
                for (h = 0; e[h]; ++h) g[h] && bn(e[h], g[h])
            }
            if (b)
            {
                bm(a, d);
                if (c)
                {
                    e = bo(a), g = bo(d);
                    for (h = 0; e[h]; ++h) bm(e[h], g[h])
                }
            }
            e = g = null;
            return d
        },
        clean: function (a, b, d, e)
        {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
            (k = a[j]) != null; j++)
            {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string") if (!bc.test(k)) k = b.createTextNode(k);
                else
                {
                    k = k.replace(_, "<$1></$2>");
                    var l = (ba.exec(k) || ["", ""])[1].toLowerCase(),
                        m = bj[l] || bj._default,
                        n = m[0],
                        o = b.createElement("div");
                    b === c ? bk.appendChild(o) : X(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                    while (n--) o = o.lastChild;
                    if (!f.support.tbody)
                    {
                        var p = bb.test(k),
                            q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                    }!f.support.leadingWhitespace && $.test(k) && o.insertBefore(b.createTextNode($.exec(k)[0]), o.firstChild), k = o.childNodes
                }
                var r;
                if (!f.support.appendChecked) if (k[0] && typeof(r = k.length) == "number") for (i = 0; i < r; i++) bq(k[i]);
                else bq(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d)
            {
                g = function (a)
                {
                    return !a.type || bh.test(a.type)
                };
                for (j = 0; h[j]; j++)
	                if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript"))
	                	e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
	                else
	                {
	                    if (h[j].nodeType === 1)
	                    {
	                        var s = f.grep(h[j].getElementsByTagName("script"), g);
	                        h.splice.apply(h, [j + 1, 0].concat(s))
	                    }
	                    d.appendChild(h[j])
	                }
            }
            return h
        },
        cleanData: function (a)
        {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
            (i = a[h]) != null; h++)
            {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c)
                {
                    b = d[c];
                    if (b && b.events)
                    {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bs = /alpha\([^)]*\)/i,
        bt = /opacity=([^)]*)/,
        bu = /([A-Z]|^ms)/g,
        bv = /^-?\d+(?:px)?$/i,
        bw = /^-?\d/,
        bx = /^([\-+])=([\-+.\de]+)/,
        by = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bz = ["Left", "Right"],
        bA = ["Top", "Bottom"],
        bB, bC, bD;
    f.fn.css = function (a, c)
    {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function (a, c, d)
        {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend(
    {
        cssHooks: {
            opacity: {
                get: function (a, b)
                {
                    if (b)
                    {
                        var c = bB(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e)
        {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style)
            {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b)
                {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bx.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try
                {
                    j[c] = d
                }
                catch (l)
                {}
            }
        },
        css: function (a, c, d)
        {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bB) return bB(a, c)
        },
        swap: function (a, b, c)
        {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b)
    {
        f.cssHooks[b] = {
            get: function (a, c, d)
            {
                var e;
                if (c)
                {
                    if (a.offsetWidth !== 0) return bE(a, b, d);
                    f.swap(a, by, function ()
                    {
                        e = bE(a, b, d)
                    });
                    return e
                }
            },
            set: function (a, b)
            {
                if (!bv.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b)
        {
            return bt.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b)
        {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bs, "")) === "")
            {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bs.test(g) ? g.replace(bs, e) : g + " " + e
        }
    }), f(function ()
    {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b)
            {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function ()
                {
                    b ? c = bB(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bC = function (a, c)
    {
        var d, e, g;
        c = c.replace(bu, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) return b;
        if (g = e.getComputedStyle(a, null)) d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
        return d
    }), c.documentElement.currentStyle && (bD = function (a, b)
    {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bv.test(f) && bw.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bB = bC || bD, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a)
    {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a)
    {
        return !f.expr.filters.hidden(a)
    });
    var bF = /%20/g,
        bG = /\[\]$/,
        bH = /\r?\n/g,
        bI = /#.*$/,
        bJ = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bK = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bL = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bM = /^(?:GET|HEAD)$/,
        bN = /^\/\//,
        bO = /\?/,
        bP = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bQ = /^(?:select|textarea)/i,
        bR = /\s+/,
        bS = /([?&])_=[^&]*/,
        bT = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bU = f.fn.load,
        bV = {},
        bW = {},
        bX, bY, bZ = ["*/"] + ["*"];
    try
    {
        bX = e.href
    }
    catch (b$)
    {
        bX = c.createElement("a"), bX.href = "", bX = bX.href
    }
    bY = bT.exec(bX.toLowerCase()) || [], f.fn.extend(
    {
        load: function (a, c, d)
        {
            if (typeof a != "string" && bU) return bU.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0)
            {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax(
            {
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c)
                {
                    c = a.responseText, a.isResolved() && (a.done(function (a)
                    {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bP, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function ()
        {
            return f.param(this.serializeArray())
        },
        serializeArray: function ()
        {
            return this.map(function ()
            {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function ()
            {
                return this.name && !this.disabled && (this.checked || bQ.test(this.nodeName) || bK.test(this.type))
            }).map(function (a, b)
            {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c)
                {
                    return {
                        name: b.name,
                        value: a.replace(bH, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bH, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b)
    {
        f.fn[b] = function (a)
        {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c)
    {
        f[c] = function (a, d, e, g)
        {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax(
            {
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend(
    {
        getScript: function (a, c)
        {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c)
        {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b)
        {
            b ? cb(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), cb(a, b);
            return a
        },
        ajaxSettings: {
            url: bX,
            isLocal: bL.test(bY[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bZ
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: b_(bV),
        ajaxTransport: b_(bW),
        ajax: function (a, c)
        {
            function w(a, c, l, m)
            {
                if (s !== 2)
                {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? cd(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304)
                    {
                        if (d.ifModified)
                        {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try
                        {
                            r = ce(d, x), w = "success", o = !0
                        }
                        catch (A)
                        {
                            w = "parsererror", u = A
                        }
                    }
                    else
                    {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup(
            {}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b)
                    {
                        if (!s)
                        {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function ()
                    {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a)
                    {
                        var c;
                        if (s === 2)
                        {
                            if (!o)
                            {
                                o = {};
                                while (c = bJ.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a)
                    {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a)
                    {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a)
            {
                if (a)
                {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bI, "").replace(bN, bY[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bR), d.crossDomain == null && (r = bT.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bY[1] && r[2] == bY[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bY[3] || (bY[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), ca(bV, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bM.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent)
            {
                d.data && (d.url += (bO.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1)
                {
                    var x = f.now(),
                        y = d.url.replace(bS, "$1_=" + x);
                    d.url = y + (y === d.url ? (bO.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bZ + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2))
            {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = ca(bW, d, c, v);
            if (!p) w(-1, "No Transport");
            else
            {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function ()
                {
                    v.abort("timeout")
                }, d.timeout));
                try
                {
                    s = 1, p.send(l, w)
                }
                catch (z)
                {
                    s < 2 ? w(-1, z) : f.error(z)
                }
            }
            return v
        },
        param: function (a, c)
        {
            var d = [],
                e = function (a, b)
                {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function ()
            {
                e(this.name, this.value)
            });
            else for (var g in a) cc(g, a[g], c, e);
            return d.join("&").replace(bF, "+")
        }
    }), f.extend(
    {
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cf = f.now(),
        cg = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup(
    {
        jsonp: "callback",
        jsonpCallback: function ()
        {
            return f.expando + "_" + cf++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d)
    {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cg.test(b.url) || e && cg.test(b.data)))
        {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cg, l), b.url === j && (e && (k = k.replace(cg, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a)
            {
                g = [a]
            }, d.always(function ()
            {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function ()
            {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup(
    {
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a)
            {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a)
    {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a)
    {
        if (a.crossDomain)
        {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g)
                {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c)
                    {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function ()
                {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ch = a.ActiveXObject ?
    function ()
    {
        for (var a in cj) cj[a](0, 1)
    } : !1,
        ci = 0,
        cj;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function ()
    {
        return !this.isLocal && ck() || cl()
    } : ck, function (a)
    {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c)
    {
        if (!c.crossDomain || f.support.cors)
        {
            var d;
            return {
                send: function (e, g)
                {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try
                    {
                        for (j in e) h.setRequestHeader(j, e[j])
                    }
                    catch (k)
                    {}
                    h.send(c.hasContent && c.data || null), d = function (a, e)
                    {
                        var j, k, l, m, n;
                        try
                        {
                            if (d && (e || h.readyState === 4))
                            {
                                d = b, i && (h.onreadystatechange = f.noop, ch && delete cj[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else
                                {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try
                                    {
                                        k = h.statusText
                                    }
                                    catch (o)
                                    {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        }
                        catch (p)
                        {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++ci, ch && (cj || (cj = {}, f(a).unload(ch)), cj[i] = d), h.onreadystatechange = d)
                },
                abort: function ()
                {
                    d && d(0, 1)
                }
            }
        }
    });
    var cm = {},
        cn, co, cp = /^(?:toggle|show|hide)$/,
        cq = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cr, cs = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        ct;
    f.fn.extend(
    {
        show: function (a, b, c)
        {
            var d, e;
            if (a || a === 0) return this.animate(cw("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cx(d.nodeName)));
            for (g = 0; g < h; g++)
            {
                d = this[g];
                if (d.style)
                {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c)
        {
            if (a || a === 0) return this.animate(cw("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c)
        {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function ()
            {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cw("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d)
        {
            return this.filter(":hidden").css("opacity", 0).show().end().animate(
            {
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d)
        {
            function g()
            {
                e.queue === !1 && f._mark(this);
                var b = f.extend(
                {}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a)
                {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cx(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cp.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = cq.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend(
            {}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d)
        {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function ()
            {
                function h(a, b, c)
                {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each(
    {
        slideDown: cw("show", 1),
        slideUp: cw("hide", 1),
        slideToggle: cw("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b)
    {
        f.fn[a] = function (a, c, d)
        {
            return this.animate(b, a, c, d)
        }
    }), f.extend(
    {
        speed: function (a, b, c)
        {
            var d = a && typeof a == "object" ? f.extend(
            {}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a)
            {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a, b, c, d)
            {
                return c + d * a
            },
            swing: function (a, b, c, d)
            {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c)
        {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function ()
        {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function ()
        {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, c, d)
        {
            function h(a)
            {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = ct || cu(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function ()
            {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cr && (cr = setInterval(g.tick, g.interval))
        },
        show: function ()
        {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function ()
        {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a)
        {
            var b, c, d, e = ct || cu(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime)
            {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g)
                {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b)
                    {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function ()
        {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function ()
        {
            clearInterval(cr), cr = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a)
            {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a)
            {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"], function (a, b)
    {
        f.fx.step[b] = function (a)
        {
            f.style(a.elem, b, Math.max(0, a.now))
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a)
    {
        return f.grep(f.timers, function (b)
        {
            return a === b.elem
        }).length
    });
    var cy = /^t(?:able|d|h)$/i,
        cz = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a)
    {
        var b = this[0],
            c;
        if (a) return this.each(function (b)
        {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try
        {
            c = b.getBoundingClientRect()
        }
        catch (d)
        {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        } : {
            top: 0,
            left: 0
        };
        var h = e.body,
            i = cA(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function (a)
    {
        var b = this[0];
        if (a) return this.each(function (b)
        {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h)
        {
            if (f.support.fixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cy.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        bodyOffset: function (a)
        {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c)
        {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend(
    {
        position: function ()
        {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cz.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function ()
        {
            return this.map(function ()
            {
                var a = this.offsetParent || c.body;
                while (a && !cz.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c)
    {
        var d = "scroll" + c;
        f.fn[d] = function (c)
        {
            var e, g;
            if (c === b)
            {
                e = this[0];
                if (!e) return null;
                g = cA(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function ()
            {
                g = cA(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c)
    {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function ()
        {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function (a)
        {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function (a)
        {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a)) return this.each(function (b)
            {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e))
            {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b)
            {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
})(window);
(function (c, j)
{
    function k(a, b)
    {
        var d = a.nodeName.toLowerCase();
        if ("area" === d)
        {
            b = a.parentNode;
            d = b.name;
            if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false;
            a = c("img[usemap=#" + d + "]")[0];
            return !!a && l(a)
        }
        return (/input|select|textarea|button|object/.test(d) ? !a.disabled : "a" == d ? a.href || b : b) && l(a)
    }
    function l(a)
    {
        return !c(a).parents().andSelf().filter(function ()
        {
            return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this)
        }).length
    }
    c.ui = c.ui || {};
    if (!c.ui.version)
    {
        c.extend(c.ui, {
            version: "1.8.16",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        });
        c.fn.extend(
        {
            propAttr: c.fn.prop || c.fn.attr,
            _focus: c.fn.focus,
            focus: function (a, b)
            {
                return typeof a === "number" ? this.each(function ()
                {
                    var d = this;
                    setTimeout(function ()
                    {
                        c(d).focus();
                        b && b.call(d)
                    }, a)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function ()
            {
                var a;
                a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function ()
                {
                    return /(relative|absolute|fixed)/.test(c.curCSS(this, "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function ()
                {
                    return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0);
                return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
            },
            zIndex: function (a)
            {
                if (a !== j) return this.css("zIndex", a);
                if (this.length)
                {
                    a = c(this[0]);
                    for (var b; a.length && a[0] !== document;)
                    {
                        b = a.css("position");
                        if (b === "absolute" || b === "relative" || b === "fixed")
                        {
                            b = parseInt(a.css("zIndex"), 10);
                            if (!isNaN(b) && b !== 0) return b
                        }
                        a = a.parent()
                    }
                }
                return 0
            },
            disableSelection: function ()
            {
                return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a)
                {
                    a.preventDefault()
                })
            },
            enableSelection: function ()
            {
                return this.unbind(".ui-disableSelection")
            }
        });
        c.each(["Width", "Height"], function (a, b)
        {
            function d(f, g, m, n)
            {
                c.each(e, function ()
                {
                    g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0;
                    if (m) g -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0;
                    if (n) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                });
                return g
            }
            var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                h = b.toLowerCase(),
                i = {
                    innerWidth: c.fn.innerWidth,
                    innerHeight: c.fn.innerHeight,
                    outerWidth: c.fn.outerWidth,
                    outerHeight: c.fn.outerHeight
                };
            c.fn["inner" + b] = function (f)
            {
                if (f === j) return i["inner" + b].call(this);
                return this.each(function ()
                {
                    c(this).css(h, d(this, f) + "px")
                })
            };
            c.fn["outer" + b] = function (f, g)
            {
                if (typeof f !== "number") return i["outer" + b].call(this, f);
                return this.each(function ()
                {
                    c(this).css(h, d(this, f, true, g) + "px")
                })
            }
        });
        c.extend(c.expr[":"], {
            data: function (a, b, d)
            {
                return !!c.data(a, d[3])
            },
            focusable: function (a)
            {
                return k(a, !isNaN(c.attr(a, "tabindex")))
            },
            tabbable: function (a)
            {
                var b = c.attr(a, "tabindex"),
                    d = isNaN(b);
                return (d || b >= 0) && k(a, !d)
            }
        });
        c(function ()
        {
            var a = document.body,
                b = a.appendChild(b = document.createElement("div"));
            c.extend(b.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            });
            c.support.minHeight = b.offsetHeight === 100;
            c.support.selectstart = "onselectstart" in b;
            a.removeChild(b).style.display = "none"
        });
        c.extend(c.ui, {
            plugin: {
                add: function (a, b, d)
                {
                    a = c.ui[a].prototype;
                    for (var e in d)
                    {
                        a.plugins[e] = a.plugins[e] || [];
                        a.plugins[e].push([b, d[e]])
                    }
                },
                call: function (a, b, d)
                {
                    if ((b = a.plugins[b]) && a.element[0].parentNode) for (var e = 0; e < b.length; e++) a.options[b[e][0]] && b[e][1].apply(a.element, d)
                }
            },
            contains: function (a, b)
            {
                return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
            },
            hasScroll: function (a, b)
            {
                if (c(a).css("overflow") === "hidden") return false;
                b = b && b === "left" ? "scrollLeft" : "scrollTop";
                var d = false;
                if (a[b] > 0) return true;
                a[b] = 1;
                d = a[b] > 0;
                a[b] = 0;
                return d
            },
            isOverAxis: function (a, b, d)
            {
                return a > b && a < b + d
            },
            isOver: function (a, b, d, e, h, i)
            {
                return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i)
            }
        })
    }
})(jQuery);
(function (b, j)
{
    if (b.cleanData)
    {
        var k = b.cleanData;
        b.cleanData = function (a)
        {
            for (var c = 0, d;
            (d = a[c]) != null; c++) try
            {
                b(d).triggerHandler("remove")
            }
            catch (e)
            {}
            k(a)
        }
    }
    else
    {
        var l = b.fn.remove;
        b.fn.remove = function (a, c)
        {
            return this.each(function ()
            {
                if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function ()
                {
                    try
                    {
                        b(this).triggerHandler("remove")
                    }
                    catch (d)
                    {}
                });
                return l.call(b(this), a, c)
            })
        }
    }
    b.widget = function (a, c, d)
    {
        var e = a.split(".")[0],
            f;
        a = a.split(".")[1];
        f = e + "-" + a;
        if (!d)
        {
            d = c;
            c = b.Widget
        }
        b.expr[":"][f] = function (h)
        {
            return !!b.data(h, a)
        };
        b[e] = b[e] || {};
        b[e][a] = function (h, g)
        {
            arguments.length && this._createWidget(h, g)
        };
        c = new c;
        c.options = b.extend(true, {}, c.options);
        b[e][a].prototype = b.extend(true, c, {
            namespace: e,
            widgetName: a,
            widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
            widgetBaseClass: f
        }, d);
        b.widget.bridge(a, b[e][a])
    };
    b.widget.bridge = function (a, c)
    {
        b.fn[a] = function (d)
        {
            var e = typeof d === "string",
                f = Array.prototype.slice.call(arguments, 1),
                h = this;
            d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d;
            if (e && d.charAt(0) === "_") return h;
            e ? this.each(function ()
            {
                var g = b.data(this, a),
                    i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
                if (i !== g && i !== j)
                {
                    h = i;
                    return false
                }
            }) : this.each(function ()
            {
                var g = b.data(this, a);
                g ? g.option(d || {})._init() : b.data(this, a, new c(d, this))
            });
            return h
        }
    };
    b.Widget = function (a, c)
    {
        arguments.length && this._createWidget(a, c)
    };
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function (a, c)
        {
            b.data(c, this.widgetName, this);
            this.element = b(c);
            this.options = b.extend(true, {}, this.options, this._getCreateOptions(), a);
            var d = this;
            this.element.bind("remove." + this.widgetName, function ()
            {
                d.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function ()
        {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function ()
        {},
        _init: function ()
        {},
        destroy: function ()
        {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function ()
        {
            return this.element
        },
        option: function (a, c)
        {
            var d = a;
            if (arguments.length === 0) return b.extend(
            {}, this.options);
            if (typeof a === "string")
            {
                if (c === j) return this.options[a];
                d = {};
                d[a] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function (a)
        {
            var c = this;
            b.each(a, function (d, e)
            {
                c._setOption(d, e)
            });
            return this
        },
        _setOption: function (a, c)
        {
            this.options[a] = c;
            if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
            return this
        },
        enable: function ()
        {
            return this._setOption("disabled", false)
        },
        disable: function ()
        {
            return this._setOption("disabled", true)
        },
        _trigger: function (a, c, d)
        {
            var e = this.options[a];
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            d = d || {};
            if (c.originalEvent)
            {
                a = b.event.props.length;
                for (var f; a;)
                {
                    f = b.event.props[--a];
                    c[f] = c.originalEvent[f]
                }
            }
            this.element.trigger(c, d);
            return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented())
        }
    }
})(jQuery);
(function (b)
{
    var d = false;
    b(document).mouseup(function ()
    {
        d = false
    });
    b.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function ()
        {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function (c)
            {
                return a._mouseDown(c)
            }).bind("click." + this.widgetName, function (c)
            {
                if (true === b.data(c.target, a.widgetName + ".preventClickEvent"))
                {
                    b.removeData(c.target, a.widgetName + ".preventClickEvent");
                    c.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function ()
        {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (a)
        {
            if (!d)
            {
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this,
                    f = a.which == 1,
                    g = typeof this.options.cancel == "string" && a.target.nodeName ? b(a.target).closest(this.options.cancel).length : false;
                if (!f || g || !this._mouseCapture(a)) return true;
                this.mouseDelayMet = !this.options.delay;
                if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function ()
                {
                    c.mouseDelayMet = true
                }, this.options.delay);
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a))
                {
                    this._mouseStarted = this._mouseStart(a) !== false;
                    if (!this._mouseStarted)
                    {
                        a.preventDefault();
                        return true
                    }
                }
                true === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function (e)
                {
                    return c._mouseMove(e)
                };
                this._mouseUpDelegate = function (e)
                {
                    return c._mouseUp(e)
                };
                b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return d = true
            }
        },
        _mouseMove: function (a)
        {
            if (b.browser.msie && !(document.documentMode >= 9) && !a.button) return this._mouseUp(a);
            if (this._mouseStarted)
            {
                this._mouseDrag(a);
                return a.preventDefault()
            }
            if (this._mouseDistanceMet(a) && this._mouseDelayMet(a))(this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a);
            return !this._mouseStarted
        },
        _mouseUp: function (a)
        {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted)
            {
                this._mouseStarted = false;
                a.target == this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", true);
                this._mouseStop(a)
            }
            return false
        },
        _mouseDistanceMet: function (a)
        {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function ()
        {
            return this.mouseDelayMet
        },
        _mouseStart: function ()
        {},
        _mouseDrag: function ()
        {},
        _mouseStop: function ()
        {},
        _mouseCapture: function ()
        {
            return true
        }
    })
})(jQuery);
(function (c)
{
    c.ui = c.ui || {};
    var n = /left|center|right/,
        o = /top|center|bottom/,
        t = c.fn.position,
        u = c.fn.offset;
    c.fn.position = function (b)
    {
        if (!b || !b.of) return t.apply(this, arguments);
        b = c.extend(
        {}, b);
        var a = c(b.of),
            d = a[0],
            g = (b.collision || "flip").split(" "),
            e = b.offset ? b.offset.split(" ") : [0, 0],
            h, k, j;
        if (d.nodeType === 9)
        {
            h = a.width();
            k = a.height();
            j = {
                top: 0,
                left: 0
            }
        }
        else if (d.setTimeout)
        {
            h = a.width();
            k = a.height();
            j = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }
        }
        else if (d.preventDefault)
        {
            b.at = "left top";
            h = k = 0;
            j = {
                top: b.of.pageY,
                left: b.of.pageX
            }
        }
        else
        {
            h = a.outerWidth();
            k = a.outerHeight();
            j = a.offset()
        }
        c.each(["my", "at"], function ()
        {
            var f = (b[this] || "").split(" ");
            if (f.length === 1) f = n.test(f[0]) ? f.concat(["center"]) : o.test(f[0]) ? ["center"].concat(f) : ["center", "center"];
            f[0] = n.test(f[0]) ? f[0] : "center";
            f[1] = o.test(f[1]) ? f[1] : "center";
            b[this] = f
        });
        if (g.length === 1) g[1] = g[0];
        e[0] = parseInt(e[0], 10) || 0;
        if (e.length === 1) e[1] = e[0];
        e[1] = parseInt(e[1], 10) || 0;
        if (b.at[0] === "right") j.left += h;
        else if (b.at[0] === "center") j.left += h / 2;
        if (b.at[1] === "bottom") j.top += k;
        else if (b.at[1] === "center") j.top += k / 2;
        j.left += e[0];
        j.top += e[1];
        return this.each(function ()
        {
            var f = c(this),
                l = f.outerWidth(),
                m = f.outerHeight(),
                p = parseInt(c.curCSS(this, "marginLeft", true)) || 0,
                q = parseInt(c.curCSS(this, "marginTop", true)) || 0,
                v = l + p + (parseInt(c.curCSS(this, "marginRight", true)) || 0),
                w = m + q + (parseInt(c.curCSS(this, "marginBottom", true)) || 0),
                i = c.extend(
                {}, j),
                r;
            if (b.my[0] === "right") i.left -= l;
            else if (b.my[0] === "center") i.left -= l / 2;
            if (b.my[1] === "bottom") i.top -= m;
            else if (b.my[1] === "center") i.top -= m / 2;
            i.left = Math.round(i.left);
            i.top = Math.round(i.top);
            r = {
                left: i.left - p,
                top: i.top - q
            };
            c.each(["left", "top"], function (s, x)
            {
                c.ui.position[g[s]] && c.ui.position[g[s]][x](i, {
                    targetWidth: h,
                    targetHeight: k,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: r,
                    collisionWidth: v,
                    collisionHeight: w,
                    offset: e,
                    my: b.my,
                    at: b.at
                })
            });
            c.fn.bgiframe && f.bgiframe();
            f.offset(c.extend(i, {
                using: b.using
            }))
        })
    };
    c.ui.position = {
        fit: {
            left: function (b, a)
            {
                var d = c(window);
                d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                b.left = d > 0 ? b.left - d : Math.max(b.left - a.collisionPosition.left, b.left)
            },
            top: function (b, a)
            {
                var d = c(window);
                d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                b.top = d > 0 ? b.top - d : Math.max(b.top - a.collisionPosition.top, b.top)
            }
        },
        flip: {
            left: function (b, a)
            {
                if (a.at[0] !== "center")
                {
                    var d = c(window);
                    d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                    var g = a.my[0] === "left" ? -a.elemWidth : a.my[0] === "right" ? a.elemWidth : 0,
                        e = a.at[0] === "left" ? a.targetWidth : -a.targetWidth,
                        h = -2 * a.offset[0];
                    b.left += a.collisionPosition.left < 0 ? g + e + h : d > 0 ? g + e + h : 0
                }
            },
            top: function (b, a)
            {
                if (a.at[1] !== "center")
                {
                    var d = c(window);
                    d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                    var g = a.my[1] === "top" ? -a.elemHeight : a.my[1] === "bottom" ? a.elemHeight : 0,
                        e = a.at[1] === "top" ? a.targetHeight : -a.targetHeight,
                        h = -2 * a.offset[1];
                    b.top += a.collisionPosition.top < 0 ? g + e + h : d > 0 ? g + e + h : 0
                }
            }
        }
    };
    if (!c.offset.setOffset)
    {
        c.offset.setOffset = function (b, a)
        {
            if (/static/.test(c.curCSS(b, "position"))) b.style.position = "relative";
            var d = c(b),
                g = d.offset(),
                e = parseInt(c.curCSS(b, "top", true), 10) || 0,
                h = parseInt(c.curCSS(b, "left", true), 10) || 0;
            g = {
                top: a.top - g.top + e,
                left: a.left - g.left + h
            };
            "using" in a ? a.using.call(b, g) : d.css(g)
        };
        c.fn.offset = function (b)
        {
            var a = this[0];
            if (!a || !a.ownerDocument) return null;
            if (b) return this.each(function ()
            {
                c.offset.setOffset(this, b)
            });
            return u.call(this)
        }
    }
})(jQuery);
(function (d)
{
    var e = 0;
    d.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function ()
        {
            var a = this,
                b = this.element[0].ownerDocument,
                g;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr(
            {
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (c)
            {
                if (!(a.options.disabled || a.element.propAttr("readOnly")))
                {
                    g = false;
                    var f = d.ui.keyCode;
                    switch (c.keyCode)
                    {
                    case f.PAGE_UP:
                        a._move("previousPage", c);
                        break;
                    case f.PAGE_DOWN:
                        a._move("nextPage", c);
                        break;
                    case f.UP:
                        a._move("previous", c);
                        c.preventDefault();
                        break;
                    case f.DOWN:
                        a._move("next", c);
                        c.preventDefault();
                        break;
                    case f.ENTER:
                    case f.NUMPAD_ENTER:
                        if (a.menu.active)
                        {
                            g = true;
                            c.preventDefault()
                        }
                    case f.TAB:
                        if (!a.menu.active) return;
                        a.menu.select(c);
                        break;
                    case f.ESCAPE:
                        a.element.val(a.term);
                        a.close(c);
                        break;
                    default:
                        clearTimeout(a.searching);
                        a.searching = setTimeout(function ()
                        {
                            if (a.term != a.element.val())
                            {
                                a.selectedItem = null;
                                a.search(null, c)
                            }
                        }, a.options.delay);
                        break
                    }
                }
            }).bind("keypress.autocomplete", function (c)
            {
                if (g)
                {
                    g = false;
                    c.preventDefault()
                }
            }).bind("focus.autocomplete", function ()
            {
                if (!a.options.disabled)
                {
                    a.selectedItem = null;
                    a.previous = a.element.val()
                }
            }).bind("blur.autocomplete", function (c)
            {
                if (!a.options.disabled)
                {
                    clearTimeout(a.searching);
                    a.closing = setTimeout(function ()
                    {
                        a.close(c);
                        a._change(c)
                    }, 150)
                }
            });
            this._initSource();
            this.response = function ()
            {
                return a._response.apply(a, arguments)
            };
            this.menu = d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo || "body", b)[0]).mousedown(function (c)
            {
                var f = a.menu.element[0];
                d(c.target).closest(".ui-menu-item").length || setTimeout(function ()
                {
                    d(document).one("mousedown", function (h)
                    {
                        h.target !== a.element[0] && h.target !== f && !d.ui.contains(f, h.target) && a.close()
                    })
                }, 1);
                setTimeout(function ()
                {
                    clearTimeout(a.closing)
                }, 13)
            }).menu(
            {
                focus: function (c, f)
                {
                    f = f.item.data("item.autocomplete");
                    false !== a._trigger("focus", c, {
                        item: f
                    }) && /^key/.test(c.originalEvent.type) && a.element.val(f.value)
                },
                selected: function (c, f)
                {
                    var h = f.item.data("item.autocomplete"),
                        i = a.previous;
                    if (a.element[0] !== b.activeElement)
                    {
                        a.element.focus();
                        a.previous = i;
                        setTimeout(function ()
                        {
                            a.previous = i;
                            a.selectedItem = h
                        }, 1)
                    }
                    false !== a._trigger("select", c, {
                        item: h
                    }) && a.element.val(h.value);
                    a.term = a.element.val();
                    a.close(c);
                    a.selectedItem = h
                },
                blur: function ()
                {
                    a.menu.element.is(":visible") && a.element.val() !== a.term && a.element.val(a.term)
                }
            }).zIndex(this.element.zIndex() + 1).css(
            {
                top: 0,
                left: 0
            }).hide().data("menu");
            d.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function ()
        {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
            this.menu.element.remove();
            d.Widget.prototype.destroy.call(this)
        },
        _setOption: function (a, b)
        {
            d.Widget.prototype._setOption.apply(this, arguments);
            a === "source" && this._initSource();
            if (a === "appendTo") this.menu.element.appendTo(d(b || "body", this.element[0].ownerDocument)[0]);
            a === "disabled" && b && this.xhr && this.xhr.abort()
        },
        _initSource: function ()
        {
            var a = this,
                b, g;
            if (d.isArray(this.options.source))
            {
                b = this.options.source;
                this.source = function (c, f)
                {
                    f(d.ui.autocomplete.filter(b, c.term))
                }
            }
            else if (typeof this.options.source === "string")
            {
                g = this.options.source;
                this.source = function (c, f)
                {
                    a.xhr && a.xhr.abort();
                    a.xhr = d.ajax(
                    {
                        url: g,
                        data: c,
                        dataType: "json",
                        autocompleteRequest: ++e,
                        success: function (h)
                        {
                            this.autocompleteRequest === e && f(h)
                        },
                        error: function ()
                        {
                            this.autocompleteRequest === e && f([])
                        }
                    })
                }
            }
            else this.source = this.options.source
        },
        search: function (a, b)
        {
            a = a != null ? a : this.element.val();
            this.term = this.element.val();
            if (a.length < this.options.minLength) return this.close(b);
            clearTimeout(this.closing);
            if (this._trigger("search", b) !== false) return this._search(a)
        },
        _search: function (a)
        {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source(
            {
                term: a
            }, this.response)
        },
        _response: function (a)
        {
            if (!this.options.disabled && a && a.length)
            {
                a = this._normalize(a);
                this._suggest(a);
                this._trigger("open")
            }
            else this.close();
            this.pending--;
            this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function (a)
        {
            clearTimeout(this.closing);
            if (this.menu.element.is(":visible"))
            {
                this.menu.element.hide();
                this.menu.deactivate();
                this._trigger("close", a)
            }
        },
        _change: function (a)
        {
            this.previous !== this.element.val() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function (a)
        {
            if (a.length && a[0].label && a[0].value) return a;
            return d.map(a, function (b)
            {
                if (typeof b === "string") return {
                    label: b,
                    value: b
                };
                return d.extend(
                {
                    label: b.label || b.value,
                    value: b.value || b.label
                }, b)
            })
        },
        _suggest: function (a)
        {
            var b = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(b, a);
            this.menu.deactivate();
            this.menu.refresh();
            b.show();
            this._resizeMenu();
            b.position(d.extend(
            {
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next(new d.Event("mouseover"))
        },
        _resizeMenu: function ()
        {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function (a, b)
        {
            var g = this;
            d.each(b, function (c, f)
            {
                g._renderItem(a, f)
            })
        },
        _renderItem: function (a, b)
        {
            return d("<li></li>").data("item.autocomplete", b).append(d("<a></a>").text(b.label)).appendTo(a)
        },
        _move: function (a, b)
        {
            if (this.menu.element.is(":visible")) if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a))
            {
                this.element.val(this.term);
                this.menu.deactivate()
            }
            else this.menu[a](b);
            else this.search(null, b)
        },
        widget: function ()
        {
            return this.menu.element
        }
    });
    d.extend(d.ui.autocomplete, {
        escapeRegex: function (a)
        {
            return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (a, b)
        {
            var g = new RegExp(d.ui.autocomplete.escapeRegex(b), "i");
            return d.grep(a, function (c)
            {
                return g.test(c.label || c.value || c)
            })
        }
    })
})(jQuery);
(function (d)
{
    d.widget("ui.menu", {
        _create: function ()
        {
            var e = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr(
            {
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (a)
            {
                if (d(a.target).closest(".ui-menu-item a").length)
                {
                    a.preventDefault();
                    e.select(a)
                }
            });
            this.refresh()
        },
        refresh: function ()
        {
            var e = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (a)
            {
                e.activate(a, d(this).parent())
            }).mouseleave(function ()
            {
                e.deactivate()
            })
        },
        activate: function (e, a)
        {
            this.deactivate();
            if (this.hasScroll())
            {
                var b = a.offset().top - this.element.offset().top,
                    g = this.element.scrollTop(),
                    c = this.element.height();
                if (b < 0) this.element.scrollTop(g + b);
                else b >= c && this.element.scrollTop(g + b - c + a.height())
            }
            this.active = a.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
            this._trigger("focus", e, {
                item: a
            })
        },
        deactivate: function ()
        {
            if (this.active)
            {
                this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
                this._trigger("blur");
                this.active = null
            }
        },
        next: function (e)
        {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function (e)
        {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function ()
        {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function ()
        {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (e, a, b)
        {
            if (this.active)
            {
                e = this.active[e + "All"](".ui-menu-item").eq(0);
                e.length ? this.activate(b, e) : this.activate(b, this.element.children(a))
            }
            else this.activate(b, this.element.children(a))
        },
        nextPage: function (e)
        {
            if (this.hasScroll()) if (!this.active || this.last()) this.activate(e, this.element.children(".ui-menu-item:first"));
            else
            {
                var a = this.active.offset().top,
                    b = this.element.height(),
                    g = this.element.children(".ui-menu-item").filter(function ()
                    {
                        var c = d(this).offset().top - a - b + d(this).height();
                        return c < 10 && c > -10
                    });
                g.length || (g = this.element.children(".ui-menu-item:last"));
                this.activate(e, g)
            }
            else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (e)
        {
            if (this.hasScroll()) if (!this.active || this.first()) this.activate(e, this.element.children(".ui-menu-item:last"));
            else
            {
                var a = this.active.offset().top,
                    b = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function ()
                {
                    var g = d(this).offset().top - a + b - d(this).height();
                    return g < 10 && g > -10
                });
                result.length || (result = this.element.children(".ui-menu-item:first"));
                this.activate(e, result)
            }
            else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function ()
        {
            return this.element.height() < this.element[d.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function (e)
        {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
})(jQuery);
(function (b)
{
    var h, i, j, g, l = function ()
    {
        var a = b(this).find(":ui-button");
        setTimeout(function ()
        {
            a.button("refresh")
        }, 1)
    },
        k = function (a)
        {
            var c = a.name,
                e = a.form,
                f = b([]);
            if (c) f = e ? b(e).find("[name='" + c + "']") : b("[name='" + c + "']", a.ownerDocument).filter(function ()
            {
                return !this.form
            });
            return f
        };
    b.widget("ui.button", {
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function ()
        {
            this.element.closest("form").unbind("reset.button").bind("reset.button", l);
            if (typeof this.options.disabled !== "boolean") this.options.disabled = this.element.propAttr("disabled");
            this._determineButtonType();
            this.hasTitle = !! this.buttonElement.attr("title");
            var a = this,
                c = this.options,
                e = this.type === "checkbox" || this.type === "radio",
                f = "ui-state-hover" + (!e ? " ui-state-active" : "");
            if (c.label === null) c.label = this.buttonElement.html();
            if (this.element.is(":disabled")) c.disabled = true;
            this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function ()
            {
                if (!c.disabled)
                {
                    b(this).addClass("ui-state-hover");
                    this === h && b(this).addClass("ui-state-active")
                }
            }).bind("mouseleave.button", function ()
            {
                c.disabled || b(this).removeClass(f)
            }).bind("click.button", function (d)
            {
                if (c.disabled)
                {
                    d.preventDefault();
                    d.stopImmediatePropagation()
                }
            });
            this.element.bind("focus.button", function ()
            {
                a.buttonElement.addClass("ui-state-focus")
            }).bind("blur.button", function ()
            {
                a.buttonElement.removeClass("ui-state-focus")
            });
            if (e)
            {
                this.element.bind("change.button", function ()
                {
                    g || a.refresh()
                });
                this.buttonElement.bind("mousedown.button", function (d)
                {
                    if (!c.disabled)
                    {
                        g = false;
                        i = d.pageX;
                        j = d.pageY
                    }
                }).bind("mouseup.button", function (d)
                {
                    if (!c.disabled) if (i !== d.pageX || j !== d.pageY) g = true
                })
            }
            if (this.type === "checkbox") this.buttonElement.bind("click.button", function ()
            {
                if (c.disabled || g) return false;
                b(this).toggleClass("ui-state-active");
                a.buttonElement.attr("aria-pressed", a.element[0].checked)
            });
            else if (this.type === "radio") this.buttonElement.bind("click.button", function ()
            {
                if (c.disabled || g) return false;
                b(this).addClass("ui-state-active");
                a.buttonElement.attr("aria-pressed", "true");
                var d = a.element[0];
                k(d).not(d).map(function ()
                {
                    return b(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            });
            else
            {
                this.buttonElement.bind("mousedown.button", function ()
                {
                    if (c.disabled) return false;
                    b(this).addClass("ui-state-active");
                    h = this;
                    b(document).one("mouseup", function ()
                    {
                        h = null
                    })
                }).bind("mouseup.button", function ()
                {
                    if (c.disabled) return false;
                    b(this).removeClass("ui-state-active")
                }).bind("keydown.button", function (d)
                {
                    if (c.disabled) return false;
                    if (d.keyCode == b.ui.keyCode.SPACE || d.keyCode == b.ui.keyCode.ENTER) b(this).addClass("ui-state-active")
                }).bind("keyup.button", function ()
                {
                    b(this).removeClass("ui-state-active")
                });
                this.buttonElement.is("a") && this.buttonElement.keyup(function (d)
                {
                    d.keyCode === b.ui.keyCode.SPACE && b(this).click()
                })
            }
            this._setOption("disabled", c.disabled);
            this._resetButton()
        },
        _determineButtonType: function ()
        {
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
            if (this.type === "checkbox" || this.type === "radio")
            {
                var a = this.element.parents().filter(":last"),
                    c = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = a.find(c);
                if (!this.buttonElement.length)
                {
                    a = a.length ? a.siblings() : this.element.siblings();
                    this.buttonElement = a.filter(c);
                    if (!this.buttonElement.length) this.buttonElement = a.find(c)
                }
                this.element.addClass("ui-helper-hidden-accessible");
                (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active");
                this.buttonElement.attr("aria-pressed", a)
            }
            else this.buttonElement = this.element
        },
        widget: function ()
        {
            return this.buttonElement
        },
        destroy: function ()
        {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title");
            b.Widget.prototype.destroy.call(this)
        },
        _setOption: function (a, c)
        {
            b.Widget.prototype._setOption.apply(this, arguments);
            if (a === "disabled") c ? this.element.propAttr("disabled", true) : this.element.propAttr("disabled", false);
            else this._resetButton()
        },
        refresh: function ()
        {
            var a = this.element.is(":disabled");
            a !== this.options.disabled && this._setOption("disabled", a);
            if (this.type === "radio") k(this.element[0]).each(function ()
            {
                b(this).is(":checked") ? b(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            });
            else if (this.type === "checkbox") this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
        },
        _resetButton: function ()
        {
            if (this.type === "input") this.options.label && this.element.val(this.options.label);
            else
            {
                var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                    c = b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),
                    e = this.options.icons,
                    f = e.primary && e.secondary,
                    d = [];
                if (e.primary || e.secondary)
                {
                    if (this.options.text) d.push("ui-button-text-icon" + (f ? "s" : e.primary ? "-primary" : "-secondary"));
                    e.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + e.primary + "'></span>");
                    e.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + e.secondary + "'></span>");
                    if (!this.options.text)
                    {
                        d.push(f ? "ui-button-icons-only" : "ui-button-icon-only");
                        this.hasTitle || a.attr("title", c)
                    }
                }
                else d.push("ui-button-text-only");
                a.addClass(d.join(" "))
            }
        }
    });
    b.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function ()
        {
            this.element.addClass("ui-buttonset")
        },
        _init: function ()
        {
            this.refresh()
        },
        _setOption: function (a, c)
        {
            a === "disabled" && this.buttons.button("option", a, c);
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function ()
        {
            var a = this.element.css("direction") === "ltr";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function ()
            {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(a ? "ui-corner-right" : "ui-corner-left").end().end()
        },
        destroy: function ()
        {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function ()
            {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
            b.Widget.prototype.destroy.call(this)
        }
    })
})(jQuery);
(function (c, l)
{
    var m = {
        buttons: true,
        height: true,
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true,
        width: true
    },
        n = {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },
        o = c.attrFn || {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true,
            click: true
        };
    c.widget("ui.dialog", {
        options: {
            autoOpen: true,
            buttons: {},
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: false,
            maxWidth: false,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function (a)
                {
                    var b = c(this).css(a).offset().top;
                    b < 0 && c(this).css("top", a.top - b)
                }
            },
            resizable: true,
            show: null,
            stack: true,
            title: "",
            width: 300,
            zIndex: 1E3
        },
        _create: function ()
        {
            this.originalTitle = this.element.attr("title");
            if (typeof this.originalTitle !== "string") this.originalTitle = "";
            this.options.title = this.options.title || this.originalTitle;
            var a = this,
                b = a.options,
                d = b.title || "&#160;",
                e = c.ui.dialog.getTitleId(a.element),
                g = (a.uiDialog = c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b.dialogClass).css(
                {
                    zIndex: b.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function (i)
                {
                    if (b.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === c.ui.keyCode.ESCAPE)
                    {
                        a.close(i);
                        i.preventDefault()
                    }
                }).attr(
                {
                    role: "dialog",
                    "aria-labelledby": e
                }).mousedown(function (i)
                {
                    a.moveToTop(false, i)
                });
            a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);
            var f = (a.uiDialogTitlebar = c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
                h = c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function ()
                {
                    h.addClass("ui-state-hover")
                }, function ()
                {
                    h.removeClass("ui-state-hover")
                }).focus(function ()
                {
                    h.addClass("ui-state-focus")
                }).blur(function ()
                {
                    h.removeClass("ui-state-focus")
                }).click(function (i)
                {
                    a.close(i);
                    return false
                }).appendTo(f);
            (a.uiDialogTitlebarCloseText = c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);
            c("<span></span>").addClass("ui-dialog-title").attr("id", e).html(d).prependTo(f);
            if (c.isFunction(b.beforeclose) && !c.isFunction(b.beforeClose)) b.beforeClose = b.beforeclose;
            f.find("*").add(f).disableSelection();
            b.draggable && c.fn.draggable && a._makeDraggable();
            b.resizable && c.fn.resizable && a._makeResizable();
            a._createButtons(b.buttons);
            a._isOpen = false;
            c.fn.bgiframe && g.bgiframe()
        },
        _init: function ()
        {
            this.options.autoOpen && this.open()
        },
        destroy: function ()
        {
            var a = this;
            a.overlay && a.overlay.destroy();
            a.uiDialog.hide();
            a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
            a.uiDialog.remove();
            a.originalTitle && a.element.attr("title", a.originalTitle);
            return a
        },
        widget: function ()
        {
            return this.uiDialog
        },
        close: function (a)
        {
            var b = this,
                d, e;
            if (false !== b._trigger("beforeClose", a))
            {
                b.overlay && b.overlay.destroy();
                b.uiDialog.unbind("keypress.ui-dialog");
                b._isOpen = false;
                if (b.options.hide) b.uiDialog.hide(b.options.hide, function ()
                {
                    b._trigger("close", a)
                });
                else
                {
                    b.uiDialog.hide();
                    b._trigger("close", a)
                }
                c.ui.dialog.overlay.resize();
                if (b.options.modal)
                {
                    d = 0;
                    c(".ui-dialog").each(function ()
                    {
                        if (this !== b.uiDialog[0])
                        {
                            e = c(this).css("z-index");
                            isNaN(e) || (d = Math.max(d, e))
                        }
                    });
                    c.ui.dialog.maxZ = d
                }
                return b
            }
        },
        isOpen: function ()
        {
            return this._isOpen
        },
        moveToTop: function (a, b)
        {
            var d = this,
                e = d.options;
            if (e.modal && !a || !e.stack && !e.modal) return d._trigger("focus", b);
            if (e.zIndex > c.ui.dialog.maxZ) c.ui.dialog.maxZ = e.zIndex;
            if (d.overlay)
            {
                c.ui.dialog.maxZ += 1;
                d.overlay.$el.css("z-index", c.ui.dialog.overlay.maxZ = c.ui.dialog.maxZ)
            }
            a = {
                scrollTop: d.element.scrollTop(),
                scrollLeft: d.element.scrollLeft()
            };
            c.ui.dialog.maxZ += 1;
            d.uiDialog.css("z-index", c.ui.dialog.maxZ);
            d.element.attr(a);
            d._trigger("focus", b);
            return d
        },
        open: function ()
        {
            if (!this._isOpen)
            {
                var a = this,
                    b = a.options,
                    d = a.uiDialog;
                a.overlay = b.modal ? new c.ui.dialog.overlay(a) : null;
                a._size();
                a._position(b.position);
                d.show(b.show);
                a.moveToTop(true);
                b.modal && d.bind("keypress.ui-dialog", function (e)
                {
                    if (e.keyCode === c.ui.keyCode.TAB)
                    {
                        var g = c(":tabbable", this),
                            f = g.filter(":first");
                        g = g.filter(":last");
                        if (e.target === g[0] && !e.shiftKey)
                        {
                            f.focus(1);
                            return false
                        }
                        else if (e.target === f[0] && e.shiftKey)
                        {
                            g.focus(1);
                            return false
                        }
                    }
                });
                c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();
                a._isOpen = true;
                a._trigger("open");
                return a
            }
        },
        _createButtons: function (a)
        {
            var b = this,
                d = false,
                e = c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                g = c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
            b.uiDialog.find(".ui-dialog-buttonpane").remove();
            typeof a === "object" && a !== null && c.each(a, function ()
            {
                return !(d = true)
            });
            if (d)
            {
                c.each(a, function (f, h)
                {
                    h = c.isFunction(h) ? {
                        click: h,
                        text: f
                    } : h;
                    var i = c('<button type="button"></button>').click(function ()
                    {
                        h.click.apply(b.element[0], arguments)
                    }).appendTo(g);
                    c.each(h, function (j, k)
                    {
                        if (j !== "click") j in o ? i[j](k) : i.attr(j, k)
                    });
                    c.fn.button && i.button()
                });
                e.appendTo(b.uiDialog)
            }
        },
        _makeDraggable: function ()
        {
            function a(f)
            {
                return {
                    position: f.position,
                    offset: f.offset
                }
            }
            var b = this,
                d = b.options,
                e = c(document),
                g;
            b.uiDialog.draggable(
            {
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (f, h)
                {
                    g = d.height === "auto" ? "auto" : c(this).height();
                    c(this).height(c(this).height()).addClass("ui-dialog-dragging");
                    b._trigger("dragStart", f, a(h))
                },
                drag: function (f, h)
                {
                    b._trigger("drag", f, a(h))
                },
                stop: function (f, h)
                {
                    d.position = [h.position.left - e.scrollLeft(), h.position.top - e.scrollTop()];
                    c(this).removeClass("ui-dialog-dragging").height(g);
                    b._trigger("dragStop", f, a(h));
                    c.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (a)
        {
            function b(f)
            {
                return {
                    originalPosition: f.originalPosition,
                    originalSize: f.originalSize,
                    position: f.position,
                    size: f.size
                }
            }
            a = a === l ? this.options.resizable : a;
            var d = this,
                e = d.options,
                g = d.uiDialog.css("position");
            a = typeof a === "string" ? a : "n,e,s,w,se,sw,ne,nw";
            d.uiDialog.resizable(
            {
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: d.element,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                minWidth: e.minWidth,
                minHeight: d._minHeight(),
                handles: a,
                start: function (f, h)
                {
                    c(this).addClass("ui-dialog-resizing");
                    d._trigger("resizeStart", f, b(h))
                },
                resize: function (f, h)
                {
                    d._trigger("resize", f, b(h))
                },
                stop: function (f, h)
                {
                    c(this).removeClass("ui-dialog-resizing");
                    e.height = c(this).height();
                    e.width = c(this).width();
                    d._trigger("resizeStop", f, b(h));
                    c.ui.dialog.overlay.resize()
                }
            }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function ()
        {
            var a = this.options;
            return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function (a)
        {
            var b = [],
                d = [0, 0],
                e;
            if (a)
            {
                if (typeof a === "string" || typeof a === "object" && "0" in a)
                {
                    b = a.split ? a.split(" ") : [a[0], a[1]];
                    if (b.length === 1) b[1] = b[0];
                    c.each(["left", "top"], function (g, f)
                    {
                        if (+b[g] === b[g])
                        {
                            d[g] = b[g];
                            b[g] = f
                        }
                    });
                    a = {
                        my: b.join(" "),
                        at: b.join(" "),
                        offset: d.join(" ")
                    }
                }
                a = c.extend(
                {}, c.ui.dialog.prototype.options.position, a)
            }
            else a = c.ui.dialog.prototype.options.position;
            (e = this.uiDialog.is(":visible")) || this.uiDialog.show();
            this.uiDialog.css(
            {
                top: 0,
                left: 0
            }).position(c.extend(
            {
                of: window
            }, a));
            e || this.uiDialog.hide()
        },
        _setOptions: function (a)
        {
            var b = this,
                d = {},
                e = false;
            c.each(a, function (g, f)
            {
                b._setOption(g, f);
                if (g in m) e = true;
                if (g in n) d[g] = f
            });
            e && this._size();
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", d)
        },
        _setOption: function (a, b)
        {
            var d = this,
                e = d.uiDialog;
            switch (a)
            {
            case "beforeclose":
                a = "beforeClose";
                break;
            case "buttons":
                d._createButtons(b);
                break;
            case "closeText":
                d.uiDialogTitlebarCloseText.text("" + b);
                break;
            case "dialogClass":
                e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b);
                break;
            case "disabled":
                b ? e.addClass("ui-dialog-disabled") : e.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                var g = e.is(":data(draggable)");
                g && !b && e.draggable("destroy");
                !g && b && d._makeDraggable();
                break;
            case "position":
                d._position(b);
                break;
            case "resizable":
                (g = e.is(":data(resizable)")) && !b && e.resizable("destroy");
                g && typeof b === "string" && e.resizable("option", "handles", b);
                !g && b !== false && d._makeResizable(b);
                break;
            case "title":
                c(".ui-dialog-title", d.uiDialogTitlebar).html("" + (b || "&#160;"));
                break
            }
            c.Widget.prototype._setOption.apply(d, arguments)
        },
        _size: function ()
        {
            var a = this.options,
                b, d, e = this.uiDialog.is(":visible");
            this.element.show().css(
            {
                width: "auto",
                minHeight: 0,
                height: 0
            });
            if (a.minWidth > a.width) a.width = a.minWidth;
            b = this.uiDialog.css(
            {
                height: "auto",
                width: a.width
            }).height();
            d = Math.max(0, a.minHeight - b);
            if (a.height === "auto") if (c.support.minHeight) this.element.css(
            {
                minHeight: d,
                height: "auto"
            });
            else
            {
                this.uiDialog.show();
                a = this.element.css("height", "auto").height();
                e || this.uiDialog.hide();
                this.element.height(Math.max(a, d))
            }
            else this.element.height(Math.max(a.height - b, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    });
    c.extend(c.ui.dialog, {
        version: "1.8.16",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (a)
        {
            a = a.attr("id");
            if (!a)
            {
                this.uuid += 1;
                a = this.uuid
            }
            return "ui-dialog-title-" + a
        },
        overlay: function (a)
        {
            this.$el = c.ui.dialog.overlay.create(a)
        }
    });
    c.extend(c.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a)
        {
            return a + ".dialog-overlay"
        }).join(" "),
        create: function (a)
        {
            if (this.instances.length === 0)
            {
                setTimeout(function ()
                {
                    c.ui.dialog.overlay.instances.length && c(document).bind(c.ui.dialog.overlay.events, function (d)
                    {
                        if (c(d.target).zIndex() < c.ui.dialog.overlay.maxZ) return false
                    })
                }, 1);
                c(document).bind("keydown.dialog-overlay", function (d)
                {
                    if (a.options.closeOnEscape && !d.isDefaultPrevented() && d.keyCode && d.keyCode === c.ui.keyCode.ESCAPE)
                    {
                        a.close(d);
                        d.preventDefault()
                    }
                });
                c(window).bind("resize.dialog-overlay", c.ui.dialog.overlay.resize)
            }
            var b = (this.oldInstances.pop() || c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css(
            {
                width: this.width(),
                height: this.height()
            });
            c.fn.bgiframe && b.bgiframe();
            this.instances.push(b);
            return b
        },
        destroy: function (a)
        {
            var b = c.inArray(a, this.instances);
            b != -1 && this.oldInstances.push(this.instances.splice(b, 1)[0]);
            this.instances.length === 0 && c([document, window]).unbind(".dialog-overlay");
            a.remove();
            var d = 0;
            c.each(this.instances, function ()
            {
                d = Math.max(d, this.css("z-index"))
            });
            this.maxZ = d
        },
        height: function ()
        {
            var a, b;
            if (c.browser.msie && c.browser.version < 7)
            {
                a = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                b = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                return a < b ? c(window).height() + "px" : a + "px"
            }
            else return c(document).height() + "px"
        },
        width: function ()
        {
            var a, b;
            if (c.browser.msie)
            {
                a = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                b = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                return a < b ? c(window).width() + "px" : a + "px"
            }
            else return c(document).width() + "px"
        },
        resize: function ()
        {
            var a = c([]);
            c.each(c.ui.dialog.overlay.instances, function ()
            {
                a = a.add(this)
            });
            a.css(
            {
                width: 0,
                height: 0
            }).css(
            {
                width: c.ui.dialog.overlay.width(),
                height: c.ui.dialog.overlay.height()
            })
        }
    });
    c.extend(c.ui.dialog.overlay.prototype, {
        destroy: function ()
        {
            c.ui.dialog.overlay.destroy(this.$el)
        }
    })
})(jQuery);
(function (d)
{
    d.widget("ui.slider", d.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function ()
        {
            var a = this,
                b = this.options,
                c = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                f = b.values && b.values.length || 1,
                e = [];
            this._mouseSliding = this._keySliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (b.disabled ? " ui-slider-disabled ui-disabled" : ""));
            this.range = d([]);
            if (b.range)
            {
                if (b.range === true)
                {
                    if (!b.values) b.values = [this._valueMin(), this._valueMin()];
                    if (b.values.length && b.values.length !== 2) b.values = [b.values[0], b.values[0]]
                }
                this.range = d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (b.range === "min" || b.range === "max" ? " ui-slider-range-" + b.range : ""))
            }
            for (var j = c.length; j < f; j += 1) e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = c.add(d(e.join("")).appendTo(a.element));
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function (g)
            {
                g.preventDefault()
            }).hover(function ()
            {
                b.disabled || d(this).addClass("ui-state-hover")
            }, function ()
            {
                d(this).removeClass("ui-state-hover")
            }).focus(function ()
            {
                if (b.disabled) d(this).blur();
                else
                {
                    d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                    d(this).addClass("ui-state-focus")
                }
            }).blur(function ()
            {
                d(this).removeClass("ui-state-focus")
            });
            this.handles.each(function (g)
            {
                d(this).data("index.ui-slider-handle", g)
            });
            this.handles.keydown(function (g)
            {
                var k = true,
                    l = d(this).data("index.ui-slider-handle"),
                    i, h, m;
                if (!a.options.disabled)
                {
                    switch (g.keyCode)
                    {
                    case d.ui.keyCode.HOME:
                    case d.ui.keyCode.END:
                    case d.ui.keyCode.PAGE_UP:
                    case d.ui.keyCode.PAGE_DOWN:
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.RIGHT:
                    case d.ui.keyCode.DOWN:
                    case d.ui.keyCode.LEFT:
                        k = false;
                        if (!a._keySliding)
                        {
                            a._keySliding = true;
                            d(this).addClass("ui-state-active");
                            i = a._start(g, l);
                            if (i === false) return
                        }
                        break
                    }
                    m = a.options.step;
                    i = a.options.values && a.options.values.length ? (h = a.values(l)) : (h = a.value());
                    switch (g.keyCode)
                    {
                    case d.ui.keyCode.HOME:
                        h = a._valueMin();
                        break;
                    case d.ui.keyCode.END:
                        h = a._valueMax();
                        break;
                    case d.ui.keyCode.PAGE_UP:
                        h = a._trimAlignValue(i + (a._valueMax() - a._valueMin()) / 5);
                        break;
                    case d.ui.keyCode.PAGE_DOWN:
                        h = a._trimAlignValue(i - (a._valueMax() - a._valueMin()) / 5);
                        break;
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.RIGHT:
                        if (i === a._valueMax()) return;
                        h = a._trimAlignValue(i + m);
                        break;
                    case d.ui.keyCode.DOWN:
                    case d.ui.keyCode.LEFT:
                        if (i === a._valueMin()) return;
                        h = a._trimAlignValue(i - m);
                        break
                    }
                    a._slide(g, l, h);
                    return k
                }
            }).keyup(function (g)
            {
                var k = d(this).data("index.ui-slider-handle");
                if (a._keySliding)
                {
                    a._keySliding = false;
                    a._stop(g, k);
                    a._change(g, k);
                    d(this).removeClass("ui-state-active")
                }
            });
            this._refreshValue();
            this._animateOff = false
        },
        destroy: function ()
        {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this
        },
        _mouseCapture: function (a)
        {
            var b = this.options,
                c, f, e, j, g;
            if (b.disabled) return false;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            c = this._normValueFromMouse(
            {
                x: a.pageX,
                y: a.pageY
            });
            f = this._valueMax() - this._valueMin() + 1;
            j = this;
            this.handles.each(function (k)
            {
                var l = Math.abs(c - j.values(k));
                if (f > l)
                {
                    f = l;
                    e = d(this);
                    g = k
                }
            });
            if (b.range === true && this.values(1) === b.min)
            {
                g += 1;
                e = d(this.handles[g])
            }
            if (this._start(a, g) === false) return false;
            this._mouseSliding = true;
            j._handleIndex = g;
            e.addClass("ui-state-active").focus();
            b = e.offset();
            this._clickOffset = !d(a.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: 0,
                top: 0
            } : {
                left: a.pageX - b.left - e.width() / 2,
                top: a.pageY - b.top - e.height() / 2 - (parseInt(e.css("borderTopWidth"), 10) || 0) - (parseInt(e.css("borderBottomWidth"), 10) || 0) + (parseInt(e.css("marginTop"), 10) || 0)
            };
            this.handles.hasClass("ui-state-hover") || this._slide(a, g, c);
            return this._animateOff = true
        },
        _mouseStart: function ()
        {
            return true
        },
        _mouseDrag: function (a)
        {
            var b = this._normValueFromMouse(
            {
                x: a.pageX,
                y: a.pageY
            });
            this._slide(a, this._handleIndex, b);
            return false
        },
        _mouseStop: function (a)
        {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(a, this._handleIndex);
            this._change(a, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = false
        },
        _detectOrientation: function ()
        {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (a)
        {
            var b;
            if (this.orientation === "horizontal")
            {
                b = this.elementSize.width;
                a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            }
            else
            {
                b = this.elementSize.height;
                a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            b = a / b;
            if (b > 1) b = 1;
            if (b < 0) b = 0;
            if (this.orientation === "vertical") b = 1 - b;
            a = this._valueMax() - this._valueMin();
            return this._trimAlignValue(this._valueMin() + b * a)
        },
        _start: function (a, b)
        {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            if (this.options.values && this.options.values.length)
            {
                c.value = this.values(b);
                c.values = this.values()
            }
            return this._trigger("start", a, c)
        },
        _slide: function (a, b, c)
        {
            var f;
            if (this.options.values && this.options.values.length)
            {
                f = this.values(b ? 0 : 1);
                if (this.options.values.length === 2 && this.options.range === true && (b === 0 && c > f || b === 1 && c < f)) c = f;
                if (c !== this.values(b))
                {
                    f = this.values();
                    f[b] = c;
                    a = this._trigger("slide", a, {
                        handle: this.handles[b],
                        value: c,
                        values: f
                    });
                    this.values(b ? 0 : 1);
                    a !== false && this.values(b, c, true)
                }
            }
            else if (c !== this.value())
            {
                a = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                });
                a !== false && this.value(c)
            }
        },
        _stop: function (a, b)
        {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            if (this.options.values && this.options.values.length)
            {
                c.value = this.values(b);
                c.values = this.values()
            }
            this._trigger("stop", a, c)
        },
        _change: function (a, b)
        {
            if (!this._keySliding && !this._mouseSliding)
            {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length)
                {
                    c.value = this.values(b);
                    c.values = this.values()
                }
                this._trigger("change", a, c)
            }
        },
        value: function (a)
        {
            if (arguments.length)
            {
                this.options.value = this._trimAlignValue(a);
                this._refreshValue();
                this._change(null, 0)
            }
            else return this._value()
        },
        values: function (a, b)
        {
            var c, f, e;
            if (arguments.length > 1)
            {
                this.options.values[a] = this._trimAlignValue(b);
                this._refreshValue();
                this._change(null, a)
            }
            else if (arguments.length) if (d.isArray(arguments[0]))
            {
                c = this.options.values;
                f = arguments[0];
                for (e = 0; e < c.length; e += 1)
                {
                    c[e] = this._trimAlignValue(f[e]);
                    this._change(null, e)
                }
                this._refreshValue()
            }
            else return this.options.values && this.options.values.length ? this._values(a) : this.value();
            else return this._values()
        },
        _setOption: function (a, b)
        {
            var c, f = 0;
            if (d.isArray(this.options.values)) f = this.options.values.length;
            d.Widget.prototype._setOption.apply(this, arguments);
            switch (a)
            {
            case "disabled":
                if (b)
                {
                    this.handles.filter(".ui-state-focus").blur();
                    this.handles.removeClass("ui-state-hover");
                    this.handles.propAttr("disabled", true);
                    this.element.addClass("ui-disabled")
                }
                else
                {
                    this.handles.propAttr("disabled", false);
                    this.element.removeClass("ui-disabled")
                }
                break;
            case "orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                break;
            case "value":
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;
            case "values":
                this._animateOff = true;
                this._refreshValue();
                for (c = 0; c < f; c += 1) this._change(null, c);
                this._animateOff = false;
                break
            }
        },
        _value: function ()
        {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function (a)
        {
            var b, c;
            if (arguments.length)
            {
                b = this.options.values[a];
                return b = this._trimAlignValue(b)
            }
            else
            {
                b = this.options.values.slice();
                for (c = 0; c < b.length; c += 1) b[c] = this._trimAlignValue(b[c]);
                return b
            }
        },
        _trimAlignValue: function (a)
        {
            if (a <= this._valueMin()) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1,
                c = (a - this._valueMin()) % b;
            a = a - c;
            if (Math.abs(c) * 2 >= b) a += c > 0 ? b : -b;
            return parseFloat(a.toFixed(5))
        },
        _valueMin: function ()
        {
            return this.options.min
        },
        _valueMax: function ()
        {
            return this.options.max
        },
        _refreshValue: function ()
        {
            var a = this.options.range,
                b = this.options,
                c = this,
                f = !this._animateOff ? b.animate : false,
                e, j = {},
                g, k, l, i;
            if (this.options.values && this.options.values.length) this.handles.each(function (h)
            {
                e = (c.values(h) - c._valueMin()) / (c._valueMax() - c._valueMin()) * 100;
                j[c.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
                d(this).stop(1, 1)[f ? "animate" : "css"](j, b.animate);
                if (c.options.range === true) if (c.orientation === "horizontal")
                {
                    if (h === 0) c.range.stop(1, 1)[f ? "animate" : "css"](
                    {
                        left: e + "%"
                    }, b.animate);
                    if (h === 1) c.range[f ? "animate" : "css"](
                    {
                        width: e - g + "%"
                    }, {
                        queue: false,
                        duration: b.animate
                    })
                }
                else
                {
                    if (h === 0) c.range.stop(1, 1)[f ? "animate" : "css"](
                    {
                        bottom: e + "%"
                    }, b.animate);
                    if (h === 1) c.range[f ? "animate" : "css"](
                    {
                        height: e - g + "%"
                    }, {
                        queue: false,
                        duration: b.animate
                    })
                }
                g = e
            });
            else
            {
                k = this.value();
                l = this._valueMin();
                i = this._valueMax();
                e = i !== l ? (k - l) / (i - l) * 100 : 0;
                j[c.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
                this.handle.stop(1, 1)[f ? "animate" : "css"](j, b.animate);
                if (a === "min" && this.orientation === "horizontal") this.range.stop(1, 1)[f ? "animate" : "css"](
                {
                    width: e + "%"
                }, b.animate);
                if (a === "max" && this.orientation === "horizontal") this.range[f ? "animate" : "css"](
                {
                    width: 100 - e + "%"
                }, {
                    queue: false,
                    duration: b.animate
                });
                if (a === "min" && this.orientation === "vertical") this.range.stop(1, 1)[f ? "animate" : "css"](
                {
                    height: e + "%"
                }, b.animate);
                if (a === "max" && this.orientation === "vertical") this.range[f ? "animate" : "css"](
                {
                    height: 100 - e + "%"
                }, {
                    queue: false,
                    duration: b.animate
                })
            }
        }
    });
    d.extend(d.ui.slider, {
        version: "1.8.16"
    })
})(jQuery);
(function (d, p)
{
    function u()
    {
        return ++v
    }
    function w()
    {
        return ++x
    }
    var v = 0,
        x = 0;
    d.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: false,
            cookie: null,
            collapsible: false,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function ()
        {
            this._tabify(true)
        },
        _setOption: function (b, e)
        {
            if (b == "selected") this.options.collapsible && e == this.options.selected || this.select(e);
            else
            {
                this.options[b] = e;
                this._tabify()
            }
        },
        _tabId: function (b)
        {
            return b.title && b.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + u()
        },
        _sanitizeSelector: function (b)
        {
            return b.replace(/:/g, "\\:")
        },
        _cookie: function ()
        {
            var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + w());
            return d.cookie.apply(null, [b].concat(d.makeArray(arguments)))
        },
        _ui: function (b, e)
        {
            return {
                tab: b,
                panel: e,
                index: this.anchors.index(b)
            }
        },
        _cleanup: function ()
        {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function ()
            {
                var b = d(this);
                b.html(b.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function (b)
        {
            function e(g, f)
            {
                g.css("display", "");
                !d.support.opacity && f.opacity && g[0].style.removeAttribute("filter")
            }
            var a = this,
                c = this.options,
                h = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0);
            this.lis = d(" > li:has(a[href])", this.list);
            this.anchors = this.lis.map(function ()
            {
                return d("a", this)[0]
            });
            this.panels = d([]);
            this.anchors.each(function (g, f)
            {
                var i = d(f).attr("href"),
                    l = i.split("#")[0],
                    q;
                if (l && (l === location.toString().split("#")[0] || (q = d("base")[0]) && l === q.href))
                {
                    i = f.hash;
                    f.href = i
                }
                if (h.test(i)) a.panels = a.panels.add(a.element.find(a._sanitizeSelector(i)));
                else if (i && i !== "#")
                {
                    d.data(f, "href.tabs", i);
                    d.data(f, "load.tabs", i.replace(/#.*$/, ""));
                    i = a._tabId(f);
                    f.href = "#" + i;
                    f = a.element.find("#" + i);
                    if (!f.length)
                    {
                        f = d(c.panelTemplate).attr("id", i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g - 1] || a.list);
                        f.data("destroy.tabs", true)
                    }
                    a.panels = a.panels.add(f)
                }
                else c.disabled.push(g)
            });
            if (b)
            {
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
                this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
                this.lis.addClass("ui-state-default ui-corner-top");
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
                if (c.selected === p)
                {
                    location.hash && this.anchors.each(function (g, f)
                    {
                        if (f.hash == location.hash)
                        {
                            c.selected = g;
                            return false
                        }
                    });
                    if (typeof c.selected !== "number" && c.cookie) c.selected = parseInt(a._cookie(), 10);
                    if (typeof c.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
                    c.selected = c.selected || (this.lis.length ? 0 : -1)
                }
                else if (c.selected === null) c.selected = -1;
                c.selected = c.selected >= 0 && this.anchors[c.selected] || c.selected < 0 ? c.selected : 0;
                c.disabled = d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"), function (g)
                {
                    return a.lis.index(g)
                }))).sort();
                d.inArray(c.selected, c.disabled) != -1 && c.disabled.splice(d.inArray(c.selected, c.disabled), 1);
                this.panels.addClass("ui-tabs-hide");
                this.lis.removeClass("ui-tabs-selected ui-state-active");
                if (c.selected >= 0 && this.anchors.length)
                {
                    a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");
                    this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");
                    a.element.queue("tabs", function ()
                    {
                        a._trigger("show", null, a._ui(a.anchors[c.selected], a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))
                    });
                    this.load(c.selected)
                }
                d(window).bind("unload", function ()
                {
                    a.lis.add(a.anchors).unbind(".tabs");
                    a.lis = a.anchors = a.panels = null
                })
            }
            else c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
            this.element[c.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible");
            c.cookie && this._cookie(c.selected, c.cookie);
            b = 0;
            for (var j; j = this.lis[b]; b++) d(j)[d.inArray(b, c.disabled) != -1 && !d(j).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            c.cache === false && this.anchors.removeData("cache.tabs");
            this.lis.add(this.anchors).unbind(".tabs");
            if (c.event !== "mouseover")
            {
                var k = function (g, f)
                {
                    f.is(":not(.ui-state-disabled)") && f.addClass("ui-state-" + g)
                },
                    n = function (g, f)
                    {
                        f.removeClass("ui-state-" + g)
                    };
                this.lis.bind("mouseover.tabs", function ()
                {
                    k("hover", d(this))
                });
                this.lis.bind("mouseout.tabs", function ()
                {
                    n("hover", d(this))
                });
                this.anchors.bind("focus.tabs", function ()
                {
                    k("focus", d(this).closest("li"))
                });
                this.anchors.bind("blur.tabs", function ()
                {
                    n("focus", d(this).closest("li"))
                })
            }
            var m, o;
            if (c.fx) if (d.isArray(c.fx))
            {
                m = c.fx[0];
                o = c.fx[1]
            }
            else m = o = c.fx;
            var r = o ?
            function (g, f)
            {
                d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
                f.hide().removeClass("ui-tabs-hide").animate(o, o.duration || "normal", function ()
                {
                    e(f, o);
                    a._trigger("show", null, a._ui(g, f[0]))
                })
            } : function (g, f)
            {
                d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
                f.removeClass("ui-tabs-hide");
                a._trigger("show", null, a._ui(g, f[0]))
            },
                s = m ?
                function (g, f)
                {
                    f.animate(m, m.duration || "normal", function ()
                    {
                        a.lis.removeClass("ui-tabs-selected ui-state-active");
                        f.addClass("ui-tabs-hide");
                        e(f, m);
                        a.element.dequeue("tabs")
                    })
                } : function (g, f)
                {
                    a.lis.removeClass("ui-tabs-selected ui-state-active");
                    f.addClass("ui-tabs-hide");
                    a.element.dequeue("tabs")
                };
            this.anchors.bind(c.event + ".tabs", function ()
            {
                var g = this,
                    f = d(g).closest("li"),
                    i = a.panels.filter(":not(.ui-tabs-hide)"),
                    l = a.element.find(a._sanitizeSelector(g.hash));
                if (f.hasClass("ui-tabs-selected") && !c.collapsible || f.hasClass("ui-state-disabled") || f.hasClass("ui-state-processing") || a.panels.filter(":animated").length || a._trigger("select", null, a._ui(this, l[0])) === false)
                {
                    this.blur();
                    return false
                }
                c.selected = a.anchors.index(this);
                a.abort();
                if (c.collapsible) if (f.hasClass("ui-tabs-selected"))
                {
                    c.selected = -1;
                    c.cookie && a._cookie(c.selected, c.cookie);
                    a.element.queue("tabs", function ()
                    {
                        s(g, i)
                    }).dequeue("tabs");
                    this.blur();
                    return false
                }
                else if (!i.length)
                {
                    c.cookie && a._cookie(c.selected, c.cookie);
                    a.element.queue("tabs", function ()
                    {
                        r(g, l)
                    });
                    a.load(a.anchors.index(this));
                    this.blur();
                    return false
                }
                c.cookie && a._cookie(c.selected, c.cookie);
                if (l.length)
                {
                    i.length && a.element.queue("tabs", function ()
                    {
                        s(g, i)
                    });
                    a.element.queue("tabs", function ()
                    {
                        r(g, l)
                    });
                    a.load(a.anchors.index(this))
                }
                else throw "jQuery UI Tabs: Mismatching fragment identifier.";
                d.browser.msie && this.blur()
            });
            this.anchors.bind("click.tabs", function ()
            {
                return false
            })
        },
        _getIndex: function (b)
        {
            if (typeof b == "string") b = this.anchors.index(this.anchors.filter("[href$=" + b + "]"));
            return b
        },
        destroy: function ()
        {
            var b = this.options;
            this.abort();
            this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
            this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
            this.anchors.each(function ()
            {
                var e = d.data(this, "href.tabs");
                if (e) this.href = e;
                var a = d(this).unbind(".tabs");
                d.each(["href", "load", "cache"], function (c, h)
                {
                    a.removeData(h + ".tabs")
                })
            });
            this.lis.unbind(".tabs").add(this.panels).each(function ()
            {
                d.data(this, "destroy.tabs") ? d(this).remove() : d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            });
            b.cookie && this._cookie(null, b.cookie);
            return this
        },
        add: function (b, e, a)
        {
            if (a === p) a = this.anchors.length;
            var c = this,
                h = this.options;
            e = d(h.tabTemplate.replace(/#\{href\}/g, b).replace(/#\{label\}/g, e));
            b = !b.indexOf("#") ? b.replace("#", "") : this._tabId(d("a", e)[0]);
            e.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
            var j = c.element.find("#" + b);
            j.length || (j = d(h.panelTemplate).attr("id", b).data("destroy.tabs", true));
            j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
            if (a >= this.lis.length)
            {
                e.appendTo(this.list);
                j.appendTo(this.list[0].parentNode)
            }
            else
            {
                e.insertBefore(this.lis[a]);
                j.insertBefore(this.panels[a])
            }
            h.disabled = d.map(h.disabled, function (k)
            {
                return k >= a ? ++k : k
            });
            this._tabify();
            if (this.anchors.length == 1)
            {
                h.selected = 0;
                e.addClass("ui-tabs-selected ui-state-active");
                j.removeClass("ui-tabs-hide");
                this.element.queue("tabs", function ()
                {
                    c._trigger("show", null, c._ui(c.anchors[0], c.panels[0]))
                });
                this.load(0)
            }
            this._trigger("add", null, this._ui(this.anchors[a], this.panels[a]));
            return this
        },
        remove: function (b)
        {
            b = this._getIndex(b);
            var e = this.options,
                a = this.lis.eq(b).remove(),
                c = this.panels.eq(b).remove();
            if (a.hasClass("ui-tabs-selected") && this.anchors.length > 1) this.select(b + (b + 1 < this.anchors.length ? 1 : -1));
            e.disabled = d.map(d.grep(e.disabled, function (h)
            {
                return h != b
            }), function (h)
            {
                return h >= b ? --h : h
            });
            this._tabify();
            this._trigger("remove", null, this._ui(a.find("a")[0], c[0]));
            return this
        },
        enable: function (b)
        {
            b = this._getIndex(b);
            var e = this.options;
            if (d.inArray(b, e.disabled) != -1)
            {
                this.lis.eq(b).removeClass("ui-state-disabled");
                e.disabled = d.grep(e.disabled, function (a)
                {
                    return a != b
                });
                this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b]));
                return this
            }
        },
        disable: function (b)
        {
            b = this._getIndex(b);
            var e = this.options;
            if (b != e.selected)
            {
                this.lis.eq(b).addClass("ui-state-disabled");
                e.disabled.push(b);
                e.disabled.sort();
                this._trigger("disable", null, this._ui(this.anchors[b], this.panels[b]))
            }
            return this
        },
        select: function (b)
        {
            b = this._getIndex(b);
            if (b == -1) if (this.options.collapsible && this.options.selected != -1) b = this.options.selected;
            else return this;
            this.anchors.eq(b).trigger(this.options.event + ".tabs");
            return this
        },
        load: function (b)
        {
            b = this._getIndex(b);
            var e = this,
                a = this.options,
                c = this.anchors.eq(b)[0],
                h = d.data(c, "load.tabs");
            this.abort();
            if (!h || this.element.queue("tabs").length !== 0 && d.data(c, "cache.tabs")) this.element.dequeue("tabs");
            else
            {
                this.lis.eq(b).addClass("ui-state-processing");
                if (a.spinner)
                {
                    var j = d("span", c);
                    j.data("label.tabs", j.html()).html(a.spinner)
                }
                this.xhr = d.ajax(d.extend(
                {}, a.ajaxOptions, {
                    url: h,
                    success: function (k, n)
                    {
                        e.element.find(e._sanitizeSelector(c.hash)).html(k);
                        e._cleanup();
                        a.cache && d.data(c, "cache.tabs", true);
                        e._trigger("load", null, e._ui(e.anchors[b], e.panels[b]));
                        try
                        {
                            a.ajaxOptions.success(k, n)
                        }
                        catch (m)
                        {}
                    },
                    error: function (k, n)
                    {
                        e._cleanup();
                        e._trigger("load", null, e._ui(e.anchors[b], e.panels[b]));
                        try
                        {
                            a.ajaxOptions.error(k, n, b, c)
                        }
                        catch (m)
                        {}
                    }
                }));
                e.element.dequeue("tabs");
                return this
            }
        },
        abort: function ()
        {
            this.element.queue([]);
            this.panels.stop(false, true);
            this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
            if (this.xhr)
            {
                this.xhr.abort();
                delete this.xhr
            }
            this._cleanup();
            return this
        },
        url: function (b, e)
        {
            this.anchors.eq(b).removeData("cache.tabs").data("load.tabs", e);
            return this
        },
        length: function ()
        {
            return this.anchors.length
        }
    });
    d.extend(d.ui.tabs, {
        version: "1.8.16"
    });
    d.extend(d.ui.tabs.prototype, {
        rotation: null,
        rotate: function (b, e)
        {
            var a = this,
                c = this.options,
                h = a._rotate || (a._rotate = function (j)
                {
                    clearTimeout(a.rotation);
                    a.rotation = setTimeout(function ()
                    {
                        var k = c.selected;
                        a.select(++k < a.anchors.length ? k : 0)
                    }, b);
                    j && j.stopPropagation()
                });
            e = a._unrotate || (a._unrotate = !e ?
            function (j)
            {
                j.clientX && a.rotate(null)
            } : function ()
            {
                t = c.selected;
                h()
            });
            if (b)
            {
                this.element.bind("tabsshow", h);
                this.anchors.bind(c.event + ".tabs", e);
                h()
            }
            else
            {
                clearTimeout(a.rotation);
                this.element.unbind("tabsshow", h);
                this.anchors.unbind(c.event + ".tabs", e);
                delete this._rotate;
                delete this._unrotate
            }
            return this
        }
    })
})(jQuery);
(function (b, d)
{
    b.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function ()
        {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr(
            {
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            });
            this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this.oldValue = this._value();
            this._refreshValue()
        },
        destroy: function ()
        {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove();
            b.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function (a)
        {
            if (a === d) return this._value();
            this._setOption("value", a);
            return this
        },
        _setOption: function (a, c)
        {
            if (a === "value")
            {
                this.options.value = c;
                this._refreshValue();
                this._value() === this.options.max && this._trigger("complete")
            }
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function ()
        {
            var a = this.options.value;
            if (typeof a !== "number") a = 0;
            return Math.min(this.options.max, Math.max(this.min, a))
        },
        _percentage: function ()
        {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function ()
        {
            var a = this.value(),
                c = this._percentage();
            if (this.oldValue !== a)
            {
                this.oldValue = a;
                this._trigger("change")
            }
            this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%");
            this.element.attr("aria-valuenow", a)
        }
    });
    b.extend(b.ui.progressbar, {
        version: "1.8.16"
    })
})(jQuery);
(function (f)
{
    function p(a, b, c)
    {
        var h = c.relative ? a.position().top : a.offset().top,
            d = c.relative ? a.position().left : a.offset().left,
            i = c.position[0];
        h -= b.outerHeight() - c.offset[0];
        d += a.outerWidth() + c.offset[1];
        if (/iPad/i.test(navigator.userAgent)) h -= f(window).scrollTop();
        var j = b.outerHeight() + a.outerHeight();
        if (i == "center") h += j / 2;
        if (i == "bottom") h += j;
        i = c.position[1];
        a = b.outerWidth() + a.outerWidth();
        if (i == "center") d -= a / 2;
        if (i == "left") d -= a;
        return {
            top: h,
            left: d
        }
    }
    function u(a, b)
    {
        var c = this,
            h = a.add(c),
            d, i = 0,
            j = 0,
            m = a.attr("title"),
            q = a.attr("data-tooltip"),
            r = o[b.effect],
            l, s = a.is(":input"),
            v = s && a.is(":checkbox, :radio, select, :button, :submit"),
            t = a.attr("type"),
            k = b.events[t] || b.events[s ? v ? "widget" : "input" : "def"];
        if (!r) throw 'Nonexistent effect "' + b.effect + '"';
        k = k.split(/,\s*/);
        if (k.length != 2) throw "Tooltip: bad events configuration for " + t;
        a.bind(k[0], function (e)
        {
            clearTimeout(i);
            if (b.predelay) j = setTimeout(function ()
            {
                c.show(e)
            }, b.predelay);
            else c.show(e)
        }).bind(k[1], function (e)
        {
            clearTimeout(j);
            if (b.delay) i = setTimeout(function ()
            {
                c.hide(e)
            }, b.delay);
            else c.hide(e)
        });
        if (m && b.cancelDefault)
        {
            a.removeAttr("title");
            a.data("title", m)
        }
        f.extend(c, {
            show: function (e)
            {
                if (!d)
                {
                    if (q) d = f(q);
                    else if (b.tip) d = f(b.tip).eq(0);
                    else if (m) d = f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);
                    else
                    {
                        d = a.next();
                        d.length || (d = a.parent().next())
                    }
                    if (!d.length) throw "Cannot find tooltip for " + a
                }
                if (c.isShown()) return c;
                d.stop(true, true);
                var g = p(a, d, b);
                b.tip && d.html(a.data("title"));
                e = e || f.Event();
                e.type = "onBeforeShow";
                h.trigger(e, [g]);
                if (e.isDefaultPrevented()) return c;
                g = p(a, d, b);
                d.css(
                {
                    position: "absolute",
                    top: g.top,
                    left: g.left
                });
                l = true;
                r[0].call(c, function ()
                {
                    e.type = "onShow";
                    l = "full";
                    h.trigger(e)
                });
                g = b.events.tooltip.split(/,\s*/);
                if (!d.data("__set"))
                {
                    d.bind(g[0], function ()
                    {
                        clearTimeout(i);
                        clearTimeout(j)
                    });
                    g[1] && !a.is("input:not(:checkbox, :radio), textarea") && d.bind(g[1], function (n)
                    {
                        n.relatedTarget != a[0] && a.trigger(k[1].split(" ")[0])
                    });
                    d.data("__set", true)
                }
                return c
            },
            hide: function (e)
            {
                if (!d || !c.isShown()) return c;
                e = e || f.Event();
                e.type = "onBeforeHide";
                h.trigger(e);
                if (!e.isDefaultPrevented())
                {
                    l = false;
                    o[b.effect][1].call(c, function ()
                    {
                        e.type = "onHide";
                        h.trigger(e)
                    });
                    return c
                }
            },
            isShown: function (e)
            {
                return e ? l == "full" : l
            },
            getConf: function ()
            {
                return b
            },
            getTip: function ()
            {
                return d
            },
            getTrigger: function ()
            {
                return a
            }
        });
        f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function (e, g)
        {
            f.isFunction(b[g]) && f(c).bind(g, b[g]);
            c[g] = function (n)
            {
                n && f(c).bind(g, n);
                return c
            }
        })
    }
    f.tools = f.tools || {
        version: "1.2.5"
    };
    f.tools.tooltip = {
        conf: {
            effect: "toggle",
            fadeOutSpeed: "fast",
            predelay: 0,
            delay: 30,
            opacity: 1,
            tip: 0,
            position: ["top", "center"],
            offset: [0, 0],
            relative: false,
            cancelDefault: true,
            events: {
                def: "mouseenter,mouseleave",
                input: "focus,blur",
                widget: "focus mouseenter,blur mouseleave",
                tooltip: "mouseenter,mouseleave"
            },
            layout: "<div/>",
            tipClass: "tooltip"
        },
        addEffect: function (a, b, c)
        {
            o[a] = [b, c]
        }
    };
    var o = {
        toggle: [function (a)
        {
            var b = this.getConf(),
                c = this.getTip();
            b = b.opacity;
            b < 1 && c.css(
            {
                opacity: b
            });
            c.show();
            a.call()}, function (a)
        {
            this.getTip().hide();
            a.call()}],
        fade: [function (a)
        {
            var b = this.getConf();
            this.getTip().fadeTo(b.fadeInSpeed, b.opacity, a)}, function (a)
        {
            this.getTip().fadeOut(this.getConf().fadeOutSpeed, a)}]
    };
    f.fn.tooltip = function (a)
    {
        var b = this.data("tooltip");
        if (b) return b;
        a = f.extend(true, {}, f.tools.tooltip.conf, a);
        if (typeof a.position == "string") a.position = a.position.split(/,?\s/);
        this.each(function ()
        {
            b = new u(f(this), a);
            f(this).data("tooltip", b)
        });
        return a.api ? b : this
    }
})(jQuery);
(function (d)
{
    var i = d.tools.tooltip;
    d.extend(i.conf, {
        direction: "up",
        bounce: false,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: !d.browser.msie
    });
    var e = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    i.addEffect("slide", function (g)
    {
        var a = this.getConf(),
            f = this.getTip(),
            b = a.slideFade ? {
                opacity: a.opacity
            } : {},
            c = e[a.direction] || e.up;
        b[c[1]] = c[0] + "=" + a.slideOffset;
        a.slideFade && f.css(
        {
            opacity: 0
        });
        f.show().animate(b, a.slideInSpeed, g)
    }, function (g)
    {
        var a = this.getConf(),
            f = a.slideOffset,
            b = a.slideFade ? {
                opacity: 0
            } : {},
            c = e[a.direction] || e.up,
            h = "" + c[0];
        if (a.bounce) h = h == "+" ? "-" : "+";
        b[c[1]] = h + "=" + f;
        this.getTip().animate(b, a.slideOutSpeed, function ()
        {
            d(this).hide();
            g.call()
        })
    })
})(jQuery);
(function (g)
{
    function j(a)
    {
        var c = g(window),
            d = c.width() + c.scrollLeft(),
            h = c.height() + c.scrollTop();
        return [a.offset().top <= c.scrollTop(), d <= a.offset().left + a.width(), h <= a.offset().top + a.height(), c.scrollLeft() >= a.offset().left]
    }
    function k(a)
    {
        for (var c = a.length; c--;) if (a[c]) return false;
        return true
    }
    var i = g.tools.tooltip;
    i.dynamic = {
        conf: {
            classNames: "top right bottom left"
        }
    };
    g.fn.dynamic = function (a)
    {
        if (typeof a == "number") a = {
            speed: a
        };
        a = g.extend(
        {}, i.dynamic.conf, a);
        var c = a.classNames.split(/\s/),
            d;
        this.each(function ()
        {
            var h = g(this).tooltip().onBeforeShow(function (e, f)
            {
                e = this.getTip();
                var b = this.getConf();
                d || (d = [b.position[0], b.position[1], b.offset[0], b.offset[1], g.extend(
                {}, b)]);
                g.extend(b, d[4]);
                b.position = [d[0], d[1]];
                b.offset = [d[2], d[3]];
                e.css(
                {
                    visibility: "hidden",
                    position: "absolute",
                    top: f.top,
                    left: f.left
                }).show();
                f = j(e);
                if (!k(f))
                {
                    if (f[2])
                    {
                        g.extend(b, a.top);
                        b.position[0] = "top";
                        e.addClass(c[0])
                    }
                    if (f[3])
                    {
                        g.extend(b, a.right);
                        b.position[1] = "right";
                        e.addClass(c[1])
                    }
                    if (f[0])
                    {
                        g.extend(b, a.bottom);
                        b.position[0] = "bottom";
                        e.addClass(c[2])
                    }
                    if (f[1])
                    {
                        g.extend(b, a.left);
                        b.position[1] = "left";
                        e.addClass(c[3])
                    }
                    if (f[0] || f[2]) b.offset[0] *= -1;
                    if (f[1] || f[3]) b.offset[1] *= -1
                }
                e.css(
                {
                    visibility: "visible"
                }).hide()
            });
            h.onBeforeShow(function ()
            {
                var e = this.getConf();
                this.getTip();
                setTimeout(function ()
                {
                    e.position = [d[0], d[1]];
                    e.offset = [d[2], d[3]]
                }, 0)
            });
            h.onHide(function ()
            {
                var e = this.getTip();
                e.removeClass(a.classNames)
            });
            ret = h
        });
        return a.api ? ret : this
    }
})(jQuery);
jQuery.cookie = function (key, value, options)
{
    if (arguments.length > 1 && String(value) !== "[object Object]")
    {
        options = jQuery.extend(
        {}, options);
        if (value === null || value === undefined)
        {
            options.expires = -1
        }
        if (typeof options.expires === 'number')
        {
            var days = options.expires,
                t = options.expires = new Date();
            t.setDate(t.getDate() + days)
        }
        value = String(value);
        return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : cookie_encode(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
    }
    options = value || {};
    var result, decode = options.raw ?
    function (s)
    {
        return s
    } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null
};

function cookie_encode(string)
{
    var decoded = encodeURIComponent(string);
    var ns = decoded.replace(/(%7B|%7D|%3A|%22|%23|%5B|%5D)/g, function (charater)
    {
        return decodeURIComponent(charater)
    });
    return ns
}(function ($)
{
    var calcFloat = {
        get: function (num)
        {
            var num = num.toString();
            if (num.indexOf('.') == -1) return [0, eval(num)];
            var nn = num.split('.');
            var po = nn[1].length;
            var st = nn.join('');
            var sign = '';
            if (st.charAt(0) == '-')
            {
                st = st.substr(1);
                sign = '-'
            }
            for (var i = 0; i < st.length; ++i) if (st.charAt(0) == '0') st = st.substr(1, st.length);
            st = sign + st;
            return [po, eval(st)]
        },
        getInt: function (num, figure)
        {
            var d = Math.pow(10, figure);
            var n = this.get(num);
            var v1 = eval('num * d');
            var v2 = eval('n[1] * d');
            if (this.get(v1)[1] == v2) return v1;
            return (n[0] == 0 ? v1 : eval(v2 + '/Math.pow(10, n[0])'))
        },
        sum: function (v1, v2)
        {
            var n1 = this.get(v1);
            var n2 = this.get(v2);
            var figure = (n1[0] > n2[0] ? n1[0] : n2[0]);
            v1 = this.getInt(v1, figure);
            v2 = this.getInt(v2, figure);
            return eval('v1 + v2') / Math.pow(10, figure)
        }
    };
    $.extend(
    {
        spin: {
            imageBasePath: '/img/spin/',
            spinBtnImage: 'spin-button.png',
            spinUpImage: 'spin-up.png',
            spinDownImage: 'spin-down.png',
            interval: 1,
            max: null,
            min: null,
            timeInterval: 500,
            timeBlink: 200,
            btnClass: null,
            btnCss: {
                cursor: 'pointer',
                padding: 0,
                margin: 0,
                verticalAlign: 'middle'
            },
            txtCss: {
                marginRight: 0,
                paddingRight: 0
            },
            lock: false,
            decimal: null,
            beforeChange: null,
            changed: null,
            buttonUp: null,
            buttonDown: null
        }
    });
    $.fn.extend(
    {
        spin: function (o)
        {
            return this.each(function ()
            {
                o = o || {};
                var opt = {};
                $.each($.spin, function (k, v)
                {
                    opt[k] = (typeof o[k] != 'undefined' ? o[k] : v)
                });
                var txt = $(this);
                var spinBtnImage = opt.imageBasePath + opt.spinBtnImage;
                var btnSpin = new Image();
                btnSpin.src = spinBtnImage;
                var spinUpImage = opt.imageBasePath + opt.spinUpImage;
                var btnSpinUp = new Image();
                btnSpinUp.src = spinUpImage;
                var spinDownImage = opt.imageBasePath + opt.spinDownImage;
                var btnSpinDown = new Image();
                btnSpinDown.src = spinDownImage;
                var btn = $(document.createElement('img'));
                btn.attr('src', spinBtnImage);
                if (opt.btnClass) btn.addClass(opt.btnClass);
                if (opt.btnCss) btn.css(opt.btnCss);
                if (opt.txtCss) txt.css(opt.txtCss);
                txt.after(btn);
                if (opt.lock)
                {
                    txt.focus(function ()
                    {
                        txt.blur()
                    })
                }
                function spin(vector)
                {
                    var val = txt.val();
                    var org_val = val;
                    if (opt.decimal) val = val.replace(opt.decimal, '.');
                    if (!isNaN(val))
                    {
                        val = calcFloat.sum(val, vector * opt.interval);
                        if (opt.min !== null && val < opt.min) val = opt.min;
                        if (opt.max !== null && val > opt.max) val = opt.max;
                        if (val != txt.val())
                        {
                            if (opt.decimal) val = val.toString().replace('.', opt.decimal);
                            var ret = ($.isFunction(opt.beforeChange) ? opt.beforeChange.apply(txt, [val, org_val]) : true);
                            if (ret !== false)
                            {
                                txt.val(val);
                                if ($.isFunction(opt.changed)) opt.changed.apply(txt, [val]);
                                txt.change();
                                src = (vector > 0 ? spinUpImage : spinDownImage);
                                btn.attr('src', src);
                                if (opt.timeBlink < opt.timeInterval) setTimeout(function ()
                                {
                                    btn.attr('src', spinBtnImage)
                                }, opt.timeBlink)
                            }
                        }
                    }
                    if (vector > 0)
                    {
                        if ($.isFunction(opt.buttonUp)) opt.buttonUp.apply(txt, [val])
                    }
                    else
                    {
                        if ($.isFunction(opt.buttonDown)) opt.buttonDown.apply(txt, [val])
                    }
                }
                btn.mousedown(function (e)
                {
                    var pos = e.pageY - btn.offset().top;
                    var vector = (btn.height() / 2 > pos ? 1 : -1);
                    (function ()
                    {
                        spin(vector);
                        var tk = setTimeout(arguments.callee, opt.timeInterval);
                        $(document).one('mouseup', function ()
                        {
                            clearTimeout(tk);
                            btn.attr('src', spinBtnImage)
                        })
                    })();
                    return false
                })
            })
        }
    })
})(jQuery);
(function ($)
{
    var pasteEventName = ($.browser.msie ? 'paste' : 'input') + ".mask";
    var iPhone = (window.orientation != undefined);
    $.mask = {
        definitions: {
            '9': "[0-9]",
            'a': "[A-Za-z]",
            '*': "[A-Za-z0-9]"
        }
    };
    $.fn.extend(
    {
        caret: function (begin, end)
        {
            if (this.length == 0) return;
            if (typeof begin == 'number')
            {
                end = (typeof end == 'number') ? end : begin;
                return this.each(function ()
                {
                    if (this.setSelectionRange)
                    {
                        this.focus();
                        this.setSelectionRange(begin, end)
                    }
                    else if (this.createTextRange)
                    {
                        var range = this.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', begin);
                        range.select()
                    }
                })
            }
            else
            {
                if (this[0].setSelectionRange)
                {
                    begin = this[0].selectionStart;
                    end = this[0].selectionEnd
                }
                else if (document.selection && document.selection.createRange)
                {
                    var range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart('character', -100000);
                    end = begin + range.text.length
                }
                return {
                    begin: begin,
                    end: end
                }
            }
        },
        unmask: function ()
        {
            return this.trigger("unmask")
        },
        mask: function (mask, settings)
        {
            if (!mask && this.length > 0)
            {
                var input = $(this[0]);
                var tests = input.data("tests");
                return $.map(input.data("buffer"), function (c, i)
                {
                    return tests[i] ? c : null
                }).join('')
            }
            settings = $.extend(
            {
                placeholder: "_",
                completed: null
            }, settings);
            var defs = $.mask.definitions;
            var tests = [];
            var partialPosition = mask.length;
            var firstNonMaskPos = null;
            var len = mask.length;
            $.each(mask.split(""), function (i, c)
            {
                if (c == '?')
                {
                    len--;
                    partialPosition = i
                }
                else if (defs[c])
                {
                    tests.push(new RegExp(defs[c]));
                    if (firstNonMaskPos == null) firstNonMaskPos = tests.length - 1
                }
                else
                {
                    tests.push(null)
                }
            });
            return this.each(function ()
            {
                var input = $(this);
                var buffer = $.map(mask.split(""), function (c, i)
                {
                    if (c != '?') return defs[c] ? settings.placeholder : c
                });
                var ignore = false;
                var focusText = input.val();
                input.data("buffer", buffer).data("tests", tests);

                function seekNext(pos)
                {
                    while (++pos <= len && !tests[pos]);
                    return pos
                };

                function shiftL(pos)
                {
                    while (!tests[pos] && --pos >= 0);
                    for (var i = pos; i < len; i++)
                    {
                        if (tests[i])
                        {
                            buffer[i] = settings.placeholder;
                            var j = seekNext(i);
                            if (j < len && tests[i].test(buffer[j]))
                            {
                                buffer[i] = buffer[j]
                            }
                            else break
                        }
                    }
                    writeBuffer();
                    input.caret(Math.max(firstNonMaskPos, pos))
                };

                function shiftR(pos)
                {
                    for (var i = pos, c = settings.placeholder; i < len; i++)
                    {
                        if (tests[i])
                        {
                            var j = seekNext(i);
                            var t = buffer[i];
                            buffer[i] = c;
                            if (j < len && tests[j].test(t)) c = t;
                            else break
                        }
                    }
                };

                function keydownEvent(e)
                {
                    var pos = $(this).caret();
                    var k = e.keyCode;
                    ignore = (k < 16 || (k > 16 && k < 32) || (k > 32 && k < 41));
                    if ((pos.begin - pos.end) != 0 && (!ignore || k == 8 || k == 46)) clearBuffer(pos.begin, pos.end);
                    if (k == 8 || k == 46 || (iPhone && k == 127))
                    {
                        shiftL(pos.begin + (k == 46 ? 0 : -1));
                        return false
                    }
                    else if (k == 27)
                    {
                        input.val(focusText);
                        input.caret(0, checkVal());
                        return false
                    }
                };

                function keypressEvent(e)
                {
                    if (ignore)
                    {
                        ignore = false;
                        return (e.keyCode == 8) ? false : null
                    }
                    e = e || window.event;
                    var k = e.charCode || e.keyCode || e.which;
                    var pos = $(this).caret();
                    if (e.ctrlKey || e.altKey || e.metaKey)
                    {
                        return true
                    }
                    else if ((k >= 32 && k <= 125) || k > 186)
                    {
                        var p = seekNext(pos.begin - 1);
                        if (p < len)
                        {
                            var c = String.fromCharCode(k);
                            if (tests[p].test(c))
                            {
                                shiftR(p);
                                buffer[p] = c;
                                writeBuffer();
                                var next = seekNext(p);
                                $(this).caret(next);
                                if (settings.completed && next == len) settings.completed.call(input)
                            }
                        }
                    }
                    return false
                };

                function clearBuffer(start, end)
                {
                    for (var i = start; i < end && i < len; i++)
                    {
                        if (tests[i]) buffer[i] = settings.placeholder
                    }
                };

                function writeBuffer()
                {
                    return input.val(buffer.join('')).val()
                };

                function checkVal(allow)
                {
                    var test = input.val();
                    var lastMatch = -1;
                    for (var i = 0, pos = 0; i < len; i++)
                    {
                        if (tests[i])
                        {
                            buffer[i] = settings.placeholder;
                            while (pos++ < test.length)
                            {
                                var c = test.charAt(pos - 1);
                                if (tests[i].test(c))
                                {
                                    buffer[i] = c;
                                    lastMatch = i;
                                    break
                                }
                            }
                            if (pos > test.length) break
                        }
                        else if (buffer[i] == test[pos] && i != partialPosition)
                        {
                            pos++;
                            lastMatch = i
                        }
                    }
                    if (!allow && lastMatch + 1 < partialPosition)
                    {
                        input.val("");
                        clearBuffer(0, len)
                    }
                    else if (allow || lastMatch + 1 >= partialPosition)
                    {
                        writeBuffer();
                        if (!allow) input.val(input.val().substring(0, lastMatch + 1))
                    }
                    return (partialPosition ? i : firstNonMaskPos)
                };
                if (!input.attr("readonly")) input.one("unmask", function ()
                {
                    input.unbind(".mask").removeData("buffer").removeData("tests")
                }).bind("focus.mask", function ()
                {
                    focusText = input.val();
                    var pos = checkVal();
                    writeBuffer();
                    setTimeout(function ()
                    {
                        if (pos == mask.length) input.caret(0, pos);
                        else input.caret(pos)
                    }, 0)
                }).bind("blur.mask", function ()
                {
                    checkVal();
                    if (input.val() != focusText) input.change()
                }).bind("keydown.mask", keydownEvent).bind("keypress.mask", keypressEvent).bind(pasteEventName, function ()
                {
                    setTimeout(function ()
                    {
                        input.caret(checkVal(true))
                    }, 0)
                });
                checkVal()
            })
        }
    })
})(jQuery);
(function ($)
{
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
    $.toJSON = typeof JSON === 'object' && JSON.stringify ? JSON.stringify : function (o)
    {
        if (o === null)
        {
            return 'null'
        }
        var type = typeof o;
        if (type === 'undefined')
        {
            return undefined
        }
        if (type === 'number' || type === 'boolean')
        {
            return '' + o
        }
        if (type === 'string')
        {
            return $.quoteString(o)
        }
        if (type === 'object')
        {
            if (typeof o.toJSON === 'function')
            {
                return $.toJSON(o.toJSON())
            }
            if (o.constructor === Date)
            {
                var month = o.getUTCMonth() + 1,
                    day = o.getUTCDate(),
                    year = o.getUTCFullYear(),
                    hours = o.getUTCHours(),
                    minutes = o.getUTCMinutes(),
                    seconds = o.getUTCSeconds(),
                    milli = o.getUTCMilliseconds();
                if (month < 10)
                {
                    month = '0' + month
                }
                if (day < 10)
                {
                    day = '0' + day
                }
                if (hours < 10)
                {
                    hours = '0' + hours
                }
                if (minutes < 10)
                {
                    minutes = '0' + minutes
                }
                if (seconds < 10)
                {
                    seconds = '0' + seconds
                }
                if (milli < 100)
                {
                    milli = '0' + milli
                }
                if (milli < 10)
                {
                    milli = '0' + milli
                }
                return '"' + year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milli + 'Z"'
            }
            if (o.constructor === Array)
            {
                var ret = [];
                for (var i = 0; i < o.length; i++)
                {
                    ret.push($.toJSON(o[i]) || 'null')
                }
                return '[' + ret.join(',') + ']'
            }
            var name, val, pairs = [];
            for (var k in o)
            {
                type = typeof k;
                if (type === 'number')
                {
                    name = '"' + k + '"'
                }
                else if (type === 'string')
                {
                    name = $.quoteString(k)
                }
                else
                {
                    continue
                }
                type = typeof o[k];
                if (type === 'function' || type === 'undefined')
                {
                    continue
                }
                val = $.toJSON(o[k]);
                pairs.push(name + ':' + val)
            }
            return '{' + pairs.join(',') + '}'
        }
    };
    $.evalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (src)
    {
        return eval('(' + src + ')')
    };
    $.secureEvalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (src)
    {
        var filtered = src.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        if (/^[\],:{}\s]*$/.test(filtered))
        {
            return eval('(' + src + ')')
        }
        else
        {
            throw new SyntaxError('Error parsing JSON, source is not valid.')
        }
    };
    $.quoteString = function (string)
    {
        if (string.match(escapeable))
        {
            return '"' + string.replace(escapeable, function (a)
            {
                var c = meta[a];
                if (typeof c === 'string')
                {
                    return c
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
            }) + '"'
        }
        return '"' + string + '"'
    }
})(jQuery);
(function ($)
{
    if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery))
    {
        alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
        return
    }
    $.fn._fadeIn = $.fn.fadeIn;
    var noOp = function ()
    {};
    var mode = document.documentMode || 0;
    var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
    var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;
    $.blockUI = function (opts)
    {
        install(window, opts)
    };
    $.unblockUI = function (opts)
    {
        remove(window, opts)
    };
    $.growlUI = function (title, message, timeout, onClose)
    {
        var $m = $('<div class="growlUI"></div>');
        if (title) $m.append('<h1>' + title + '</h1>');
        if (message) $m.append('<h2>' + message + '</h2>');
        if (timeout == undefined) timeout = 3000;
        $.blockUI(
        {
            message: $m,
            fadeIn: 700,
            fadeOut: 1000,
            centerY: false,
            timeout: timeout,
            showOverlay: false,
            onUnblock: onClose,
            css: $.blockUI.defaults.growlCSS
        })
    };
    $.fn.block = function (opts)
    {
        return this.unblock(
        {
            fadeOut: 0
        }).each(function ()
        {
            if ($.css(this, 'position') == 'static') this.style.position = 'relative';
            if ($.browser.msie) this.style.zoom = 1;
            install(this, opts)
        })
    };
    $.fn.unblock = function (opts)
    {
        return this.each(function ()
        {
            remove(this, opts)
        })
    };
    $.blockUI.version = 2.39;
    $.blockUI.defaults = {
        message: '<h1>Please wait...</h1>',
        title: null,
        draggable: true,
        theme: false,
        css: {
            padding: 0,
            margin: 0,
            width: '30%',
            top: '40%',
            left: '35%',
            textAlign: 'center',
            color: '#000',
            border: '3px solid #aaa',
            backgroundColor: '#fff',
            cursor: 'wait'
        },
        themedCSS: {
            width: '30%',
            top: '40%',
            left: '35%'
        },
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.6,
            cursor: 'wait'
        },
        growlCSS: {
            width: '350px',
            top: '10px',
            left: '',
            right: '10px',
            border: 'none',
            padding: '5px',
            opacity: 0.6,
            cursor: 'default',
            color: '#fff',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            'border-radius': '10px'
        },
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',
        forceIframe: false,
        baseZ: 1000,
        centerX: true,
        centerY: true,
        allowBodyStretch: true,
        bindEvents: true,
        constrainTabKey: true,
        fadeIn: 200,
        fadeOut: 400,
        timeout: 0,
        showOverlay: true,
        focusInput: true,
        applyPlatformOpacityRules: true,
        onBlock: null,
        onUnblock: null,
        quirksmodeOffsetHack: 4,
        blockMsgClass: 'blockMsg'
    };
    var pageBlock = null;
    var pageBlockEls = [];

    function install(el, opts)
    {
        var full = (el == window);
        var msg = opts && opts.message !== undefined ? opts.message : undefined;
        opts = $.extend(
        {}, $.blockUI.defaults, opts || {});
        opts.overlayCSS = $.extend(
        {}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
        var css = $.extend(
        {}, $.blockUI.defaults.css, opts.css || {});
        var themedCSS = $.extend(
        {}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
        msg = msg === undefined ? opts.message : msg;
        if (full && pageBlock) remove(window, {
            fadeOut: 0
        });
        if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery))
        {
            var node = msg.jquery ? msg[0] : msg;
            var data = {};
            $(el).data('blockUI.history', data);
            data.el = node;
            data.parent = node.parentNode;
            data.display = node.style.display;
            data.position = node.style.position;
            if (data.parent) data.parent.removeChild(node)
        }
        $(el).data('blockUI.onUnblock', opts.onUnblock);
        var z = opts.baseZ;
        var lyr1 = ($.browser.msie || opts.forceIframe) ? $('<iframe class="blockUI" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + opts.iframeSrc + '"></iframe>') : $('<div class="blockUI" style="display:none"></div>');
        var lyr2 = opts.theme ? $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + (z++) + ';display:none"></div>') : $('<div class="blockUI blockOverlay" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
        var lyr3, s;
        if (opts.theme && full)
        {
            s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:fixed">' + '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || '&nbsp;') + '</div>' + '<div class="ui-widget-content ui-dialog-content"></div>' + '</div>'
        }
        else if (opts.theme)
        {
            s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:absolute">' + '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || '&nbsp;') + '</div>' + '<div class="ui-widget-content ui-dialog-content"></div>' + '</div>'
        }
        else if (full)
        {
            s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:' + (z + 10) + ';display:none;position:fixed"></div>'
        }
        else
        {
            s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:' + (z + 10) + ';display:none;position:absolute"></div>'
        }
        lyr3 = $(s);
        if (msg)
        {
            if (opts.theme)
            {
                lyr3.css(themedCSS);
                lyr3.addClass('ui-widget-content')
            }
            else lyr3.css(css)
        }
        if (!opts.theme && (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform)))) lyr2.css(opts.overlayCSS);
        lyr2.css('position', full ? 'fixed' : 'absolute');
        if ($.browser.msie || opts.forceIframe) lyr1.css('opacity', 0.0);
        var layers = [lyr1, lyr2, lyr3],
            $par = full ? $('body') : $(el);
        $.each(layers, function ()
        {
            this.appendTo($par)
        });
        if (opts.theme && opts.draggable && $.fn.draggable)
        {
            lyr3.draggable(
            {
                handle: '.ui-dialog-titlebar',
                cancel: 'li'
            })
        }
        var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
        if (ie6 || expr)
        {
            if (full && opts.allowBodyStretch && $.boxModel) $('html,body').css('height', '100%');
            if ((ie6 || !$.boxModel) && !full)
            {
                var t = sz(el, 'borderTopWidth'),
                    l = sz(el, 'borderLeftWidth');
                var fixT = t ? '(0 - ' + t + ')' : 0;
                var fixL = l ? '(0 - ' + l + ')' : 0
            }
            $.each([lyr1, lyr2, lyr3], function (i, o)
            {
                var s = o[0].style;
                s.position = 'absolute';
                if (i < 2)
                {
                    full ? s.setExpression('height', 'Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:' + opts.quirksmodeOffsetHack + ') + "px"') : s.setExpression('height', 'this.parentNode.offsetHeight + "px"');
                    full ? s.setExpression('width', 'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : s.setExpression('width', 'this.parentNode.offsetWidth + "px"');
                    if (fixL) s.setExpression('left', fixL);
                    if (fixT) s.setExpression('top', fixT)
                }
                else if (opts.centerY)
                {
                    if (full) s.setExpression('top', '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                    s.marginTop = 0
                }
                else if (!opts.centerY && full)
                {
                    var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
                    var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + ' + top + ') + "px"';
                    s.setExpression('top', expression)
                }
            })
        }
        if (msg)
        {
            if (opts.theme) lyr3.find('.ui-widget-content').append(msg);
            else lyr3.append(msg);
            if (msg.jquery || msg.nodeType) $(msg).show()
        }
        if (($.browser.msie || opts.forceIframe) && opts.showOverlay) lyr1.show();
        if (opts.fadeIn)
        {
            var cb = opts.onBlock ? opts.onBlock : noOp;
            var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
            var cb2 = msg ? cb : noOp;
            if (opts.showOverlay) lyr2._fadeIn(opts.fadeIn, cb1);
            if (msg) lyr3._fadeIn(opts.fadeIn, cb2)
        }
        else
        {
            if (opts.showOverlay) lyr2.show();
            if (msg) lyr3.show();
            if (opts.onBlock) opts.onBlock()
        }
        bind(1, el, opts);
        if (full)
        {
            pageBlock = lyr3[0];
            pageBlockEls = $(':input:enabled:visible', pageBlock);
            if (opts.focusInput) setTimeout(focus, 20)
        }
        else center(lyr3[0], opts.centerX, opts.centerY);
        if (opts.timeout)
        {
            var to = setTimeout(function ()
            {
                full ? $.unblockUI(opts) : $(el).unblock(opts)
            }, opts.timeout);
            $(el).data('blockUI.timeout', to)
        }
    };

    function remove(el, opts)
    {
        var full = (el == window);
        var $el = $(el);
        var data = $el.data('blockUI.history');
        var to = $el.data('blockUI.timeout');
        if (to)
        {
            clearTimeout(to);
            $el.removeData('blockUI.timeout')
        }
        opts = $.extend(
        {}, $.blockUI.defaults, opts || {});
        bind(0, el, opts);
        if (opts.onUnblock === null)
        {
            opts.onUnblock = $el.data('blockUI.onUnblock');
            $el.removeData('blockUI.onUnblock')
        }
        var els;
        if (full) els = $('body').children().filter('.blockUI').add('body > .blockUI');
        else els = $('.blockUI', el);
        if (full) pageBlock = pageBlockEls = null;
        if (opts.fadeOut)
        {
            els.fadeOut(opts.fadeOut);
            setTimeout(function ()
            {
                reset(els, data, opts, el)
            }, opts.fadeOut)
        }
        else reset(els, data, opts, el)
    };

    function reset(els, data, opts, el)
    {
        els.each(function (i, o)
        {
            if (this.parentNode) this.parentNode.removeChild(this)
        });
        if (data && data.el)
        {
            data.el.style.display = data.display;
            data.el.style.position = data.position;
            if (data.parent) data.parent.appendChild(data.el);
            $(el).removeData('blockUI.history')
        }
        if (typeof opts.onUnblock == 'function') opts.onUnblock(el, opts)
    };

    function bind(b, el, opts)
    {
        var full = el == window,
            $el = $(el);
        if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked'))) return;
        if (!full) $el.data('blockUI.isBlocked', b);
        if (!opts.bindEvents || (b && !opts.showOverlay)) return;
        var events = 'mousedown mouseup keydown keypress';
        b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler)
    };

    function handler(e)
    {
        if (e.keyCode && e.keyCode == 9)
        {
            if (pageBlock && e.data.constrainTabKey)
            {
                var els = pageBlockEls;
                var fwd = !e.shiftKey && e.target === els[els.length - 1];
                var back = e.shiftKey && e.target === els[0];
                if (fwd || back)
                {
                    setTimeout(function ()
                    {
                        focus(back)
                    }, 10);
                    return false
                }
            }
        }
        var opts = e.data;
        if ($(e.target).parents('div.' + opts.blockMsgClass).length > 0) return true;
        return $(e.target).parents().children().filter('div.blockUI').length == 0
    };

    function focus(back)
    {
        if (!pageBlockEls) return;
        var e = pageBlockEls[back === true ? pageBlockEls.length - 1 : 0];
        if (e) e.focus()
    };

    function center(el, x, y)
    {
        var p = el.parentNode,
            s = el.style;
        var l = ((p.offsetWidth - el.offsetWidth) / 2) - sz(p, 'borderLeftWidth');
        var t = ((p.offsetHeight - el.offsetHeight) / 2) - sz(p, 'borderTopWidth');
        if (x) s.left = l > 0 ? (l + 'px') : '0';
        if (y) s.top = t > 0 ? (t + 'px') : '0'
    };

    function sz(el, p)
    {
        return parseInt($.css(el, p)) || 0
    }
})(jQuery);
