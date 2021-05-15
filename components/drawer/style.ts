import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  baseView: {
    width: '100%',
    height: '100%',
  },
  flatListItem: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 8,
    fontSize: 16,
    height: 40,
  },
  horizontalSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#E0E0E0',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
  },
  closeButton: {
    right: 8,
  },
});

export {styles};
