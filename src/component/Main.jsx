import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CALCULATE_TOTAL_AMOUNT,
  GET_ALL_CALLCULATED_DATA,
  HANDLE_DELETE,
  HANDLE_INPUT,
} from "../redux/invoceReducer/type";

function Main() {
  const inputData = useSelector((state) => state.inputData);
  const totalAmount = useSelector((state) => state.totalAmount);
  const { item_qty, item_rate } = useSelector((state) => state.formValue);
  console.log(item_qty, item_rate);

  const dispatch = useDispatch();

  function handleChange(e, id) {
    const { name, value } = e.target;
    dispatch({ type: HANDLE_INPUT, payload: { name, value, id } });
    dispatch({ type: GET_ALL_CALLCULATED_DATA });
    dispatch({ type: CALCULATE_TOTAL_AMOUNT });
  }

  function handleDelete(id) {
    dispatch({ type: HANDLE_DELETE, payload: id });
    dispatch({ type: CALCULATE_TOTAL_AMOUNT });
  }

  useEffect(() => {
    dispatch({ type: GET_ALL_CALLCULATED_DATA });
    dispatch({ type: CALCULATE_TOTAL_AMOUNT });
  }, []);

  return (
    <div className="container py-5">
      <h1>Invoice</h1>
      <hr />
      <div className="col-3">
        <label htmlFor="">Name</label>
        <input type="text" className="form-control" />
      </div>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th> Sr no </th>
            <th>Name</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inputData.map((item, index) => {
            const { id, item_name, item_qty, item_rate, total } = item;

            return (
              <tr key={id}>
                <td> {id} </td>
                <td>
                  <input type="text" value={item_name} />
                </td>
                <td>
                  <input
                    type="number"
                    value={item_qty}
                    name="item_qty"
                    onChange={(e) => handleChange(e, id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="item_rate"
                    value={item_rate}
                    onChange={(e) => handleChange(e, id)}
                  />
                </td>
                <td> {total} </td>
                <td>
                  <button>Add More</button>{" "}
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end">
              Total Amount : {totalAmount}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Main;
