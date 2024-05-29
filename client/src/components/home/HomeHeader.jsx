import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeHeader = () => {
  return (
    <View className="p-3 gap-y-2">
      <View className="flex-row items-center justify-between">
        <Text className="font-medium text-2xl text-secondary">Discover</Text>

        <TouchableOpacity className="relative w-11 aspect-square rounded-full border border-grey flex items-center justify-center">
          <Icon name="bag-outline" size={20} color="black" />

          <Text className="w-5 aspect-square bg-primary rounded-full text-white flex items-center justify-center text-center absolute -top-1 -right-1">
            5
          </Text>
        </TouchableOpacity>
      </View>

      <View className="relative">
        <TextInput
          placeholder="Search"
          className="bg-grey w-full rounded-xl py-3.5 pl-5 pr-10 text-base text-black"
        />

        <TouchableOpacity className="w-5 aspect-square absolute top-[30%] right-4">
          <Icon name="search-outline" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeHeader;
