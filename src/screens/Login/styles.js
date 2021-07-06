import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  backgroundContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
  },
  contentContainer: {
    flex: 1.7,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  icon: { height: 45, width: 30, marginRight: 10 },
  title: { fontSize: 21, fontWeight: '400' },
  subTitle: { marginTop: 40, fontSize: 23, fontWeight: '400' },
  titleContent: { color: '#606060', fontSize: 18, marginBottom: 40 },
  titleInput: { color: '#A8A8A8', fontSize: 18 },
  inputStyles: {
    padding: 10,
    paddingLeft: 0,
    borderWidth: 0,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    fontSize: 18,
    marginTop: 5,
  },
  passwordTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  forgotContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#606060',
    fontSize: 18,
  },
  actionContainer: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#30BE76',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  titleCreateAccount: {
    fontSize: 17,
    color: '#A8A8A8',
  },
  actionCreateAccount: {
    marginTop: 8,
    fontSize: 18,
    color: '#30BE76',
  },
});
