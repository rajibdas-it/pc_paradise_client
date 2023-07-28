import Navbar from "@/Components/shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default RootLayout;
