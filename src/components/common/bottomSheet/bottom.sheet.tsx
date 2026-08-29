// @ts-nocheck
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useSettings } from '@context/settings.context';

interface CustomBottomSheetProps {
  children: ReactNode;
  height: number;
}

export interface CustomBottomSheetRef {
  expand: () => void;
  collapse: () => void;
  close: () => void;
}

const CustomBottomSheet = forwardRef<
  CustomBottomSheetRef,
  CustomBottomSheetProps
>(({ children, height }, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { theme } = useSettings();

  useImperativeHandle(ref, () => ({
    expand: () => bottomSheetRef.current?.snapToIndex(1),
    collapse: () => bottomSheetRef.current?.snapToIndex(-1),
    close: () => bottomSheetRef.current?.close(),
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['25%', `47.5%`]}
      backgroundStyle={{
        backgroundColor: theme.colors.tertiary,
        borderWidth: 2,
        borderRadius: 25,
        borderTopColor: theme.colors.tertiary50,
        borderLeftColor: theme.colors.tertiary,
        borderRightColor: theme.colors.tertiary,
        borderBottomColor: theme.colors.tertiary,
      }}
      handleIndicatorStyle={{
        backgroundColor: theme.colors.primary,
        width: 80,
        height: 6,
      }}
      enablePanDownToClose={true}
      enableContentPanningGesture={false}>
      <BottomSheetView style={styles.bottomSheetView}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheetView: {
    flex: 1,
    padding: 20,
  },
});

export default CustomBottomSheet;
