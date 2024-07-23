const ToDoApp = {
    data() {
        return {
            toDoList: [
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
                this.newItem = {}
            }
        },
        clearList: function () {
            this.toDoList = []
        }
    }
}

Vue.createApp(ToDoApp).mount('#app');