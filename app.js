


//array with lyrics split up into paragraphs
const blackParade = [
    `When I was a young boy`,`My father took me into the city`,`To see a marching band`]
//calling the div with class of lyrics a screen 
let screen = document.querySelector(".lyrics")
//cursor will always start at index 0
let cursorIndex = 0;
//index of array that is displayed 
let paragraphIndex = 0;
//the length of current paragraph of lyrics
let lyricsLength = 0;
//width of progress bar
let width= 0;
//frame interval
let id =0;
let win = false;



//it will display on screen and be full when done
const progressBar =()=>{
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
         id = setInterval(frame,190);
         finish()
     }
}

const start = () =>{
    document.querySelector(".start").removeEventListener("click", start)
    //split string into span for each letter
    const lyrics = blackParade[paragraphIndex].split("").map((char)=> {
        const span = document.createElement("span");
        span.innerText = char;
        screen.appendChild(span)
        return span;
    })
    lyricsLength = lyrics.length;

   //cursorMovement tracks the cursor going along each span 
    let cursorMovement = lyrics[cursorIndex];
    cursorMovement.classList.add("cursor");
    console.log(cursorIndex)
    console.log(cursorMovement)
    const typing = ({key})=> {
        if(key === cursorMovement.innerText){
            //correct key
            cursorMovement.classList.remove("cursor");
            cursorMovement.classList.add("done");
            if(cursorIndex < lyricsLength-1){
                cursorMovement = lyrics[++cursorIndex];
                cursorMovement.classList.add("cursor");
            }
         }
        
        finish()
        nextLyric()
        progressBar() 
    }
    document.addEventListener("keydown", typing)
    
}

  //need to move the cursor to the next item in the array when done
  const nextLyric = () => {
    if (cursorIndex===lyricsLength-1 && win===false){
       screen.innerText= "";
       console.log("clear text")
       paragraphIndex = paragraphIndex + 1
       cursorIndex = 0;
       if (paragraphIndex<blackParade.length) {    
           console.log("this is working")
        start()
        }
    //    document.removeEventListener("keydown", typing())
    }
}

const finish =()=> {
    //if cursor is at the end of the paragraph and paragraph is last one in blackParade index
    if (cursorIndex===lyricsLength-1 && paragraphIndex===blackParade.length-1 && width<90){
        console.log("You rock at typing!") 
        let screen = document.querySelector(".lyrics")
        console.log(screen)
        screen.innerText = "You rock at typing!"
        win = true
        //make a restart button that works when is says restart 
        document.querySelector(".start").innerText = "Restart"
        restart()
    } else if (width>=90){
        screen.innerText = "Try again?"
        document.querySelector(".start").innerText = "Restart"
        restart()
    }
}
const restart = ()=>{
    const button = document.querySelector(".start")
    if (button.innerText==="Restart"){
        button.addEventListener("click", ()=>{
            location.reload()
        })
    }
}

    //start the game using the button
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".start").addEventListener("click", start)
    
})