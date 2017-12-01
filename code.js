function fullstackJack(player1,player2)
{
  var player1Points=0;
  var player2Points=0;
  
  var priority = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  
  for(var i=0; i<player1.length; i++)
  {
    if (priority.indexOf(player1[i]) > priority.indexOf(player2[i]))
    {
      player1Points++;
      console.log("player1 has " + player1[i]);
      console.log("player2 has " + player2[i]);
      console.log("player1 wins a round");
    }
    else if (priority.indexOf(player1[i]) < priority.indexOf(player2[i]))
    {
      player2Points++;
      console.log("player1 has " + player1[i]);
      console.log("player2 has " + player2[i]);
      console.log("player2 wins a round");
    }
    else
    {
      console.log("player1 has " + player1[i]);
      console.log("player2 has " + player2[i]);
      console.log("this round was a tie");
    }
  }
  
  console.log("player 1 has " + player1Points + " point(s).");
  console.log("player 2 has " + player2Points + " point(s).");
  
  if (player1Points>player2Points)
  {
    return "Player 1 wins " + player1Points + " to " + player2Points + "!";
  }
  else if (player1Points<player2Points)
  {
    return "Player 2 wins " + player2Points + " to " + player1Points + "!";
  }
  else
  {
    return "Tie!"
  }
}

//fullstackJack(['A', '7', '8'], ['K', '5', '9']);
fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
