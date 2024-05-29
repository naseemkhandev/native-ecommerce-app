import Banner from '../components/home/Banner';
import Categories from '../components/home/Categories';
import HomeHeader from '../components/home/HomeHeader';
import Products from '../components/products/Products';
import RootLayout from '../layouts/RootLayout';

const Home = () => {
  return (
    <RootLayout>
      <HomeHeader />
      <Banner />
      <Categories />
      <Products />
    </RootLayout>
  );
};
export default Home;
