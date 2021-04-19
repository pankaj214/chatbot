
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//      var recognition = new SpeechRecognition();

let user = document.getElementById("user");
let computer = document.getElementById("computer");

let voice = document.getElementById("voice");
const recognition = new SpeechRecognition();
let chat_msg = document.getElementById("chat_msg");
let chat_body = document.getElementById("body");

// let output_1 = '';
// let output_2 = '';

// double print ho rha h isliye comment kr diya ////////////////////////
function showMsg(user_msg){
    let output = '';
    output += ` <div class="msg user" id="user">${user_msg}</div>`;
    chat_msg.innerHTML += output;

    return chat_msg;
}


function showBotMsg(botMsg){
    let output = '';
    if (botMsg=="hello") {
    output += ` <div class="msg computer" id="computer">Hello, How can I help you?</div>`;
    }
        else if (botMsg=="who am I") {
        output += ` <div class="msg computer" id="computer">You are my Master!</div>`;
    }
        else if (botMsg == "what is my name") {
        output += ` <div class="msg computer" id="computer">Your name is Abhinav Gupta.</div>`;
    }
        else if (botMsg == "what is your name") {
        output += ` <div class="msg computer" id="computer"> My name is Mini Cortana.</div>`;
    }
        else if (botMsg == "this project is for") {
        output += ` <div class="msg computer" id="computer">Hack CBS3.0</div>`;
    }
        else if (botMsg == "who made this project") {
        output += ` <div class="msg computer" id="computer"> This Project is Made by - <li> Abhinav Gupta</li>
        <li> Abhishek Patel </li> <li> Abhishek Shivhare </li> <li> Pankaj Choubey </li></div>`;
    }
        else if (botMsg == "can you make me a coffee") {
        output += ` <div class="msg computer" id="computer"> Sorry, I can't do this for you.</div>`;
    }
        else if (botMsg == "what up") {
        output += ` <div class="msg computer" id="computer">Everything is fine. What about you?</div>`;
    }
        else if (botMsg == "good morning") {
        output += ` <div class="msg computer" id="computer">Good Morning Sir.</div>`;
    }
        else if (botMsg == "good afternoon") {
        output += ` <div class="msg computer" id="computer">Good afternoon Sir.</div>`;
    }
        else if (botMsg == "good evening") {
        output += ` <div class="msg computer" id="computer">Good evening Sir.</div>`;
    }
        else if (botMsg == "good night") {
        output += ` <div class="msg computer" id="computer">Good night Sir.</div>`;
    }
        else if (botMsg == "tell me something") {
        output += ` <div class="msg computer" id="computer">It's a wonderful day.</div>`;
    }
        else if (botMsg == "are you a robot") {
        output += ` <div class="msg computer" id="computer">Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?</div>`;
    }
        else if (botMsg == "it's my birthday") {
        output += ` <div class="msg computer" id="computer">Happy Birthday to you!!</div>`;
    }
        else if (botMsg == "do you know a joke") {
        output += ` <div class="msg computer" id="computer">You’re funny!!</div>`;
    }
        else if (botMsg == "do you love me") {
        output += ` <div class="msg computer" id="computer">I love you.</div>`;
    }
        else if (botMsg == "what is function") {
        output += ` <div class="msg computer" id="computer"> A function is a block of organized, reusable code that is used to perform a single, related action.</div>`;
    }
    else {
        output += ` <div class="msg computer" id="computer">Sorry, I didn't get you.</div>`;
    }
    chat_msg.innerHTML += output;

    return chat_msg;
}

function chatBotVoice(botMsg){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "this is exaple";                                   // speech wala section
    window.SpeechSynthesis.speak(speech);
    chat_body.appendChild(showBotMsg(speech.text));
}

recognition.onresult = function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
   chat_body.appendChild(showMsg(transcript));
   chat_body.appendChild(showBotMsg(transcript));
    console.log(transcript);
    chatBotVoice(transcript);
}


voice.addEventListener("click", function(){
    recognition.start();
    console.log("actyubtyuive");
});

//////////  for mic icon change ///////////////////

function myFunction(x) {
  x.classList.toggle("fa-microphone-slash");
}

//////////////////////////////////////////////