import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView className="bg-white">
      <View className="flex-1 w-full items-center pt-5 bg-white">
        <View className="px-5 w-full max-w-sm">
          <Text className="text-4xl font-extrabold mb-6 text-secondary">
            Let's Sign you in.
          </Text>
          <Text className="text-3xl mb-4 font-medium text-secondary">
            Welcome back!
          </Text>
          <Text className="text-3xl mb-3 font-medium text-secondary">
            You've been missed!
          </Text>

          <View className="flex flex-col gap-4 mt-8">
            <TextInput
              placeholder="Enter email address"
              className="bg-transparent border-[3px] border-grey p-3.5 px-5 text-base rounded-xl"
            />
            <View className="relative">
              <TextInput
                placeholder="Enter password"
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

          <View className="flex flex-row justify-between items-center my-8">
            <View className="w-[43%] h-1 bg-grey"></View>
            <Text className="font-medium">OR</Text>
            <View className="w-[43%] h-1 bg-grey"></View>
          </View>

          <View className="flex flex-row justify-center items-center gap-5 mb-5">
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require('../assets/images/google.png')}
                className="w-7 aspect-square"
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require('../assets/images/facebook.png')}
                className="w-7 aspect-square"
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require('../assets/images/apple.png')}
                className="w-7 aspect-square"
              />
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

            <TouchableOpacity className="w-full bg-black p-5 rounded-xl mt-6">
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
