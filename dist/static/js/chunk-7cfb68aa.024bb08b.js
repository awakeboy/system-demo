(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cfb68aa"],{"3ec7":function(e,t,r){},"76fb":function(e,t,r){"use strict";var n=r("3ec7"),a=r.n(n);a.a},8593:function(e,t,r){"use strict";r.d(t,"p",(function(){return a})),r.d(t,"i",(function(){return o})),r.d(t,"v",(function(){return i})),r.d(t,"B",(function(){return s})),r.d(t,"z",(function(){return c})),r.d(t,"h",(function(){return l})),r.d(t,"u",(function(){return d})),r.d(t,"o",(function(){return u})),r.d(t,"j",(function(){return m})),r.d(t,"w",(function(){return p})),r.d(t,"q",(function(){return f})),r.d(t,"l",(function(){return D})),r.d(t,"r",(function(){return g})),r.d(t,"x",(function(){return h})),r.d(t,"y",(function(){return b})),r.d(t,"A",(function(){return v})),r.d(t,"D",(function(){return I})),r.d(t,"C",(function(){return O})),r.d(t,"k",(function(){return C})),r.d(t,"m",(function(){return N})),r.d(t,"f",(function(){return G})),r.d(t,"s",(function(){return z})),r.d(t,"g",(function(){return y})),r.d(t,"t",(function(){return w})),r.d(t,"n",(function(){return j})),r.d(t,"c",(function(){return _})),r.d(t,"b",(function(){return P})),r.d(t,"d",(function(){return k})),r.d(t,"a",(function(){return M})),r.d(t,"e",(function(){return x}));var n=r("b775");function a(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteMenu",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddMenu",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateMenu",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetOrganizeList",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetDepartmentList",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddDepartment",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateDepartment",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteDepartment",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddRole",method:"post",data:e})}function p(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateRole",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteRole",method:"post",data:e})}function D(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddUser",method:"post",data:e})}function g(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteUser",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateUser",method:"post",data:e})}function b(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetCodeTypeList",method:"post",data:e})}function v(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetMenuList",method:"post",data:e})}function I(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetUserALL",method:"post",data:e})}function O(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=GetRoleUser",method:"post",data:e})}function C(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddRoleUser",method:"post",data:e})}function N(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteCode",method:"post",data:e})}function G(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddCode",method:"post",data:e})}function z(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateCode",method:"post",data:e})}function y(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddCodeType",method:"post",data:e})}function w(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateCodeType",method:"post",data:e})}function j(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteCodeType",method:"post",data:e})}function _(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddUserRole",method:"post",data:e})}function P(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddRoleMenu",method:"post",data:e})}function k(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=DeleteOrganize",method:"post",data:e})}function M(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=AddOrganize",method:"post",data:e})}function x(e){return Object(n["a"])({url:"/api/service/GetMethod?GNID=UpdateOrganize",method:"post",data:e})}},"87bb":function(e,t,r){"use strict";var n=r("c473"),a=r.n(n);a.a},c473:function(e,t,r){},eff7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"orgCard"},[r("div",{staticClass:"title"},[e._v("组织机构")]),e._v(" "),r("el-tree",{attrs:{data:e.treeData,"node-key":"OrganizeID","default-expand-all":"","highlight-current":"","expand-on-click-node":!1},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var n=t.data;return r("span",{staticClass:"custom-tree-node"},[n.children&&0!==n.children.length?r("svg-icon",{attrs:{"icon-class":"folder"}}):r("svg-icon",{attrs:{"icon-class":"file"}}),e._v(" "),r("span",{attrs:{title:n.OrganizeName}},[e._v(e._s(n.OrganizeName))])],1)}}])})],1),e._v(" "),r("el-card",{staticClass:"departmentCard"},[r("div",{staticClass:"filter-container"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add()}}},[e._v("添加")])],1)],1)],1),e._v(" "),r("div",{staticClass:"filter-container"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"部门名称"}},[r("el-input",{attrs:{placeholder:"请输入部门名称",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"部门编码"}},[r("el-input",{attrs:{placeholder:"请输入部门编码",clearable:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")])],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1)],1),e._v(" "),r("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{stripe:"",height:e.tableHeight,data:e.tableData,"row-key":"DepartmentID","default-expand-all":"","highlight-current-row":"","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"current-change":e.handleCurrentChange}},[r("el-table-column",{attrs:{prop:"DepartmentName",label:"部门名称",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.children&&0!==t.row.children.length?r("svg-icon",{attrs:{"icon-class":"folder"}}):r("svg-icon",{attrs:{"icon-class":"file"}}),e._v(" "),r("span",[e._v(e._s(t.row.DepartmentName))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"DepartmenCode",label:"部门编码",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"ParentID",label:"上级部门",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.parentNameFilters(t.row.ParentID))+"\n        ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"Description",label:"描述说明",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.del(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogEditVisible,title:e.dialogEditTitle,"append-to-body":!0},on:{"update:visible":function(t){e.dialogEditVisible=t}}},[r("edit-form",{attrs:{form:e.form,"form-parent-list":e.formParentList,"dialog-edit-visible":e.dialogEditVisible},on:{closeDialog:e.closeDialog}})],1)],1)},a=[],o=r("8593"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"部门名称：",prop:"DepartmentName"}},[r("el-input",{attrs:{placeholder:"请输入部门名称",maxlength:"60","show-word-limit":""},model:{value:e.form.DepartmentName,callback:function(t){e.$set(e.form,"DepartmentName",t)},expression:"form.DepartmentName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"部门编码：",prop:"DepartmenCode"}},[r("el-input",{attrs:{placeholder:"请输入部门编码",maxlength:"60","show-word-limit":""},model:{value:e.form.DepartmenCode,callback:function(t){e.$set(e.form,"DepartmenCode",t)},expression:"form.DepartmenCode"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"上级部门：",prop:"ParentID"}},[r("el-cascader",{ref:"elcascader1",staticStyle:{width:"100%"},attrs:{options:e.list,props:{checkStrictly:!0,expandTrigger:"hover"},clearable:"",filterable:""},on:{change:e.changeVal1},model:{value:e.form.ParentID,callback:function(t){e.$set(e.form,"ParentID",t)},expression:"form.ParentID"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"描述：",prop:"Description"}},[r("el-input",{attrs:{placeholder:"请输入描述",maxlength:"60","show-word-limit":""},model:{value:e.form.Description,callback:function(t){e.$set(e.form,"Description",t)},expression:"form.Description"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"handle"},[r("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.save()}}},[e._v("保存")]),e._v(" "),r("el-button",{attrs:{type:""},on:{click:function(t){return e.closeDialog()}}},[e._v("取消")])],1)])],1)],1)],1)},s=[];function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var l={props:{dialogEditVisible:{type:Boolean,default:!1},form:{type:Object,default:function(){return{DepartmentID:"",DepartmentName:"",DepartmenCode:"",ParentID:"",Description:"",OrganizeCode:"",OrganizeID:""}}},formParentList:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,list:[],rules:{DepartmentName:[{required:!0,message:"请输入部门名称",trigger:"blur"}],DepartmenCode:[{required:!0,message:"请输入部门编码",trigger:"blur"}]}}},watch:{dialogEditVisible:function(){this.dialogEditVisible&&this.getDepartmentList()}},created:function(){this.getDepartmentList()},methods:{changeVal1:function(){this.$refs.elcascader1.dropDownVisible=!1},getDepartmentList:function(){var e=this,t={UserID:localStorage["ai-userid"],OrganizeCode:this.form.OrganizeCode,OrganizeID:this.form.OrganizeID,DepartmenCode:"",DepartmentName:"",index:1,PageCount:500};Object(o["z"])(t).then((function(t){if("1"===t.Rows.result){var r=t.Data,n=function e(t){t.forEach((function(t){t.children&&0!==t.children.length?e(t.children):delete t.children,t.label=t.DepartmentName,t.value=t.DepartmentID}))};n(r);var a=function e(t,r){return t.filter((function(t,n){return t.children&&(t.children=e(t.children,r)),t.DepartmentID!==r}))},o=a(r,e.form.DepartmentID);e.list=o}}))},save:function(){var e=this;this.$refs["form"].validate((function(t){if(t)if(e.loading=!0,e.form.DepartmentID){var r={OrganizeCode:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"],Update:[{DepartmentID:e.form.DepartmentID,OrganizeID:e.form.OrganizeID,ParentID:e.form.ParentID||"",DepartmenCode:e.form.DepartmenCode,DepartmentName:e.form.DepartmentName,Description:e.form.Description,CreatePerson:"",CreateDate:"",UpdatePerson:"",UpdateDate:"",IsDelete:"",OrganizeCode:e.form.OrganizeCode}]};"object"===c(e.form.ParentID)&&(r.Update[0].ParentID=e.form.ParentID[e.form.ParentID.length-1]||""),Object(o["u"])(r).then((function(t){"1"===t.Rows.result?(e.$message({message:"修改成功",type:"success"}),e.$emit("closeDialog")):e.$message({message:t.Rows.remark,type:"error"}),e.closeLoading()})).catch((function(t){e.$message({message:t.Rows.remark,type:"error"}),e.closeLoading()}))}else{var n={OrganizeCode:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"],Innsert:[{OrganizeID:e.form.OrganizeID,ParentID:e.form.ParentID||"",DepartmenCode:e.form.DepartmenCode,DepartmentName:e.form.DepartmentName,Description:e.form.Description,CreatePerson:"",CreateDate:"",UpdatePerson:"",UpdateDate:"",IsDelete:"",OrganizeCode:e.form.OrganizeCode}]};"object"===c(e.form.ParentID)&&(n.Innsert[0].ParentID=e.form.ParentID[e.form.ParentID.length-1]||""),Object(o["h"])(n).then((function(t){"1"===t.Rows.result?(e.$message({message:"新增成功",type:"success"}),e.$emit("closeDialog")):e.$message({message:t.Rows.remark,type:"error"}),e.closeLoading()})).catch((function(t){e.$message({message:t.Rows.remark,type:"error"}),e.closeLoading()}))}}))},closeDialog:function(){this.$emit("closeDialog")},closeLoading:function(){var e=this;setTimeout((function(){e.loading=!1}),500)}}},d=l,u=(r("87bb"),r("2877")),m=Object(u["a"])(d,i,s,!1,null,"0deb5c98",null),p=m.exports,f={components:{EditForm:p},data:function(){return{tableHeight:innerHeight-300,currentPage:1,pageSize:500,treeData:[{OrganizeName:"企业1"},{OrganizeName:"企业1"},{OrganizeName:"企业1"},{OrganizeName:"企业1"},{OrganizeName:"企业1"}],tableData:[{DepartmentName:"部门1",DepartmenCode:"jd",ParentID:"无",Description:""},{DepartmentName:"部门1",DepartmenCode:"jd",ParentID:"无",Description:""},{DepartmentName:"部门1",DepartmenCode:"jd",ParentID:"无",Description:""}],name:"",code:"",currentOrgRow:{OrganizeCode:"",OrganizeID:""},dialogEditVisible:!1,dialogEditTitle:"新增部门",form:{DepartmentID:"",DepartmentName:"",DepartmenCode:"",ParentID:"",Description:"",OrganizeCode:"",OrganizeID:""},formParentList:[]}},created:function(){},methods:{getTreeData:function(){var e=this,t={OrganizeName:"",OrganizeCode:"",OrganizeType:"",OrganizeCode1:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"]};Object(o["B"])(t).then((function(t){e.treeData=t.Data,e.getDepartmentList()}))},getDepartmentList:function(){var e=this,t={UserID:localStorage["ai-userid"],OrganizeCode:this.currentOrgRow.OrganizeCode,OrganizeID:this.currentOrgRow.OrganizeID,DepartmenCode:this.code,DepartmentName:this.name,index:this.currentPage,PageCount:this.pageSize};Object(o["z"])(t).then((function(t){if("1"===t.Rows.result){var r=t.Data,n=t.Data;e.tableData=r;var a=[],o=function e(t){t.forEach((function(t){t.children&&0!==t.children.length?e(t.children):delete t.children,a.push({label:t.DepartmentName,value:t.DepartmenCode}),t.label=t.DepartmentName,t.value=t.DepartmenCode}))};o(n),e.formParentList=n}}))},add:function(){this.currentOrgRow.OrganizeCode?(this.form={DepartmentID:"",DepartmentName:"",DepartmenCode:"",ParentID:"",Description:"",OrganizeCode:this.currentOrgRow.OrganizeCode,OrganizeID:this.currentOrgRow.OrganizeID},this.dialogEditTitle="新增部门",this.dialogEditVisible=!0):this.$message({message:"请选择组织机构",type:"warning"})},edit:function(e){this.form={DepartmentID:e.DepartmentID,DepartmentName:e.DepartmentName,DepartmenCode:e.DepartmenCode,ParentID:e.ParentID,Description:e.Description,OrganizeCode:e.OrganizeCode,OrganizeID:e.OrganizeID},this.dialogEditVisible=!0,this.dialogEditTitle="编辑部门"},del:function(e){var t=this;this.$confirm("此操作将删除"+e.DepartmentName+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r={OrganizeCode:localStorage["ai-orgcode"],UserID:localStorage["ai-userid"],Delete:[{DepartmentID:e.DepartmentID}]};Object(o["o"])(r).then((function(e){"1"===e.Rows.result?(t.$message({message:"删除成功",type:"success"}),t.dialogEditVisible=!1,t.getDepartmentList()):t.$message({message:e.Rows.remark,type:"error"})})).catch((function(e){t.$message({message:e.Rows.remark,type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},search:function(){this.getDepartmentList()},reset:function(){this.name="",this.code="",this.getDepartmentList()},handleNodeClick:function(e){this.currentOrgRow=e,this.getDepartmentList()},handleCurrentChange:function(e){this.form=e?{DepartmentID:e.DepartmentID,DepartmentName:e.DepartmentName,DepartmenCode:e.DepartmenCode,ParentID:e.ParentID,Description:e.Description,OrganizeCode:e.OrganizeCode,OrganizeID:e.OrganizeID}:{DepartmentID:"",DepartmentName:"",DepartmenCode:"",ParentID:"",Description:"",OrganizeCode:"",OrganizeID:""}},parentNameFilters:function(e){for(var t="无",r=0;r<this.tableData.length;r++)if(e===this.tableData[r].DepartmentID){t=this.tableData[r].DepartmentName;break}return t},closeDialog:function(){this.dialogEditVisible=!1,this.getDepartmentList()}}},D=f,g=(r("76fb"),Object(u["a"])(D,n,a,!1,null,"7f6f9256",null));t["default"]=g.exports}}]);