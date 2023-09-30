import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
    },
    loginUser({ email, password }) {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user;
        return true;
      } else {
        return false;
      }
    },
    logoutUser() {
      this.currentUser = null;
    },
  },
});
