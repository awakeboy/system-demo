<template>
  <div>
    <el-form :inline="true">
      <el-form-item>
        <el-button type="primary" @click="add()">添加</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="edit()">编辑</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="del()">删除</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="table"
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="DepartmentID"
      default-expand-all
      highlight-current-row
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      max-height="400"
      stripe
      @current-change="handleCurrentTypeChange"
    >
      <el-table-column prop="CodeType" label="类别编码" align="center" />
      <el-table-column prop="CodeTypeName" label="类别名称" align="center" />
      <el-table-column prop="Description" label="描述说明" align="center" />
      <el-table-column prop="Seq" label="排序" align="center" />
    </el-table>

    <!-- 新增/编辑 -->
    <el-dialog
      width="50%"
      :title="dialogEditTitle"
      :visible.sync="dialogEditVisible"
      append-to-body
    >
      <el-form ref="form" :model="form" label-width="100px" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="类别编码：" prop="CodeType">
              <el-input
                v-model="form.CodeType"
                placeholder="请输入类别编码"
                maxlength="60"
                show-word-limit
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="类别名称：" prop="CodeTypeName">
              <el-input
                v-model="form.CodeTypeName"
                placeholder="请输入类别名称"
                maxlength="60"
                show-word-limit
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="描述说明" prop="Description">
              <el-input
                v-model="form.Description"
                placeholder="请输入描述说明"
                maxlength="60"
                show-word-limit
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排序：" prop="Seq">
              <el-input
                v-model="form.Seq"
                type="number"
                placeholder="请输入排序"
                @input="changeNum"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 保存/取消 -->
        <el-row>
          <el-col :span="24">
            <div class="handle">
              <el-button type="primary" @click="save()">保存</el-button>
              <el-button type="" @click="closeDialog()">取消</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { getCodeTypeListAPI, addCodeTypeAPI, editCodeTypeAPI, delCodeTypeAPI } from '@/api/system'
export default {
  data() {
    return {
      tableData: [{
        CodeType: 'ZJGLX',
        CodeTypeID: '0481b09a709911e98f4e00163e127e89',
        CodeTypeName: '类型1',
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        IsDelete: null,
        Seq: 1,
        UpdateDate: '2020-06-01T16:35:08',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }, {
        CodeType: 'JMLX',
        CodeTypeID: '2585d540828311e98f4e00163e127e89',
        CodeTypeName: '类型2',
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        IsDelete: null,
        Seq: 1,
        UpdateDate: '2020-06-01T16:35:08',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }, {
        CodeType: 'lb',
        CodeTypeID: '0d65220985d511ea8f4e00163e127e89',
        CodeTypeName: '类型3',
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        IsDelete: null,
        Seq: 1,
        UpdateDate: '2020-06-01T16:35:08',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }],
      form: {
        CodeTypeID: '',
        CodeType: '',
        CodeTypeName: '',
        Description: '',
        Seq: ''
      },
      dialogEditTitle: '新增字典类别',
      dialogEditVisible: false,
      rules: {
        CodeType: [
          { required: true, message: '请输入类别编码', trigger: 'blur' }
        ],
        CodeTypeName: [
          { required: true, message: '请输入类别名称', trigger: 'blur' }
        ],
        Seq: [
          { required: true, message: '请输入排序', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    changeNum(e) {
    // 限制长度
      if (this.form.Seq.length > 3) {
        this.form.Seq = this.form.Seq.slice(0, 3)
      }
    },
    // 获取所有类别列表
    getData() {
      // const params = {
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   UserID: localStorage['ai-userid']
      // }
      // getCodeTypeListAPI(params).then(res => {
      //   this.tableData = res.Data

      //   this.$emit('refreshTypeList')
      // })
    },
    // 改变当前选择的类别
    handleCurrentTypeChange(val) {
      if (val) {
        this.form = {
          CodeTypeID: val.CodeTypeID,
          CodeType: val.CodeType,
          CodeTypeName: val.CodeTypeName,
          Description: val.Description,
          Seq: val.Seq
        }
      } else {
        this.form = {
          CodeTypeID: '',
          CodeType: '',
          CodeTypeName: '',
          Description: '',
          Seq: ''
        }
      }
    },
    add() {
      this.dialogEditTitle = '新增字典类别'
      this.form = {
        CodeTypeID: '',
        CodeType: '',
        CodeTypeName: '',
        Description: '',
        Seq: ''
      }
      this.dialogEditVisible = true
    },
    edit() {
      if (!this.form.CodeTypeID) {
        this.$message({
          message: '请选择字典类别',
          type: 'warning'
        })
        return
      }
      this.dialogEditTitle = '编辑字典类别'
      this.dialogEditVisible = true
    },
    // 点击 删除btn
    del() {
      if (!this.form.CodeTypeID) {
        this.$message({
          message: '请选择字典类别',
          type: 'warning'
        })
        return
      }
      this.$confirm('此操作将删除' + this.form.CodeTypeName + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.form.CodeTypeID = ''
        this.$refs.table.setCurrentRow()
        this.dialogEditVisible = false
        return
        const params = {
          OrganizeCode: localStorage['ai-orgcode'],
          UserID: localStorage['ai-userid'],
          Delete: [
            {
              CodeTypeID: this.form.CodeTypeID
            }
          ]
        }
        delCodeTypeAPI(params).then(res => {
          if (res.Rows.result === '1') {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.form.CodeTypeID = ''
            this.$refs.table.setCurrentRow()
            this.dialogEditVisible = false
            this.getData()
          } else {
            this.$message({
              message: res.Rows.remark,
              type: 'error'
            })
          }
        }).catch(res => {
          this.$message({
            message: res.Rows.remark,
            type: 'error'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    save() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.CodeTypeID) { // 编辑
            this.$message({
              message: '修改成功',
              type: 'success'
            })
            this.dialogEditVisible = false
            return
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Update: [
                {
                  CodeTypeID: this.form.CodeTypeID, // 数据字典类别ID
                  CodeType: this.form.CodeType, // 数据字典类别
                  CodeTypeName: this.form.CodeTypeName,
                  Description: this.form.Description, // 描述
                  Seq: this.form.Seq
                }
              ]
            }
            editCodeTypeAPI(params).then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                this.dialogEditVisible = false
                this.getData()
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
            }).catch(res => {
              this.$message({
                message: res.Rows.remark,
                type: 'error'
              })
            })
          } else { // 新增
            this.$message({
              message: '新增成功',
              type: 'success'
            })
            this.dialogEditVisible = false
            return
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Innsert: [
                {
                  CodeType: this.form.CodeType, // 数据字典类别
                  CodeTypeName: this.form.CodeTypeName,
                  Description: this.form.Description, // 描述
                  Seq: this.form.Seq
                }
              ]
            }
            addCodeTypeAPI(params).then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '新增成功',
                  type: 'success'
                })
                this.dialogEditVisible = false
                this.getData()
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
            }).catch(res => {
              this.$message({
                message: res.Rows.remark,
                type: 'error'
              })
            })
          }
        }
      })
    },
    // 关闭dialog
    closeDialog() {
      this.dialogEditVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.handle {
  display: flex;
  justify-content: flex-end;
}
</style>
