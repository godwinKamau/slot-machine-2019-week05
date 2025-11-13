# Slot Machine Synopsis

### Goal: Build a Simple Slot Machine

Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update

<hr />

<img src="./Screenshot 2025-11-13 at 2.10.29 PM.png">

<hr />

### Live Demo

[Here is the demo](https://godwinkamau.github.io/slot-machine-2019-week05/)

<hr />

## In this project, I learned about:

### Git and GitHub
- Forking a repo
- Cloning a repo
- Creating a new branch
- Navigating the Git
- Pushing code back to Git
- Making a pull request

### JavaScript
- Using the method `setInterval()` to create asynchronous functions
- Using conditional logic to create a rule and point system
- Using an Array to collect data on the user's results from spinning
<hr />

## First let's talk about the setup...

What I wanted was for the user to press place a bid and press <b>Start</b>. Afterwards, the slots will "spin", as in they will change to a random picture in a field of five. They will then press the slots' individual buttons to stop the slots, leaving the game to be won through their reaction speed and a little bit of luck.

### The bid system
In the HTML I set up the space for a **total** and a **bid**. 

The bid is collected through an input field, `<input type="number">`, and sent to the javascript once the start button is pressed. _(Note: although the type number limits the user input to digits, it is still sent to the JS function as a string)_

The total is given a set number in the HTML and changed after the end of the bid and the end of the round.
<hr />

## Now, let's talk about the FUNction

`setInterval()` allows the user to call a funtction on a fixed interval automatically. Which is pretty friggin' sweet. Here is the [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) about it. In the MDN, it is used to change the color of a text every 1000ms by changing its class (using `.className`). 

Using this logic, we can leverage a section's class to change anything we want within it at a fixed interval, including its _background picture_. 

To put it in code, it would look something like this:

**HTML**
```
<div id="pic">
</div>
```

 **CSS**
 ```
 div {
    width: 300px;
    height: 500px;
 }

.firstPic {
    backgroud: url('<PATH TO PICTURE>');
    background-size: cover;
}

.secondPic {
    backgroud: url('<PATH TO DIFFERENT PICTURE>');
    background-size: cover;
}
 ```

 **JS**
 ```
//intervalID is important to set the interval
let intervalID

function startInterval() {
    //here the intervalID is assigned to the setInterval() function, passed a function, and given a set delay
    intervalID = setInterval(changePic,500)
}

//pass conditional logic to the function to represent the change
function changePic() {
    const picture = document.getElementById("pic")
    picture.className = picture.className === "firstPic" ? "secondPic" : "firstPic"
}
 ```