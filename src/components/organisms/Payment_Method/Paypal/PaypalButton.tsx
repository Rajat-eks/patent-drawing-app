import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CreateOrderPaypal } from "../../../../services/paypal/createOrder.service";
import { onApproveOrder } from "../../../../services/paypal/approveOrder.service";

const PaypalButton = ({ totalAmount }: any) => {
  const [orderID, setOrderID] = useState(null);

  // Create order (calls backend)
  const generateOrder = async () => {
    // try {
    //   // const response = await CreateOrderPaypal({ amount: totalAmount }); // Adjust amount as needed
    //   const { id } = response.data;
    //   setOrderID(id);
    //   console.log("id in response", response);
    //   return id;
    // } catch (error) {
    //   console.error("Error creating order:", error);
    // }
  };

  // Capture order (calls backend)
  const onApprove = async (data: any) => {
    try {
      const response = await onApproveOrder({ orderID: orderID });
    } catch (error) {
      console.error("Error capturing payment:", error);
    }
  };

  return (
    <main className="pt-[10px]">
      {/* <PayPalScriptProvider
        options={{
          "client-id":
            "Acmy66oaHd--MKyOEbvEBW7aasjefCHaxfTrOTvY3odF2HBCh8oFLDY6dwuSDtYy9SWto5LNuI-sacIW",
        }}
      >
        <PayPalButtons createOrder={generateOrder} onApprove={onApprove} />
      </PayPalScriptProvider> */}
    </main>
  );
};

export default PaypalButton;
