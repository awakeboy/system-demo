// 服务器项目管理
import request from '@/utils/request'

// 加载项目列表
export function GetItemProjectListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetItemProjectList',
    method: 'post',
    data
  })
}

// 新建项目
export function AddItemProjectAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddItemProject',
    method: 'post',
    data
  })
}

// 删除项目
export function DeleteItemProjectAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteItemProject',
    method: 'post',
    data
  })
}

// 修改项目
export function UpdateItemProjectAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateItemProject',
    method: 'post',
    data
  })
}

// 项目录入详情
export function GetProjectInputStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetProjectInputState',
    method: 'post',
    data
  })
}

// 电气图纸项目录入详情
export function GetElectricProjectInputStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetElectricProjectInputState',
    method: 'post',
    data
  })
}

// 获取联络关系
export function GetTransformerNotContactAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetTransformerNotContact',
    method: 'post',
    data
  })
}

// 修改客户基本信息
export function BasicinformationChangeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateBasicinformation',
    method: 'post',
    data
  })
}

// 修改客户接入系统方案
export function UpdateAccessSchemeChangeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateAccessScheme',
    method: 'post',
    data
  })
}

// 供电方案答复单上传
export function GetReplySheetAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetReplySheet',
    method: 'post',
    data
  })
}

// CAD上传
export function UploadCADAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=PostCAD',
    method: 'post',
    data
  })
}

// 受电点建设规格
export function GetSpecificationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSpecification',
    method: 'post',
    data
  })
}

// 受电点建设规格保存
export function UpdateSpecificationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateSpecification',
    method: 'post',
    data
  })
}

// 变电站维护
export function GetSubstationInformationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSubstationInformation',
    method: 'post',
    data
  })
}

// 修改客户受电系统方案
export function UpdateCustomerReceivingSchemeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCustomerReceivingScheme',
    method: 'post',
    data
  })
}

// 修改客户受电系统方案
export function UpdateMeasurementSchemeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateMeasurementScheme',
    method: 'post',
    data
  })
}

// 获取电源点地址
export function GetPowerPointAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetPowerPoint',
    method: 'post',
    data
  })
}

// 更改电源点地址
export function UpdatePowerPointAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdatePowerPoint',
    method: 'post',
    data
  })
}

// 供电方案答复单图片地址返回
export function GetReplyImgAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetReplyImg',
    method: 'post',
    data
  })
}

// 加载设备品牌
export function GetBrandAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetBrand',
    method: 'post',
    data
  })
}

// CAD平面返回
export function GetCadDetailAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCadDetail',
    method: 'post',
    data
  })
}

// 设备品牌确认
export function AddBrandAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddBrand',
    method: 'post',
    data
  })
}

// 获取当前项目的设备品牌
export function GetItemProjectBrandAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetItemProjectBrand',
    method: 'post',
    data
  })
}

// 获取变压器列表
export function GetTransformerAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetTransformer',
    method: 'post',
    data
  })
}

// 获取变压器列表
export function GetLoadDataAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetLoadData',
    method: 'post',
    data
  })
}

// 获取房间平面
export function GetPlanAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetPlan',
    method: 'post',
    data
  })
}

// 获取房间平面状态
export function GetPlanStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetPlanState',
    method: 'post',
    data
  })
}

// 选择房间平面
export function UpdatePlanAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdatePlan',
    method: 'post',
    data
  })
}

// 选择房间平面
export function UpdateStationInformationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateStationInformation',
    method: 'post',
    data
  })
}

// 变压器维护
export function UpdateTransformerAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateTransformer',
    method: 'post',
    data
  })
}

// 获取CAD解析状态
export function GetCadStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetCadState',
    method: 'post',
    data
  })
}

// 获取CAD解析状态
export function GetSubstationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSubstation',
    method: 'post',
    data
  })
}

// 总中压变电站详情
export function GetMediumVoltageStationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetMediumVoltageStation',
    method: 'post',
    data
  })
}

// 获取电气平面布置方案
export function GetLayoutSchemeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetLayoutScheme',
    method: 'post',
    data
  })
}

// 选择电气平面布置方案
export function CheckLayoutSchemeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=CheckLayoutScheme',
    method: 'post',
    data
  })
}

// 选择电气平面布置方案
export function DownCadAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DownCad',
    method: 'post',
    data
  })
}

// 编辑 总中压详情
export function UpdateMediumVoltageStationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateMediumVoltageStation',
    method: 'post',
    data
  })
}

// 编辑 0.4kV变压器数量
export function UpdateTransAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateTrans',
    method: 'post',
    data
  })
}
// 0.4Kv项目状态
export function GetLowProjectInputStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetLowProjectInputState',
    method: 'post',
    data
  })
}
// 图纸版本列表
export function GetSolutionVersionAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSolutionVersion',
    method: 'post',
    data
  })
}

// 选择图框
export function SaveUseOrgAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=SaveUseOrg',
    method: 'post',
    data
  })
}

// 生成方案
export function AutoDrawingXMLAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AutoDrawingXML',
    method: 'post',
    data
  })
}

