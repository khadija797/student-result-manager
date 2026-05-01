import React from 'react'
import './Header.css'

const Header = ({ search, setSearch, clearAll }) => {
  return (
    <div className='header'>
      <h1>Student Result Manager</h1>

      <input 
        type="text"
        placeholder='Search Student...'
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            document.getElementById("student-list")?.scrollIntoView({
              behavior: "smooth"
            })
          }
        }}
        />
         <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
    </div>
  )
}

export default Header