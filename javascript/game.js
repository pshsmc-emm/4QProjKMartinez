var trialCounter = 0;
var username = "";

function getUsername() {
    username = document.getElementById("username").value;
    trials();
}

function trials() {
    trialCounter++;
    questionOne();
}

//functions for number one and options
function questionOne() {
    document.getElementById("gameStart").innerHTML = "<h3>Good Morning! [1]</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 

        "<p>You woke up surprised, arms hurriedly gripping to the side of the bed frame as " + 
        "you try to stop yourself from falling off the bed.</p>" + 

        "<p>'What on Earth?' you mumbled to yourself, 'why was I this close to the edge?' </p>" +   

        "<p>You stretched your arms out as you forced yourself to stand up, recalling the strange " + 
        "dream you just had, 'broken mirrors and missing horseshoes, huh?'</p>" + 
        
        "<p>After freshening up, you walked over to the kitchen to prepare  breakfast when suddenly. " + 
        "BANG! BANG! BANG! Loud hurried knocks came from your front door. At that moment, you were " + 
        "scared out of your wits due to the ferocity of the pounds. You silently debated with yourself " + 
        "whether or not to answer the door. So you?</p>" + 

        "<form> <input id = 'radio1' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio1'>Option 1</label> <br />" + 
        "<input id = 'radio2' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio2'>Option 2</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForOne()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForOne() {
    if (radio1.checked) {
        questionTwo();
    } else if (radio2.checked) {
        failQ1Opt1();
    }
}

function failQ1Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>Leave it closed and call for help.</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>You let panic get the best of you and rushed to barricade the door with the furnishings " + 
        "you have and speed dialed the emergency hotline. You heard a muffled shout from outside seemingly " + 
        "calling out your name. 'How does the person know who I am? Am I being targeted? By who?' thoughts " + 
        "swirled through your head as you waited for the operator to pick up. </p>" + 

        "<p>Once the line was connected, you explained to the operator about your situation. You eyed the door " + 
        "carefully from your room until you heard sirens outside. Finally! Help has arrived. </p>" + 
        
        "<p>You checked your window to see the officers in front of your door requesting to come in and talk to you. " + 
        "To your surprise, the culprit behind the loud knocks were your best friend, Wendy. Your face turned " + 
        "bright red in embarrassment. </p>" + 
        
        "<p>You remembered that today was your first day in school and that was the whole reason why Wendy was banging " + 
        "on your door. It's a weird tradition if you will (also because you have a tendency to sleep through your " + 
        "alarm). You started to explain to the officers that it was all just a misunderstanding and apologized " + 
        "profusely to them and Wendy. </p>" + 
        
        "<p>As the scene died down, Wendy looked at you in amusement, 'didn't think you'd forget that today's our first " + 
        "day of school for the 6th year in a row.' You wanted to disappear right then and there. Wendy's endeavours " + 
        "to get you to school early went to waste after that whole fiasco. </p>" + 
        
        "<p>'Ehe. Sorry about that...again.'</p>" + 

        "<p>Ending: Starting off with a bang</p>" + 

        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number two and options
function questionTwo() {
    document.getElementById("gameStart").innerHTML = "<h3>Check on the door [2]</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Although the knocks sounded terrifying, you slowly registered that you knew only one " + 
        "person who'd have the audacity to pull something like this first thing in the morning. </p>" + 

        "<p>Upon looking through the peephole of your door to confirm your suspicions, you saw the one and " + 
        "only, Wendy with her annoyingly wide grin plastered on her face. Your best friend yelled, 'Hey! " + 
        "Will you hurry up we gotta go to school remember? Don't tell me you forgot again!' </p>" + 
        
        "<p>You blinked at the realization that it was the first day of classes today. 'Uh just a minute,' " + 
        "you called back in response. You carefully opened the door to let the girl inside. </p>" + 

        "<form> <input id = 'radio3' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio3'>Option 1</label> <br />" + 
        "<input id = 'radio4' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio4'>Option 2</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForTwo()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForTwo() {
    if (radio3.checked) {
        failQ2Opt1();
    } else if (radio4.checked) {
        questionThree();
    }
}

