
import { useState } from "react";


function Weather() {

    let [country, setCountry] = useState("")

    let [city, setCity] = useState("")

    let [temperature, setTemperature] = useState("")

    let [cities, setCities] = useState([])

    function addCity() {
        console.log(country, city, temperature)
        if (country === "" || city === "" || temperature === "") {
            return
        }

        // zbog spajanja dva arraya = [{ary sa 1 objektom}]
        const newCity = [{
            name: city,
            country: country,
            temperature: temperature
        }];

        // cities.push(newCity)
        // spred - za spajanje arraya
        // postavi gradove - prosledimu [currentCities] - i od toga napravi nov array
        setCities( currentCities => [...currentCities, ...newCity])
    }


    // let [country, setCountry] = useState("");

    // let [city, setCity] = useState("");

    // let [temperature, setTemperature] = useState("");

    // let [cities, setCities] = useState([]);

    // function addCity() {
    //     // console.log(country, city, temperature)
    //     if (country === "" || city === "" || temperature === "") {
    //         return
    //     }
    //     // console.log("Works")
    //     // zbog spajanja dva arraya = [{ary sa 1 objektom}]
    //     const newCity = [{
    //         name: city,
    //         country: country,
    //         temperature: temperature
    //     }];

    //     // cities.push(newCity)
    //     // spred - za spajanje arraya
    //     // postavi gradove - prosledimu [currentCities] - i od toga napravi nov array
    //     setCities( currentCities => [...currentCities, ...newCity])
    // }

    return (
        <>
            <br />
            <input type="text" onInput={ (e) => setCountry(e.currentTarget.value)} placeholder="enter country" />
            <br />
            <input type="text" onInput={ (e) => setCity(e.currentTarget.value)} placeholder="enter city" />
            <br />
            <input type="number" onInput={ (e) => setTemperature(e.currentTarget.value)} placeholder="enter temperature" />
            <br />
            <button onClick={addCity}>Add city</button>
            <br />

            <div>
                { cities.map( city => (
                    <h4>{ city.name }</h4>
                )) }
            </div>

            {/* da ispisemo sve gradove */}
            {/* <div>
                { cities.map(city => (
                    <p>{ city.name }</p>
                )) }
            </div> */}
        </>
    )
}

export default Weather;