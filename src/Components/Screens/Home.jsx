import { View, StatusBar, Image, ScrollView, StyleSheet } from 'react-native';
import Title from '../Atoms/Title/Title';
import PresentationCard from '../Molecules/PresentationCard/PresentationCard';
import Button from '../Atoms/Button/Button';
import LabelItem from '../Molecules/LabelItem/LabelItem';

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <StatusBar backgroundColor={'grey'} />
                <LabelItem
                    content={
                        <Image
                            source={require('../../../assets/McDonald.png')}
                            style={{ width: 55, height: 28 }}
                               
                        />
                    }
                    alignItems='center'
                    elevation={5}
                />
                <Title title='Menu' paddingLeft={20} paddingTop={30} size={20} />
                <PresentationCard
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
                            paddingHorizontal={10}
                            paddingVertical={10}
                        />
                    }
                />
                <Title title='My Offers' paddingLeft={20} paddingTop={30} size={20} />
                <PresentationCard
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
                            paddingHorizontal={10}
                            paddingVertical={10}
                        />
                    }
                    paddingRight={25}
                />
                <Title title="What's New" paddingLeft={20} paddingTop={30} size={20} />
                <PresentationCard
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
                            paddingHorizontal={10}
                            paddingVertical={10}
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
