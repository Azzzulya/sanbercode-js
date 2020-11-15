
  var app = new Vue({
      el: '#App',

      data: {
        list: [
          {name : 'Muhammad Iqbal Mubarok'},
          {name : 'Ruby Purwanti'},
          {name : 'Faqih Muhammad'},
        ],
        newName : " ",
        idName : " ",
        updateSubmit: false
      },



      methods: {
        addName () {
          if(this.newName != '') {
            this.list.push({name: this.newName});
            this.newName= ' ';
          } 
          else{
            alert("isi dulu ya")
          }
        },
        deleteName (data) {
          let result = confirm("Are you sure you want to delete?");
          console.log(data)
          console.log(this.list)
          if(result){
            this.list.splice(data,1)
          }
        },
        editName (data, desc) {
          console.log(data)
          console.log(desc)
          this.updateSubmit = true
          this.idName = data
          this.newName = desc
        },
        updateName(data, desc){
          console.log("edit",data)
          console.log("edit",desc)
          let panjang = this.list.length;
          console.log(panjang)
          this.list[data].name = desc 
          this.newName= ' ';
          console.log(this.list)
        }

  
      }
  });
