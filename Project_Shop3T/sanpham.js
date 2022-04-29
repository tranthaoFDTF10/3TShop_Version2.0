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


    const slider = document.querySelector(".slider-product");
    const sliderMain = document.querySelector(".slider-product__wrapper__main");
    const sliderItems= document.querySelectorAll(".slider-product__wrapper__main__item")
    const nextBtn = document.querySelector(".slider-product__btn--next");
    const prevBtn = document.querySelector(".slider-product__btn--prev");
    const dotItems = document.querySelectorAll(".slider-product__dot__item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    console.log(sliderItemWidth);
    let positionX = 0;
    let index = 0;

    // let i = 0;
    // for(i=0; i<=5; i++){
    //     if(i==5){
    //         i=0;
    //         index=0;
    //     }
    //     handleChangeSlider(1);
    // };
//end statistical
    
// product-slider
    nextBtn.addEventListener("click", function(){
        handleChangeSlider(1);
    });
    
    prevBtn.addEventListener("click", function(){
        handleChangeSlider(-1);
    });
    
    [...dotItems].forEach((item) => 
    item.addEventListener("click", function(e){
        [...dotItems].forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        const sliderIndex=parseInt(e.target.dataset.index);
        index=sliderIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;   
        })
    );

    function handleChangeSlider(direction){
        if (direction === 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        } else if (direction === -1) {
            if (index <= 0) {
                index=0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index-- ;
        }
            [...dotItems].forEach((el) => el.classList.remove("active"));
            dotItems[index].classList.add("active");
    }

//end product-slider

// slidebar-funnel
const menu_toggle =  document.querySelector('.sidebar-funnel__nav__menu-toggle');
        const navigation = document.querySelector('.sidebar-funnel__nav');
        menu_toggle.onclick = function(){
            navigation.classList.toggle('active');
        }

        const li = document.querySelectorAll('.li');
        const textt2 = document.querySelectorAll('.textt2');

        textt2[0].onclick = function(){
            li[0].classList.toggle('active');
        };

        textt2[1].onclick = function(){
            li[1].classList.toggle('active');
        };

        textt2[2].onclick = function(){
            li[2].classList.toggle('active');
        };

        textt2[3].onclick = function(){
            li[3].classList.toggle('active');
        };

        textt2[4].onclick = function(){
            li[4].classList.toggle('active');
        };

        textt2[5].onclick = function(){
            li[5].classList.toggle('active');
        };
// end sidebar-funnel
});
