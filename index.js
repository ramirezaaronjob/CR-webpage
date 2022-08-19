document.getElementById("button1").onclick = function(){
    
        cr = document.getElementById("fname").value;
        const repeat  = document.getElementById("rep")
        repeat.insertAdjacentHTML("beforeend","&ltp>"+ cr + '&lt/p><br>&ltbr><br>');
        document.getElementById("fname").value = "";

}
easy = document.getElementById("fname");
easy.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("button1").click();
    }
  });
document.getElementById("olist").onclick = function(){
    listPrompt = "&ltol&gt<br>";
    stopper = "";
    const repeat  = document.getElementById("rep");
    repeat.insertAdjacentHTML("beforeend",listPrompt);
    loop = parseInt(prompt("How many questions are in the list?"));
    for (let i = 0; i < loop; i++){
        listPrompt = prompt("Please enter an item to be added to the list, type stop to end the list");
        repeat.insertAdjacentHTML("beforeend","&ltli>" + listPrompt + "&lt/li><br>");
    }
    repeat.insertAdjacentHTML("beforeend","&lt/ol><br>&ltbr><br>");
}

document.getElementById("reset").onclick = function(){
    document.location.reload();
}


document.getElementById("end").onclick = function(){
    const repeat  = document.getElementById("rep");
    repeat.insertAdjacentHTML("beforeend","<br>&ltp>Thank you for you time and effort on this report! Please call the Data Colletion QA Team with any questions at 530.550.2141 &ltbr> For App related questions, please call 530.550.2119&lt/p>");
}
