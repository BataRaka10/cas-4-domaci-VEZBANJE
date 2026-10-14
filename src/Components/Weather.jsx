
import { useState } from "react";


function Weather() {

    let [country, setCountry] = useState("");

    let [city, setCity] = useState("");

    let [temperature, setTemperature] = useState("");

    let [cities, setCities] = useState([]);


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

    // pozivanje stastea - (e) => setCountry(e.currentTarget.value) -> uradi rirenderovanje (ispocetka kod)
    return (
        <>
            <br />
            <input type="text" onInput={ (e) => setCountry(e.currentTarget.value)} placeholder="enter country" />
            <br />
            <input type="text" onInput={ (e) => setCity(e.currentTarget.value)} placeholder="enter country" />
            <br />
            <input type="nu" onInput={ (e) => setTemperature(e.currentTarget.value)} placeholder="enter country" />
            <br />
            <button >Add city</button>
            <br />


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