var employee = {
  id: 1,
  greet: function(){
    setTimeout(() => {console.log(this.id)} , 1000);
  }
}
// arrow func will not create this scope
// normal func would change scope of this

employee.greet();
