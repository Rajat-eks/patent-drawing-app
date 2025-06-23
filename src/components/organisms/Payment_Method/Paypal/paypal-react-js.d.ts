declare module "@paypal/react-paypal-js" {
    import * as React from "react";
  
    export interface PayPalScriptOptions {
      "client-id": string; // PayPal Client ID
      currency?: string; // Currency code (e.g., 'USD')
      intent?: "capture" | "authorize"; // Intent for payment
    }
  
    export interface PayPalButtonsComponentProps {
      createOrder?: (data: any, actions: any) => Promise<string | undefined>; // Returns the order ID
      onApprove?: (data: any, actions: any) => Promise<void>; // Handle order approval
    }
  
    export interface PayPalScriptProviderProps {
      options: PayPalScriptOptions;
      children?: React.ReactNode; 
    }
  
    export const PayPalScriptProvider: React.FC<PayPalScriptProviderProps>;
    export const PayPalButtons: React.FC<PayPalButtonsComponentProps>;
  }
  