function store(){
    var name = document.getElementById('email');
    var password= document.getElementById('password');

    if(name.value.length == 0){
        alert("Vui lòng điền email.");
    }else if(password.value.length == 0){
        alert("Vui lòng điền password.");
    }else if(name.value.length == 0 && password.value.length == 0){
        alert("Vui lòng điền email và password.");
    }
    else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('password',password.value);
        alert("Tạo tài khoản thành công.");
    }

}
function check(){
    var Sname= localStorage.getItem('name');
    var Spassword = localStorage.getItem('password');

    var Username =document.getElementById('Username');
    var Userpass = document.getElementById('Userpassword');
    var UserRMB = document.getElementById('rememberMe');

    if(Username.value == Sname && Userpass.value == Spassword){
        alert("Đăng nhập thành công.");
    }else{
        alert("Đăng nhập không thành công.");
    }
}

function print(){
    let name = localStorage.getItem('name');
    let pass = localStorage.getItem('password');
    document.getElementById("info").innerHTML ='<p>Username: '+name+'</p></br><p>Password: '+pass+'</p>' 
}
