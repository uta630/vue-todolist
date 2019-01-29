Vue.component('header-head', {
    template: `
        <header>
            <h1>
                <i class="material-icons prefix medium">mode_edit</i>
                <slot></slot>
            </h1>
        </header>
    `
})

const todo = [
    {
        title: "課題",
        detail: "Vue.jsをして、リアクティブなタスク管理アプリを制作",
    },
    {
        title: "ツール",
        detail: "html, css, js, Vue.js, Google Material Design(materialize + Icons)",
    },
]

new Vue({
    el: "#app",
    data: {
        inputTask: { title: "", detail: "", },
        tasks: todo,
        completed: [],
        remove: [],
        type: "tasks",
        isChecked: 0,
        allSelected: false,
    },
    // mounted(){
    //     axios
    //         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //         .then(res => (this.tasks = res))
    // },
    methods: {
        addTask: function(){
            this.tasks.unshift(this.inputTask);
            this.inputTask = {
                title: "",
                detail: "",
            }
        },
        isCheckedBtn: function(e){
            e.isChecked ? this.isChecked-- : this.isChecked++
        },
        oparationBtn: function(arr, i){
            arr.push(this.tasks[i])
            this.tasks.splice(i, 1)
            this.isChecked--
        },
        allOparationBtn: function(arr){
            this.allSelected = false

            var save = [], count = 0
            this.tasks.forEach((item) => {
                if(item.isChecked){
                    arr.push(item)
                    count++
                } else {
                    save.push(item)
                }
            });

            this.isChecked -= count
            this.tasks = save
        },
        allSelectedBtn: function(){
            if(this.isChecked == this.taskCounter){
                this.allSelected = false
                this.isChecked = 0
            } else {
                this.allSelected = true
                this.isChecked = this.taskCounter
            }
            this.tasks.forEach(item => {
                item.isChecked = this.allSelected
            });
        },
    }
});