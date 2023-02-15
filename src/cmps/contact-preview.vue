<template>
  <article>
    <span>{{ contact.name }}</span>
    <img :src="'https://api.dicebear.com/5.x/open-peeps/svg?seed=' + contact.name" />
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>