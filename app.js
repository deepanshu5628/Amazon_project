// adding some functionality to the page 


// selecting using query selector 
let backtotop = document.querySelector("#backtotop");

// using event listener's
backtotop.addEventListener("click", () => {
    // console.log("button is cliked")
    document.documentElement.scrollTop = 0;
})