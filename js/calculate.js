function calculate(a,b,c){
    if(c=="+"){
        sum=a+b
        console.log("sum=",sum)
    }
else if(c=="-"){
    sub=a-b
    console.log("sub=",sub)

}
else if(c=="*"){
    mul=a*b
    console.log("mul=",mul)
}
else{
    div=a/b
    console.log("div=",div)
}


 
}
calculate(10,2,"+")
calculate(10,2,"-")
calculate(10,2,"*")
calculate(10,2,"/")
//another method
function calculate(a,b,c){
    let result;
    if(c=="+"){
        result=a+b
    }
else if(c=="-"){
    result=a-b

}
return result

}
let data=calculate(10,2,"+")
console.log(data)
console.log(calculate(10,2,"-"))


let add=function(x,y){
    return x+y
}
console.log(add)

let result=add(1,2)
console.log(result)
let i=500 //global variable
function outer(){
    i=100//local variable
    let s="hello"
    console.log("inside function outer..")
    console.log(i)
     function inner(){
         console.log(s)
         let k=50
         console.log("inside function inner..")
         console.log(k)
     }
     inner()
    }
    outer()
    console.log(i)



 

