function Login(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;
    actual_answer=parseInt(player1_name) * parseInt(player2_name);
    Question= "<h4>" + player1_name + "X"+ player2_name + "</h4>";
}