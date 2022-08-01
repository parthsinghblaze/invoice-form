import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HANDLE_FORM_VALUE } from "../redux/invoceReducer/type";

function InvoiceHeader() {
  const formikFormValue = useSelector((state) => state.formikForm);

  const initialValues = formikFormValue;

  function onSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  useEffect(() => {
    dispatch({ type: HANDLE_FORM_VALUE, payload: formik.values });
  }, [formik.values]);

  const dispatch = useDispatch();

  // function handleInputValue(e) {
  //   const { name, value } = e.target;
  //   dispatch({ type: HANDLE_FORM_VALUE, payload: { name, value } });
  // }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-2">
            <label htmlFor="">Due Date</label>
            <input
              type="date"
              name="dueDate"
              className="form-control"
              value={formik.values.dueDate}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-2">
            <label htmlFor="">SGST</label>
            <input
              type="number"
              name="SGST"
              placeholder="SGST"
              className="form-control"
              value={formik.values.SGST}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-2">
            <label htmlFor="">IGST</label>
            <input
              type="number"
              name="IGST"
              placeholder="IGST"
              className="form-control"
              value={formik.values.IGST}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-2">
            <label htmlFor="">Discount</label>
            <input
              type="number"
              name="discount"
              placeholder="Discount"
              className="form-control"
              value={formik.values.discount}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default InvoiceHeader;
