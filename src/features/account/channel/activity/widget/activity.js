import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { Chip } from 'react-native-paper';

import { primary, accent } from '../../constants';

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
  rightIcon: {
    color: '#A5A5A5',
    fontSize: 30,
  },
  rightRow: {
    marginRight: 20,
    justifyContent: 'flex-start',
  },
  activityIcon: {
    color: primary,
    fontSize: 30,
  },
  activityNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  activityNameText: {
    fontSize: 16,
    fontWeight: '200',
  },
  activityNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  activityNumberText: {
    backgroundColor: accent,
  },
  activityRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Activity = ({
  containerStyle,
  index,
  name,
  flags,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        {+index === 0 && (
          <Icon name="activity" size={25} color='#691A99' />
        )}
      </View>
      <View style={styles.activityRow}>
        <View style={styles.activityNameColumn}>
          {name.trim().length !== 0 && (
            <Text style={styles.activityNameText}>{name}</Text>
          )}
        </View>
      </View>
      <View style={styles.rightRow}>
        <Chip  theme={{  colors: { text: primary } }} style={styles.activityNumberText}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: primary }}>{flags}</Text>
        </Chip>
      </View>
    </View>
  </TouchableOpacity>
);

Activity.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  index: PropTypes.string.isRequired,
  name: PropTypes.string,
  flags: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

Activity.defaultProps = {
  containerStyle: {},
  name: null,
};

export default Activity;
