!function(a,b){
    "object"==typeof exports&&"undefined"!=typeof module?module.exports=b(): "function"==typeof define&&define.amd?define(b):a.moment=b()
}(this,function(){
    "use strict";function a(){return re.apply(null,arguments)
    }function b(a){re=a
    }function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)
    }function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)
    }function e(a){var b;for(b in a)return!1;return!0
    }function f(a){return void 0===a
    }function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)
    }function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)
    }function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c
        ],c));return d
    }function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)
    }function k(a,b){for(var c in b)j(b,c)&&(a[c
        ]=b[c
        ]);return j(b,
        "toString")&&(a.toString=b.toString),j(b,
        "valueOf")&&(a.valueOf=b.valueOf),a
    }function l(a,b,c,d){return sb(a,b,c,d,!0).utc()
    }function m(){return{empty:!1,unusedTokens: [],unusedInput: [],overflow: -2,charsLeftOver: 0,nullInput:!1,invalidMonth: null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts: [],meridiem: null,rfc2822:!1,weekdayMismatch:!1
        }
    }function n(a){return null==a._pf&&(a._pf=m()),a._pf
    }function o(a){if(null==a._isValid){var b=n(a),c=te.call(b.parsedDateParts,function(a){return null!=a
            }),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d
        }return a._isValid
    }function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b
    }function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),ue.length>0)for(c=0;c<ue.length;c++)d=ue[c
        ],e=b[d
        ],f(e)||(a[d
        ]=e);return a
    }function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ve===!1&&(ve=!0,a.updateOffset(this),ve=!1)
    }function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject
    }function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)
    }function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c
    }function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d
        ]!==b[d
        ]||!c&&u(a[d
        ])!==u(b[d
        ]))&&g++;return g+f
    }function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)
    }function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="",
                    "object"==typeof arguments[g
                    ]){e+="\n["+g+"] ";for(var h in arguments[
                            0
                        ])e+=h+": "+arguments[
                            0
                        ][h
                        ]+", ";e=e.slice(0,
                        -2)
                    }else e=arguments[g
                    ];f.push(e)
                }w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1
            }return c.apply(this,arguments)
        },c)
    }function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),we[b
        ]||(w(c),we[b
        ]=!0)
    }function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)
    }function A(a){var b,c;for(c in a)b=a[c
        ],z(b)?this[c
        ]=b:this[
            "_"+c
        ]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{
            1,
            2
        }/.source)
    }function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c
        ])&&d(b[c
        ])?(e[c
        ]={},k(e[c
        ],a[c
        ]),k(e[c
        ],b[c
        ])):null!=b[c
        ]?e[c
        ]=b[c
        ]:delete e[c
        ]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c
        ])&&(e[c
        ]=k({},e[c
        ]));return e
    }function C(a){null!=a&&this.set(a)
    }function D(a,b,c){var d=this._calendar[a
        ]||this._calendar.sameElse;return z(d)?d.call(b,c):d
    }function E(a){var b=this._longDateFormat[a
        ],c=this._longDateFormat[a.toUpperCase()
        ];return b||!c?b:(this._longDateFormat[a
        ]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)
        }),this._longDateFormat[a
        ])
    }function F(){return this._invalidDate
    }function G(a){return this._ordinal.replace("%d",a)
    }function H(a,b,c,d){var e=this._relativeTime[c
        ];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)
    }function I(a,b){var c=this._relativeTime[a>0?"future": "past"
        ];return z(c)?c(b):c.replace(/%s/i,b)
    }function J(a,b){var c=a.toLowerCase();Ge[c
        ]=Ge[c+"s"
        ]=Ge[b
        ]=a
    }function K(a){return"string"==typeof a?Ge[a
        ]||Ge[a.toLowerCase()
        ]:void 0
    }function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b
        ]=a[c
        ]));return d
    }function M(a,b){He[a
        ]=b
    }function N(a){var b=[];for(var c in a)b.push({unit:c,priority:He[c
            ]
        });return b.sort(function(a,b){return a.priority-b.priority
        }),b
    }function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)
        }
    }function P(a,b){return a.isValid()?a._d[
            "get"+(a._isUTC?"UTC": "")+b
        ]():NaN
    }function Q(a,b,c){a.isValid()&&a._d[
            "set"+(a._isUTC?"UTC": "")+b
        ](c)
    }function R(a){return a=K(a),z(this[a
        ])?this[a
        ]():this
    }function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d
                ].unit
            ](a[c[d
                ].unit
            ])
        }else if(a=K(a),z(this[a
        ]))return this[a
        ](b);return this
    }function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+": "": "-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d
    }function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d
            ]()
        }),a&&(Le[a
        ]=e),b&&(Le[b[
                0
            ]
        ]=function(){return T(e.apply(this,arguments),b[
                1
            ],b[
                2
            ])
        }),c&&(Le[c
        ]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)
        })
    }function V(a){return a.match(/\[
            [\s\S
            ]/)?a.replace(/^\[|\
            ]$/g,
            ""):a.replace(/\\/g,
            "")
        }function W(a){var b,c,d=a.match(Ie);for(b=0,c=d.length;b<c;b++)Le[d[b
                ]
            ]?d[b
            ]=Le[d[b
                ]
            ]:d[b
            ]=V(d[b
            ]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e
                ])?d[e
                ].call(b,a):d[e
                ];return f
            }
        }function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ke[b
            ]=Ke[b
            ]||W(b),Ke[b
            ](a)):a.localeData().invalidDate()
        }function Y(a,b){function c(a){return b.longDateFormat(a)||a
            }var d=5;for(Je.lastIndex=0;d>=0&&Je.test(a);)a=a.replace(Je,c),Je.lastIndex=0,d-=1;return a
        }function Z(a,b,c){bf[a
            ]=z(b)?b:function(a,d){return a&&c?c:b
            }
        }function $(a,b){return j(bf,a)?bf[a
            ](b._strict,b._locale):new RegExp(_(a))
        }function _(a){return aa(a.replace("\\",
            "").replace(/\\(\[)|\\(\
            ])|\[([^\
                ]\[]*)\
            ]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e
            }))
        }function aa(a){return a.replace(/[-\/\\^$*+?.()|[\
                ]{}
            ]/g,
            "\\$&")
        }function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a
            ]),g(b)&&(d=function(a,c){c[b
                ]=u(a)
            }),c=0;c<a.length;c++)cf[a[c
                ]
            ]=d
        }function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)
            })
        }function da(a,b,c){null!=b&&j(cf,a)&&cf[a
            ](b,c._a,c,a)
        }function ea(a,b){return new Date(Date.UTC(a,b+1,
            0)).getUTCDate()
        }function fa(a,b){return a?c(this._months)?this._months[a.month()
            ]:this._months[(this._months.isFormat||of).test(b)?"format": "standalone"
            ][a.month()
            ]:c(this._months)?this._months:this._months.standalone
        }function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()
            ]:this._monthsShort[of.test(b)?"format": "standalone"
            ][a.month()
            ]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
        }function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([
                2e3,d
            ]),this._shortMonthsParse[d
            ]=this.monthsShort(f,
            "").toLocaleLowerCase(),this._longMonthsParse[d
            ]=this.months(f,
            "").toLocaleLowerCase();return c?"MMM"===b?(e=nf.call(this._shortMonthsParse,g),e!==-1?e:null):(e=nf.call(this._longMonthsParse,g),e!==-1?e:null): "MMM"===b?(e=nf.call(this._shortMonthsParse,g),e!==-1?e:(e=nf.call(this._longMonthsParse,g),e!==-1?e:null)):(e=nf.call(this._longMonthsParse,g),e!==-1?e:(e=nf.call(this._shortMonthsParse,g),e!==-1?e:null))
        }function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([
                    2e3,d
                ]),c&&!this._longMonthsParse[d
                ]&&(this._longMonthsParse[d
                ]=new RegExp("^"+this.months(e,
                "").replace(".",
                "")+"$",
                "i"),this._shortMonthsParse[d
                ]=new RegExp("^"+this.monthsShort(e,
                "").replace(".",
                "")+"$",
                "i")),c||this._monthsParse[d
                ]||(f="^"+this.months(e,
                "")+"|^"+this.monthsShort(e,
                ""),this._monthsParse[d
                ]=new RegExp(f.replace(".",
                ""),
                "i")),c&&"MMMM"===b&&this._longMonthsParse[d
                ].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d
                ].test(a))return d;if(!c&&this._monthsParse[d
                ].test(a))return d
            }
        }function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d[
                "set"+(a._isUTC?"UTC": "")+"Month"
            ](b,c),a
        }function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,
            "Month")
        }function la(){return ea(this.year(),this.month())
        }function ma(a){return this._monthsParseExact?(j(this,
            "_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,
            "_monthsShortRegex")||(this._monthsShortRegex=rf),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)
        }function na(a){return this._monthsParseExact?(j(this,
            "_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,
            "_monthsRegex")||(this._monthsRegex=sf),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)
        }function oa(){function a(a,b){return b.length-a.length
            }var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([
                2e3,b
            ]),d.push(this.monthsShort(c,
            "")),e.push(this.months(c,
            "")),f.push(this.months(c,
            "")),f.push(this.monthsShort(c,
            ""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b
            ]=aa(d[b
            ]),e[b
            ]=aa(e[b
            ]);for(b=0;b<24;b++)f[b
            ]=aa(f[b
            ]);this._monthsRegex=new RegExp("^("+f.join("|")+")",
            "i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")",
            "i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")",
            "i")
        }function pa(a){return qa(a)?366: 365
        }function qa(a){return a%4===0&&a%100!==0||a%400===0
        }function ra(){return qa(this.year())
        }function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h
        }function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b
        }function ua(a,b,c){var d=7+b-c,e=(7+ta(a,
            0,d).getUTCDay()-b)%7;return-e+d-1
        }function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),
            {year:f,dayOfYear:g
            }
        }function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),
            {week:d,year:e
            }
        }function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7
        }function ya(a){return wa(a,this._week.dow,this._week.doy).week
        }function za(){return this._week.dow
        }function Aa(){return this._week.doy
        }function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),
            "d")
        }function Ca(a){var b=wa(this,
            1,
            4).week;return null==a?b:this.add(7*(a-b),
            "d")
        }function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),
            "number"==typeof a?a:null):parseInt(a,
            10)
        }function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a
        }function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()
            ]:this._weekdays[this._weekdays.isFormat.test(b)?"format": "standalone"
            ][a.day()
            ]:c(this._weekdays)?this._weekdays:this._weekdays.standalone
        }function Ga(a){return a?this._weekdaysShort[a.day()
            ]:this._weekdaysShort
        }function Ha(a){return a?this._weekdaysMin[a.day()
            ]:this._weekdaysMin
        }function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([
                2e3,
                1
            ]).day(d),this._minWeekdaysParse[d
            ]=this.weekdaysMin(f,
            "").toLocaleLowerCase(),this._shortWeekdaysParse[d
            ]=this.weekdaysShort(f,
            "").toLocaleLowerCase(),this._weekdaysParse[d
            ]=this.weekdays(f,
            "").toLocaleLowerCase();return c?"dddd"===b?(e=nf.call(this._weekdaysParse,g),e!==-1?e:null): "ddd"===b?(e=nf.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=nf.call(this._minWeekdaysParse,g),e!==-1?e:null): "dddd"===b?(e=nf.call(this._weekdaysParse,g),e!==-1?e:(e=nf.call(this._shortWeekdaysParse,g),e!==-1?e:(e=nf.call(this._minWeekdaysParse,g),e!==-1?e:null))): "ddd"===b?(e=nf.call(this._shortWeekdaysParse,g),e!==-1?e:(e=nf.call(this._weekdaysParse,g),e!==-1?e:(e=nf.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=nf.call(this._minWeekdaysParse,g),e!==-1?e:(e=nf.call(this._weekdaysParse,g),e!==-1?e:(e=nf.call(this._shortWeekdaysParse,g),e!==-1?e:null)))
        }function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([
                    2e3,
                    1
                ]).day(d),c&&!this._fullWeekdaysParse[d
                ]&&(this._fullWeekdaysParse[d
                ]=new RegExp("^"+this.weekdays(e,
                "").replace(".",
                ".?")+"$",
                "i"),this._shortWeekdaysParse[d
                ]=new RegExp("^"+this.weekdaysShort(e,
                "").replace(".",
                ".?")+"$",
                "i"),this._minWeekdaysParse[d
                ]=new RegExp("^"+this.weekdaysMin(e,
                "").replace(".",
                ".?")+"$",
                "i")),this._weekdaysParse[d
                ]||(f="^"+this.weekdays(e,
                "")+"|^"+this.weekdaysShort(e,
                "")+"|^"+this.weekdaysMin(e,
                ""),this._weekdaysParse[d
                ]=new RegExp(f.replace(".",
                ""),
                "i")),c&&"dddd"===b&&this._fullWeekdaysParse[d
                ].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d
                ].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d
                ].test(a))return d;if(!c&&this._weekdaysParse[d
                ].test(a))return d
            }
        }function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,
            "d")):b
        }function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,
            "d")
        }function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)
            }return this.day()||7
        }function Na(a){return this._weekdaysParseExact?(j(this,
            "_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,
            "_weekdaysRegex")||(this._weekdaysRegex=yf),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)
        }function Oa(a){return this._weekdaysParseExact?(j(this,
            "_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,
            "_weekdaysShortRegex")||(this._weekdaysShortRegex=zf),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)
        }function Pa(a){return this._weekdaysParseExact?(j(this,
            "_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,
            "_weekdaysMinRegex")||(this._weekdaysMinRegex=Af),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)
        }function Qa(){function a(a,b){return b.length-a.length
            }var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([
                2e3,
                1
            ]).day(b),d=this.weekdaysMin(c,
            ""),e=this.weekdaysShort(c,
            ""),f=this.weekdays(c,
            ""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b
            ]=aa(h[b
            ]),i[b
            ]=aa(i[b
            ]),j[b
            ]=aa(j[b
            ]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")",
            "i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")",
            "i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")",
            "i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")",
            "i")
        }function Ra(){return this.hours()%12||12
        }function Sa(){return this.hours()||24
        }function Ta(a,b){U(a,
            0,
            0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)
            })
        }function Ua(a,b){return b._meridiemParse
        }function Va(a){return"p"===(a+"").toLowerCase().charAt(0)
        }function Wa(a,b,c){return a>11?c?"pm": "PM":c?"am": "AM"
        }function Xa(a){return a?a.toLowerCase().replace("_",
            "-"):a
        }function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f
                ]).split("-"),b=e.length,c=Xa(a[f+1
                ]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--
                }f++
            }return null
        }function Za(a){var b=null;if(!Ff[a
            ]&&"undefined"!=typeof module&&module&&module.exports)try{b=Bf._abbr,require("./locale/"+a),$a(b)
            }catch(a){}return Ff[a
            ]
        }function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Bf=c)),Bf._abbr
        }function _a(a,b){if(null!==b){var c=Ef;if(b.abbr=a,null!=Ff[a
                ])y("defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Ff[a
                ]._config;else if(null!=b.parentLocale){if(null==Ff[b.parentLocale
                    ])return Gf[b.parentLocale
                    ]||(Gf[b.parentLocale
                    ]=[]),Gf[b.parentLocale
                    ].push({name:a,config:b
                    }),null;c=Ff[b.parentLocale
                    ]._config
                }return Ff[a
                ]=new C(B(c,b)),Gf[a
                ]&&Gf[a
                ].forEach(function(a){_a(a.name,a.config)
                }),$a(a),Ff[a
                ]
            }return delete Ff[a
            ],
            null
        }function ab(a,b){if(null!=b){var c,d=Ef;null!=Ff[a
                ]&&(d=Ff[a
                ]._config),b=B(d,b),c=new C(b),c.parentLocale=Ff[a
                ],Ff[a
                ]=c,$a(a)
            }else null!=Ff[a
            ]&&(null!=Ff[a
            ].parentLocale?Ff[a
            ]=Ff[a
            ].parentLocale:null!=Ff[a
            ]&&delete Ff[a
            ]);return Ff[a
            ]
        }function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Bf;if(!c(a)){if(b=Za(a))return b;a=[a
                ]
            }return Ya(a)
        }function cb(){return ze(Ff)
        }function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[ef
            ]<0||c[ef
            ]>11?ef:c[ff
            ]<1||c[ff
            ]>ea(c[df
            ],c[ef
            ])?ff:c[gf
            ]<0||c[gf
            ]>24||24===c[gf
            ]&&(0!==c[hf
            ]||0!==c[jf
            ]||0!==c[kf
            ])?gf:c[hf
            ]<0||c[hf
            ]>59?hf:c[jf
            ]<0||c[jf
            ]>59?jf:c[kf
            ]<0||c[kf
            ]>999?kf: -1,n(a)._overflowDayOfYear&&(b<df||b>ff)&&(b=ff),n(a)._overflowWeeks&&b===-1&&(b=lf),n(a)._overflowWeekday&&b===-1&&(b=mf),n(a).overflow=b),a
        }function eb(a){var b,c,d,e,f,g,h=a._i,i=Hf.exec(h)||If.exec(h);if(i){for(n(a).iso=!0,b=0,c=Kf.length;b<c;b++)if(Kf[b
                ][
                    1
                ].exec(i[
                    1
                ])){e=Kf[b
                    ][
                        0
                    ],d=Kf[b
                    ][
                        2
                    ]!==!1;break
                }if(null==e)return void(a._isValid=!1);if(i[
                    3
                ]){for(b=0,c=Lf.length;b<c;b++)if(Lf[b
                    ][
                        1
                    ].exec(i[
                        3
                    ])){f=(i[
                            2
                        ]||" ")+Lf[b
                        ][
                            0
                        ];break
                    }if(null==f)return void(a._isValid=!1)
                }if(!d&&null!=f)return void(a._isValid=!1);if(i[
                    4
                ]){if(!Jf.exec(i[
                        4
                    ]))return void(a._isValid=!1);g="Z"
                }a._f=e+(f||"")+(g||""),lb(a)
            }else a._isValid=!1
        }function fb(a){var b,c,d,e,f,g,h,i,j={
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            },k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)
            ]*\)|[\n\t
            ]/g,
            " ").replace(/(\s\s+)/g,
            " ").replace(/^\s|\s$/g,
            ""),c=Nf.exec(b)){if(d=c[
                    1
                ]?"ddd"+(5===c[
                    1
                ].length?", ": " "): "",e="D MMM "+(c[
                    2
                ].length>10?"YYYY ": "YY "),f="HH:mm"+(c[
                    4
                ]?":ss": ""),c[
                    1
                ]){var l=new Date(c[
                        2
                    ]),m=[
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ][l.getDay()
                    ];if(c[
                        1
                    ].substr(0,
                    3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)
                }switch(c[
                    5
                ].length){case 2: 0===i?h=" +0000":(i=k.indexOf(c[
                        5
                    ][
                        1
                    ].toUpperCase())-12,h=(i<0?" -": " +")+(""+i).replace(/^-?/,
                    "0").match(/..$/)[
                        0
                    ]+"00");break;case 4:h=j[c[
                            5
                        ]
                    ];break;default:h=j[
                        " GMT"
                    ]
                }c[
                    5
                ]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0
            }else a._isValid=!1
        }function gb(b){var c=Mf.exec(b._i);return null!==c?void(b._d=new Date(+c[
                1
            ])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))
        }function hb(a,b,c){return null!=a?a:null!=b?b:c
        }function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()
            ]: [c.getFullYear(),c.getMonth(),c.getDate()
            ]
        }function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ff
                ]&&null==a._a[ef
                ]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[df
                ],d[df
                ]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,
                0,a._dayOfYear),a._a[ef
                ]=c.getUTCMonth(),a._a[ff
                ]=c.getUTCDate()),b=0;b<3&&null==a._a[b
                ];++b)a._a[b
                ]=f[b
                ]=d[b
                ];for(;b<7;b++)a._a[b
                ]=f[b
                ]=null==a._a[b
                ]?2===b?1: 0:a._a[b
                ];24===a._a[gf
                ]&&0===a._a[hf
                ]&&0===a._a[jf
                ]&&0===a._a[kf
                ]&&(a._nextDay=!0,a._a[gf
                ]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[gf
                ]=24)
            }
        }function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[df
            ],wa(tb(),
            1,
            4).year),d=hb(b.W,
            1),e=hb(b.E,
            1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[df
                ],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f
            }d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[df
            ]=h.year,a._dayOfYear=h.dayOfYear)
        }function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Ie)||[],c=0;c<e.length;c++)f=e[c
            ],d=(h.match($(f,b))||[])[
                0
            ],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Le[f
            ]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[gf
            ]<=12&&n(b).bigHour===!0&&b._a[gf
            ]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[gf
            ]=mb(b._locale,b._a[gf
            ],b._meridiem),jb(b),db(b)
        }function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b
        }function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e
            ],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)
        }function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond
                ],function(a){return a&&parseInt(a,
                    10)
                }),jb(a)
            }
        }function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,
            "d"),b._nextDay=void 0),b
        }function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0
            }):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))
        }function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()): "string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,
                10)
            }),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)
        }function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)
        }function tb(a,b,c,d){return sb(a,b,c,d,!1)
        }function ub(a,b){var d,e;if(1===b.length&&c(b[
                0
            ])&&(b=b[
                0
            ]),!b.length)return tb();for(d=b[
                0
            ],e=1;e<b.length;++e)b[e
            ].isValid()&&!b[e
            ][a
            ](d)||(d=b[e
            ]);return d
        }function vb(){var a=[].slice.call(arguments,
            0);return ub("isBefore",a)
        }function wb(){var a=[].slice.call(arguments,
            0);return ub("isAfter",a)
        }function xb(a){for(var b in a)if(Rf.indexOf(b)===-1||null!=a[b
            ]&&isNaN(a[b
            ]))return!1;for(var c=!1,d=0;d<Rf.length;++d)if(a[Rf[d
                ]
            ]){if(c)return!1;parseFloat(a[Rf[d
                    ]
                ])!==u(a[Rf[d
                    ]
                ])&&(c=!0)
            }return!0
        }function yb(){return this._isValid
        }function zb(){return Sb(NaN)
        }function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()
        }function Bb(a){return a instanceof Ab
        }function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)
        }function Db(a,b){U(a,
            0,
            0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),
                2)+b+T(~~a%60,
                2)
            })
        }function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1
            ]||[],e=(d+"").match(Sf)||[
                "-",
                0,
                0
            ],f=+(60*e[
                1
            ])+u(e[
                2
            ]);return 0===f?0: "+"===e[
                0
            ]?f:-f
        }function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()
        }function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)
        }function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb($e,b),null===b)return this
                }else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,
                "m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,
                "m"),
                1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this
            }return this._isUTC?f:Gb(this)
        }function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()
        }function Jb(a){return this.utcOffset(0,a)
        }function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),
            "m")),this
        }function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb(Ze,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)
            }return this
        }function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset(): 0,(this.utcOffset()-a)%60===0)
        }function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
        }function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0
            }else this._isDSTShifted=!1;return this._isDSTShifted
        }function Pb(){return!!this.isValid()&&!this._isUTC
        }function Qb(){return!!this.isValid()&&this._isUTC
        }function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)
        }function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months
            }:g(a)?(f={},b?f[b
            ]=a:f.milliseconds=a):(h=Tf.exec(a))?(c="-"===h[
                1
            ]?-1: 1,f={y: 0,d:u(h[ff
                ])*c,h:u(h[gf
                ])*c,m:u(h[hf
                ])*c,s:u(h[jf
                ])*c,ms:u(Cb(1e3*h[kf
                ]))*c
            }):(h=Uf.exec(a))?(c="-"===h[
                1
            ]?-1: 1,f={y:Tb(h[
                    2
                ],c),M:Tb(h[
                    3
                ],c),w:Tb(h[
                    4
                ],c),d:Tb(h[
                    5
                ],c),h:Tb(h[
                    6
                ],c),m:Tb(h[
                    7
                ],c),s:Tb(h[
                    8
                ],c)
            }):null==f?f={}: "object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,
            "_locale")&&(d._locale=a._locale),d
        }function Tb(a,b){var c=a&&parseFloat(a.replace(",",
            "."));return(isNaN(c)?0:c)*b
        }function Ub(a,b){var c={milliseconds: 0,months: 0
            };return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,
            "M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,
            "M"),c
        }function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c): {milliseconds: 0,months: 0
            }
        }function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,
                "moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this
            }
        }function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,
            "Date",P(b,
            "Date")+g*d),h&&ja(b,P(b,
            "Month")+h*d),e&&a.updateOffset(b,g||h))
        }function Yb(a,b){var c=a.diff(b,
            "days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek": "sameElse"
        }function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f
            ])?c[f
            ].call(this,d):c[f
            ]);return this.format(g||this.localeData().calendar(f,this,tb(d)))
        }function $b(){return new r(this)
        }function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),
            "millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())
        }function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),
            "millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())
        }function bc(a,b,c,d){return d=d||"()",("("===d[
                0
            ]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[
                1
            ]?this.isBefore(b,c):!this.isAfter(b,c))
        }function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),
            "millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))
        }function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)
        }function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)
        }function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),
            "year"===b||"month"===b||"quarter"===b?(g=gc(this,d),
            "quarter"===b?g/=3: "year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3: "minute"===b?f/6e4: "hour"===b?f/36e5: "day"===b?(f-e)/864e5: "week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN
        }function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,
            "months");return b-f<0?(c=a.clone().add(e-1,
            "months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,
            "months"),d=(b-f)/(c-f)),-(e+d)||0
        }function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,
            "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,
            "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc": "moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T
            ]HH:mm:ss.SSS",f=b+'[")
        ]';return this.format(c+d+e+f)
    }function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)
    }function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a
        }).locale(this.locale()).humanize(!b):this.localeData().invalidDate()
    }function mc(a){return this.from(tb(),a)
    }function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a
        }).locale(this.locale()).humanize(!b):this.localeData().invalidDate()
    }function oc(a){return this.to(tb(),a)
    }function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)
    }function qc(){return this._locale
    }function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)
        }return"week"===a&&this.weekday(0),
        "isoWeek"===a&&this.isoWeekday(1),
        "quarter"===a&&this.month(3*Math.floor(this.month()/3)),this
    }function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,
        "isoWeek"===a?"week":a).subtract(1,
        "ms"))
    }function tc(){return this._d.valueOf()-6e4*(this._offset||0)
    }function uc(){return Math.floor(this.valueOf()/1e3)
    }function vc(){return new Date(this.valueOf())
    }function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()
        ]
    }function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()
        }
    }function yc(){return this.isValid()?this.toISOString(): null
    }function zc(){return o(this)
    }function Ac(){
return k({},n(this))
    }function Bc(){return n(this).overflow
    }function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict
        }
    }function Dc(a,b){U(0,
        [a,a.length
        ],
        0,b)
    }function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
    }function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),
        1,
        4)
    }function Gc(){return xa(this.year(),
        1,
        4)
    }function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)
    }function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))
    }function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,
        0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this
    }function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)
    }function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,
        "d")
    }function Mc(a,b){b[kf
        ]=u(1e3*("0."+a))
    }function Nc(){return this._isUTC?"UTC": ""
    }function Oc(){return this._isUTC?"Coordinated Universal Time": ""
    }function Pc(a){return tb(1e3*a)
    }function Qc(){return tb.apply(null,arguments).parseZone()
    }function Rc(a){return a
    }function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c
        ](f,a)
    }function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,
        "month");var d,e=[];for(d=0;d<12;d++)e[d
        ]=Sc(a,d,c,
        "month");return e
    }function Uc(a,b,c,d){
        "boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow: 0;if(null!=c)return Sc(b,(c+f)%7,d,
        "day");var h,i=[];for(h=0;h<7;h++)i[h
        ]=Sc(b,(h+f)%7,d,
        "day");return i
    }function Vc(a,b){return Tc(a,b,
        "months")
    }function Wc(a,b){return Tc(a,b,
        "monthsShort")
    }function Xc(a,b,c){return Uc(a,b,c,
        "weekdays")
    }function Yc(a,b,c){return Uc(a,b,c,
        "weekdaysShort")
    }function Zc(a,b,c){return Uc(a,b,c,
        "weekdaysMin")
    }function $c(){var a=this._data;return this._milliseconds=dg(this._milliseconds),this._days=dg(this._days),this._months=dg(this._months),a.milliseconds=dg(a.milliseconds),a.seconds=dg(a.seconds),a.minutes=dg(a.minutes),a.hours=dg(a.hours),a.months=dg(a.months),a.years=dg(a.years),this
    }function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()
    }function ad(a,b){return _c(this,a,b,
        1)
    }function bd(a,b){return _c(this,a,b,
        -1)
    }function cd(a){return a<0?Math.floor(a):Math.ceil(a)
    }function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this
    }function ed(a){return 4800*a/146097
    }function fd(a){return 146097*a/4800
    }function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),
        "month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),
        "month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)
        }
    }function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN
    }function id(a){return function(){return this.as(a)
        }
    }function jd(a){return a=K(a),this.isValid()?this[a+"s"
        ]():NaN
    }function kd(a){return function(){return this.isValid()?this._data[a
            ]:NaN
        }
    }function ld(){return t(this.days()/7)
    }function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)
    }function nd(a,b,c){var d=Sb(a).abs(),e=tg(d.as("s")),f=tg(d.as("m")),g=tg(d.as("h")),h=tg(d.as("d")),i=tg(d.as("M")),j=tg(d.as("y")),k=e<=ug.ss&&[
            "s",e
        ]||e<ug.s&&[
            "ss",e
        ]||f<=1&&[
            "m"
        ]||f<ug.m&&[
            "mm",f
        ]||g<=1&&[
            "h"
        ]||g<ug.h&&[
            "hh",g
        ]||h<=1&&[
            "d"
        ]||h<ug.d&&[
            "dd",h
        ]||i<=1&&[
            "M"
        ]||i<ug.M&&[
            "MM",i
        ]||j<=1&&[
            "y"
        ]||[
            "yy",j
        ];return k[
            2
        ]=b,k[
            3
        ]=+a>0,k[
            4
        ]=c,md.apply(null,k)
    }function od(a){return void 0===a?tg: "function"==typeof a&&(tg=a,!0)
    }function pd(a,b){return void 0!==ug[a
        ]&&(void 0===b?ug[a
        ]:(ug[a
        ]=b,
        "s"===a&&(ug.ss=b-1),!0))
    }function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)
    }function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=vg(this._milliseconds)/1e3,e=vg(this._days),f=vg(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-": "")+"P"+(g?g+"Y": "")+(h?h+"M": "")+(i?i+"D": "")+(j||k||l?"T": "")+(j?j+"H": "")+(k?k+"M": "")+(l?l+"S": ""): "P0D"
    }
    //! moment.js locale configuration
    //! locale : Belarusian [be]
    //! author : Dmitry Demidov : https://github.com/demidov91
    //! author: Praleska: http://praleska.pro/
    //! Author : Menelion Elens??le : https://github.com/Oire
