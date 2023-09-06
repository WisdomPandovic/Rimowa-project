function load(id){

    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/product/"+id,
        success:function(res){
            $("#name").val(res.name)
            $("#category").val(res.category)
            $("#price").val(res.price)
            $(".img").val("src", "http://159.65.21.42:9000"+res.image)
            console.log("arr: ", res);
            $("#description").val(res.description)
            $("#form").attr("action" , "http://159.65.21.42:9000/update/product"+id)
        },
        error:function(err){
            console.log(err)
        }

    })
}

let url = location.href
let arr = url.split("=")
load(arr[1])