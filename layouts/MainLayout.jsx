import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-light-gray font-testSoehne min-h-screen">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
