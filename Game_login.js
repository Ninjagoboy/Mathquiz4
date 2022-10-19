function addUser(){
Player1 = document.getElementById('Player1_input').value;
Player2 = document.getElementById('Player2_input').value;

localStorage.setItem("Player1_name", Player1);
localStorage.setItem("Player2_name", Player2);
window.location="Game_page.html"
}