import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import BgImage from '../images/registration-BG.jpg';
import { useState } from 'react';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePass, setSecurePass] = useState(true);
  const onPressShowPass = () => {
    setSecurePass(!securePass);
  };
  return (
    <View style={logStyles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={logStyles.bgImg}>
        <View style={logStyles.formView}>
          <Text style={logStyles.mainTitle}>Увійти</Text>
          <TextInput
            id="email"
            style={logStyles.inputsAll}
            onChangeText={setEmail}
            value={email}
            autoComplete="email"
            placeholder="Адреса електронної пошти"
          />
          <View style={{ position: 'relative' }}>
            <TextInput
              id="passInput"
              style={{ ...logStyles.inputsAll, marginBottom: 43 }}
              onChangeText={setPassword}
              value={password}
              autoComplete="current-password"
              secureTextEntry={securePass}
              placeholder="Пароль"
            />
            <TouchableOpacity
              style={{ position: 'absolute', top: 0, right: 0 }}
              onPressIn={onPressShowPass}
            >
              <Text style={logStyles.inputText}>Показати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={logStyles.regButton} accessibilityLabel="Register">
            <Text style={logStyles.regButtonText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="LogIn">
            <Text style={{ color: '#1B4371', textAlign: 'center' }}>
              Немає аккаунту?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const logStyles = StyleSheet.create({
  container: { flex: 1 },
  bgImg: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  formView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 111,
    position: 'relative',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  mainTitle: { fontSize: 30, textAlign: 'center', color: '#212121', marginBottom: 32 },
  inputsAll: {
    width: '100%',
    height: 50,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e8e8e8',
    backgroundColor: '#f6f6f6',
  },
  inputText: { position: 'absolute', right: 16, top: 15, color: '#1B4371' },
  regButton: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },

  regButtonText: { color: '#ffffff', textAlign: 'center' },
});
export default LogInScreen;
