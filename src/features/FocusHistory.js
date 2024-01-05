import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors.js';
import { fontSizes } from '../utils/sizes.js';
import { spacing } from '../utils/sizes.js';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return<Text style={styles.title}>We haven't focused on anything yet</Text>;

  const Item = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've fosuced on:</Text>
      <FlatList data={history} renderItem={Item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex:1
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,

  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,

    fontWeight: 'bold',
  },
});
