document.addEventListener("DOMContentLoaded", () => {
    const hobbyCards = document.querySelectorAll(".hobby-card"); // 获取所有兴趣卡片
    const popup = document.getElementById("popup"); // 弹窗
    const popupContent = popup.querySelector(".popup-content"); // 弹窗内容
    const closePopupButton = popup.querySelector(".close-popup"); // 关闭按钮
    // 每个兴趣卡片绑定点击事件
    hobbyCards.forEach(card => {
        card.addEventListener("click", () => {
            const hobby = card.getAttribute("data-hobby"); // 获取卡片的兴趣类型

            // 根据兴趣类型设置弹窗内容
            let content = "";
            switch (hobby) {
                case "台球":
                    content = `\
                       <div class="pop">
        <div class="pop_left">
            <video src="../img/output1-1.mp4" controls></video>
        </div>
        <div class="pop_right">
           白天：我想打台球了<br>
晚上：在绿幕前久久不能释怀的我们，分析思索着每一步的未来。俯身的瞬间是否想过失败的可怕，我们无惧亦无畏。寂静的夜晚，天空中的那一抹月色似乎也有进洞的渴望。
        </div>
    </div>`;
                    break;
                case "阅读":
                    content = `
                        <div class="pop">
        <div class="pop_left">
            <img src="../img/阅读.jpg"></img>
        </div>
        <div class="pop_right">
          我在写作时，经常会思考这些问题：人类的暴力能达到什么程度；如何界定理智和疯狂；我们能在多大程度上理解别人。我希望《素食者》可以回答我的这些问题。我想通过《素食者》刻画一个誓死不愿加入人类群体的女性。
        </div>
    </div>`;
                    break;
                case "编程":
                    content = `
                       <div class="pop">
        <div class="pop_left">
            <img src="../img/ai.jpg"></img>
        </div>
        <div class="pop_right">
          我在写作时，经常会思考这些问题：人类的暴力能达到什么程度；如何界定理智和疯狂；我们能在多大程度上理解别人。我希望《素食者》可以回答我的这些问题。我想通过《素食者》刻画一个誓死不愿加入人类群体的女性。
        </div>
    </div>`;
                    break;
                default:
                    content = "<h1>未知的兴趣</h1>";
            }

            // 更新弹窗内容
            popupContent.innerHTML = `
                ${content}
                <button class="close-popup" aria-label="关闭弹窗">&times;</button>
            `;

            // 显示弹窗
            popup.style.display = "flex";

            // 重新绑定关闭按钮事件
            const newCloseButton = popup.querySelector(".close-popup");
            newCloseButton.addEventListener("click", closePopup);
        });
    });

    // 关闭弹窗函数
    const closePopup = () => {
        popup.style.display = "none";
    };

    // 点击弹窗外部关闭弹窗
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
});



