$(document).ready(function(){
    (function() {
        $("#phone").mask("8(999) 999-99-99")
    }());

    (function(){
        var slideControls = document.querySelectorAll('li.slide__control'),
            submenuLinks = document.querySelectorAll('a.submenu__link'),
            length = slideControls.length,
            slides = document.querySelectorAll('li.slide');


        function showActiveSlide(Event)
        {
            var control,
                slide;
            for (var i=0; i<length; i++)
            {
                control = slideControls[i];
                slide = slides[i];
                if ((Event.target===control)||(Event.target===submenuLinks[i])) {
                    control.classList.add('slide__control_active');
                    slide.classList.add('slide_active');
                }
                else {
                    control.classList.remove('slide__control_active');
                    slide.classList.remove('slide_active');
                }
            }
        }

        for (var j=0; j<length; j++)
        {
            slideControls[j].addEventListener("click", showActiveSlide);
            submenuLinks[j].addEventListener("click", showActiveSlide);
        }
    }());

    (function () {
        var elems = document.querySelectorAll('.tabs__item');
        var links  = document.querySelectorAll('.linkforchef');

        function showTab(event){
            event.preventDefault();
            var $this;

            if ((event.target.className == "") || (event.target.classList.contains('tabs__link'))) {
              $this = event.target.parentElement;
            }
            else $this = event.target;

            var id = ($this.getAttribute('href'))||($this.querySelector('.tabs__link').getAttribute('href')),
                prevItem = document.querySelector('.tabs__item_active'),
                allItems = document.querySelectorAll('.tabs__item'),
                length = allItems.length;
                prevContent = document.querySelector('.tabs__content-item_active'),
                nextContent = document.querySelector(id);

            prevContent.classList.remove('tabs__content-item_active');
            nextContent.classList.add('tabs__content-item_active');
            prevItem.classList.remove('tabs__item_active');
            for (var i = 0; i < length; i++) {
                if (allItems[i].firstElementChild.getAttribute('href') == id) {
                    var nextItem = allItems[i];
                }
            }
            nextItem.classList.add('tabs__item_active');
        }

        for(var i = 0; i< elems.length; i++) {
            elems[i].addEventListener('click', showTab);
            links[i].addEventListener('click', showTab);
        }
    }());

    (function () {
        var elems = document.querySelectorAll('.acc__link'),
            length = elems.length;

        for(var item = 0; item < length; item++) {
            elems[item].addEventListener('click', function(event){
                event.preventDefault();
                var current;

                for (var i = 0; i < length; i++) {
                    current = elems[i];
                    if (current === event.target) {
                        setTimeout(function () {
                            event.target.classList.toggle('acc__link_active');
                            event.target.closest('.acc__item').classList.toggle('acc__item_active');
                        }, 300);
                    }
                    else {
                        current.classList.remove('acc__link_active');
                        current.closest('.acc__item').classList.remove('acc__item_active');
                    }
                }

            })
        }
    }());
    
    (function() {
        $('.trigger').on('click', function (event) {
            event.preventDefault();

            var $this = $(this),
                target = $this.attr('href'),
                top = $(target).offset().top;

            $('html,body').animate({
                scrollTop: top
            }, 500);
        })
    }());

    (function () {
        var myMap;
        ymaps.ready(init);

        function init () {
            myMap = new ymaps.Map('map', {
                center: [59.92111338788696, 30.308267835961054],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            });
            var myPlacemark = new ymaps.Placemark([59.92111338788696, 30.308267835961054], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'assets/images/map_icon.png',
                iconImageSize: [30, 42],
                iconImageOffset: [-3, -42]
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    }());
});