import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_DISCOUNT,
  ADD_IGST,
  ADD_SGST,
  HANDLE_DATE,
  HANDLE_NAME,
} from "../redux/invoceReducer/type";
function InvoiceHeader() {
  const [discount, setDiscount] = useState(0);

  const formValue = useSelector((state) => state.invoiceHeaderFormValue);
  console.log(formValue);
  const dispatch = useDispatch();

  function handleDiscount(e) {
    setDiscount(e.target.value);
    dispatch({ type: ADD_DISCOUNT, payload: e.target.value });
  }

  function handleIGST(e) {
    dispatch({ type: ADD_IGST, payload: e.target.value });
  }

  function handleSGST(e) {
    dispatch({ type: ADD_SGST, payload: e.target.value });
  }

  function handleDate(e) {
    dispatch({ type: HANDLE_DATE, payload: e.target.value });
  }

  function handleFirstName(e) {
    dispatch({ type: HANDLE_NAME, payload: e.target.value });
  }

  return (
    <>
      <div className="row">
        <div className="col-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formValue.name}
            onChange={handleFirstName}
          />
        </div>
        <div className="col-2">
          <label htmlFor="">Due Date</label>
          <input
            type="date"
            name="dueDate"
            className="form-control"
            value={formValue.dueDate}
            onChange={handleDate}
          />
        </div>
        <div className="col-2">
          <label htmlFor="">SGST</label>
          <input
            type="number"
            name="SGST"
            placeholder="SGST"
            className="form-control"
            value={formValue.SGST}
            onChange={handleSGST}
          />
        </div>
        <div className="col-2">
          <label htmlFor="">IGST</label>
          <input
            type="number"
            name="IGST"
            placeholder="IGST"
            className="form-control"
            value={formValue.IGST}
            onChange={handleIGST}
          />
        </div>
        <div className="col-2">
          <label htmlFor="">Discount</label>
          <input
            type="number"
            name="discount"
            placeholder="Discount"
            className="form-control"
            value={formValue.discount}
            onChange={handleDiscount}
          />
        </div>
      </div>
    </>
  );
}

export default InvoiceHeader;
