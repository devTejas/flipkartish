import React, { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import "./FilterActions.css";

export default function FilterActions() {
  const { clearFilters, updateFilters } = useContext(ProductsContext);

  return (
    <div className="filterContainer">
      <div className="sortPrices">
        <h3
          style={{
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "#2874f0",
            color: "white",
          }}
        >
          PRICES
        </h3>
        <label>
          <input
            type="radio"
            id="lowToHigh"
            name="price"
            onChange={updateFilters}
          />
          LOW TO HIGH
        </label>
        <label>
          <input
            type="radio"
            id="highToLow"
            name="price"
            onChange={updateFilters}
          />
          HIGH TO LOW
        </label>
      </div>
      <div className="sortSizes">
        <h3
          style={{
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "#2874f0",
            color: "white",
          }}
        >
          SIZES
        </h3>
        <label>
          <input type="radio" id="S" name="size" onChange={updateFilters} />S
        </label>
        <label>
          <input type="radio" id="M" name="size" onChange={updateFilters} />M
        </label>
        <label>
          <input type="radio" id="L" name="size" onChange={updateFilters} />L
        </label>
        <label>
          <input type="radio" id="XL" name="size" onChange={updateFilters} />
          XL
        </label>
      </div>
      <div className="sortBrands">
        <h3
          style={{
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "#2874f0",
            color: "white",
          }}
        >
          BRANDS
        </h3>
        <label>
          <input
            type="radio"
            id="Fjallraven"
            name="brand"
            onChange={updateFilters}
          />
          FJALLRAVEN
        </label>
        <label>
          <input type="radio" id="Nike" name="brand" onChange={updateFilters} />
          NIKE
        </label>
        <label>
          <input
            type="radio"
            id="Christian Dor"
            name="brand"
            onChange={updateFilters}
          />
          CHRISTIAN DOR
        </label>
        <label>
          <input
            type="radio"
            id="John Hardy"
            name="brand"
            onChange={updateFilters}
          />
          JOHN HARDY
        </label>
        <label>
          <input
            type="radio"
            id="Lalitha Jewelers"
            name="brand"
            onChange={updateFilters}
          />
          LALITHA JEWELERS
        </label>
        <label>
          <input
            type="radio"
            id="Malabar Gold"
            name="brand"
            onChange={updateFilters}
          />
          MALABAR GOLD
        </label>
        <label>
          <input
            type="radio"
            id="Sandisk"
            name="brand"
            onChange={updateFilters}
          />
          SANDISK
        </label>
        <label>
          <input type="radio" id="Acer" name="brand" onChange={updateFilters} />
          ACER
        </label>
        <label>
          <input
            type="radio"
            id="Samsung"
            name="brand"
            onChange={updateFilters}
          />
          SAMSUNG
        </label>
        <label>
          <input
            type="radio"
            id="KensieGirl"
            name="brand"
            onChange={updateFilters}
          />
          KENSIE GIRL
        </label>
        <label>
          <input
            type="radio"
            id="Calvin Klein"
            name="brand"
            onChange={updateFilters}
          />
          CALVIN KLEIN
        </label>
        <label>
          <input type="radio" id="Zara" name="brand" onChange={updateFilters} />
          ZARA
        </label>
      </div>
      <div className="sortTypes">
        <h3
          style={{
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "#2874f0",
            color: "white",
          }}
        >
          TYPES
        </h3>
        <label>
          <input
            type="radio"
            id="men"
            name="category"
            onChange={updateFilters}
          />
          MEN
        </label>
        <label>
          <input
            type="radio"
            id="women"
            name="category"
            onChange={updateFilters}
          />
          WOMEN
        </label>
        <label>
          <input
            type="radio"
            id="others"
            name="category"
            onChange={updateFilters}
          />
          OTHERS
        </label>
        {/* <label>
          <input
            type="radio"
            id="electronics"
            name="electronics"
            onChange={updateFilters}
          />
          ELECTRONICS
        </label>
        <label>
          <input
            type="radio"
            id="jewelers"
            name="jewelers"
            onChange={updateFilters}
          />
          JEWELERS
        </label> */}
      </div>
      <button
        style={{
          borderRadius: "5px",
          backgroundColor: "#2874f0",
          color: "white",
          fontWeight: "bold",
          marginTop: "30px",
          padding: "8px",
        }}
        onClick={() => {
          document
            .querySelectorAll("input[type=radio]")
            .forEach((item) => (item.checked = false));
          clearFilters();
        }}
      >
        CLEAR FILTERS
      </button>
    </div>
  );
}

/**
 * Sort price -> prod.sort((a,b)=>a.price>b.price)
 *
 * Size -> prod.filter(x=>x.size==='size')
 *
 * Brand -> same as size
 *
 * type -> same as size
 *
 * For multiple features -> store all the filters in separate array
 *
 * upon clear all features -> assign state to filters array
 */
