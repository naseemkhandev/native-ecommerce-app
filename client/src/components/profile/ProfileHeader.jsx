import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center justify-between px-5 py-2 absolute w-full top-0 left-0 z-[100] bg-white">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-3 bg-white rounded-full border border-grey"
        activeOpacity={0.7}>
        <Entypo name="chevron-thin-left" size={20} color="#000" />
      </TouchableOpacity>

      <Text className="text-lg font-semibold text-black">My Account</Text>

      <TouchableOpacity
        className="p-3 bg-white rounded-full border border-grey"
        activeOpacity={0.7}>
        <Entypo name="dots-three-horizontal" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileHeader;
