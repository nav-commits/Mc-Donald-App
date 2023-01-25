import { View, Image } from 'react-native';
import PresentationCard from '../Molecules/PresentationCard/PresentationCard';
import Button from '../Atoms/Button/Button';
import Title from '../Atoms/Title/Title';
import LabelItem from '../Molecules/LabelItem/LabelItem';
export default function RewardsAndOffers() {
    return (
        <View>
            <LabelItem
                content={
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../../../assets/mcdonalds_Myrewards.png')}
                            style={{ width: 66, height: 37 }}
                        />
                        <Title title='0 PTS' paddingLeft={20} paddingTop={30} size={13} />
                    </View>
                }
            />
            <Title title='My Rewards' paddingLeft={20} paddingTop={30} size={20} />
            <PresentationCard
                img={
                    <Image
                        source={require('../../../assets/McRewards.png')}
                        style={{ width: 353, height: 170, borderRadius: 5 }}
                    />
                }
                button={
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute',
                            bottom: 20,
                            left: 10,
                        }}
                    >
                        <Button
                            title='Start an order'
                            backgroundColor='#ffbc0d'
                            width={120}
                            onPress={() => navigation.navigate('Order')}
                            paddingHorizontal={10}
                            paddingVertical={10}
                        />
                        <Button
                            title='Learn More'
                            marginLeft={10}
                            backgroundColor='white'
                            width={90}
                            paddingHorizontal={10}
                            paddingVertical={10}
                        />
                    </View>
                }
            />
        </View>
    );
}

