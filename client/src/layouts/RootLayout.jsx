import {View, SafeAreaView} from 'react-native';

import Header from './Header';
import Footer from './Footer';

const RootLayout = ({children}) => {
  return (
    <SafeAreaView>
      <Header />
      <View>{children}</View>
      <Footer />
    </SafeAreaView>
  );
};
export default RootLayout;
