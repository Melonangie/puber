"use strict";function isEmpty(o){if(null==o)return!0;if(o.length>0)return!1;if(0===o.length)return!0;if("object"!==("undefined"==typeof o?"undefined":_typeof(o)))return!0;for(var t in o)if(hasOwnProperty.call(o,t))return!1;return!0}function logout(){Cookies.remove("puber"),page("/index.html")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o};console.log("'Allo 'Allo!");var hasOwnProperty=Object.prototype.hasOwnProperty;