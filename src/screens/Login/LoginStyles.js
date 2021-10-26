import { StyleSheet } from 'react-native'
import { GRAY, GRAY_25, GHOST, YELLOW, ARSENIC } from 'constants/Colors'
import { ROW_CENTER } from 'constants/Styles'


export default StyleSheet.create({
  container: {
    backgroundColor: GRAY,
    flex: 1,
    padding: 20
  },

  clearText: {
    position: 'absolute',
    zIndex: 20,
    right: 10,
    top: 5,
    padding: 10
  },
  countryCode: {
    ...ROW_CENTER,
    padding: 15,
    backgroundColor: GRAY_25
  },
  countryFlag: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    borderRadius: 20
  },
  field: {
    backgroundColor: GRAY_25,
    flex: 1,
    color: GHOST,
    fontSize: 16,
  },

  btnSubmit: (isValid) => ({
    ...ROW_CENTER,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 3,
    backgroundColor:  isValid ? YELLOW : ARSENIC,
    padding: 10
  })
})
