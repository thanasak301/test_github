<template>
  <div class="px-24 mb-18">
    <div class="grid grid-cols-2 bg-[#ffcd05] rounded-2xl">
      <div>
        <iframe
        class=" w-full h-[400px] rounded-l-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.7906482501267!2d99.01053601531153!3d18.896366462503607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3cb54b7f9f2b%3A0xbed41f24ed04a2ca!2z4Lit4Liy4LiE4Liy4Lij4LmA4Liq4Liy4Lin4Lij4Lix4LiIIOC4meC4tOC4leC4ouC4p-C4o-C4o-C4mOC4meC4sCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguYHguKHguYjguYLguIjguYk!5e0!3m2!1sth!2sth!4v1619566633232!5m2!1sth!2sth"
        >
        </iframe>
      </div>
      <div class="p-12">
        <div class="flex items-center">
          <Icon icon="mdi-domain" class="mr-2" style="font-size: 52px" />
          <p class="text-xl">
            หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์
            มหาวิทยาลัยแม่โจ้ 63 หมู่ 4 ตำบลหนองหาร อำเภาสันทราย
            จังหวัดเชียงใหม่ 50290
          </p>
        </div>
        <div class="flex items-center">
          <Icon icon="mdi-phone" class="mr-2" style="font-size: 32px" />
          <p class="text-xl my-8">เบอร์โทร: 053-873900</p>
        </div>
        <div class="flex items-center">
          <Icon icon="mdi-email" class="mr-2" style="font-size: 32px" />
          <p class="text-xl">อีเมล: itscimju2545@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
