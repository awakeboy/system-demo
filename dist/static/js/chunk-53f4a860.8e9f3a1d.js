(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53f4a860"],{"280f":function(e,t,n){},"2bdf":function(e,t,n){"use strict";var a=n("ab48"),r=n.n(a);r.a},5032:function(e,t,n){"use strict";var a=n("c4f1"),r=n.n(a);r.a},8593:function(e,t,n){"use strict";n.d(t,"p",(function(){return r})),n.d(t,"i",(function(){return l})),n.d(t,"v",(function(){return o})),n.d(t,"B",(function(){return i})),n.d(t,"z",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"u",(function(){return c})),n.d(t,"o",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"w",(function(){return p})),n.d(t,"q",(function(){return h})),n.d(t,"l",(function(){return b})),n.d(t,"r",(function(){return m})),n.d(t,"x",(function(){return I})),n.d(t,"y",(function(){return D})),n.d(t,"A",(function(){return M})),n.d(t,"D",(function(){return v})),n.d(t,"C",(function(){return g})),n.d(t,"k",(function(){return G})),n.d(t,"m",(function(){return C})),n.d(t,"f",(function(){return N})),n.d(t,"s",(function(){return U})),n.d(t,"g",(function(){return L})),n.d(t,"t",(function(){return O})),n.d(t,"n",(function(){return P})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return E})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return S})),n.d(t,"e",(function(){return R}));var a=n("b775");function r(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=DeleteMenu",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddMenu",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=UpdateMenu",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=GetOrganizeList",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=GetDepartmentList",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddDepartment",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=UpdateDepartment",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=DeleteDepartment",method:"post",data:e})}function f(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddRole",method:"post",data:e})}function p(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=UpdateRole",method:"post",data:e})}function h(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=DeleteRole",method:"post",data:e})}function b(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddUser",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=DeleteUser",method:"post",data:e})}function I(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=UpdateUser",method:"post",data:e})}function D(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=GetCodeTypeList",method:"post",data:e})}function M(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=GetMenuList",method:"post",data:e})}function v(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=GetUserALL",method:"post",data:e})}function g(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=GetRoleUser",method:"post",data:e})}function G(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddRoleUser",method:"post",data:e})}function C(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=DeleteCode",method:"post",data:e})}function N(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddCode",method:"post",data:e})}function U(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=UpdateCode",method:"post",data:e})}function L(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddCodeType",method:"post",data:e})}function O(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=UpdateCodeType",method:"post",data:e})}function P(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=DeleteCodeType",method:"post",data:e})}function w(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddUserRole",method:"post",data:e})}function E(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddRoleMenu",method:"post",data:e})}function j(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=DeleteOrganize",method:"post",data:e})}function S(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=AddOrganize",method:"post",data:e})}function R(e){return Object(a["a"])({url:"/api/service/GetMethod?GNID=UpdateOrganize",method:"post",data:e})}},ab48:function(e,t,n){},b5fb:function(e,t,n){"use strict";var a=n("280f"),r=n.n(a);r.a},b72b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",[n("div",{staticClass:"filter-container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add()}}},[e._v("添加")])],1)],1)],1),e._v(" "),n("el-table",{ref:"table",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{height:e.tableHeight,data:e.tableData,"row-key":"MenuID","default-expand-all":"","highlight-current-row":"",stripe:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"MenuName",label:"菜单名称",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.children&&0!==t.row.children.length?n("svg-icon",{attrs:{"icon-class":"folder"}}):n("svg-icon",{attrs:{"icon-class":"file"}}),e._v(" "),n("span",[e._v(e._s(t.row.MenuName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"MenuCode",label:"编码",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"ParentID",label:"上级菜单",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.idToName(t.row.ParentID))+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"IsEnable",label:"是否启用",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[1===e.row.IsEnable?n("svg-icon",{attrs:{"icon-class":"selectBox"}}):n("svg-icon",{attrs:{"icon-class":"noSelectBox"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"MenuSeq",label:"排序",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.del(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogEditVisible,title:e.dialogEditTitle,"append-to-body":!0},on:{"update:visible":function(t){e.dialogEditVisible=t}}},[n("edit-form",{attrs:{form:e.currentRow,"dialog-edit-visible":e.dialogEditVisible},on:{closeDialog:e.closeDialog}})],1)],1)},r=[],l=n("c24f"),o=(n("8593"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"菜单名称：",prop:"MenuName"}},[n("el-input",{attrs:{placeholder:"请输入",maxlength:"60","show-word-limit":""},model:{value:e.form.MenuName,callback:function(t){e.$set(e.form,"MenuName",t)},expression:"form.MenuName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"编码：",prop:"MenuCode"}},[n("el-input",{attrs:{placeholder:"请输入编码",maxlength:"60","show-word-limit":""},model:{value:e.form.MenuCode,callback:function(t){e.$set(e.form,"MenuCode",t)},expression:"form.MenuCode"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"上级菜单："}},[n("el-cascader",{ref:"elcascader1",staticStyle:{width:"100%"},attrs:{placeholder:"请选择",options:e.menuList,props:{checkStrictly:!0,expandTrigger:"hover"},clearable:"",filterable:""},on:{change:e.changeVal1},model:{value:e.form.ParentID,callback:function(t){e.$set(e.form,"ParentID",t)},expression:"form.ParentID"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"排序：",prop:"MenuSeq"}},[n("el-input",{attrs:{placeholder:"请输入",maxlength:"60","show-word-limit":"",type:"number"},on:{input:e.changeNum},model:{value:e.form.MenuSeq,callback:function(t){e.$set(e.form,"MenuSeq",t)},expression:"form.MenuSeq"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否可见："}},[n("el-checkbox",{model:{value:e.form.IsVisible,callback:function(t){e.$set(e.form,"IsVisible",t)},expression:"form.IsVisible"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否启用："}},[n("el-checkbox",{model:{value:e.form.IsEnable,callback:function(t){e.$set(e.form,"IsEnable",t)},expression:"form.IsEnable"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"handle"},[n("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.save()}}},[e._v("保存")]),e._v(" "),n("el-button",{attrs:{type:""},on:{click:function(t){return e.closeDialog()}}},[e._v("取消")])],1)])],1)],1)],1)}),i=[];var u={props:{form:{type:Object,default:function(){return{MenuName:"",ParentID:"",MenuCode:"",URL:"",IsVisible:!0,IsEnable:!0,MenuSeq:""}}},dialogEditVisible:{type:Boolean,default:function(){return!1}}},data:function(){return{loading:!1,parentMenuList:[],rules:{MenuName:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],MenuCode:[{required:!0,message:"请输入菜单编码",trigger:"blur"}],MenuSeq:[{required:!0,message:"请输入排序",trigger:"blur"}]},menuList:[]}},watch:{dialogEditVisible:function(){this.dialogEditVisible&&this.getMenuList()}},created:function(){this.getMenuList()},methods:{changeVal1:function(){this.$refs.elcascader1.dropDownVisible=!1},changeNum:function(e){this.form.MenuSeq.length>3&&(this.form.MenuSeq=this.form.MenuSeq.slice(0,3))},getMenuList:function(){var e=this,t={OrganizeCode:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"]};Object(l["b"])(t).then((function(t){var n=t.Data,a=function e(t){t.forEach((function(t){t.children&&0!==t.children.length?e(t.children):delete t.children,t.label=t.MenuName,t.value=t.MenuID}))};function r(e,t){return e.filter((function(e,n){return e.children&&(e.children=r(e.children,t)),e.MenuID!==t&&1===e.IsEnable}))}a(n);var l=r(n,e.form.MenuID);e.menuList=l}))},save:function(){var e=this;this.$refs["form"].validate((function(t){if(t)return e.loading=!0,e.$message({message:"保存成功",type:"success"}),e.$emit("closeDialog"),void e.closeLoading()}))},closeDialog:function(){this.$emit("closeDialog")},closeLoading:function(){var e=this;setTimeout((function(){e.loading=!1}),500)}}},s=u,c=(n("2bdf"),n("2877")),d=Object(c["a"])(s,o,i,!1,null,"9ec25c40",null),f=d.exports,p={components:{EditForm:f},data:function(){return{tableHeight:innerHeight-230,tableData:[{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"XTSZ",MenuID:"77c2d56f297d4628affe58d5760fe0ca",MenuName:"系统管理",MenuSeq:"1",ParentID:"0",URL:"",UpdateDate:null,UpdatePerson:null,children:[{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"CDDH",MenuID:"e31de345f2024b42a13cf21bea1271c7 ",MenuName:"菜单管理",MenuSeq:"1",ParentID:"77c2d56f297d4628affe58d5760fe0ca",URL:"",UpdateDate:null,UpdatePerson:null,children:[]},{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"JSGL",MenuID:"e31de345f2024b42a13cf21bea1271c8 ",MenuName:"角色管理",MenuSeq:"2",ParentID:"77c2d56f297d4628affe58d5760fe0ca",URL:"",UpdateDate:null,UpdatePerson:null,children:[]},{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"YHGL",MenuID:"e31de345f2024b42a13cf21bea1271c9 ",MenuName:"用户管理",MenuSeq:"3",ParentID:"77c2d56f297d4628affe58d5760fe0ca",URL:"",UpdateDate:null,UpdatePerson:null,children:[]},{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"SJZD",MenuID:"e31de345f2024b42a13cf21bea1271e1 ",MenuName:"数据字典",MenuSeq:"4",ParentID:"77c2d56f297d4628affe58d5760fe0ca",URL:"",UpdateDate:null,UpdatePerson:null,children:[]},{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"RZGL",MenuID:"e31de345f2024b42a13cf21bea1271c3 ",MenuName:"日志管理",MenuSeq:"5",ParentID:"77c2d56f297d4628affe58d5760fe0ca",URL:"",UpdateDate:null,UpdatePerson:null,children:[]}]},{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"TXGDGL",MenuID:"77c2d56f297d4628affe58d5760fe0cb",MenuName:"通信管道管理",MenuSeq:"2",ParentID:"0",URL:"",UpdateDate:null,UpdatePerson:null,children:[{CreateDate:null,CreatePerson:null,Description:null,IconClass:"",IconURL:"",IsChecked:null,IsDelete:null,IsEnable:1,IsMain:0,IsVisible:1,MenuCode:"TXGDXM",MenuID:"e31de345f2024b42a13cf21bea1271c5 ",MenuName:"通行管道项目",MenuSeq:"1",ParentID:"77c2d56f297d4628affe58d5760fe0cb",URL:"",UpdateDate:null,UpdatePerson:null,children:[]}]}],ParentIDList:[],dialogEditVisible:!1,dialogEditTitle:"新增主站后台菜单",currentRow:{MenuID:"",MenuName:"",ParentID:"",MenuCode:"",URL:"",IsVisible:!0,IsEnable:!0,MenuSeq:""}}},created:function(){},methods:{getData:function(){},idToName:function(e){if(!e)return"";for(var t="",n=0;n<this.ParentIDList.length;n++)if(this.ParentIDList[n].value===e){t=this.ParentIDList[n].lable;break}return t},add:function(){this.currentRow={MenuID:"",MenuName:"",ParentID:"",MenuCode:"",URL:"",IsVisible:!0,IsEnable:!0,MenuSeq:""},this.dialogEditTitle="新增主站后台菜单",this.dialogEditVisible=!0},edit:function(e){this.currentRow={MenuID:e.MenuID,MenuName:e.MenuName,ParentID:e.ParentID,MenuCode:e.MenuCode,URL:e.URL,IsVisible:1===e.IsVisible,IsEnable:1===e.IsEnable,MenuSeq:e.MenuSeq},this.dialogEditTitle="编辑主站后台菜单",this.dialogEditVisible=!0},del:function(e){var t=this;this.$confirm("此操作将删除"+e.MenuName+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({message:"删除成功",type:"success"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},closeDialog:function(){this.dialogEditVisible=!1,this.getData()}}},h=p,b=(n("b5fb"),n("5032"),Object(c["a"])(h,a,r,!1,null,"2f992ee4",null));t["default"]=b.exports},c4f1:function(e,t,n){}}]);