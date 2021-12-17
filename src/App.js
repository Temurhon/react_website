import React from 'react'

//css import for the main app
import './App.css';

//imports of containers
import { Footer, Blog, Header, Possibility, Features, What } from './containers';
//Imports of components
import { CTA, Brand, Navbar } from './components';
//React functional component.
const App = () => {
    return (
        <div className="App">
            <div className='gradient__bg'>
                <Navbar />
                <Header />

            </div>
            {/* seperated components */}
            <Brand />
            <What />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    )
}

export default App
