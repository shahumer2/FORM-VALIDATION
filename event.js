
document.getElementById("email").addEventListener("input", checkemail)
document.getElementById("password").addEventListener("input", checkpassword)
document.getElementById("ccpassword").addEventListener("input", confirmpassword)
document.getElementById("name").addEventListener("input", firstname)
document.getElementById("lname").addEventListener("input", lastname)
document.getElementById("phonee").addEventListener("input", phone)

// function clearerrors(){
//     errors= document.getElementsByClassName("formError")
//     for (let item of errors){
// item.innerHTML=" "
//     }
// } 
function firstname(event) {
    let name = event.target.value
    let errrrMsg = document.getElementById("fname")
    if (name.match(/[0-9]/)) {
        errrrMsg.innerText = "name dont contain numbers"
        errrrMsg.style.color = "red"
    }
    else {
        errrrMsg.innerText = " "


    }
}
function lastname(event) {
    let lname = event.target.value
    let errrMsg = document.getElementById("laname")
    if (lname.match(/[0-9]/)) {
        errrMsg.innerText = "name dont contain numbers"
        errrMsg.style.color = "red"
    }
    else {
        errrMsg.innerText = " "


    }
}
function phone(event) {


    let pho = event.target.value
    let erMsg = document.getElementById("perror")
    if (pho.length < 10) {
        erMsg.innerText = "phone number should be 10 digit "
        erMsg.style.color = "red"
    }
    else if (pho.length > 10) {
        erMsg.innerText = "phone number should be 10 digit "
        erMsg.style.color = "red"
    }

    else {
        erMsg.innerText = "correct form"
        erMsg.style.color = "green"

    }
}
//   function lastname(event){
//     let lname = event.target.value
//     let errMsg = document.getElementById("laname")
//     if (lname.match(/[0-9]/)){
//     errMsg.innerText=" a name dont contain numbers"
//     errMsg.style.color="red"
//     }
//    else{
//      errMsg.innerText=" "
//      errMsg.style.color="green"

//    }

//   }
















function checkemail(event) {
    let email = event.target.value;
    let erMsg = document.getElementById("umail")
    if (!email.includes("@") || !email.includes(".com")) {
        erMsg.innerText = "invalid email"
        document.getElementById("email").style.borderBottom = "2px solid red"
        erMsg.style.color = "red"
    }
    else {
        erMsg.innerText = "valid email"
        erMsg.style.color = "green"
    }
    // elseif(email=" "){
    // erMsg.innerText= " "
    // }
}

function checkpassword(event) {

    let password = event.target.value;
    let erMsg = document.getElementById("puss")
    if (password.length < 7) {
        erMsg.innerText = "password too short "
        erMsg.style.color = "red"
    }
    else if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)) {
        erMsg.innerText = "PASSWORD DONT CONTAIN UPPER CASE & SPEACIAL CHARACTERS "
        erMsg.style.color = "red"

    }



    else {
        erMsg.innerText = "password is good"
        erMsg.style.color = "green"
    }



}
function confirmpassword(event) {

    let cpass = event.target.value
    let erMsg = document.getElementById("cpuss")
    if (cpass != document.getElementById("pssword").value) {
        erMsg.innerText = "password dont match"
        erMsg.style.color = "red"
    }
    else {
        erMsg.innerText = "password  match"
        erMsg.style.color = "green"
    }
}
