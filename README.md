# 🎰 Week05 Bootcamp2019 Project: Slot Machine

### Goal: Build a Simple Slot Machine

Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update

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

