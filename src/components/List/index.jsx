import React from "react";
import { Link } from "react-router-dom";
import { FilterFavorite } from "..";
import styles from "./styles.sass"; // Css-module styles

const List = ({ vehicle = {}, data, filterData }) => {
  const { id, make, mileage, model, trim } = vehicle;
  const modelYear = vehicle.model_year;
  const chromeImageUrl = vehicle.chrome_image_url;
  const checked =
    data.state.favorite[id] === undefined ? false : data.state.favorite[id];

  return (
    <li className={styles.list}>
      <FilterFavorite
        checked={checked}
        onChange={e => {
          data.handleCheckbox(e, id);
          filterData();
        }}
        className="carFavorite"
      />
      <Link to={`/car/${id}`} className={styles.carListDetails}>
        <img className={styles.imageCar} src={chromeImageUrl} alt={model} />
        <div className={styles.details}>
          <p className={styles.title}>
            {modelYear} {make} {model}
          </p>
          <p>
            VIN:
            {id}
          </p>
          <p>
            Trim:
            {trim}
          </p>
          <p>
            {" "}
            Miles:
            {mileage}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default List;
