<template>
    <div class="w-full h-[400px] bg-amber-900 flex items-center justify-center">
        <h1 class=" text-2xl">{{ pageNumber }}</h1>
        <button @click="handleOnClickPreviousPage" class=" px-3 py-1.5 bg-red-700 ">ก่อนหหน้า</button>
        <button  @click="handleOnClickNextPage" class=" px-3 py-1.5 bg-blue-500 ">ถัดไป</button>
    </div>
  
</template>

<script setup lang="ts">
import { ref } from "vue";

const pageNumber = ref(1);

const handleOnClickNextPage=()=>{
    if (pageNumber.value < 3) {
        pageNumber.value = pageNumber.value + 1;
    }
    
}

const handleOnClickPreviousPage=()=>{
    if (pageNumber.value > 1) {
        pageNumber.value = pageNumber.value - 1;
    }
    
    
}

</script>

