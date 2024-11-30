// Where the pinia task store will live
// Generally speaking, for each separate global state, 
// make a different store file for it. 
// (e.g. state that keeps track of live comments, 
// so make a comment store file), this is the modular approach

// Lets use make a store
import { defineStore } from "pinia";

// create a store
// two arguments: first is identifier, second argument is an object (define state)
export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        isLoading: false
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        async getTasks() {
            this.isLoading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.isLoading = false
        },
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        },
        toggleFav(id) {
            const task = this.tasks.find(task => task.id === id);
            if (task) {
                task.isFav = !task.isFav;
            }
        }
    }
})