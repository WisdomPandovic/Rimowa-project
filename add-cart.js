$(document).ready(function(){
    let products = JSON.parse(localStorage.wishList);
    console.log(products);
    if(products.length > 0){
        $("#wishListNum").text(products.length)
        products.forEach(element =>
        $.ajax({
type:"get",
url:"http://159.65.21.42:9000/product/"+element,
success:function(res){
    console.log('product details',res,element)
    $("#products").append(
        `<div class="product">
<a href="view-product.html?q=${element}">
<div id="main"></div>
<div class="bk-color">
<figure class="fig ">
    <img src="${'http://159.65.21.42:9000' + res.image}" alt="" class="fig-img1">
  
</figure>

<div class="fig-text ">
   <div class="product-title">${res.name}</div>
   <div class="product-name">${res.description}</div>
   <div class="price">${res.price}</div> 
   <div><button class="cart-delete">REMOVE</button></div>
</div>
</div>

<div class="case-color ">
<div><img src="./Images/iphone-12-pink_neon.webp" alt=""></div>
<div><img src="./Images/iphone-12-black_matte.webp" alt=""></div>
<div><img src="./Images/iphone-12-iridescent.webp" alt=""></div>
</div>
<div class="new flex">

<div><span style='font-size:20px;'>&#9826;</span> NEW</div>
</div>
<div class="heart"><i class="fa fa-heart"></i></div>
</a>
</div>`
    )
},
error:function(err){
    console.log(err)
}

})
)
    }

   
})



