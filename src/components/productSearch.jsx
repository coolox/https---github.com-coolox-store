import { useState } from "react";

function ProductFilter({ setSearchParams, prodQuery, latest }) {
  const [search, setSearch] = useState(prodQuery)
  const [checked, setChecked] = useState(latest)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value;
    const isLatest = form.latest.checked

    const params = {}

    if (query.length) params.products = query
    if(isLatest) params.latest = true
    setSearchParams(params)
  }
  return (
      <form autoComplete='off' onSubmit={handleSubmit}>
      <input type="search" name='search' value={search} onChange={e=> setSearch(e.target.value) } />
        <label >
        <input type="checkbox" name='latest' checked={checked} onChange={e => setChecked(e.target.checked)} /> последниe
        </label>
        <input type="submit" value ='Search' />
      </form>
    
  )
}

export default ProductFilter