import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login'
import Portfolio from './Portfolio'

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/register' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
