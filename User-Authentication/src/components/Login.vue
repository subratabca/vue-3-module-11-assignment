<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';

const authStore = useAuthStore();
const router = useRouter();
const $toast = useToast();

const email = ref('');
const password = ref('');

const isEmailValid = ref(true);
const isPasswordValid = ref(true);

const login = () => {
    if (!isValidEmail(email.value)) {
        isEmailValid.value = false;
    } else {
        isEmailValid.value = true;
    }

    if (password.value.length < 6) {
        isPasswordValid.value = false;
    } else {
        isPasswordValid.value = true;
    }

  const user = {email:email.value,password:password.value}
    if (authStore.loginUser(user)) {
            $toast.success('Login successful', {
            position: 'top-right'
        })
        email.value = '';
        password.value = '';
        localStorage.setItem('user', JSON.stringify(authStore.currentUser));
        router.push('/home');
    } else {
            $toast.error('Invalid email and password!', {
            position: 'top-right'
        })
    }
};

// Function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

</script>

<template>
    <p class="mt-10">
        <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <div class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                            <input type="email" name="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" />
                            <span v-if="!isEmailValid" class="text-red-500">Invalid email format</span>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" v-model="password"  placeholder="Enter password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <span v-if="!isPasswordValid" class="text-red-500">Invalid Password</span>
                        </div>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                                <router-link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</router-link>
                        </p>
                        <p class="text-right">
                            <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <span>Login</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </p>
</template>

<style></style>