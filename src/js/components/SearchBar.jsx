import "../../scss/components/SearchBar.scss"

const SearchBar = ({value, onChange}) => {


  return(
    <form onSubmit={(event) =>  event.preventDefault()}>
      <input 
        className="SearchBar"
        type="text"
        value={value} 
        onChange={onChange}
        placeholder="Click/Tap a myth, or filter them here"
      />
    </form>
  )
  
}

export default SearchBar