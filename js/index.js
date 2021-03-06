window.onload = function() {
    var row = document.getElementById("row");
    var seat = document.getElementById("seat");
    var start = document.getElementById("start");
    var reset = document.getElementById("reset");
    var lucky = document.getElementById("lucky");
    var clear = document.getElementById("clear");
    var red = document.getElementById("red");
    var music = document.getElementById("music");
    var isOpera = true;
    var timer;

    //音乐播放
    red.onmouseover = function() {
        music.style.display = 'block';
    }

    red.onmouseout = function() {
        music.style.display = 'none';
    }

    start.onclick = function() {
        if (isOpera) {
            clearInterval(timer);
            timer = setInterval(function() {
                show();
            }, 50);

            start.innerHTML = "&nbsp;停止";
            start.style.backgroundColor = "#BD1B0A";
            start.style.borderColor = "#004490";
            isOpera = false;
        } else {
            start.innerHTML = "&nbsp;开始";
            start.style.backgroundColor = "#004490";
            start.style.borderColor = "#BD1B0A";
            isOpera = true;
            lucky.style.display = "block";
            clear.style.display = "block";

            var oDivs = document.createElement("div");
            oDivs.innerHTML = "第" + num1 + "排" + num2 + "号<span onclick='deleteDivs(this)'>-</span>";
            lucky.appendChild(oDivs);

            clearInterval(timer);
        }
    }

    reset.onclick = function() {
        clearInterval(timer);
        if (!isOpera) {
            start.innerHTML = "&nbsp;开始";
            start.style.backgroundColor = "#004490";
            start.style.borderColor = "#BD1B0A";
            isOpera = true;
        }
        row.innerHTML = "00";
        seat.innerHTML = "00";
    }
    clear.onclick = function () {
        clear.style.display = "none";
        lucky.style.display = "none";
        lucky.innerHTML = "";

        row.innerHTML = "00";
        seat.innerHTML = "00";
        clearInterval(timer);
        if (!isOpera) {
            start.innerHTML = "&nbsp;开始";
            start.style.backgroundColor = "#004490";
            start.style.borderColor = "#BD1B0A";
            isOpera = true;
        }
    }

    function show() {
        var rowNum = random(1, 12); //生成1-11排
        var seatNum;

        switch (rowNum) {
            case 6:
            case 7:
                seatNum = random(1, 12);
                break;
            case 10:
                seatNum = random(1, 17);
                break;
            case 11:
                seatNum = random(1, 20);
            default:
                seatNum = random(1, 14);
        }

        rowNum = doubleNum(rowNum);
        seatNum = doubleNum(seatNum);

        row.innerHTML = rowNum;
        seat.innerHTML = seatNum;

        num1 = rowNum;  num2 = seatNum;
    }

    function doubleNum(num) {
        if (num < 10) {
            num = "0" + num;
        }
        return num;
    }

    /**
     * 产生随机整数，包含下限值，但不包括上限值
     * @param {Number} lower 下限
     * @param {Number} upper 上限
     * @return {Number} 返回在下限到上限之间的一个随机整数
     */
    function random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }
}