import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 40,
    margin: 10,
    borderRadius: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    backgroundColor: '#113f67'
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  loginBox: {
    margin: 10
  },
  imageBox: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: 120,
    height: 120
  },
  scrollView: {
    backgroundColor: '#34699a'
  },
  signupButton: {
    alignItems: 'center'
  },
  signupTitle: {
    fontSize: 18,
    margin: 8,
    fontWeight: 'bold'
  }
});
