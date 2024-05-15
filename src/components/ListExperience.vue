<script setup lang="ts">
import { differenceInMonths, differenceInYears, format } from 'date-fns';

defineProps<{ experience: Record<string, any[]> }>();

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\\/]+/g, '-');
}

function startDateFormatted(start_date: string) {
  return format(new Date(start_date), 'MMM yyyy');
}

function endDateFormatted(end_date?: string) {
  return end_date
    ? format(new Date(end_date), 'MMM yyyy')
    : 'Present';
}

function durationText(start_date: string, end_date: string) {
  const startDate = new Date(start_date);
  const endDate = new Date(end_date || Date.now());
  const durationYears = differenceInYears(endDate, startDate);
  const durationMonths = (differenceInMonths(endDate, startDate) % 12) + 1;

  const durationYearsText
    = durationYears > 0 ? `${durationYears} Year${durationYears > 1 ? 's' : ''}` : '';

  const durationMonthsText
    = durationMonths > 0 ? `${durationMonths} Month${durationMonths > 1 ? 's' : ''}` : '';

  const comma = durationYears > 0 && durationMonths > 0 ? ', ' : '';

  return `${durationYearsText}${comma}${durationMonthsText}`;
}
</script>

<template>
  <div class="max-w-300 mx-auto">
    <div
      v-for="key, cidx in Object.keys(experience)" :key="key" slide-enter
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
        class="experience-grid py-2 max-w-500 w-max mx-auto"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <a
          v-for="item, idx in experience[key]"
          :key="idx"
          class="item relative flex items-center"
          :href="item.url"
          target="_blank"
          :title="item.title"
        >
          <template
            v-if="key === 'Education'"
          >
            <div v-if="item.icon" class="pt-2 pr-5">
              <SibSAU v-if="item.icon === 'sibsau'" class="w-18 h-18 text-4xl opacity-50" />
              <YYandex v-else-if="item.icon === 'y-yandex'" class="w-18 h-18 text-4xl opacity-50" />
              <RsSchool v-else-if="item.icon === 'rs-school'" class="w-18 h-18 text-4xl opacity-50" />
              <div v-else class="w-18 h-18 text-3xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
            </div>
            <div class="flex-auto">
              <div class="text-normal">{{ item.title }}</div>
              <div class="text-sm opacity-50 font-italic" v-html="item.degree" />
              <div class="text-sm opacity-50 font-italic" v-html="item.major" />
              <div v-if="typeof item.start_date === 'number'" class="text-sm opacity-50 font-normal">
                <span>{{ `${item.end_date - item.start_date} Years` }}</span>
              </div>
              <div v-else class="text-sm opacity-50 font-normal">
                <span>{{ durationText(item.start_date, item.end_date) }}</span>
              </div>
              <div v-if="typeof item.start_date === 'number'" class="text-sm opacity-50 font-normal">
                <span>{{ item.start_date }}</span> - <span>{{ item.end_date }}</span>
              </div>
              <div v-else class="text-sm opacity-50 font-normal">
                <span>{{ startDateFormatted(item.start_date) }}</span> - <span>{{ endDateFormatted(item.end_date) }}</span>
              </div>
            </div>
          </template>

          <template v-else>
            <div v-if="item.icon" class="pt-2 pr-5">
              <If v-if="item.icon === 'if'" class="w-18 h-18 text-4xl opacity-50" />
              <div v-else class="text-3xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
            </div>
            <div class="flex-auto">
              <div class="text-normal">{{ item.title }}</div>
              <div class="flex justify-between">
                <div class="text-sm opacity-50 font-italic" v-html="item.company" />
                <div class="text-sm opacity-50 font-italic" v-html="item.location" />
              </div>
              <div class="text-sm opacity-50" v-html="item.form_company" />
              <div class="text-sm opacity-50 font-normal">
                <span>{{ durationText(item.start_date, item.end_date) }}</span>
              </div>
              <div class="text-sm opacity-50 font-normal">
                <span>{{ startDateFormatted(item.start_date) }}</span> - <span>{{ endDateFormatted(item.end_date) }}</span>
              </div>
            </div>
          </template>
        </a>
      </div>
    </div>
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(experience)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.experience-grid a.item {
  background: transparent;
  font-size: 1.1rem;
  width: 350px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
}

.experience-grid a.item:hover {
  background: #88888811;
}
</style>
