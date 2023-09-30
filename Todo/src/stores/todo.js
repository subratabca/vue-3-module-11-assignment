// src/store/todo.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(taskName) {
      this.tasks.push({ taskName, status: true });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskStatus(index) {
      this.tasks[index].status = !this.tasks[index].status;
    },
  },
});
