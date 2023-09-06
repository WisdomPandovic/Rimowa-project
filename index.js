var indexValue = 0;
showImg(indexValue);
function side_slide(e){
    showImg(indexValue +=e);
}

function showImg(e){
    var i;
    const img = document.querySelectorAll(".immm");
    const sliders = document.querySelectorAll(".span");
    if(e > img.length){
        indexValue = 1
    }
    if(e < 1){
        indexValue = img.length
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}



let email = document.getElementById("email")
let password = document.getElementById("password")
let signin_btn = document.getElementById("signin_btn")
let err_msg = document.getElementById("err_msg")


function validateFields (){
    if (email.value == "" || password.value == ""){
        err_msg.innerHTML ="All fields are required!"  
        // results.replaceChild();
    }else{
        email.value ="" 
        password.value ="" 
        err_msg.innerHTML =""
    }
}

signin_btn.onclick = function(){

    validateFields ()
}