
function validate(){
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    let mobile=document.getElementById("mobile")
    if (name.value=="") {
      alert ("name field cannot be empty")
      name.focus()
      return false
    }
    if (email.value=="") {
        alert ("email field cannot be empty")
        name.focus()
        return false
      }
      if (password.value=="") {
        alert ("password field cannot be empty")
        name.focus()
        return false
      }
      
      
    if(isNaN(mobile.value==true )|| mobile.value.length!=10){
      alert("mobile field can't be empty")
      mobile.focus
      return false
    }
  }
  