function sd(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[
            0
        ]:b%10>=2&&b%10<=4&&(b%100<10||b%100>=20)?c[
            1
        ]:c[
            2
        ]
    }function td(a,b,c){var d={mm:b?"??????????????_??????????????_????????????": "??????????????_??????????????_????????????",hh:b?"??????????????_??????????????_????????????": "??????????????_??????????????_????????????",dd: "??????????_??????_????????",MM: "??????????_????????????_??????????????",yy: "??????_????????_??????????"
        };return"m"===c?b?"??????????????": "??????????????": "h"===c?b?"??????????????": "??????????????":a+" "+sd(d[c
        ],+a)
    }
    //! moment.js locale configuration
    //! locale : Breton [br]
    //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
function ud(a,b,c){var d={mm: "munutenn",MM: "miz",dd: "devezh"
        };return a+" "+xd(d[c
        ],a)
    }function vd(a){switch(wd(a)){case 1:case 3:case 4:case 5:case 9:return a+" bloaz";default:return a+" vloaz"
        }
    }function wd(a){return a>9?wd(a%10):a
    }function xd(a,b){return 2===b?yd(a):a
    }function yd(a){var b={m: "v",b: "v",d: "z"
        };return void 0===b[a.charAt(0)
        ]?a:b[a.charAt(0)
        ]+a.substring(1)
    }
    //! moment.js locale configuration
    //! locale : Bosnian [bs]
    //! author : Nedim Cholich : https://github.com/frontyard
    //! based on (hr) translation by Bojan Markovi??
