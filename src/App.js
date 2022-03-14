import Search from './Search'
import Card from './Card'
import DailyCard from './DailyCard'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import style from './style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

const API_KEY='c9d29c6eea7c4be6096352a87927d679'


function App() {

  const [city,setCity]=useState('rabat');
  const [weather,setWeather]=useState({main:'',description:'',img:'',temp:0,temp_max:0,temp_min:0,humidity:0,name:'',country:'',lon:'',lat:''});
  const [dailyWeather,setDailyWeather]=useState([])
  const date=new Date()

   useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    axios.get(url)
    .then(({data})=>{
      setWeather((prev)=>({...prev,
        main:data.weather[0].main,
        description:data.weather[0].description,
        img:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        temp:data.main.temp-273.15,
        temp_max:data.main.temp_max-273.15,
        temp_min:data.main.temp_min-273.15,
        humidity:data.main.humidity,
        country:data.sys.country,
        name:data.name,
        lon:data.coord.lon,
        lat:data.coord.lat,
      }))
      // console.log(weather)

      const url2=`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,alerts,hourly&appid=${API_KEY}`;
      axios.get(url2)
      .then(({data})=>{
        setDailyWeather(
          data.daily
        )
        // console.log(data.daily)
      })
      .catch(error=>console.log(error))
    })
    .catch(error=>{
      alert('ville Introuvable')
      return
    })

    

  },[city])

  function changeCity(newValue){
    setCity(newValue)
  }

  return (
    <div className="App">
      <div className="container text-center bg-white p-4 my-3 rounded shadow title">
        <h1>
          <FontAwesomeIcon icon={faCloudSun} className='me-3'/>
          Weather App
          </h1>
      </div>

      <div className="container mb-3">
        <div className="row justify-content-between bg-white rounded shadow-sm">
          <div className="col-md-3 border-end border-2 mb-3">
            <Search onChange={changeCity} />
          </div>
          <div className="col-md-8 mt-3 position-relative">      
            <span className="badge bg-secondary position-absolute top-0 start-0">Today's weather</span>
            <Card weather={weather}/>

            {/* Weakly weather */}
            <div className="container-fluid position-relative border-top pt-3">
              <span className="badge bg-secondary position-absolute top-0 start-0">Weekly weather</span>
              <div className="row mt-2 text-center">
                {dailyWeather.map((object, i) =>{
                  return <div className="col-md-3 col-sm-4 my-2" key={i}>
                    <DailyCard dailyWeather={object} key={i} day={date.getDate()+i+1} month={date.getMonth()}/>
                  </div>}
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
