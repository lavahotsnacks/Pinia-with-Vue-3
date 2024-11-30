<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i
              @click="taskStore.deleteTask(task.id)"
              class="material-icons">delete</i>
            <i
            :class="{ active: task.isFav }"
            @click="taskStore.toggleFav(task.id)"
            class="material-icons">favorite</i>
        </div>
    </div>
</template>

<!-- <script>
    import { useTaskStore } from '../stores/TaskStore';

    export default {
        // register the prop that we want to accept
        props: ['task'], // ":task=" is the name from where it was passed from
        setup() {
            const taskStore = useTaskStore()

            return { taskStore }
        }
    }
</script> -->

<script setup>
    import { useTaskStore } from '../stores/TaskStore';

    const props = defineProps(['task']);

    const taskStore = useTaskStore();
</script>