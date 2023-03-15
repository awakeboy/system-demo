// 绘图信息维护
import request from '@/utils/request'

// 加载电压等级列表
export function LoadVoltageListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=LoadVoltageList',
    method: 'post',
    data
  })
}

// 新增电压等级
export function AddVoltageAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddVoltage',
    method: 'post',
    data
  })
}

// 修改电压等级
export function UpdateVoltageAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateVoltage',
    method: 'post',
    data
  })
}

// 删除电压等级
export function DeleteVoltageAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteVoltage',
    method: 'post',
    data
  })
}

// 加载厂商列表
export function GetManuFactureAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetManuFacture',
    method: 'post',
    data
  })
}

// 新增厂商列表
export function AddManuFactureAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddManuFacture',
    method: 'post',
    data
  })
}

// 删除厂商列表
export function DeleteManuFactureAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteManuFacture',
    method: 'post',
    data
  })
}

// 修改厂商列表
export function UpdateManuFactureAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateManuFacture',
    method: 'post',
    data
  })
}

// 元器件列表
export function GetComponentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetComponent',
    method: 'post',
    data
  })
}

// 新增元器件
export function AddComponentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddComponent',
    method: 'post',
    data
  })
}

// 删除元器件
export function DeleteComponentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteComponent',
    method: 'post',
    data
  })
}

// 修改元器件
export function UpdateComponentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateComponent',
    method: 'post',
    data
  })
}

// 加载组件柜类别列表
export function GetCabTypeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCabTypeList',
    method: 'post',
    data
  })
}

// 加载组件柜列表
export function GetCabListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCabList',
    method: 'post',
    data
  })
}

// 删除组件柜
export function DeleteCabAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteCab',
    method: 'post',
    data
  })
}

// 新增组件柜
export function AddCabAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddCab',
    method: 'post',
    data
  })
}

// 修改组件柜
export function UpdateCabAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCab',
    method: 'post',
    data
  })
}

// 加载设备型号列表
export function GetDeviceModelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDeviceModel',
    method: 'post',
    data
  })
}

// 加载设备型号列表
export function GetDeviceTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDeviceType',
    method: 'post',
    data
  })
}

// 加载选型方案
export function GetSelectionSchemeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSelectionSchemeType',
    method: 'post',
    data
  })
}

// 新增选型方案
export function AddSelectionSchemeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddSelectionSchemeType',
    method: 'post',
    data
  })
}

// 删除选型方案
export function DeleteSelectionSchemeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteSelectionSchemeType',
    method: 'post',
    data
  })
}

// 修改选型方案
export function UpdateSelectionSchemeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateSelectionSchemeType',
    method: 'post',
    data
  })
}

// 加载组件柜方向详情列表
export function GetCabinetDetailListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCabinetDetailList',
    method: 'post',
    data
  })
}

// 删除组件柜方向
export function DeleteModelandCabineteterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteModelandCabineteter',
    method: 'post',
    data
  })
}

// 新增组件柜方向
export function AddCabinetDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddCabinetDetail',
    method: 'post',
    data
  })
}

// 修改组件柜方向
export function UpdateCabinetDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCabinetDetail',
    method: 'post',
    data
  })
}

// 加载组件柜参数列表
export function GetCabParmListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCabParmList',
    method: 'post',
    data
  })
}

// 新增组件柜参数
export function AddCabinetParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddCabinetParameter',
    method: 'post',
    data
  })
}

// 删除组件柜参数
export function DeleteCabinetParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteCabinetParameter',
    method: 'post',
    data
  })
}

// 修改组件柜参数
export function UpdateCabinetParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCabinetParameter',
    method: 'post',
    data
  })
}

// 加载设备类别参数列表
export function GetTypeParmeterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetTypeParmeter',
    method: 'post',
    data
  })
}

// 图纸类别
export function GetDrawingTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDrawingType',
    method: 'post',
    data
  })
}

// 新增图元信息
export function AddDrawingTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddDrawingType',
    method: 'post',
    data
  })
}

// 删除图元信息
export function DeleteDrawingTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteDrawingType',
    method: 'post',
    data
  })
}

// 修改图元信息
export function UpdateDrawingTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateDrawingType',
    method: 'post',
    data
  })
}

