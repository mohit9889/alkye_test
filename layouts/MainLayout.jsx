import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-gray font-testSoehne">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
