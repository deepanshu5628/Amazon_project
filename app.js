// adding some functionality to the page 

// back to top functionality 
// selecting using query selector 
let backtotop = document.querySelector("#backtotop");

// using event listener's
backtotop.addEventListener("click", () => {
    // console.log("button is cliked")
    document.documentElement.scrollTop = 0;
});

//amazon logo redirecting to amazon.in 
let logobtn = document.querySelector(".logo");
logobtn.addEventListener("click", () => {
    window.location.href = "https://www.amazon.in/";
});



// making all the h2 tag to redirect to there name

// array of all the links 
let redirectlinks = [
    "https://www.amazon.in/s?k=clothes",
    "https://www.amazon.in/s?k=health+and+personal+care&crid=3TR2W0WSYF89B&sprefix=health+and+personal+car%2Caps%2C269&ref=nb_sb_noss_2",
    "https://www.amazon.in/s?k=furniture",
    "https://www.amazon.in/s?k=Mobiles",
    "https://www.amazon.in/s?k=makeup&crid=OFKF1UZ38MRL&sprefix=makeup%2Caps%2C279&ref=nb_sb_noss_1",
    "https://www.amazon.in/s?k=pet+care&crid=1LCQ0NE4QJV5Z&sprefix=pet+car%2Caps%2C269&ref=nb_sb_noss_1",
    "https://www.amazon.in/s?k=travel&crid=ID1BH18X26VJ&sprefix=travel%2Caps%2C267&ref=nb_sb_noss_1",
    "https://www.amazon.in/s?k=women&crid=343SIZVUOHGY7&sprefix=wome%2Caps%2C268&ref=nb_sb_noss_2"
];

// // array of all the box selected
let boxes = [
    document.querySelector("#box1"),
    document.querySelector("#box2"),
    document.querySelector("#box3"),
    document.querySelector("#box4"),
    document.querySelector("#box5"),
    document.querySelector("#box6"),
    document.querySelector("#box7"),
    document.querySelector("#box8")
];
// loop to make the photo

for (let i = 1; i <= 8; i++) {
    boxes[i - 1].addEventListener("click", () => {
        window.location.href = redirectlinks[i - 1];
    });
};