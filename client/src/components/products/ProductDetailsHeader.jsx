import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProductDetailsHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center justify-between p-5 absolute w-full top-0 left-0 z-[100]">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-3 bg-white rounded-full"
        activeOpacity={0.7}>
        <Entypo name="chevron-thin-left" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        className="p-3 bg-white rounded-full"
        activeOpacity={0.7}>
        <Fontisto name="heart-alt" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
export default ProductDetailsHeader;
