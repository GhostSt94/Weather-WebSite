
function DailyCard(props) {
   const  weather={
       img:`http://openweathermap.org/img/w/${props.dailyWeather.weather[0].icon}.png`,
       main:props.dailyWeather.weather[0].main,
       temp_max:props.dailyWeather.temp.max-273.15,
       temp_min:props.dailyWeather.temp.min-273.15,
   }
  return (
            <div className='card'>
                <small>{`${props.day}/${props.month}`}</small>
                <img src={weather.img} alt="weather"/>
                <div className="card-body">
                    <h3>{weather.main}</h3>
                    <h5 className="fw-light"><i>{Math.round(weather.temp_min)}°C - {Math.round(weather.temp_max)}°C</i></h5>
                </div>
            </div>
  )
}
export default DailyCard;