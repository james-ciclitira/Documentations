webpackJsonp([35783957827783],{98:function(e,t,a){"use strict";function l(e){return e}function r(e,t,a){function r(e,t){var a=N.hasOwnProperty(t)?N[t]:null;_.hasOwnProperty(t)&&i("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function n(e,a){if(a){i("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var l=e.prototype,n=l.__reactAutoBindPairs;a.hasOwnProperty(o)&&w.mixins(e,a.mixins);for(var s in a)if(a.hasOwnProperty(s)&&s!==o){var c=a[s],m=l.hasOwnProperty(s);if(r(m,s),w.hasOwnProperty(s))w[s](e,c);else{var u=N.hasOwnProperty(s),p="function"==typeof c,E=p&&!u&&!m&&a.autobind!==!1;if(E)n.push(s,c),l[s]=c;else if(m){var h=N[s];i(u&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,s),"DEFINE_MANY_MERGED"===h?l[s]=d(l[s],c):"DEFINE_MANY"===h&&(l[s]=f(l[s],c))}else l[s]=c}}}else;}function m(e,t){if(t)for(var a in t){var l=t[a];if(t.hasOwnProperty(a)){var r=a in w;i(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var n=a in e;if(n){var s=v.hasOwnProperty(a)?v[a]:null;return i("DEFINE_MANY_MERGED"===s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=d(e[a],l))}e[a]=l}}}function u(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(i(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function d(e,t){return function(){var a=e.apply(this,arguments),l=t.apply(this,arguments);if(null==a)return l;if(null==l)return a;var r={};return u(r,a),u(r,l),r}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var a=t.bind(e);return a}function E(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var l=t[a],r=t[a+1];e[l]=p(e,r)}}function h(e){var t=l(function(e,l,r){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=l,this.refs=c,this.updater=r||a,this.state=null;var n=this.getInitialState?this.getInitialState():null;i("object"==typeof n&&!Array.isArray(n),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=n});t.prototype=new k,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],b.forEach(n.bind(null,t)),n(t,y),n(t,e),n(t,g),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)t.prototype[r]||(t.prototype[r]=null);return t}var b=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},w={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)n(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=s({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=s({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=s({},e.propTypes,t)},statics:function(e,t){m(e,t)},autobind:function(){}},y={componentDidMount:function(){this.__isMounted=!0}},g={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},k=function(){};return s(k.prototype,e.prototype,_),h}var n,s=a(5),c=a(35),i=a(1),o="mixins";n={},e.exports=r},159:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,l=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,n=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);return function i(o,m,u){if("string"!=typeof m){if(c){var d=s(m);d&&d!==c&&i(o,d,u)}var f=l(m);r&&(f=f.concat(r(m)));for(var p=0;p<f.length;++p){var E=f[p];if(!(e[E]||t[E]||u&&u[E])){var h=n(m,E);try{a(o,E,h)}catch(e){}}}return o}return o}})},5:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==l.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=l()?Object.assign:function(e,t){for(var l,c,i=a(e),o=1;o<arguments.length;o++){l=Object(arguments[o]);for(var m in l)n.call(l,m)&&(i[m]=l[m]);if(r){c=r(l);for(var u=0;u<c.length;u++)s.call(l,c[u])&&(i[c[u]]=l[c[u]])}}return i}},13:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),i=l(c),o=a(7),m=l(o),u=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"mv4"},i.default.createElement("span",{className:"fw7 absolute brand o-60",style:{fontSize:"6em",marginLeft:"-72px",marginTop:"-56px",zIndex:"-222"}},this.props.Number),i.default.createElement("h1",{style:{zIndex:"20000000"},className:"f3 pt1  f1-m f-subheadline-l primary"},this.props.Title))},t}(i.default.Component);u.propTypes={Number:m.default.string.isRequired,Title:m.default.string.isRequired},t.default=u,e.exports=t.default},202:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3 mb5"},n.default.createElement(c.default,{Number:"08",Title:"Buttons"}),n.default.createElement("h4",{className:"mt5"},"Primary action buttons"),n.default.createElement("a",{style:{letterSpacing:"0.75px"},className:"f6 link dim br2 ph3 pv2 fw4 mb2 dib white bg-brand ttu",href:"#0"},"Primary Active"),n.default.createElement("a",{className:"f6 link dim br2 ph3 pv2 fw4 mb2 dib white bg-disabled ttu ml4",href:"#0"},"Primary disabled"),n.default.createElement("h4",{className:"mt5"},"Secondary action buttons"),n.default.createElement("a",{className:"f6 link dim br2 ph3 pv2 fw4 mb2 dib link-active bg-transprent ttu",href:"#0"},"Secondary Active"),n.default.createElement("a",{className:"f6 link dim br2 ph3 pv2 fw4 mb2 dib link-disabled ttu ml4",href:"#0"},"Primary disabled"),n.default.createElement("a",{className:"f6 link dim br2 ph3 pv2 fw4 mb2 dib alert ttu ml4",href:"#0"},"destructive action"),n.default.createElement("h4",{className:"mt5"},"💩 buttons"),n.default.createElement("a",{className:"f6 link dim br2 ph3 pv2 fw4 mb2 dib bg-tertiary ttu primary",href:"#0"},"Secondary Active"))};t.default=i,e.exports=t.default},203:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Colors",className:"ph3 ph5-ns mt6 overflow-auto"},n.default.createElement(c.default,{Number:"04",Title:"Colors"}),n.default.createElement("p",{className:"f5 primary lh-copy measure"},"We want to make health cared, so we use a wide range of vibrant and juicy colors."),n.default.createElement("h1",{className:"primary fw4 mt4 mb3 "},"Solid colors"),n.default.createElement("div",{className:"cf mt4"},n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-brand w-90 pv4 center h-100 grow pointer br2 shadow "},n.default.createElement("p",{className:"tc mt3 white fw4"},"Brand\u2028",n.default.createElement("br",null),n.default.createElement("br",null),"#04D4BF"))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-link-active w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 white fw4"},"Actionable text\u2028",n.default.createElement("br",null),n.default.createElement("br",null)," #04D4BF"))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-alert w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 white fw4"},"Alert",n.default.createElement("br",null),n.default.createElement("br",null),"#E94119"))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-background w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 primary fw5"},"Background",n.default.createElement("br",null),n.default.createElement("br",null),"#F8F7F5"))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-primary w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 white fw4"},"Primary",n.default.createElement("br",null),n.default.createElement("br",null),"#575756"))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-secondary w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 white fw4"},"Secondary",n.default.createElement("br",null),n.default.createElement("br",null)," #898988"))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-hint w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 white fw4"},"Hint",n.default.createElement("br",null),n.default.createElement("br",null),"#BFBFBF"))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-divider w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 primary fw5"},"Divider",n.default.createElement("br",null),n.default.createElement("br",null),"#E0E0E0")))),n.default.createElement("h1",{className:"primary fw4 mt4 mb3"},"Gradient"),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-postive w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 primary white fw5"},"Postive",n.default.createElement("br",null)))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-neutral w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 primary white fw5"},"Neutral",n.default.createElement("br",null)))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-negative w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 primary white fw5"},"Negative",n.default.createElement("br",null)))),n.default.createElement("div",{className:"fl w-25-ns w-100 tc pv3"},n.default.createElement("div",{className:"bg-inactive w-90 pv4 center h-100 grow pointer br2 shadow"},n.default.createElement("p",{className:"tc mt3 primary white fw5"},"Inactive",n.default.createElement("br",null)))))};t.default=i,e.exports=t.default},204:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},n.default.createElement(c.default,{Number:"10",Title:"DropDown"}),n.default.createElement("form",{className:"pa4 "},n.default.createElement("div",{className:"measure"},n.default.createElement("select",null,n.default.createElement("option",{value:"volvo"},"Volvo"),n.default.createElement("option",{value:"saab"},"Saab"),n.default.createElement("option",{value:"opel"},"Opel"),n.default.createElement("option",{value:"audi"},"Audi")))))};t.default=i,e.exports=t.default},205:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(2),i=l(c),o=a(64),m=l(o),u=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("footer",{className:"pv4-ns pv2 mt4-ns mt0 pa0-ns pa3 mt4 bt b--black-10 bg-white overflow-auto"},i.default.createElement("div",{className:"mw8 db center"},i.default.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns"},i.default.createElement("h4",{className:"fw5 mb3 f7"},"CONTACT"),i.default.createElement("a",{href:"mailto:support@numilli.com",className:"link f6 dim lh-solid b db pv2 link-active"},"Email: Design@vivy.com")),i.default.createElement("article",{className:"fl w-60 dib-ns w-auto-ns mr4-m mr5-l ml5-ns ml0 mb4 pr2 pr0-ns"},i.default.createElement("h4",{className:"fw5 mb3 f7"},"NAVIGATION"),i.default.createElement("div",{className:"fl w-auto"},i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/blog"},"Blog"),i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/faq"},"FAQ")),i.default.createElement("div",{className:"fl w-auto ml3 pl3"},i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/terms"},"Terms of Service"),i.default.createElement(m.default,{className:"f6 db mt2 dim link link-active",to:"/privacy"},"Privacy Policy"))),i.default.createElement("article",{className:"fr-ns fl w-100 dib-ns w-auto-ns pr2 pr0-ns v-top"},i.default.createElement("h4",{className:"fw5 mb3 f7 mb2"},"DOWNLOAD"),i.default.createElement("a",{className:"ml4-ns ml0 fr-ns dib grow",target:"blank",href:"https://itunes.apple.com/us/genre/ios/id36?mt=8"},i.default.createElement("img",{src:"/img/app-store.svg",alt:"Download from app store"})),i.default.createElement("a",{className:"fr-ns dib grow",target:"blank",href:"https://play.google.com/store?hl=en_GB"},i.default.createElement("img",{src:"img/google.svg",alt:"Download from GooglePlay"})))))},t}(i.default.Component);t.default=u,e.exports=t.default},206:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Icongrapghy",className:"ph3 ph5-ns mt6 "},n.default.createElement(c.default,{Number:"06",Title:"Iconography"}),n.default.createElement("div",{className:"w-50-ns w-100 dib"},n.default.createElement("h1",{className:"primary fw4"},"Iconography"),n.default.createElement("h3",{className:"primary fw4 mt5"},"Design principles"),n.default.createElement("p",{className:"f5 lh-copy measure primary"},"Shapes are bold and geometric. Symmetry and consistency of shapes give the icons a unique quality, while keeping them simple and bold."),n.default.createElement("h3",{className:"primary fw4 mt5"},"Corners and stroke"),n.default.createElement("p",{className:"f5 lh-copy measure primary"},"Consistent corner radiuses are key to unifying the overall system icon family. A 2dp corner radius is used on the silhouette form of the icon. Do not round the corners of strokes (shapes 2dp wide or less). Interior corners should be square. Do not round the corners of interior shapes. \u2028         Consistent stroke weights are key to unifying the overall system icon family. Maintain a 2dp width for all stroke instances, including curves, angles, and both interior and exterior strokes.")),n.default.createElement("div",{className:"w-50-ns w-100 dib v-top mt6 pl5"},n.default.createElement("div",{className:"mt3"},n.default.createElement("img",{className:"mr6",src:"../img/icons/icon-1.svg"}),n.default.createElement("img",{src:"../img/icons/icon-2.svg"})),n.default.createElement("div",{className:"mt5"},n.default.createElement("img",{className:"mr6",src:"../img/icons/icon-3.svg"}),n.default.createElement("img",{src:"../img/icons/icon-4.svg"})),n.default.createElement("div",{className:"mt5"},n.default.createElement("img",{className:"mr6",src:"../img/icons/icon-5.svg"}),n.default.createElement("img",{src:"../img/icons/icon-6.svg"}))))};t.default=i,e.exports=t.default},207:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Illustrations",className:"ph3 ph5-ns mt6 mb7 "},n.default.createElement("div",{className:"dib"},n.default.createElement(c.default,{Number:"07",Title:"Illustrations"}),n.default.createElement("p",{className:"f5 lh-copy measure primary mt5"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud')),n.default.createElement("img",{className:"ml5",src:"../img/illustrations/page-1.svg"}),n.default.createElement("div",{className:"mt4"},n.default.createElement("img",{className:"",src:"../img/illustrations/1.svg"}),n.default.createElement("img",{className:"ml6 pl6",src:"../img/illustrations/3.svg"})))};t.default=i,e.exports=t.default},208:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},n.default.createElement(c.default,{Number:"09",Title:"Inputs"}),n.default.createElement("form",{className:"pa4 black-80"},n.default.createElement("div",{className:"measure"},n.default.createElement("div",null,n.default.createElement("label",{htmlFor:"name",className:"f6 fw5 b db mb2 secondary"},"Name ",n.default.createElement("span",{className:"normal hint"},"(optional)")),n.default.createElement("input",{className:"w-40-ns mb4 mb0-ns w-100 bg-transparent",required:!0})),n.default.createElement("div",{className:"mt5"},n.default.createElement("label",{htmlFor:"name",className:"f6 fw5 b db mb2 secondary"},"Textarea"),n.default.createElement("textarea",{rows:"3",className:"db w-100 mt4 bg-transparent pointer",name:"message",required:!0})))))};t.default=i,e.exports=t.default},209:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},n.default.createElement(c.default,{Number:"11",Title:"List"}),n.default.createElement("form",{className:"pa4"},n.default.createElement("fieldset",{id:"favorite_movies",className:"bn"},n.default.createElement("legend",{className:"fw7 mb2"},"Favorite Movies"),n.default.createElement("div",{className:"flex items-center mb2"},n.default.createElement("input",{className:"mr2",type:"checkbox",id:"spacejam",defaultValue:"spacejam"}),n.default.createElement("label",{htmlFor:"spacejam",className:"lh-copy"},"Space Jam")),n.default.createElement("div",{className:"flex items-center mb2"},n.default.createElement("input",{className:"mr2",type:"checkbox",id:"airbud",defaultValue:"airbud"}),n.default.createElement("label",{htmlFor:"airbud",className:"lh-copy"},"Air Bud")),n.default.createElement("div",{className:"flex items-center mb2"},n.default.createElement("input",{className:"mr2",type:"checkbox",id:"hocuspocus",defaultValue:"hocuspocus"}),n.default.createElement("label",{htmlFor:"hocuspocus",className:"lh-copy"},"Hocus Pocus")),n.default.createElement("div",{className:"flex items-center mb2"},n.default.createElement("input",{className:"mr2",type:"checkbox",id:"diehard",defaultValue:"diehard"}),n.default.createElement("label",{htmlFor:"diehard",className:"lh-copy"},"Die Hard")),n.default.createElement("div",{className:"flex items-center mb2"},n.default.createElement("input",{className:"mr2",type:"checkbox",id:"primer",defaultValue:"primer"}),n.default.createElement("label",{htmlFor:"primer",className:"lh-copy"},"Primer")),n.default.createElement("div",{className:"flex items-center mb2"},n.default.createElement("input",{className:"mr2",type:"checkbox",id:"proxy",defaultValue:"proxy"}),n.default.createElement("label",{htmlFor:"proxy",className:"lh-copy"},"Hudsucker Proxy")),n.default.createElement("div",{className:"flex items-center mb2"},n.default.createElement("input",{className:"mr2",type:"checkbox",id:"homealone",defaultValue:"homealone"}),n.default.createElement("label",{htmlFor:"homealone",className:"lh-copy"},"Home Alone")))),n.default.createElement("main",{className:"mw6  pl4"},n.default.createElement("article",{className:"dt w-100 bb b--black-05 pb2 mt2",href:"#0"},n.default.createElement("div",{className:"dtc w2 w3-ns v-mid"},n.default.createElement("img",{src:"https://pbs.twimg.com/profile_images/665958893118496770/yyFn07kb_400x400.jpg",className:"ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"})),n.default.createElement("div",{className:"dtc v-mid pl3"},n.default.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},"Oliver Wehn"),n.default.createElement("h2",{className:"f6 fw4 mt0 mb0 black-60"},"@oliverwehn"))),n.default.createElement("article",{className:"dt w-100 bb b--black-05 pb2 mt2",href:"#0"},n.default.createElement("div",{className:"dtc w2 w3-ns v-mid"},n.default.createElement("img",{src:"https://pbs.twimg.com/profile_images/665958893118496770/yyFn07kb_400x400.jpg",className:"ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"})),n.default.createElement("div",{className:"dtc v-mid pl3"},n.default.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},"Oliver Wehn"),n.default.createElement("h2",{className:"f6 fw4 mt0 mb0 black-60"},"@oliverwehn"))),n.default.createElement("article",{className:"dt w-100 bb b--black-05 pb2 mt2",href:"#0"},n.default.createElement("div",{className:"dtc w2 w3-ns v-mid"},n.default.createElement("img",{src:"https://pbs.twimg.com/profile_images/665958893118496770/yyFn07kb_400x400.jpg",className:"ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"})),n.default.createElement("div",{className:"dtc v-mid pl3"},n.default.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},"Oliver Wehn"),n.default.createElement("h2",{className:"f6 fw4 mt0 mb0 black-60"},"@oliverwehn")))))};t.default=i,e.exports=t.default},210:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Logo",className:"ph3 ph5-ns pt5"},n.default.createElement(c.default,{Number:"03",Title:"Logo"}),n.default.createElement("p",{className:"f5 lh-copy measure primary"},"Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. A printed work which cannot be read becomes a product without purpose."),n.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},n.default.createElement("div",{className:"dtc v-mid tc white ph3 ph4-l"},n.default.createElement("img",{className:"pv3 center auto",src:"../img/logo-complete.svg"}))),n.default.createElement("a",{className:"primary Link link dim",href:"../img/vivy_logo.zip",download:!0},"Image download "),n.default.createElement("a",{className:"primary ml3 link dim",href:"../img/logo-complete.svg",download:!0},"Vector download"),n.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},n.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},n.default.createElement("img",{className:"pv5 center auto",src:"../img/logo_2.svg"}))),n.default.createElement("a",{className:"primary Link link dim",href:"../img/vivy_logo_2.zip",download:!0},"Image download "),n.default.createElement("a",{className:"primary ml3 link dim",href:"../img/logo_2.svg",download:!0},"Vector download"),n.default.createElement("article",{className:"pv5 dt w-100 ba mb4 divider mt5"},n.default.createElement("div",{className:"dtc v-mid tc white ph3 ph5-l"},n.default.createElement("img",{className:"pv5 center auto w4",src:"../img/letter_head.svg"}))),n.default.createElement("a",{className:"primary Link link dim",href:"../img/logo_letter_head.zip",download:!0},"Image download "),n.default.createElement("a",{className:"primary ml3 link dim",href:"../img/letter_head.svg",download:!0},"Vector download"))};t.default=i,e.exports=t.default},211:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Principles",className:"ph3 ph5-ns pt3"},n.default.createElement(c.default,{Number:"01",Title:"Principles"}),n.default.createElement("p",{className:"lh-copy secondary mw7"}," Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. A printed work which cannot be read becomes a product without purpose."))};t.default=i,e.exports=t.default},212:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Typography",className:"ph3 ph5-ns mt6"},n.default.createElement(c.default,{Number:"05",Title:"Typography"}),n.default.createElement("p",{className:"f5 lh-copy measure primary"},"We use TT Norms, giving text in Vivy a fun and friendly feel to match our illustrations."),n.default.createElement("div",{className:"w-40-ns w-100 dib measure"},n.default.createElement("h1",null,"Headline - 24 bold"),n.default.createElement("h1",null,"Lorem ipsum dolor sit amet, nec dicta commodo."),n.default.createElement("h2",{className:"mt5"},"Title - 20 bold"),n.default.createElement("h2",null,"Lorem ipsum dolor sit amet, nec dicta commodo."),n.default.createElement("h3",{className:"mt5"},"Subheading 2 - 17 bold"),n.default.createElement("h3",null,"Lorem ipsum dolor sit amet, nec dicta commodo."),n.default.createElement("h4",{className:"mt5"}," Subheading - 17 Regular"),n.default.createElement("h4",null,"Lorem ipsum dolor sit amet, nec dicta commodo.")),n.default.createElement("div",{className:"w-40-ns w-100 dib v-top fr"},n.default.createElement("p",{className:"body-2 - 15 bold"},"Body 2"),n.default.createElement("p",{className:"body-2"},"Lorem ipsum dolor sit amet, nec dicta commodo."),n.default.createElement("p",{className:"body mt5"},"Body Regular - 15 Regular"),n.default.createElement("p",{className:"body"},"Lorem ipsum dolor sit amet, nec dicta commodo."),n.default.createElement("p",{className:"caption mt5"},"Caption"),n.default.createElement("p",{className:"caption"},"Lorem ipsum dolor sit amet, nec dicta commodo.")))};t.default=i,e.exports=t.default},213:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(13),c=l(s),i=function(){return n.default.createElement("main",{id:"Vision",className:"ph3 ph5-ns pt5"},n.default.createElement(c.default,{Number:"02",Title:"Vision"}),n.default.createElement("p",{className:"lh-copy secondary mw7"}," Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. A printed work which cannot be read becomes a product without purpose."))};t.default=i,e.exports=t.default},216:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(2),n=l(r),s=a(64),c=(l(s),a(210)),i=l(c),o=a(203),m=l(o),u=a(212),d=l(u),f=a(206),p=l(f),E=a(207),h=l(E),b=a(211),N=l(b),v=a(213),w=l(v),y=a(202),g=l(y),_=a(208),k=l(_),x=a(204),M=l(x),D=a(209),P=l(D),O=a(205),I=l(O),F=function(){return n.default.createElement("div",null,n.default.createElement("header",null,n.default.createElement("div",{className:"cover bg-left bg-center-l overflow-auto relative"},n.default.createElement("img",{className:"w-100",src:"../img/header.svg"}))),n.default.createElement("div",null,n.default.createElement("div",{className:"w-80-ns w-100 fr dib v-top"},n.default.createElement(N.default,null),n.default.createElement(w.default,null),n.default.createElement(i.default,null),n.default.createElement(m.default,null),n.default.createElement(d.default,null),n.default.createElement(p.default,null),n.default.createElement(h.default,null),n.default.createElement(g.default,null),n.default.createElement(k.default,null),n.default.createElement(M.default,null),n.default.createElement(P.default,null),n.default.createElement(I.default,null))))};t.default=F,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-d83c459601b67a03d13b.js.map