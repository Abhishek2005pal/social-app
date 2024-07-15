import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ marginLeft: "2rem" }}>
      <div className="px-4 py-5 my-5 text-center">

        <h1 className="display-5 fw-bold text-body-emphasis">The Role of Nature Photography in Conservation Efforts</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">The beauty of nature is a timeless source of inspiration and tranquility, capturing the essence of life in its purest form. A single image of a serene landscape, with its vibrant colors and intricate details, can evoke a sense of peace and wonder.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>

      <h1 style={{ fontFamily: "sans-serif", color: "black", fontWeight: "bold" }}>Beautiful Nature Images</h1>

      <div style={{ display: "flex" }}>
        {photos.map((data, index) => (
          <div key={index} className="card" style={{ width: "18rem", margin: "15px" }}>
            <img src={data.photo} className="card-img-top" alt={data.title || "Nature Photo"} />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.text}</p>
              <a href={data.link || "#"} className="btn btn-primary">{data.button}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://www.ck12.org/flx/show/cover%20page/tmpxu4v90gy.png" className="d-block mx-lg-auto img-fluid" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Biodiversity and Its Importance</h1>
          <p className="lead">Biodiversity, or biological diversity, refers to the variety of life on Earth at all levels, from genes and species to ecosystems. It is the result of billions of years of evolution, shaped by natural processes and, increasingly, by human influence. Biodiversity is crucial for the health of the planet and the well-being of humanity, providing essential services and contributing to ecosystem stability and resilience.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
