<template>
 <div>
     <app-header></app-header>
     <h3>Home</h3>
     <router-view/>
     <app-controls></app-controls>
     <app-footer></app-footer>
 </div>
</template>

<script>
import controls from '@/components/Nav';
import header from '@/components/Header';
import footer from '@/components/Footer';

export default {
  components: {
    'app-header': header,
    'app-controls': controls,
    'app-footer': footer,
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>
