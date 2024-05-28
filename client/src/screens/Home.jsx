import Banner from '../components/home/Banner';
import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import RootLayout from '../layouts/RootLayout';

const Home = () => {
  return (
    <RootLayout>
      <Banner />
      <Categories />
      <Products />
    </RootLayout>
  );
};
export default Home;
