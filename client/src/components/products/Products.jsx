import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {products} from '../../data/products';

const Products = () => {
  const navigation = useNavigation();

  return (
    <View className="p-5">
      <View className="flex flex-row items-center justify-between mb-5">
        <Text className="text-xl font-bold text-secondary">Today Sale!</Text>
        <TouchableOpacity>
          <Text className="text-primary text-base font-medium">See all</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row gap-x-2 gap-y-8 justify-between flex-wrap">
        {products.map(product => (
          <View key={product?.id} className="w-[47%]">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('ProductDetails', {_id: product?.id})
              }>
              <Image
                source={{uri: product?.image}}
                className="w-full aspect-square bg-grey rounded-3xl"
              />

              <Text className="capitalize text-lg mt-2 text-left font-semibold text-secondary">
                {product?.name?.length > 15
                  ? product?.name?.slice(0, 15) + '...'
                  : product?.name}
              </Text>

              <View className="flex flex-row items-center justify-between">
                <Text className="capitalize mt-1 text-left text-secondary text-base">
                  {product?.category}
                </Text>
                <Text className="capitalize text-xl mt-1 text-left font-bold text-secondary">
                  ${product?.price}.00
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Products;
