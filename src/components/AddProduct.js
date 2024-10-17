import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function AddProduct() {

  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const api_URL = "http://localhost:3344/products";

  const funcForm = (e) => {
    let data = {
      title: title,
    };
    e.preventDefault();
    fetch(api_URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch();
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form
              onSubmit={(event) => {
                funcForm(event);
              }}
            >
              <div className="mb-3">
                <label for="title" className="form-label">
                  Product Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  step={0.01}
                  className="form-control"
                  id="price"
                />
              </div>
              <div className="mb-3">
                <label for="price" className="form-label">
                  Image URL
                </label>
                <input
                  name="image"
                  type="url"
                  className="form-control"
                  id="imgUrl"
                />
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
