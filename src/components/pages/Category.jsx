import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getFilterCategory } from "../../api";

import { Preloader } from "../Preloader";
import { MealList } from "../MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn #546e7a blue-grey darken-1" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
