import React, { useState } from "react";


// 子组件
// function TestSon(props) {
//     console.log("子组件被渲染了");
//     return(
//         <h1> {props.name} </h1>
//     );
// }
const TestSon = React.memo(function(props){
    console.log("子组件被渲染了");
    return(
        <h1> {props.name} </h1>
    );
}, (preProps, newProps) => {
    // memo的高级用法，参数2决定了组件要不要重新渲染，相当于生命周期中的shouldComponentUpdate
    // 返回false表示重新渲染，返回true表示不渲染
    if(preProps.name !== newProps.name) {
        return false; //重新渲染组件
    } else {
        return true; //不渲染组件
    }
})


// 父组件
function MemoApp(props) {
    const [value, setValue] = useState(0);
    const [name, setName]= useState("小明");

    function change() {
        setValue(100);
        setName("李四");
    }

    return(
        <div>
            <h1>{value}</h1>
            <button onClick={change}>改变数据</button>

            <TestSon name={name}/>
        </div>
    );
}

export default MemoApp;