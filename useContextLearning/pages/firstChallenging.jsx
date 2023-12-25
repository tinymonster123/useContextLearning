import '../css/firstChallenging.css'
import { useNavigate } from 'react-router-dom'
import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext(null)

function MyApp() {
    const [theme, setTheme] = useState("light")



    const classname = "box-" + theme
    return (
        <>
            <ThemeContext.Provider value={theme}>
                <div className={classname}>
                    <Form />

                </div>
            </ThemeContext.Provider>
            <label>
                <input type="checkbox"
                    onChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light')
                    }} />
                <span>change into dark</span>
            </label>
        </>
    )
}


function Form() {

    const navigate = useNavigate()

    return (
        <>
            <Panel title="Welcome">
                <Btn>Sign In</Btn>
                <Btn>Log In</Btn>
                <Btn onClick={() => { navigate("/CurrentUser") }}>Next Challenging</Btn>
            </Panel>
        </>
    )
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext)
    const classname = "panel-" + theme

    return (
        <>
            <h1 className={classname}>{title}</h1>
            {children}
        </>

    )
}

//  通过onClick（形参）发现了一个很有意思的问题：子组件中的形参其实是一种期望能够从父组件中获得的一种属性。
//  打个比方：就如同Btn子组件与Form父组件，如果我的Btn中的形参改为click，毫无疑问哦那Click= {onClick}也需改为onClick={click}。但重头戏来了，Form中的onClick={...}也需改为click！我们可以理解为组件中并不能像我们的标签中正常使用如同onClick一般的回调函数，把它们加进去，会将其作为一个属性处理，所以我个人的理解是组件是一种不能使用回调函数的标签，并且其属性要与子组件中的属性保持一致，否则子组件将无法接收属性

function Btn({ children, onClick }) {
    const theme = useContext(ThemeContext)
    const classname = "Btn-" + theme
    return (
        <button className={classname} onClick={onClick}>{children}</button>
    )
}

export default MyApp