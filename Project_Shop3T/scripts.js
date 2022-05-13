const btn = document.querySelectorAll("button")

btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelectorAll(".box-product__img img").src
    var productName = product.querySelectorAll("h4").innerText
    var productPrice = product.querySelectorAll(".new-price").innerText
    console.log(productImg)

    
}})
})

