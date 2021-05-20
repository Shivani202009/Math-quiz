var p1name= localStorage.getItem("p1")
var p2name= localStorage.getItem("p2")
var p1score= 0
var p2score= 0
document.getElementById("p1name").innerHTML=p1name+" : "
document.getElementById("p2name").innerHTML=p2name+" : "
document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score
document.getElementById("q_turn").innerHTML="question turn- "+p1name
document.getElementById("a_turn").innerHTML="answer turn- "+p2name

function send() {
    number1 = document.getElementById("numberinput1").value;
    number2 = document.getElementById("numberinput2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
 question_number = "<h4>"+ number1 + "X" + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML= row;
document.getElementById("numberinput1").value = "";
document.getElementById("numberinput2").value = "";
}
q_turn="p1name"
a_turn="p2name"

    function check() {
        get_answer=document.getElementById("input_check_box").value
        
        if (get_answer==actual_answer) {
          if (a_turn=="p1name") {
            p1score=p1score+1
            document.getElementById("p1score").innerHTML=p1score
          }
          else{
            p2score=p2score+1
            document.getElementById("p2score").innerHTML=p2score
          }
        }
      
        if (q_turn=="p1name") {
          q_turn="p2name"
          document.getElementById("q_turn").innerHTML="Question turn-"+p2name
          
        }
        else{
          q_turn="p1name"
          document.getElementById("q_turn").innerHTML="Question turn-"+p1name
        }
      
        if (a_turn=="p1name") {
          a_turn="p2name"
          document.getElementById("a_turn").innerHTML="Answer turn-"+p2name
        }
      
        else{
          a_turn="p1name"
          document.getElementById("a_turn").innerHTML="Answer turn-"+p1name
        }
        document.getElementById("output").innerHTML=""
      }
        




