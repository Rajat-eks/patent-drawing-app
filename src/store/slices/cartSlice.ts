import { createSlice } from "@reduxjs/toolkit";

interface ICART {
  itemId: string;
  ndaDetails: {
    name: string;
    email: string;
    organization: string;
    address: string;
  };
  quantity: number;
  isNDAPlace: boolean;
  docketNumber: string;
  file: [string];
  alreadySignedNDA: boolean;
  deliverySpeed: string;
  outPutFormat: string;
  patentOffice: string;
  applicationFillingDate: string;
  additionalInfromation: string;
}

interface INITIAL_INTERFACE {
  item: ICART[];
  totalAmount: 0;
  totalItem: 0;
}

const initialState: INITIAL_INTERFACE = {
  item: [],
  totalAmount: 0,
  totalItem: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDITEM: (state, action) => {
      const { itemId, quantity } = action.payload;

      const isExist = state.item?.find(
        (item: ICART) => item?.itemId === itemId
      );
      if (isExist) {
        isExist.quantity = isExist.quantity + quantity;
      } else {
        state.item.push({ ...action.payload });
      }
    },

    REMOVEITEM: (state, action) => {
      state.item = state.item.filter((item) => item.itemId !== action.payload); // Update the state with filtered items
    },

    REMOVEALLITEM: (state) => {
     
      state.item = []; // Update the state with filtered items
    },

    ADDQUANTITY: (state, action) => {
      const item = state.item.find((item) => item.itemId == action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    SUBQUANTITY: (state, action) => {
      const item = state.item.find((item) => item.itemId == action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { ADDITEM, REMOVEITEM, ADDQUANTITY, SUBQUANTITY ,REMOVEALLITEM} =
  cartSlice.actions;
export default cartSlice.reducer;
