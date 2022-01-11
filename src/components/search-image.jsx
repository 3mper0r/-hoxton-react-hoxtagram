function Search_Image() {
    return (
        <input className="search-image" type="text" placeholder="search your image"
            onChange={e => {
                setSearch(e.target.value)
            }} />
    )
}

export default Search_Image