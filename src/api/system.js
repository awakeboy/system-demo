// 系统管理
import request from '@/utils/request'

// 删除菜单
export function delMenuAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteMenu',
    method: 'post',
    data
  })
}

// 新增菜单
export function addMenuAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddMenu',
    method: 'post',
    data
  })
}

// 新增菜单
export function editMenuAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateMenu',
    method: 'post',
    data
  })
}

// 加载角色列表
export function getRoleListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetALLRole',
    method: 'post',
    data
  })
}

// 加载登录日志列表
export function getLoginLogListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetLoginLog',
    method: 'post',
    data
  })
}

// 加载操作日志列表
export function getOperationListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetLog',
    method: 'post',
    data
  })
}

// 加载组织机构列表
export function getOrgListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetOrganizeList',
    method: 'post',
    data
  })
}

// 加载部门列表
export function getDepartmentListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDepartmentList',
    method: 'post',
    data
  })
}

// 新增部门
export function addDepartmentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddDepartment',
    method: 'post',
    data
  })
}

// 修改部门
export function editDepartmentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateDepartment',
    method: 'post',
    data
  })
}

// 删除部门
export function delDepartmentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteDepartment',
    method: 'post',
    data
  })
}

// 新增角色
export function addRoleAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddRole',
    method: 'post',
    data
  })
}

// 编辑角色
export function editRoleAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateRole',
    method: 'post',
    data
  })
}

// 删除角色
export function delRoleAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteRole',
    method: 'post',
    data
  })
}

// 加载用户列表
export function getUserListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetUserList',
    method: 'post',
    data
  })
}

// 新增用户
export function addUserAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddUser',
    method: 'post',
    data
  })
}

// 删除用户
export function delUserAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteUser',
    method: 'post',
    data
  })
}

// 修改用户
export function editUserAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateUser',
    method: 'post',
    data
  })
}

// 加载数据字典类别
export function getCodeTypeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCodeTypeList',
    method: 'post',
    data
  })
}

// 加载数据字典
export function getCodeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCodeList',
    method: 'post',
    data
  })
}

// 加载系统参数列表
export function getParamterListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetParameterList',
    method: 'post',
    data
  })
}

// 设置角色菜单—加载
export function getMenuListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetMenuList',
    method: 'post',
    data
  })
}

// 加载用户列表
export function getUserAllListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetUserALL',
    method: 'post',
    data
  })
}

// 已添加角色人员列表
export function getRoleUserListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetRoleUser',
    method: 'post',
    data
  })
}

// 已添加角色人员列表
export function addRoleUserAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddRoleUser',
    method: 'post',
    data
  })
}

// 新增参数
export function addParamAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddParam',
    method: 'post',
    data
  })
}

// 编辑参数
export function editParamAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateParam',
    method: 'post',
    data
  })
}

// 删除参数
export function delParamAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteParam',
    method: 'post',
    data
  })
}

// 删除数据字典
export function delCodeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteCode',
    method: 'post',
    data
  })
}

// 新增数据字典
export function addCodeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddCode',
    method: 'post',
    data
  })
}

// 编辑数据字典
export function editCodeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCode',
    method: 'post',
    data
  })
}

// 新增数据字典类别
export function addCodeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddCodeType',
    method: 'post',
    data
  })
}

// 编辑数据字典类别
export function editCodeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCodeType',
    method: 'post',
    data
  })
}

// 删除数据字典类别
export function delCodeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteCodeType',
    method: 'post',
    data
  })
}

// 加载角色
export function GetUserRoleAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetUserRole',
    method: 'post',
    data
  })
}

// 添加角色
export function AddUserRoleAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddUserRole',
    method: 'post',
    data
  })
}

// 确认角色菜单保存
export function AddRoleMenuAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddRoleMenu',
    method: 'post',
    data
  })
}

// 删除组织机构
export function DeleteOrganizeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteOrganize',
    method: 'post',
    data
  })
}

// 新增组织机构
export function AddOrganizeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddOrganize',
    method: 'post',
    data
  })
}

// 修改组织机构
export function UpdateOrganizeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateOrganize',
    method: 'post',
    data
  })
}

// 组织机构部门
export function GetDepartmentByOrgAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDepartmentByOrg',
    method: 'post',
    data
  })
}
