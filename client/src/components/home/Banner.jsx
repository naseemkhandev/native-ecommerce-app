import {Image, Text, TouchableOpacity, View} from 'react-native';

const Banner = () => {
  return (
    <View className="w-full p-3">
      <View className="rounded-3xl bg-primary relative flex flex-row">
        <View className="w-1/2 pt-5 pl-5">
          <Text className="font-semibold text-3xl text-white">Clearance</Text>
          <Text className="font-semibold text-3xl text-white block">Sales</Text>
          <TouchableOpacity className="py-2 px-4 bg-white rounded-3xl mt-4 mr-auto">
            <Text className="text-primary font-medium text-base">
              Upto 50% off
            </Text>
          </TouchableOpacity>
        </View>

        <View className="w-1/2 h-full flex items-center justify-center -mt-10">
          <Image
            source={require('../../assets/images/banner.png')}
            className="w-[125%] h-full mt-20"
          />
        </View>
      </View>
    </View>
  );
};
export default Banner;
