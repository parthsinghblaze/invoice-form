import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DISCOUNT } from "../redux/invoceReducer/type";
function InvoiceHeader() {
  const [discount, setDiscount] = useState(0);

  const formValue = useSelector((state) => state.invoiceHeaderFormValue);
  console.log(formValue);
  const dispatch = useDispatch();

  function handleDiscount(e) {
    setDiscount(e.target.value);
    dispatch({ type: ADD_DISCOUNT, payload: e.target.value });
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
          />
        </div>
        <div className="col-2">
          <label htmlFor="">Due Date</label>
          <input
            type="date"
            name="dueDate"
            className="form-control"
            value={formValue.dueDate}
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
          />
        </div>
      </div>
    </>
  );
}

export default InvoiceHeader;
