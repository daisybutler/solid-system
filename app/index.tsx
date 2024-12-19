import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'purple',
    borderRadius: 10,
    padding: 10,
    color: 'white'
  },
});

export default function Index() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, onEnterEmail] = useState('Email');
  const [password, onEnterPassword] = useState('Password');

  function handlePress() {
    setIsAnimating(prev => !prev)
    console.log(email)
    console.log(password)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput value={email} onChangeText={onEnterEmail} />
      <TextInput value={password} onChangeText={onEnterPassword} />
      <View style={styles.buttonContainer}>
        <Button color='white' title='Login' onPress={handlePress} />
      </View>
      <ActivityIndicator animating={isAnimating} />
    </View>
  );
}