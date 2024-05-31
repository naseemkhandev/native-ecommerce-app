import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OrdersHeader from '../components/Orders/OrdersHeader';
import RootLayout from '../layouts/RootLayout';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {orders} from '../data/orders';

const Orders = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <OrdersHeader />

      <RootLayout>
        <ScrollView className="flex-1 mt-16">
          {orders.map(order => (
            <View
              key={order?.id}
              className="rounded-2xl mx-5 my-3 shadow-xl shadow-black/30 bg-white">
              <View className="px-5 py-3 border-b border-gray-300 flex flex-row items-center">
                <View className="p-2 rounded-full bg-blue-100 w-12 flex items-center justify-center aspect-square">
                  <FontAwesome6Brands
                    name="first-order"
                    size={25}
                    color="#5AB2FF"
                  />
                </View>

                <View className="ml-3">
                  <Text className="text-lg font-semibold text-black">
                    {order?.status}
                  </Text>
                  <Text className="text-base font-medium">{order?.date}</Text>
                </View>

                <TouchableOpacity className="ml-auto">
                  <FontAwesome6
                    name="chevron-right"
                    size={20}
                    color="#B4B4B8"
                  />
                </TouchableOpacity>
              </View>

              {order?.products.map(product => (
                <View
                  key={product?.id}
                  className="w-full flex flex-row p-5 border-b-[2px] border-grey">
                  <Image
                    source={{uri: product?.image}}
                    className="w-24 aspect-square bg-grey rounded-xl mr-3"
                  />

                  <View className="flex-1 flex-grow">
                    <Text className="capitalize text-lg text-left font-semibold text-secondary">
                      {product?.name?.length > 15
                        ? product?.name?.slice(0, 15) + '...'
                        : product?.name}
                    </Text>

                    <Text className="capitalize mt-1 text-left text-secondary/70 text-base">
                      {product?.category}
                    </Text>

                    <View className="flex flex-row items-center justify-between flex-1">
                      <Text className="capitalize text-xl font-semibold text-secondary">
                        ${product?.price}.00
                      </Text>

                      <Text className="text-lg font-semibold text-black text-center">
                        Qty: {product?.quantity}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </RootLayout>
    </SafeAreaView>
  );
};
export default Orders;
