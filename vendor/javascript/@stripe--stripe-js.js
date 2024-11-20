// @stripe/stripe-js@4.9.0 downloaded from https://ga.jspm.io/npm:@stripe/stripe-js@4.9.0/lib/index.mjs

var r="https://js.stripe.com/v3";var e=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var n="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";var t=function findScript(){var n=document.querySelectorAll('script[src^="'.concat(r,'"]'));for(var t=0;t<n.length;t++){var i=n[t];if(e.test(i.src))return i}return null};var i=function injectScript(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"";var t=document.createElement("script");t.src="".concat(r).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");i.appendChild(t);return t};var o=function registerWrapper(r,e){r&&r._registerWrapper&&r._registerWrapper({name:"stripe-js",version:"4.8.0",startTime:e})};var a=null;var l=null;var u=null;var c=function onError(r){return function(){r(new Error("Failed to load Stripe.js"))}};var s=function onLoad(r,e){return function(){window.Stripe?r(window.Stripe):e(new Error("Stripe.js not available"))}};var d=function loadScript(r){if(a!==null)return a;a=new Promise((function(e,o){if(typeof window!=="undefined"&&typeof document!=="undefined"){window.Stripe&&r&&console.warn(n);if(window.Stripe)e(window.Stripe);else try{var a=t();if(a&&r)console.warn(n);else if(a){if(a&&u!==null&&l!==null){var d;a.removeEventListener("load",u);a.removeEventListener("error",l);(d=a.parentNode)===null||d===void 0?void 0:d.removeChild(a);a=i(r)}}else a=i(r);u=s(e,o);l=c(o);a.addEventListener("load",u);a.addEventListener("error",l)}catch(r){o(r);return}}else e(null)}));return a.catch((function(r){a=null;return Promise.reject(r)}))};var v=function initStripe(r,e,n){if(r===null)return null;var t=r.apply(void 0,e);o(t,n);return t};var p;var f=false;var w=function getStripePromise(){if(p)return p;p=d(null).catch((function(r){p=null;return Promise.reject(r)}));return p};Promise.resolve().then((function(){return w()})).catch((function(r){f||console.warn(r)}));var m=function loadStripe(){for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];f=true;var t=Date.now();return w().then((function(r){return v(r,e,t)}))};export{m as loadStripe};

