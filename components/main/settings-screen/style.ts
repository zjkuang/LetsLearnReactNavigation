import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  baseView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTabPanel: {
    width: '60%',
    height: 60,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: 16,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTabLabel: {
    height: 20,
  },
  topTabButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
