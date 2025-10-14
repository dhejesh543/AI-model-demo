

/*const startBtn = document.getElementById("startBtn"); 
const signBtn = document.getElementById("signBtn");
const loginBtn = document.getElementById("loginBtn");
const upBtn = document.getElementsByClassName("up");

const generateBtn = document.getElementById("generateBtn");
const inputBox = document.querySelector(".input-box");
const inputbox2 = document.getElementsByClassName("ov21")
const inputbox3 = document.getElementsByClassName("ov22")
const upBtn2 = document.getElementsByClassName("up2");
const lobtn = document.getElementById("lobtn");
const lotext = document.getElementById("lotext");




generateBtn.addEventListener("click", () => {
inputBox.classList.add("show");

});




 function openDialog() {
      
      document.getElementById("overlay").style.display = "flex";

 };
    function openDialog2() {  
      document.getElementById("overlay2").style.display = "flex";
      

}
    

     function closeDialog() {
      document.getElementById("overlay").style.display = "none";
      generateBtn.style.display = "inline-block";
      inputBox.style.display = "block";

       }
        function closeDialog2() {
  document.getElementById("overlay2").style.display = "none";

 
  generateBtn.style.display = "inline-block";
  inputBox.style.display = "block";
  signBtn.style.display = "inline-block";
  lobtn.style.display = "inline-block";
}
       

       
    signBtn.addEventListener("click", () => {
       inputBox.style.display = "none";
      generateBtn.style.display = "none";
      signBtn.style.display = "inline-block";
     
 });
  loginBtn.addEventListener("click", () => {
  
  inputBox.style.display = "none";  
  generateBtn.style.display = "none";
  signBtn.style.display = "none";
  lobtn.style.display = "none";

  
 
});


lobtn.addEventListener("click", () => {
      inputBox.style.display = "none";  
      generateBtn.style.display = "none";
      signBtn.style.display = "inline-block";
});*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







const signBtn = document.getElementById("signBtn");
const loginBtn = document.getElementById("loginBtn");
const aboutBtn = document.getElementById("aboutBtn");
const generateBtn = document.getElementById("generateBtn");
const inputBox = document.querySelector(".input-box");
const intro = document.getElementById("intro");
const lotext = document.getElementById("lotext");
const closeSign = document.getElementById("closeSign");
const closeLogin = document.getElementById("closeLogin");


generateBtn.addEventListener("click", () => {
  inputBox.classList.add("show");
  inputBox.style.display = "block";
  lotext.style.display = "none";});
  /*if (lotext.textContent !== "welcome back user!" && lotext.textContent !== "create a account !!!!!") {
    openDialog2(); 
  } else {
    lotext.textContent = "login to continue"; 
    lotext.style.display = "block";
   
  }
});*/




function openDialog() {
  document.getElementById("overlay").style.display = "flex";
  hideMainUI();
  var lotext = document.getElementById("lotext");
  if (lotext) {
    lotext.textContent = "create a account";
    lotext.style.display = "block";
  }
}


function openDialog2() {
  document.getElementById("overlay2").style.display = "flex";
  hideMainUI();
}

function openDialog3(){
  document.getElementById("overlay3").style.display="flex";
  hideMainUI();
}


function closeDialog() {
  document.getElementById("overlay").style.display = "none";
  restoreMainUI();
}


function closeDialog2() {
  document.getElementById("overlay2").style.display = "none";
  restoreMainUI();
}
function closeDialog3() {
  document.getElementById("overlay3").style.display = "none";
  restoreMainUI();
}



function hideMainUI() {
  inputBox.style.display = "none";  
  generateBtn.style.display = "none";
  signBtn.style.display = "none";
  loginBtn.style.display = "none";
  lotext.style.display = "none";
  aboutBtn.style.display="none";
  
}

function restoreMainUI() {
  inputBox.style.display = "block";  
  generateBtn.style.display = "inline-block";
  signBtn.style.display = "inline-block";
  loginBtn.style.display = "inline-block";
  lotext.textContent = "login to see your account";  
lotext.style.display = "block";
aboutBtn.style.display="inline-block";
}
  



loginBtn.addEventListener("click", () => {
  lotext.textContent = "welcome back user!";
    lotext.style.display = "block"; 
  

});
signBtn.addEventListener("click", () => {
  console.log("Sign Up button clicked");
  lotext.textContent = "create a account !!!!!";
  lotext.style.display = "block"; 
});


aboutBtn.addEventListener("click",()=>{
  inputBox.style.display = "none";  
  generateBtn.style.display = "none";
  signBtn.style.display = "none";
  document.getElementById("overlay3").style.display = "flex";
  loginBtn.style.display = "none";
  lotext.style.display = "none";
  intro.style.display="none";
});
window.onload = restoreMainUI();







function submitSignup() {
  const firstName = document.querySelector('.first').value;
  const lastName = document.querySelector('.second').value;
  const email = document.querySelector('.fourth').value;
  const password = document.querySelector('.fifth').value;

  fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message || data.error);
    if (data.message) closeDialog(); 
  })
  .catch(err => console.error('Signup error:', err));
}

function submitLogin() {
  const email = document.querySelector('.ov21').value;
  const password = document.querySelector('.ov22').value;

  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.message === "Login successful") {
      document.getElementById("lotext").innerText = `Welcome, ${data.user}!`;
      closeDialog2();
    } else {
      alert(data.error);
    }
  })
  .catch(err => console.error('Login error:', err));
}














  

 

   
  


    



