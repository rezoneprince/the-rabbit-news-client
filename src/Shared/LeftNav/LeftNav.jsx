import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categoris")
      .then((res) => res.json())
      .then((data) => setCategoris(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Category</h2>
      <div className="p-4">
        {categoris.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-secondary text-decoration-none fs-5"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
