document.addEventListener('mousemove', function (e) {
    const star = document.createElement('div');
    star.classList.add('star');
    // 设置星星位置
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;

    // 添加到页面
    document.getElementById("wrap").appendChild(star);

    // 动画结束后移除星星
    star.addEventListener('animationend', () => {
        star.remove();
    });
    star.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    star.style.width = star.style.height = `${Math.random() * 10 + 5}px`;
});
var aText = [];
var a = document.getElementsByClassName("nav_item");
var link = ["basic_in.html", "hobby.html", "pro_le.html", "con_in.html"]
for (var i = 0; i < a.length; i++) {
    aText.push(a[i])
}
for(let i=0; i< aText.length; i++){
        aText[i].onclick=function t() {
                window.location.href=link[i]            
    }
}


