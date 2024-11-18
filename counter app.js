let countValue=document.getElementById("count")
let inc=document.getElementById("in")
let dec=document.getElementById("de")
let reset=document.getElementById("reset")
function display(){
countValue.textContent=count
}



let  count=0

inc.addEventListener("click",function()
{
    count++
    display();


})
dec.addEventListener("click",()=>{
    count--
    display();

    
    
})

reset.addEventListener("click",()=>
{
    count=0
    display();
    
})