<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    start: string;
    end?: string;
    locale?: "en" | "ru";
    format?: "period" | "duration" | "years-plus" | "years-decimal";
  }>(),
  {
    locale: "en",
    format: "period",
  },
);

const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTHS_RU = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function parseYM(s: string): [number, number] {
  const [y, m] = s.split("-").map(Number);
  return [y, m];
}

function pluralRu(
  n: number,
  one: string,
  few: string,
  many: string,
): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

function formatDuration(totalMonths: number, locale: string): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (locale === "ru") {
    const parts: string[] = [];
    if (years > 0)
      parts.push(`${years} ${pluralRu(years, "год", "года", "лет")}`);
    if (months > 0) parts.push(`${months} мес.`);
    return parts.join(" ") || "менее месяца";
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years !== 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months !== 1 ? "s" : ""}`);
  return parts.join(" ") || "less than a month";
}

const result = computed(() => {
  const [sy, sm] = parseYM(props.start);
  const now = new Date();
  const [ey, em] = props.end
    ? parseYM(props.end)
    : [now.getFullYear(), now.getMonth() + 1];
  const totalMonths = (ey - sy) * 12 + (em - sm);

  if (props.format === "years-plus") {
    return `${Math.floor(totalMonths / 12)}+`;
  }

  if (props.format === "years-decimal") {
    const years = totalMonths / 12;
    const rounded = Math.floor(years * 2) / 2;
    return rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);
  }

  if (props.format === "duration") {
    return formatDuration(totalMonths, props.locale!);
  }

  // period format
  const startStr = `${MONTHS_EN[sm - 1] ? (props.locale === "ru" ? MONTHS_RU[sm - 1] : MONTHS_EN[sm - 1]) : sm} ${sy}`;
  const endStr = props.end
    ? `${props.locale === "ru" ? MONTHS_RU[em - 1] : MONTHS_EN[em - 1]} ${ey}`
    : props.locale === "ru"
      ? "настоящее время"
      : "Present";
  const dur = formatDuration(totalMonths, props.locale!);
  return `${startStr} — ${endStr} (${dur})`;
});
</script>

<template>
  <em v-if="format === 'period'">{{ result }}</em>
  <span v-else>{{ result }}</span>
</template>
