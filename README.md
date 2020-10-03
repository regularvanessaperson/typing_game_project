# typing_game_project: Typing Kareoke
I really had a song stuck in my head (The Black Parade) when I was trying to think of a simple game I could code within the given time and decided a music themed typing game would be fun. I started out by studying just single word typing games and expanding on the idea by inserting the lyrics of a song. 

## Game making basic goals
0. Basic layout of the game planned (x)
    - want it to look kind of like a youtube lyric video 
1. Get text/typing to work (x)
2. Get each string to show after previous one is typed (x)
3. Get progress bar to show (x)
    - stop the game if player is not done typing
    - stop progress bar if player finishes before it is done
        -display a winning message (not an alert)
4. Get play button to start the game and progress bar at the same time
5. Restart button to restart at any time

## Stretch goals
6. Play song in the background while playing the game
    - activates with start button
7. Have more than one song choice or make timer faster
    - maybe an easy, medium, hard

### Issues I encountered
- When making spans out of each character the cursor skips over them
    and it makes the game look a bit broken while playing
    - was caused by using the refresh button but it left all of the typing{key} function's event listeners from the previous game on so it would get worse with each refresh. The the solution was to separate the typing function so that the event listener could be added and removed

