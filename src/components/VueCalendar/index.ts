import { computed, ref } from "vue";
import { useStore } from "../../store";
import { storeToRefs } from "pinia";
interface MonthDay {
  id: number;
  name: string;
  fname?: string;
  count?: number;
}
export function useCalendar(): any {
  const store: any = useStore();
  const days = ref<MonthDay[]>([
    {
      id: 0,
      name: "ПН",
      fname: "Понедельник",
    },
    {
      id: 1,
      name: "ВТ",
      fname: "Вторник",
    },
    {
      id: 2,
      name: "СР",
      fname: "Среда",
    },
    {
      id: 3,
      name: "ЧТ",
      fname: "Четверг",
    },
    {
      id: 4,
      name: "ПТ",
      fname: "Пятница",
    },
    {
      id: 5,
      name: "СБ",
      fname: "Суббота",
    },
    {
      id: 6,
      name: "ВС",
      fname: "Воскресенье",
    },
  ]);
  const months = ref<MonthDay[]>([
    {
      id: 0,
      name: "Январь",
      count: 31,
    },
    {
      id: 1,
      name: "Февраль",
      count: 28,
    },
    {
      id: 2,
      name: "Март",
      count: 31,
    },
    {
      id: 3,
      name: "Апрель",
      count: 30,
    },
    {
      id: 4,
      name: "Май",
      count: 31,
    },
    {
      id: 5,
      name: "Июнь",
      count: 30,
    },
    {
      id: 6,
      name: "Июль",
      count: 31,
    },
    {
      id: 7,
      name: "Август",
      count: 31,
    },
    {
      id: 8,
      name: "Сентябрь",
      count: 30,
    },
    {
      id: 9,
      name: "Октябрь",
      count: 31,
    },
    {
      id: 10,
      name: "Ноябрь",
      count: 30,
    },
    {
      id: 11,
      name: "Декабрь",
      count: 31,
    },
  ]);

  const date = new Date();
  const currentDay = date.getDate();
  const currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let selectMonth = ref<string>(months.value[currentMonth].name);
  let selectDay = ref<string>("");
  const firstDay = computed(() => {
    return new Date(currentYear, store.countMonth, 0).getDay();
  });  
  
  function selectedMonth(event: any): any {
    selectMonth.value = event.target.value;
    months.value.forEach((el) => {
      if (selectMonth.value == el.name) {
        store.countMonth = el.id;
        console.log(el.id);
        console.log(store.countMonth);
      }
    });
  };
  function selectedDays(event: any): any {
    selectDay.value = event.target.value;
  }

  storeToRefs(store);
  return {
    days,
    currentDay,
    months,
    selectMonth,
    selectedMonth,
    selectedDays,
    currentYear,
    firstDay
  };
}
