<template>
  <div class="app-container">
    <el-card class="card">
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" @click="add()">添加</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item label="组织机构名称">
            <el-input v-model="OrganizeName" placeholder="请输入组织机构名称" clearable />
          </el-form-item>
          <el-form-item label="组织机构编码">
            <el-input v-model="OrganizeCode" placeholder="请输入组织机构编码" clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search()">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="reset()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-table
        stripe
        :height="tableHeight"
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="OrganizeID"
        default-expand-all
        highlight-current-row
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="OrganizeName" label="组织名称" align="left" width="300px">
          <template slot-scope="scope">
            <svg-icon v-if="scope.row.children && scope.row.children.length !== 0" icon-class="folder" />
            <svg-icon v-else icon-class="file" />
            <span>{{ scope.row.OrganizeName }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="OrganizeCode" label="组织编码" align="center" width="200px" />
        <el-table-column prop="ContactPerson" label="联系人" align="center" width="200px" />
        <el-table-column prop="ContactTel" label="联系电话" align="center" width="200px" />
        <el-table-column prop="Address" label="地址" align="center" width="260px" />

        <el-table-column prop="Description" label="备注" align="center" width="200px" />

        <el-table-column label="操作" align="center" fixed="right" width="160px">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新增/编辑 dialog form -->
    <el-dialog :visible.sync="dialogEditVisible" :title="dialogEditTitle" :append-to-body="true">
      <edit-form
        :form="form"
        :dialog-edit-visible="dialogEditVisible"
        @closeDialog="closeDialog"
      />
    </el-dialog>
  </div>
</template>
<script>
import { getOrgListAPI, DeleteOrganizeAPI } from '@/api/system'
import EditForm from './components/editForm'

export default {
  components: {
    EditForm
  },
  data() {
    return {
      OrganizeName: '', // 组织机构名称
      OrganizeCode: '', // 组织机构编码
      tableHeight: innerHeight - 250,
      judge: {
        id: ''
      },
      currentPage: 1,
      pageSize: 500,
      treeData: [],
      treeData2: {},
      tableData: [
        {
          OrganizeName: '设备厂商1',
          OrganizeCode: '003',
          ContactPerson: '张三',
          ContactTel: 18783838383,
          Address: '北京市东城区',
          Note: ''
        }, {
          OrganizeName: '设备厂商1',
          OrganizeCode: '003',
          ContactPerson: '张三',
          ContactTel: 18783838383,
          Address: '北京市东城区',
          Note: ''
        }, {
          OrganizeName: '设备厂商1',
          OrganizeCode: '003',
          ContactPerson: '张三',
          ContactTel: 18783838383,
          Address: '北京市东城区',
          Note: ''
        }, {
          OrganizeName: '设备厂商1',
          OrganizeCode: '003',
          ContactPerson: '张三',
          ContactTel: 18783838383,
          Address: '北京市东城区',
          Note: ''
        }, {
          OrganizeName: '设备厂商1',
          OrganizeCode: '003',
          ContactPerson: '张三',
          ContactTel: 18783838383,
          Address: '北京市东城区',
          Note: ''
        }, {
          OrganizeName: '设备厂商1',
          OrganizeCode: '003',
          ContactPerson: '张三',
          ContactTel: 18783838383,
          Address: '北京市东城区',
          Note: ''
        }
      ],
      currentOrgRow: {
        // 当前选中组织
        OrganizeCode: '',
        OrganizeID: ''
      },
      dialogEditVisible: false,
      dialogEditTitle: '新增组织',
      form: {
        // 组织表单
        OrganizeID: '', // 组织ID
        ParentID: '', // 父级ID
        OrganizeCode: '', // 组织编码
        OrganizeName: '', // 组织名字
        OrganizeLogin: '',
        ContactPerson: '', // 联系人
        ContactTel: '', // 联系电话
        Address: '', // 地址
        Description: '' // 说明
      }
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    // 查询部门列表
    search() {
      this.getData()
    },
    // 重置
    reset() {
      this.OrganizeName = ''
      this.OrganizeCode = ''
      this.getData()
    },
    // 获取组织结构列表
    getData() {
      const params = {
        OrganizeName: this.OrganizeName, // 名称
        OrganizeCode: this.OrganizeCode, // 编码
        OrganizeType: '', // 类型
        OrganizeCode1: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid']
      }
      getOrgListAPI(params).then(res => {
        const data = res.Data
        const changeList = arr => {
          arr.forEach(v => {
            if (v.children && v.children.length !== 0) {
              changeList(v.children)
            } else {
              delete v.children
            }
          })
        }
        changeList(data)
        this.tableData = data
      })
    },
    // 点击 添加btn
    add() {
      this.form = {
        // 组织机构表单
        OrganizeID: '', // 组织ID
        ParentID: '', // 父级ID
        OrganizeCode: '', // 组织编码
        OrganizeName: '', // 组织名字
        OrganizeLogin: '',
        ContactPerson: '', // 联系人
        ContactTel: '', // 联系电话
        Address: '', // 地址
        Description: '', // 说明
        Level: '0', // 设计院资质等级
        CertificateNO: '', // 资质证书号
        Logo: '', // 设计院logo
        Proportion: '', // 分成比例
        Signature: '', // 编制，空置
        Approval: '', // 批准
        Examine: '', // 审核
        Check: '', // 校验
        JointlySign: '', // 会签
        Organization: '', // 编制
        Discount: '', // 折扣
        OrganizeType: '' // 组织机构类型
      }
      this.dialogEditTitle = '新增组织'
      this.dialogEditVisible = true
    },
    // 点击 编辑btn
    edit(row) {
      this.form = {
        OrganizeID: row.OrganizeID, // 组织ID
        ParentID: row.ParentID, // 父级ID
        OrganizeCode: row.OrganizeCode, // 组织编码
        OrganizeName: row.OrganizeName, // 组织名字
        OrganizeLogin: '',
        ContactPerson: row.ContactPerson, // 联系人
        ContactTel: row.ContactTel, // 联系电话
        Address: row.Address, // 地址
        Description: row.Description, // 说明
        Level: row.Level, // 设计院资质等级
        CertificateNO: row.CertificateNO, // 资质证书号
        Logo: row.Logo ? row.Logo : '', // 设计院logo
        Proportion: row.Proportion, // 分成比例
        Signature: row.Signature ? row.Signature : '', // 编制，空置
        Approval: row.Approval ? row.Approval : '', // 批准
        Examine: row.Examine ? row.Examine : '', // 审核
        Check: row.Check ? row.Check : '', // 校验
        JointlySign: row.JointlySign ? row.JointlySign : '', // 会签
        Organization: row.Organization ? row.Organization : '', // 编制
        Discount: row.Discount, // 折扣
        OrganizeType: row.OrganizeType // 组织机构类型
      }
      this.dialogEditVisible = true
      this.dialogEditTitle = '编辑组织'
    },
    // 点击 删除btn
    del(row) {
      this.$confirm(
        '此操作将删除' + row.OrganizeName + ', 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          const params = {
            OrganizeCode: localStorage['ai-orgcode'],
            UserID: localStorage['ai-userid'],
            Delete: [
              {
                OrganizeID: row.OrganizeID
              }
            ]
          }
          DeleteOrganizeAPI(params)
            .then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '删除成功',
                  type: 'success'
                })
                this.getData()
                this.dialogEditVisible = false
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
            })
            .catch(res => {
              this.$message({
                message: res.Rows.remark,
                type: 'error'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 关闭弹窗，刷新列表
    closeDialog() {
      this.dialogEditVisible = false
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 80px);
  .card{
    width: 100%;
  }
  .title {
    font-size: 14px;
    color: #28356c;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .orgCard {
    width: 20%;
    min-height: 100%;
  }
  .departmentCard {
    width: calc(80% - 20px);
  }
}
.handle {
  display: flex;
  justify-content: flex-end;
}
</style>
<style>
.orgWrap {
  width: 100%;
  overflow-x: scroll;
}
.labelClassName {
  color: #28356c;
  background: #f0f2f8;
}
.org-tree-node-label-inner {
  cursor: pointer;
}
.org-bg-err {
  background: #e5eaff;
}
</style>
