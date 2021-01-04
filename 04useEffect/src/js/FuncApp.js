import React, {useEffect, useState} from "react";

function FuncApp(props) {

    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(document.body.clientWidth);


    // 等价于componentDidMount和componentDidUpdate
    useEffect(() => {
        document.title = count;
    });
    //  第二个参数使用空数组，等同于shouldComponentUpdate返回了false，也就是不更改页面
    useEffect(() => {
        document.title = count;
    }, []);

    // 监听count状态是否发生改变，只有当count改变时，才会执行useEffect，才会更新页面，等价于shouldComponentUpdate返回true
    useEffect(() => {
        document.title = count;
    }, [count])


    // 等价于componentDidMount和componentDidUpdate
    useEffect(() => {
        window.addEventListener("resize", changeSize);
        
        // 返回一个函数用于解绑事件，相当于componentWillUnMount
        return () => {
            window.removeEventListener("resize", changeSize);
        }
    });

   
    // 更改页面的宽度
    function changeSize() {
        setWidth(document.body.clientWidth);
    }

    return (
        <div>
            <h1>页面: {count}</h1>
            <h1>页面的宽度：{width}</h1>
            <button onClick={()=> {setCount(count+1)}}>函数组件更改标题</button>
        </div>
    );
}

export default FuncApp;