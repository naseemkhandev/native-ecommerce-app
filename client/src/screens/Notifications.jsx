import {SafeAreaView, ScrollView, View} from 'react-native';
import AllNotifications from '../components/notifications/AllNotifications';
import NoNotifications from '../components/notifications/NoNotifications';
import NotificationsHeader from '../components/notifications/NotificationsHeader';
import {notifications} from '../data/notifications';
import RootLayout from '../layouts/RootLayout';

const Notifications = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <NotificationsHeader />
      <RootLayout>
        <ScrollView className="flex-1 mt-10">
          <View className="p-5">
            {notifications?.length ? <AllNotifications /> : <NoNotifications />}
          </View>
        </ScrollView>
      </RootLayout>
    </SafeAreaView>
  );
};
export default Notifications;
