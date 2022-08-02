import { Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  HANDLE_TBODY_FORM_VALUE,
  HANDLE_TBODY_FORM_VALUE_TOTAL_AMOUNT,
} from "../redux/invoceReducer/type";

function TableBody() {
  const inputData = useSelector((state) => state.inputData);

  const dispatch = useDispatch();

  function handleChange(e, id, total) {
    const { name, value } = e.target;
    dispatch({ type: HANDLE_TBODY_FORM_VALUE, payload: { name, value, id } });
  }

  return (
    inputData &&
    inputData.map((item, index) => {
      let totalAmount = item[`item_rate.${index}`] * item[`item_qty.${index}`];
      const { id } = item;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <Field
              name={`item_name.${index}`}
              onChange={(e) => handleChange(e, id)}
            />
          </td>
          <td>
            <Field
              name={`item_qty.${index}`}
              onChange={(e) => handleChange(e, id)}
            />
          </td>
          <td>
            <Field
              name={`item_rate.${index}`}
              onChange={(e) => handleChange(e, id)}
            />
          </td>
          <td>
            <p>
              {item[`item_rate.${index}`] * item[`item_qty.${index}`]
                ? item[`item_rate.${index}`] * item[`item_qty.${index}`]
                : 0}
            </p>
          </td>
          <td>
            <button>Delete</button>
            <button> Add More </button>
          </td>
        </tr>
      );
    })
  );
}

export default TableBody;
