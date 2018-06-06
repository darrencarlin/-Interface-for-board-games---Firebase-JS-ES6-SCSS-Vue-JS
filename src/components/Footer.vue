<template>
    <footer>
       <small> &copy; {{ getDate() }} dazzle </small>
    </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getDate: () => {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  margin: 25px;
}
</style>
