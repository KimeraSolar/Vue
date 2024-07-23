const ToDoApp = {
    data() {
        return {
            toDoList: [
            ],
            newItem: {
                done: false,
                description: null
            }
        }
    },
    methods: {
        addItem: function () {
            if(this.newItem.description){
                this.toDoList.push(this.newItem);
                this.newItem = {};
            }
        },
        clearList: function () {
            this.toDoList = [];
        },
        saveList: function () {
            localStorage.setItem('todos', JSON.stringify(this.toDoList));
        }
    },
    created() {
        this.toDoList = 
            localStorage.getItem('todos') ? 
            JSON.parse(localStorage.getItem('todos')) : 
            [
                {
                    done: true,
                    description: 'Aprender HTML, CSS e Javascript'
                },
                {
                    done: true,
                    description: 'Aprender o básico de Vue JS'
                },
                {
                    done: false,
                    description: 'Completar o desafio de Vue JS com excelência'
                }
            ]
    },
    updated() {
        this.saveList();
    }
}

Vue.createApp(ToDoApp).mount('#app');