function zd(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta": "jedne minute";case"mm":return d+=1===a?"minuta": 2===a||3===a||4===a?"minute": "minuta";case"h":return b?"jedan sat": "jednog sata";case"hh":return d+=1===a?"sat": 2===a||3===a||4===a?"sata": "sati";case"dd":return d+=1===a?"dan": "dana";case"MM":return d+=1===a?"mjesec": 2===a||3===a||4===a?"mjeseca": "mjeseci";case"yy":return d+=1===a?"godina": 2===a||3===a||4===a?"godine": "godina"
        }
    }function Ad(a){return a>1&&a<5&&1!==~~(a/10)
    }function Bd(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"p??r sekund": "p??r sekundami";case"m":return b?"minuta":d?"minutu": "minutou";case"mm":return b||d?e+(Ad(a)?"minuty": "minut"):e+"minutami";break;case"h":return b?"hodina":d?"hodinu": "hodinou";case"hh":return b||d?e+(Ad(a)?"hodiny": "hodin"):e+"hodinami";break;case"d":return b||d?"den": "dnem";case"dd":return b||d?e+(Ad(a)?"dny": "dn??"):e+"dny";break;case"M":return b||d?"m??s??c": "m??s??cem";case"MM":return b||d?e+(Ad(a)?"m??s??ce": "m??s??c??"):e+"m??s??ci";break;case"y":return b||d?"rok": "rokem";case"yy":return b||d?e+(Ad(a)?"roky": "let"):e+"lety"
        }
    }
    //! moment.js locale configuration
    //! locale : German (Austria) [de-at]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elens??le: https://github.com/Oire
    //! author : Martin Groller : https://github.com/MadMG
    //! author : Mikolaj Dadela : https://github.com/mik01aj
