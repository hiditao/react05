import React, { useState } from "react";

function App(props) {

    let year = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];

    const [flag, setFlag] = useState(true);

    // 使用hook  useState   解构赋值
    // useState 有一个唯一的参数，用于给状态设置初始值
    // 定义多个state，调用多次useState函数
    // 解构出来的第一个参数表示状态，第二个参数表示用于修改状态的函数名称
    const [count, setCount] = useState(1);

    const [name, setName] = useState("apple");

    const [age, setAge] = useState(18);

    // 事件函数
    function sub() {
        setCount(count => count - 1);
        if (count <= 2) {
            setFlag(true);
        } 
    }
    function add() {
        setCount(count + 1);

        if (count >= 1) {
            setFlag(false);
        } 
    }

    function myinput(event) {
        setName(event.target.value);
    }

    function select(event) {
        setAge(new Date().getFullYear() - event.target.value);
    }

    return (
        <div>
            <h1>函数组件内的状态值：{count}</h1>
            {/* onClick监听，调用事件函数来处理 */}
            <button onClick={sub} disabled={flag ? true : false}>-</button>
            {count}
            {/* onClick监听，采用箭头函数来处理 */}
            <button onClick={add}>+</button>


            <h1>输入框中的数据： {name}</h1>
            <input value={name} onChange={myinput} />


            <h1>显示你的年龄： {age}</h1>
            <select onChange={select}>
                {year.map((item, index) => {
                    return <option key={index} value={item}>{item}年</option>;
                })}
            </select>
        </div>
    );
}


export default App;