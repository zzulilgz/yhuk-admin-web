<template>
  <section>
    <!-- path是中间的路由 -->
    <yhuk-breadcrumb :items="['权限管理',modelName+'管理',modelName+'列表']" path="/user/role"/>
    <div style="width: 100%;margin-top: 30px">
      <el-form :inline="true" :model="queryReq" class="demo-form-inline"
               style="margin-left: 20px;display: inline-block">
        <el-form-item label="名称">
          <el-input v-model="queryReq.userName" placeholder="请输入用户名称"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div id="btn-query" style="margin-bottom: 10px">
      <el-button type="primary" icon="el-icon-search" @click="query()">查询</el-button>
      <el-button type="warning" icon="el-icon-refresh">重置</el-button>
      <el-button type="primary" icon="el-icon-plus" style="float: right" @click="openDialog('save',null)">新增</el-button>
    </div>

    <el-table :data="queryRes">
      <el-table-column
        prop="createTime"
        label="创建日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="loginName"
        label="登录名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="lastLoginTime"
        label="最后登录时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button icon="el-icon-delete" type="danger" round @click="openDialog('delete',scope.row)">删除</el-button>
          <el-button icon="el-icon-edit" type="warning" round @click="openDialog('update',scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 10px;text-align: right">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryReq.pageNo"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="queryReq.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <el-dialog :title="dialog.name+modelName" :visible.sync="dialog.visible" width="500px">
      <template v-if="dialog.type ==='delete'">
        <span>确认要删除吗?</span>
      </template>
      <template v-else>
        <el-form :model="saveReq">
          <el-form-item label="名称" :label-width="'80px'">
            <el-input v-model="saveReq.name" auto-complete="off" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="'80px'">
            <el-input v-model="saveReq.remark" auto-complete=" boff" type="textarea" style="width: 200px"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <span slot="footer" class="dialog-footer" center>
        <el-button @click="dialog.visible = false">取 消</el-button>
         <el-button type="primary" @click="saveOrUpdateOrDel(dialog.type)">确 定</el-button>
       </span>
    </el-dialog>
  </section>
</template>

<script>
  import YhukBreadcrumb from "@/components/yhuk-breadcrumb";
  import crud from '../../mixins/mixin-crud';
  import {formatDate} from "../../../../utils/DateUtils";

  export default {
    name: "user-list",
    components: {YhukBreadcrumb},
    mixins: [crud],
    data() {
      return {
        modelName:'用户'
      }
    },
    methods: {
      openDialog(type, row) { //查看和编辑需要回显数据
        this.dialog = this.operations[type];
        this.dialog.type = type;
        this.dialog.visible = true;
        console.log(row);
        if (type === 'update' || type === 'view') {
          //这里因为角色信息较少，就不从后台查询拿数据了，直接从列表得到
          this.saveReq = row;
          this.id = row.id;
        }
        else if (type === 'delete') {
          this.id = row.id;
        }
        else {
          this.saveReq = {};
          this.saveReq.create = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
        }
      }
    },
    mounted() {
      this.currentName = 'user';
      this.query(this.currentName, 'query');
    }
  }
</script>

<style scoped>

</style>