function Cd(a,b,c,d){var e={m: [
                "eine Minute",
                "einer Minute"
            ],h: [
                "eine Stunde",
                "einer Stunde"
            ],d: [
                "ein Tag",
                "einem Tag"
            ],dd: [a+" Tage",a+" Tagen"
            ],M: [
                "ein Monat",
                "einem Monat"
            ],MM: [a+" Monate",a+" Monaten"
            ],y: [
                "ein Jahr",
                "einem Jahr"
            ],yy: [a+" Jahre",a+" Jahren"
            ]
        };return b?e[c
        ][
            0
        ]:e[c
        ][
            1
        ]
    }
    //! moment.js locale configuration
    //! locale : German (Switzerland) [de-ch]
    //! author : sschueller : https://github.com/sschueller
function Dd(a,b,c,d){var e={m: [
                "eine Minute",
                "einer Minute"
            ],h: [
                "eine Stunde",
                "einer Stunde"
            ],d: [
                "ein Tag",
                "einem Tag"
            ],dd: [a+" Tage",a+" Tagen"
            ],M: [
                "ein Monat",
                "einem Monat"
            ],MM: [a+" Monate",a+" Monaten"
            ],y: [
                "ein Jahr",
                "einem Jahr"
            ],yy: [a+" Jahre",a+" Jahren"
            ]
        };return b?e[c
        ][
            0
        ]:e[c
        ][
            1
        ]
    }
    //! moment.js locale configuration
    //! locale : German [de]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elens??le: https://github.com/Oire
    //! author : Mikolaj Dadela : https://github.com/mik01aj
function Ed(a,b,c,d){var e={m: [
                "eine Minute",
                "einer Minute"
            ],h: [
                "eine Stunde",
                "einer Stunde"
            ],d: [
                "ein Tag",
                "einem Tag"
            ],dd: [a+" Tage",a+" Tagen"
            ],M: [
                "ein Monat",
                "einem Monat"
            ],MM: [a+" Monate",a+" Monaten"
            ],y: [
                "ein Jahr",
                "einem Jahr"
            ],yy: [a+" Jahre",a+" Jahren"
            ]
        };return b?e[c
        ][
            0
        ]:e[c
        ][
            1
        ]
    }
    //! moment.js locale configuration
    //! locale : Estonian [et]
    //! author : Henry Kehlmann : https://github.com/madhenry
    //! improvements : Illimar Tambek : https://github.com/ragulka
function Fd(a,b,c,d){var e={s: [
                "m??ne sekundi",
                "m??ni sekund",
                "paar sekundit"
            ],m: [
                "??he minuti",
                "??ks minut"
            ],mm: [a+" minuti",a+" minutit"
            ],h: [
                "??he tunni",
                "tund aega",
                "??ks tund"
            ],hh: [a+" tunni",a+" tundi"
            ],d: [
                "??he p??eva",
                "??ks p??ev"
            ],M: [
                "kuu aja",
                "kuu aega",
                "??ks kuu"
            ],MM: [a+" kuu",a+" kuud"
            ],y: [
                "??he aasta",
                "aasta",
                "??ks aasta"
            ],yy: [a+" aasta",a+" aastat"
            ]
        };return b?e[c
        ][
            2
        ]?e[c
        ][
            2
        ]:e[c
        ][
            1
        ]:d?e[c
        ][
            0
        ]:e[c
        ][
            1
        ]
    }function Gd(a,b,c,d){var e="";switch(c){case"s":return d?"muutaman sekunnin": "muutama sekunti";case"m":return d?"minuutin": "minuutti";case"mm":e=d?"minuutin": "minuuttia";break;case"h":return d?"tunnin": "tunti";case"hh":e=d?"tunnin": "tuntia";break;case"d":return d?"p??iv??n": "p??iv??";case"dd":e=d?"p??iv??n": "p??iv????";break;case"M":return d?"kuukauden": "kuukausi";case"MM":e=d?"kuukauden": "kuukautta";break;case"y":return d?"vuoden": "vuosi";case"yy":e=d?"vuoden": "vuotta"
        }return e=Hd(a,d)+" "+e
    }function Hd(a,b){return a<10?b?$g[a
        ]:Zg[a
        ]:a
    }
    //! moment.js locale configuration
    //! locale : Konkani Latin script [gom-latn]
    //! author : The Discoverer : https://github.com/WikiDiscoverer
