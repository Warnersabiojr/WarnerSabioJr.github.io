//var rollCount=;
//var highestWinnings=;
//var rollCountAtHightestWinnings=;
//


function start(){
var userInput = Number(document.getElementById("starting-bet").value);
var startingBet = userInput;
    

    if(startingBet < 0){

        document.write("Error");

    }else{

    var GameMoney= startingBet;
    var rollCount=0;
    var highestWinnings= startingBet;
    var highestRollCount = 0;    
        
    while(GameMoney > 0){
       rollCount = rollCount + 1;
       if(rollDice()==7){
            GameMoney = GameMoney + 4;
            console.log("You Won");
            console.log(GameMoney);
            
            if (GameMoney >= highestWinnings) {
              highestWinnings = GameMoney;
              highestRollCount = rollCount;
            }
        }
        else{
            GameMoney = GameMoney - 1;
            console.log("You Loss");  
            console.log(GameMoney);
            if(GameMoney == 0){
            console.log("Games Over");
        }
        } 
     
    }
    // game is over, loop has ended. now displaying the results.
    document.getElementById("starting_bet").innerHTML = startingBet + "</br>";
    document.getElementById("total_roles_before_going_broke").innerHTML = rollCount + "</br>";
    document.getElementById("hightest_amount_won").innerHTML = highestWinnings + "</br>";
    document.getElementById("roll_count_at_highest").innerHTML = highestRollCount + "</br>";


    }
}
//function endOfGame(){
//         
//}


function rollDice(){
    var roll1 = Math.floor(Math.random()*6 + 1); 
    var roll2 = Math.floor(Math.random()*6 + 1);
    var sum = roll1 + roll2;
    
    return sum;
}
    


