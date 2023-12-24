import MyApp from '../../pages/firstChallenging'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App