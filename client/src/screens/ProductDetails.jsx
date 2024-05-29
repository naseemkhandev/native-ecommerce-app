import {View, Text, ScrollView, SafeAreaView} from 'react-native';

import ProductDetailsHeader from '../components/products/ProductDetailsHeader';

const ProductDetails = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProductDetailsHeader />

      <ScrollView className="flex-1">
        <View>
          <Text>ProductDetails</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductDetails;
