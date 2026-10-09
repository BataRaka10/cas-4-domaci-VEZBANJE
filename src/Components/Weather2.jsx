
import { useState } from "react";


function Weather2() {

    let [country, setCountry] = useState("")

    let [city, setCity] = useState("")

    let [temperature, setTemperature] = useState("")

    let [cities, setCities] = useState([])


    function addCity() {
        // console.log(country, city, temperature)
        if (country === "" || city === "" || temperature === "") {
            return
        }
        // console.log("Works")

        // zbog spajanja dva arraya = [{ary sa 1 objektom}]
        const newCity = [{
            name: city,
            country: country,
            temperature: temperature
        }];

        // cities.push(newCity)
        // spred - za spajanje arraya
        // postavi gradove - prosledimu [currentCities] - i od toga napravi nov array
        setCities( currentCitties => [...currentCitties, ...newCity])

    }


    // let [country, setCountry] = useState("")

    // let [city, setCity] = useState("")

    // let [temperature, setTemperature] = useState("")

    // let [cities, setCities] = useState([])

    // function addCity() {
        // console.log(country, city, temperature)
        // spred - za spajanje arraya
        // postavi gradove - prosledimu [currentCities] - i od toga napravi nov array
        // if (country === "" || city === "" || temperature === "") {
            // console.log("Works")
        //     return
        // }

        // zbog spajanja dva arraya = [{ary sa 1 objektom}]
        // const newCity = [{
        //     name: city,
        //     country: country,
        //     temperature: temperature
        // }];

        // cities.push()
        // setCities( currentCities => [...currentCities, ...newCity])


    // }


        // zbog spajanja dva arraya = [{ary sa 1 objektom}]
        

        // spred - za spajanje arraya
        // postavi gradove - prosledimu [currentCities] - i od toga napravi nov array


        // console.log(country, city, temperature)
        // if (country === "" || city === "" || temperature === "") {
        //     return true
        // }
        // console.log("Works")

        // neophodno je da bude array sa 1 objektom [{}] 
        // const newCity = [{
        //     name: city,
        //     country: country,
        //     temperature: temperature
        // }];
        

        // nije state funkcija = nece raditi  / moramo koristiti setCities = nece rerenderovati stranicu = u prevodu ne moze samo cities.push
        //
        // cities.push(newCity);
        // postavi gradove (setCities) -> prosledi mu trenutne gradove i od toga novi aray[]
        // setCities(currentCitties => [...currentCitties, ...newCity])

    

    // (e) => setCountry(e.currentTarget.value) rerenderovanje = ponovo ocitava kod
    return (
        <>
            <br />
            <input type="text" onInput={ (e) => setCountry(e.currentTarget.value)} placeholder="enter country"/>
            {/* <input type="text" onInput={ (e) => setCountry(e.currentTarget.value)} /> */}
            <br />
            <input type="text" onInput={ (e) => setCity(e.currentTarget.value)} placeholder="enter city"/>
            {/* <input type="text" onInput={ (e) => setCity(e.currentTarget.value)} /> */}
            <br />
            <input type="number" onInput={ (e) => setTemperature(e.currentTarget.value)} placeholder="enter temperature"/>
            {/* <input type="number" onInput={ (e) => setTemperature(e.currentTarget.value) }  /> */}
            <br />
            <button onClick={addCity}>Add city</button>
            {/* <button onClick={addCity}>Add city</button> */}

            {/* console log */}
            <div>
                { cities.map(city => (
                    <p>{ city.name }</p>
                )) }
            </div>
            
            {/* <div>
                { cities.map(city => (
                    <p>{ city.name }</p>
                ))}
            </div> */}
        </>
    );
}

export default Weather2;