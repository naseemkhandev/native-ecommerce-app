import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Checkout = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="items-center mt-24 p-5 space-y-2">
          <Text className="text-3xl font-semibold text-black">
            Payment Options
          </Text>
          <Text className="text-lg mb-5">
            Total Amount:{' '}
            <Text className="text-secondary text-xl font-semibold">
              $800.00
            </Text>
          </Text>

          <View className="flex flex-col w-full p-5 bg-white rounded-xl shadow-md shadow-black/50 space-y-2">
            <Text className="text-left capitalize mb-3 text-base text-secondary">
              Select your payment mode:
            </Text>

            <TouchableOpacity className="bg-primary p-4 rounded-xl w-full">
              <Text className="text-lg text-white text-center">
                Cash on Delivery
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-primary p-4 rounded-xl w-full">
              <Text className="text-lg text-white text-center">
                Online Payment (Card)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Checkout;
