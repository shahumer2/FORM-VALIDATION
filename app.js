
function seterror(id,error){
    element= document.getElementById(id);
    element.getElementsByClassName('formError')[0].innerHTML=error;

}



function clearerrors(){
    errors= document.getElementsByClassName("formError")
    for (let item of errors){
item.innerHTML=" "
    }
}
function validateForm(){
  
    var returnval=true;
    clearerrors();


    
 var name = document.forms["myForm"]["firstname"].value
 if(name.length<5){
     seterror("name","length of name is too short")
     returnval = false; }
     if (name.match(/[0-9]/)) { 
        // notify the user about their mistake 
        alert("Avoid numbers in the first name field, please.");
        returnval = false;
 }

 var email = document.forms["myForm"]["femail"].value
 if(email.length>20){
     seterror("email","email cannot be too long")
     returnval = false;
 }
 var phone = document.forms["myForm"]["fphone"].value
 if(phone.length!=10){
     seterror("phone","phone number must be 10 digit")
     returnval = false;
 }
 var password = document.forms["myForm"]["fpassword"].value
//  if(password.length<6){
//      seterror("password","password is too short")
//      returnval = false;
//  }
 if(!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)){
    seterror("password","password is too short password must contain upper letter special  character and must be between 7-15 character long")
    returnval = false;
    //  alert("password must contain upper letter special  character and must be between 7-15 character long")
 }
 var cpassword = document.forms["myForm"]["cpassword"].value
 if(cpassword != password){
     seterror("ccpassword","password dont match")
     returnval = false;
 }


 
//  var date = document.forms["myForm"]["birthday"].value
//  date = date.split("-")
//  date = new Date(date[2], date[1] - 1, date[0]).getTime();
//  console.log(date)
//     // return (date2 - date) < 0;
// // }
// var date2= new Date().getTime();

// console.log(date2)
// // var current_date=date2.getFullYear()+"-"+ date2.getMonth()+"-" + date2.getDate();
// // console.log(current_date)
// if(date2-current_date<0){
//     seterror("bday","the date you entered is a future date")
//     returnval = false;
// }
                          //new date validation //
    var date = document.forms["myForm"]["birthday"].value
   
    // returnval=false;
    const cal= new Date(date);
    // console.log(cal);
    const future= new Date()
    const diff =(future-cal)
    console.log(diff)
    if(diff<0){
        seterror("bday","you cannot enter the future date")
        returnval=false;
    }


 return returnval;
};
