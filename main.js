console.log('Week 4- Day 4')

console.log('Tuwaiq Academy   JS')

//xo game
const cells=$(".cell")


$(document).ready(function(){
  const theWinner=$("#the-winner")
    const cells=$(".cell")      // a constant linked to all cells 
    let turn="X"                // a constant that assigns the value "X" to the starting turn 
    const X="X"                 // assigning constant X with a  string value "X"
    const O="O"                 // assigning constant O with a  string value "O"
    const playerTurn =$("#player-turn")   //assigning a constant named turn to the p element that carry the senence that show players who is having the turn
    const rematch=$("#rematch")           // assigned to the reloading button
    const body=$("body")                  //assigned to the body tag
    const coldStyle=$("#cold-style")      //assigned to the button that change background to cold theme
    const auroraStyle=$("#aurora-style")  //assigned to the button that change background to Aurora theme
    

     theWinner.hide()//hides the winner p element  during the game 
     rematch.hide()// hides the rematch button during the game
      
    cells.click(cellClick)// a method that tells computer to apply function cellClick when the player clicks on  a cell

     function cellClick(){
         if($(this).text()===""){
             //playing logic starts below
  if (turn === X ){
    
      $(this).text(X)
      checkWinner()
      turn=O
      playerTurn.text("O player Turn")

  }else if(turn === O){

      $(this).text(O)
      checkWinner()
      turn=X
      playerTurn.text("X player Turn")

  }

  //winner logic down below
    function checkWinner(currentPlayer){
       if (//horizontal option1
         $(cells[0]).text()=== $(cells[1]).text() && 
       $(cells[1]).text()===$(cells[2]).text() &&
       $(cells[0]).text()!== ""){

                
       return playerWin()

       }else if(//horizontal option2
         $(cells[3]).text()=== $(cells[4]).text() && 
       $(cells[4]).text()===$(cells[5]).text() &&
       $(cells[3]).text()!== ""){
       
        return playerWin()

       }else if(//horizontal option3
         $(cells[6]).text()=== $(cells[7]).text() && 
       $(cells[7]).text()===$(cells[8]).text() &&
       $(cells[6]).text()!== ""){
      
        return playerWin()

       }else if(//diagonal option1
         $(cells[0]).text()=== $(cells[4]).text() && 
       $(cells[4]).text()===$(cells[8]).text() &&
       $(cells[0]).text()!== ""){
      
       return playerWin()

       }else if (// diagonal option 2
         $(cells[2]).text()=== $(cells[4]).text() && 
       $(cells[4]).text()===$(cells[6]).text() &&
       $(cells[2]).text()!== ""){
      
       return playerWin()

       }else if (//vertical option 1
         $(cells[0]).text()=== $(cells[3]).text() && 
       $(cells[3]).text()===$(cells[6]).text() &&
       $(cells[0]).text()!== ""){
       
       return playerWin()

       }else if (//vertical option2
         $(cells[1]).text()=== $(cells[4]).text() && 
       $(cells[4]).text()===$(cells[7]).text() &&
       $(cells[1]).text()!== ""){

       return playerWin()

       }else if (//vertical option3
         $(cells[2]).text()=== $(cells[5]).text() && 
       $(cells[5]).text()===$(cells[8]).text() &&
       $(cells[2]).text()!== "") {

       
       return playerWin()

         
        }else if(
      //   //draw conditions

        ($(cells[0]).text() === X || $(cells[0]).text()===O) &&
        ($(cells[1]).text() === X || $(cells[1]).text()===O) &&
        ($(cells[2]).text() === X || $(cells[2]).text()===O) &&
        ($(cells[3]).text() === X || $(cells[3]).text()===O) &&
        ($(cells[4]).text() === X || $(cells[4]).text()===O) &&
        ($(cells[5]).text() === X || $(cells[5]).text()===O) &&
        ($(cells[6]).text() === X || $(cells[6]).text()===O) &&
        ($(cells[7]).text() === X || $(cells[7]).text()===O) &&
        ($(cells[8]).text() === X || $(cells[8]).text()===O) 



        ) 
      {

        // in case of draw code
       return gameDraw()

       } 

       
    }


//events after a player win down below
    function playerWin(currentPlayer){
      cells.off('click')
       theWinner.show()
       theWinner.text("The Winner is" + " " + turn )
      playerTurn.hide()
      rematch.show()
      
    }


    function gameDraw(){
      //a function of the events that should happen when the game  end in a draw
      cells.off('click')
      theWinner.show()
      theWinner.text("we have a draw" )
     playerTurn.hide()
     rematch.show()
    }




}else{
      $(this).css("background-color", "orange")    //make the already used cell  background orange to prevent changing the symbol of  x or o
      setTimeout(() => {         //function used to return the background color of the cell to normal(white)
        $(this).css("background-color", "white")

      }, 500);
  }
}
//reload function below  (press the reload logo to restart the game)
rematch.click(refresh)

function refresh()
   { location.reload()}

 

//change background function down below
coldStyle.click(changeBackgroundCold)
auroraStyle.click(changeBackgroundAurora)
function changeBackgroundCold(){
     //change background to cold theme code 
     body.css("background", "linear-gradient(90deg, rgba(125,124,142,1) 0%, rgba(30,30,59,1) 35%, rgba(71,82,84,1) 100%)")
   
}

function changeBackgroundAurora(){
  //change background to aurora theme 
  body.css("background", "linear-gradient(90deg, rgb(71, 5, 102) 0%, rgba(45,147,100,1) 43%, rgb(59, 3, 77) 100%)")
 
}

})