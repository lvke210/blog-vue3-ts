<template>
  <div ref="p_table">
    <table
      border="1"
      width="360"
      height="220"
      style="border-collapse: collapse; border: solid 1px"
      bordercolor="#000000"
    >
      <tr>
        <td width="100%" height="240">
          <p align="center">
            <font face="隶书" size="5" style="letter-spacing: 10px">阳维成</font>
          </p>

          <p align="center"><font face="宋体" size="3">嘿嘿嘿</font></p>
          <p align="left">
            <font face="宋体" size="3">地址：中国</font>
          </p>
          <p align="left"><font face="宋体" size="3">电话：010-88811888</font></p>
          <p>
            <br />
          </p>
        </td>
      </tr>
    </table>
  </div>

  <div><a-button @click="print('PRINT_DESIGN')">PRINT_DESIGN</a-button></div>
  <div><a-button @click="print('PREVIEW')">PREVIEW</a-button></div>
  <div><a-button @click="print('PRINTA')">PRINTA</a-button></div>
  <div><a-button @click="print()">PRINT</a-button></div>
  <a-select @click="getprinterList" v-model:value="printerIndex" style="min-width: 300px">
    <a-select-option v-for="(item, index) in printerList" :key="index" :value="index">{{
      item.name
    }}</a-select-option>
  </a-select>
</template>
<script setup lang="ts">
import getLodop from "@/plugins/LodopFuncs";
import { ref } from "vue";
let printerList: any = ref([]);
function getprinterList() {
  // 以后优化的话可以放到localStorage中
  printerList.value.length <= 1 ? (printerList.value = getLodop().Printers.list) : null;
}
const p_table = ref<any>(null);
const printerIndex = ref(undefined);
function print(type?: string) {
  const LODOP = getLodop();
  LODOP.PRINT_INIT("hellotest");
  LODOP.SET_PRINTER_INDEX(printerIndex.value);
  LODOP.ADD_PRINT_HTM(10, 55, "100%", "100%", p_table.value.innerHTML);
  LODOP.ADD_PRINT_BARCODE(300, 100, 200, 100, "128A", "fgs43543543543");
  LODOP.ADD_PRINT_BARCODE(500, 100, 300, 300, "QRCode", "www.lvke210.com");
  switch (type) {
    case "PRINT_DESIGN":
      LODOP.PRINT_DESIGN(); //可编辑打印
      break;
    case "PREVIEW":
      LODOP.PREVIEW(); //预览
      break;
    case "PRINTA":
      LODOP.PRINTA(); //选择打印机
      break;
    default:
      LODOP.PRINT(); //直接打印
  }
}
</script>
