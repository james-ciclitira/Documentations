webpackJsonp([35783957827783],{98:function(e,t,a){"use strict";function n(e){return e}function l(e,t,a){function l(e,t){var a=b.hasOwnProperty(t)?b[t]:null;_.hasOwnProperty(t)&&i("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,a){if(a){i("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,r=n.__reactAutoBindPairs;a.hasOwnProperty(c)&&v.mixins(e,a.mixins);for(var s in a)if(a.hasOwnProperty(s)&&s!==c){var o=a[s],u=n.hasOwnProperty(s);if(l(u,s),v.hasOwnProperty(s))v[s](e,o);else{var m=b.hasOwnProperty(s),p="function"==typeof o,E=p&&!m&&!u&&a.autobind!==!1;if(E)r.push(s,o),n[s]=o;else if(u){var h=b[s];i(m&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,s),"DEFINE_MANY_MERGED"===h?n[s]=f(n[s],o):"DEFINE_MANY"===h&&(n[s]=d(n[s],o))}else n[s]=o}}}else;}function u(e,t){if(t)for(var a in t){var n=t[a];if(t.hasOwnProperty(a)){var l=a in v;i(!l,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var r=a in e;if(r){var s=g.hasOwnProperty(a)?g[a]:null;return i("DEFINE_MANY_MERGED"===s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=f(e[a],n))}e[a]=n}}}function m(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(i(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function f(e,t){return function(){var a=e.apply(this,arguments),n=t.apply(this,arguments);if(null==a)return n;if(null==n)return a;var l={};return m(l,a),m(l,n),l}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var a=t.bind(e);return a}function E(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var n=t[a],l=t[a+1];e[n]=p(e,l)}}function h(e){var t=n(function(e,n,l){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=n,this.refs=o,this.updater=l||a,this.state=null;var r=this.getInitialState?this.getInitialState():null;i("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,N),r(t,e),r(t,w),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var l in b)t.prototype[l]||(t.prototype[l]=null);return t}var y=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)r(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=s({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=s({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=s({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},w={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return s(M.prototype,e.prototype,_),h}var r,s=a(5),o=a(35),i=a(1),c="mixins";r={},e.exports=l},159:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,n=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,o=s&&s(Object);return function i(c,u,m){if("string"!=typeof u){if(o){var f=s(u);f&&f!==o&&i(c,f,m)}var d=n(u);l&&(d=d.concat(l(u)));for(var p=0;p<d.length;++p){var E=d[p];if(!(e[E]||t[E]||m&&m[E])){var h=r(u,E);try{a(c,E,h)}catch(e){}}}return c}return c}})},5:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,o,i=a(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var u in n)r.call(n,u)&&(i[u]=n[u]);if(l){o=l(n);for(var m=0;m<o.length;m++)s.call(n,o[m])&&(i[o[m]]=n[o[m]])}}return i}},202:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),i=n(o),c=a(6),u=n(c),m=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("li",{className:"pt3 pt4-ns pb1 measure"},i.default.createElement("h1",{className:"i  f2 db mb2"},this.props.Title),i.default.createElement("h4",null," ",this.props.Description))},t}(i.default.Component);m.propTypes={Title:u.default.string.isRequired,Description:u.default.string.isRequired},t.default=m,e.exports=t.default},203:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),i=n(o),c=a(6),u=n(c),m=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("article",{className:"dt w-100 mv4 "+this.props.Color},i.default.createElement("div",{className:"dtc v-mid pb3 "+this.props.TextColor},i.default.createElement("h1",{className:" fw6 i "},this.props.Quote),i.default.createElement("cite",{className:"f6  fw6 ttu tracked i fs-normal"},this.props.Source)))},t}(i.default.Component);m.propTypes={Quote:u.default.string.isRequired,Source:u.default.string.isRequired,Color:u.default.string.isRequired,TextColor:u.default.string.isRequired},t.default=m,e.exports=t.default},13:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),i=n(o),c=a(6),u=n(c),m=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"mt4 mb2"},i.default.createElement("span",{className:"fw7 absolute brand o-60 depth",style:{fontSize:"6em",marginLeft:"-72px",marginTop:"-56px",zIndex:"-222"}},this.props.Number),i.default.createElement("h1",{style:{zIndex:"20000000"},className:"f3 pt1  f1-m f-subheadline-l"},this.props.Title))},t}(i.default.Component);m.propTypes={Number:u.default.string.isRequired,Title:u.default.string.isRequired},t.default=m,e.exports=t.default},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Colors",className:"ph3 ph5-ns mt6 overflow-auto"},r.default.createElement(o.default,{Number:"04",Title:"Colors"}),r.default.createElement("p",{className:"f5 primary lh-copy measure"},"We want to make health cared, so we use a wide range of vibrant and juicy colors."),r.default.createElement("h1",{className:"primary fw4 mt4 mb3 "},"Solid colors"),r.default.createElement("div",{className:"cf mt4"},r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-brand w-90 pv4 center h-100 grow pointer"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Brand\u2028",r.default.createElement("br",null),r.default.createElement("br",null),"#04D4BF"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-link-active w-90 pv4 center h-100 grow pointer fw8"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Actionable text\u2028",r.default.createElement("br",null),r.default.createElement("br",null)," #04D4BF"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-alert w-90 pv4 center h-100 grow pointer"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Alert",r.default.createElement("br",null),r.default.createElement("br",null),"#E94119"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-background w-90 pv4 center h-100 grow pointer"},r.default.createElement("p",{className:"tc mt3 primary fw5"},"Background",r.default.createElement("br",null),r.default.createElement("br",null),"#f5f5f5"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-primary w-90 pv4 center h-100 grow pointer"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Primary",r.default.createElement("br",null),r.default.createElement("br",null),"#353F41"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-secondary w-90 pv4 center h-100 grow pointer"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Secondary",r.default.createElement("br",null),r.default.createElement("br",null)," #7B7B7B"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-hint w-90 pv4 center h-100 grow pointer"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Hint",r.default.createElement("br",null),r.default.createElement("br",null),"#BFBFBF"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-divider w-90 pv4 center h-100 grow pointer"},r.default.createElement("p",{className:"tc mt3 primary fw5"},"Divider",r.default.createElement("br",null),r.default.createElement("br",null),"#E0E0E0")))))};t.default=i,e.exports=t.default},205:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(o.default,{Number:"10",Title:"Dividers"}),r.default.createElement("form",{className:"pa4 "},r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5 bg"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},r.default.createElement("img",{className:"pv5 center auto",src:"../img/system/Dividers.svg"})))))};t.default=i,e.exports=t.default},206:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),i=n(o),c=a(64),u=n(c),m=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("footer",{className:"pv4-ns pv2 mt4-ns mt0 pa0-ns pa3 mt4 bt b--black-10 bg-white overflow-auto"},i.default.createElement("div",{className:"mw8 db center"},i.default.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns"},i.default.createElement("h4",{className:"fw5 mb3 f7"},"CONTACT"),i.default.createElement("a",{href:"mailto:support@numilli.com",className:"link f6 dim lh-solid b db pv2 link-active"},"Email: Design@vivy.com")),i.default.createElement("article",{className:"fl w-60 dib-ns w-auto-ns mr4-m mr5-l ml5-ns ml0 mb4 pr2 pr0-ns"},i.default.createElement("h4",{className:"fw5 mb3 f7"},"NAVIGATION"),i.default.createElement("div",{className:"fl w-auto"},i.default.createElement(u.default,{className:"f6 db mt2 dim link link-active",to:"/blog"},"Blog"),i.default.createElement(u.default,{className:"f6 db mt2 dim link link-active",to:"/faq"},"FAQ")),i.default.createElement("div",{className:"fl w-auto ml3 pl3"},i.default.createElement(u.default,{className:"f6 db mt2 dim link link-active",to:"/terms"},"Terms of Service"),i.default.createElement(u.default,{className:"f6 db mt2 dim link link-active",to:"/privacy"},"Privacy Policy"))),i.default.createElement("article",{className:"fr-ns fl w-100 dib-ns w-auto-ns pr2 pr0-ns v-top"},i.default.createElement("h4",{className:"fw5 mb3 f7 mb2"},"DOWNLOAD"),i.default.createElement("a",{className:"ml4-ns ml0 fr-ns dib grow",target:"blank",href:"https://itunes.apple.com/us/genre/ios/id36?mt=8"},i.default.createElement("img",{src:"/img/app-store.svg",alt:"Download from app store"})),i.default.createElement("a",{className:"fr-ns dib grow",target:"blank",href:"https://play.google.com/store?hl=en_GB"},i.default.createElement("img",{src:"img/google.svg",alt:"Download from GooglePlay"})))))},t}(i.default.Component);t.default=m,e.exports=t.default},207:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Headers",className:"ph3 ph5-ns pt3"},r.default.createElement(o.default,{Number:"09",Title:"Headers"}),r.default.createElement("form",{className:"pa4 black-80"},r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5 bg"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},r.default.createElement("img",{className:"pv5 center auto",src:"../img/system/headers.svg"})))))};t.default=i,e.exports=t.default},208:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Icongrapghy",className:"ph3 ph5-ns mt6 "},r.default.createElement(o.default,{Number:"06",Title:"Iconography"}),r.default.createElement("div",{className:"w-50-ns w-100 dib"},r.default.createElement("h1",{className:"primary fw4"},"Iconography"),r.default.createElement("h3",{className:"primary fw4 mt5"},"Design principles"),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"Shapes are bold and geometric. Symmetry and consistency of shapes give the icons a unique quality, while keeping them simple and bold."),r.default.createElement("h3",{className:"primary fw4 mt5"},"Corners and stroke"),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"Consistent corner radiuses are key to unifying the overall system icon family. A 2dp corner radius is used on the silhouette form of the icon. Do not round the corners of strokes (shapes 2dp wide or less). Interior corners should be square. Do not round the corners of interior shapes. \u2028         Consistent stroke weights are key to unifying the overall system icon family. Maintain a 2dp width for all stroke instances, including curves, angles, and both interior and exterior strokes.")),r.default.createElement("div",{className:"w-50-ns w-100 dib v-top mt6 pl5"},r.default.createElement("img",{className:"mr6 mt3",src:"../img/icons/icon-1.svg"}),r.default.createElement("img",{className:"mt3",src:"../img/icons/icon-2.svg"}),r.default.createElement("img",{className:"mr6 mt5",src:"../img/icons/icon-3.svg"}),r.default.createElement("img",{className:"mt3",src:"../img/icons/icon-4.svg"}),r.default.createElement("img",{className:"mr6 mt5",src:"../img/icons/icon-5.svg"}),r.default.createElement("img",{className:"mt5",src:"../img/icons/icon-6.svg"})))};t.default=i,e.exports=t.default},209:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Illustrations",className:"ph3 ph5-ns mt6 mb7"},r.default.createElement("div",{className:"dib"},r.default.createElement(o.default,{Number:"07",Title:"Illustrations"}),r.default.createElement("p",{className:"f5 lh-copy measure primary mt5"},"Illustrations that make medical concepts less intimidating and easier to understand, in the mean time, also communicate emotions and feelings.",r.default.createElement("br",null),r.default.createElement("br",null),"Priorities",r.default.createElement("br",null),r.default.createElement("br",null),"• Communicate a specific topic/idea",r.default.createElement("br",null),"• Fit with where they are used",r.default.createElement("br",null),"• Use maximum 3-4 colors/tones",r.default.createElement("br",null),"• Human figures are natural. Avoid straight lines and square corners.",r.default.createElement("br",null),"• Show that Vivy is present")),r.default.createElement("img",{className:"w-40-ns w-100 dib ml4-ns ml0 mw6",src:"../img/illustrations/page-1.svg"}),r.default.createElement("div",{className:"mt4-ns mt0"},r.default.createElement("img",{className:"w-40-ns w-100 dib mw6",src:"../img/illustrations/1.svg"}),r.default.createElement("img",{className:"w-40-ns w-100 dib ml4-ns ml0 mw6",src:"../img/illustrations/3.svg"})))};t.default=i,e.exports=t.default},210:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(o.default,{Number:"11",Title:"Coming soon..."}),r.default.createElement("form",{className:"pa4 black-80"},r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5 bg"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},r.default.createElement("img",{className:"pv5 center auto",src:"../img/system/.svg"})))))};t.default=i,e.exports=t.default},211:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Logo",className:"ph3 ph5-ns pt5"},r.default.createElement(o.default,{Number:"03",Title:"Logo"}),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. A printed work which cannot be read becomes a product without purpose."),r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph4-l"},r.default.createElement("img",{className:"pv3 center auto",src:"../img/logo-complete.svg"}))),r.default.createElement("a",{className:"primary Link link dim",href:"../img/vivy_logo.zip",download:!0},"Image download "),r.default.createElement("a",{className:"primary ml3 link dim",href:"../img/logo-complete.svg",download:!0},"Vector download"),r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},r.default.createElement("img",{className:"pv5 center auto",src:"../img/logo_2.svg"}))),r.default.createElement("a",{className:"primary Link link dim",href:"../img/vivy_logo_2.zip",download:!0},"Image download "),r.default.createElement("a",{className:"primary ml3 link dim",href:"../img/logo_2.svg",download:!0},"Vector download"))};t.default=i,e.exports=t.default},212:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=a(202),c=(n(i),function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(o.default,{Number:"01",Title:"Principles"}),r.default.createElement("div",{className:"dt dt--fixed"},r.default.createElement("div",{className:"dtc ph2"},r.default.createElement("h2",{className:"mb4"},"Unified"),r.default.createElement("p",null,"Each piece is part of a greater whole and should contribute positively to the system at scale. There should be no isolated features or outliers.")),r.default.createElement("div",{className:"dtc ph2"},r.default.createElement("h2",{className:"mb4"},"Iconic"),r.default.createElement("p",null,"We’re focused when it comes to both design and functionality. Our work should speak boldly and clearly to this focus.")),r.default.createElement("div",{className:"dtc ph2"},r.default.createElement("h2",{className:"mb4"},"Conversational"),r.default.createElement("p",null,"Our use of motion breathes life into our products, and allows us to communicate with users in easily understood ways."))))});t.default=c,e.exports=t.default},213:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(o.default,{Number:"09",Title:"Rows"}),r.default.createElement("form",{className:"pa4 black-80"},r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5 bg"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},r.default.createElement("img",{className:"pv5 center auto",src:"../img/system/row-layout.svg"})))))};t.default=i,e.exports=t.default},214:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=function(){return r.default.createElement("main",{id:"Typography",className:"ph3 ph5-ns mt6"},r.default.createElement(o.default,{Number:"05",Title:"Typography"}),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"We use TT Norms, giving text in Vivy a fun and friendly feel to match our illustrations."),r.default.createElement("form",null,r.default.createElement("article",{className:"dt w-100"},r.default.createElement("div",{className:"dtc white"},r.default.createElement("img",{className:"W-100 center auto",src:"../img/system/Typography.svg"})))))};t.default=i,e.exports=t.default},215:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(13),o=n(s),i=a(203),c=n(i),u=function(){return r.default.createElement("main",{id:"Vision",className:"ph3 ph5-ns pt5"},r.default.createElement(o.default,{Number:"02",Title:"Vision & ethos"}),r.default.createElement(c.default,{Color:"",Quote:"Eat more fish, its healthy!",Source:"Dr. Tamara Radakovic"}),r.default.createElement(c.default,{Color:"",Quote:"When in doubt crash the app",Source:"Mohamed Elawadi"}),r.default.createElement(c.default,{Color:"",Quote:"Let the bugs stay there for a long time and they will become butterfly",Source:"Jiun Wu"}))};t.default=u,e.exports=t.default},218:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),s=a(64),o=(n(s),a(211)),i=n(o),c=a(204),u=n(c),m=a(214),f=n(m),d=a(208),p=n(d),E=a(209),h=n(E),y=a(212),b=n(y),g=a(215),v=n(g),N=a(207),w=n(N),_=a(213),M=n(_),D=a(205),O=n(D),T=a(210),x=n(T),P=a(206),I=n(P),j=function(){return r.default.createElement("div",null,r.default.createElement("header",null,r.default.createElement("div",{className:"cover bg-left bg-center-l overflow-auto relative"},r.default.createElement("img",{className:"w-100",src:"../img/header.svg"}))),r.default.createElement("div",null,r.default.createElement("div",{style:{width:"76%"},className:"w-100 fr dib v-top"},r.default.createElement(b.default,null),r.default.createElement(v.default,null),r.default.createElement(i.default,null),r.default.createElement(u.default,null),r.default.createElement(f.default,null),r.default.createElement(p.default,null),r.default.createElement(h.default,null),r.default.createElement(w.default,null),r.default.createElement(M.default,null),r.default.createElement(O.default,null),r.default.createElement(x.default,null),r.default.createElement(I.default,null))))};t.default=j,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-67c12182a086d22b056d.js.map