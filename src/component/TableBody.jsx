import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_MORE_FIELD,
  CALCULATE_TOTAL_AMOUNT,
  GET_ALL_CALLCULATED_DATA,
  HANDLE_DELETE,
  HANDLE_INPUT,
} from "../redux/invoceReducer/type";
function TableBody() {
  const inputData = useSelector((state) => state.inputData);

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

  return inputData.map((item, index) => {
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
  });
}

export default TableBody;
