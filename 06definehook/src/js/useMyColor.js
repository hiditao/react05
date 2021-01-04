import React, { useState } from "react";

// 自定义hook：是一个函数，使用use开头的函数名称，小驼峰法
function useMyColor(initColor) {
    // 定义状态
    const [color, setColor] = useState(initColor);

    // 定义修改状态的函数
    const changeColor = () => {
        // 获取随机颜色
        const randomColor = "#" + Math.random().toString(16).slice(-6);
        console.log(randomColor);
        setColor(randomColor);
    }

    // 自定义hook需要返回一个数组，第一个元素为需要更改的状态，第二个元素表示更改状态的函数
    // 调用这个hook时，会对返回值进行解构
    return [color, changeColor];
}

export default useMyColor;