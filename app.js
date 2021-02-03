//array with lyrics split up into paragraphs
let twinkle = [`Twinkle, twinkle, little star`,
    `How I wonder what you are!`,
    `Up above the world so high`,
    `Like a diamond in the sky.`,
    `Twinkle, twinkle, little star`,
    `How I wonder what you are!`]


//calling the div with class of lyrics a screen 
let screen = document.querySelector(".lyrics")
//selecting the song
let level = document.querySelector("#level")
//cursor will always start at index 0
let cursorIndex = 0;
//index of array that is displayed 
let paragraphIndex = 0;
//the length of current paragraph of lyrics
let lyricsLength = 0;
//width of progress bar
let width = 90;
//frame interval
let id = 0;
let win = false;
let audio = new Audio('song.mp3');
let finished = false;
//total typed correctly
let totalCharacters = 0;
//all keys down including incorrect characters
let totalCharacterTyped = 0;
let cursorMovement;
let lyrics;
let startDate;


//it will display on screen and be full when done
const progressBar =()=> {
    const progress = document.querySelector(".timer");
     if (width == 90){
         width -= 1;
         const frame = () => {
            if (width === 0 || win ===true){
                clearInterval(id);
            } else {
                width--;
                progress.style.width = width + "%";
            }
         }
         //if I wanted different length it would go in the id
         id = setInterval(frame,330);
         finish()
     }
}



const start = () => {
    if (startDate === undefined){
        startDate = new Date();
    }
    document.querySelector(".start").removeEventListener("click", start)
    document.querySelector(".start").removeEventListener("click", reset)
    //split string into span for each letter
    lyrics = twinkle[paragraphIndex].split("").map((char)=> {
        const span = document.createElement("span");
        span.classList.add("text")
        span.innerText = char;
        screen.appendChild(span)
        return span;
    })
    lyricsLength = lyrics.length;
    totalCharacters += lyricsLength

   //cursorMovement tracks the cursor going along each span 
    cursorMovement = lyrics[cursorIndex];
    cursorMovement.classList.add("cursor");
    document.addEventListener("keydown", typing)
}

const typing = ({key})=> {
    if (win===false){
        totalCharacterTyped= ++totalCharacterTyped;
    }
    if(finished ===false){
        audio.play()
        }
    progressBar() 
    if(key === cursorMovement.innerText){
        //correct key
        cursorMovement.classList.remove("cursor");
        cursorMovement.classList.add("done");
        cursorIndex += 1
    if(cursorIndex < lyricsLength){
        cursorMovement = lyrics[cursorIndex];
        cursorMovement.classList.add("cursor");
        }
    }
        finish()
        nextLyric()
}
  

//need to move the cursor to the next item in the array when done
const nextLyric = () => {
    if (cursorIndex===lyricsLength && win===false){
       screen.innerText= "";
       paragraphIndex = paragraphIndex + 1
       cursorIndex = 0;
       document.removeEventListener("keydown", typing)
    if (paragraphIndex<twinkle.length) {    
        start()
        }
    }
}

const finish =()=> {
    //if cursor is at the end of the paragraph and paragraph is last one in twinkle index
    if (cursorIndex===lyricsLength-1 && paragraphIndex===twinkle.length-1 && width>0){
        let endDate = new Date();
        let seconds = (endDate.getTime() - startDate.getTime())/1000;
        let wpm = Math.round(((totalCharacterTyped/5)/seconds)*60);
        let screen = document.querySelector(".lyrics")
        screen.innerText = "You rock at typing! " +wpm+ "WPM"
        win = true
        //make a restart button that works when is says restart 
        document.querySelector(".start").innerText = "Restart"
        audio.pause()
        audio.currentTime=0;
        finished=true;
        document.removeEventListener("keydown", typing)
        restart()
    } else if (width === 0){
        let endDate = new Date();
        let seconds = (endDate.getTime() - startDate.getTime())/1000;
        let wpm = Math.round(((totalCharacterTyped/5)/seconds)*60);
        console.log(wpm)
        finished=true;
        screen.innerText = "Try again? " +wpm+ "WPM"
        document.querySelector(".start").innerText = "Restart"
        audio.pause()
        audio.currentTime=0;
        document.removeEventListener("keydown", typing);
        restart()
    }
}
const restart = ()=> {
    const button = document.querySelector(".start")
    if (button.innerText==="Restart"){
        button.addEventListener("click", reset)
    }
}


const reset =()=> {
    const button= document.querySelector(".start")
    button.innerText="Play"
    let screen = document.querySelector(".lyrics")
    screen.innerText= ""
    //cursor will always start at index 0
    cursorIndex = 0;
    //index of array that is displayed 
    paragraphIndex = 0;
    //the length of current paragraph of lyrics
    lyricsLength = 0;
    //width of progress bar
    width= 90;
    //frame interval
    id =0;
    win = false;
    finished=false;
    start()
}

    //start the game using the button
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".start").addEventListener("click", start)
})