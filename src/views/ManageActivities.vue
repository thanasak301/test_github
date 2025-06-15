<template>
  <div>
    <h1>เพิ่มรายการข่าว</h1>
    <p>คุณกรอก: {{ newsTitle }}</p>
    <input
      type="text"
      v-model="newsTitle"
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
      บันทึกข่าว
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import type { activityDTO } from "../models/activity.dto";

// สร้างตัวแปร newsTitle เพื่อเก็บค่าจาก input
const newsTitle = ref<string>(""); // กำหนดชนิดเป็น string
const newsDecription = ref<string>("");
const newsType = ref<string>("");
// onMounted(() => {
//   console.log("fect api");
//   AddActivitiesFromAPI();
// });
const activities = ref<activityDTO[]>([]);

// const AddActivitiesFromAPI = async () => {
//   try {
//     const response = await axios.get("/api/v1/activities");
//     activities.value = response.data.result;
//     console.log("เพิ่มข่าวสำเร็จ", activities.value);
//   } catch (error) {
//     console.log(error);
//   }
// };

const submitNew = async () => {
  try {
    const payload = {
      header: newsTitle.value ,
      decription: newsDecription.value ,
      type:newsType.value 
    };
    const response = await axios.post("/api/v1/manage-activity", payload);
    console.log(response,"dddd")
    console.log("เพิ่มข่าวสำเร็จ", response.data);
  } catch (error) {
    console.log(error);
  }
};
</script>
