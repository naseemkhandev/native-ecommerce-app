import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import CartHeader from '../components/cart/CartHeader';
import {products} from '../data/products';

const Cart = ({navigation}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CartHeader />

      <ScrollView className="flex-1 mt-16">
        <View className="flex flex-col gap-y-5 p-5">
          {products.map(product => (
            <View
              key={product?.id}
              className="w-full flex flex-row border-b-[2px] border-grey pb-4">
              <Image
                source={{uri: product?.image}}
                className="w-32 aspect-square bg-grey rounded-3xl mr-3"
              />

              <View className="flex-1 flex-grow">
                <View className="flex flex-row items-center justify-between">
                  <Text className="capitalize text-xl mr-2 text-left font-semibold text-secondary">
                    {product?.name?.length > 15
                      ? product?.name?.slice(0, 15) + '...'
                      : product?.name}
                  </Text>

                  <TouchableOpacity className="">
                    <Icon name="close" size={20} className="text-secondary" />
                  </TouchableOpacity>
                </View>

                <Text className="capitalize mt-1 text-left text-secondary/70 text-base">
                  {product?.category}
                </Text>

                <View className="flex flex-row items-center justify-between flex-1">
                  <Text className="capitalize text-xl font-semibold text-secondary">
                    ${product?.price}.00
                  </Text>

                  <View className="flex flex-row items-center gap-x-2">
                    <TouchableOpacity
                      onPress={() => setQuantity(Math.max(1, quantity - 1))}
                      className="border-grey border-[2px] p-3 rounded-xl">
                      <Fontisto name="minus-a" size={15} color="#2A2A2A" />
                    </TouchableOpacity>
                    <Text className="text-lg font-semibold text-black text-center">
                      {quantity}
                    </Text>
                    <TouchableOpacity
                      onPress={() => setQuantity(quantity + 1)}
                      className="border-primary border-[2px] p-3 rounded-xl">
                      <Fontisto name="plus-a" size={15} color="#19C463" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}

          <View className="space-y-1">
            <View className="flex flex-row items-center justify-between">
              <Text className="capitalize mt-1 text-left text-secondary text-lg">
                subtotal:
              </Text>

              <Text className="capitalize text-xl font-semibold text-secondary">
                $800.00
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="capitalize mt-1 text-left text-secondary text-lg">
                delivery fee:
              </Text>

              <Text className="capitalize text-xl font-semibold text-secondary">
                $5.00
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="capitalize mt-1 text-left text-secondary text-lg">
                Discount:
              </Text>

              <Text className="capitalize text-xl font-semibold text-secondary">
                40%
              </Text>
            </View>
          </View>

          <View className="border-t border-grey pt-3">
            <TouchableOpacity
              onPress={() => navigation.navigate('Checkout')}
              className="bg-primary p-5 rounded-2xl">
              <Text className="text-lg text-white text-center">
                Checkout for{' '}
                <Text className="capitalize text-xl font-semibold text-white">
                  $800.00
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Cart;
