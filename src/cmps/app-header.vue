<template>
  <header class="app-header">
    <div class="main-container">
      <div class="header-content">
        <div class="logo flex">
          <img src="/favicon.png" alt="" />
          <h2>MrBitcoin</h2>
        </div>
        <div class="user-details" v-if="loggedInUser || user">
          <span>Welcome {{ loggedInUser.name }}</span>
          <span>Balance: {{ loggedInUser.balance }} BT</span>
          <span>Rate: {{ rate }} $</span>
        </div>
        <nav v-if="loggedInUser || user">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/contact">Contacts</RouterLink>
          <RouterLink to="/statistics">Stats</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service';
import { userService } from "../services/user.service";
export default {
  props: ["user"],
  data() {
    return {
      loggedInUser: this.user,
      rate: null,
    };
  },
  async created() {
    const user = userService.getUser();
    if (user) this.loggedInUser = user;
    this.rate = await bitcoinService.getRate();
  },
};
</script>

<style>
</style>