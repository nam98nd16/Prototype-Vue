webpackJsonp([1],{"9M+g":function(e,t){},BFZY:function(e,t){},BuVq:function(e,t){},D4uH:function(e,t,i){"use strict";var o=i("Gu7T"),n=i.n(o),a=i("bOdI"),s=i.n(a),l={},r={name:"fa-icon",props:{name:{type:String,validator:function(e){return!e||e in l||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String,tabindex:[Number,String]},data:function(){return{id:d(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return s()({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?l[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,i=e.height;return Math.max(t,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,i,o){var n=d();return t[o]=n,' id="'+n+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,i,o,n){var a=i||n;return a&&t[a]?"#"+t[a]:e}),e},focusable:function(){var e=this.tabindex;return null==e?"false":("string"==typeof e?parseInt(e,10):e)>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var e=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var t=0,i=0;this.$children.forEach(function(o){o.outerScale=e.normalizedScale,t=Math.max(t,o.width),i=Math.max(i,o.height)}),this.childrenWidth=t,this.childrenHeight=i,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(i-e.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')}},render:function(e){if(null===this.name)return e();var t={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},i="vat-"+this.id;if(this.title&&(t.attrs["aria-labelledby"]=i),this.raw){var o=this.raw;this.title&&(o='<title id="'+i+'">'+function(e){return e.replace(/[<>"&]/g,function(e){return m[e]||e})}(this.title)+"</title>"+o),t.domProps={innerHTML:o}}var a=this.title?[e("title",{attrs:{id:i}},this.title)]:[];return e("svg",t,this.raw?null:a.concat(this.$slots.default||[].concat(n()(this.icon.paths.map(function(t,i){return e("path",{attrs:t,key:"path-"+i})})),n()(this.icon.polygons.map(function(t,i){return e("polygon",{attrs:t,key:"polygon-"+i})})))))},register:function(e){for(var t in e){var i=e[t],o=i.paths,n=void 0===o?[]:o,a=i.d,s=i.polygons,r=void 0===s?[]:s,p=i.points;a&&n.push({d:a}),p&&r.push({points:p}),l[t]=c({},i,{paths:n,polygons:r})}},icons:l};function c(e){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return i.forEach(function(t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])}),e}var p=870711;function d(){return"va-"+(p++).toString(16)}var m={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};var h=i("VU/8")(r,null,!1,function(e){i("BuVq")},null,null);t.a=h.exports},EGHM:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("7+uW"),n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{color:"white"}},[i("b-navbar",{staticStyle:{"background-color":"#00008B"},attrs:{fixed:"top",toggleable:"lg"}},[i("b-navbar-nav",[i("div",{staticStyle:{position:"relative",top:"6.5px"}},[i("v-icon",{attrs:{name:"calendar-alt",fixed:"bottom"}})],1),e._v(" "),i("b-nav-item-dropdown",{attrs:{text:"Daily Report"}},[i("b-dropdown-item",{attrs:{href:"#"}},[e._v("test")])],1),e._v(" "),i("div",[i("span",{staticStyle:{display:"inline-block",width:"10px"}})]),e._v(" "),i("div",{staticStyle:{position:"relative",top:"6.5px"}},[i("v-icon",{attrs:{name:"cubes",fixed:"bottom"}})],1),e._v(" "),i("b-nav-item-dropdown",{attrs:{text:"Company Management"}},[i("b-dropdown-item",{attrs:{href:"#"}},[e._v("test")])],1),e._v(" "),i("div",[i("span",{staticStyle:{display:"inline-block",width:"10px"}})]),e._v(" "),i("div",{staticStyle:{position:"relative",top:"6.5px"}},[i("v-icon",{attrs:{name:"chart-bar",fixed:"bottom"}})],1),e._v(" "),i("b-nav-item-dropdown",{attrs:{text:"Report"}},[i("b-dropdown-item",{attrs:{href:"#"}},[e._v("test")])],1),e._v(" "),i("div",[i("span",{staticStyle:{display:"inline-block",width:"10px"}})]),e._v(" "),i("div",{staticStyle:{position:"relative",top:"6.5px"}},[i("v-icon",{attrs:{name:"retweet",fixed:"bottom"}})],1),e._v(" "),i("b-nav-item-dropdown",{attrs:{text:"My Menu"}},[i("b-dropdown-item",{attrs:{href:"#"}},[e._v("test")])],1),e._v(" "),i("div",[i("span",{staticStyle:{display:"inline-block",width:"10px"}})]),e._v(" "),i("div",{staticStyle:{position:"relative",top:"6.5px"}},[i("v-icon",{attrs:{name:"regular/newspaper",fixed:"bottom"}})],1),e._v(" "),i("b-nav-item-dropdown",{attrs:{text:"Manager Menu"}},[i("b-dropdown-item",{attrs:{href:"#"}},[e._v("test")])],1),e._v(" "),i("div",[i("span",{staticStyle:{display:"inline-block",width:"10px"}})]),e._v(" "),i("b-button",{staticStyle:{"font-weight":"550"},attrs:{variant:"primary"}},[i("span",{staticStyle:{"font-weight":"bolder"}},[e._v("+")]),e._v("Register")])],1),e._v(" "),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-button",{staticStyle:{"font-weight":"550"},attrs:{variant:"primary"}},[e._v("Back to Dashboard")]),e._v(" "),i("div",[i("span",{staticStyle:{display:"inline-block",width:"10px"}})]),e._v(" "),i("div",{staticStyle:{position:"relative",top:"6.5px"}},[i("v-icon",{attrs:{name:"bell",fixed:"bottom"}})],1),e._v(" "),i("b-nav-item-dropdown",{attrs:{text:"Username"}},[i("b-dropdown-item",{attrs:{href:"#"}},[e._v("test")])],1)],1)],1)],1)},staticRenderFns:[]};var a={name:"App",components:{AppNavigation:i("VU/8")({methods:{}},n,!1,function(e){i("O/hd")},null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("AppNavigation"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(a,s,!1,function(e){i("EGHM")},null,null).exports,r=i("/ocq"),c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"padding-left":"10px","padding-bottom":"5px","padding-right":"10px"}},[i("br"),e._v(" "),e._m(0),e._v(" "),i("div",{staticClass:"card",staticStyle:{"padding-bottom":"10px"}},[i("br"),e._v(" "),i("b-container",{attrs:{fluid:""}},[i("transition",{attrs:{name:"fade"}},[e.showMain?i("b-table",{attrs:{"show-empty":"","head-variant":"light",hover:"",stacked:"md",items:e.items,fields:e.fields,"current-page":e.currentPage,filter:e.filter,bordered:!0,small:!0},scopedSlots:e._u([{key:"HEAD_isActive",fn:function(t){return[i("div",{staticStyle:{"text-align":"center"}},[i("p",[e._v(e._s(t.label))]),e._v(" "),i("b-dropdown",{attrs:{type:"light",variant:"primary",text:"Select"}},[i("b-dropdown-item",{on:{click:function(t){e.filter="true"}}},[e._v("Using")]),e._v(" "),i("b-dropdown-item",{on:{click:function(t){e.filter="false"}}},[e._v("Not Using")]),e._v(" "),i("b-dropdown-item",{on:{click:function(t){e.filter=""}}},[e._v("All")])],1)],1)]}},{key:"HEAD_code",fn:function(t){return[i("p",[e._v(e._s(t.label))])]}},{key:"HEAD_name",fn:function(t){return[i("p",[e._v(e._s(t.label))])]}},{key:"HEAD_manager_name",fn:function(t){return[i("p",[e._v(e._s(t.label))])]}},{key:"isActive",fn:function(t){return[e._v("\n                        "+e._s(t.value?"Using":"Not Using")+"\n                    ")]}},{key:"actions",fn:function(t){return[i("b-button",{staticClass:"mr-1",staticStyle:{"background-color":"#00008B",width:"85%"},on:{click:function(i){return e.openSettings(t.item)}}},[i("span",[i("div",{staticStyle:{"font-size":"67%"}},[e._v("Settings")])])])]}}],null,!1,3364183586)}):e._e()],1),e._v(" "),i("transition",{attrs:{name:"fade"}},[e.showSettings?i("div",[i("b-button",{staticStyle:{float:"left"},attrs:{variant:"outline-primary",size:"sm"},on:{click:e.closeSettings}},[i("span",{staticStyle:{display:"inline-block",width:"5px"}}),e._v("Return"),i("span",{staticStyle:{display:"inline-block",width:"5px"}})]),e._v(" "),i("br"),i("br"),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticStyle:{"padding-bottom":"50px",position:"relative"}},[i("div",{staticStyle:{width:"450px",height:"0px","padding-bottom":"20px"}},[i("p",{staticStyle:{"font-size":"14px",position:"relative","padding-top":"7px"}},[e._v("Branch Code: "+e._s(e.selectedItem.code))]),e._v(" "),i("p",{staticStyle:{"font-size":"14px",position:"relative",height:"10px"}},[e._v("Branch Name: "+e._s(e.selectedItem.name))])]),e._v(" "),i("div",{staticStyle:{position:"relative",float:"right",height:"0px","padding-top":"0px"}},[i("p",{staticStyle:{position:"relative",left:"-180px"}},[e._v("Branch Setting: ")]),e._v(" "),i("b-button",{staticStyle:{position:"relative",top:"-45px",left:"-30px","background-color":"#00008B"},attrs:{disabled:!e.selectedItem.isActive},on:{click:function(t){return e.showConfirmationBox(e.selectedItem.code)}}},[e._v("Not Using")]),e._v(" "),i("b-button",{staticStyle:{position:"relative",top:"-45px",left:"-20px","background-color":"#00008B"},attrs:{disabled:e.selectedItem.isActive},on:{click:function(t){return e.showConfirmationBox(e.selectedItem.code)}}},[e._v("Using")])],1)])]),e._v(" "),i("br"),e._v(" "),i("b-card",[i("b-button",{staticStyle:{float:"right",width:"90px"},attrs:{disabled:0==e.employeesToBeRemoved.length,variant:"danger"},on:{click:e.confirmDelete}},[i("span",[i("div",{staticStyle:{position:"relative",top:"-2px",right:"3px",float:"left"}},[i("v-icon",{attrs:{name:"trash-alt",fixed:"bottom"}})],1)]),e._v("Delete")]),e._v(" "),i("br"),i("br"),e._v(" "),i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"card",staticStyle:{position:"relative",float:"left",height:"100%","text-align":"left",width:"22.5%","margin-right":"2%"}},[i("div",{staticStyle:{"padding-left":"14px","padding-bottom":"13px","padding-top":"10px"}},[i("p",{staticStyle:{height:"10px"}},[e._v("Select branch")]),e._v(" "),i("div",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBranch,expression:"selectedBranch"}],staticStyle:{transform:"scale(1.37)",width:"8.2%",position:"relative"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedBranch=t.target.multiple?i:i[0]},e.clearSelectedEmployee]}},[i("option",{attrs:{disabled:""}},[e._v("\n                                                Head office code | Head office name\n                                            ")]),e._v(" "),e._l(e.items,function(t){return t!=e.selectedItem?i("option",{key:t.code,domProps:{value:t}},[e._v("\n                                                "+e._s(t.code)+" "),i("span",{staticStyle:{display:"inline-block",width:"100px"}},[e._v("       ")]),e._v("  "+e._s(t.name)+"\n                                            ")]):e._e()})],2),e._v(" "),i("input",{staticStyle:{width:"83%",position:"relative"},attrs:{type:"text",disabled:""},domProps:{value:e.selectedBranch.name}})]),e._v(" "),i("p",{staticStyle:{position:"relative","padding-top":"10px",height:"19px"}},[e._v("Select employee")]),e._v(" "),i("div",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEmployee,expression:"selectedEmployee"}],staticStyle:{transform:"scale(1.4)",width:"8.2%",position:"relative"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedEmployee=t.target.multiple?i:i[0]}}},[""!=e.selectedBranch?i("option",{attrs:{disabled:""}},[e._v("\n                                                Employee Code | Employee Name\n                                            ")]):e._e(),e._v(" "),e._l(e.selectedBranch.employees,function(t){return i("option",{key:t.name,domProps:{value:t}},[e._v("\n                                                "+e._s(t.eCode)),i("span",{staticStyle:{display:"inline-block",width:"100px"}},[e._v("       ")]),e._v(" "+e._s(t.eName)+"\n                                            ")])})],2),e._v(" "),null!=e.selectedEmployee?i("input",{staticStyle:{width:"83%",position:"relative"},attrs:{type:"text",disabled:""},domProps:{value:e.selectedEmployee.eName}}):i("input",{staticStyle:{width:"83%",position:"relative"},attrs:{type:"text",disabled:""}})]),e._v(" "),i("br"),i("br"),e._v(" "),i("b-button",{staticStyle:{width:"93%","background-color":"#00008B",position:"relative",top:"-10px"},attrs:{disabled:null==e.selectedEmployee},on:{click:function(t){return e.setAsContactPoint(e.selectedEmployee)}}},[i("span",[i("div",{staticStyle:{float:"left","padding-bottom":"2px"}},[i("v-icon",{attrs:{name:"regular/hand-point-up",fixed:"bottom"}})],1)]),e._v(" Set as contact point")])],1)]),e._v(" "),i("b-table",{staticStyle:{position:"relative",width:"100%",float:"right","max-width":"83%"},attrs:{"show-empty":"","head-variant":"light",hover:"",stacked:"md",filter:e.filter2,items:e.selectedItemEmployees,fields:e.employeeFields,"current-page":e.currentPage,bordered:!0,small:!0,fixed:!0},scopedSlots:e._u([{key:"HEAD_delete",fn:function(e){return[i("div",{staticStyle:{"padding-bottom":"2px"}},[i("v-icon",{attrs:{name:"trash-alt",fixed:"bottom"}})],1)]}},{key:"delete",fn:function(t){return[i("form",{staticStyle:{position:"relative",right:"5px",top:"3px",transform:"scale(1.8)"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employeesToBeRemoved,expression:"employeesToBeRemoved"}],staticStyle:{position:"relative",left:"4px"},attrs:{type:"checkbox"},domProps:{value:t.item,checked:Array.isArray(e.employeesToBeRemoved)?e._i(e.employeesToBeRemoved,t.item)>-1:e.employeesToBeRemoved},on:{change:function(i){var o=e.employeesToBeRemoved,n=i.target,a=!!n.checked;if(Array.isArray(o)){var s=t.item,l=e._i(o,s);n.checked?l<0&&(e.employeesToBeRemoved=o.concat([s])):l>-1&&(e.employeesToBeRemoved=o.slice(0,l).concat(o.slice(l+1)))}else e.employeesToBeRemoved=a}}})])]}}],null,!1,2271407961)})],1)],1),e._v(" "),i("br"),e._v(" "),i("div",{staticStyle:{display:"flex"}},[i("b-button",{staticStyle:{"background-color":"#00008B",float:"left",width:"90px"}},[i("span",[i("div",{staticStyle:{position:"relative",top:"-2px",right:"3px",float:"left"}},[i("v-icon",{attrs:{name:"save",fixed:"bottom"}})],1)]),e._v("Save")]),e._v(" "),i("b-button",{staticStyle:{"margin-left":"15px",width:"90px"},attrs:{variant:"outline-primary"}},[i("span",[i("div",{staticStyle:{position:"relative",top:"-2px",right:"3px",float:"left"}},[i("v-icon",{attrs:{name:"sync-alt",fixed:"bottom"}})],1)]),e._v("Reset")])],1)],1):e._e()])],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{staticStyle:{"text-align":"left","font-weight":"550"}},[this._v("Branch Management"),t("span",{staticStyle:{position:"relative",top:"-15px",color:"grey"}},[this._v("×")])])}]};var p=i("VU/8")({data:function(){return{items:[{isActive:!0,code:40,name:"A",manager_name:"Deathless",employees:[{eCode:"123",eName:"Nam",position:"intern",workplace:"A"},{eCode:"141",eName:"Nam2",position:"intern",workplace:"A"},{eCode:"159",eName:"Nam3",position:"intern",workplace:"A"},{eCode:"177",eName:"Nam4",position:"intern",workplace:"A"},{eCode:"178",eName:"Nam5",position:"intern",workplace:"A"},{eCode:"178",eName:"Nam6",position:"intern",workplace:"A"}]},{isActive:!1,code:21,name:"B",manager_name:"Unnamed",employees:[{eCode:"124",eName:"B1",position:"Bpostion",workplace:"B"},{eCode:"142",eName:"B2",position:"Bpostion",workplace:"B"},{eCode:"160",eName:"B3",position:"Bpostion",workplace:"B"}]},{isActive:!1,code:19,name:"C",manager_name:"Nameless",employees:[{eCode:"125",eName:"C1",position:"Cpostion",workplace:"C"},{eCode:"143",eName:"C2",position:"Cpostion",workplace:"C"},{eCode:"161",eName:"C3",position:"Cpostion",workplace:"C"}]},{isActive:!1,code:89,name:"D",manager_name:"Undying",employees:[{eCode:"126",eName:"D1",position:"Dpostion",workplace:"D"},{eCode:"144",eName:"D2",position:"Dpostion",workplace:"D"},{eCode:"162",eName:"D3",position:"Dpostion",workplace:"D"}]},{isActive:!0,code:38,name:"E",manager_name:"Gargantuar",employees:[{eCode:"127",eName:"E1",position:"Epostion",workplace:"E"},{eCode:"145",eName:"E2",position:"Epostion",workplace:"E"},{eCode:"163",eName:"E3",position:"Epostion",workplace:"E"}]},{isActive:!1,code:27,name:"F",manager_name:"Unknown",employees:[{eCode:"128",eName:"F1",position:"Fpostion",workplace:"F"},{eCode:"146",eName:"F2",position:"Fpostion",workplace:"F"},{eCode:"164",eName:"F3",position:"Fpostion",workplace:"F"}]},{isActive:!0,code:41,name:"G",manager_name:"Zomboss",employees:[{eCode:"129",eName:"G1",position:"Gpostion",workplace:"G"},{eCode:"147",eName:"G2",position:"Gpostion",workplace:"G"},{eCode:"165",eName:"G3",position:"Gpostion",workplace:"G"}]},{isActive:!0,code:87,name:"H",manager_name:"High Priest",employees:[{eCode:"130",eName:"H1",position:"Hpostion",workplace:"H"},{eCode:"148",eName:"H2",position:"Hpostion",workplace:"H"},{eCode:"166",eName:"H3",position:"Hpostion",workplace:"H"}]},{isActive:!1,code:26,name:"I",manager_name:"Buckethead",employees:[{eCode:"131",eName:"I1",position:"Ipostion",workplace:"I"},{eCode:"149",eName:"I2",position:"Ipostion",workplace:"I"},{eCode:"167",eName:"I3",position:"Ipostion",workplace:"I"}]},{isActive:!1,code:22,name:"J",manager_name:"Conehead",employees:[{eCode:"132",eName:"J1",position:"Jpostion",workplace:"J"},{eCode:"150",eName:"J2",position:"Jpostion",workplace:"J"},{eCode:"168",eName:"J3",position:"Jpostion",workplace:"J"}]},{isActive:!0,code:39,name:"K",manager_name:"Wizard",employees:[{eCode:"133",eName:"K1",position:"Kpostion",workplace:"K"},{eCode:"151",eName:"K2",position:"Kpostion",workplace:"K"},{eCode:"169",eName:"K3",position:"Kpostion",workplace:"K"}]},{isActive:!1,code:50,name:"L",manager_name:"Barbarian",employees:[{eCode:"134",eName:"L1",position:"Lpostion",workplace:"L"},{eCode:"152",eName:"L2",position:"Lpostion",workplace:"L"},{eCode:"170",eName:"L3",position:"Lpostion",workplace:"L"}]},{isActive:!0,code:51,name:"M",manager_name:"Archer",employees:[{eCode:"135",eName:"M1",position:"Mpostion",workplace:"M"},{eCode:"153",eName:"M2",position:"Mpostion",workplace:"M"},{eCode:"171",eName:"M3",position:"Mpostion",workplace:"M"}]},{isActive:!1,code:52,name:"N",manager_name:"Ice",employees:[{eCode:"136",eName:"N1",position:"Npostion",workplace:"N"},{eCode:"154",eName:"N2",position:"Npostion",workplace:"N"},{eCode:"172",eName:"N3",position:"Npostion",workplace:"N"}]},{isActive:!0,code:53,name:"O",manager_name:"Fire",employees:[{eCode:"137",eName:"O1",position:"Opostion",workplace:"O"},{eCode:"155",eName:"O2",position:"Opostion",workplace:"O"},{eCode:"173",eName:"O3",position:"Opostion",workplace:"O"}]},{isActive:!1,code:54,name:"P",manager_name:"Rocket",employees:[{eCode:"138",eName:"P1",position:"Ppostion",workplace:"P"},{eCode:"156",eName:"P2",position:"Ppostion",workplace:"P"},{eCode:"174",eName:"P3",position:"Ppostion",workplace:"P"}]},{isActive:!0,code:55,name:"Q",manager_name:"Lightning",employees:[{eCode:"139",eName:"Q1",position:"Qpostion",workplace:"Q"},{eCode:"157",eName:"Q2",position:"Qpostion",workplace:"Q"},{eCode:"175",eName:"Q3",position:"Qpostion",workplace:"Q"}]},{isActive:!1,code:56,name:"R",manager_name:"Fisherman",employees:[{eCode:"140",eName:"R1",position:"Rpostion",workplace:"R"},{eCode:"158",eName:"R2",position:"Rpostion",workplace:"R"},{eCode:"176",eName:"R3",position:"Rpostion",workplace:"R"}]}],fields:[{key:"actions",label:"",class:"fit"},{key:"code",label:"Branch Code",sortable:!0,class:"text-left"},{key:"name",label:"Branch Name",sortable:!0,class:"text-left"},{key:"manager_name",label:"Manager Name",sortable:!0,class:"text-left"},{key:"isActive",label:"Status",sortable:!0,class:"fit2"}],employeeFields:[{key:"eName",label:"Employee Name",class:"text-left"},{key:"position",label:"Position",class:"text-left"},{key:"workplace",label:"Workplace",class:"text-left"},{key:"delete",label:"",class:"fit3"}],totalRows:1,currentPage:1,filter:null,showMain:!0,showSettings:!1,selectedItem:"",selectedItemEmployees:[],selectedBranch:"",selectedEmployee:null,employeesToBeRemoved:[],checkStatus:"",filter2:""}},mounted:function(){this.filter=""},methods:{openSettings:function(e){this.selectedItem=e,this.selectedItemEmployees=e.employees,this.showMain=!1,this.showSettings=!0},closeSettings:function(){this.selectedBranch="",this.selectedEmployee=null,this.showMain=!0,this.showSettings=!1},updateStatus:function(e){this.items[this.items.findIndex(function(t){return t.code==e})].isActive=!this.items[this.items.findIndex(function(t){return t.code==e})].isActive},clearSelectedEmployee:function(){this.selectedEmployee=null},removeEmployees:function(){var e=this,t=[],i=this.items.indexOf(this.selectedItem),o=this.items[i].employees;this.employeesToBeRemoved.forEach(function(e){t.push(o.indexOf(e))}),t.sort();for(var n=t.length-1;n>=0;n--)this.items[i].employees.splice(t[n],1);for(n=this.employeesToBeRemoved.length-1;n>=0;n--)if(this.employeesToBeRemoved[n].workplace!=this.selectedItem.name){var a=this.items.findIndex(function(t){return t.name==e.employeesToBeRemoved[n].workplace});this.items[a].employees.push(this.employeesToBeRemoved[n])}this.employeesToBeRemoved=[]},setAsContactPoint:function(e){var t=this.items.indexOf(this.selectedItem);if(-1==this.items[t].employees.indexOf(e)){this.items[t].employees.push(e);var i=this.items.indexOf(this.selectedBranch),o=this.items[i].employees.indexOf(e);this.items[i].employees.splice(o,1),this.selectedEmployee=null}},showConfirmationBox:function(e){var t=this;this.$bvModal.msgBoxConfirm("Do you really wish to switch the status of this branch?",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(function(i){i&&(t.updateStatus(e),t.$bvToast.toast("Successfully changed branch's status!",{title:"Message",autoHideDelay:5e3,solid:!0,variant:"success"}))}).catch(function(e){})},confirmDelete:function(){var e=this;this.$bvModal.msgBoxConfirm("Are you sure that you want to remove selected employees?",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(function(t){t&&(e.removeEmployees(),e.$bvToast.toast("Successfully removed selected employees!",{title:"Message",autoHideDelay:5e3,solid:!0,variant:"success"}))}).catch(function(e){})}}},c,!1,function(e){i("BFZY")},null,null).exports;o.default.use(r.a);var d=new r.a({routes:[{path:"/",name:"BranchManagement",component:p}]}),m=(i("Jmt5"),i("9M+g"),i("Tqaz")),h=(i("k6Qi"),i("7Pwk"),i("4vVE"),i("xKmn"),i("d+DC"),i("awW3"),i("DnVZ"),i("FoHd"),i("g+VN"),i("gpss"),i("D4uH"));o.default.component("v-icon",h.a),o.default.use(m.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:d,components:{App:l,"v-icon":h.a},template:"<App/>"})},"O/hd":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.dcbcb269580bf03009d8.js.map