import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <div className="bg-background">
        {getLayout(<Component {...pageProps} />)}
      </div>
    </Provider>
  );
}
