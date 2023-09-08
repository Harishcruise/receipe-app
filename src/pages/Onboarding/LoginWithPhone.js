import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { HeaderSecondVariant } from '../../components/Header';
import { LabelBlack, LabelGray, LabelLink } from '../../Typography';
import { CustomButton1, CustomButton3 } from '../../components/Buttons';
import { PasswordInputField, TextInputField } from '../../components/InputField';
import { google } from '../../../assets/images';
import { WrapBackground } from '../../components/Background';

const LoginWithPhone = ({ navigation }) => {
  const [loginWithPhoneData, setLoginWithPhoneData] = useState({
    phone: '',
  });

  const onChangePhone = (text) => {
    // Remove non-numeric characters from the input
    const cleanedText = text.replace(/[^0-9]/g, '');

    // Limit the phone number to 10 digits
    if (cleanedText.length <= 10) {
      setLoginWithPhoneData({
        phone: cleanedText,
      });
    }
  };

  return (
    <WrapBackground>
      <HeaderSecondVariant onPress={() => navigation.goBack()} />

      <View style={{ gap: 36 }} className='flex px-4 py-3 w-[100%]'>
        <View style={{ gap: 7 }} className='flex'>
          <LabelBlack style={{ fontSize: 24 }}>Login via OTP</LabelBlack>
          <LabelGray>Access best recipes and top chefs cuisines</LabelGray>
        </View>

        <View style={{ gap: 12 }} className='flex'>
          <TextInputField
            value={loginWithPhoneData.phone}
            onChangeText={onChangePhone}
            keyboardType={'numeric'}
          >
            Phone Number
          </TextInputField>
        </View>

        <View style={{ gap: 20 }} className='flex items-center'>
          <View style={{ gap: 8 }} className='flex flex-row justify-between'>
            <CustomButton1
              style={{ width: '100%' }}
              onPress={() => navigation.navigate('OtpVerificationPage')}
            >
              Request OTP
            </CustomButton1>
          </View>
        </View>
      </View>
    </WrapBackground>
  );
};

export default LoginWithPhone;
