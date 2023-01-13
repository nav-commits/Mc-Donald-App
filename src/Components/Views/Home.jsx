import { View, StatusBar, StyleSheet, Image } from 'react-native';
import TopBar from '../Molecules/TopBar';
import Title from '../Atoms/Title';
import Card from '../Molecules/Card';
import Button from '../Atoms/Button';

export default function Home() {
    return (
        <View>
            {/* need an image in here */}
            <StatusBar backgroundColor={'grey'} />
            <TopBar />
            <Title title='Menu' />
            <Card
                img={
                    <Image
                        source={require('../../../assets/bigmac.png')}
                        style={{ width: 353, height: 170, borderRadius: 5 }}
                    />
                }
                button={
                    <Button
                        position='absolute'
                        title='Start an order'
                        top={100}
                        left={10}
                        backgroundColor='#ffbc0d'
                          width={120}
                    />
                }
            />
            <Title title='My Offers' />
            <Card
                img={
                    <Image
                        source={require('../../../assets/0511-mcds.png')}
                        style={{ width: 353, height: 170, borderRadius: 5 }}
                    />
                }
                button={
                    <Button
                        position='absolute'
                        title='View offers'
                        top={100}
                        left={10}
                        backgroundColor='white'
                        width={115}
                    />
                }
            />
        </View>
    );
}

