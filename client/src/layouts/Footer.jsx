import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';

import {footer} from '../constants/footer';

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const user = true;

  return (
    <View className="bg-white shadow-xl shadow-black w-full px-5 pt-3 pb-5 z-50 flex items-center flex-row justify-between">
      {footer.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="flex items-center"
          onPress={() => {
            if (item.text === 'Profile') {
              if (user) {
                navigation.navigate('Profile');
              } else {
                navigation.navigate('Login');
              }
            } else {
              navigation.navigate(item.text);
            }
          }}>
          <Icon
            name={item.icon}
            color={route?.name === item?.text ? '#48D861' : '#2A2A2A'}
            size={25}
          />
          <Text
            className={`text-center ${
              route?.name === item?.text ? 'text-primary' : 'text-secondary'
            }`}>
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;
