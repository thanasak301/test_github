<template>
  <div class="mb-24">
    <h1 class="text-center text-2xl font-bold text-[#353535] mb-18">
      ข่าวและกิจกรรม
    </h1>
    <div class="grid grid-cols-4 gap-5 px-24 mb-8">
      <ActivitiesCard
        v-for="(activity, index) of activities"
        :key="index"
        :id="activity.id"
        :header="activity.header"
        :decription="activity.decription"
        :type="activity.type"
        :createdAt="activity.createdAt"
        :updatedAt="activity.updatedAt"
         @delete="deleteActivity"
      />
    </div>

    <div class="flex justify-center">
      <button
        class="bg-[#aa1818] px-12 py-4 text-white rounded-md cursor-pointer"
      >
        ดูเพิ่มเติม
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ActivitiesCard from "./ActivitiesCard.vue";
import axios from "axios";
import type { activityDTO } from "../models/activity.dto";
onMounted(() => {
  console.log("fetch  api");
  getAllActivitiesFromAPI();
});
const activities = ref<activityDTO[]>([]);

const getAllActivitiesFromAPI = async () => {
  try {
    const response = await axios.get("/api/v1/activities");
    activities.value = response.data.result;
    // console.log(activities.value);
  } catch (error) {
    console.log(error);
  }
};

const deleteActivity = async (id: number) => {
  try {
    console.log(id,'asdawd')
    const response = await axios.delete(`/api/v1/activities/${id}`);
    console.log("ลบข่าวสำเร็จ", response.data);
    await getAllActivitiesFromAPI(); // รีโหลดข้อมูลใหม่
  } catch (error) {
    console.log("เกิดข้อผิดพลาดในการลบ", error);
  }
};
</script> 
