window.addEventListener("load", function(){
//statistical
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
    setInterval(() => {
      if(counter1 == 900){
        clearInterval();
      }else{
        counter1+= 9;
        number1.innerHTML = "> " + counter1 + "sp";
      }

      if(counter2 == 500){
        clearInterval();
      }else{
        counter2+= 5;
        number2.innerHTML = "> " + counter2 + "sp";
      }

      if(counter3 == 700){
        clearInterval();
      }else{
        counter3+= 7;
        number3.innerHTML = "> " + counter3 + "sp";
      }
    }, 70);


//chuyen slide san pham
let counter4 = 1;
this.setInterval(function(){
  document.getElementById('radio' + counter4).checked = true;
  counter4++;
  if(counter4 > 8){
    counter4=1;
  }
},3000);
//end chuyen slide san pham

// slidebar-funnel
const menu_toggle =  document.querySelector('.sidebar-funnel__nav__menu-toggle');
        const navigation = document.querySelector('.sidebar-funnel__nav');
        menu_toggle.onclick = function(){
            navigation.classList.toggle('active');
        }

        const li = document.querySelectorAll('.li');
        const textt2 = document.querySelectorAll('.textt2');

        for(let j = 0; j < textt2.length; j++){
            textt2[j].onclick = function(){
               li[j].classList.toggle('momenu');
            }
        }
// ed sidebar-funnel
});


