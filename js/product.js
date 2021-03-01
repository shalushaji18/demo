function addProduct(){
    let pid=document.getElementById("pid")
    let pname=document.getElementById("pname")
    let price=document.getElementById("price")
    if (pid.value=="") {
        alert (" Product id field cannot be empty")
        pid.focus()
        return false
      } 
      if (pname.value=="") {
          alert (" product name field cannot be empty")
          pname.focus()
          return false
        }
        if (price.value=="") {
          alert ("price field cannot be empty")
          price.focus()
          return false
        }
        let p=new productAdd(pid,pname,price)
        p1.show()

        }
function productAdd(){
    this.pid=pid
    this.pname=pname
    this.price=price

this.show=function(){
    console.log(`pid=${this.pid}`)
    console.log(`pname=${this.pname}`)
    console.log(`price=${this.price}`)
}
}

