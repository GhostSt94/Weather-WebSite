
const Search = (props) => {

    function handleClick(e) {
        const name = document.getElementById('cityInput').value;
        if(name===''||name===null) {
            alert('entrer une ville')
            return
        }
        props.onChange(name);
      }

  return (
    <div>
        <div className="input-group my-3">
            <span className="input-group-text">City</span>
            <input id="cityInput" type="text" aria-label="First name" className="form-control"/>
        </div>
        <div className="btn btn-primary w-100 w-sm-50" onClick={handleClick}>
            Search    
        </div>
        
    </div>
  )
}

export default Search