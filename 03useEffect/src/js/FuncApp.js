import React, {useEffect, useState} from "react";

function FuncApp(props) {
    // 定义状态
    const [count, setCount] = useState(10);

    // 相当于componentDidMount和componentDidUpdate
    useEffect(() => {
        console.log("mount and update");
        document.title = `点击改变后${count}`;
    });

    // 事件处理函数
    function change() {
        // 修改状态
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={change}>函数组件更改标题</button>
        </div>
    );
}

export default FuncApp;