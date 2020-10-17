<template>
  <div class="apply_form">
    <h4 class="title">国际针灸学术研讨会报名表</h4>
    <el-form :model="formData" label-position="top">
      <el-form-item label="报名方式">
        <el-select
          v-model="formData.way"
          style="width: 100%"
          size="small"
          disabled
        >
          <el-option
            label="线下参会   ￥2400"
            value="线下参会   ￥2400"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学习研讨班">
        <el-select
          v-model="formData.way"
          style="width: 100%"
          size="small"
          disabled
        >
          <el-option
            label="一带一路”国际特色针法传习班（第二期） ￥800元"
            value="一带一路”国际特色针法传习班（第二期） ￥800元"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学习研讨班">
        <el-select
          v-model="formData.way"
          style="width: 100%"
          size="small"
          disabled
        >
          <el-option
            label="一带一路”国际特色针法传习班（第二期） ￥800元"
            value="一带一路”国际特色针法传习班（第二期） ￥800元"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="formData.gender" size="small"></el-input>
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
        <el-input v-model="formData.staff" size="small"></el-input>
      </el-form-item>
      <el-form-item label="地址, 邮编">
        <el-input v-model="formData.address" size="small"></el-input>
      </el-form-item>
      <el-form-item label="提交论文">
        <el-checkbox-group v-model="formData.submits">
          <el-checkbox label="口头发言" name="1"></el-checkbox>
          <el-checkbox label="壁报展示" name="2"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="论文题目">
        <el-input v-model="formData.subject" size="small"></el-input>
      </el-form-item>
    </el-form>
    <div class="instruction">
      请将本表填写后发至世界针联秘书处邮箱 contact@wfas.org.cn 。
      申请发言者请同时发送中英文摘要（中文不超过300字）、中英文简
      历（不超过一页纸）和电子版高清大头照。
    </div>
    <button class="submitBtn">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        way: "线下参会   ￥2400",
        submits: []
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>