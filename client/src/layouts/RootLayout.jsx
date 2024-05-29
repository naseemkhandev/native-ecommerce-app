import {View, SafeAreaView, ScrollView} from 'react-native';

import Footer from './Footer';

const RootLayout = ({children}) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View>{children}</View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
export default RootLayout;
