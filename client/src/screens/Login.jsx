import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setUserData({...userData, [name]: value});
  };

  const handleSubmit = () => {
    if (!userData.email || !userData.password) {
      Alert.alert('Please fill all fields');
      return;
    }

    Alert.alert('Login Successful');
    navigation.navigate('Home');
  };

  return (
    <ScrollView className="bg-white">
      <View className="flex-1 w-full items-center pt-5 bg-white">
        <View className="px-5 w-full max-w-sm">
          <Text className="text-4xl font-extrabold mb-5 text-secondary">
            Welcome back!
          </Text>
          <Text className="text-3xl font-medium text-secondary">
            You've been missed!
          </Text>

          <View className="flex flex-col gap-y-4 mt-5">
            <TextInput
              placeholder="Enter email address"
              value={userData.email}
              onChangeText={value => handleChange('email', value)}
              className="bg-transparent border-[3px] border-grey p-3.5 px-5 text-base rounded-xl"
            />
            <View className="relative">
              <TextInput
                placeholder="Enter password"
                value={userData.password}
                onChangeText={value => handleChange('password', value)}
                secureTextEntry={!showPassword}
                className="bg-transparent border-[3px] border-grey p-3.5 px-5 text-base rounded-xl"
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute top-[30%] right-5">
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={25}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex flex-row justify-between items-center my-5">
            <View className="w-[43%] h-1 bg-grey"></View>
            <Text className="font-medium">OR</Text>
            <View className="w-[43%] h-1 bg-grey"></View>
          </View>

          <View className="flex flex-col items-center gap-5 mb-5">
            <TouchableOpacity className="flex flex-row justify-center items-center gap-x-2 p-3 rounded-xl w-full border-[3px] border-grey">
              <Image
                source={require('../assets/images/google.png')}
                className="w-5 aspect-square"
              />
              <Text className="text-lg font-semibold mb-0.5">
                Sign in with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row justify-center items-center gap-x-2 p-3 rounded-xl w-full border-[3px] border-grey">
              <Image
                source={require('../assets/images/facebook.png')}
                className="w-5 aspect-square"
              />
              <Text className="text-lg font-semibold mb-0.5">
                Sign in with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View className="text-center mt-auto">
            <View className="flex-row items-center justify-center gap-1">
              <Text className="text-lg text-center">
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text className="text-secondary font-semibold text-lg">
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              className="w-full bg-black p-5 rounded-xl mt-6">
              <Text className="text-white text-center font-semibold text-lg">
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
