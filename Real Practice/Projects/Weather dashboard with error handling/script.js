async function getWeather(city) {
    try {
        let apikey = `78c514885306a5ff102dc9feefb5ed02`;

        let raw = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
        );

        if (!raw.ok) {
            throw new Error("City Not Found, try Something else");
        }
        let realData = await raw.json()
        if(realData.main.temp < 0){
            console.warn(`Too Cold with the temp of ${realData.main.temp}°C`)
        }else if(
            realData.main.temp > 38
        ){
            console.warn(`Too Hot with the temp of ${realData.main.temp}°C`)
        }else{
            console.log(realData.main.temp)

        }

    } catch (err) {
        console.log(err.message);
    }
}
getWeather("Khartoum");
