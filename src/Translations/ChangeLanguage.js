import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";


const translationsBtnMenu = {
    // en: () => require('../Translations/en.json'),
    // th: () => require('../Translations/th.json')

    en: {
        btnLanguage: "Obstruction Detection button",
        btnLanguage2: "Object Detection button",
        btnLanguage3: "Money & Coin Detection button",
    },
    th: {
        btnLanguage: "ปุ่มตรวจจับสิ่งกีดขวาง",
        btnLanguage2: "ปุ่มตรวจจับวัตถุ",
        btnLanguage3: "ปุ่มตรวจจับธนบัตรและเหรียญ",
    }

    // en: {
    //     enBtnLanguageFirst: "Obstruction Detection button",
    //     enBtnLanguageSecond: "Object Detection button",
    //     enBtnLanguageThird: "Money Detection button",
    //     enBtnLanguageFourth: "Coin detection button",
    // },
    // th: {
    //     thBtnLanguageFirst: "ปุ่มตรวจจับสิ่งกีดขวาง",
    //     thBtnLanguageSecond: "ปุ่มตรวจจับวัตถุ",
    //     thBtnLanguageThird: "ปุ่มตรวจจับธนบัตร",
    //     thBtnLanguageFourth: "ปุ่มตรวจจับเหรียญ",
    // }
};

const i18n = new I18n(translationsBtnMenu);

i18n.locale = Localization.locale;

i18n.enableFallback = true;


const ChangeToLanguage = () => {
    const [locale, setLocale] = useState(i18n.locale);

    const changeLocale = (locale) => {
        i18n.locale = locale;
        setLocale(locale);
    }

    return (
    //     <View style={styles.buttonContainer}>
    //         <Text style={styles.header}>Translator App</Text>
    //         <Text style={styles.txt}>{i18n.t('btnLanguage')}</Text>
    //         {/* <TouchableOpacity
    //                 style={styles.button}
    //                 onPress={() => changeLocale('th')}
    //                 accessible={true} // optional, this is the default
    //                 accessibilityLabel={'ปุ่มตรวจจับธนบัตร'} // overrides child content
    //                 accessibilityTraits={'Money Detection button'} // only works in ios
    //                 accessibilityComponentType={'Money Detection button'} // only works in android
    //                 accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
    //                 accessibilityState={{ 'selected': true }}
    //             >
    //                 <Text style={styles.textButton}>{i18n.t('btnLanguage')}</Text>
    //             </TouchableOpacity> */}

    // {/* button changuage EN and TH */}
    //         <TouchableOpacity
    //                 style={styles.button}
    //                 onPress={() => changeLocale('th')}
    //                 accessible={true} // optional, this is the default
    //                 accessibilityLabel={'ปุ่มตรวจจับธนบัตร'} // overrides child content
    //                 accessibilityTraits={'Money Detection button'} // only works in ios
    //                 accessibilityComponentType={'Money Detection button'} // only works in android
    //                 accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
    //                 accessibilityState={{ 'selected': true }}
    //             >
    //                 {/* <Text style={styles.textButton}>{i18n.t('btnLanguage')}</Text> */}
    //                 <Text style={styles.textButton}>Thai</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //                 style={styles.button}
    //                 onPress={() => changeLocale('en')}
    //                 accessible={true} // optional, this is the default
    //                 accessibilityLabel={'ปุ่มตรวจจับธนบัตร'} // overrides child content
    //                 accessibilityTraits={'Money Detection button'} // only works in ios
    //                 accessibilityComponentType={'Money Detection button'} // only works in android
    //                 accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
    //                 accessibilityState={{ 'selected': true }}
    //             >
    //                 {/* <Text style={styles.textButton}>{i18n.t('btnLanguage')}</Text> */}
    //                 <Text style={styles.textButton}>English</Text>
    //         </TouchableOpacity>
    // {/* button changuage EN and TH */}

    //     </View>

        <View style={styles.container}>
                <Text style={{ fontSize: 40, textAlign: 'center', margin: 30 }}>Main Menu</Text>

                {/* <Text style={styles.txt}>{i18n.t('btnLanguage')}</Text> */}
                
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => changeLocale('th')}
                    accessible={true} // optional, this is the default
                    accessibilityLabel={'ปุ่มตรวจจับธนบัตร'} // overrides child content
                    accessibilityTraits={'Money Detection button'} // only works in ios
                    accessibilityComponentType={'Money Detection button'} // only works in android
                    accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
                    accessibilityState={{ 'selected': true }}
                >
                    {/* <Text style={styles.textButton}>{i18n.t('btnLanguage')}</Text> */}
                    <Text style={styles.textButton}>Thai</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => changeLocale('en')}
                    accessible={true} // optional, this is the default
                    accessibilityLabel={'ปุ่มตรวจจับธนบัตร'} // overrides child content
                    accessibilityTraits={'Money Detection button'} // only works in ios
                    accessibilityComponentType={'Money Detection button'} // only works in android
                    accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
                    accessibilityState={{ 'selected': true }}
                >
                    {/* <Text style={styles.textButton}>{i18n.t('btnLanguage')}</Text> */}
                    <Text style={styles.textButton}>English</Text>
                </TouchableOpacity>


                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Obstruction')}
                        accessible={true} // optional, this is the default
                        accessibilityLabel={'ปุ่มตรวจจับสิ่งกีดขวาง'} // overrides child content
                        accessibilityTraits={'Obstruction Detection button'} // only works in ios
                        accessibilityComponentType={'Obstruction Detection button'} // only works in android
                        accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
                        accessibilityState={{ 'selected': true }}
                    >
                        <Text style={styles.textButton}>{i18n.t('btnLanguage')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Object')}
                        accessible={true} // optional, this is the default
                        accessibilityLabel={'ปุ่มตรวจจับวัตถุ'} // overrides child content
                        accessibilityTraits={'Object Detection button'} // only works in ios
                        accessibilityComponentType={'Object Detection button'} // only works in android
                        accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
                        accessibilityState={{ 'selected': true }}
                    >
                        <Text style={styles.textButton}>{i18n.t('btnLanguage2')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Money')}
                        accessible={true} // optional, this is the default
                        accessibilityLabel={'ปุ่มตรวจจับธนบัตร'} // overrides child content
                        accessibilityTraits={'Money Detection button'} // only works in ios
                        accessibilityComponentType={'Money Detection button'} // only works in android
                        accessibilityHint={'แตะ 2 ครั้ง เพื่อเปิด'}
                        accessibilityState={{ 'selected': true }}
                    >
                        <Text style={styles.textButton}>{i18n.t('btnLanguage3')}</Text>
                    </TouchableOpacity>
                    
                </View>
        </View>
    )
}

export default ChangeToLanguage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 80,

    },
    buttonContainer: {
        flex: 1,
        // backgroundColor: 'pink',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 20,
        margin: 10,
        width: 350,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        backgroundColor: '#FF8674',
        borderRadius: 20,
        margin: 10,
        width: 350,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    textButton: {
        fontSize: 25,
    },
    txt: {
        fontSize: 20,
        marginBottom: 40,
        textAlign: 'center'
    },
  });