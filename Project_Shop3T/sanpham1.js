//shopping cart
let carts = document.querySelectorAll('.add-cart');
let ds = document.querySelectorAll('.box-product');
let tensp = document.querySelectorAll('.details__name');
let giasp =  document.querySelectorAll('.new-price');
let idsp = document.querySelectorAll('.idsp');
let imgsp = document.querySelectorAll('.linkimg');

var sp = {};
var products = [];

// tao chuoi JSON
for(let i = 0; i < ds.length; i++){
    sp.id = parseInt(idsp[i].textContent);
    sp.name = tensp[i].textContent;
    sp.price = parseInt(giasp[i].textContent.split('.').join(''));
    sp.inCart = 0;
    sp.linkimg = imgsp[i].getAttribute("src");
    products.push({...sp}); // copy nguyen mang va them phan tu vao array
}

console.log(products);

// let a = '1.770.000';
// // a = a.replace(/./g, '').trim();
// a = a.split('.').join('');
// a = parseInt(a);
// console.log(a);
// console.log(typeof a);


// let products = [
//     {
//         id: 1,
//         linkimg: "shoe1",
//         name: "NIKE ATD4F",
//         tag: "nikeatd4f",
//         price: 10,
//         inCart: 0
//     },
//     {
//         id: 2,
//         linkimg: "shoe2",
//         name: "NIKE T5RUP",
//         tag: "niket5rup",
//         price: 15,
//         inCart: 0
//     },
//     {
//         id: 3,
//         linkimg: "shoe3",
//         name: "NIKE RT56IO",
//         tag: "nikert56io",
//         price: 20,
//         inCart: 0
//     },
//     {
//         id: 4,
//         linkimg: "shoe4",
//         name: "NIKE MNI95",
//         tag: "nikemni95",
//         price: 25,
//         inCart: 0
//     }
// ];

for(let i = 0; i< carts.length; i++){
    carts[i].addEventListener('click', () => { // Mỗi lần ấn nút add to cart gọi 2 hàm
        cartNumbers(products[i]); // hàm tăng số lượng
        totalCost(products[i]); // hàm tính tổng giá tiền
    })
}

function onLoadCartNumbers() { // hàm cập nhật và hiển thị số lượng
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.count').textContent = productNumbers;
    }
}

function cartNumbers(product) { // hàm tăng số lượng
    let productNumbers = localStorage.getItem('cartNumbers'); // lấy biến số lượng trong LocalStoage
    productNumbers = parseInt(productNumbers); // chuyển đổi sang kiểu số nguyên

    // let cartItems = localStorage.getItem('productsInCart');
    // cartItems = JSON.parse(cartItems);

    // if( action ) {
    //     localStorage.setItem("cartNumbers", productNumbers - 1);
    //     document.querySelector('.count').textContent = productNumbers - 1;
    //     console.log("action running");
    // } else 
    if( productNumbers ) { // nếu đã có biến đêm
        localStorage.setItem("cartNumbers", productNumbers + 1); // tăng 1
        document.querySelector('.count').textContent = productNumbers + 1; // tăng chỉ số hiển thị
    } else { // nếu không tồn tại thì lưu vào với giá trị 1
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.count').textContent = 1;
    }
    setItems(product); // gọi hàm tăng số lượng từng sản phẩm cụ thể
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart'); // lấy biến chứa array các sản phẩm đã được thêm vào
    cartItems = JSON.parse(cartItems); // chuyển thành chuỗi JSON

    if(cartItems != null){ // đã tồn tại
        if(cartItems[product.id] == undefined){ // nếu sản phẩm mới chưa được định nghĩa
            cartItems = {  // copy mảng và thêm sản phẩm theo id
                ...cartItems,
                [product.id]: product
            }
        }
        cartItems[product.id].inCart += 1; // cập nhật số lượng tương ứng từng sản phẩm
    }else{ // không tồn tại
        product.inCart = 1; // cập nhật số lượng sau lần đầu click là 1;
        cartItems = {
            [product.id]: product //thêm sản phẩm đó vào
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); // lưu trở lại vào localStorage
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost'); 
    if(cartCost !=null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');

    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item) => { //thực hiện công việc cho tất cả các đối tượng cartItems với công việc 
            productContainer.innerHTML +=         //trong map được chỉ bởi funciotn thêm vào thẻ productContainer bên giohang.html
            `<div class="product">
                <span hidden>${item.id}</span>
                <ion-icon name="close-circle"></ion-icon>
                <img src="${item.linkimg}"/>
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">${item.price}&#8363</div>
            <div class="quantity">
                <span>${item.inCart}</span>   
            </div>
            <div class="total">${item.inCart * item.price}&#8363</div>`;
        });

        //in tong gia tien va nut thanh toán
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">${cart}&#8363</h4>
                <div href="#" class="buy-btn btn-checkout">Thanh toán</div>
            </div>`
        deleteButtons(); // goi hàm xóa
        checkOut(); // gọi hàm thanh toán tất cả
    }
}

function deleteButtons() { // hàm xóa, khi ấn vào nút x bên giỏ hàng thì thực hiện công việc xóa
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productId;
    // console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productId = deleteButtons[i].parentElement.children[0].textContent.toLocaleLowerCase().replace(/ /g,'').trim(); //chọn id để xóa

            // console.log(productId);
            // console.log(cartItems[productId]);
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productId].inCart); // tính lại số lượng sản phẩm còn lại trong giỏ hàng
            localStorage.setItem('totalCost', cartCost - ( cartItems[productId].price * cartItems[productId].inCart)); // tính lại tổng giá tiền

            delete cartItems[productId]; // xóa theo id
            localStorage.setItem('productsInCart', JSON.stringify(cartItems)); // sau khi xóa một phần tử cập nhật lại localStroge

            displayCart();
            onLoadCartNumbers();
        })
    }
}

function checkOut(){ // thanh toán hay xóa toàn bộ sản phẩm
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let checkOutBtn = document.querySelector('.btn-checkout');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productId;

    checkOutBtn.addEventListener('click', () => { // thêm sự kiện khi ấn nút thanh toán
        for(let i = 0; i < deleteButtons.length; i++){ // xóa toàn bộ sản phẩm trong giỏ hàng
            productId = deleteButtons[i].parentElement.children[0].textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(productId);
            delete cartItems[productId];
        }

        // cập nhật lại các chỉ số
        localStorage.setItem('totalCost', 0);
        localStorage.setItem('cartNumbers', 0);
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        displayCart();
        onLoadCartNumbers();
        alert('Cảm ơn bạn đã mua hàng.');
    })
}

onLoadCartNumbers();
displayCart();
//end shopping cart
