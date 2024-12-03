let showButton =document.querySelectorAll(".show-hide");



showButton.forEach(button => {
    button.addEventListener("click",()=>{

        let reponseButton=button.closest(".container");
        let parentBtn=reponseButton.querySelector('.answer')
        let moinImg =button.querySelector(".moins");
let plusImg=button.querySelector(".plus")
console.log(parentBtn); 


  if(moinImg.classList.contains("hidden")){
    moinImg.classList.remove("hidden")
    plusImg.classList.add("hidden")
    parentBtn.classList.remove("hidden")
  }   
else{
    plusImg.classList.remove("hidden")
    moinImg.classList.add("hidden")
    parentBtn.classList.add("hidden")

}



    })
    
});