// 删除 设备型号
export function DeleteDeviceTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteDeviceType',
    method: 'post',
    data
  })
}

// 新增 设备型号
export function AddDeviceTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddDeviceType',
    method: 'post',
    data
  })
}

// 修改 设备型号
export function UpdateDeviceTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateDeviceType',
    method: 'post',
    data
  })
}

// 设备型号 审核
export function ApprovedAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=Approved',
    method: 'post',
    data
  })
}

// 设备类别参数维护
export function GetDeviceTypeParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDeviceTypeParameter',
    method: 'post',
    data
  })
}

// 新增 设备类别参数维护
export function AddDeviceTypeParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddDeviceTypeParameter',
    method: 'post',
    data
  })
}

// 删除 设备类别参数维护
export function DeleteDeviceTypeParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteDeviceTypeParameter',
    method: 'post',
    data
  })
}

// 修改 设备类别参数维护
export function UpdateDeviceTypeParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateDeviceTypeParameter',
    method: 'post',
    data
  })
}

// 删除 设备型号
export function DeleteDeviceModelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteDeviceModel',
    method: 'post',
    data
  })
}

// 新增 设备型号
export function AddDeviceModelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddDeviceModel',
    method: 'post',
    data
  })
}

// 修改 设备型号
export function UpdateDeviceModelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateDeviceModel',
    method: 'post',
    data
  })
}

// 设备型号参数维护列表
export function GetDeviceModelParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDeviceModelParameter',
    method: 'post',
    data
  })
}

// 新增 设备型号参数维护
export function AddDeviceModelParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddDeviceModelParameter',
    method: 'post',
    data
  })
}

// 删除 设备型号参数维护
export function DeleteDeviceModelParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteDeviceModelParameter',
    method: 'post',
    data
  })
}

// 修改 设备型号参数维护
export function UpdateDeviceModelParameterAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateDeviceModelParameter',
    method: 'post',
    data
  })
}
// 获取 设备型号价格维护
export function ModelPriceListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=ModelPriceList',
    method: 'post',
    data
  })
}

// 根据厂商获取型号 设备型号价格维护
export function GetDeviceModelByManuFactureIDAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDeviceModelByManuFactureID',
    method: 'post',
    data
  })
}

// 新增型号价格 设备型号价格维护
export function AddModelPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddModelPrice',
    method: 'post',
    data
  })
}

// 编辑型号价格 设备型号价格维护
export function UpdateModelPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateModelPrice',
    method: 'post',
    data
  })
}

// 删除型号价格 设备型号价格维护
export function DeleteModelPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteModelPrice',
    method: 'post',
    data
  })
}

// 获取 型号价格列表
export function GetModelPriceDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetModelPriceDetail',
    method: 'post',
    data
  })
}

// 获取 组件柜适用条件列表
export function GetCabinettsApplicationlListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCabinettsApplicationlList',
    method: 'post',
    data
  })
}

// 获取 组件柜适用条件 类型
export function GetSchemeeQuipmentTypeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSchemeeQuipmentTypeList',
    method: 'post',
    data
  })
}

// 获取 型号组件柜关联列表
export function GetDataAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetData',
    method: 'post',
    data
  })
}

// 新增 型号组件柜关联
export function AddModelandCabinetAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddModelandCabinet',
    method: 'post',
    data
  })
}

// 编辑 型号组件柜关联
export function UpdateModelandCabinetAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateModelandCabinet',
    method: 'post',
    data
  })
}

// 加载图纸列表
export function GetDrwingListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDrwingList',
    method: 'post',
    data
  })
}

// 删除组件柜适用方向
export function DeleteCabinetApplicationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteCabinetApplication',
    method: 'post',
    data
  })
}

// 新增组件柜适用方向
export function AddCabinetApplicationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddCabinetApplication',
    method: 'post',
    data
  })
}

// 编辑组件柜适用方向
export function UpdateCabinetApplicationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCabinetApplication',
    method: 'post',
    data
  })
}

// 删除图纸
export function DeleteDrawingModelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteDrawingModel',
    method: 'post',
    data
  })
}
// 新增图纸
export function AddDrawingModelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddDrawingModel',
    method: 'post',
    data
  })
}

// 编辑图纸
export function UpdateDrawingModelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateDrawingModel',
    method: 'post',
    data
  })
}

