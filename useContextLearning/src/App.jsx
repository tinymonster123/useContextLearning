import MyApp from '../pages/firstChallenging'
import CurrentUser from '../pages/secondChallenging'
import MutipleUsers from '../pages/thirdChallenging'
import Extract from '../pages/fourthChallenging'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyApp />} />
                <Route path="/CurrentUser" element={<CurrentUser />} />
                <Route path='/MutipleUsers' element={<MutipleUsers />} />
                <Route path='/Extract' element={<Extract />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App