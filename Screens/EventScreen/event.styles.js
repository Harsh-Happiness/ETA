import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  eachListItem: {
    height: 80,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 15,
  },
  eachGridItem: {
    flexDirection: 'column',
    height: 200,
    width: '45%',
    margin: 10,
    borderRadius: 15,
  },
  eachEntry: {
    color: 'white',
    height: 20,
    fontWeight: '700',
    fontSize: 16,
  },
  listImage: {
    height: 80,
    width: 100,
    borderBottomLeftRadius: 15,
  },
  gridImage: {
    width: '100%',
    height: '50%',
  },
  trackedColor: {
    backgroundColor: '#00d8ff',
  },
  noColor: {
    backgroundColor: 'grey',
  },
  typeofViewBox: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeofViewText: {
    marginLeft: 10,
    fontSize: 24,
    borderWidth: 4,
    color: 'white',
    backgroundColor: 'green',
    borderColor: '#024b30',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  viewImage: {
    width: 50,
    height: 50,
  },
});
