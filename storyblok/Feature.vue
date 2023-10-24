<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok" class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden">
    <img
      v-if="blok.image"
      :src="blok.image?.filename"
      :alt="blok.image?.alt"
      class="w-full h-48 xl:h-72 object-cover"
    />
    <h3 class="text-2xl text-[#50b0ae] font-bold text-center">
      {{ blok.name }}
    </h3>
  </div>
</template>
