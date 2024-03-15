const toggleBtn =document.querySelector(".toogle_btn");
const toggleBtnicon =document.querySelector(".toggle_btn i")
const menu = document.querySelector(".nav_links");
if(toggleBtn!==null){
    toggleBtn.addEventListener("click",() =>
{
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    console.log("Loaded successfully");

   toggleBtnicon.classList=  isOpen ? ri-close-line: ri-menu-line ;
})
}
else {
    console.log("Cannot load")
}

