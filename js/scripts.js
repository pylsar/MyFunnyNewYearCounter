        let text = document.querySelector("#timer");

        function showTime(){
            let now = new Date();
            let party = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0); // Новый год
            // let party = new Date(now.getFullYear() + 0, 11, 27, 18, 0, 0, 0); // до бухыча
            // let party = new Date(now.getFullYear() + 0, 11, 26, 11, 57, 0, 0); // тест
            let result = party.getTime() - now.getTime();
            text.innerText = result;
                setTimeout(showTime, 1);


            // оставляем нули при уменьшении числа
            if(result < 1){
                text.innerText = "000000000";
                document.body.style.backgroundImage = "url('https://vgif.ru/gifs/145/vgif-ru-19231.gif')";
                text.classList.add("blinkanim");
            }else if(result < 10){
                text.innerText = "00000000" + result;
            }else if(result < 100){
                text.innerText = "0000000" + result;
            }else if(result < 1000){
                text.innerText = "000000" + result;
            }else if(result < 10000){
                text.innerText = "00000" + result;
            }else if(result < 100000){
                text.innerText = "0000" + result;
            }else if(result < 1000000){
                text.innerText = "000" + result;
            }else if(result < 10000000){
                text.innerText = "00" + result;
            }else if(result < 100000000){
                text.innerText = "000" + result;
            }
        }
        showTime();
// для рандомного вывода
if (document.body.style.backgroundImage != "url('https://vgif.ru/gifs/145/vgif-ru-19231.gif')") {
            function SetImage() {
                function getRandomInRange(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                if (getRandomInRange(1, 11) == 1) {
                    document.body.style.backgroundImage = "url('https://gif5gif.ucoz.ru/_ph/94/56044042.gif')";
                } else if (getRandomInRange(1, 11) == 2) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377181053439.gif')";
                } else if (getRandomInRange(1, 11) == 3) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377203881544.gif')";
                } else if (getRandomInRange(1, 11) == 4) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377162227937.gif')";
                } else if (getRandomInRange(1, 11) == 5) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377162228895.gif')";
                } else if (getRandomInRange(1, 11) == 6) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377208485406.gif')";
                } else if (getRandomInRange(1, 11) == 7) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377208483745.gif')";
                } else if (getRandomInRange(1, 11) == 8) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377208484510.gif')";
                } else if (getRandomInRange(1, 11) == 9) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377208481295.gif')";
                } else if (getRandomInRange(1, 11) == 10) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377208485723.gif')";
                } else if (getRandomInRange(1, 11) == 11) {
                    document.body.style.backgroundImage = "url('https://cs.pikabu.ru/images/previews_comm/2012-05_5/13377208488351.gif')";
                }
                setTimeout(SetImage, 3000);
            }

            SetImage();
        }