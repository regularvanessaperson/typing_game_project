const blackParade = [`When I was a young boy My father took me into the city To see a marching band He said, "Son, when you grow up Would you be the savior of the broken The beaten, and the damned?" `, `He said, "Will you defeat them Your demons and all the non-believers? The plans that they have made? Because one day, I'll leave you A phantom to lead you in the summer To join the black parade`, `When I was a young boy My father took me into the city To see a marching band He said, "Son, when you grow up You will be the savior of the broken The beaten, and the damned?"`, `Sometimes I get the feelin She's watchin' over me And other times I feel like I should go And through it all, the rise and fall The bodies in the streets
And when you're gone, we want you all to know`, `We'll carry on, we'll carry on
And though you're dead and gone, believe me Your memory will carry on We'll carry on
And in my heart, I can't contain it The anthem won't explain it`, `A world that sends you reeling From decimated dreams Your misery and hate will kill us all So paint it black and take it back Let's shout it loud and clear
Defiant to the end, we hear the call`, `To carry on We'll carry on And though you're dead and gone, believe me Your memory will carry on We'll carry on And though you're broken and defeated Your weary widow marches`, `On and on, we carry through the fears
(Oh, oh, oh) Disappointed faces of your peers (Oh, oh, oh) Take a look at me
'Cause I could not care at all`, `Do or die, you'll never make me Because the world will never take my heart Go and try, you'll never break me We want it all, we wanna play this part I won't explain or say I'm sorry I'm unashamed, I'm gonna show my scars`, `Give a cheer for all the broken Listen here, because it's who we are I'm just a man, I'm not a hero Just a boy, who had to sing this song I'm just a man, I'm not a hero I don't care`, `We'll carry on We'll carry on And though you're dead and gone, believe me Your memory will carry on You'll carry on And though you're broken and defeated Your weary widow marches on`, `Do or die, you'll never make me
Because the world will never take my heart Go and try, you'll never break me We want it all, we wanna play this part We'll carry on Do or die, you'll never make me (we'll carry on)`,` Because the world will never take my heart (we'll carry on)
Go and try, you'll never break me (we'll carry) We want it all, we wanna play this part (We'll carry on!)`
]

let screen = document.querySelector(".lyrics")

const game = () =>{

    console.log(screen)
    // screen.innerText = blackParade[0]
    const characters = blackParade[0].split("").map((char)=> {
        const span = document.createElement("span");
        span.innerText = char;
        screen.appendChild(span)
        return span;
    })
    const firstCharacter = characters[0]
    firstCharacter.classList.add("cursor");

    document.addEventListener("keydown", ({key})=>
    console.log(key))
    
    //will need to loop through array and display text
    //player will type text
    //when correct next index of array will display
    //once each index has been typed game is finished
}

game()