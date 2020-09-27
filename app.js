const blackParade = [
    `When I was a young boy My father took me into the city To see a marching band He said, "Son, when you grow up Would you be the savior of the broken The beaten, and the damned?" `, `He said, "Will you defeat them Your demons and all the non-believers? The plans that they have made? Because one day, I'll leave you A phantom to lead you in the summer To join the black parade`, `When I was a young boy My father took me into the city To see a marching band He said, "Son, when you grow up You will be the savior of the broken The beaten, and the damned?"`, `Sometimes I get the feelin She's watchin' over me And other times I feel like I should go And through it all, the rise and fall The bodies in the streets And when you're gone, we want you all to know`, `We'll carry on, we'll carry on
    And though you're dead and gone, believe me Your memory will carry on We'll carry on And in my heart, I can't contain it The anthem won't explain it`,  `A world that sends you reeling From decimated dreams Your misery and hate will kill us all So paint it black and take it back Let's shout it loud and clear
    Defiant to the end, we hear the call`
]

let screen = document.querySelector(".lyrics")
let cursorIndex = 0;
const game = () =>{

    // const lyrics = blackParade[0].split("").map((char)=> {
    //     console.log(string)
    //     string.split(" ").map((char)=>{
    //         const span = document.createElement("span");
    //         span.innerText = char;
    //         screen.appendChild(span)
    //         return span;
    //     })
    // })
    const lyrics = blackParade[0].split("").map((char)=> {
        const span = document.createElement("span");
        span.innerText = char;
        screen.appendChild(span)
        return span;
    })

   
    let cursorMovement = lyrics[cursorIndex];
    cursorMovement.classList.add("cursor");

    document.addEventListener("keydown", ({key})=> {
        console.log(key)
        if(key === cursorMovement.innerText){
            //correct key
            cursorMovement.classList.remove("cursor");
            cursorMovement.classList.add("done");
            cursorMovement = lyrics[++cursorIndex];
            cursorMovement.classList.add("cursor");
    }
    
    })
    
    //will need to loop through array and display text
    //player will type text
    //when correct next index of array will display
    //once each index has been typed game is finished
}

game()