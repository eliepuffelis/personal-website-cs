window.onload = welcome;

function welcome(){
    setInterval(function(){ 

        var welcome = document.getElementById("welcome");
        welcome.style.opacity = '0';
        welcome.style.visibility = 'hidden';
        showName();

     }, 2000);
    
}

function showName(){
    setInterval(function(){ 

        var name = document.getElementById("name");
        name.style.opacity = '1';
        name.style.visibility = 'visible';
        }, 1100);
}


function openMenu(){
    var menu = document.getElementById("menu");
    menu.style.visibility = 'visible';
    menu.style.left = '0';
}
function closeMenu(){
    var menu = document.getElementById("menu");
    menu.style.visibility = 'hidden';
    menu.style.left = '-150%';
}