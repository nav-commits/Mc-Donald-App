import { View, Modal, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Button from '../../Atoms/Button/Button';
import { useNavigation } from '@react-navigation/native';
export default function PopupModal({ modalVisible, activeItem, icon, info }) {
    const navigation = useNavigation();
    const onClose = () => {};
    return (
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.centeredView}>
                <Modal animationType='slide' transparent={true} visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {icon}
                            {info}
                            <Text style={styles.modalText}>{activeItem?.title}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text>${activeItem?.standardPrice?.price}</Text>
                                <Text style={{ paddingLeft: 10 }}>
                                    {activeItem?.standardPrice?.cal} cals
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Image
                                    source={{ uri: activeItem?.img }}
                                    style={{ width: 205, height: 205 }}
                                />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    marginTop: 20,
                                }}
                            >
                                <Button
                                    title='Customize ingredients'
                                    backgroundColor='white'
                                    width={150}
                                    onPress={() => navigation.navigate('Order')}
                                    paddingHorizontal={10}
                                    paddingVertical={10}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Button
                                        title='Add to bag'
                                        backgroundColor='#ffbc0d'
                                        width={150}
                                        onPress={() => navigation.navigate('Order')}
                                        paddingHorizontal={10}
                                        paddingVertical={10}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        padding: 20,
        height: '100%',
        width: '100%',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        paddingTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
});
