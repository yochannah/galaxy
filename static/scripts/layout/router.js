define("layout/router",["exports","jquery","utils/query-string-parsing","mvc/ui/ui-misc"],function(e,t,i,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var u=s(t),n=s(i),r=s(a),o=u.default,c=Backbone.Router.extend({initialize:function(e,t){this.page=e,this.options=t},push:function(e,t){(t=t||{}).__identifer=Math.random().toString(36).substr(2),o.isEmptyObject(t)||(e+=-1==e.indexOf("?")?"?":"&",e+=o.param(t,!0)),Galaxy.params=t,this.navigate(e,{trigger:!0})},execute:function(e,t,i){Galaxy.debug("router execute:",e,t,i);var a=n.default.parse(t.pop());t.push(a),e&&(this.authenticate(t,i)?e.apply(this,t):this.access_denied())},authenticate:function(e,t){return!0},access_denied:function(){this.page.display(new r.default.Message({status:"danger",message:"You must be logged in with proper credentials to make this request.",persistent:!0}))}});e.default=c});
//# sourceMappingURL=../../maps/layout/router.js.map