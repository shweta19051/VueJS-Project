<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>
<script lang="ts">

import { Vue,Component } from 'vue-property-decorator';
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";


@Component({
  components: {
    AppFooter , AppHeader,
  },
})
export default class App extends Vue {

  
}
</script>
<style>
</style>
