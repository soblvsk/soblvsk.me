<script setup lang="ts">
defineProps<{ skills: Record<string, any[]> }>();

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\\/]+/g, '-');
}
</script>

<template>
  <div class="max-w-300 mx-auto">
    <div
      v-for="key, cidx in Object.keys(skills)" :key="key" slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(key)"
        select-none relative h20 pointer-events-none slide-enter
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-5em color-transparent absolute left--1rem top-0rem font-bold text-stroke-1.5 text-stroke-hex-aaa op20>{{ key }}</span>
      </div>
      <div
        class="skills-grid py-4 max-w-500 w-max mx-auto"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <div
          v-for="item, idx in skills[key]"
          :key="idx"
          class="item relative flex items-center border border-neutral-300 shadow-sm dark:border-neutral-700"
        >
          <div v-if="item.icon" class="pt-2 pr-5">
            <div class="text-3xl" :class="item.icon || 'i-carbon-unknown'" />
          </div>
          <div class="flex-auto">
            <div class="text-normal">
              {{ item.title }}
            </div>
            <div class="text-sm opacity-50 font-normal" v-html="item.desc" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="table-of-contents">
        <div class="table-of-contents-anchor">
          <div class="i-ri-menu-2-fill" />
        </div>
        <ul>
          <li v-for="key of Object.keys(skills)" :key="key">
            <a :href="`#${slug(key)}`">{{ key }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-grid div.item {
  background: transparent;
  width: 320px;
  max-width: 100%;
  border-radius: 6px;
  padding: 0.5rem 0.875rem 0.875rem;
}

.skills-grid div.item:hover {
  background: #88888811;
  opacity: 100;
}
</style>
