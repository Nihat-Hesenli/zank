import "./FilterSideBar.css";
import React, { useState } from "react";

const FilterSideBar = ({ setSearchQuery }) => {


  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(760);
  const [inputValue, setInputValue] = useState("");


  const handleChange = (e) => {
    setInputValue(e.target.value)



  }

  const handleSearchClick = () => {
    setSearchQuery(inputValue);
  };






  return (




    <aside className="filter-sidebar">
    
      <div className="search_section">
        <input
          className="searchInput"
          type="text"
          placeholder="Search products.."
          value={inputValue}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
        />
        <button
          onClick={handleSearchClick}
          className="searchButton"


        >
          SEARCH
        </button>
      </div>

      
      <h3 className="filter-title">Product Categories</h3>
      <div className="filter-group">
        <label><input type="checkbox" /> Free Metcon  <span className="filterPlus">+</span></label>
        <label><input type="checkbox" /> Men's Shoes <span className="filterPlus">+</span></label>
        <label><input type="checkbox" /> Nike City</label>
        <label><input type="checkbox" /> Nike Dunk  <span className="filterPlus">+</span></label>
        <label><input type="checkbox" /> Uncategorized</label>
        <label><input type="checkbox" /> Women's Shoes  <span className="filterPlus">+</span></label>
      </div>

    
      <h3 className="filter-title">Filter by Price</h3>
      <div className="price-slider">
        <div className="double-range">
          <input
            type="range"
            min="10"
            max="760"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
            className="range-left"
          />
          <input
            type="range"
            min="10"
            max="760"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
            className="range-right"
          />
        </div>
        <p>Filter Price: ${minValue} — ${maxValue}</p>
      </div>


      
      <h3 className="filter-title">Filter by Sports</h3>
      <div className="filter-group">
        <label><input type="checkbox" /> Football <span className="filter-count">5</span></label>
        <label><input type="checkbox" /> Jordan <span className="filter-count">6</span></label>
        <label><input type="checkbox" /> Lifestyle <span className="filter-count">10</span></label>
        <label><input type="checkbox" /> Running <span className="filter-count">14</span></label>
        <label><input type="checkbox" /> Tennis <span className="filter-count">5</span></label>
        <label><input type="checkbox" /> Training & Gym <span className="filter-count">12</span></label>
        <label><input type="checkbox" /> Walking <span className="filter-count">8</span></label>
      </div>

     
      <h3 className="filter-title">Filter by Color</h3>
      <div className="filter-group">
        <label><span className="color-dot black"></span> Black <span className="filter-count">11</span></label>
        <label><span className="color-dot blue"></span> Blue <span className="filter-count">10</span></label>
        <label><span className="color-dot green"></span> Green <span className="filter-count">9</span></label>
        <label><span className="color-dot pink"></span> Pink <span className="filter-count">6</span></label>
        <label><span className="color-dot red"></span> Red <span className="filter-count">10</span></label>
        <label><span className="color-dot white"></span> White <span className="filter-count">6</span></label>
      </div>

     
      <h3 className="filter-title">Filter by Sizes</h3>
      <div className="filter-group">
        <label>EU39 <span className="filter-count">9</span></label>
        <label>EU40 <span className="filter-count">16</span></label>
        <label>EU41 <span className="filter-count">10</span></label>
        <label>EU42 <span className="filter-count">13</span></label>
        <label>EU42.5 <span className="filter-count">8</span></label>
        <label>EU43 <span className="filter-count">5</span></label>
        <label>EU43.5 <span className="filter-count">4</span></label>
        <label>EU44 <span className="filter-count">4</span></label>
        <label>EU45 <span className="filter-count">3</span></label>
        <label>EU46 <span className="filter-count">3</span></label>
      </div>


      <h3 className="filter-title">Product Status</h3>
      <div className="filter-group">
        <label><input type="checkbox" /> In Stock</label>
        <label><input type="checkbox" /> On Sale</label>
      </div>
    </aside>


  );



};




export default FilterSideBar;
