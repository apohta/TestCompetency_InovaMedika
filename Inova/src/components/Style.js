import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
  },
  viewForm: {
    flex: 2,
    padding: 10,
  },
  viewData: {
    flex: 1,
  },
  textInput: {
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 10,
  },
  viewList: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  textList: {
    flex: 3,
    fontSize: 15,
    fontWeight: 'bold',
  },
  listedit: {
    color: 'blue',
    marginRight: 20,
  },
  listdelete: {
    color: 'red',
  },
});
