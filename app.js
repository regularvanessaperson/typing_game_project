//array with lyrics split up into paragraphs
let twinkle = [`Twinkle, twinkle, little star`,
    `How I wonder what you are!`,
    `Up above the world so high`,
    `Like a diamond in the sky.`,
    `Twinkle, twinkle, little star`,
    `How I wonder what you are!`]

let timeSelect = {
    easy: 500,
    medium: 400,
    hard: 300
}
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
let width = 0;
//frame interval
let id = 0;
let win = false;
let audio = new Audio('song.mp3')
let finished = false;
let totalCharacters = 0;
let totalCharacterTyped = 0;
let cursorMovement;
let lyrics;


const wordsPerMin =()=> {
    cpm = Math.round(((characterTyped / timeElapsed) * 60)); 
    wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60)); 
}

//it will display on screen and be full when done
const progressBar =()=> {
    const progress = document.querySelector(".timer");
     if (width == 0){
         width =1;
         const frame = () => {
            if (width>=90 || win ===true){
                clearInterval(id);
                // i = 0;
            } else {
                width++;
                progress.style.width = width + "%";
                // progress.innerText = width + "%";
            }
         }
         //if I wanted different length it would go in the id
         id = setInterval(frame,330);
         finish()
     }
}



const start = () => {
    document.querySelector(".start").removeEventListener("click", start)
    document.querySelector(".start").removeEventListener("click", reset)
    //split string into span for each letter
    lyrics = twinkle[paragraphIndex].split("").map((char)=> {
        const span = document.createElement("span");
        span.innerText = char;
        screen.appendChild(span)
        return span;
    })
    lyricsLength = lyrics.length;
    totalCharacters += lyricsLength

   //cursorMovement tracks the cursor going along each span 
    cursorMovement = lyrics[cursorIndex];
    cursorMovement.classList.add("cursor");
    console.log(cursorIndex)
    console.log(cursorMovement)
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
       console.log("clear text")
       paragraphIndex = paragraphIndex + 1
       cursorIndex = 0;
       document.removeEventListener("keydown", typing)
       if (paragraphIndex<twinkle.length) {    
           console.log("this is working")
        start()
        }
    //    document.removeEventListener("keydown", typing())
    }
}

const finish =()=> {
    //if cursor is at the end of the paragraph and paragraph is last one in twinkle index
    if (cursorIndex===lyricsLength-1 && paragraphIndex===twinkle.length-1 && width<90){
        console.log("You rock at typing!") 
        let screen = document.querySelector(".lyrics")
        console.log(screen)
        screen.innerText = "You rock at typing!"
        win = true
        //make a restart button that works when is says restart 
        document.querySelector(".start").innerText = "Restart"
        audio.pause()
        audio.currentTime=0;
        finished=true;
        console.log("charachters typed"+ totalCharacters)
        console.log("total characters typed with errors"+ totalCharacterTyped)
        document.removeEventListener("keydown", typing)
        restart()
    } else if (width>=90){
        finished=true;
        screen.innerText = "Try again?"
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
    width= 0;
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