import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import BgImage from '../images/registration-BG.jpg';
import { useState } from 'react';

const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePass, setSecurePass] = useState(true);
  const onPressShowPass = () => {
    setSecurePass(!securePass);
  };

  return (
    <View style={regStyles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={regStyles.bgImg}>
        <View style={regStyles.formView}>
          <View style={regStyles.userPhoto}>
            <View style={regStyles.userPhotoPlus}>
              <Text style={{ color: '#FF6C00', fontSize: 18 }}>+</Text>
            </View>
          </View>
          <Text style={regStyles.mainTitle}>Реєстрація</Text>
          <TextInput
            id="username"
            style={regStyles.inputsAll}
            onChangeText={setLogin}
            value={login}
            autoComplete="username"
            placeholder="Логін"
          />
          <TextInput
            id="email"
            style={regStyles.inputsAll}
            onChangeText={setEmail}
            value={email}
            autoComplete="email"
            placeholder="Адреса електронної пошти"
          />
          <View style={{ position: 'relative' }}>
            <TextInput
              id="passInput"
              style={{ ...regStyles.inputsAll, marginBottom: 43 }}
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
              <Text style={regStyles.inputText}>Показати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={regStyles.regButton} accessibilityLabel="Register">
            <Text style={regStyles.regButtonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity accessibilityLabel="LogIn">
            <Text style={{ color: '#1B4371', textAlign: 'center' }}>
              Вже є аккаунт? <Text style={{ textDecorationLine: 'underline' }}>Увійти</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const regStyles = StyleSheet.create({
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
    paddingTop: 92,
    paddingBottom: 78,
    position: 'relative',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPhoto: {
    width: 120,
    height: 120,
    position: 'absolute',
    left: '50%',
    top: 0,
    backgroundColor: '#F6F6F6',

    borderRadius: 16,

    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  userPhotoPlus: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: '90%',
    bottom: 0,
    transform: [{ translateY: -20 }],
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF6C00',
    borderRadius: 50,
    borderWidth: 1,
  },
  mainTitle: { fontSize: 30, textAlign: 'center', color: '#212121', marginBottom: 33 },
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

export default RegistrationScreen;
