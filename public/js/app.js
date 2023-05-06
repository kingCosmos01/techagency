const navbar = document.getElementById("navbar");
const navTrigger = document.getElementById("navTrigger");

function addNavTrigger()
{
    let navWidth = navbar.getBoundingClientRect().width;
    if(navTrigger <= 900)
    {
        navTrigger.style.display = "block";
        console.log(navWidth);
    }
    else 
    {
        console.log("navTrigger not Found");
    }

}

addNavTrigger();