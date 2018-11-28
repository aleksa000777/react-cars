import React from "react";

const Favorite = ({ vin, data }) => {
  const checked =
    data.state.favorite[vin] === undefined ? false : data.state.favorite[vin];
  const { handleCheckbox } = data;

  return (
    <form>
      <label>
        Favorive:
        <input
          name="fav"
          type="checkbox"
          defaultChecked={checked}
          onChange={e => handleCheckbox(e, vin)}
        />
      </label>
    </form>
  );
};

export default Favorite;