function failQ2Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending two</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number three and options
function questionThree() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 3</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Three</p>" + 
        "<form> <input id = 'radio5' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio5'>Option 1</label> <br />" + 
        "<input id = 'radio6' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio6'>Option 2</label> <br />" + 
        "<input id = 'radio7' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio7'>Option 3</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForThree()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForThree() {
    if (radio5.checked) {
        failQ3Opt1();
    } else if (radio6.checked) {
        questionFour();
    } else if (radio7.checked) {
        failQ3Opt2();
    }
}

function failQ3Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending three</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ3Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending four</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number four and options
function questionFour() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 4</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Four</p>" + 
        "<form> <input id = 'radio8' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio8'>Option 1</label> <br />" + 
        "<input id = 'radio9' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio9'>Option 2</label> <br />" + 
        "<input id = 'radio10' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio10'>Option 3</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForFour()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForFour() {
    if (radio8.checked) {
        failQ4Opt1();
    } else if (radio9.checked) {
        failQ4Opt2();
    } else if (radio10.checked) {
        questionFive();
    }
}

function failQ4Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending five</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ4Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending six</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number five and options
function questionFive() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 5</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Five</p>" + 
        "<form> <input id = 'radio11' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio11'>Option 1</label> <br />" + 
        "<input id = 'radio12' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio12'>Option 2</label> <br />" + 
        "<input id = 'radio13' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio13'>Option 3</label> <br />" + 
        "<input id = 'radio14' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio14'>Option 4</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForFive()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForFive() {
    if (radio11.checked) {
        failQ5Opt1();
    } else if (radio12.checked) {
        questionSix();
    } else if (radio13.checked) {
        failQ5Opt2();
    } else if (radio14.checked) {
        failQ5Opt3();
    }
}

function failQ5Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending seven</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ5Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending eight</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ5Opt3() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending nine</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number six and options
function questionSix() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 6</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Six</p>" + 
        "<form> <input id = 'radio15' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio15'>Option 1</label> <br />" + 
        "<input id = 'radio16' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio16'>Option 2</label> <br />" + 
        "<input id = 'radio17' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio17'>Option 3</label> <br />" + 
        "<input id = 'radio18' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio18'>Option 4</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForSix()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForSix() {
    if (radio15.checked) {
        questionSeven();
    } else if (radio16.checked) {
        failQ6Opt1();
    } else if (radio17.checked) {
        failQ6Opt2();
    } else if (radio18.checked) {
        failQ6Opt3();
    }
}

function failQ6Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending ten</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ6Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending eleven</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ6Opt3() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twelve</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number seven and options
function questionSeven() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 7</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Seven</p>" + 
        "<form> <input id = 'radio19' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio19'>Option 1</label> <br />" + 
        "<input id = 'radio20' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio20'>Option 2</label> <br />" + 
        "<input id = 'radio21' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio21'>Option 3</label> <br />" + 
        "<input id = 'radio22' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio22'>Option 4</label> <br />" + 
        "<input id = 'radio23' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio23'>Option 5</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForSeven()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForSeven() {
    if (radio19.checked) {
        failQ7Opt1();
    } else if (radio20.checked) {
        questionEight();
    } else if (radio21.checked) {
        failQ7Opt2();
    } else if (radio22.checked) {
        failQ7Opt3();
    } else if (radio23.checked) {
        failQ7Opt4();
    }
}

function failQ7Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending thirteen</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ7Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending fourteen</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ7Opt3() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending fifteen</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ7Opt4() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending sixteen</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number eight and options
function questionEight() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 8</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Eight</p>" + 
        "<form> <input id = 'radio24' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio24'>Option 1</label> <br />" + 
        "<input id = 'radio25' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio25'>Option 2</label> <br />" + 
        "<input id = 'radio26' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio26'>Option 3</label> <br />" + 
        "<input id = 'radio27' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio27'>Option 4</label> <br />" + 
        "<input id = 'radio28' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio28'>Option 5</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForEight()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForEight() {
    if (radio24.checked) {
        failQ8Opt1();
    } else if (radio25.checked) {
        failQ8Opt2();
    } else if (radio26.checked) {
        failQ8Opt3();
    } else if (radio27.checked) {
        questionNine();
    } else if (radio28.checked) {
        failQ8Opt4();
    }
}

