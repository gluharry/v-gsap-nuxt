<template>
  <div class="flex flex-col gap-y-16 p-16 w-[100vw]">
    <Container>
      <div v-gsap.from="{ opacity: 0, y: -64 }" class="size-20 bg-red-500"></div>
    </Container>
    <Container>
      <div v-gsap.whenVisible.from="{ opacity: 0, y: 128 }" class="size-20 bg-red-500"></div>
    </Container>
    <Container>
      <div v-gsap.whenVisible.once.from="{ opacity: 0, y: -64 }" class="size-20 bg-red-500"></div>
    </Container>
    <Container>
      <button v-gsap.magnetic>Test</button>
    </Container>
    <Container>
      <div v-gsap.timeline.whenVisible.once class="flex p-16 w-full justify-between gap-y-16">
        <div>
          <h1 class="text-4xl font-bold"  v-gsap.add.fromInvisible.from="{ x: -32 }"
              v-gsap.add.to="{ scale: 2 }">Hello World</h1>
          <div v-gsap.add.from="{ scale: 0 }">They see me animating</div>
        </div>
        <div v-gsap.add.withPrevious.from="{ opacity: 0, y: -164 }" class="size-100 bg-red-500"></div>
      </div>
    </Container>
  </div>
</template>

<script setup>
</script>
