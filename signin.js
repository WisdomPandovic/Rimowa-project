// let email = document.getElementById("email")
// let password = document.getElementById("password")
// let signin_btn = document.getElementById("signin_btn")
// let err_msg = document.getElementById("err_msg")
// let errr_msg = document.getElementById("errr_msg")


// function validateFields (){
//     let email = document.getElementById("email").value
//      password = document.getElementById("password").value

//     if (email.value == "" || password.value == ""){
//         err_msg.innerHTML ="All fields are required!"  
//         // results.replaceChild();
//     }else{
//         email.value ="" 
//         password.value ="" 
//         err_msg.innerHTML =""
//     } 
    
//     if(password.length < 6){
//         err_msg.innerHTML ="Password can't be less than 8"

//     }else{
//         err_msg.innerHTML =""
//         password.value ="" 

//     }

//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         errr_msg.innerHTML = ("Please enter correct email ID");
//         // setTimeout(function(){errr_msg.style.display = 'none';}, 3000);
//         return false

//     }else{
//         errr_msg.innerHTML = ""
//         email.value ="" 
//         console.log(email)
//         return true;
//     }

   
// }

// signin_btn.onclick = function(){

//     validateFields ()

  
// }


$('#signin_btn').click(function(){

     let pattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
     let email = $("#email").val();
     if(pattern.test(email)){
      $('#errr_msg').html("") 
     }else{
      $('#errr_msg').html("Please enter correct email ID") 
     }

     let passlength = $("#password").val().length;
     if(passlength < 8){
      $('#err_msg').html("Password can't be less than 8") 
     
    }else{
      $('#err_msg').html("") 
    }


    if($('#email').val() == "" || $('#password').val() == ""){
      $('#errr_msgs').html("Email or password cannot be empty") 
    }else{
      $('#errr_msgs').html('')
            
      $.ajax({
        url:"http://159.65.21.42:9000/login",
        type:"POST",
        data:{
          "email":$('#email').val(),
          "password":$('#password').val()
        },
        success:function(res){
          console.log(res)
          if(res.error){
            $('#errr_msgs').html(res.error)            
          }else{
            $('#errr_msgs').html("Login Successful")  
            LocalStorage.setItem("user",JSON.stringify(res))
          }
         
        },
        error:function(err){
          console.log(err.statusCode)
          $('#msg').html(err) 
        }
      })

    }
  })