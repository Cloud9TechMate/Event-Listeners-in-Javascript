

// const view = document.querySelector("#view2");//define a view 
// const div =  view.querySelector("div");//define a div that we have inside the view^
// const h2 = div.querySelector("h2");//inside of the div^ is an h2 that we are selecting

//now that we have all three of those things defined, lets look at the syntax for
//an event listener or adding an event listener

//syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {//define a function that we can call wheb we have a click even
//     alert("Do something");
// };

// h2.addEventListener("click", doSomething, false);//false is default
// h2.removeEventListener("click", doSomething, false); //removes event listener

// h2.addEventListener("click", (event) => {//anonymous function 
//     console.log(event.target);
//     event.target.textContent = "Clicked"
// });


// //can I do this for the div
// const clickForDiv = () => alert("This is an alert for when you click on the div section");
// div.addEventListener("click", clickForDiv, false);

// //html
// const htmlClick = document.querySelector("#htmlClick");//defined the whole html, so event happends on the whole page
// const clickForHtml = () => alert("When you click anywhere on the page");
// htmlClick.addEventListener("click", clickForHtml, false);
///////////////////////////

/////ready state change event. makes it safer to work with the Document Object Model when you 
//load the page. This is saying that the page is loaded. Although, something about its not really
//there are different stages of a page load. but if you look for the ready state being complete you
//you will know that the page is loaded enough that the DOM is loaded and you are ready to interact
document.addEventListener("readystatechange", event => {

    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();//call the initApp function
    }    
});    

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", event => {
        view.style.backgroundColor = "purple"
        }, false //remember that false is by default //this means that we are not going to use capture. We prefer event bubbling
        //if set to true the buble effect will happen from outer to in
    );        
    
    div.addEventListener("click", event => {
        // event.stopPropagation();
        div.style.backgroundColor = "blue";
    }, false);
    
    h2.addEventListener("click", event => {
        // event.stopPropagation(); //if I do not have this here. the click event will "bubble effect" from inwards out.
        //these click events are nested. this being the bottom of the nest. When this event happends it bubles up/outwords not stopping. 
        //if I want the event to stop. I must declare the event.stop 
        event.target.textContent = "Clicked"
    }, false);
};    



