// 获取厂商型号列表
export function GetSelectionSchemeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSelectionSchemeList',
    method: 'post',
    data
  })
}

// 删除选型方案 厂商型号
export function DeleteSelectionSchemeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteSelectionScheme',
    method: 'post',
    data
  })
}

// 选型方案 厂商型号 加载设备型号列表
export function GetManuFactureCodeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetManuFactureCodeList',
    method: 'post',
    data
  })
}

// 删除 组件柜方向
export function DeleteCabinetDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteCabinetDetail',
    method: 'post',
    data
  })
}

// 删除 组件柜方向
export function GetProvinceALLAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetProvinceALL',
    method: 'post',
    data
  })
}

// 加载设备类型
export function GetAreaBrandListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetAreaBrandList',
    method: 'post',
    data
  })
}

// 获取厂商级别列表
export function GetManuFactureByLevelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetManuFactureByLevel',
    method: 'post',
    data
  })
}

// 编辑类型
export function AddAreaBrandAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddAreaBrand',
    method: 'post',
    data
  })
}

// 新增设备厂商类型
export function AddSelectionSchemeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddSelectionScheme',
    method: 'post',
    data
  })
}

// 修改设备厂商类型
export function UpdateSelectionSchemeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateSelectionScheme',
    method: 'post',
    data
  })
}

// 加载选型属性
export function GetPropertyListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetPropertyList',
    method: 'post',
    data
  })
}

// 加载选型属性
export function AddtPropertyAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddtProperty',
    method: 'post',
    data
  })
}

// 查看属性详情的接口
export function GetSelectionSchemeDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSelectionSchemeDetail',
    method: 'post',
    data
  })
}

// 获取属性详情
export function GetPropertyDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetPropertyDetail',
    method: 'post',
    data
  })
}

// 加载省
export function GetProvinceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetProvince',
    method: 'post',
    data
  })
}

// 获取厂商型号编码列表
export function GetmanuFactureCodeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetmanuFactureCode',
    method: 'post',
    data
  })
}

// 加载型号列表
export function getModelListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=getModelList',
    method: 'post',
    data
  })
}

/* 有效工日统计表 */
// 获取定额类别列表
export function InstallationTypeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=InstallationTypeList',
    method: 'post',
    data
  })
}

// 获取定额类别列表(左侧菜单)
export function GetInstallationTypeListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetInstallationTypeList',
    method: 'post',
    data
  })
}

// 新增定额类别
export function AddInstallationTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddInstallationType',
    method: 'post',
    data
  })
}

// 修改定额类别
export function UpdateInstallationTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateInstallationType',
    method: 'post',
    data
  })
}

// 删除定额类别
export function DeleteInstallationTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteInstallationType',
    method: 'post',
    data
  })
}

// 获取安装项目价格列表
export function WorkPriceListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=WorkPriceList',
    method: 'post',
    data
  })
}

// 新增安装项价格
export function AddWorkPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddWorkPrice',
    method: 'post',
    data
  })
}

// 修改安装项价格
export function UpdateWorkPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateWorkPrice',
    method: 'post',
    data
  })
}

// 删除安装项价格
export function DeleteWorkPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteWorkPrice',
    method: 'post',
    data
  })
}

/* 材料价格维护 */
// 获取材料列表
export function MaterialPriceListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=MaterialPriceList',
    method: 'post',
    data
  })
}

// 新增材料价格
export function AddMaterialPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddMaterialPrice',
    method: 'post',
    data
  })
}

// 修改材料价格
export function UpdateMaterialPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateMaterialPrice',
    method: 'post',
    data
  })
}

// 删除材料价格
export function DeleteMateriallPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteMateriallPrice',
    method: 'post',
    data
  })
}

// 获取材料价格列表详情
export function GetMateriallPriceDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetMateriallPriceDetail',
    method: 'post',
    data
  })
}
// 验证码获取
export function sendMessageAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=SendMessage',
    method: 'post',
    data
  })
}
// 注册
export function memberRegistrationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=MemberRegistration',
    method: 'post',
    data
  })
}
// 设备型号审核列表
export function GetApprovedAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetApproved',
    method: 'post',
    data
  })
}

 // 标准组件-组件柜维护-一键复制
 export function OneClickCopyAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=OneClickCopy',
    method: 'post',
    data
  })
}