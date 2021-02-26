let s="123"
let i=100
let j=i.toString()
console.log(j,typeof j)
let data=String("hello")
console.log(data,typeof data)
let num=Number(1234)
console.log(typeof num)

let s1="hello world"
console.log(s1)
console.log(typeof s1)
let s2=new String("hello world")
console.log(s2)
console.log(s2.length)
console.log(typeof s2)
console.log(s2.toUpperCase())
console.log(s)
console.log(s2)
console.log(s1.startsWith("h"))
console.log(s1.endsWith("world"))
console.log(s1.lastIndexOf("w"))
console.log(s1.indexOf("o"))
let s3="hello world "
console.log(s3)
console.log(s3.trim())
console.log(s3.concat("how are u?"))
console.log(s3.substr(2,5))
console.log(s3.substring(2,5))
console.log(s3.charAt(4))
for(letter of s3){
    console.log(letter)
}