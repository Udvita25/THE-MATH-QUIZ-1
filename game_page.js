playername1=localStorage.getItem("player1name");
playername2=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("p1_name").innerHTML=playername1+" : ";
document.getElementById("p2_name").innerHTML=playername2+" : ";
document.getElementById("p1_score").innerHTML=player1score;
document.getElementById("p2_score").innerHTML=player2score;

function send(){
num1=document.getElementById("Num1").value;
num2=document.getElementById("Num2").value;
answer=parseInt(num1)*parseInt(num2);
qn="<h4>"+num1+"*"+num2+"</h4>";
ibox="<br>Answer: <input type='text' id='ib'>";
checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=qn+ibox+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("Num1").value="";
document.getElementById("Num2").value="";
}
questurn="player1";
ansturn="player2";
function check(){
get_answer = document.getElementById("ib").value;

if(get_answer==answer)
{
if(ansturn=="player1")
{
player1score=player1score+1;
document.getElementById("p1_score").innerHTML=player1score;
}
else
{
player2score=player2score+1;
document.getElementById("p2_score").innerHTML=player2score;
}
}
}
