import React, {Component} from "react";

class ClassApp extends Component {
    constructor(props) {
        super(props);

        // 定义状态
        this.state = {
            count: 10
        }
    }

    // 组件第一次挂载时执行
    componentDidMount() {
        console.log("did mount");
        document.title = `点击改变后${this.state.count}`;
    }

    // 页面是否重新渲染 返回true表示需要重新渲染页面，返回false不渲染
    shouldComponentUpdate() {
        if(this.state.count < 1) {
            return false;
        } else {
            return true;
        }
    }

    // 组件每一次更新都会执行，前提是shouldComponentUpdate函数返回true才会更新
    componentDidUpdate() {
        console.log("did update");
        document.title = `点击改变后${this.state.count}`;
    }

    // 事件处理函数
    change() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.change.bind(this)}>类组件更改标题</button>
            </div>
        );
    }
}

export default ClassApp;