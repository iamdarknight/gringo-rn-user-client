// @flow
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const layout: React.Element<*> = ({
  children,
}: React.Node): React.Element<*> => <View style={styles.wrapper}>{children}</View>;

export default layout;
