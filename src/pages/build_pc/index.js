import PCBuildOptions from "@/Components/PCBuildOptions";
import RootLayout from "@/Layout/RootLayout";

const PCBuilderHomePage = () => {
  return (
    <div className="border border-red-800 container mx-auto">
      <PCBuildOptions />
    </div>
  );
};

export default PCBuilderHomePage;

PCBuilderHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
