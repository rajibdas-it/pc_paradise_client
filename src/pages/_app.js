import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className="bg-background">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
