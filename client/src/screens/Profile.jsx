import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ProfileHeader from '../components/profile/ProfileHeader';
import {userData} from '../data/userData';
import RootLayout from '../layouts/RootLayout';

const Profile = ({navigation}) => {
  return (
    <RootLayout>
      <SafeAreaView className="flex-1 bg-white">
        <ProfileHeader />

        <ScrollView className="flex-1 mt-16">
          <View className="flex flex-col gap-y-5 p-5">
            <Image
              source={
                userData?.profileImage?.length
                  ? {uri: userData?.profileImage}
                  : require('../assets/images/no-user.jpg')
              }
              className="w-32 h-32 rounded-full bg-white mx-auto"
            />

            <View>
              <Text className="font-semibold capitalize text-2xl text-secondary mx-auto">
                {userData?.name}
              </Text>
              <Text className="text-lg text-secondary mx-auto lowercase">
                @{userData?.username}
              </Text>
              <Text className="text-lg text-secondary mx-auto">
                {userData?.email}
              </Text>
            </View>

            <View className="space-y-5 bg-white p-5 shadow-lg shadow-black rounded-xl">
              <Text className="font-semibold capitalize text-2xl text-secondary">
                Account Settings
              </Text>

              <View className="flex flex-row items-center gap-x-3">
                <Icon name="edit" size={20} className="text-secondary" />
                <Text className="text-lg text-black">Edit Profile</Text>
              </View>
              <View className="flex flex-row items-center gap-x-3">
                <Icon name="list" size={20} className="text-secondary" />
                <Text className="text-lg text-black">My Orders</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}
                className="flex flex-row items-center gap-x-3">
                <Icon name="bell" size={20} className="text-secondary" />
                <Text className="text-lg text-black">Notifications</Text>
              </TouchableOpacity>
              {userData.isAdmin && (
                <View className="flex flex-row items-center gap-x-3">
                  <Icon name="shield" size={20} className="text-secondary" />
                  <Text className="text-lg text-black">Dashboard</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </RootLayout>
  );
};
export default Profile;
