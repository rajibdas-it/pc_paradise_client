import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <div className="bg-background">
          <>
            {getLayout(<Component {...pageProps} />)}
            <ToastContainer position="top-center" />
          </>
        </div>
      </SessionProvider>
    </Provider>
  );
}
