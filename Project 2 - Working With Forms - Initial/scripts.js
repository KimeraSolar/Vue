members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {
                fname: null,
                lname: null,
                instrument: null
            }
        }
    },
    methods: {
        addMember: function () {
            if(this.newMember.fname && this.newMember.lname && this.newMember.instrument){
                this.members.push(this.newMember);
                this.newMember = {}
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
