
// let id = 1;
// const app = {
//    data() {
//     return {
//         title: 'Циклы',
//         text: '',
//         list: [
//             { id: id++, name: 'Html' },
//             { id: id++, name: 'Css' },
//             { id: id++, name: 'Js' },
//         ]
//     }
//    },
//    computed: {
//         getListLength() {
//            return this.list.length 
//         }
//    },
//    methods: {
//     delNote(note) {
//         this.list =  this.list.filter(item => item.id != note.id)
//     },
//     addNote() {
//         if(this.text.length > 1 && isNaN(this.text)) {
//             this.list.push({
//                 id: id++,
//                 name: this.text
//             })
//             this.text = ''
//         }
        
//     }
//    },
// }
let id = 1;

const app = {
    data() {
     return{
        selected:'',
        text:'',
        list: [ {id: id++,name:'CSGO', user: "Aza", userb: "John", newuser:'OK'}],
        lista:[ {id: id++, name:'Dota', user: "Bek", userb: "Malay",newuser:''}],
        listb: [ {id: id++, name:'Pubg', user: "Vasya", newuser:'' }]
            }
    
           },
    methods:{ 
            addName(){
           if(this.text.length > 1 && isNaN(this.text) && this.selected.length > 1){
            this.list.unshift({
            id: id++,
            name:this.selected,
            user:this.text
            })
            this.selected = '' 
            this.text = ''
        }
}
       
            }
           }        



Vue.createApp(app).mount('#app')


