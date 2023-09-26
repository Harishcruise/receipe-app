import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { WrapBackground } from '../../components/Background';
import { HeaderFirstVariant } from '../../components/Header';
import { Radio } from '../../components/Radio';
import { LabelBlack, LabelGray } from '../../Typography';

const Languages = ({ navigation }) => {
  return (
    <WrapBackground>
      <View style={styles.container}>
        <HeaderFirstVariant onPress={() => navigation.goBack()} style={styles.header}>
          Language
        </HeaderFirstVariant>

        <View style={styles.radioContainer}>
          <View style={styles.radioRow}>
            <LabelBlack style={styles.label}>English</LabelBlack>
            <View style={styles.radio}>
              <Radio />
            </View>
          </View>

          <View style={styles.radioRow}>
            <LabelBlack style={styles.label}>French</LabelBlack>
            <View style={styles.radio}>
              <Radio />
            </View>
          </View>

          <View style={styles.radioRow}>
            <LabelBlack style={styles.label}>Dutch</LabelBlack>
            <View style={styles.radio}>
              <Radio />
            </View>
          </View>

          <View style={styles.radioRow}>
            <LabelBlack style={styles.label}>Spanish</LabelBlack>
            <View style={styles.radio}>
              <Radio />
            </View>
          </View>
        </View>
      </View>
    </WrapBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    elevation: 5,
  },
  radioContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 5,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#bfbfbf', // You can adjust the border color as needed
    height: 64,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    color: '#060813',
  },
  radio: {
    // Adjust the styles of your Radio component here
  },
});

export default Languages;