function Id(a,b,c,d){var e={s: [
                "thodde secondanim",
                "thodde second"
            ],m: [
                "eka mintan",
                "ek minute"
            ],mm: [a+" mintanim",a+" mintam"
            ],h: [
                "eka horan",
                "ek hor"
            ],hh: [a+" horanim",a+" hor"
            ],d: [
                "eka disan",
                "ek dis"
            ],dd: [a+" disanim",a+" dis"
            ],M: [
                "eka mhoinean",
                "ek mhoino"
            ],MM: [a+" mhoineanim",a+" mhoine"
            ],y: [
                "eka vorsan",
                "ek voros"
            ],yy: [a+" vorsanim",a+" vorsam"
            ]
        };return b?e[c
        ][
            0
        ]:e[c
        ][
            1
        ]
    }
    //! moment.js locale configuration
    //! locale : Croatian [hr]
    //! author : Bojan Markovi?? : https://github.com/bmarkovic
function Jd(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta": "jedne minute";case"mm":return d+=1===a?"minuta": 2===a||3===a||4===a?"minute": "minuta";case"h":return b?"jedan sat": "jednog sata";case"hh":return d+=1===a?"sat": 2===a||3===a||4===a?"sata": "sati";case"dd":return d+=1===a?"dan": "dana";case"MM":return d+=1===a?"mjesec": 2===a||3===a||4===a?"mjeseca": "mjeseci";case"yy":return d+=1===a?"godina": 2===a||3===a||4===a?"godine": "godina"
        }
    }function Kd(a,b,c,d){var e=a;switch(c){case"s":return d||b?"n??h??ny m??sodperc": "n??h??ny m??sodperce";case"m":return"egy"+(d||b?" perc": " perce");case"mm":return e+(d||b?" perc": " perce");case"h":return"egy"+(d||b?" ??ra": " ??r??ja");case"hh":return e+(d||b?" ??ra": " ??r??ja");case"d":return"egy"+(d||b?" nap": " napja");case"dd":return e+(d||b?" nap": " napja");case"M":return"egy"+(d||b?" h??nap": " h??napja");case"MM":return e+(d||b?" h??nap": " h??napja");case"y":return"egy"+(d||b?" ??v": " ??ve");case"yy":return e+(d||b?" ??v": " ??ve")
        }return""
    }function Ld(a){return(a?"": "[m??lt] ")+"["+ih[this.day()
        ]+"] LT[-kor]"
    }
    //! moment.js locale configuration
    //! locale : Icelandic [is]
    //! author : Hinrik ??rn Sigur??sson : https://github.com/hinrik
function Md(a){return a%100===11||a%10!==1
    }function Nd(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"nokkrar sek??ndur": "nokkrum sek??ndum";case"m":return b?"m??n??ta": "m??n??tu";case"mm":return Md(a)?e+(b||d?"m??n??tur": "m??n??tum"):b?e+"m??n??ta":e+"m??n??tu";case"hh":return Md(a)?e+(b||d?"klukkustundir": "klukkustundum"):e+"klukkustund";case"d":return b?"dagur":d?"dag": "degi";case"dd":return Md(a)?b?e+"dagar":e+(d?"daga": "d??gum"):b?e+"dagur":e+(d?"dag": "degi");case"M":return b?"m??nu??ur":d?"m??nu??": "m??nu??i";case"MM":return Md(a)?b?e+"m??nu??ir":e+(d?"m??nu??i": "m??nu??um"):b?e+"m??nu??ur":e+(d?"m??nu??": "m??nu??i");case"y":return b||d?"??r": "??ri";case"yy":return Md(a)?e+(b||d?"??r": "??rum"):e+(b||d?"??r": "??ri")
        }
    }
    //! moment.js locale configuration
    //! locale : Luxembourgish [lb]
    //! author : mweimerskirch : https://github.com/mweimerskirch
    //! author : David Raison : https://github.com/kwisatz
function Od(a,b,c,d){var e={m: [
                "eng Minutt",
                "enger Minutt"
            ],h: [
                "eng Stonn",
                "enger Stonn"
            ],d: [
                "een Dag",
                "engem Dag"
            ],M: [
                "ee Mount",
                "engem Mount"
            ],y: [
                "ee Joer",
                "engem Joer"
            ]
        };return b?e[c
        ][
            0
        ]:e[c
        ][
            1
        ]
    }function Pd(a){var b=a.substr(0,a.indexOf(" "));return Rd(b)?"a "+a: "an "+a
    }function Qd(a){var b=a.substr(0,a.indexOf(" "));return Rd(b)?"viru "+a: "virun "+a
    }function Rd(a){if(a=parseInt(a,
        10),isNaN(a))return!1;if(a<0)return!0;if(a<10)return 4<=a&&a<=7;if(a<100){var b=a%10,c=a/10;return Rd(0===b?c:b)
        }if(a<1e4){for(;a>=10;)a/=10;return Rd(a)
        }return a/=1e3,Rd(a)
    }function Sd(a,b,c,d){return b?"kelios sekund??s":d?"keli?? sekund??i??": "kelias sekundes"
    }function Td(a,b,c,d){return b?Vd(c)[
            0
        ]:d?Vd(c)[
            1
        ]:Vd(c)[
            2
        ]
    }function Ud(a){return a%10===0||a>10&&a<20
    }function Vd(a){return nh[a
        ].split("_")
    }function Wd(a,b,c,d){var e=a+" ";return 1===a?e+Td(a,b,c[
            0
        ],d):b?e+(Ud(a)?Vd(c)[
            1
        ]:Vd(c)[
            0
        ]):d?e+Vd(c)[
            1
        ]:e+(Ud(a)?Vd(c)[
            1
        ]:Vd(c)[
            2
        ])
    }function Xd(a,b,c){return c?b%10===1&&b%100!==11?a[
            2
        ]:a[
            3
        ]:b%10===1&&b%100!==11?a[
            0
        ]:a[
            1
        ]
    }function Yd(a,b,c){return a+" "+Xd(oh[c
        ],a,b)
    }function Zd(a,b,c){return Xd(oh[c
        ],a,b)
    }function $d(a,b){return b?"da??as sekundes": "da????m sekund??m"
    }function _d(a,b,c,d){var e="";if(b)switch(c){case"s":e="???????????? ???????????????";break;case"m":e="?????? ???????????????";break;case"mm":e="%d ??????????????????";break;case"h":e="?????? ?????????";break;case"hh":e="%d ?????????";break;case"d":e="?????? ????????????";break;case"dd":e="%d ????????????";break;case"M":e="?????? ???????????????";break;case"MM":e="%d ???????????????";break;case"y":e="?????? ????????????";break;case"yy":e="%d ???????????????"
        }else switch(c){case"s":e="???????????? ?????????????????????";break;case"m":e="????????? ??????????????????";break;case"mm":e="%d ?????????????????????";break;case"h":e="????????? ????????????";break;case"hh":e="%d ???????????????";break;case"d":e="????????? ???????????????";break;case"dd":e="%d ??????????????????";break;case"M":e="????????? ?????????????????????";break;case"MM":e="%d ????????????????????????";break;case"y":e="????????? ???????????????";break;case"yy":e="%d ??????????????????"
        }return e.replace(/%d/i,a)
    }function ae(a){return a%10<5&&a%10>1&&~~(a/10)%10!==1
    }function be(a,b,c){var d=a+" ";switch(c){case"m":return b?"minuta": "minut??";case"mm":return d+(ae(a)?"minuty": "minut");case"h":return b?"godzina": "godzin??";case"hh":return d+(ae(a)?"godziny": "godzin");case"MM":return d+(ae(a)?"miesi??ce": "miesi??cy");case"yy":return d+(ae(a)?"lata": "lat")
        }
    }
    //! moment.js locale configuration
    //! locale : Romanian [ro]
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly
function ce(a,b,c){var d={mm: "minute",hh: "ore",dd: "zile",MM: "luni",yy: "ani"
        },e=" ";return(a%100>=20||a>=100&&a%100===0)&&(e=" de "),a+e+d[c
        ]
    }
    //! moment.js locale configuration
    //! locale : Russian [ru]
    //! author : Viktorminator : https://github.com/Viktorminator
    //! Author : Menelion Elens??le : https://github.com/Oire
    //! author : ?????????????????? ???????? : https://github.com/socketpair
function de(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[
            0
        ]:b%10>=2&&b%10<=4&&(b%100<10||b%100>=20)?c[
            1
        ]:c[
            2
        ]
    }function ee(a,b,c){var d={mm:b?"????????????_????????????_??????????": "????????????_????????????_??????????",hh: "??????_????????_??????????",dd: "????????_??????_????????",MM: "??????????_????????????_??????????????",yy: "??????_????????_??????"
        };return"m"===c?b?"????????????": "????????????":a+" "+de(d[c
        ],+a)
    }function fe(a){return a>1&&a<5
    }function ge(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"p??r sek??nd": "p??r sekundami";case"m":return b?"min??ta":d?"min??tu": "min??tou";case"mm":return b||d?e+(fe(a)?"min??ty": "min??t"):e+"min??tami";break;case"h":return b?"hodina":d?"hodinu": "hodinou";case"hh":return b||d?e+(fe(a)?"hodiny": "hod??n"):e+"hodinami";break;case"d":return b||d?"de??": "d??om";case"dd":return b||d?e+(fe(a)?"dni": "dn??"):e+"d??ami";break;case"M":return b||d?"mesiac": "mesiacom";case"MM":return b||d?e+(fe(a)?"mesiace": "mesiacov"):e+"mesiacmi";break;case"y":return b||d?"rok": "rokom";case"yy":return b||d?e+(fe(a)?"roky": "rokov"):e+"rokmi"
        }
    }
    //! moment.js locale configuration
    //! locale : Slovenian [sl]
    //! author : Robert Sedov??ek : https://github.com/sedovsek
