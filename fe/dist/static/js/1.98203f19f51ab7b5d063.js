webpackJsonp([1],{"1alW":function(t,e,r){var a=r("kM2E");a(a.S,"Number",{isInteger:r("AKgy")})},AKgy:function(t,e,r){var a=r("EqjI"),n=Math.floor;t.exports=function(t){return!a(t)&&isFinite(t)&&n(t)===t}},"RRo+":function(t,e,r){t.exports={default:r("c45H"),__esModule:!0}},TmV0:function(t,e,r){r("fZOM"),t.exports=r("FeBl").Object.values},Zc39:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),i=r("exGp"),c=r.n(i),s=r("RRo+"),o=r.n(s),u=r("gRE1"),l=r.n(u),d=r("Dd8w"),v=r.n(d),_=r("NYxO"),f={computed:v()({},Object(_.b)({cartProducts:function(t){return t.products.cartProducts}}),{totalSubOrder:function(){if(this.cartProducts.length>0){var t=0;l()(this.cartProducts).forEach(function(e){o()(parseInt(e.quantity))?t+=parseInt(e.price)*parseInt(e.quantity):t+=parseInt(e.price)}),this.totalCartPrice=t}else this.totalCartPrice=0;return this.totalCartPrice},totalCartOrder:function(){return this.cartProducts.length>0?parseInt(this.totalCartPrice)+1e4:0}}),methods:{deleteFromCart:function(t){this.$store.dispatch("products/deleteFromCart",t)},productPrice:function(t,e){return e?t*e:t},createOrder:function(){var t=this;return c()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={discountId:1,courierName:"jne",courierService:"OKE",courierPrice:1e4,totalPayment:t.totalCartOrder,bank:"bni",items:[]},void 0,l()(t.cartProducts).forEach(function(t){r.items.push({productId:t.id,adminId:1,quantity:t.quantity})}),e.next=5,t.$store.dispatch("orders/create",r);case 5:t.$store.dispatch("snackbar/setSnackbar",{text:"successfully create Order"});case 6:case"end":return e.stop()}},e,t)}))()}},data:function(){return{totalCartPrice:0,totalCart:0,totalOrder:0,rating:4.5}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("p",{staticClass:"display-3 font-weight-light\ttext-center pa-4"},[t._v("CART")]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:12,md:"9",sm:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v("PRODUK")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("HARGA")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("QUANTITY")]),t._v(" "),r("th",{staticClass:"text-center"},[t._v("TOTAL")]),t._v(" "),r("th",{staticClass:"text-center"})])]),t._v(" "),r("tbody",t._l(t.cartProducts,function(e){return r("tr",{key:e.id},[r("td",[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{attrs:{src:e.imageName}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(e.descriptions))])],1)],1)],1),t._v(" "),r("td",[t._v(t._s(t._f("toCurrency")(e.price)))]),t._v(" "),r("v-text-field",{staticClass:"pt-10",staticStyle:{width:"80px"},attrs:{label:"Outlined","single-line":"",type:"number"},model:{value:e.quantity,callback:function(r){t.$set(e,"quantity",r)},expression:"product.quantity"}}),t._v(" "),r("td",[t._v(t._s(t._f("toCurrency")(t.productPrice(e.price,e.quantity))))]),t._v(" "),r("td",[r("a",{on:{click:function(r){return t.deleteFromCart(e)}}},[t._v("X")])])],1)}),0)]},proxy:!0}])})],1),t._v(" "),r("v-col",{staticStyle:{"background-color":"lightgray"},attrs:{cols:12,md:"3",sm:"12"}},[r("p",{staticClass:"headline"},[t._v("Detail Order")]),t._v(" "),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("td",[t._v("Order Subtotal")]),t._v(" "),r("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v(t._s(t._f("toCurrency")(t.totalSubOrder)))])]),t._v(" "),r("tr",[r("td",[t._v("Biaya Kirim")]),t._v(" "),r("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v("Rp.10.000")])]),t._v(" "),r("tr",[r("td",[t._v("Total")]),t._v(" "),r("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[r("b",[t._v(t._s(t._f("toCurrency")(t.totalCartOrder)))])])])])]},proxy:!0}])}),t._v(" "),r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"primary white--text mt-5",attrs:{outlined:""},on:{click:function(e){return t.createOrder()}}},[t._v("Order")])],1)],1)],1)],1)],1)},staticRenderFns:[]},h=r("VU/8")(f,p,!1,null,null,null);e.default=h.exports},c45H:function(t,e,r){r("1alW"),t.exports=r("FeBl").Number.isInteger},fZOM:function(t,e,r){var a=r("kM2E"),n=r("mbce")(!1);a(a.S,"Object",{values:function(t){return n(t)}})},gRE1:function(t,e,r){t.exports={default:r("TmV0"),__esModule:!0}},mbce:function(t,e,r){var a=r("+E39"),n=r("lktj"),i=r("TcQ7"),c=r("NpIQ").f;t.exports=function(t){return function(e){for(var r,s=i(e),o=n(s),u=o.length,l=0,d=[];u>l;)r=o[l++],a&&!c.call(s,r)||d.push(t?[r,s[r]]:s[r]);return d}}}});
//# sourceMappingURL=1.98203f19f51ab7b5d063.js.map