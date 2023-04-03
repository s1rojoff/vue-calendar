<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "../BaseIcon/index.vue";
import { useCalendar } from "./index";
import WeekDay from "./WeekDay/index.vue";
import { useStore } from "../../store/index";
import { storeToRefs } from "pinia";

const store: any = useStore();
let {
  days,
  currentDay,
  months,
  selectedDays,
  selectMonth,
  selectedMonth,
  firstDay,
} = useCalendar();

function alertDay():any{
  alert('This day is saved')
}
storeToRefs(store);
</script>
<template>
  <div class="border bg-slate-50 w-full xl:w-1/2 mx-auto p-4 mt-5 h-auto">
    <div class="flex justify-center">
      <div class="flex items-center gap-3">
        <BaseIcon
          @click="store.decriment"
          class="w-3 cursor-pointer h-3 text-slate-900"
          name="Left"
        />
        <p class="text-lg font-medium w-20 text-center">
          {{ months[store.countMonth].name }}
        </p>
        <BaseIcon
          @click="store.increment"
          class="w-3 cursor-pointer h-3 text-slate-900"
          name="Right"
        />
      </div>
    </div>
    <div class="flex gap-10 xl:px-5 mt-5 w-full">
      <div class="w-1/2">
        <p>дд</p>
        <select
          id="day"
          class="border mt-0.5 bg-blue-50 w-full rounded px-3 outline-none"
          @change="selectedDays($event)"
        >
          <option
            v-for="(item, index) in days"
            :value="item.fname"
            :key="index"
          >
            {{ item.fname }}
          </option>
        </select>
      </div>
      <div class="w-1/2">
        <p>Месяц</p>
        <select
          id="month"
          class="border mt-0.5 bg-blue-50 w-full rounded px-3 outline-none"
          @change="selectedMonth($event)"
          v-model="selectMonth"
        >
          <option
            v-for="(item, index) in months"
            :key="index"
            :value="item.name"
            :selected="index == 0"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="xl:px-5 mt-5 w-full">
      <div class="grid grid-cols-7 xl:gap-7 gap-4">
        <p class="xl:px-4 text-lg" v-for="(item, index) in days" :key="index">
          {{ item.name }}
        </p>
      </div>
      <div id="day-groups" class="grid grid-cols-7 gap-2 mt-3">
        <WeekDay
          :currentDay="currentDay"
          :dayNumber="item"
          class="opacity-0"
          v-for="(item, index) in firstDay"
          :key="index"
          :value="item"
        />
        <WeekDay
        :month="store.countMonth"
          :currentDay="currentDay"
          :dayNumber="item"
          class="cursor-pointer"
          v-for="(item, index) in months[store.countMonth].count"
          :key="index"
          :value="item"
          :sunDay="firstDay+item"
        />
      </div>
    </div>

    <div class="flex justify-end mt-3">
      <button @click="alertDay" class="bg-green-700 text-white px-10 py-1.5 rounded">
        Сохранить
      </button>
    </div>
  </div>
</template>
<style>
</style>
