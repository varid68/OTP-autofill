import { StyleSheet } from 'react-native'
import { GRAY, GRAY_25, GHOST, YELLOW, ARSENIC } from 'constants/Colors'
import { ROW_CENTER } from 'constants/Styles'

export default StyleSheet.create({
  container: {
    backgroundColor: GRAY,
    flex: 1,
    padding: 20
  },

  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#323d4e',
    borderBottomWidth: 1
  },

  field: {
    backgroundColor: GRAY_25,
    flex: 1,
    color: GHOST,
    fontSize: 16,
  },

  btnSubmit: length => ({
    ...ROW_CENTER,
    marginTop: 50,
    paddingVertical: 15,
    borderRadius: 4,
    backgroundColor: length == 6 ? YELLOW : ARSENIC
  })
})
