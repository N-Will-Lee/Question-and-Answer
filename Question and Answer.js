
<!DOCTYPE html>
<html>
    <head>
        <h1>Now we will get to the bottom of all this! </h1>
    </head>
    <body>
        <p id = "leadingResponseSpace"></p>
        <p id = "questionspace"></p> 
        <input id ="answerbox" type = "string">
        <button type="button" onclick="showNextQuestion()">Continue</button>
        <script>
            var nameOfSucka = "ROGER"
            var questions = ["IS " + nameOfSucka + " A GOOBER?", 
                             "IS " + nameOfSucka + " A PECULAR CHARACTER?", 
                             "IS " + nameOfSucka + " PROBABLY A CONSCIENCE AI MASQUERADING AS A HUMAN?"];
            var answers = [];
            var leadingResponse = ["You may not have understood the question...", "C'mon guy, this isn't rocket science...", "Jeez you're determined aren't ya?"];
            var leadingResponseCounter = 0;
            document.getElementById("questionspace").innerHTML = questions[0];
            //document.getElementById("questionspace").innerHTML = "What is your name mate?";
            function showNextQuestion() {    
                
               // if (questions == []){
                 //   document.getElementById("questionspace").innerHTML
                    
                if (document.getElementById("answerbox").value != "yes"){
                    document.getElementById("answerbox").value = "";
                    document.getElementById("leadingResponseSpace").innerHTML = leadingResponse[leadingResponseCounter];
                    console.log(leadingResponseCounter);
                    leadingResponseCounter = leadingResponseCounter + 1;
                    console.log(leadingResponseCounter);
                    console.log(leadingResponse.length);
                    if (leadingResponseCounter == leadingResponse.length){
                        leadingResponseCounter = 0;
                    }
                }   
                else {
                    document.getElementById("leadingResponseSpace").innerHTML = "";
                    leadingResponseCounter = 0;
                    answers.push(document.getElementById("answerbox").value);             
                    document.getElementById("questionspace").innerHTML = questions[answers.length];
                    document.getElementById("answerbox").value = '';
                    if (answers.length == questions.length){
                        document.body.innerHTML = "";
                        var finalSummary = [];
                        for (i = 0; i < questions.length; i++){
                            finalSummary += questions[i] + "<p>" + " Answer:   " + answers[i] + "<p>";   
                        }
                        document.body.innerHTML = finalSummary
                    }
                }
            }   
        </script>
    </body>
</html>