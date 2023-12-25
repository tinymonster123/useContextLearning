import '../css/firstChallenging.css'
import { useNavigate } from 'react-router-dom'
import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext(null)

// const navigate = useNavigate()

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
    return (
        <>
            <Panel title="Welcome">
                <Button>Sign In</Button>
                <Button>Log In</Button>
                {/* <Button onClick = {() => {navigate('/secondChallenge')}}>Next Challenge</Button> */}
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


function Button({ children }) {
    const theme = useContext(ThemeContext)
    const classname = "button-" + theme
    return (
        <button className={classname}>{children}</button>
    )
}

export default MyApp