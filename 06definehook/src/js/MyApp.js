import useMyColor from "./useMyColor";


function MyApp() {
    // 使用自定义的hook
    const [color, setColor] = useMyColor("red");

    return (
        <div>
            <h1 style={{color: color}}>这是标题</h1>
            <button onClick={setColor}>改变样式</button>
        </div>
    );
}

export default MyApp;