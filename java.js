let ham = document.querySelector('.ham');
        let cross = document.querySelector('.cross');
        let mobilenav = document.querySelector('.mobile-nav')

        ham.addEventListener('click', function(){
            mobilenav.classList.add('open');
        });

        cross.addEventListener('click', function(){
            mobilenav.classList.remove('open');
        });