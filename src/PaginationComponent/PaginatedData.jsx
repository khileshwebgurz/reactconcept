import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const PaginatedData = () => {
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:3000/api?page=${page}&limit=5&search=${searchItem}&order=${order}`
      );
      setPaginatedData(res.data.todos);
      setTotalPages(res.data.totalPages);
    };
    getData();
  }, [page, searchItem,order]);
  const handlePrevBtnClick = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextBtnClick = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handleOrder = ()=>{
    if(order === 'asc'){
        setOrder('desc')
    }else{
        setOrder('asc')
    }
  }

  return (
    <>
      <div>
        <h2>Todos - Page {page}</h2>
        <ul>
          {paginatedData.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>

        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button onClick={handleOrder} >
          {order}
        </button>
        <button onClick={handlePrevBtnClick} disabled={page <= 1}>
          Prev
        </button>
        <button onClick={handleNextBtnClick} disabled={page >= totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default PaginatedData;
