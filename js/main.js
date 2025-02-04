let buttons = document.querySelectorAll("button");
buttons.forEach(function(e){
    e.addEventListener("click", function(){
        if(e.classList.contains("main-btn")){
            e.classList.toggle("main-btn",false)
        } else {
            e.classList.toggle("main-btn",true)
        }
        
        
    })
})