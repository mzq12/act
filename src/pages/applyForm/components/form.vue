<template>
  <div class="apply_form">
    <h4 class="title">国际针灸学术研讨会报名表</h4>
    <el-form :model="formData" label-position="top">
      <el-form-item label="报名方式">
        <el-select
          v-model="formData.join_type"
          style="width: 100%"
          size="small"
          @change="handlApplyChange"
        >
          <el-option
            value="1"
            label="线下参会 一般代表网上注册报名费￥2500/人（含世界针灸学会联合会注册会员会籍五年）"
          >
            <p class="optionSlot marginBottom12">
              线下参会
              一般代表网上注册报名费￥2500/人（含世界针灸学会联合会注册会员会籍五年）
            </p>
          </el-option>
          <el-option
            value="2"
            label="线下参会 世界针联及中国针灸学会会员注册 ￥2200/人"
          >
            <p class="optionSlot">
              线下参会 世界针联及中国针灸学会会员注册 ￥2200/人
            </p>
          </el-option>
          <el-option value="线下参会 现场注册￥2800/人" disabled>
            <p class="optionSlot">线下参会 现场注册￥2800/人</p>
          </el-option>
        </el-select>
      </el-form-item>
      <el-upload
        v-if="formData.join_type === '2'"
        class="upload-demo"
        action=""
        :file-list="fileList"
        list-type="picture"
        :before-upload="handleBeforeUpload"
      >
        <el-button size="small" type="primary">上传会员证书</el-button>
      </el-upload>
      <el-form-item label="学习研讨班">
        <el-select
          multiple
          v-model="formData.study_type"
          style="width: 100%"
          size="small"
        >
          <el-option
            label="一带一路”国际特色针法传习班（第二期） ￥1000元/人"
            value="1"
          ></el-option>
          <el-option
            label="中医筋骨三针法规范化实操研习班 ￥1680元/人"
            value="2"
          ></el-option>
          <el-option
            label="薄氏腹针疗法骨关节病临床实操研习班 ￥2690元/人"
            value="3"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="formData.sex">
          <el-radio label="1">男</el-radio>
          <el-radio label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-input v-model="formData.birthday" size="small"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="formData.email" size="small"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="formData.phone" size="small"></el-input>
      </el-form-item>
      <el-form-item label="单位, 职务">
        <el-input v-model="formData.position" size="small"></el-input>
      </el-form-item>
      <el-form-item label="地址, 邮编">
        <el-input v-model="formData.address" size="small"></el-input>
      </el-form-item>
      <el-form-item label="是否提交论文和申请发言">
        <el-select
          v-model="formData.paper_type"
          style="width: 100%"
          size="small"
        >
          <el-option
            label="申请现场发言 （* 必须提交论文摘要，选择发言语言）"
            value="0"
          ></el-option>
          <el-option
            label="申请壁报展示 （* 必须提交论文摘要）"
            value="1"
          ></el-option>
          <el-option
            label="仅提交论文摘要 （* 不做发言和壁报展示）"
            value="2"
          ></el-option>
          <el-option label="不提交论文" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="论文题目">
        <el-input v-model="formData.paper_project" size="small"></el-input>
      </el-form-item>
      <el-form-item label="发票抬头">
        <el-input v-model="formData.inv_name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="发票税号">
        <el-input v-model="formData.inv_num" size="small"></el-input>
      </el-form-item>
      <el-form-item label="索取方式">
        <el-select
          v-model="formData.inv_asktype"
          style="width: 100%"
          size="small"
        >
          <el-option label="现场索取" value="0"></el-option>
          <el-option label="邮寄到联系地址" value="1"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="支付方式">
        <el-radio-group v-model="formData.pay_type">
          <el-radio label="0">线上支付</el-radio>
          <el-radio label="1">线下汇款</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="instruction">
      请申请发言者发送中英文摘要（中文不超过300字）、中英文简历（不超过一页纸）和电子版高清大头照到世界针联秘书处邮箱contact@wfas.org.cn
    </div>
    <button class="submitBtn" @click="submit">提交</button>
  </div>
</template>
<script>
import { personalApply, uploadFile } from '../../../apis'
export default {
  data() {
    return {
      formData: {
        join_type: "1",
        study_type: [],
        cert_img: '',
        name: '',
        sex: '1',
        birthday: '',
        email: '',
        phone: '',
        position: '',
        address: '',
        paper_project: '',
        pay_type: '0',
        paper_type: '0',
        inv_num: "",
        inv_name: "",
        inv_asktype: "0"
      },
      fileList: []
    }
  },
  methods: {
    validate() {
      if (this.formData.name === '') {
        this.$message.error('姓名必填')
        return false
      }
      if (this.formData.join_type === '2' && this.formData.cert_img === '') {
        this.$message.error('请上传会员证书')
        return false
      }
      if ((this.formData.paper_type === '0' ||
        this.formData.paper_type === '1') &&
        this.formData.paper_project === '') {
        this.$message.error('论文题目必填')
        return false
      }
      return true
    },
    handlApplyChange(data) {
      console.log(data)
    },
    handleBeforeUpload(file) {
      console.log(file)
      let param = new FormData(); //创建form对象
      param.append('file', file);//通过append向form对象添加数据
      uploadFile(param).then(res => {
        if (res.data.code === '200') {
          this.formData.cert_img = 'http://wfas.org.cn/' + res.data.data
          this.fileList = [
            {
              name: '会员证书',
              url: 'http://wfas.org.cn/' + res.data.data
            }
          ]
        }
      })
      return false
    },
    submit() {
      if (this.validate()) {
        this.formData.study_type = this.formData.study_type.join(',')
        personalApply(this.formData).then((res) => {
          if (res.data.code === 0) {
            this.$message({
              type: 'sucess',
              message: '提交成功'
            })
            sessionStorage.setItem('payInfo', JSON.stringify({
              insert_id: res.data.data.insert_id,
              pay_price: res.data.data.pay_price
            }))
            this.$emit('submitSucc', this.formData.pay_type)
          }
        })
      }
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>