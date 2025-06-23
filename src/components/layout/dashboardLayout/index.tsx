'use client'
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <main>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <section className="pt-[100px]">{children}</section>
          <Footer />
        </PersistGate>
      </Provider>
    </main>
  );
};

export default DashboardLayout;
