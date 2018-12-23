import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import mainColor from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bioIcon: {
    color: mainColor,
    fontSize: 30,
  },
  bioNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bioNameText: {
    fontSize: 16,
    fontWeight: '200',
  },
  bioNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  bioNumberText: {
    fontSize: 16,
  },
  bioRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 15,
  },
});

const Bio = ({
  containerStyle,
  index,
  name,
  bio,
  onPress,
}) => (
  <View>
    <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        {+index === 0 && (
          <Icon name="bio" size={25} color="#691A99" />
        )}
      </View>
      <View style={styles.bioRow}>
        {bio.trim().length !== 0 && (
        <Text style={styles.bioNameText}>{bio}</Text>
          )}
      </View>
    </TouchableOpacity>
  </View>
);

Bio.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  index: PropTypes.string.isRequired,
  name: PropTypes.string,
  bio: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Bio.defaultProps = {
  containerStyle: {},
  name: null,
};

export default Bio;
