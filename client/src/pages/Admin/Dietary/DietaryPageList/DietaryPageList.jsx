import React, { useState, useEffect } from "react";
import axios from "axios";
import Dietary from "../../../../components/Dietary/Dietary";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";

const url =
  `${process.env.REACT_APP_ITEMS_SERVICE_URL}/api` || "http://localhost:80";

function DietaryPageList() {
  const [dietaries, setDietary] = useState([]);

  useEffect(() => {
    axios.get(`${url}/items/dietary`).then((response) => {
      setDietary(response.data);
      console.log(response.data);
    });
  }, []);

  function deleteItem(id) {
    axios.delete(`${url}/items/dietary/${id}`).then((response) => {
      setDietary((prevItems) =>
        prevItems.filter((dietary) => dietary._id !== id)
      );
    });
  }
  return (
    <div>
      <h1>Dietary List Page</h1>
      <div className="page-container">
        <table className="centered-table">
          <thead>
            <tr>
              <th>Categorias</th>
              <th className="w-[300px]">Descricação</th>
              <th colSpan="2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dietaries.map((dietary) => (
              <tr key={dietary._id}>
                <td>
                  <Dietary dietary={dietary} />
                </td>
                <td>{dietary.description}</td>
                <td>
                  <Link to={`/editDietary/${dietary._id}`}>
                    <button className="button-acoes-edit">
                      <FaPen />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="button-acoes-delete"
                    onClick={() => deleteItem(dietary._id)}
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DietaryPageList;
