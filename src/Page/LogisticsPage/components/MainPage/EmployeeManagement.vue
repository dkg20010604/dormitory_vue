<template>
  <el-row>
    <el-col :span="11">
      <el-input v-model="QueryString" placeholder="要搜点什么,混合搜索时关键词请用空格分隔" class="input-with-select">
        <template #prepend>
          <el-select v-model="QueryType" :default-first-option="true" style="width: 80px">
            <el-option label="姓名" value="name" />
            <el-option label="职务" value="power" />
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
      </div>
    </el-col>
  </el-row>
  <el-upload
    ref="upload"
    action="http://localhost:4641/api/Logistics"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
    :before-upload="beforupload"
  >
    <template #trigger>
      <el-button type="primary">select file</el-button>
    </template>
    <el-button type="success" @click="submitUpload">
      upload to server
    </el-button>
    <template #tip>
      <div style="font-size:10px;font-style: normal;color: red;">至多上传一个文件，多次上传自动覆盖</div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>import { RouteLink } from '@/stores/route';
import { ElMessage, genFileId, type UploadInstance, type UploadProps, type UploadRawFile } from 'element-plus';
import { Search } from '@element-plus/icons-vue'
const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
const beforupload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error({
      message:'只能上传图片格式文件'
    })
    return false
  }
  else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片最大可上传2M，已超标')
    return false
  }
  return true
}
const pagedata = ref({
  pageable: false as boolean,
  pageindex: 1 as number,
  pagesize: 20 as number,
  tatal: 1000 as number,
  tableData: '' as unknown as Array<any>,
  //如果有搜索保存搜索条件
  queryinfo: '' as any
})
const QueryString = ref('');
const QueryType = ref('name');
//模拟点击切换页码后获取数据
const pagechange = async (val: number) => {
  pagedata.value.pageable = true;
  pagedata.value.pageable = false;
  pagedata.value.pageindex = val;

  //构造查询条件
  if (QueryString.value.length > 0) {
    if (QueryType.value != 'none') {
      pagedata.value.queryinfo = [{
        FieldName: QueryType.value,
        ConditionalType: 1,
        FieldValue: QueryString.value
      }];
    }
    else {
      var a = QueryString.value.split(' ');
      a.forEach(element => {
        element.trim();
      });
    }
  }
  //清空数据
  pagedata.value.tableData = '' as unknown as any[];
  //模拟后台查询拿到数据
  pagedata.value.tableData = [{
    status: '在岗',
    name: '王翠花',
    power: '资深宿管'
  }];
  pagedata.value.queryinfo = [{
    FieldName: QueryType.value,
    ConditionalType: 1,
    FieldValue: QueryString.value
  }];
  console.log(pagedata.value);
  console.log(RouteLink().hub.send("SendMessage", '换页'));
}

const searchbutton = () => {
  //通知后端做查询操作
  console.log(QueryString.value, QueryType.value);
}
function quarydata() {
  fetch('url', {
    headers: {

    },
    body: JSON.stringify(pagedata.value)
  }).then(response => response.json())
    .then(data => {

    })
}
</script>
<style scoped>
.SearchIcon :hover {
  color: aqua;
}
</style>