<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store/todo';
import { useToast } from 'vue-toast-notification';

const newTask = ref('');
const todoStore = useTodoStore();
const $toast = useToast();

const tasks = todoStore.tasks;
const addTask = () => {
  if (newTask.value.trim() !== '') {
    todoStore.addTask(newTask.value);
    $toast.success('Successfully added new item.', {
        position: 'top-right'
    })
    newTask.value = '';
  }
};

const removeTask = (index) => {
  todoStore.removeTask(index);
  $toast.error('Item deleted successfully', {
        position: 'top-right'
    })
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
    <table class="w-full border-separate border border-slate-400" v-if="todoStore.tasks.length > 0">
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



  

  