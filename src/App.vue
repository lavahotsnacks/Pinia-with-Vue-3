<template>
  <main>
    <!-- heading -->
     <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
     </header>

     <!-- new task form -->
      <div class="new-task-form">
        <TaskForm />
      </div>

     <!-- filter nav -->
      <nav class="filter">
        <button @click="filter = 'all'">All tasks</button>
        <button @click="filter = 'favs'">Fav tasks</button>
      </nav>

      <!-- loading -->
       <div class="isLoading" v-if="taskStore.isLoading">Loading tasks...</div>

     <!-- task list -->
      <div class="task-list" v-if="filter === 'all'">
        <!-- added :key in the v-for to align with the essential vue convention -->
         <p>You have {{ taskStore.totalCount }} tasks left to do</p>
        <div v-for="task in taskStore.tasks" :key="task.id">
           <!-- pass in that individual task as a prop each time :task="task" -->
          <TaskDetails :task="task" />
        </div> 
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <p>You have {{ taskStore.favCount }} favs left to do</p>
        <div v-for="task in taskStore.favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>

  <!-- reset the store state --> 
  <!-- <button @click="taskStore.$reset">reset state</button> -->

  </main>
</template>

<script setup>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore';
import { storeToRefs } from 'pinia';

const taskStore = useTaskStore();

// fetch tasks
taskStore.getTasks();
const filter = ref('all');

// instead of using taskStore.isLoading, you can use isLoading directly on your template
// const { tasks, isLoading, favs, totalCount, favCount} = storeToRefs(taskStore);

</script>

<!-- options aoi
<script>
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue';
// access the store
import { useTaskStore } from './stores/TaskStore'

  export default {
    // register the component
    components: { TaskDetails, TaskForm},

    setup() {
      // return the store and store in taskStore
      const taskStore = useTaskStore()

      const filter = ref('all')

      // so it's available to vue template (template above this)
      return { taskStore, filter }
    }
  }
</script> -->
