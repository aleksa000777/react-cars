import React from "react";

const FilterFavorite = ({ checked, onChange, copy = "Favorite" }) => (
  <form>
    <label>
      {copy}{" "}
      <input
        name="fav"
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
      />
    </label>
  </form>
);

export default FilterFavorite;
