import {
  ADD_DISCOUNT,
  ADD_IGST,
  ADD_MORE_FIELD,
  ADD_SGST,
  CALCULATE_TOTAL_AMOUNT,
  GET_ALL_CALLCULATED_DATA,
  HANDLE_DATE,
  HANDLE_DELETE,
  HANDLE_INPUT,
  HANDLE_NAME,
} from "./type";

const initialState = {
  invoiceHeaderFormValue: {
    name: "",
    dueDate: "",
    SGST: 0,
    IGST: 0,
    discount: 0,
  },
  formValue: {
    item_qty: "",
    item_rate: "",
  },
  inputData: [
    {
      id: 0,
      item_name: "Item1",
      item_qty: 10,
      item_rate: 100,
    },
    {
      id: 1,
      item_name: "Item2",
      item_qty: 2,
      item_rate: 399,
    },
  ],
  totalAmount: 0,
  discount: 0,
};

export const reducer = (state = initialState, action) => {
  if (action.type === GET_ALL_CALLCULATED_DATA) {
    let calculatedTotalQtyAndRate = state.inputData.map((item) => {
      const { item_qty, item_rate } = item;

      return { ...item, total: item_qty * item_rate };
    });

    return { ...state, inputData: calculatedTotalQtyAndRate };
  }

  if (action.type === CALCULATE_TOTAL_AMOUNT) {
    let gettingTotal;
    if (state.inputData.length > 0) {
      gettingTotal = state.inputData
        .map((item) => item.total)
        .reduce((a, b) => a + b);
    } else {
      gettingTotal = 0;
    }

    return { ...state, totalAmount: gettingTotal };
  }

  if (action.type === HANDLE_INPUT) {
    const { name, value } = action.payload;
    const tempInputData = state.inputData.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    return { ...state, inputData: tempInputData };
  }

  if (action.type === HANDLE_DELETE) {
    let tempData = state.inputData.filter((item) => item.id != action.payload);
    return { ...state, inputData: tempData };
  }

  if (action.type === ADD_MORE_FIELD) {
    return {
      ...state,
      inputData: [
        ...state.inputData,
        {
          id: new Date().getTime().toString(),
          item_name: "",
          item_qty: "",
          item_rate: "",
        },
      ],
    };
  }

  if (action.type === ADD_DISCOUNT) {
    console.log(action.payload);

    return {
      ...state,
      totalAmount: Number(state.totalAmount) + Number(action.payload),
      invoiceHeaderFormValue: {
        ...state.invoiceHeaderFormValue,
        discount: action.payload,
      },
    };
  }

  if (action.type === ADD_IGST) {
    let tempAmount = (state.totalAmount * action.payload) / 100;
    console.log(tempAmount);

    return {
      ...state,
      invoiceHeaderFormValue: {
        ...state.invoiceHeaderFormValue,
        IGST: action.payload,
      },
      totalAmount: state.totalAmount + tempAmount,
    };
  }

  if (action.type === ADD_SGST) {
    let tempAmount = (state.totalAmount * action.payload) / 100;
    return {
      ...state,
      invoiceHeaderFormValue: {
        ...state.invoiceHeaderFormValue,
        SGST: action.payload,
      },
      totalAmount: state.totalAmount + tempAmount,
    };
  }

  if (action.type === HANDLE_DATE) {
    return {
      ...state,
      invoiceHeaderFormValue: {
        ...state.invoiceHeaderFormValue,
        dueDate: action.payload,
      },
    };
  }

  if (action.type === HANDLE_NAME) {
    return {
      ...state,
      invoiceHeaderFormValue: {
        ...state.invoiceHeaderFormValue,
        name: action.payload,
      },
    };
  }

  return state;
};
