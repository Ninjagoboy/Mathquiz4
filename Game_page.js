Player1 = localStorage.getItem("Player1_name")
Player2 = localStorage.getItem("Player2_name")

Player1_score = 0;
Player2_score = 0;

document.getElementById("Player1_name").innerHTML = Player1 + " : "
document.getElementById("Player2_name").innerHTML = Player2 + " : "

document.getElementById("Player1_score").innerHTML = Player1_score
document.getElementById('Player2_score').innerHTML = Player2_score

document.getElementById("Player_question").innerHTML = "Question turn - " + Player1_name;
document.getElementById("Player_answer").innerHTML = "Answer turn - " + Player2_name;

function send(){
    Number1 = document.getElementById("Number1").value
    Number2 = document.getElementById("Number2").value
    actual_answer = parseInt(Number1) + parseInt(Number2)
    question_number = "<h4>" + Number1 + " X " +  Number2 + "</h4>";  

    input_box  = "<br> Answer: <input type = 'text' id='input_check_box'>" ;
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button> ";
    row = question_number + input_box + check_button; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = ""; 
    document.getElementById("Number2").value = "";
}
question_turn = "Player1" 
Answer_turn = "player2"

function check(){
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer ){
    if(Answer_turn == "Player1" ){
    Player1_score = Player1_score + 1;
    document.getElementById("Player1_score").innerHTML = Player1_score;
    }
    else{
        Player2_score = Player2_score + 1;
        document.getElementById("Player2_score").innerHTML = Player2_score;  

    }

}




}