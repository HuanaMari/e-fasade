function Kalkulator() {
    this.materialsArray = [];
    this.business = new BusinessLayer();

    this.square = function (length, height) {
        square = length * height;
        return square
    };

    this.materialsCalc = function () {
        console.log("m2= " + square);

        var vrskaU = Math.floor(0.25 * square);
        console.log("vrska U = " + vrskaU);

        var lepak = 5 * square;
        console.log("lepak za lepenje = " + lepak);

        var stiropor = 1 * square;
        console.log("stiropor = " + stiropor);

        var tipla = 5 * square;
        console.log("tipla = " + tipla);

        var mreza = 1 * square;
        console.log("mreza = " + mreza);

        var lepakZaMreza = 4 * square;
        console.log("lepak za mreza = " + lepakZaMreza);

        var grund = Math.floor(0.25 * square);
        console.log("premaz za grundiranje = " + grund);

        var abrib = Math.floor(2.8 * square);
        console.log("dekorativen malter = " + abrib);

        this.materialsArray.push(vrskaU, lepak, stiropor, tipla, mreza, lepakZaMreza, grund, abrib);
    };
    this.createInput = () => {
        //    -- header starts--
        var header = $('<div>').attr('class', 'header');

        var logo = $('<div>').attr('class', 'headerImg');
        logo.append($('<img>').attr('src', 'logo1.png').attr('class', 'logo'));
        header.append(logo);
        var hamburger = $('<p>').attr('id', 'hamburger').html('<i class="fas fa-bars"></i>');
        var headerlist = ($('<ul>').attr('class', 'header-list'));

        var headerList = ['галерија', 'калкулатор', 'контакт', 'за нас'];
        for (var i = 0; i < headerList.length; i++) {
            headerlist.append($('<li>').attr('class', 'headerList headerList-' + i).text(headerList[i]));
        }

        logo.append(headerlist);

        logo.append(hamburger);

        $(hamburger).on('click', () => {
            if ($('.header-list').css('display') === 'block') {
                $('.header-list').css('display', 'none')
            }
            else {
                $('.header-list').css('display', 'block')
            }


        });

        var faFa = $('<div>').attr('class', 'fonts');
        var insta = $('<p>').attr('class', 'fab fa-instagram');
        faFa.append(insta);

        $(insta).on('click', () => {
            window.open('https://www.instagram.com/');
        });

        var face = $('<p>').attr('class', 'fab fa-facebook-f')

        faFa.append(face);
        $(face).on('click', () => {
            window.open('https://www.facebook.com/');
        });
        $(header).append(faFa);

        var container = $('<div>').attr('class', 'container');
        // -- Home Page --
        homePage = () => {
            var startNa = $('<div>').attr('class', 'startNa');
            var box30 = $('<div>').attr('class', 'box30');
            var fadeBackDiv = $('<div>').attr('class', 'fadeBackDiv');
            var firstH = $('<h4>').attr('class', 'firstH').text('Брза');
            var secondH = $('<h4>').attr('class', 'secondH').text('Квалитетна');
            var thirdH = $('<h4>').attr('class', 'thirdH').text('Декоративна');
            var box70 = $('<div>').attr('class', 'box70');

            $(box30).append(fadeBackDiv);
            $(box30).append(firstH);
            $(box30).append(secondH);
            $(box30).append(thirdH);

            $(startNa).append(box30);

            $(startNa).append(box70);

            $(container).append(startNa);
        }
        // -- kalkulator --
        kalkulatorO = () => {
            var kompletnaPresmetka = $('<p>').attr('class', 'kompletnaPresmetka').text('..');
            var gifDiv = $('<div>').attr('class', 'gifDiv');

            var gif = $('<img>').attr('src', 'https://thumbs.gfycat.com/RichOilyKentrosaurus.webp');
            $(gifDiv).append(gif);
            var inputHolder = $('<div>').attr('class', 'box60 inputHolder');

            $(inputHolder).append(gifDiv);

            var calcDiv = $('<div>').attr('class', 'calcDiv');
            var calcHeadingDiv = $('<div>');
            var calcHeading = ($('<h3>').attr('class', 'heading').text('Калкулатор за фасада'));
            calcHeadingDiv.append(calcHeading);
            $(inputHolder).append(calcHeadingDiv);

            var inputNames = $('<div>').attr('class', 'inputNames');
            calcDiv.append(inputNames);

            var box50 = $('<div>').attr('class', 'inputi');

            var houseLength = $('<p>').attr('class', 'houseLength').text('Внеси вкупна должина');
            var height = $('<p>').attr('class', 'height').text('Внеси висина');
            box50.append(houseLength);
            box50.append(height);

            inputNames.append(box50);

            var inputs = $('<div>').attr('class', 'inputs');
            inputNames.append(inputs);

            var lengthInput = $('<input type="text" />').attr('id', 'length');
            var heightInput = $('<input type="text"/>').attr('id', 'height');
            inputs.append(lengthInput);
            inputs.append(heightInput);

            var calc = $('<div>').attr('class', 'calcHolder');
            calcDiv.append(calc);

            var names = $('<div>').attr('class', 'secondPart');
            calc.append(names);

            var materialsNames = ['Вкупна површина', 'Врска У', 'Лепак за лепење', 'Стиропор', 'Пластична типла ', 'Мрежа', 'Лепак за мрежа', 'Премаз за грундирање', 'Декоративен малтер'];
            for (var i = 0; i < materialsNames.length; i++) {
                names.append($('<li>').attr('class', 'materialsNames').text(materialsNames[i]));
            }

            var values = $('<div>').attr('class', 'values');
            var list1 = $('<ul>').attr('class', 'list1');

            list1.append($('<p>').attr('class', 'total').text('...'));

            for (var i = 0; i < 8; i++) {
                list1.append($('<li>').attr('class', 'materialsValcalc-' + i).text('..'));
            }

            values.append(list1);
            var list2 = $('<ul>').attr('class', 'list2');
            var materialsValue = ['м²', 'л.', 'кг.', 'м²', 'ком.', 'м²', 'кг', 'л.', 'кг.'];
            for (var i = 0; i < materialsValue.length; i++) {

                list2.append($('<li>').attr('class', 'materialsValue').text(materialsValue[i]));
            }
            values.append(list2);

            calc.append(values);
            var btnToCalc = $('<button>').attr('id', 'btn').text('Пресметај');

            // $(calcDiv).append(btnToCalc);

            $(inputHolder).append(calcDiv);
            $(container).append(inputHolder);

            $(btnToCalc).on('click', () => {

                var zemiDolzina = lengthInput.val();
                var zemiShirina = heightInput.val();
                this.square(zemiDolzina, zemiShirina);
                this.materialsCalc();
                lengthInput.val('');
                heightInput.val('');
                $('.total').text(square);

                for (var i = 0; i < this.materialsArray.length; i++) {
                    $('.materialsValcalc-' + i).text(this.materialsArray[i]);
                }
                this.materialsArray = [];
                console.log(zemiDolzina, zemiShirina);
                console.log(this.materialsArray);

                var debelina = zaDebelina(square);
                var abrib = zaAbrib(square);
                $(kompletnaPresmetka).text(debelina + abrib + ' €');
            })
            // -- kalkulator za izvedba --
            $('<hr>');
            $(inputHolder).append($('<hr>'));

            var heading = ($('<h3>').attr('class', 'heading').text('Калкулатор за изведба на демит фасада'));
            $(inputHolder).append(heading);

            var arrayForThickness = ['д = 5 cm', 'д = 8 cm', 'д = 10 cm'];
            var izvedba = $('<div>').attr('class', 'izvedba');

            var thicknessDiv = $('<div>').attr('class', 'thicknessDiv');
            $(izvedba).append(thicknessDiv);

            for (var i = 0; i < 3; i++) {
                var btnTochooseThickness = $('<input type="radio" name="cm"/>').attr('class', 'btnTochooseThickness btnTochooseThickness-' + i);
                var thicknessValue = $('<p>').attr('class', 'thicknessValue').text(arrayForThickness[i]);
                var thValDiv = $('<div>').attr('class', 'holderce');

                $(thValDiv).append(btnTochooseThickness);
                $(thValDiv).append(thicknessValue);
                $(thicknessDiv).append(thValDiv);
            }
            var mortarArray = ['Пластичен абриб', 'Минерален абриб'];

            var mortarDiv = $('<div>').attr('class', 'abrib');
            $(izvedba).append(mortarDiv);

            for (var i = 0; i < 2; i++) {

                var mortarBtn = $('<input type="radio" name="mortar"/>').attr('class', 'mortarBtn mortarBtn-' + i);
                var mortarValue = $('<p>').attr('class', 'mortarValue').text(mortarArray[i]);
                var mtrValDiv = $('<div>').attr('class', 'holderce');

                $(mtrValDiv).append(mortarBtn);
                $(mtrValDiv).append(mortarValue);
                $(mortarDiv).append(mtrValDiv);
            }
            $(izvedba).append(kompletnaPresmetka);
            $(inputHolder).append(izvedba);

            zaDebelina = (parametar) => {
                if ($('.btnTochooseThickness-0').is(':checked')) {
                    var total = parametar * 8;
                    console.log(total);
                    return total;
                }
                else if ($('.btnTochooseThickness-1').is(':checked')) {
                    var total = parametar * 10;
                    console.log(total);
                    return total;
                }
                else if (
                    $('.btnTochooseThickness-2').is(':checked')) {
                    var total = parametar * 14;
                    console.log(total);
                    return total;
                }
                // else {
                //     alert('изберете дебелина и малтер');
                // }
            };
            zaAbrib = (parametar2) => {
                if ($('.mortarBtn-0').is(':checked')) {
                    var total = parametar2 * 4;
                    console.log(total);
                    return total;
                }
                else if ($('.mortarBtn-1').is(':checked')) {
                    var total = parametar2 * 2;
                    console.log(total);
                    return total;
                }
            }
            $(izvedba).append(btnToCalc);
        }
        // -- gallery --
        gallery = () => {
            var galleryDiv = $('<div>').attr('class', 'galleryDiv');
            var gallery = $('<div>').attr('class', 'box60 gallery');
            gallery.append($('<h3>').attr('class', 'heading').text('Галерија'));

            var imageHolder = $('<div>').attr('class', 'imageHolder');
            for (var i = 0; i < pictureArray.length; i++) {
                imageHolder.append($('<img>').attr('src', pictureArray[i]).attr('class', 'picsForGallery-' + i));
            };

            var popupImgDiv = $('<div>').attr('class', 'popupImgDiv');
            var previousDiv = $('<div>').attr('class', 'previousDiv');
            var previousArrow = $('<p>').attr('class', 'previousArrow').html('<i class="fas fa-caret-left"></i>');
            var nextDiv = $('<div>').attr('class', 'nextDiv');
            var nextArrow = $('<p>').attr('class', 'nextArrow').html('<i class="fas fa-caret-right"></i>');
            var popUpImg = $('<img>');

            $(popupImgDiv).append(previousDiv);
            $(previousDiv).append(previousArrow);

            $(popupImgDiv).append(popUpImg);
            $(popupImgDiv).append(nextDiv);
            $(nextDiv).append(nextArrow);

            gallery.append(imageHolder);
            $(galleryDiv).append(gallery);
            $(container).append(galleryDiv);
            $(galleryDiv).append(popupImgDiv);

            var khcb = $('.imageHolder').children('img');

            $(khcb).on('click', event => {
                var popupImageSrc = $(event.target).attr('src');
                popUpImg.attr('src', popupImageSrc).attr('class', $(event.target).attr('class'));
                console.log(popUpImg);
            });

            $(previousArrow).on('click', () => {
                var picture = popupImgDiv.children('img').attr('class');
                var picture1 = picture.split('-');
                var index = parseInt(picture1[1]) - 1;
                if (index < 0) {
                    index = 5;
                }
                popupImgDiv.children('img').attr('src', $('.picsForGallery-' + index).attr('src')).attr('class', 'picsForPopup-' + index);
            });
            $(nextArrow).on('click', () => {
                var picture = popupImgDiv.children('img').attr('class');
                var picture1 = picture.split('-');
                var index = parseInt(picture1[1]) + 1;
                if (index > 5) {
                    index = 0;
                }
                popupImgDiv.children('img').attr('src', $('.picsForGallery-' + index).attr('src')).attr('class', 'picsForPopup-' + index);
            })
        }
        // -- About Us -- 

        aboutUs = () => {
            var aboutUsHolder = $('<div>').attr('class', 'box60 aboutUsHolder');
            var aboutUs = $('<div>').attr('class', 'aboutUs');

            aboutUs.append($('<h3>').attr('class', 'heading').text('За Нас'));
            aboutUs.append($('<p>').attr('class', 'aboutParagraph').text('Следејќи го светскиот тренд во градежништвото и општо во работењето М.К. разви нова приказна во своето постоење.'));
            aboutUs.append($('<p>').attr('class', 'aboutParagraph').text('Сеедено да ли се работи за приватна куќа, нов стан или пак адаптирање на постоечкиот простор- нашите системи земаат активно учество во сите активности од градежен карактер.Квалитет за сите професионалци како и хоби изведувачи, гаранција за квалитетот, сервис и резервни делови, достава до Вашиот дом.'));
            aboutUs.append($('<p>').attr('class', 'aboutParagraph').text('Работиме напорно, инвестираме во врвна опрема, соработуваме исклучиво со најквалитетните и веќе докажани брендови во оваа област.Но најважно од се, инвестираме во човечките ресурси, вработувајки искусни и докажани мајстори во својата област, поддржани од тим на млади, креативни и амбициозни луѓе. Целиме кон што повеќе задоволни клиенти и успешно завршени проекти кои ќе постават нови естетски и квалитативни стандарди во градежништвото'));
            aboutUs.append($('<p>').attr('class', 'aboutParagraph').text('Во M.K. работат исклучиво мајстори кои ги имаат поминато курсевите организирани од Кнауф, се здобиени со сертификат за квалитетна изведба на работата, поделени во групи, секоја со одговорен мајстор, спремни за нови предизвици'));
            aboutUs.append($('<p>').attr('class', 'aboutParagraph').text('Вашиот дом и деловен простор заслужуваат модерен и урбан изглед.'));
            aboutUs.append($('<p>').attr('class', 'aboutParagraph').text('M.K. Ви посакува добредојде во светот на модерното градежништво'));

            $(aboutUsHolder).append(aboutUs);
            $(container).append(aboutUsHolder);
        }

        // -- kontakt--
        contact = () => {
            var contactDiv = $('<div>').attr('class', 'contactDiv');

            var contactForm = $('<div>').attr('class', 'box50 contactForm');
            contactForm.append($('<h3>').attr('class', 'heading').text('Контакт'));

            var contactFormHolder = $('<div>').attr('class', 'contactFormHolder');

            contactFormHolder.append($('<p>').attr('class', 'contatFormP').text(' Доколку сакате да знаете повеќе за нас и нашите услуги или имате прашања, слободно пополнете ја формата за контакт и ќе Ви возвратиме во најбрз временски период'));
            contactFormHolder.append($('<input type="text" name="Name">').attr('class', 'formName-0').attr('placeholder', 'Име'));
            contactFormHolder.append($('<input type="text" name="SurName">').attr('class', 'formName-1').attr('placeholder', 'Презиме'));
            contactFormHolder.append($('<input type="text" name="Number">').attr('class', 'formName-2').attr('placeholder', 'Тел. број'));
            contactFormHolder.append($('<input type="text" name="e-mail">').attr('class', 'formName-3').attr('placeholder', 'е-пошта'));

            contactForm.append(contactFormHolder);

            contactFormHolder.append($('<textarea rows="10" cols="50">').attr('class', 'formName-4').attr('placeholder', 'Порака'));

            contactFormHolder.append($('<button>').attr('id', 'btn2').text('Испрати'));
            var contactMap = $('<div>').attr('class', 'box50 contactMap');
            contactMap.append($('<p>').attr('class', 'mapP').text('Доколку сакате да дознаете повеќе побарајте нé на нашите контакт телефони:'));
            contactMap.append($('<p>').attr('class', 'mapP').attr('id', 'phone').html('<i class="fas fa-phone-alt"></i>' + ' 032/481-666'));
            contactMap.append($('<p>').attr('class', 'mapP').text('или посетете не на нашата локација'));
            contactMap.append($('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23720.85334430848!2d22.15854382990202!3d41.997986263217186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1355bc388ee2e001%3A0x65d188e8fa1c6d89!2z0J_RgNC-0LHQuNGI0YLQuNC_!5e0!3m2!1smk!2smk!4v1568049617682!5m2!1smk!2smk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'));

            $(contactDiv).append(contactForm);
            $(contactDiv).append(contactMap);
            $(container).append(contactDiv);

            $('#btn2').on('click', () => {
                var inputInfo = {
                    name: $('.formName-0').val(),
                    lastName: $('.formName-1').val(),
                    phone: $('.formName-2').val(),
                    mail: $('.formName-3').val(),
                    message: $('.formName-4').val()
                }
                localStorage.setItem("KUZMANOSKA", JSON.stringify(inputInfo));
            })
        }
        // -- footer -- 
        this.footer = () => {
            var footer = $('<div>').attr('id', 'footer');
            var sorabotnici = $('<div>').attr('class', 'sorabotnici');

            var karmen = $('<div>').attr('class', 'sorabotnik');
            karmen.append($('<h4>').attr('class', 'h4').text('Кармен Бауцентар'));
            karmen.append($('<p>').attr('class', 'paragraf').html('<i class="fas fa-phone-alt"></i>' + '  02 309 6030'));
            karmen.append($('<p>').attr('class', 'paragraf').html('<i class="far fa-envelope"></i>' + ' info@baucentar.com.mk'));


            var ading = $('<div>').attr('class', 'sorabotnik');
            ading.append($('<h4>').attr('class', 'h4').text('Адинг '));
            ading.append($('<p>').attr('class', 'paragraf').html('<i class="fas fa-phone-alt"></i>' + '  02 20 34 820'));
            ading.append($('<p>').attr('class', 'paragraf').html('<i class="far fa-envelope"></i>' + ' ading@ading.com.mk'));

            var pofix = $('<div>').attr('class', 'sorabotnik');
            pofix.append($('<h4>').attr('class', 'h4').text('Пофикс'));
            pofix.append($('<p>').attr('class', 'paragraf').html('<i class="fas fa-phone-alt"></i>' + '  070 329173'));
            pofix.append($('<p>').attr('class', 'paragraf').html('<i class="far fa-envelope"></i>' + ' info@pofix.com'));

            var hromak = $('<div>').attr('class', 'sorabotnik');
            hromak.append($('<h4>').attr('class', 'h4').text('Хромак'));
            hromak.append($('<p>').attr('class', 'paragraf').html('<i class="fas fa-phone-alt"></i>' + '  031 451-303'));
            hromak.append($('<p>').attr('class', 'paragraf').html('<i class="far fa-envelope"></i>' + ' info@hromak.com.mk'));

            var meni = $('<div>').attr('class', 'footerMeni');

            var mK = $('<div>').attr('class', 'mK');
            mK.append($('<img>').attr('class', 'footerLogo').attr('src', 'logo1.png'));

            sorabotnici.append(karmen);
            sorabotnici.append(ading);
            sorabotnici.append(pofix);
            sorabotnici.append(hromak);

            footer.append(meni);
            footer.append(mK);

            footer.append($('<h3>').attr('class', 'footerHeading').text('Соработници'));
            footer.append(sorabotnici);


            for (var i = 0; i < headerList.length; i++) {
                meni.append($('<li>').attr('class', 'headerList headerList-' + i).text(headerList[i]));
            }
            $('body').append(footer);
        }
        $('body').append(header);
        $('body').append(container);

        homePage();

        var home = $('.logo');
        $(home).on('click', () => {
            container.html('');
            homePage();
        })

        var aboutUsSelector = $('.headerList-3');
        $(aboutUsSelector).on('click', () => {
            container.html('');
            aboutUs();
        });

        var gallerySelector = $('.headerList-0');
        $(gallerySelector).on('click', () => {
            container.html('');
            gallery();
        });

        var calcSelector = $('.headerList-1');
        $(calcSelector).on('click', () => {
            container.html('');
            kalkulatorO();
        });

        var contactSelector = $('.headerList-2');
        $(contactSelector).on('click', () => {
            container.html('');
            contact();
        });
    }
    var body = $("body");

    var weatherDiv = $("<div>").attr('class', 'weatherDiv');
    body.append(weatherDiv);
    this.displayWeatherDetails = async (searchedCity) => {
        var weatherDetails = await this.business.resolveWeatherApiData(searchedCity);

        var weatherTempDiv = $("<div>").attr('class', 'weatherTempDiv').text(weatherDetails.currentTemp + " C⁰");
        var weatherCityNameDiv = $("<div>").attr('class', 'weatherCityNameDiv').text(weatherDetails.currentCity);
        var weatherImage = $("<img>").attr('class', 'weatherImage').attr("src", "http://openweathermap.org/img/w/" + weatherDetails.weatherIcon + ".png");

        var searchBtn = $('<p>').attr('class', 'searchBtn').text('Пребарај град');
        weatherDiv.append(searchBtn);


        $('.searchBtn').on('click', () => {
            $('.wInput').css('display', 'block');
        })

        weatherDiv.append(weatherCityNameDiv);
        weatherDiv.append(weatherTempDiv);
        weatherDiv.append(weatherImage);
        console.log(weatherDetails);
    };

    this.displayInput = () => {
        
        var input = $("<input>").attr('class', 'wInput');
        $('body').append(input);
      
        $(document).on('keypress', (event) => {
            var searchedCity = $(input).val();
            if (event.which == 13) {
                weatherDiv.html(' ');
                this.displayWeatherDetails(searchedCity);
                $(input).val('');
                input.css('display','none');
            }
            
        });
    };

    // // -- weatherAnimationDiv -- 
    // var weatherHolder = $('<div>').attr('class', 'weatherHolder');
    // this.display10Cities = async () => {

    //     var weatherAnimationDiv = $('<div>').attr('class', 'weatherAnimationDiv');
    //     var weatherAnimationDiv2 = $('<div>').attr('class', 'weatherAnimationDiv2');

    //     var arrayOfCities = ['probishtip', 'veles', 'strumica', 'shtip', 'ohrid', 'gevgelija', 'berovo', 'prilep', 'bitola', 'kumanovo'];
    //     for (var i = 0; i < arrayOfCities.length; i++) {
    //         var weatherDetails = await this.business.resolveWeatherApiData(arrayOfCities[i]);

    //         var weatherTempDiv = $("<div>").attr('class', 'weatherTempDiv').text(weatherDetails.currentTemp + " C⁰");
    //         var weatherCityNameDiv = $("<div>").attr('class', 'weatherCityNameDiv').text(weatherDetails.currentCity);
    //         var weatherImage = $("<img>").attr('class', 'weatherImage').attr("src", "http://openweathermap.org/img/w/" + weatherDetails.weatherIcon + ".png");

    //         weatherAnimationDiv.append(weatherCityNameDiv);
    //         weatherAnimationDiv.append(weatherTempDiv);
    //         weatherAnimationDiv.append(weatherImage);

    //         console.log(weatherDetails);
    //     }
    //     for (var i = 0; i < arrayOfCities.length; i++) {
    //         var weatherDetails = await this.business.resolveWeatherApiData(arrayOfCities[i]);

    //         var weatherTempDiv = $("<div>").attr('class', 'weatherTempDiv').text(weatherDetails.currentTemp + " C⁰");
    //         var weatherCityNameDiv = $("<div>").attr('class', 'weatherCityNameDiv').text(weatherDetails.currentCity);
    //         var weatherImage = $("<img>").attr('class', 'weatherImage').attr("src", "http://openweathermap.org/img/w/" + weatherDetails.weatherIcon + ".png");

    //         weatherAnimationDiv2.append(weatherCityNameDiv);
    //         weatherAnimationDiv2.append(weatherTempDiv);
    //         weatherAnimationDiv2.append(weatherImage);

    //         console.log(weatherDetails);
    //     }

    //     weatherHolder.append(weatherAnimationDiv);
    //     weatherHolder.append(weatherAnimationDiv2);
    // }
    // $('body').append(weatherHolder);

}


