import { useState, useEffect } from "react";
import { getAllCategories } from "../../api";
import { Preloader } from "../Preloader";
import { CategotyList } from "../CategotyList";

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategotyList catalog={catalog} />}</>
  );
}

export { Home };
