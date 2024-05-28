import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {categories} from '../../data/categories';

const Categories = () => {
  return (
    <ScrollView
      className="p-5 pt-3"
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-3">
        {categories.map(category => (
          <TouchableOpacity key={category?.id} activeOpacity={0.6}>
            <View className="w-20 aspect-square bg-grey rounded-full flex items-center justify-center">
              <Icon name={category?.icon} size={35} color="#000000" />
            </View>

            <Text className="text-base text-center mt-1 text-secondary font-medium">
              {category?.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default Categories;
