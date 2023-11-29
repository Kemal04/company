import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Outlet, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos';

//CSS
import './App.css'
import 'aos/dist/aos.css';
import '@splidejs/react-splide/css';

//USER INTERFACE
import { Home } from './pages/interface';

//COMPONENTS
import { Footer, Navbar, ScrollToTop } from './components';

function App() {

    useEffect(function () {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Router>
                <ScrollToTop />
                <Toaster />

                <Routes>
                    <Route path="/" element={<HomeLayout />}>

                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Home />} />

                    </Route>
                </Routes>
            </Router>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};


export default App