function he(a,b,c,d){var e=a+" ";switch(c){case"s":return b||d?"nekaj sekund": "nekaj sekundami";case"m":return b?"ena minuta": "eno minuto";case"mm":return e+=1===a?b?"minuta": "minuto": 2===a?b||d?"minuti": "minutama":a<5?b||d?"minute": "minutami":b||d?"minut": "minutami";case"h":return b?"ena ura": "eno uro";case"hh":return e+=1===a?b?"ura": "uro": 2===a?b||d?"uri": "urama":a<5?b||d?"ure": "urami":b||d?"ur": "urami";case"d":return b||d?"en dan": "enim dnem";case"dd":return e+=1===a?b||d?"dan": "dnem": 2===a?b||d?"dni": "dnevoma":b||d?"dni": "dnevi";case"M":return b||d?"en mesec": "enim mesecem";case"MM":return e+=1===a?b||d?"mesec": "mesecem": 2===a?b||d?"meseca": "mesecema":a<5?b||d?"mesece": "meseci":b||d?"mesecev": "meseci";case"y":return b||d?"eno leto": "enim letom";case"yy":return e+=1===a?b||d?"leto": "letom": 2===a?b||d?"leti": "letoma":a<5?b||d?"leta": "leti":b||d?"let": "leti"
        }
    }function ie(a){var b=a;return b=a.indexOf("jaj")!==-1?b.slice(0,
        -3)+"leS":a.indexOf("jar")!==-1?b.slice(0,
        -3)+"waQ":a.indexOf("DIS")!==-1?b.slice(0,
        -3)+"nem":b+" pIq"
    }function je(a){var b=a;return b=a.indexOf("jaj")!==-1?b.slice(0,
        -3)+"Hu???":a.indexOf("jar")!==-1?b.slice(0,
        -3)+"wen":a.indexOf("DIS")!==-1?b.slice(0,
        -3)+"ben":b+" ret"
    }function ke(a,b,c,d){var e=le(a);switch(c){case"mm":return e+" tup";case"hh":return e+" rep";case"dd":return e+" jaj";case"MM":return e+" jar";case"yy":return e+" DIS"
        }
    }function le(a){var b=Math.floor(a%1e3/100),c=Math.floor(a%100/10),d=a%10,e="";return b>0&&(e+=Rh[b
        ]+"vatlh"),c>0&&(e+=(""!==e?" ": "")+Rh[c
        ]+"maH"),d>0&&(e+=(""!==e?" ": "")+Rh[d
        ]),
        ""===e?"pagh":e
    }function me(a,b,c,d){var e={s: [
                "viensas secunds",
                "'iensas secunds"
            ],m: [
                "'n m??ut",
                "'iens m??ut"
            ],mm: [a+" m??uts",
                ""+a+" m??uts"
            ],h: [
                "'n ??ora",
                "'iensa ??ora"
            ],hh: [a+" ??oras",
                ""+a+" ??oras"
            ],d: [
                "'n ziua",
                "'iensa ziua"
            ],dd: [a+" ziuas",
                ""+a+" ziuas"
            ],M: [
                "'n mes",
                "'iens mes"
            ],MM: [a+" mesen",
                ""+a+" mesen"
            ],y: [
                "'n ar",
                "'iens ar"
            ],yy: [a+" ars",
                ""+a+" ars"
            ]
        };return d?e[c
        ][
            0
        ]:b?e[c
        ][
            0
        ]:e[c
        ][
            1
        ]
    }
    //! moment.js locale configuration
    //! locale : Ukrainian [uk]
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion Elens??le : https://github.com/Oire
function ne(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[
            0
        ]:b%10>=2&&b%10<=4&&(b%100<10||b%100>=20)?c[
            1
        ]:c[
            2
        ]
    }function oe(a,b,c){var d={mm:b?"??????????????_??????????????_????????????": "??????????????_??????????????_????????????",hh:b?"????????????_????????????_??????????": "????????????_????????????_??????????",dd: "????????_??????_????????",MM: "????????????_????????????_??????????????",yy: "??????_????????_??????????"
        };return"m"===c?b?"??????????????": "??????????????": "h"===c?b?"????????????": "????????????":a+" "+ne(d[c
        ],+a)
    }function pe(a,b){var c={nominative: "????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),accusative: "????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),genitive: "????????????_??????????????????_????????????????_????????????_????????????????_?????????????????_????????????".split("_")
        };if(!a)return c.nominative;var d=/(\[
            [????????
            ]\
        ]) ?dddd/.test(b)?"accusative":/\[?(?:??????????????|??????????????????)? ?\
        ] ?dddd/.test(b)?"genitive": "nominative";return c[d
        ][a.day()
        ]
    }function qe(a){return function(){return a+"??"+(11===this.hours()?"??": "")+"] LT"
        }
    }var re,se;se=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d
        ],d,b))return!0;return!1
    };var te=se,ue=a.momentProperties=[],ve=!1,we={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var xe;xe=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c
    };var ye,ze=xe,Ae={sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"
    },Be={LTS: "h:mm:ss A",LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D, YYYY",LLL: "MMMM D, YYYY h:mm A",LLLL: "dddd, MMMM D, YYYY h:mm A"
    },Ce="Invalid date",De="%d",Ee=/\d{
        1,
        2
    }/,Fe={future: "in %s",past: "%s ago",s: "a few seconds",ss: "%d seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"
    },Ge={},He={},Ie=/(\[
        [^\[]*\
        ])|(\\)?([Hh
        ]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w
        ]?|W[o|W
        ]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{
            1,
            9
        }|x|X|zz?|ZZ?|.)/g,Je=/(\[
            [^\[]*\
            ])|(\\)?(LTS|LT|LL?L?L?|l{
                1,
                4
            })/g,Ke={},Le={},Me=/\d/,Ne=/\d\d/,Oe=/\d{
                3
            }/,Pe=/\d{
                4
            }/,Qe=/[+-
            ]?\d{
                6
            }/,Re=/\d\d?/,Se=/\d\d\d\d?/,Te=/\d\d\d\d\d\d?/,Ue=/\d{
                1,
                3
            }/,Ve=/\d{
                1,
                4
            }/,We=/[+-
            ]?\d{
                1,
                6
            }/,Xe=/\d+/,Ye=/[+-
            ]?\d+/,Ze=/Z|[+-
            ]\d\d:?\d\d/gi,$e=/Z|[+-
            ]\d\d(?: :?\d\d)?/gi,_e=/[+-
            ]?\d+(\.\d{
                1,
                3
            })?/,af=/[
                0-9
            ]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF
            ]+|[\u0600-\u06FF\/
            ]+(\s*?[\u0600-\u06FF
            ]+){
                1,
                2
            }/i,bf={},cf={},df=0,ef=1,ff=2,gf=3,hf=4,jf=5,kf=6,lf=7,mf=8;ye=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b
                ]===a)return b;return-1
            };var nf=ye;U("M",
            [
                "MM",
                2
            ],
            "Mo",function(){return this.month()+1
            }),U("MMM",
            0,
            0,function(a){return this.localeData().monthsShort(this,a)
            }),U("MMMM",
            0,
            0,function(a){return this.localeData().months(this,a)
            }),J("month",
            "M"),M("month",
            8),Z("M",Re),Z("MM",Re,Ne),Z("MMM",function(a,b){return b.monthsShortRegex(a)
            }),Z("MMMM",function(a,b){return b.monthsRegex(a)
            }),ba([
                "M",
                "MM"
            ],function(a,b){b[ef
                ]=u(a)-1
            }),ba([
                "MMM",
                "MMMM"
            ],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[ef
                ]=e:n(c).invalidMonth=a
            });var of=/D[oD
            ]?(\[
                [^\[\
                    ]
                ]*\
            ]|\s)+MMMM?/,pf="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qf="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),rf=af,sf=af;U("Y",
            0,
            0,function(){var a=this.year();return a<=9999?""+a: "+"+a
            }),U(0,
            [
                "YY",
                2
            ],
            0,function(){return this.year()%100
            }),U(0,
            [
                "YYYY",
                4
            ],
            0,
            "year"),U(0,
            [
                "YYYYY",
                5
            ],
            0,
            "year"),U(0,
            [
                "YYYYYY",
                6,!0
            ],
            0,
            "year"),J("year",
            "y"),M("year",
            1),Z("Y",Ye),Z("YY",Re,Ne),Z("YYYY",Ve,Pe),Z("YYYYY",We,Qe),Z("YYYYYY",We,Qe),ba([
                "YYYYY",
                "YYYYYY"
            ],df),ba("YYYY",function(b,c){c[df
                ]=2===b.length?a.parseTwoDigitYear(b):u(b)
            }),ba("YY",function(b,c){c[df
                ]=a.parseTwoDigitYear(b)
            }),ba("Y",function(a,b){b[df
                ]=parseInt(a,
                10)
            }),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900: 2e3)
            };var tf=O("FullYear",!0);U("w",
            [
                "ww",
                2
            ],
            "wo",
            "week"),U("W",
            [
                "WW",
                2
            ],
            "Wo",
            "isoWeek"),J("week",
            "w"),J("isoWeek",
            "W"),M("week",
            5),M("isoWeek",
            5),Z("w",Re),Z("ww",Re,Ne),Z("W",Re),Z("WW",Re,Ne),ca([
                "w",
                "ww",
                "W",
                "WW"
            ],function(a,b,c,d){b[d.substr(0,
                    1)
                ]=u(a)
            });var uf={dow: 0,doy: 6
            };U("d",
            0,
            "do",
            "day"),U("dd",
            0,
            0,function(a){return this.localeData().weekdaysMin(this,a)
            }),U("ddd",
            0,
            0,function(a){return this.localeData().weekdaysShort(this,a)
            }),U("dddd",
            0,
            0,function(a){return this.localeData().weekdays(this,a)
            }),U("e",
            0,
            0,
            "weekday"),U("E",
            0,
            0,
            "isoWeekday"),J("day",
            "d"),J("weekday",
            "e"),J("isoWeekday",
            "E"),M("day",
            11),M("weekday",
            11),M("isoWeekday",
            11),Z("d",Re),Z("e",Re),Z("E",Re),Z("dd",function(a,b){return b.weekdaysMinRegex(a)
            }),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)
            }),Z("dddd",function(a,b){return b.weekdaysRegex(a)
            }),ca([
                "dd",
                "ddd",
                "dddd"
            ],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a
            }),ca([
                "d",
                "e",
                "E"
            ],function(a,b,c,d){b[d
                ]=u(a)
            });var vf="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),wf="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xf="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),yf=af,zf=af,Af=af;U("H",
            [
                "HH",
                2
            ],
            0,
            "hour"),U("h",
            [
                "hh",
                2
            ],
            0,Ra),U("k",
            [
                "kk",
                2
            ],
            0,Sa),U("hmm",
            0,
            0,function(){return""+Ra.apply(this)+T(this.minutes(),
                2)
            }),U("hmmss",
            0,
            0,function(){return""+Ra.apply(this)+T(this.minutes(),
                2)+T(this.seconds(),
                2)
            }),U("Hmm",
            0,
            0,function(){return""+this.hours()+T(this.minutes(),
                2)
            }),U("Hmmss",
            0,
            0,function(){return""+this.hours()+T(this.minutes(),
                2)+T(this.seconds(),
                2)
            }),Ta("a",!0),Ta("A",!1),J("hour",
            "h"),M("hour",
            13),Z("a",Ua),Z("A",Ua),Z("H",Re),Z("h",Re),Z("k",Re),Z("HH",Re,Ne),Z("hh",Re,Ne),Z("kk",Re,Ne),Z("hmm",Se),Z("hmmss",Te),Z("Hmm",Se),Z("Hmmss",Te),ba([
                "H",
                "HH"
            ],gf),ba([
                "k",
                "kk"
            ],function(a,b,c){var d=u(a);b[gf
                ]=24===d?0:d
            }),ba([
                "a",
                "A"
            ],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a
            }),ba([
                "h",
                "hh"
            ],function(a,b,c){b[gf
                ]=u(a),n(c).bigHour=!0
            }),ba("hmm",function(a,b,c){var d=a.length-2;b[gf
                ]=u(a.substr(0,d)),b[hf
                ]=u(a.substr(d)),n(c).bigHour=!0
            }),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[gf
                ]=u(a.substr(0,d)),b[hf
                ]=u(a.substr(d,
                2)),b[jf
                ]=u(a.substr(e)),n(c).bigHour=!0
            }),ba("Hmm",function(a,b,c){var d=a.length-2;b[gf
                ]=u(a.substr(0,d)),b[hf
                ]=u(a.substr(d))
            }),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[gf
                ]=u(a.substr(0,d)),b[hf
                ]=u(a.substr(d,
                2)),b[jf
                ]=u(a.substr(e))
            });var Bf,Cf=/[ap
            ]\.?m?\.?/i,Df=O("Hours",!0),Ef={calendar:Ae,longDateFormat:Be,invalidDate:Ce,ordinal:De,dayOfMonthOrdinalParse:Ee,relativeTime:Fe,months:pf,monthsShort:qf,week:uf,weekdays:vf,weekdaysMin:xf,weekdaysShort:wf,meridiemParse:Cf
            },Ff={},Gf={},Hf=/^\s*((?: [+-
            ]\d{
                6
            }|\d{
                4
            })-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?: :\d\d(?: :\d\d(?: [.,
            ]\d+)?)?)?)([\+\-
            ]\d\d(?: :?\d\d)?|\s*Z)?)?$/,If=/^\s*((?: [+-
            ]\d{
                6
            }|\d{
                4
            })(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?: [.,
            ]\d+)?)?)?)([\+\-
            ]\d\d(?: :?\d\d)?|\s*Z)?)?$/,Jf=/Z|[+-
            ]\d\d(?: :?\d\d)?/,Kf=[
                [
                    "YYYYYY-MM-DD",/[+-
                    ]\d{
                        6
                    }-\d\d-\d\d/
                ],
                [
                    "YYYY-MM-DD",/\d{
                        4
                    }-\d\d-\d\d/
                ],
                [
                    "GGGG-[W]WW-E",/\d{
                        4
                    }-W\d\d-\d/
                ],
                [
                    "GGGG-[W]WW",/\d{
                        4
                    }-W\d\d/,!1
                ],
                [
                    "YYYY-DDD",/\d{
                        4
                    }-\d{
                        3
                    }/
                ],
                [
                    "YYYY-MM",/\d{
                        4
                    }-\d\d/,!1
                ],
                [
                    "YYYYYYMMDD",/[+-
                    ]\d{
                        10
                    }/
                ],
                [
                    "YYYYMMDD",/\d{
                        8
                    }/
                ],
                [
                    "GGGG[W]WWE",/\d{
                        4
                    }W\d{
                        3
                    }/
                ],
                [
                    "GGGG[W]WW",/\d{
                        4
                    }W\d{
                        2
                    }/,!1
                ],
                [
                    "YYYYDDD",/\d{
                        7
                    }/
                ]
            ],Lf=[
                [
                    "HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/
                ],
                [
                    "HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/
                ],
                [
                    "HH:mm:ss",/\d\d:\d\d:\d\d/
                ],
                [
                    "HH:mm",/\d\d:\d\d/
                ],
                [
                    "HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/
                ],
                [
                    "HHmmss,SSSS",/\d\d\d\d\d\d,\d+/
                ],
                [
                    "HHmmss",/\d\d\d\d\d\d/
                ],
                [
                    "HHmm",/\d\d\d\d/
                ],
                [
                    "HH",/\d\d/
                ]
            ],Mf=/^\/?Date\((\-?\d+)/i,Nf=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP
            ][SD
            ]T|[A-IK-Za-ik-z
            ]|[+-
            ]\d{
                4
            }))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC": ""))
            }),a.ISO_8601=function(){},a.RFC_2822=function(){};var Of=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()
            }),Pf=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()
            }),Qf=function(){return Date.now?Date.now():+new Date
            },Rf=[
                "year",
                "quarter",
                "month",
                "week",
                "day",
                "hour",
                "minute",
                "second",
                "millisecond"
            ];Db("Z",
            ":"),Db("ZZ",
            ""),Z("Z",$e),Z("ZZ",$e),ba([
                "Z",
                "ZZ"
            ],function(a,b,c){c._useUTC=!0,c._tzm=Eb($e,a)
            });var Sf=/([\+\-
            ]|\d\d)/gi;a.updateOffset=function(){};var Tf=/^(\-)?(?:(\d*)[.
            ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Uf=/^(-)?P(?:(-?[
                0-9,.
            ]*)Y)?(?:(-?[
                0-9,.
            ]*)M)?(?:(-?[
                0-9,.
            ]*)W)?(?:(-?[
                0-9,.
            ]*)D)?(?:T(?:(-?[
                0-9,.
            ]*)H)?(?:(-?[
                0-9,.
            ]*)M)?(?:(-?[
                0-9,.
            ]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Vf=Wb(1,
            "add"),Wf=Wb(-1,
            "subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xf=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)
            });U(0,
            [
                "gg",
                2
            ],
            0,function(){return this.weekYear()%100
            }),U(0,
            [
                "GG",
                2
            ],
            0,function(){return this.isoWeekYear()%100
            }),Dc("gggg",
            "weekYear"),Dc("ggggg",
            "weekYear"),Dc("GGGG",
            "isoWeekYear"),Dc("GGGGG",
            "isoWeekYear"),J("weekYear",
            "gg"),J("isoWeekYear",
            "GG"),M("weekYear",
            1),M("isoWeekYear",
            1),Z("G",Ye),Z("g",Ye),Z("GG",Re,Ne),Z("gg",Re,Ne),Z("GGGG",Ve,Pe),Z("gggg",Ve,Pe),Z("GGGGG",We,Qe),Z("ggggg",We,Qe),ca([
                "gggg",
                "ggggg",
                "GGGG",
                "GGGGG"
            ],function(a,b,c,d){b[d.substr(0,
                    2)
                ]=u(a)
            }),ca([
                "gg",
                "GG"
            ],function(b,c,d,e){c[e
                ]=a.parseTwoDigitYear(b)
            }),U("Q",
            0,
            "Qo",
            "quarter"),J("quarter",
            "Q"),M("quarter",
            7),Z("Q",Me),ba("Q",function(a,b){b[ef
                ]=3*(u(a)-1)
            }),U("D",
            [
                "DD",
                2
            ],
            "Do",
            "date"),J("date",
            "D"),M("date",
            9),Z("D",Re),Z("DD",Re,Ne),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient
            }),ba([
                "D",
                "DD"
            ],ff),ba("Do",function(a,b){b[ff
                ]=u(a.match(Re)[
                    0
                ],
                10)
            });var Yf=O("Date",!0);U("DDD",
            [
                "DDDD",
                3
            ],
            "DDDo",
            "dayOfYear"),J("dayOfYear",
            "DDD"),M("dayOfYear",
            4),Z("DDD",Ue),Z("DDDD",Oe),ba([
                "DDD",
                "DDDD"
            ],function(a,b,c){c._dayOfYear=u(a)
            }),U("m",
            [
                "mm",
                2
            ],
            0,
            "minute"),J("minute",
            "m"),M("minute",
            14),Z("m",Re),Z("mm",Re,Ne),ba([
                "m",
                "mm"
            ],hf);var Zf=O("Minutes",!1);U("s",
            [
                "ss",
                2
            ],
            0,
            "second"),J("second",
            "s"),M("second",
            15),Z("s",Re),Z("ss",Re,Ne),ba([
                "s",
                "ss"
            ],jf);var $f=O("Seconds",!1);U("S",
            0,
            0,function(){return~~(this.millisecond()/100)
            }),U(0,
            [
                "SS",
                2
            ],
            0,function(){return~~(this.millisecond()/10)
            }),U(0,
            [
                "SSS",
                3
            ],
            0,
            "millisecond"),U(0,
            [
                "SSSS",
                4
            ],
            0,function(){return 10*this.millisecond()
            }),U(0,
            [
                "SSSSS",
                5
            ],
            0,function(){return 100*this.millisecond()
            }),U(0,
            [
                "SSSSSS",
                6
            ],
            0,function(){return 1e3*this.millisecond()
            }),U(0,
            [
                "SSSSSSS",
                7
            ],
            0,function(){return 1e4*this.millisecond()
            }),U(0,
            [
                "SSSSSSSS",
                8
            ],
            0,function(){return 1e5*this.millisecond()
            }),U(0,
            [
                "SSSSSSSSS",
                9
            ],
            0,function(){return 1e6*this.millisecond()
            }),J("millisecond",
            "ms"),M("millisecond",
            16),Z("S",Ue,Me),Z("SS",Ue,Ne),Z("SSS",Ue,Oe);var _f;for(_f="SSSS";_f.length<=9;_f+="S")Z(_f,Xe);for(_f="S";_f.length<=9;_f+="S")ba(_f,Mc);var ag=O("Milliseconds",!1);U("z",
            0,
            0,
            "zoneAbbr"),U("zz",
            0,
            0,
            "zoneName");var bg=r.prototype;bg.add=Vf,bg.calendar=Zb,bg.clone=$b,bg.diff=fc,bg.endOf=sc,bg.format=kc,bg.from=lc,bg.fromNow=mc,bg.to=nc,bg.toNow=oc,bg.get=R,bg.invalidAt=Bc,bg.isAfter=_b,bg.isBefore=ac,bg.isBetween=bc,bg.isSame=cc,bg.isSameOrAfter=dc,bg.isSameOrBefore=ec,bg.isValid=zc,bg.lang=Xf,bg.locale=pc,bg.localeData=qc,bg.max=Pf,bg.min=Of,bg.parsingFlags=Ac,bg.set=S,bg.startOf=rc,bg.subtract=Wf,bg.toArray=wc,bg.toObject=xc,bg.toDate=vc,bg.toISOString=ic,bg.inspect=jc,bg.toJSON=yc,bg.toString=hc,bg.unix=uc,bg.valueOf=tc,bg.creationData=Cc,bg.year=tf,bg.isLeapYear=ra,bg.weekYear=Ec,bg.isoWeekYear=Fc,bg.quarter=bg.quarters=Kc,bg.month=ka,bg.daysInMonth=la,bg.week=bg.weeks=Ba,bg.isoWeek=bg.isoWeeks=Ca,bg.weeksInYear=Hc,bg.isoWeeksInYear=Gc,bg.date=Yf,bg.day=bg.days=Ka,bg.weekday=La,bg.isoWeekday=Ma,bg.dayOfYear=Lc,bg.hour=bg.hours=Df,bg.minute=bg.minutes=Zf,bg.second=bg.seconds=$f,bg.millisecond=bg.milliseconds=ag,bg.utcOffset=Hb,bg.utc=Jb,bg.local=Kb,bg.parseZone=Lb,bg.hasAlignedHourOffset=Mb,bg.isDST=Nb,bg.isLocal=Pb,bg.isUtcOffset=Qb,bg.isUtc=Rb,bg.isUTC=Rb,bg.zoneAbbr=Nc,bg.zoneName=Oc,bg.dates=x("dates accessor is deprecated. Use date instead.",Yf),bg.months=x("months accessor is deprecated. Use month instead",ka),bg.years=x("years accessor is deprecated. Use year instead",tf),bg.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bg.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cg=C.prototype;cg.calendar=D,cg.longDateFormat=E,cg.invalidDate=F,cg.ordinal=G,cg.preparse=Rc,cg.postformat=Rc,cg.relativeTime=H,cg.pastFuture=I,cg.set=A,cg.months=fa,cg.monthsShort=ga,cg.monthsParse=ia,cg.monthsRegex=na,cg.monthsShortRegex=ma,cg.week=ya,cg.firstDayOfYear=Aa,cg.firstDayOfWeek=za,cg.weekdays=Fa,cg.weekdaysMin=Ha,cg.weekdaysShort=Ga,cg.weekdaysParse=Ja,cg.weekdaysRegex=Na,cg.weekdaysShortRegex=Oa,cg.weekdaysMinRegex=Pa,cg.isPM=Va,cg.meridiem=Wa,$a("en",
            {dayOfMonthOrdinalParse:/\d{
                    1,
                    2
                }(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th": 1===b?"st": 2===b?"nd": 3===b?"rd": "th";return a+c
                }
            }),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var dg=Math.abs,eg=id("ms"),fg=id("s"),gg=id("m"),hg=id("h"),ig=id("d"),jg=id("w"),kg=id("M"),lg=id("y"),mg=kd("milliseconds"),ng=kd("seconds"),og=kd("minutes"),pg=kd("hours"),qg=kd("days"),rg=kd("months"),sg=kd("years"),tg=Math.round,ug={ss: 44,s: 45,m: 45,h: 22,d: 26,M: 11
            },vg=Math.abs,wg=Ab.prototype;wg.isValid=yb,wg.abs=$c,wg.add=ad,wg.subtract=bd,wg.as=gd,wg.asMilliseconds=eg,wg.asSeconds=fg,wg.asMinutes=gg,wg.asHours=hg,wg.asDays=ig,wg.asWeeks=jg,wg.asMonths=kg,wg.asYears=lg,wg.valueOf=hd,wg._bubble=dd,wg.get=jd,wg.milliseconds=mg,wg.seconds=ng,wg.minutes=og,wg.hours=pg,wg.days=qg,wg.weeks=ld,wg.months=rg,wg.years=sg,wg.humanize=qd,wg.toISOString=rd,wg.toString=rd,wg.toJSON=rd,wg.locale=pc,wg.localeData=qc,wg.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),wg.lang=Xf,U("X",
            0,
            0,
            "unix"),U("x",
            0,
            0,
            "valueOf"),Z("x",Ye),Z("X",_e),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,
                10))
            }),ba("x",function(a,b,c){c._d=new Date(u(a))
            }),
            //! moment.js
            //! version : 2.18.1
            //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
            //! license : MIT
            //! momentjs.com
