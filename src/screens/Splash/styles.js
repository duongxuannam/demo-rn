import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  bgWhite: { backgroundColor: 'white' },
  bgOverlay: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleContainerAnimation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  icon: { height: 47, width: 32, marginRight: 12 },
  title: { fontSize: 25, fontWeight: '500' },
});
