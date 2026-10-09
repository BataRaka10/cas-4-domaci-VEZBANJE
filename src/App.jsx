import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

import Weather from './Components/Weather';
import Weather2 from './Components/Weather2';


function App() {

    return (
        <>
            <Weather />

            <Weather2 />
        </>
    )
}

export default App;
