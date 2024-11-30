<!-- <template>
    <form v-on:submit.prevent="handleSubmit">
       <input
          v-model="newTask"
          placeholder="I need to..."
          type="text"
        >
        <button>Add</button>
    </form>
</template>

<script>
  import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';

    export default {
        setup() {
            const taskStore = useTaskStore()
    
            const newTask = ref('')

            const handleSubmit = () => {
                if (newTask.value.length > 0) {
                    taskStore.addTask({
                        title: newTask.value,
                        isFav: false,
                        id: Date.now()
                    })
                    newTask.value = ''
                }
            }

            return { handleSubmit, newTask }
        }
    }
</script> -->

<template>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="newTask"
        placeholder="I need to..."
        type="text"
      >
      <button>Add</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useTaskStore } from '../stores/TaskStore';
  
  const taskStore = useTaskStore();
  const newTask = ref('');
  
  const handleSubmit = () => {
    if (newTask.value.length > 0) {
      taskStore.addTask({
        title: newTask.value,
        isFav: false,
        id: Date.now()
      });
      newTask.value = '';
    }
  };
  </script>
  