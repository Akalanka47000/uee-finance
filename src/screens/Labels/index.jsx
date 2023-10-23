import { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { LabelDialog } from '@/components';
import { Plus } from '@/icons';
import { store } from '@/store';
import { deleteLabel } from '@/store/reducers/data/labels';
import { toggleLabelDialog } from '@/store/reducers/ui/labels';
import { default as styles } from './styles';

const onAdd = () => store.dispatch(toggleLabelDialog(true));

const Labels = () => {
  const labels = useSelector((state) => state.data.labels.all);

  const renderItem = useCallback(({ item: label }) => (
    <View key={label} style={styles.label}>
      <Text style={styles.labelText}>{label}</Text>
      <Pressable onPress={() => store.dispatch(deleteLabel(label))}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  ));

  return (
    <>
      <FlatList
        data={labels}
        style={styles.labels}
        contentContainerStyle={styles.labelContent}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
      <Pressable style={[styles.addBtn]} onPress={onAdd}>
        <Plus size={50} />
      </Pressable>
      <LabelDialog />
    </>
  );
};

export default Labels;