a.version="2.18.1",b(tb),a.fn=bg,a.min=vb,a.max=wb,a.now=Qf,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bg,
            //! moment.js locale configuration
            //! locale : Afrikaans [af]
            //! author : Werner Mollentze : https://github.com/wernerm

            //! moment.js locale configuration
                    //! locale : Uzbek Latin [uz-latn]
                    //! author : Rasulbek Mirzayev : github.com/Rasulbeeek
                    //! moment.js locale configuration
                    //! locale : Uzbek [uz]
                    //! author : Sardor Muminov : https://github.com/muminoff
                    //! moment.js locale configuration
                    //! locale : Vietnamese [vi]
                    //! author : Bang Nguyen : https://github.com/bangnk
                    //! moment.js locale configuration
                    //! locale : Pseudo [x-pseudo]
                    //! author : Andrew Hood : https://github.com/andrewhood125
                    //! moment.js locale configuration
                    //! locale : Yoruba Nigeria [yo]
                    //! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
                    //! moment.js locale configuration
                    //! locale : Chinese (China) [zh-cn]
                    //! author : suupic : https://github.com/suupic
                    //! author : Zeno Zeng : https://github.com/zenozeng
                    //! moment.js locale configuration
                    //! locale : Chinese (Hong Kong) [zh-hk]
                    //! author : Ben : https://github.com/ben-lin
                    //! author : Chris Lam : https://github.com/hehachris
                    //! author : Konstantin : https://github.com/skfd
                    //! moment.js locale configuration
                    //! locale : Chinese (Taiwan) [zh-tw]
                    //! author : Ben : https://github.com/ben-lin
                    //! author : Chris Lam : https://github.com/hehachris
