import { View, StatusBar, Image, ScrollView, StyleSheet } from 'react-native';
import TopBar from '../Molecules/TopBar';
import Title from '../Atoms/Title';
import Card from '../Molecules/Card';
import Button from '../Atoms/Button';

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={{ backgroundColor: 'white' }}>
                <StatusBar backgroundColor={'grey'} />
                <TopBar
                    content={
                        <Image
                            source={require('../../../assets/McDonald.png')}
                            style={{ width: 55, height: 28 }}
                        />
                    }
                    alignItems='center'
                />
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
                            onPress={() => navigation.navigate('Order')}
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
                <Title title="What's New" />
                <Card
                    img={
                        <Image
                            source={require('../../../assets/mcnuggets.png')}
                            style={{ width: 353, height: 170, borderRadius: 5 }}
                        />
                    }
                    button={
                        <Button
                            position='absolute'
                            title='Order Now'
                            top={100}
                            left={10}
                            backgroundColor='red'
                            width={115}
                        />
                    }
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 2,
    },
});
