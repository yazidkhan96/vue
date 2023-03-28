<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :id="id"
    :class="customClass"
  />
</template>

<script>
export default {
  name: "App",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "qty",
    },
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>
<style>
input {
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
}
</style>
