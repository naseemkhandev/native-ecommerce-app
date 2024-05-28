import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GoBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="p-5"
      activeOpacity={0.7}>
      <Ionicons name="return-up-back-outline" size={35} color="#000" />
    </TouchableOpacity>
  );
};
export default GoBack;
