<template>
  <el-row>
    <el-col :span="11">
      <el-input v-model="QueryString" placeholder="要搜点什么" class="input-with-select">
        <template #prepend>
          <el-select v-model="QueryType" :default-first-option="true" style="width: 80px">
            <el-option label="姓名" value="name" />
            <el-option label="职务" value="power" />
            <el-option label="混合" value="none" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" @click="searchbutton" />
        </template>
      </el-input>
      <el-table :data="pagedata.tableData">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="power" label="职务" />
        <el-table-column prop="status" label="状态" />
      </el-table>
      <el-pagination :page-size="pagedata.pagesize" :pager-count="10" layout="prev, pager, next" :total="pagedata.tatal"
        @current-change="pagechange" :disabled="pagedata.pageable" />
    </el-col>
    <el-col :span="2"></el-col>
    <el-col :span="11">
      <div style="width: 100%;height: 200px; background-color: aqua;">
        <p>这里之后使用ECharts画图表，也可以放日历</p>
        <el-calendar v-model="data" @click="writedata" />
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { query } from "@/stores/queryInfo";
import { Search } from '@element-plus/icons-vue'
const pagedata = ref({
  pageable: false as boolean,
  pageindex: 1 as number,
  pagesize: 20 as number,
  tatal: 1000 as number,
  tableData: '' as any ,
  queryinfo: '' as any
})
const pagechange = (val: number) => {
  pagedata.value.pageable = true
  pagedata.value.pageable = false
  pagedata.value.tableData = [{
    status: '在岗',
    name: '王翠花',
    power: '资深宿管'
  }],
    pagedata.value.queryinfo = query().queryable
}
const writedata=()=>{
  console.log(data.value.toString());
  
}
const data=ref(new Date())
const QueryString = ref('');
const QueryType = ref('name');
const searchbutton = () => {
  //通知后端做查询操作
  console.log(QueryString.value, QueryType.value);
  data.value.setMonth(6)
}
</script>
<style scoped>
.SearchIcon :hover {
  color: aqua;
}
</style>