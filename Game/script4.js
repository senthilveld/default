
var colorlist = ["Aqua", "BLue", "Orchid", "Coral", "Lime", "Choclate", "Gold", "Olive", "Salmon", "DarkRed", "Khaki", "FireBrick", "Silver","Teal","Yellow"];
var colorlist = colorlist.sort();
var guesses =1;
var finished =false;
var guessinput,guessinputtext,randomvaluenum,randomValue;
randomValue = Math.floor(colorlist.length * Math.random());
randomvaluenum = colorlist[randomValue];
var randomvalueindex =colorlist.indexOf(randomvaluenum);

function do_game(){
     
    while (!finished) {
     
   guessinputtext = prompt("I am thinking of these color "+colorlist+ "guess what i thought");
        console.log(guessinputtext);
        if(guessinputtext==""||guessinputtext==null){
            break;
        }
     guessinput = colorlist.indexOf(guessinputtext);
    
     guess(); 
        document.body.style.backgroundColor =randomvaluenum;
    }
}

function guess() {
    if ( guessinput== -1) {
      alert("Sorry, I don't recognize your color... Please try again.");
      return false;
    }
    else if (guessinput > randomvalueindex) {
      alert("Sorry, your guess is not correct! ... Hint: Your color is alphabetically higher than mine... Please try again.");
      guesses += 1;
      return false;
    }
   else if ( guessinput< randomvalueindex ) {
      alert("Sorry, your guess is not correct..... Hint: Your color is alphabetically lower than mine... Please try again.");
      guesses += 1;
      return false;
    }
    else
     alert("congradulation your ans is right "+guesses+"number of attempts you used for this game to win");                     
                return true;
  }
