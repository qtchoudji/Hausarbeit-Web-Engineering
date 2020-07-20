function toggle(){
    var header = document.getElementById("header")
    header.classList.toggle('active')
   
}

function state(event){
    document.querySelector("header .active").removeAttribute("class")
    event.setAttribute("class","active")
    toggle()
}
