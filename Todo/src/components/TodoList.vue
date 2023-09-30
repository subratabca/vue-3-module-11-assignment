<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todo';

const newTask = ref('');
const todoStore = useTodoStore();

const tasks = todoStore.tasks;
const addTask = () => {
  if (newTask.value.trim() !== '') {
    todoStore.addTask(newTask.value);
    newTask.value = '';
  }
};

const removeTask = (index) => {
  todoStore.removeTask(index);
};

const toggleTaskStatus = (index) => {
  todoStore.toggleTaskStatus(index);
};
</script>

<template>
  <div class="max-w-md mx-auto">
    <div class="mb-4 mt-4">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" class="w-full px-3 py-2 border rounded" />
      <button @click="addTask" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </div>
    <table class="w-full border-separate border border-slate-400 ">
      <thead>
        <tr>
          <th class="border border-slate-300">Task Name</th>
          <th class="border border-slate-300">Status</th>
          <th class="border border-slate-300">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="border border-slate-300">{{ task.taskName }}</td>
          <td class="border border-slate-300">
            <input type="checkbox" v-model="task.status" @click="toggleTaskStatus(index)" />
            <span class="ml-2" v-if="task.status">done</span>
            <span class="ml-2 mb=2" v-else>undone</span>
          </td>
          <td class="border border-slate-300">
            <button @click="removeTask(index)" class="text-red-500">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



  

  