<template>
  <div class="flex flex-col gap-y-16 p-16 w-[100vw]">
    <Container>
      <div v-gsap.from="{ opacity: 0, y: -64 }" class="size-20 bg-red-500"></div>
    </Container>
    <Container>
      <div v-gsap.markers.whenVisible.from="{ opacity: 0, y: 128 }" class="size-20 bg-red-500"></div>
    </Container>
    <Container>
      <div v-gsap.markers.whenVisible.once.from="{ opacity: 0, y: -64 }" class="size-20 bg-red-500"></div>
    </Container>
    <Container>
      <button v-gsap.magnetic>Test</button>
    </Container>
  </div>
</template>

<script setup>
</script>
