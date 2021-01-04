import React, {useEffect, useState} from "react";

function FuncApp(props) {
    const [count, setCount] = useState(0);

    // 参数1表示生命周期函数中的 componentDidMount 和 componentDidUpdate
    //返回值是函数 表示生命周期函数中的componentWillUnmount
    useEffect(() => {
        let timer = setInterval(() => {
            setCount(count + 1);
        }, 1000)

        return () => {
            clearInterval(timer); //清除定时器
        }
    })

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default FuncApp;