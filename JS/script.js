/**
 * @author Magara Etchien N'gouan
 * @description DI-Bootcamp Week3 Day2 Daily Challenge: Tell The Story
 */

/*
In todays exercise we will be creating a Mad Libs game.
If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with 
different word types (ie : noun, adjective, verb), and then a story is generated based on the words 
you chose, and sometimes the story is surprisingly funny.
In this exercise you work with the HTML code presented below.
Follow these steps :
1- Get the value of each of the inputs in the HTML file when the form is submitted. 
Remember the event.preventDefault()
2- Make sure the values are not empty
3- Write a story that uses each of the values.
4- Make sure you check the console for errors when playing the game.
5- Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change 
the story currently displayed (but keep the values entered by the user). 
The user could click the button at least three times and get a new story. Display the stories randomly.
*/

//1-
let form = document.getElementById("libform");
let inputNoun = document.getElementById("noun");
let inputAdjective = document.getElementById("adjective");
let inputPerson = document.getElementById("person");
let inputVerb = document.getElementById("verb");
let inputPlace = document.getElementById("place");
let story = document.getElementById("story");
//console.log(form);
document.getElementById("lib-button").addEventListener("click", (ev) => {
    ev.preventDefault();

    let dataNoun = inputNoun.value.trim();
    let dataAdjective = inputAdjective.value.trim();
    let dataPerson = inputPerson.value.trim();
    let dataVerb = inputVerb.value.trim();
    let dataPlace = inputPlace.value.trim();

    if (dataNoun == '') {
        alert("Enter noun!");
    } else if (dataAdjective == '') {
        alert("Enter adjective!");
    } else if (dataPerson == '') {
        alert("Enter someone's name!");
    } else if (dataVerb == '') {
        alert("Enter verb!")
    } else if (dataPlace == '') {
        alert("Enter a place!")
    } else {
        story.innerHTML = dataNoun + " " + dataAdjective + " " + dataPerson + " " + dataVerb + " " + dataPlace;
    }
});

let shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    let dataStory = story.textContent.split(" ");
    let numberPosInit = Math.floor(Math.random() * (dataStory.length - 1));
    let numberPosReplace = Math.floor(Math.random() * (dataStory.length - 1));
    let initialValue = dataStory[numberPosInit];
    dataStory[numberPosInit] = dataStory[numberPosReplace];
    dataStory[numberPosReplace] = initialValue;

    story.innerHTML = '';
    for (const wordStory of dataStory) {
        story.innerHTML += wordStory + " ";
    }
});