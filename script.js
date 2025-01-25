const form = document.getElementById('registration-form');

const feedbackDiv = document.getElementById('form-feedback');


document.addEventListener("DOMContentLoaded", function (event){
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();

        const email = document.getElementById('email').value.trim();

        const passWord = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push("username less than 3 characters!");
        }

        if(!email.includes("@") && !email.includes(".")){
            isValid = false;
            messages.push("enter a valid email");
        }

        if(passWord.length < 8){
            isValid = false;
            messages.push("password less than 8 characters!");
        }

        feedbackDiv.style.display = "block";

        if(isValid){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }
        
        if(!isValid){
            feedbackDiv.innerHTML = messages.join(", <br>");
            feedbackDiv.style.color = "#dc3545";
        }

    })

  });

