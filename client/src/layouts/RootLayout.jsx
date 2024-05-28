import {View, SafeAreaView, ScrollView} from 'react-native';

import Header from './Header';
import Footer from './Footer';

const RootLayout = ({children}) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <Header />
        <View>{children}</View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
export default RootLayout;
