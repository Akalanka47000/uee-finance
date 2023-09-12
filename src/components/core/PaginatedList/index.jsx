import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

const PaginatedList = ({ onPageChange, ...props }) => {
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const [page, setPage] = useState(1);

  useEffect(() => onPageChange(page), [page]);

  return (
    <FlatList
      {...props}
      onScroll={(e) => {
        const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
        if (
          !isScrolling.value &&
          lastContentOffset.value < contentOffset.y &&
          contentOffset.y + layoutMeasurement.height >= contentSize.height * 0.75
        ) {
          setPage(page + 1);
          lastContentOffset.value = contentOffset.y;
        }
      }}
      onScrollBeginDrag={() => (isScrolling.value = true)}
      onScrollEndDrag={() => (isScrolling.value = false)}
    />
  );
};

export default PaginatedList;
