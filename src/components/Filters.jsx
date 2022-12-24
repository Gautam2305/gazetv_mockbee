import React from "react";

export const Filters = ({item}) => {
    return(
        <div className="filter-container">
                <div>
                        <button key={item.id} className="filter-button" > Informative </button>
                        <button key={item.id} className="filter-button" > Music </button>
                        <button key={item.id} className="filter-button" > Comedy </button>
                        <button key={item.id} className="filter-button" > Movies </button>
                </div>
        </div>
    )
}