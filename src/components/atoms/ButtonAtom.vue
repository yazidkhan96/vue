<template>
  <button
    :class="['btn', `btn-${type}`, size ? `btn-${size}` : '', extraStyle]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: null,
    },
    extraStyle: {
      type: String,
      default: null,
    },
  },
};
</script>
