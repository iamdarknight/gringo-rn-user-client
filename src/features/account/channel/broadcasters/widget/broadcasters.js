import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  broadcastersIcon: {
    color: primary,
    fontSize: 30,
  },
  broadcastersNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  broadcastersNameText: {
    fontSize: 16,
    fontWeight: '200',
  },
  broadcastersNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  broadcastersNumberText: {
    backgroundColor: accent,
  },
  broadcastersRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Broadcasters = ({
  containerStyle,
  index,
  name,
  broadcasters,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        {+index === 0 && (
          <Icon name="users" size={25} color='#691A99' />
        )}
      </View>
      <View style={styles.broadcastersRow}>
        <View style={styles.broadcastersNameColumn}>
          {name.trim().length !== 0 && (
            <Text style={styles.broadcastersNameText}>{name}</Text>
          )}
        </View>
      </View>
      <View style={styles.rightRow}>
        <Chip theme={{ colors: { text: primary } }} style={styles.broadcastersNumberText}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: primary }}>{broadcasters}</Text>
        </Chip>
      </View>
    </View>
  </TouchableOpacity>
);

Broadcasters.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  index: PropTypes.string.isRequired,
  name: PropTypes.string,
  broadcasters: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

Broadcasters.defaultProps = {
  containerStyle: {},
  name: null,
};

export default Broadcasters;
