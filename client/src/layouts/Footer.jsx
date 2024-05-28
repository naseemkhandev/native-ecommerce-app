import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {footer} from '../constants/footer';
import {useNavigation, useRoute} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  console.log(navigation.path);

  return (
    <View className="bg-white shadow-xl shadow-black w-full px-5 py-2 z-50 flex items-center flex-row justify-between">
      {footer.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="flex items-center"
          onPress={() => navigation.navigate(item?.text)}>
          <Icon
            name={item.icon}
            color={route?.name === item?.text ? '#48D861' : '#2A2A2A'}
            size={30}
          />
          <Text
            className={`text-center mt-1 ${
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
