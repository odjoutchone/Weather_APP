
        async function getweather(){

        let city =  document.getElementById('city').value;

        if(!city){
            alert('Please enter a city Name');
            return;
        }

         
     let apiKey='7baedf95c394f45accb45ff5053d8092'
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7baedf95c394f45accb45ff5053d8092&units=metric`

     try{
          
            let response  = await  fetch(url);
            let data = await response.json();

            if(data.cod !== 200){
                throw new Error(data.message);}

                document.getElementById('result').innerHTML=
                `
                <h4 class="text-white">${data.name},${data.sys.country}</h4>
                <h3 class="text-white">${data.main.temp}°C</h3>
                <p class="text-white">${data.weather[0].description}</p>
                <p class="text-white">Humidity: ${data.main.humidity} %</p>
                <p class="text-white"> windspeed: ${data.wind.speed} m/s</p>
                
                `;
            

     }catch(error){
         document.getElementById('result').innerHTML=`<p class='text-danger'>Error:${error.message}</p>`
     }

      
        }
     