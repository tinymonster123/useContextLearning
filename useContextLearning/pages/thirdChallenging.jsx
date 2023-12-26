import { Link } from 'react-router-dom'
import '../css/thirdChallenging.css'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const NameContext = createContext(null)

function MutipleUsers() {
    const [name, setName] = useState(null)
    const [theme, setTheme] = useState('light')

    const classname = "BigBox-" + theme

    return (
        <>
            <NameContext.Provider value={{ name, setName }} >
                <ThemeContext.Provider value={theme}>
                    <div className={classname}>
                        <WelcomePanel />
                    </div>
                    <label>
                        <input type='checkbox' onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light') }} />
                        <span>Change to Dark</span>
                    </label>
                    <Link to='/Extract'><p>Next Challenging</p></Link>
                </ThemeContext.Provider>
            </NameContext.Provider>
        </>
        // 在React中，`Context`提供了一种将值（如状态和函数）在组件树中传递而不必显式地通过组件的每一层作为props传递的方法。当你想要在组件树中的多个层级上访问同样的数据时，这非常有用。

        // 在你提供的代码片段中，`NameContext`被用来传递两个值：`name`和`setName`。`name`是一个状态值，而`setName`是一个更新该状态的函数。这两个值被放在一个对象中，因为`Context.Provider`只接受一个单一的值作为它的`value`属性。
        
        // 如果你不将它们封装在一个对象中，你将只能传递一个值。但是很多情况下，你可能需要在同一个上下文中传递多个相关联的值。通过将它们封装在一个对象中，你可以确保上下文的消费者（使用`useContext`的组件）可以访问到所有需要的值。
        
        // 例如：
        
        // ```jsx
        // <NameContext.Provider value={{ name, setName }}>
        //   {/* ... */}
        // </NameContext.Provider>
        // ```
        
        // 这里，`value`属性接受一个对象，该对象包含了`name`和`setName`两个属性。这样，任何消费这个上下文的组件都可以通过解构这个对象来访问`name`状态和`setName`函数：
        
        // ```jsx
        // const { name, setName } = useContext(NameContext);
        // ```
        
        // 这种模式允许你在上下文中传递一组紧密相关的值，而不是仅限于一个单一的值。它让状态管理变得更加灵活和可扩展。当你需要添加更多的值到上下文时，你只需要更新对象，而不需要改变`Provider`的接口。
    )

}

function WelcomePanel() {

    const { name } = useContext(NameContext)

    return (
        <Panel title="Welcome">
            {name !== null ? <Greeting /> : <MyForm />}
        </Panel>
    )
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext)
    const classname = "word-" + theme

    return (
        <>
            <h1 className={classname}>{title}</h1>
            {children}

        </>
    )
}

function Greeting() {
    const theme = useContext(ThemeContext)
    const { name } = useContext(NameContext)
    const classname = "word" + theme
    return (
        <span className={classname}>You Log In as {name}</span>
    )
}

function MyForm() {
    const [lastname, setLastname] = useState("")
    const [firstname, setFirstname] = useState("")
    const theme = useContext(ThemeContext)
    const classname = "word-" + theme
    const canAppear = firstname === "" || lastname === ""


    const { setName } = useContext(NameContext)

    return (
        <>
            <div>
                <span className={classname}><strong>First Name : </strong></span>
                <input type='text' required value={firstname} onChange={(e) => { setFirstname(e.target.value), console.log(firstname); }} />
            </div>
            <div>
                <span className={classname}><strong>Last Name : </strong></span>
                <input type='text' required value={lastname} onChange={(e) => { setLastname(e.target.value), console.log(lastname); }} />
            </div>
            <div>
                <LogginButton onClick={() => { setName(lastname + " " + firstname) }}>Log In</LogginButton>
                {canAppear && <i className={classname}>Fill The Both Field</i>}
                {/* 在React中，这种使用逻辑与（&&）运算符的表达式是一种常见的条件渲染技术。这种模式可以用来根据某个条件是否为真来决定是否渲染一个组件或者一段JSX。
                表达式{!canLogin && <i>Fill in both fields.</i>}的含义如下：

                !canLogin：这是canLogin的否定形式。如果canLogin为false（意味着至少一个字段为空），则!canLogin为true。
                &&：逻辑与运算符。如果其左边的表达式为真（即!canLogin为true），则会计算右边的表达式。
                <i>Fill in both fields.</i>：这是要渲染的JSX元素，一个斜体的文本提示用户填写所有字段。 */}
            </div>
        </>
    )
}


function LogginButton({ children, onClick }) {
    const theme = useContext(ThemeContext)
    const classname = "LogginButton-" + theme

    return (
        <>
            <button className={classname} onClick={onClick}>{children}</button>
        </>
    )
}

export default MutipleUsers