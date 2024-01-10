import React, { useState, useEffect } from "react";
import axios from "axios";


import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";

import { Link, useNavigate } from "react-router-dom";
const baseURL =
  "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=inr";

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(baseURL);
    setData(response.data);
  }
  const navigate = useNavigate();

  function toComponentB(id) {
    navigate("/" + id, { state: { data } });
  }
  // toComponentB();
  function deleteNote(id) {
    console.log(
      data.filter(function (person) {
        return person.id == id;
      })
    );
    setData((data) => {
      console.log();
      return data.filter(function (person) {
        return person.id == id;
      });
    });
  }
  if (data.length == 1) {
    return (
      <div>
       
        {data.slice((page - 1) * 5, 5 * page).map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem.id}
              title={noteItem.name}
              content={noteItem.description}
              onDelete={toComponentB}
            />
          );
        })}
        <Footer onNext={handleNext} />
      </div>
    );
  }

  function handleNext() {
    const length = data.length;
    const pages = length / 5;
    if (page < pages) setPage(() => page + 1);
  }
  function handlePrev() {
    // const length = data.length;
    // const pages = length / 5;
    if (page>1) setPage(() => page -1);
  }

  return (
    <div>
 
      {data.slice((page - 1) * 5, 5 * page).map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.name}
            content={noteItem.description.substring(0, 100) + "..."}
            onDelete={toComponentB}
          />
        );
      })}
      <Footer onNext={handleNext}
      onPrev={handlePrev} />
    </div>
  );
}

export default Home;
