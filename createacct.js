// let fname = document.getElementById("firstname")
// let lname = document.getElementById("lastname")
// let phone_no = document.getElementById("phone_no")
// let email = document.getElementById("email")
// let pword = document.getElementById("password")
// let confirmpas = document.getElementById("confirmpas")
// let signup_btn = document.getElementById("signup_btn")
// let errr = document.getElementById("errr")
// let errr_fname = document.getElementById("errr_fname")
// let errr_lname = document.getElementById("errr_lname")
// // let errr_pwd = document.getElementById("errr_pwd")
// // let errr_cpw = document.getElementById("errr_cpw")
// let errr_email = document.getElementById("errr_email")
// let errr_phone = document.getElementById("errr_phone")


// function validateFields (){

//     if ( firstname.value.trim() == "" ){
//         errr_fname.innerHTML = "All fields are required!"    
//         // results.replaceChild();
//     }else{
//         firstname.value ="" 
//         errr_fname.innerHTML = ""
        
//     }

//     // if ( lastname.value.trim() == "" ){
//     //     errr_lname.innerHTML = "All fields are required!"    
        
//     // }else{
//     //     lastname.value ="" 
//     //     errr_lname.innerHTML = ""
//     // }

//     // if ( pword == "" ){
//     //         errr_pwd.innerHTML = "All fields are required!" 
//     //         console.log("All fields are required!")   
            
//     //     }else{
//     //         pword ="" 
//     //         errr_pwd.innerHTML = ""
//     //         // document.getElementById("errr_pwd").style.display = "none"
//     //     }
    
//           if ( confirmpas == "" ){
//             errr_cpw.innerHTML = "All fields are required!" 
//             console.log("All fields are required!")   
            
//         }else{
//             confirmpas ="" 
//             errr_cpw.innerHTML = ""
//         }

//         if ( phone_no.value.trim() == "" ){
//             errr_phone.innerHTML = "All fields are required!"    
//             // results.replaceChild();
//         }else{
//             phone_no.value ="" 
//             errr_phone.innerHTML = ""
            
//         }

   
//     }

    

 



// function matchpass(){
//      let pword = document.getElementById("password").value;
//      let confirmpas = document.getElementById("confirmpas").value;
//      let errr_pwd = document.getElementById("errr_pwd")
//      let errr_cpw = document.getElementById("errr_cpw")
//     //  console.log(pword);
//     //  console.log(confirmpas);
//     //  console.log(errr_cpw);

//     //  if ( pword == "" ){
//     //     errr_pwd.innerHTML = "All fields are required!" 
//     //     console.log("All fields are required!")   
        
//     // }else{
//     //     pword ="" 
//     //     errr_pwd.innerHTML = ""
//     // }

//     //   if ( confirmpas == "" ){
//     //     errr_cpw.innerHTML = "All fields are required!" 
//     //     console.log("All fields are required!")   
        
//     // }else{
//     //     confirmpas ="" 
//     //     errr_cpw.innerHTML = ""
//     // }

//     if (pword.length != 0){
//             if(pword != confirmpas){
               
//                 errr_cpw.innerHTML = ("password must be same!");
//                 console.log('password must be same!')
            
//     }else{
//         errr_cpw.innerHTML = ("password matched!");
//         console.log("password matched!")
//         pword ="" 
//         confirmpas =""
//         errr_cpw.innerHTML =""
//         // document.write("The form has been submitted successfully");
//     }

    
// }



    
// }

// function validateEmail() {
//         email = document.getElementById("email").value
        
//         // atpos = email.indexOf("@");
//         // dotpos = email.lastIndexOf(".");
        
//         // if (email.value == ""){
//         //     errr_email.innerHTML = ("All fields are required!" ) 
//         //     // results.replaceChild();
//         // }else if(atpos < 1 || ( dotpos - atpos < 2 )) {
//         //     errr_email.innerHTML = ("Please enter correct email ID")
//         //    return false;
//         // }
//         // return( true );

//         // email.value ="" 
//         // errr.innerHTML =""
//         // errr_email.innerHTML = ""

//         if(email.length == 0){
//             errr_email.innerHTML = "All fields are required!" 
//             return false; 
           
//         }

//         if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//             errr_email.innerHTML = ("Please enter correct email ID")
//             return false

//         }else{
//             errr_email.innerHTML = ""
//             console.log(email)
//             return true;
//         }

        
// }

// signup_btn.onclick = function(){

//     // validateFields ()
//     matchpass()
//     validateEmail()
// }


$('#signup_btn').click(function(){

    
    let pattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let email = $("#email").val();
    if(pattern.test(email)){
     $('#errr_email').html("") 
    }else{
     $('#errr_email').html("Please enter correct email ID") 
    }


    let passlength = $("#password").val().length;
    if(passlength < 8){
     $('#errr_pwd').html("Password can't be less than 8") 
    
   }else{
     $('#errr_pwd').html("") 
   }


    if($('#email').val() == "" || $('#password').val() == "" || $('#firstname').val() == "" || $('#phone_no').val() == ""){
      $('#msg').html("fields cannot be empty") 
    }else{
      $('#msg').html('')


    $.ajax({
      type:"post",
      url:"http://159.65.21.42:9000/register",
      data:{
      "name": $('#firstname').val(),
      "phone": $('#phone_no').val(),
      "email": $('#email').val(),
      "password": $('#password').val(),
     },
      success:function(res){
          if(res.error){
            $('#msg').html(res.error)
          }else{
              $('#msg').html("User Created")
          }
      },
      error:function(err){
  
      }
    })
}
  })