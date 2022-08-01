import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_DATA,
  ADD_MORE_FIELD,
  CALCULATE_TOTAL_AMOUNT,
  GET_ALL_CALLCULATED_DATA,
  HANDLE_DELETE,
  HANDLE_INPUT,
} from "../redux/invoceReducer/type";
import InvoiceHeader2 from "./InvoiceHeader2";
import TableBody from "./TableBody";

function Main() {
  const inputData = useSelector((state) => state.inputData);
  const totalAmount = useSelector((state) => state.totalAmount);
  const { item_qty, item_rate } = useSelector((state) => state.formValue);
  console.log(item_qty, item_rate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_CALLCULATED_DATA });
    dispatch({ type: CALCULATE_TOTAL_AMOUNT });
  }, []);

  return (
    <div className="container py-5">
      <h1>Invoice</h1>
      <hr />
      <InvoiceHeader2 />
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
          <TableBody />
          {/* {inputData.map((item, index) => {
            const { id, item_name, item_qty, item_rate, total } = item;
            return (
              <tr key={id}>
                <td> {id} </td>
                <td>
                  <input
                    type="text"
                    value={item_name}
                    name="item_name"
                    onChange={(e) => handleChange(e, id)}
                  />
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
                  <button onClick={() => dispatch({ type: ADD_MORE_FIELD })}>
                    Add More
                  </button>{" "}
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end">
              Total Amount : {totalAmount.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => dispatch({ type: ADD_DATA })}>Add Data</button>
    </div>
  );
}

export default Main;
