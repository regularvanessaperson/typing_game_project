

document.addEventListener("DOMContentLoaded",()=>{
//array with lyrics split up into paragraphs
const blackParade = [
    `When I was a young boy`,`My father took me into the city`,`To see a marching band`]
//calling the div with class of lyrics a screen 
let screen = document.querySelector(".lyrics")
//cursor will always start at index 0
let cursorIndex = 0;
let paragraphIndex = 0;
let lyricsLength = 0;
let width= 0;
let id =0;


const finish =()=> {
    if (cursorIndex===lyricsLength-1 && paragraphIndex===blackParade.length-1){
        console.log("You rock at typing!") 
    }
}

const progressBar =()=>{
    const progress = document.querySelector(".timer");
     if (width == 0){
         width =1;
         const frame = () => {
            if (width>=90){
                clearInterval(id);
                i = 0;
            } else {
                width++;
                progress.style.width = width + "%";
                // progress.innerText = width + "%";
            }
         }
         id = setInterval(frame,100);
     }
}

const start = () =>{
    progressBar()
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
    }
    document.addEventListener("keydown", typing)
}

  //need to move the cursor to the next item in the array when done
  const nextLyric = () =>{
    if (cursorIndex===lyricsLength-1){
       screen.innerHTML= "";
       paragraphIndex = paragraphIndex + 1
       cursorIndex = 0;
       if (paragraphIndex<blackParade.length) {    
           console.log("this is working")
        start()
        }
    //    document.removeEventListener("keydown", typing())
    }
}

    //start the game
   document.querySelector(".start").addEventListener("click", ()=>{
    start() 
   })
    //go to the next paragraph
    //once each index has been typed game is finished
    
})