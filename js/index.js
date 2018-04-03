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
//banner 导航效果
{
        let box=document.querySelectorAll(".banner_leftbox1_box");
        let nav=document.querySelectorAll(".banner_left_list");
        nav.forEach(function (ele,index) {
            ele.onmouseenter=function () {
                box[index].style.display="block";
                box[index].style.width="1000px"
            };
            ele.onmouseleave=function () {
                box[index].style.display="none";
                box[index].style.width="0"
            }
        });
}
//侧导航效果
{
    let text1 = document.querySelectorAll(".cenav_act1");
    let text2 = document.querySelectorAll(".cenav_act2");
    let btn1 = document.querySelectorAll(".cenav_active1");
    let btn2 = document.querySelectorAll(".cenav_active2");
    let fr=document.querySelector(".cenav_tankuang");
    let totop = document.querySelector(".cenav_box11");
    text1.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            // btn1[index].style.transaction="all .5s";
            // btn1[index].style.right = "0";
            btn1[index].style.display="block";
        };
        ele.onmouseleave = function () {
            // btn1[index].style.transaction="none";
            // btn1[index].style.right = "60px";
            // btn1[index].style.right = "-46px";
            btn1[index].style.display="none";

        }
    });
    text2.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            btn1[index].style.transaction="all .5s";
            btn1[index].style.width = " 160px";
        };
        ele.onmouseleave = function () {
            btn1[index].style.transaction="all .5s";
            btn1[index].style.width = " 0";
        }
    });
    totop.onclick = function () {
        document.documentElement.scrollTop = 0;

    }
}
//头部效果
{
    let textBox = document.querySelectorAll(".site_site_site");
    let listDiv = document.querySelectorAll(".site_show_dis");
    let obj = listDiv[0];
    textBox.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            listDiv[index].style.display = "block";
            obj = listDiv[index];
        };
        ele.onmouseleave = function () {
            listDiv[index].style.display = "none";
        }
    });
}
//搜索框效果
{
    function f(e) {
        let search=e.querySelector(".header_search_box_text");
        search.onclick=function () {
            search.placeholder="";
        };
        search.onblur=function(){
            search.placeholder="搜索 天猫 商品/品牌/店铺";
        };
    }
    let sr=document.querySelectorAll(".sae_click");
    sr.forEach(function (e) {
        f(e);
    })

}
//topBar效果
{
    let topBar = document.querySelector(".topBar");
    let leftBar = document.querySelector(".leftBar");
    let toTop = document.querySelector(".leftBar_totop");
    window.onscroll = function () {
        let oo = document.documentElement.scrollTop;
        if (oo > 980) {
            // topBar.style.transaction="all 3s";
            topBar.style.display = "block";
            leftBar.style.display = "block";
            // topBar.style.height="50px";

        } else {
            topBar.style.display = "none";
            leftBar.style.display = "none";
            // topBar.style.height="0"
        }
    };
    toTop.onclick = function () {
        document.documentElement.scrollTop = 0;
    };
}
//leftBar效果
{
    let list = document.querySelectorAll(".leftBar_list_li");
    let con = document.querySelectorAll(".same");
    list.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = con[index].offsetTop -50;
            con[index].offsetTop = ot;
            let now = document.documentElement.scrollTop;
            let spead = (ot - now) / 8;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += spead;
                if (time === 200) {
                    clearInterval(t);
                }
                document.documentElement.scrollTop = now;
            }, 25)
        }
    });
    window.addEventListener("scroll", function () {
        let st = document.documentElement.scrollTop;
        for (let i = 0; i < con.length; i++) {
            if (st > con[i].offsetTop - 150) {
                for (let i = 0; i < list.length; i++) {
                    list[i].classList.remove("leftBar_list_active");
                }
                list[i].classList.add("leftBar_list_active");
            }
        }
    })

}
//天猫超市效果
{
    let text=document.querySelectorAll(".matoday1");
    let bot=document.querySelectorAll(".mart_today_bottom1");
    let obj=text[0];
    let obj1=bot[0];
    text.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.classList.remove("mart_today_content_top_active");
            obj1.classList.remove("today_ac");
            this.classList.add("mart_today_content_top_active");
            bot[index].classList.add("today_ac");
            obj=text[index];
            obj1=bot[index];
            n=index;
        }
    });
    let n=0;
    function movetoday() {
        n++;
        if(n===text.length){
            n=0;
        }
        obj.classList.remove("mart_today_content_top_active");
        obj1.classList.remove("today_ac");
        text[n].classList.add("mart_today_content_top_active");
        bot[n].classList.add("today_ac");
        obj=text[n];
        obj1=bot[n];
    }
    let t=setInterval(movetoday,3000);
    text.onmouseenter=function () {
        clearInterval(t);
    };
    text.onmouseleave=function () {
        t=setInterval(movetoday,3000);
    };
}