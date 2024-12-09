const texts = [
    "谁对时间越吝啬，时间就对谁越慷慨.",
    "永远相信美好的事情即将发生.",
    "没有绝望的处境，只有对处境绝望的人.",
    "树欲静而风不止，子欲养而亲不待.",
    "有志者，事竟成"
];

let textIndex = 0; // 当前正在打字的行索引
let charIndex = 0; // 当前行中字符的索引
const typingElement = document.getElementById("text");

// 打字速度随机化函数
const typingSpeed = () => Math.random() * (400 - 200) + 50; // 随机速度

function typeWriter() {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (charIndex < text.length) {
            typingElement.textContent =typingElement.textContent+text.charAt(charIndex); 
            charIndex++; // 更新字符索引
            setTimeout(typeWriter, typingSpeed()); // 设置下次打字时间
        } else {
            // 当前行打完，等待 1 秒后切换到下一行
            setTimeout(() => {
                typingElement.textContent = ""; // 清空显示
                charIndex = 0; // 重置字符索引
                textIndex++; // 切换到下一行
                typeWriter(); // 继续打下一行
            }, 1000);
        }
    } else {
        // 打字结束，重置索引并重新开始
        setTimeout(() => {
            textIndex = 0; // 重置行索引
            charIndex = 0; // 重置字符索引
            typingElement.textContent = ""; // 清空文本
            typeWriter(); 
        }, 0); 
    }
}

// 启动打字机效果
typeWriter();
    

