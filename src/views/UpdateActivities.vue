<template>
    <div>
    <h1>เพิ่มรายการข่าว</h1>
    <p>คุณกรอก: {{newsHeader }}</p>
    <input
      type="text"
      v-model="newsHeader"
      placeholder="กรอกหัวข้อข่าว"
      class="border p-2 rounded"
    />

    <p>คุณกรอก: {{ newsDecription }}</p>
    <input
      type="text"
      v-model="newsDecription"
      placeholder="กรอกเนื้อหาข่าว"
      class="border p-2 rounded"
    />
    <p>คุณกรอก: {{ newsType }}</p>
    <input
      type="text"
      v-model="newsType"
      placeholder="กรอกประเภทข่าว"
      class="border p-2 rounded"
    />
    <button
      type="button"
      @click="submitNew"
      class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      แก้ไขข่าว
    </button>
  </div>
  
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';

const newsHeader = ref<string>(""); 
const newsDecription = ref<string>("");
const newsType = ref<string>("");

onMounted(() => {
  if (id) {
    getActivitiesByIDFromAPI();
  }
});

const route = useRoute()
const id = route.query.id

const getActivitiesByIDFromAPI = async () => {
  try {
    const response = await axios.get(`/api/v1/activities/${id}`);
    const result = response.data.result;
    console.log("API result:", result);

    if (Array.isArray(result)) {
      // กรณี result เป็น array ดึงตัวแรก
      if (result.length > 0) {
        const activity = result[0];
        newsHeader.value = activity.header ?? "";
        newsDecription.value = activity.decription ?? "";
        newsType.value = activity.type ?? "";
      } else {
        console.warn("ไม่มีข้อมูลใน array result");
      }
    } else if (result && typeof result === "object") {
      // กรณี result เป็น object เลย
      newsHeader.value = result.header ?? "";
      newsDecription.value = result.decription ?? "";
      newsType.value = result.type ?? "";
    } else {
      console.warn("ผลลัพธ์จาก API ไม่ใช่ object หรือ array");
    }

    console.log("newsHeader:", newsHeader.value);
  } catch (error) {
    console.log("Error fetching activity by id:", error);
  }
};
const submitNew = async () => {
  try {
    const payload = {
      id : id,
      header: newsHeader.value ,
      decription: newsDecription.value ,
      type:newsType.value 
    };
    const response = await axios.put("/api/v1/update-activity", payload);
    console.log(response,"dddd")
    console.log("แก้ไขข่าวสำเร็จ", response.data);
  } catch (error) {
    console.log(error);
  }
};


</script>

