import React from "react";
import { useState, useEffect } from 'react';
import OutputData from "./OutputData";

const LoadData = () => {

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    const res = await fetch(
      `http://localhost:3000/data`
    );

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }

    const json = await res.json();

    setDocs(json);

  }

  console.log(docs);

  return (
    <OutputData docs={docs} />
  );

}

export default LoadData;
