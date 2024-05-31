import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useState} from 'react';

import ProfileHeader from '../components/profile/ProfileHeader';
import RootLayout from '../layouts/RootLayout';
import {userData} from '../data/userData';

const EditProfile = ({navigation}) => {
  const [updateUserData, setUpdateUserData] = useState({
    username: userData?.username || '',
    name: userData?.name || '',
    email: userData?.email || '',
    profileImage: userData?.profileImage || '',
  });

  const handleChange = (name, value) => {
    setUpdateUserData({...updateUserData, [name]: value});
  };

  const handleUpdate = () => {
    Alert.alert('Profile Updated');
    navigation.navigate('Profile');
  };

  return (
    <RootLayout>
      <SafeAreaView className="flex-1 bg-white">
        <ProfileHeader />

        <ScrollView className="flex-1 mt-16">
          <View className="p-5 flex flex-col gap-y-4">
            <Image
              source={
                updateUserData?.profileImage?.length
                  ? {uri: updateUserData?.profileImage}
                  : require('../assets/images/no-user.jpg')
              }
              className="w-32 h-32 rounded-full bg-white mx-auto"
            />

            <TextInput
              placeholder="Enter username"
              value={updateUserData?.username}
              onChangeText={value => handleChange('username', value)}
              className="bg-transparent border-[3px] border-grey p-3.5 px-5 text-base rounded-xl"
            />
            <TextInput
              placeholder="Enter your name"
              value={updateUserData?.name}
              onChangeText={value => handleChange('name', value)}
              className="bg-transparent border-[3px] border-grey p-3.5 px-5 text-base rounded-xl"
            />
            <TextInput
              placeholder="Enter email address"
              value={updateUserData?.email}
              onChangeText={value => handleChange('email', value)}
              className="bg-transparent border-[3px] border-grey p-3.5 px-5 text-base rounded-xl"
            />

            <TouchableOpacity
              onPress={handleUpdate}
              className="bg-primary p-4 rounded-xl w-full">
              <Text className="text-lg text-white text-center">
                Update Profile
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </RootLayout>
  );
};
export default EditProfile;