return a.defineLocale("zh-tw",
                    {months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),weekdaysMin: "???_???_???_???_???_???_???".split("_"),longDateFormat: {LT: "HH:mm",LTS: "HH:mm:ss",L: "YYYY???MMMD???",LL: "YYYY???MMMD???",LLL: "YYYY???MMMD??? HH:mm",LLLL: "YYYY???MMMD???dddd HH:mm",l: "YYYY???MMMD???",ll: "YYYY???MMMD???",lll: "YYYY???MMMD??? HH:mm",llll: "YYYY???MMMD???dddd HH:mm"
                        },meridiemParse:/??????|??????|??????|??????|??????|??????/,meridiemHour:function(a,b){return 12===a&&(a=0),
                            "??????"===b||"??????"===b||"??????"===b?a: "??????"===b?a>=11?a:a+12: "??????"===b||"??????"===b?a+12:void 0
                        },meridiem:function(a,b,c){var d=100*a+b;return d<600?"??????":d<900?"??????":d<1130?"??????":d<1230?"??????":d<1800?"??????": "??????"
                        },calendar: {sameDay: "[??????]LT",nextDay: "[??????]LT",nextWeek: "[???]ddddLT",lastDay: "[??????]LT",lastWeek: "[???]ddddLT",sameElse: "L"
                        },dayOfMonthOrdinalParse:/\d{
                            1,
                            2
                        }(???|???|???)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"???";case"M":return a+"???";case"w":case"W":return a+"???";default:return a
                            }
                        },relativeTime: {future: "%s???",past: "%s???",s: "??????",m: "1 ??????",mm: "%d ??????",h: "1 ??????",hh: "%d ??????",d: "1 ???",dd: "%d ???",M: "1 ??????",MM: "%d ??????",y: "1 ???",yy: "%d ???"
                        }
                    }),a.locale("en"),a
                });