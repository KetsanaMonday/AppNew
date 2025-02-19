import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  SafeAreaView,
  ScrollView,TextInput
} from 'react-native';
import React from 'react';

export default function Register({navigation}) {
  const [Tel, setTel] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Tel"
                  style={styles.input}
                  onChangeText={setTel}
                  values="tel"
                />
              </View>

              <View style={styles.fixToText}>
                <Button title="Login" style={styles.input} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },

  fixToText: {
    padding: 10,
  },
});
