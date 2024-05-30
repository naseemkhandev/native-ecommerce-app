import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import RootLayout from '../layouts/RootLayout';
import NotificationsHeader from '../components/notifications/NotificationsHeader';
import NoNotifications from '../components/notifications/NoNotifications';
import {notifications} from '../data/notifications';
import AllNotifications from '../components/notifications/AllNotifications';

const Notifications = () => {
  return (
    <RootLayout>
      <SafeAreaView className="flex-1 bg-white">
        <NotificationsHeader />

        <ScrollView className="flex-1 mt-10">
          <View className="p-5">
            {notifications?.length ? <AllNotifications /> : <NoNotifications />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </RootLayout>
  );
};
export default Notifications;
