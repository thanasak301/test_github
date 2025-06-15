

<template>
  <div>
    <Navbar />
    <Banner />
    <FactDetail />
    <Activities />
    <Address/>
    <Footer/>

  </div>
</template>

<script setup lang="ts">
import Activities from "../components/Activities.vue";
import Address from "../components/Address.vue";
import Banner from "../components/Banner.vue";
import FactDetail from "../components/FactDetail.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";


</script>
