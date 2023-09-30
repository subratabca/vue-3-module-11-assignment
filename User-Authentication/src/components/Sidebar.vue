
<script setup>
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();

</script>
<template>
    <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
          <li>
            <router-link to="/Home">Home</router-link>
          </li>
          <li>
            <router-link to="/todo-list">Todo List</router-link>
          </li>
          <li  v-if="!authStore.currentUser">
            <router-link to="/register">Register</router-link>
          </li>
          <li  v-if="!authStore.currentUser">
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </section>
</template>

<style></style>