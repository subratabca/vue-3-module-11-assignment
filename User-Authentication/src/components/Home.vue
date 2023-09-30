<script setup>
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";

const authStore = useAuthStore();
const router = useRouter();
const $toast = useToast();

const logout = () => {
  authStore.logoutUser();
  $toast.success("Logout successfully", {
    position: "top-right",
  });
  localStorage.removeItem("user");
  router.push("/login");
};
</script>

<template>
  <h1 class="text-2xl mb-3">This is home page</h1>
  <h2>Welcome, {{ authStore.currentUser.email }}</h2>

  <button
    v-if="authStore.currentUser"
    @click="logout"
    class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded mt-4"
  >
    <span>Logout</span>
  </button>
</template>

<style></style>
