webpackJsonp([35783957827783],{98:function(e,t,a){"use strict";function l(e){return e}function n(e,t,a){function n(e,t){var a=N.hasOwnProperty(t)?N[t]:null;_.hasOwnProperty(t)&&i("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,a){if(a){i("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var l=e.prototype,r=l.__reactAutoBindPairs;a.hasOwnProperty(o)&&v.mixins(e,a.mixins);for(var s in a)if(a.hasOwnProperty(s)&&s!==o){var c=a[s],m=l.hasOwnProperty(s);if(n(m,s),v.hasOwnProperty(s))v[s](e,c);else{var u=N.hasOwnProperty(s),p="function"==typeof c,h=p&&!u&&!m&&a.autobind!==!1;if(h)r.push(s,c),l[s]=c;else if(m){var E=N[s];i(u&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,s),"DEFINE_MANY_MERGED"===E?l[s]=d(l[s],c):"DEFINE_MANY"===E&&(l[s]=f(l[s],c))}else l[s]=c}}}else;}function m(e,t){if(t)for(var a in t){var l=t[a];if(t.hasOwnProperty(a)){var n=a in v;i(!n,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var r=a in e;if(r){var s=w.hasOwnProperty(a)?w[a]:null;return i("DEFINE_MANY_MERGED"===s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=d(e[a],l))}e[a]=l}}}function u(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(i(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function d(e,t){return function(){var a=e.apply(this,arguments),l=t.apply(this,arguments);if(null==a)return l;if(null==l)return a;var n={};return u(n,a),u(n,l),n}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var a=t.bind(e);return a}function h(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var l=t[a],n=t[a+1];e[l]=p(e,n)}}function E(e){var t=l(function(e,l,n){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=l,this.refs=c,this.updater=n||a,this.state=null;var r=this.getInitialState?this.getInitialState():null;i("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new k,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],b.forEach(r.bind(null,t)),r(t,y),r(t,e),r(t,g),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var n in N)t.prototype[n]||(t.prototype[n]=null);return t}var b=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},w={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)r(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=s({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=s({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=s({},e.propTypes,t)},statics:function(e,t){m(e,t)},autobind:function(){}},y={componentDidMount:function(){this.__isMounted=!0}},g={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},k=function(){};return s(k.prototype,e.prototype,_),E}var r,s=a(5),c=a(35),i=a(1),o="mixins";r={},e.exports=n},159:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,l=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);return function i(o,m,u){if("string"!=typeof m){if(c){var d=s(m);d&&d!==c&&i(o,d,u)}var f=l(m);n&&(f=f.concat(n(m)));for(var p=0;p<f.length;++p){var h=f[p];if(!(e[h]||t[h]||u&&u[h])){var E=r(m,h);try{a(o,h,E)}catch(e){}}}return o}return o}})},5:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==l.join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=l()?Object.assign:function(e,t){for(var l,c,i=a(e),o=1;o<arguments.length;o++){l=Object(arguments[o]);for(var m in l)r.call(l,m)&&(i[m]=l[m]);if(n){c=n(l);for(var u=0;u<c.length;u++)s.call(l,c[u])&&(i[c[u]]=l[c[u]])}}return i}},202:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),i=l(c),o=a(7),m=l(o),u=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("li",{className:"pt3 pt4-ns pb1 measure"},i.default.createElement("h1",{className:"db mb2"},this.props.Title),i.default.createElement("h4",{className:"body"}," ",this.props.Description))},t}(i.default.Component);u.propTypes={Title:m.default.string.isRequired,Description:m.default.string.isRequired},t.default=u,e.exports=t.default},13:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),i=l(c),o=a(7),m=l(o),u=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"mt4 mb2"},i.default.createElement("span",{className:"fw7 absolute brand o-60",style:{fontSize:"6em",marginLeft:"-72px",marginTop:"-56px",zIndex:"-222"}},this.props.Number),i.default.createElement("h1",{style:{zIndex:"20000000"},className:"f3 pt1  f1-m f-subheadline-l primary"},this.props.Title))},t}(i.default.Component);u.propTypes={Number:m.default.string.isRequired,Title:m.default.string.isRequired},t.default=u,e.exports=t.default},203:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3 mb5"},r.default.createElement(c.default,{Number:"08",Title:"Buttons"}),r.default.createElement("h2",{className:"mt5 mb5"},"Primary action buttons"),r.default.createElement("a",{style:{letterSpacing:"0.75px"},className:"link dim br2 ph3 pv2 mb2 dib white bg-brand grow",href:"#0"},"Primary Active"),r.default.createElement("h2",{className:"mt5 mb5"},"Secondary action buttons"),r.default.createElement("a",{className:"link dim br2 ph3 pv2 mb2 dib link-active bg-transprent grow",href:"#0"},"Secondary Active"),r.default.createElement("a",{className:"link dim br2 ph3 pv2 mb2 dib link-disabled ml4 grow",href:"#0"},"Primary Disabled"),r.default.createElement("a",{className:"link dim br2 ph3 pv2 mb2 dib alert ml4 grow",href:"#0"},"Destructive Action"))};t.default=i,e.exports=t.default},204:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Colors",className:"ph3 ph5-ns mt6 overflow-auto"},r.default.createElement(c.default,{Number:"04",Title:"Colors"}),r.default.createElement("p",{className:"f5 primary lh-copy measure"},"We want to make health cared, so we use a wide range of vibrant and juicy colors."),r.default.createElement("h1",{className:"primary fw4 mt4 mb3 "},"Solid colors"),r.default.createElement("div",{className:"cf mt4"},r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-brand w-90 pv4 center h-100 grow pointer br2 shadow "},r.default.createElement("p",{className:"tc mt3 white fw4"},"Brand\u2028",r.default.createElement("br",null),r.default.createElement("br",null),"#04D4BF"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-link-active w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Actionable text\u2028",r.default.createElement("br",null),r.default.createElement("br",null)," #04D4BF"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-alert w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Alert",r.default.createElement("br",null),r.default.createElement("br",null),"#E94119"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-background w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 primary fw5"},"Background",r.default.createElement("br",null),r.default.createElement("br",null),"#F8F7F5"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-primary w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Primary",r.default.createElement("br",null),r.default.createElement("br",null),"#575756"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-secondary w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Secondary",r.default.createElement("br",null),r.default.createElement("br",null)," #898988"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-hint w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 white fw4"},"Hint",r.default.createElement("br",null),r.default.createElement("br",null),"#BFBFBF"))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-divider w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 primary fw5"},"Divider",r.default.createElement("br",null),r.default.createElement("br",null),"#E0E0E0")))),r.default.createElement("h1",{className:"primary fw4 mt4 mb3"},"Gradient"),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-postive w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 primary white fw5"},"Postive",r.default.createElement("br",null)))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-neutral w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 primary white fw5"},"Neutral",r.default.createElement("br",null)))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-negative w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 primary white fw5"},"Negative",r.default.createElement("br",null)))),r.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},r.default.createElement("div",{className:"bg-inactive w-90 pv4 center h-100 grow pointer br2 shadow"},r.default.createElement("p",{className:"tc mt3 primary white fw5"},"Inactive",r.default.createElement("br",null)))))};t.default=i,e.exports=t.default},205:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(c.default,{Number:"10",Title:"DropDown"}),r.default.createElement("form",{className:"pa4 "},r.default.createElement("div",{className:"measure"},r.default.createElement("select",null,r.default.createElement("option",{value:"volvo"},"Volvo"),r.default.createElement("option",{value:"saab"},"Saab"),r.default.createElement("option",{value:"opel"},"Opel"),r.default.createElement("option",{value:"audi"},"Audi")))))};t.default=i,e.exports=t.default},206:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),i=l(c),o=a(64),m=l(o),u=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("footer",{className:"pv4-ns pv2 mt4-ns mt0 pa0-ns pa3 mt4 bt b--black-10 bg-white overflow-auto"},i.default.createElement("div",{className:"mw8 db center"},i.default.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns"},i.default.createElement("h4",{className:"fw5 mb3 f7"},"CONTACT"),i.default.createElement("a",{href:"mailto:support@numilli.com",className:"link f6 dim lh-solid b db pv2 link-active"},"Email: Design@vivy.com")),i.default.createElement("article",{className:"fl w-60 dib-ns w-auto-ns mr4-m mr5-l ml5-ns ml0 mb4 pr2 pr0-ns"},i.default.createElement("h4",{className:"fw5 mb3 f7"},"NAVIGATION"),i.default.createElement("div",{className:"fl w-auto"},i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/blog"},"Blog"),i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/faq"},"FAQ")),i.default.createElement("div",{className:"fl w-auto ml3 pl3"},i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/terms"},"Terms of Service"),i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/privacy"},"Privacy Policy"))),i.default.createElement("article",{className:"fr-ns fl w-100 dib-ns w-auto-ns pr2 pr0-ns v-top"},i.default.createElement("h4",{className:"fw5 mb3 f7 mb2"},"DOWNLOAD"),i.default.createElement("a",{className:"ml4-ns ml0 fr-ns dib grow",target:"blank",href:"https://itunes.apple.com/us/genre/ios/id36?mt=8"},i.default.createElement("img",{src:"/img/app-store.svg",alt:"Download from app store"})),i.default.createElement("a",{className:"fr-ns dib grow",target:"blank",href:"https://play.google.com/store?hl=en_GB"},i.default.createElement("img",{src:"img/google.svg",alt:"Download from GooglePlay"})))))},t}(i.default.Component);t.default=u,e.exports=t.default},207:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Icongrapghy",className:"ph3 ph5-ns mt6 "},r.default.createElement(c.default,{Number:"06",Title:"Iconography"}),r.default.createElement("div",{className:"w-50-ns w-100 dib"},r.default.createElement("h1",{className:"primary fw4"},"Iconography"),r.default.createElement("h3",{className:"primary fw4 mt5"},"Design principles"),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"Shapes are bold and geometric. Symmetry and consistency of shapes give the icons a unique quality, while keeping them simple and bold."),r.default.createElement("h3",{className:"primary fw4 mt5"},"Corners and stroke"),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"Consistent corner radiuses are key to unifying the overall system icon family. A 2dp corner radius is used on the silhouette form of the icon. Do not round the corners of strokes (shapes 2dp wide or less). Interior corners should be square. Do not round the corners of interior shapes. \u2028         Consistent stroke weights are key to unifying the overall system icon family. Maintain a 2dp width for all stroke instances, including curves, angles, and both interior and exterior strokes.")),r.default.createElement("div",{className:"w-50-ns w-100 dib v-top mt6 pl5"},r.default.createElement("img",{className:"mr6 mt3",src:"../img/icons/icon-1.svg"}),r.default.createElement("img",{className:"mt3",src:"../img/icons/icon-2.svg"}),r.default.createElement("img",{className:"mr6 mt5",src:"../img/icons/icon-3.svg"}),r.default.createElement("img",{className:"mt3",src:"../img/icons/icon-4.svg"}),r.default.createElement("img",{className:"mr6 mt5",src:"../img/icons/icon-5.svg"}),r.default.createElement("img",{className:"mt5",src:"../img/icons/icon-6.svg"})))};t.default=i,e.exports=t.default},208:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Illustrations",className:"ph3 ph5-ns mt6 mb7"},r.default.createElement("div",{className:"dib"},r.default.createElement(c.default,{Number:"07",Title:"Illustrations"}),r.default.createElement("p",{className:"f5 lh-copy measure primary mt5"},"Illustrations that make medical concepts less intimidating and easier to understand, in the mean time, also communicate emotions and feelings.",r.default.createElement("br",null),r.default.createElement("br",null),"Priorities",r.default.createElement("br",null),r.default.createElement("br",null),"• Communicate a specific topic/idea",r.default.createElement("br",null),"• Fit with where they are used",r.default.createElement("br",null),"• Use maximum 3-4 colors/tones",r.default.createElement("br",null),"• Human figures are natural. Avoid straight lines and square corners.",r.default.createElement("br",null),"• Show that Vivy is present")),r.default.createElement("img",{className:"w-40-ns w-100 dib ml4-ns ml0 mw6",src:"../img/illustrations/page-1.svg"}),r.default.createElement("div",{className:"mt4-ns mt0"},r.default.createElement("img",{className:"w-40-ns w-100 dib mw6",src:"../img/illustrations/1.svg"}),r.default.createElement("img",{className:"w-40-ns w-100 dib ml4-ns ml0 mw6",src:"../img/illustrations/3.svg"})))};t.default=i,e.exports=t.default},209:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(c.default,{Number:"09",Title:"Inputs"}),r.default.createElement("form",{className:"pa4 black-80"},r.default.createElement("div",{className:"measure"},r.default.createElement("div",null,r.default.createElement("label",{htmlFor:"name",className:"f6 fw5 b db mb2 secondary"},"Name ",r.default.createElement("span",{className:"normal hint"},"(optional)")),r.default.createElement("input",{className:"w-40-ns mb4 mb0-ns w-100 bg-transparent",required:!0})),r.default.createElement("div",{className:"mt5"},r.default.createElement("label",{htmlFor:"name",className:"f6 fw5 b db mb2 secondary"},"Textarea"),r.default.createElement("textarea",{rows:"3",className:"db w-100 mt4 bg-transparent pointer",name:"message",required:!0})))))};t.default=i,e.exports=t.default},210:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(c.default,{Number:"11",Title:"List"}),r.default.createElement("form",{className:"pa4"},r.default.createElement("fieldset",{id:"favorite_movies",className:"bn"},r.default.createElement("legend",{className:"fw7 mb2"},"Favorite Movies"),r.default.createElement("div",{className:"flex items-center mb2"},r.default.createElement("input",{className:"mr2",type:"checkbox",id:"spacejam",defaultValue:"spacejam"}),r.default.createElement("label",{htmlFor:"spacejam",className:"lh-copy"},"Space Jam")),r.default.createElement("div",{className:"flex items-center mb2"},r.default.createElement("input",{className:"mr2",type:"checkbox",id:"airbud",defaultValue:"airbud"}),r.default.createElement("label",{htmlFor:"airbud",className:"lh-copy"},"Air Bud")),r.default.createElement("div",{className:"flex items-center mb2"},r.default.createElement("input",{className:"mr2",type:"checkbox",id:"hocuspocus",defaultValue:"hocuspocus"}),r.default.createElement("label",{htmlFor:"hocuspocus",className:"lh-copy"},"Hocus Pocus")),r.default.createElement("div",{className:"flex items-center mb2"},r.default.createElement("input",{className:"mr2",type:"checkbox",id:"diehard",defaultValue:"diehard"}),r.default.createElement("label",{htmlFor:"diehard",className:"lh-copy"},"Die Hard")),r.default.createElement("div",{className:"flex items-center mb2"},r.default.createElement("input",{className:"mr2",type:"checkbox",id:"primer",defaultValue:"primer"}),r.default.createElement("label",{htmlFor:"primer",className:"lh-copy"},"Primer")),r.default.createElement("div",{className:"flex items-center mb2"},r.default.createElement("input",{className:"mr2",type:"checkbox",id:"proxy",defaultValue:"proxy"}),r.default.createElement("label",{htmlFor:"proxy",className:"lh-copy"},"Hudsucker Proxy")),r.default.createElement("div",{className:"flex items-center mb2"},r.default.createElement("input",{className:"mr2",type:"checkbox",id:"homealone",defaultValue:"homealone"}),r.default.createElement("label",{htmlFor:"homealone",className:"lh-copy"},"Home Alone")))),r.default.createElement("main",{className:"mw6  pl4"},r.default.createElement("article",{className:"dt w-100 bb b--black-05 pb2 mt2",href:"#0"},r.default.createElement("div",{className:"dtc w2 w3-ns v-mid"},r.default.createElement("img",{src:"https://pbs.twimg.com/profile_images/665958893118496770/yyFn07kb_400x400.jpg",className:"ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"})),r.default.createElement("div",{className:"dtc v-mid pl3"},r.default.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},"Oliver Wehn"),r.default.createElement("h2",{className:"f6 fw4 mt0 mb0 black-60"},"@oliverwehn"))),r.default.createElement("article",{className:"dt w-100 bb b--black-05 pb2 mt2",href:"#0"},r.default.createElement("div",{className:"dtc w2 w3-ns v-mid"},r.default.createElement("img",{src:"https://pbs.twimg.com/profile_images/665958893118496770/yyFn07kb_400x400.jpg",className:"ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"})),r.default.createElement("div",{className:"dtc v-mid pl3"},r.default.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},"Oliver Wehn"),r.default.createElement("h2",{className:"f6 fw4 mt0 mb0 black-60"},"@oliverwehn"))),r.default.createElement("article",{className:"dt w-100 bb b--black-05 pb2 mt2",href:"#0"},r.default.createElement("div",{className:"dtc w2 w3-ns v-mid"},r.default.createElement("img",{src:"https://pbs.twimg.com/profile_images/665958893118496770/yyFn07kb_400x400.jpg",className:"ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"})),r.default.createElement("div",{className:"dtc v-mid pl3"},r.default.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},"Oliver Wehn"),r.default.createElement("h2",{className:"f6 fw4 mt0 mb0 black-60"},"@oliverwehn")))))};t.default=i,e.exports=t.default},211:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Logo",className:"ph3 ph5-ns pt5"},r.default.createElement(c.default,{Number:"03",Title:"Logo"}),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. A printed work which cannot be read becomes a product without purpose."),r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph4-l"},r.default.createElement("img",{className:"pv3 center auto",src:"../img/logo-complete.svg"}))),r.default.createElement("a",{className:"primary Link link dim",href:"../img/vivy_logo.zip",download:!0},"Image download "),r.default.createElement("a",{className:"primary ml3 link dim",href:"../img/logo-complete.svg",download:!0},"Vector download"),r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},r.default.createElement("img",{className:"pv5 center auto",src:"../img/logo_2.svg"}))),r.default.createElement("a",{className:"primary Link link dim",href:"../img/vivy_logo_2.zip",download:!0},"Image download "),r.default.createElement("a",{className:"primary ml3 link dim",href:"../img/logo_2.svg",download:!0},"Vector download"),r.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},r.default.createElement("img",{className:"pv5 center auto w4",src:"../img/letter_head.svg"}))),r.default.createElement("a",{className:"primary Link link dim",href:"../img/logo_letter_head.zip",download:!0},"Image download "),r.default.createElement("a",{className:"primary ml3 link dim",href:"../img/letter_head.svg",download:!0},"Vector download"))};t.default=i,e.exports=t.default},212:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=a(202),o=l(i),m=function(){return r.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},r.default.createElement(c.default,{Number:"01",Title:"Principles"}),r.default.createElement("ul",{className:"list pl0 ma0 pa0"},r.default.createElement(o.default,{Title:"Unified",Description:"Each piece is part of a greater whole and should contribute positively to the system at scale. There should be no isolated features or outliers."}),r.default.createElement(o.default,{Title:"Universal",Description:"Airbnb is used around the world by a wide global community. Our products and visual language should be welcoming and accessible."}),r.default.createElement(o.default,{Title:"Iconic",Description:"We’re focused when it comes to both design and functionality. Our work should speak boldly and clearly to this focus."}),r.default.createElement(o.default,{Title:"Conversational",Description:"Our use of motion breathes life into our products, and allows us to communicate with users in easily understood ways."})))};t.default=m,e.exports=t.default},213:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Typography",className:"ph3 ph5-ns mt6"},r.default.createElement(c.default,{Number:"05",Title:"Typography"}),r.default.createElement("p",{className:"f5 lh-copy measure primary"},"We use TT Norms, giving text in Vivy a fun and friendly feel to match our illustrations."),r.default.createElement("div",{className:"w-40-ns w-100 dib measure"},r.default.createElement("h1",null,"Headline - 24 bold"),r.default.createElement("h1",null,"Lorem ipsum dolor sit amet, nec dicta commodo."),r.default.createElement("h2",{className:"mt5"},"Title - 20 bold"),r.default.createElement("h2",null,"Lorem ipsum dolor sit amet, nec dicta commodo."),r.default.createElement("h3",{className:"mt5"},"Subheading 2 - 17 bold"),r.default.createElement("h3",null,"Lorem ipsum dolor sit amet, nec dicta commodo."),r.default.createElement("h4",{className:"mt5"}," Subheading - 17 Regular"),r.default.createElement("h4",null,"Lorem ipsum dolor sit amet, nec dicta commodo.")),r.default.createElement("div",{className:"w-40-ns w-100 dib v-top fr"},r.default.createElement("p",{className:"body-2"},"Body 2 - 15 bold"),r.default.createElement("p",{className:"body-2"},"Lorem ipsum dolor sit amet, nec dicta commodo."),r.default.createElement("p",{className:"body mt5"},"Body Regular - 15 Regular"),r.default.createElement("p",{className:"body"},"Lorem ipsum dolor sit amet, nec dicta commodo."),r.default.createElement("p",{className:"caption mt5"},"Caption - 13 Medium"),r.default.createElement("p",{className:"caption"},"Lorem ipsum dolor sit amet, nec dicta commodo.")))};t.default=i,e.exports=t.default},214:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(13),c=l(s),i=function(){return r.default.createElement("main",{id:"Vision",className:"ph3 ph5-ns pt5"},r.default.createElement(c.default,{Number:"02",Title:"Vision"}),r.default.createElement("article",{className:"dt w-100 bg-yellow mv4"},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph4-l"
},r.default.createElement("h1",{className:"f6 f2-m f-subheadline-l fw6 tc i "},"When in doubt crash the app"))),r.default.createElement("article",{className:"dt w-100 mv4",style:{backgroundColor:"#3ACAED"}},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph4-l"},r.default.createElement("h1",{className:"f6 f2-m f-subheadline-l fw6 tc i "},"Eat more fish for your health, right?"))),r.default.createElement("article",{className:"dt w-100 mv4",style:{backgroundColor:"#E7128B"}},r.default.createElement("div",{className:"dtc v-mid tc white ph3 ph4-l"},r.default.createElement("h1",{className:"f6 f2-m f-subheadline-l fw6 tc white i"},"I like it, but I don’t love it"))))};t.default=i,e.exports=t.default},217:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),s=a(64),c=(l(s),a(211)),i=l(c),o=a(204),m=l(o),u=a(213),d=l(u),f=a(207),p=l(f),h=a(208),E=l(h),b=a(212),N=l(b),w=a(214),v=l(w),y=a(203),g=l(y),_=a(209),k=l(_),D=a(205),x=l(D),M=a(210),O=l(M),P=a(206),I=l(P),T=function(){return r.default.createElement("div",null,r.default.createElement("header",null,r.default.createElement("div",{className:"cover bg-left bg-center-l overflow-auto relative"},r.default.createElement("img",{className:"w-100",src:"../img/header.svg"}))),r.default.createElement("div",null,r.default.createElement("div",{className:"w-70-ns w-100 fr dib v-top"},r.default.createElement(N.default,null),r.default.createElement(v.default,null),r.default.createElement(i.default,null),r.default.createElement(m.default,null),r.default.createElement(d.default,null),r.default.createElement(p.default,null),r.default.createElement(E.default,null),r.default.createElement(g.default,null),r.default.createElement(k.default,null),r.default.createElement(x.default,null),r.default.createElement(O.default,null),r.default.createElement(I.default,null))))};t.default=T,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-b679c898e80c4dc95be6.js.map