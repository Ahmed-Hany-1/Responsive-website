let menulist = document.getElementById("menulist");
let container = document.getElementsByClassName("container");

menulist.style.maxHeight = "0px";

function togglemenu(){

       if(menulist.style.maxHeight == "0px")
       {
        menulist.style.maxHeight = "130px"
       }
       else
       {
        menulist.style.maxHeight = "0px"
       }
}
