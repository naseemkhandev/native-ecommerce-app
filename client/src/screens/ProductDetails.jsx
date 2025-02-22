import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import ProductDetailsHeader from '../components/products/ProductDetailsHeader';
import {products} from '../data/products';

const ProductDetails = ({route}) => {
  const [productDetails, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const id = route?.params?._id;

  const getProductDetails = () => {
    const product = products.find(product => product.id === id);
    if (product) {
      setProductDetails(product);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProductDetailsHeader />

      <ScrollView className="flex-1">
        <View className="relative h-96">
          <View className="absolute top-0 left-0 w-full h-full bg-black/10 z-[1]"></View>
          <Image
            source={
              productDetails?.image?.length
                ? {uri: productDetails?.image}
                : require('../assets/images/no-product-image.png')
            }
            resizeMode="cover"
            className="w-full h-full bg-white"
          />
        </View>

        <View className="p-5 bg-white rounded-t-3xl -mt-10 shadow-lg shadow-black/50 z-[5]">
          <Text className="capitalize text-2xl font-semibold text-secondary">
            {productDetails?.name}
          </Text>

          <View className="flex flex-row items-center justify-between mt-1">
            <Text className="capitalize text-left text-neutral-500 text-lg">
              {productDetails?.category}
            </Text>
            <Text className="capitalize text-2xl text-left font-bold text-secondary">
              <Text className="text-primary">$</Text>
              {productDetails?.price}.00
            </Text>
          </View>

          <View className="flex flex-row items-center gap-2 mt-2">
            <View className="rounded-full px-2 pr-4 py-0.5 border border-grey flex flex-row items-center gap-x-1.5">
              <FontAwesome name="star" size={15} color="#FFD700" />
              <Text className="text-black font-semibold text-lg">
                {productDetails?.rating}
              </Text>
            </View>
            <Text className="text-neutral-500 text-base">
              {productDetails?.reviews} reviews
            </Text>
          </View>

          <Text className="mt-5 text-secondary text-base text">
            {productDetails?.desc}
          </Text>
        </View>
      </ScrollView>

      <View className="flex flex-row items-center justify-between px-5 py-3 bg-white shadow-lg shadow-black/50 mb-5 gap-x-3">
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart', {id, quantity})}
          className="bg-primary p-5 rounded-2xl flex-1">
          <Text className="text-xl font-semibold text-white text-center">
            Add to cart
          </Text>
        </TouchableOpacity>

        <View className="flex flex-row items-center gap-x-3">
          <TouchableOpacity
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
            className="border-grey border-[2px] p-3.5 rounded-2xl">
            <FontAwesome name="minus" size={18} color="#2A2A2A" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-black text-center">
            {quantity}
          </Text>
          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            className="border-primary border-[2px] p-3.5 rounded-2xl">
            <FontAwesome name="plus" size={18} color="#19C463" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetails;