// 选择电气平面布置方案
export function AutoDrawingAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AutoDrawing',
    method: 'post',
    data
  })
}

// 下载图纸
export function DownLoadCADAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DownLoadCAD',
    method: 'post',
    data
  })
}
// 获取当前项目费用
export function GetItemPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetItemPrice',
    method: 'post',
    data
  })
}
// 支付图纸费用
export function MemberPayAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=MemberPay',
    method: 'post',
    data
  })
}
// 平面上传失败调用
export function UpdateCadStaeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCadStae',
    method: 'post',
    data
  })
}

// 查询出图状态
export function GetDrawingStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetDrawingState',
    method: 'post',
    data
  })
}

// 0.4 出图
export function AutoLowDrawingAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AutoLowDrawing',
    method: 'post',
    data
  })
}

// 总中压 选择房间平面
export function UpdateMediumVoltagePlanAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateMediumVoltagePlan',
    method: 'post',
    data
  })
}

// 修改CAD上传状态
export function UpdateCadPlanAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCadPlan',
    method: 'post',
    data
  })
}

// 项目下载
export function DownLoadAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DownLoad',
    method: 'post',
    data
  })
}
// 图纸预览
export function GetPreviewingListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetPreviewingList',
    method: 'post',
    data
  })
}
// 预算下载
export function AutoBudgetAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AutoBudget',
    method: 'post',
    data
  })
}
// 预算预览
export function CreatExcelImgAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=CreatExcelImg',
    method: 'post',
    data
  })
}
// 概预算表格下载
export function CreatExcelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=CreatExcel',
    method: 'post',
    data
  })
}
// 获取设备表
export function GetProjectEQListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetProjectEQList',
    method: 'post',
    data
  })
}

// 获取材料表
export function GetMaterialListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetMaterialList',
    method: 'post',
    data
  })
}

// 获取功能单元
export function GetFunctionListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetFunctionList',
    method: 'post',
    data
  })
}

// 获取价格
export function DownPriceAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DownPrice',
    method: 'post',
    data
  })
}

// 识别失败更新状态
export function UpdateSubstationStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateSubstationState',
    method: 'post',
    data
  })
}

// 再来一单
export function AnotherOneAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AnotherOne',
    method: 'post',
    data
  })
}

// 申请图纸校核
export function SubmitItemCheckAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=SubmitItemCheck',
    method: 'post',
    data
  })
}

// 版本列表
export function GetSolutionversionCheckListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetSolutionversionCheckList',
    method: 'post',
    data
  })
}

// 校核列表
export function GetItemCheckListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetItemCheckList',
    method: 'post',
    data
  })
}

// 修改校核状态
export function SetStateAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=SetState',
    method: 'post',
    data
  })
}

// 新增地址
export function AddMailingAddressAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AddMailingAddress',
    method: 'post',
    data
  })
}

// 获取地址
export function GetMailingAddressListAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetMailingAddressList',
    method: 'post',
    data
  })
}

// 设置默认地址
export function SetDefaultAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=SetDefault',
    method: 'post',
    data
  })
}

// 申请邮寄/邮寄
export function SetMailingInfoAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=SetMailingInfo',
    method: 'post',
    data
  })
}

// 获取邮寄信息
export function GetMailingInfoAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetMailingInfo',
    method: 'post',
    data
  })
}

// 图纸校核-上传文件
export function FilezipAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=Filezip',
    method: 'post',
    data
  })
}

// 图纸校核-上传Excel
export function FileExcelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=FileExcel',
    method: 'post',
    data
  })
}

// 图纸校核-获取概预算
export function GetExcelAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetExcel',
    method: 'post',
    data
  })
}

// 选择接线方式
export function SaveSchemeTypeAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=SaveSchemeType',
    method: 'post',
    data
  })
}

// 获取电力报装信息
export function GetElectricPowerAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=GetElectricPower',
    method: 'post',
    data
  })
}

// 电力报装客户基本信息编辑
export function UpdatePowerBasicinformationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdatePowerBasicinformation',
    method: 'post',
    data
  })
}

// 客户经办人资料
export function UpdateCustomerAgentInformationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateCustomerAgentInformation',
    method: 'post',
    data
  })
}

// 申请内容
export function UpdateApplicationContentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateApplicationContent',
    method: 'post',
    data
  })
}

// 联系人资料
export function UpdateContactInformationAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateContactInformation',
    method: 'post',
    data
  })
}

// 用电设备清单
export function UpdateElectricalEquipmentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateElectricalEquipment',
    method: 'post',
    data
  })
}

// 生成PDF
export function AutoPDFAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=AutoPDF',
    method: 'post',
    data
  })
}

// 删除单条用电设备数据
export function DeleteElectricalEquipmentAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=DeleteElectricalEquipment',
    method: 'post',
    data
  })
}

// 电力报装申请-修改用户需求负荷
export function UpdateTotalCapacityAPI(data) {
  return request({
    url: '/api/service/GetMethod?GNID=UpdateTotalCapacity',
    method: 'post',
    data
  })
}

