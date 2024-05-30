import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full bg-white">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-5"
        activeOpacity={0.7}>
        <Ionicons name="return-up-back-outline" size={35} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
export default GoBack;
