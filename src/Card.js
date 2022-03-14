
function Card({weather}) {
  return (
    <div className="row justify-content-between">
        <div className="col-md-7 text-center p-3">
            <h1 className="m-3 mb-5">{weather.name} <span className="h6">({weather.country})</span></h1>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>Température: </td><td><b>{Math.round(weather.temp)} °C</b></td>
                    </tr>
                    <tr>
                        <td>Température (min - max) : </td><td><b>({Math.round(weather.temp_min)}°C - {Math.round(weather.temp_max)}°C)</b></td>
                    </tr>
                    <tr>
                        <td>Humidity : </td><td><b>{Math.round(weather.humidity)}%</b></td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className="col-md-4 text-center">
            <div className='card border-0'>
                <img src={weather.img} alt="" height="200px" width='auto' />
                <div className="card-body">
                    <h2>{weather.main}</h2>
                    <h4><i>{weather.description}</i></h4>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default Card;