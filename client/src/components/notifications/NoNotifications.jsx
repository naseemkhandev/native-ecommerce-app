import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NoNotifications = () => {
  return (
    <View className="flex-1 flex items-center justify-center flex-grow mt-52">
      <Icon name="notifications-off" size={150} color="#F1F1F1" />
      <Text className="text-lg text-secondary text-center">
        Oops! You don't have any notifications yet
      </Text>
    </View>
  );
};
export default NoNotifications;
