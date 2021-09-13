import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MyCounterApplication />
    <MyApplication />
  </React.StrictMode>,
  document.getElementById("root")
);

function MyCounterApplication() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onMouseEnter={() => setCount(count - 1)}>kurangi</button>
      <input value={count} />
      <button onMouseEnter={() => setCount(count + 1)}>tambah</button>
    </div>
  );
}

function MyApplication() {
  const [activeId, setActiveId] = useState("3");

  return (
    <div>
      <PersonCard
        name="Jack Sparrow"
        job="Pirates"
        hobby="Sailing"
        showDetail={activeId === "1" ? true : false}
        onClick={() => setActiveId("1")}
      />
      <PersonCard
        name="Bruce Wayne"
        job="Batman"
        hobby="Capturing bad guys"
        showDetail={activeId === "2" ? true : false}
        onClick={() => setActiveId("2")}
      />
      <PersonCard
        name="Joker"
        job="Joker"
        hobby="Creating chaos"
        showDetail={activeId === "3" ? true : false}
        onClick={() => setActiveId("3")}
      />
    </div>
  );
}

function PersonCard({ name, job, hobby, showDetail, onClick }) {
  // const [showDetail, setShowDetail] = useState(true);

  return (
    <div className="card_container" onClick={onClick}>
      <p className="card_name">Nama: {name}</p>
      {showDetail ? (
        <div>
          <p className="card_job">Pekerjaan: {job}</p>
          <p className="card_hobby">Hobi: {hobby}</p>
        </div>
      ) : null}
    </div>
  );
}
