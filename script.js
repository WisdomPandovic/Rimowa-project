function render(data){
	return `<div class="product">
    <a href="view-product.html?q=${data._id}">
    <div id="main"></div>
    <div class="bk-color">
        <figure class="fig ">
            <img src="${'http://159.65.21.42:9000' + data.image}" alt="" class="fig-img1">
          
        </figure>

        <div class="fig-text ">
           <div class="product-title">${data.name}</div>
           <div class="product-name">${data.description}</div>
           <div class="price">${data.price}</div> 
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
}

function load(){
	$.ajax({
		type:"GET",
		url:"http://159.65.21.42:9000/products",
		success:function(res){
			for(let i=0;i<res.length;i++){
				let d = res[i]
				if(d.category =="iphone"){
					let html = render(d)
					$('#products').append(html)
				}
			}
		},
		error:function(err){

		}
	})
}

load()