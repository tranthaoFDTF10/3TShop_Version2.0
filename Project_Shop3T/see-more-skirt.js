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

