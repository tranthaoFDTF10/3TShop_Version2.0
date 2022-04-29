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