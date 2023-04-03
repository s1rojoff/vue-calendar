<script setup lang="ts">
import { PropType } from "vue";
import { useCalendar } from "../index";
const { currentMonth }: any = useCalendar();

const props = defineProps({
  value: {
    type: Number as PropType<number>,
    required: true,
  },
  currentDay: {
    type: Number as PropType<number>,
    required: true,
  },
  dayNumber: {
    type: Number as PropType<number>,
    required: true,
  },
  month: {
    type: Number as PropType<number>,
  },
  sunDay:{
    type: Number as PropType<number>,
    default: 0
  }
});
let monthIndex = new Date().getMonth();
</script>
<template>
  <div class="border font-semibold rounded-lg"
  :class="[(props.sunDay % 7 == 0) ? 'bg-red-400' : '']"
  >
    <div
      :class="[
        props.currentDay === props.dayNumber && monthIndex === props.month
          ? 'bg-green-900 text-white'
          : '',
      ]"
      class="py-3 rounded-lg"
    >
      <p class="text-center">{{ props.value }}</p>
    </div>
  </div>
</template>
