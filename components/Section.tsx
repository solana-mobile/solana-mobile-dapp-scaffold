import React, {ReactNode} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from './Colors';

export const Section: React.FC<{
  children?: ReactNode;
  description?: string;
  title?: string;
}> = ({children, description, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = {color: isDarkMode ? Colors.lighter : Colors.darker};
  return (
    <View style={styles.sectionContainer}>
      {title ? (
        <Text style={[styles.sectionTitle, textColor]}>{title}</Text>
      ) : null}
      {description ? (
        <Text style={[styles.sectionDescription, textColor]}>
          {description}
        </Text>
      ) : null}
      <Text style={[styles.sectionDescription, textColor]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
