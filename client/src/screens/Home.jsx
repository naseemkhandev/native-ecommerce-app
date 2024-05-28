import Banner from '../components/home/Banner';
import Categories from '../components/home/Categories';
import RootLayout from '../layouts/RootLayout';

const Home = () => {
  return (
    <RootLayout>
      <Banner />
      <Categories />
    </RootLayout>
  );
};
export default Home;
