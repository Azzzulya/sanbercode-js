const newFunction = function literal(firstName, lastName){
  return {
    firstName,
    lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}

//Driver Code 
newFunction("William", "Imoh").fullName() 