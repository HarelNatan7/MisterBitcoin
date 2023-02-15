<template>
  <section class="home-page full">
    <img src="../assets/img/hero.jpg" >
    <section class="home-page-txt">
        Nice To See You Again
         <RouterLink to="/contact"><button>Get Started</button></RouterLink>
    </section>
  </section>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      rate: null,
    };
  },

  async created() {
    this.user = userService.getUser();
    this.rate = await bitcoinService.getRate();
  },
};
</script>



