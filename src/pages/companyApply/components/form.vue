<template>
  <div class="apply_form">
    <h4 class="title">国际针灸学术研讨会参展报名表</h4>
    <el-form :model="formData" label-position="top">
      <el-form-item label="参展商名称（中文）">
        <el-input v-model="formData.joinDesignation" size="small"></el-input>
      </el-form-item>
      <el-form-item label="参展商名称（英文）">
        <el-input v-model="formData.joinDesignationEn" size="small"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        action=""
        :file-list="fileList"
        list-type="picture"
        :before-upload="handleBeforeUpload"
      >
        <el-button size="small" type="primary">参展商logo</el-button>
      </el-upload>
      <el-form-item label="企业介绍(中文)">
        <el-input
          type="textarea"
          :rows="2"
          v-model="formData.zinfo"
          size="small"
        ></el-input>
      </el-form-item>
      <el-form-item label="企业介绍(英文)">
        <el-input
          type="textarea"
          :rows="2"
          v-model="formData.einfo"
          size="small"
        ></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="formData.joinAddress" size="small"></el-input>
      </el-form-item>
      <el-form-item label="网址">
        <el-input v-model="formData.joinUrl" size="small"></el-input>
      </el-form-item>
      <el-form-item label="参展商品简要描述">
        <el-input
          type="textarea"
          :rows="2"
          v-model="formData.joinDesc"
          size="small"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系人姓名【参展联系人】">
        <el-input v-model="formData.joinName" size="small"></el-input>
      </el-form-item>
      <el-form-item label="电话/手机【参展联系人】">
        <el-input v-model="formData.joinPhone" size="small"></el-input>
      </el-form-item>
      <el-form-item label="地址【参展联系人】">
        <el-input v-model="formData.contactAddress" size="small"></el-input>
      </el-form-item>
      <el-form-item label="联系人职务【参展联系人】">
        <el-input v-model="formData.joinWork" size="small"></el-input>
      </el-form-item>
      <el-form-item label="邮 箱【参展联系人】">
        <el-input v-model="formData.joinEmail" size="small"></el-input>
      </el-form-item>
      <el-form-item label="姓 名【参展人】">
        <el-input v-model="formData.ToNameArr" size="small"></el-input>
      </el-form-item>
      <el-form-item label="职 务【参展人】">
        <el-input v-model="formData.ToWorkArr" size="small"></el-input>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-radio-group v-model="formData.join_type">
          <el-radio label="0">在线支付 ￥2500 公司线上参展</el-radio>
          <el-radio label="1">线下汇款 ￥2500 公司线上参展</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="instruction">
      注意：线下展览请联系联系人：易文军，霍晓娜
      电话：010-64089964，010-87194961 邮箱：caamhy@163.com。
    </div>
    <button class="submitBtn" @click="submit">提交</button>
  </div>
</template>
<script>
import { companyApply, uploadFile } from '../../../apis'
export default {
  data() {
    return {
      formData: {
        joinDesignation: "",
        joinDesignationEn: "",
        cp_logo: "",
        zinfo: "",
        einfo: "",
        joinAddress: "",
        joinUrl: "",
        joinDesc: "",
        joinName: "",
        joinPhone: "",
        contactAddress: "",
        joinWork: "",
        joinEmail: "",
        ToNameArr: "",
        ToWorkArr: "",
        join_type: '0'
      },
      fileList: []
    }
  },
  methods: {
    validate() {
      for (let k in this.formData) {
        if (this.formData[k] === '') {
          console.log(`${k}:${this.formData[k]}`)
          return false
        }
      }
      return true
    },
    handlApplyChange(data) {
      console.log(data)
    },
    handleBeforeUpload(file) {
      let param = new FormData(); //创建form对象
      param.append('file', file);//通过append向form对象添加数据
      uploadFile(param).then(res => {
        console.log(res)
        if (res.data.code === '200') {
          this.formData.cp_logo = 'http://wfas.org.cn/' + res.data.data
          this.fileList = [
            {
              name: file.name,
              url: 'http://wfas.org.cn/' + res.data.data
            }
          ]
        }
      })
      return false
    },
    submit() {
      console.log(this.formData)

      if (this.validate()) {

        let data = Object.assign({}, this.formData)
        data.ToNameArr = [this.formData.ToNameArr]
        data.ToWorkArr = [this.formData.ToWorkArr]
        companyApply(data).then((res) => {
          if (res.data.code === 0) {
            this.$message({
              type: 'sucess',
              message: '提交成功'
            })
          }
        })
      } else {
        this.$message.error('请填写完整内容')
      }
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>