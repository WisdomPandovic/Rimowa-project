function user(b){
    return `
    <tr >
    <td >${b.name}</td>
    
    <td>${b.phone} </td>
     
    <td >${b.email}</td>
   
   <td>${b.password}</td>
   
   <td>
    <a href="edit.html?id=${b._id}" class="edit"><button>Edit</button></a>
    <a data-id=${b._id} class="delete"><button>Delete</button></a>
  </td>
  </tr>
    `

  }

  function loadd(){
    $.ajax({
      type:"GET",
      url:"http://159.65.21.42:9000/users",
      success:function(res){
        for(let i=0;i<res.length;i++){
          let d = res[i]
          
            console.log(d)
            let product = user(d)
            $('#users').append(product)
         
        }
      },
      error:function(err){
  
      }
    })
  }



  $(document).on("click", ".delete", function(){
    let id = $(this).attr("data-id")
    let res = confirm("Do you want to delete?")
    if(res == true){

      $.ajax({
        type: "delete",
        url:"http://159.65.21.42:9000/user/"+id,
        success: function(res){
          alert("Item deleted")
        },
        error: function (err){
          console.log(err)
        }

      })

    }
  })
  
  loadd();

  