function failQ8Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending seventeen</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ8Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending eighteen</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ8Opt3() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending nineteen</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ8Opt4() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number nine and options
function questionNine() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 9</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Nine</p>" + 
        "<form> <input id = 'radio29' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio29'>Option 1</label> <br />" + 
        "<input id = 'radio30' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio30'>Option 2</label> <br />" + 
        "<input id = 'radio31' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio31'>Option 3</label> <br />" + 
        "<input id = 'radio32' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio32'>Option 4</label> <br />" + 
        "<input id = 'radio33' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio33'>Option 5</label> <br />" + 
        "<input id = 'radio34' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio34'>Option 6</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForNine()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForNine() {
    if (radio29.checked) {
        failQ9Opt1();
    } else if (radio30.checked) {
        failQ9Opt2();
    } else if (radio31.checked) {
        failQ9Opt3();
    } else if (radio32.checked) {
        failQ9Opt4();
    } else if (radio33.checked) {
        questionTen();
    } else if (radio34.checked) {
        failQ9Opt5();
    }
}

function failQ9Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-one</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ9Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-two</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ9Opt3() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-three</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ9Opt4() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-four</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ9Opt5() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-five</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//functions for number ten and options
function questionTen() {
    document.getElementById("gameStart").innerHTML = "<h3>Number 10</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Prompt Ten</p>" + 
        "<form> <input id = 'radio35' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio35'>Option 1</label> <br />" + 
        "<input id = 'radio36' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio36'>Option 2</label> <br />" + 
        "<input id = 'radio37' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio37'>Option 3</label> <br />" + 
        "<input id = 'radio38' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio38'>Option 4</label> <br />" + 
        "<input id = 'radio39' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio39'>Option 5</label> <br />" + 
        "<input id = 'radio40' type = 'radio' name = 'choices' required />" + 
        "<label for 'radio40'>Option 6</label> <br /> <br />" + 
        "<input id='submit' type='submit' value='Continue' onclick='optionsForTen()'>" + 
        "<input id='reset' type='reset' value='Reset Choice'> </form>";
}

function optionsForTen() {
    if (radio35.checked) {
        failQ10Opt1();
    } else if (radio36.checked) {
        failQ10Opt2();
    } else if (radio37.checked) {
        completed();
    } else if (radio38.checked) {
        failQ10Opt3();
    } else if (radio39.checked) {
        failQ10Opt4();
    } else if (radio40.checked) {
        failQ10Opt5();
    }
}

function failQ10Opt1() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-six</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ10Opt2() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-seven</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ10Opt3() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-eight</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ10Opt4() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending twenty-nine</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

function failQ10Opt5() {
    document.getElementById("gameStart").innerHTML = "<h3>You failed :(</h3>" + 
        "<p>Trial Counter: " + trialCounter + "</p>" + 
        "<p>Bad luck ending thirty</p>" + 
        "<input id='retry' type='button' value='Retry?' onclick='trials()'>" + 
        "<input id='exit' type='button' value='Leave' onclick='leave()'>";
}

//completed game
function completed() {
    document.getElementById("gameStart").innerHTML = "<h3>The End!</h3>" + 
    "<p>Congratulations, " + username + 
    "! You have survived the day! I hope you'll have a lucky one in real life :) </p>" + 
    "<p>Number of Trials it Took: " + trialCounter + "</p> <br />" + 
    "<form> <input id='retry' type='button' value='Play again?' onclick='replay()'>" + 
    "<input id='exit' type='button' value='Leave' onclick='leave()'> </form>";
}

function replay() {
    document.location.href="gameProper.html";
}

function leave() {
    document.location.href="../index.html";
}