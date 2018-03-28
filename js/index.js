//banner效果
{
    // $(".banner_img7").each(function (index) {
    //     $(".banner_img7").addClass("banner_img_active").siblings(".banner_img7").removeClass("banner_img_active");
    // })
    let banner = document.querySelectorAll(".banner_img7");
    let dian = document.querySelectorAll(".banner_page");
    let box = document.querySelector(".banner_img");
    dian.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < dian.length; i++) {
                dian[i].classList.remove("banner_page1");
                banner[i].classList.remove("banner_img_active");
            }
            this.classList.add("banner_page1");
            banner[index].classList.add("banner_img_active");
            n = index;
        }
    });
    let n = 0;
    function move() {
        n++;
        if (n === dian.length) {
            n = 0;
        }
        if (n < 0) {
            n = dian.length - 1;
        }
        for (let i = 0; i < dian.length; i++) {
            dian[i].classList.remove("banner_page1");
            banner[i].classList.remove("banner_img_active");
        }
        dian[n].classList.add("banner_page1");
        banner[n].classList.add("banner_img_active");
    }

    let t = setInterval(move, 3000);
    box.onmouseenter = function () {
        clearInterval(t);
    };
    box.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
}