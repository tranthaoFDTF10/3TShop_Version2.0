//sicky navbar
var navbar = document.getElementById("navbarr");
var menu = document.getElementById("menu");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        /*Thuộc pageYOffsettính trả về các pixel mà tài liệu đã cuộn từ góc trên bên trái của cửa sổ. */
        /*Thuộc tính này cho biết khoảng cách của phần tử bạn chọn với phần tử cha của nó nó tính về phía trên, thông tin là số điểm ảnh pixel. */
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}

// menu navbar responsive
const navMenu = document.getElementById("list-menu");
const toggleMenu = document.getElementById("open");
const closeMenu = document.getElementById("close"); /*icon menu */

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show'); /*toggle có nghĩa là làm cho thuộc tính show hiện lên
    lam chu thanh menu nhỏ hiện lên */
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

//loader
let loading = document.getElementById("preloader");

window.addEventListener("load", function(){
    loading.style.display = "none";
})