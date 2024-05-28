import {View, SafeAreaView, ScrollView} from 'react-native';

import Header from './Header';
import Footer from './Footer';

const RootLayout = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView className="min-h-screen bg-white">
        <Header />
        <View>{children}</View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
export default RootLayout;
