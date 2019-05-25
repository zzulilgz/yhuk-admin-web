/**
 * 增删改查公共js,在列表页引入即可
 */
import api from "@/api/power";

export default {
  data() {
    return {
      currentName: '',//当前引入模块名称
      id: '',
      queryReq: { // 与后台查询保持一致
        pageNo: 1,
        pageSize: 10,
        sortField: '',  //mysql保留字要带上反引号
        sortRule: 'desc'
      },
      total: 0,
      queryRes: [{}],
      operations: {
        'save': {
          visible: true,
          name: '添加',
          textForbid: false,
        },
        'update': {
          visible: true,
          name: '修改',
          textForbid: false,
        },
        'delete': {
          visible: true,
          name: '删除',
          textForbid: true
        },
        'view': {
          visible: true,
          name: '查看',
          textForbid: true,  //禁用文本编辑
        },
      },
      /* 对话框设置 */
      dialog: {
        type: 'add',
        name: '添加', //add edit view delete(确认框）
        visible: false,
        textForbid: false //查看模式禁止编辑
      },
      saveReq: {
        name: '',
        remark: ''
      },
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.queryReq.pageSize = val;
      this.query();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.queryReq.pageNo = val;

      this.query();
    },
    saveOrUpdateOrDel(method) {
      console.log(this.saveReq);
      api.saveOrUpdateOrDel(this.currentName, method, this.saveReq, this.id).then(res => {
        let status = res.data.code;
        console.log(res)
        if (status === '00000') {
          this.$message({
            message: this.dialog.name + '成功！',
            type: 'success'
          });
          this.dialog.visible = false;
          if (method === 'save') {
            this.saveReq.id = res.data.data;
            console.log(this.saveReq)
            this.queryRes.unshift(this.saveReq);
          }
          if (method === 'delete') {  //删除指定位置的
                this.query();   //todo 在前端实现删除
          }
        }
      })
    },
    query() {
      api.query(this.currentName, 'query', this.queryReq).then(res => {
        this.queryRes = res.data.data;
        console.log("res", res.data);
        this.total = res.data.total;
      })
    }
  }
}
