import React, { useState } from "react";

function App(props) {

    // 使用hook  useState   解构赋值
    // useState 有一个唯一的参数，用于给状态设置初始值
    const [count, setCount] = useState(0);

    // 事件函数
    function change() {
        setCount(count - 1);
    }

    return(
        <div>
            <h1>函数组件内的状态值：{count}</h1>
            {/* onClick监听，采用箭头函数来处理 */}
            <button onClick={() => { setCount(count+1)}}>添加数据</button>
            {/* onClick监听，调用事件函数来处理 */}
            <button onClick={change}>减少数据</button>
        </div>
    );
}


export default App;