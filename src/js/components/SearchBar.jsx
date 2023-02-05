import "../../scss/components/SearchBar.scss"

const SearchBar = ({value, onChange}) => {


  return(
    <div className="SearchBar">
      <form onSubmit={(event) =>  event.preventDefault()}>
        <input 
          className="SearchBarInput"
          type="text"
          value={value} 
          onChange={onChange}
          placeholder="Select one of the above Myths, or filter them here"
        />
      </form>
    </div>
    
  )
  
}

export default SearchBar