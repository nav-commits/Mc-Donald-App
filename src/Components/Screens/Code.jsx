import { View, Text, Image, StyleSheet } from 'react-native';
import PresentationCard from '../Molecules/PresentationCard/PresentationCard';
import Button from '../Atoms/Button/Button';
import Title from '../Atoms/Title/Title';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Code() {
    return (
        <View style={{ marginTop: 5 }}>
            <PresentationCard
                title={
                    <Title
                        title='Earn, redeem & save'
                        paddingTop={20}
                        size={20}
                        textAlign='center'
                    />
                }
                height={400}
                button={
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Add Rewards & Offers'
                            backgroundColor='white'
                            width={170}
                            borderRadius={5}
                            icon={
                                <Icon
                                    name={'pricetag-sharp'}
                                    size={25}
                                    style={{ paddingTop: 20 }}
                                    color='#ffbc0d'
                                />
                            }
                            paddingHorizontal={5}
                            paddingVertical={5}
                        />
                        <Button
                            marginTop={10}
                            title='Pay with code'
                            backgroundColor='white'
                            width={170}
                            border='2px solid black'
                            borderRadius={5}
                            icon={
                                <Icon
                                    name={'card-sharp'}
                                    size={25}
                                    style={{ paddingTop: 20 }}
                                    color='green'
                                />
                            }
                            paddingHorizontal={2}
                            paddingVertical={2}
                        />
                    </View>
                }
                codeContent={
                    <View>
                        <View style={{ height: 70, backgroundColor: '#ffbc0d', marginTop: 50 }}>
                            <Title title='Tell us about your code' size={15} textAlign='center' />
                            <Title title={Math.floor(Math.random() * 9000 + 1000)} size={40} textAlign='center' />
                        </View>
                        <View style={styles.scanCodeStyle}>
                            <Title title='Scan Code' paddingTop={10} size={20} textAlign='center' />
                            <Image
                                source={require('../../../assets/scancode.png')}
                                style={{ width: 120, height: 120, borderRadius: 5 }}
                            />
                        </View>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    scanCodeStyle: {
        height: 160,
        backgroundColor: '#ffbc0d',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: 10,
    },
});
