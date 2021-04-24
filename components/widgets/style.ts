import {StyleSheet} from 'react-native';

export const color = {
  iOSButtonColorLightTheme: '#007AFF',
  iOSButtonColorDarkTheme: '#0A84FF',
};

export const styles = StyleSheet.create({
  textAs_iOS_Button: {
    color: color.iOSButtonColorLightTheme,
    marginHorizontal: 4,
    marginVertical: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
});
