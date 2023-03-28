<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-expanded="false"
    >
      {{ label }}
    </button>
    <div class="dropdown-menu">
      <a
        v-for="option in options"
        :key="option.id"
        class="dropdown-item"
        href="#"
        @click="$emit('input', option.currency)"
      >
        {{ option.currency }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
