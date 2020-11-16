
  var app = new Vue({
    el: '#app',

    data: {
        form: {
          id: '',
          name: ''
        },
        list: ' ' ,
        updateSubmit: false

    },


    mounted() {
      this.load()
    },
    
    methods: {
      load(){
        axios.
        get('http://localhost:3000/data').
        then(response => {
          this.list = response.data
          console.log(this.list)
        
        }).catch((err) => {
          console.log(err.message)
        });
      },
      addName () {
        axios.post('http://localhost:3000/data/', this.form).
            then(response => {
              this.load()
              this.form.name = ''
        }).catch((err) => {
          console.log(err.message)
        });
      },
      deleteName (user) {
        let result = confirm("Are you sure you want to delete?");
        if(result){
          axios.delete('http://localhost:3000/data/' +  user.id).
            then(response => {
              this.load()
              let index = this.list.indexOf(form.name)
              this.list.splice(index,1)
            })
        }
      },
      editName (user) {
        this.updateSubmit = true
        this.form.id = user.id
        this.form.name = user.name
      },
      updateName(form){
        return axios.put('http://localhost:3000/data/' + form.id , {name: this.form.name}).then(response => {
          this.load()
          this.form.id = ''
          this.form.name = ''
          this.updateSubmit = false
        }).catch((err) => {
          console.log(err.message);
          
        })
      }
    }
});
