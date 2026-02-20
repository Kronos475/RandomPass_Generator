const btn = document.querySelector(".btn")
const input = document.getElementById("input")
const copyicon = document.querySelector(".fa-copy");
const alertcontainer = document.querySelector(".alertcontainer")

btn.addEventListener("click",()=>{

createPassword()
});

copyicon.addEventListener("click",()=>{
copypass()
alertcontainer.classList.add("active");
setTimeout(()=>{
    alertcontainer.classList.remove("active");
},2000);
});


function createPassword(){
    const chars ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
   let password ="";
    const passlength = 10;
     for(let i=0; i<passlength;i++){
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum,randomNum +1);
     }
     
     input.value = password;
}


function copypass(){
    navigator.clipboard.writeText(input.value);
}
