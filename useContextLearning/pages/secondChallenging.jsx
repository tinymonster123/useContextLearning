import { createContext, useContext, useState } from 'react'
import '../css/secondChallenging.css'

const CurrentContext = createContext(null)


function CurrentUser() {


    const [currentUser, setCurrent] = useState(null)

    return (
        <>

            {/* useContext能够将useState中的函数也一同传递给子组件 */}
            <CurrentContext.Provider value={{ currentUser, setCurrent }}>
                <div className='boxInSecond'>
                    <Form />
                </div>
            </CurrentContext.Provider>
        </>
    )
}

function Form() {
    return (
        <Panel title="Welcome">
            <Button />
        </Panel>
    )
}


function Panel({ title, children }) {


    return (
        <>
            <h1>{title}</h1>
            {children}
        </>

    )
}


function Button() {
    const { currentUser, setCurrent } = useContext(CurrentContext)

    if (currentUser !== null) {
        return (
            <p>You Loggin In as {currentUser}</p>
        )
    }

    return (
        <button onClick={() => { setCurrent('Leeser') }}>Loggin in as Leeser</button>
    )
}

export default CurrentUser 