import { StyleSheet, View, Text, Image } from 'react-native';
import LabelItem from '../Molecules/LabelItem/LabelItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { moreLabelContent } from '../../Utils/MorePageLabels';
import Title from '../Atoms/Title/Title';

export default function More() {
    return (
        <View >
            <LabelItem
                content={
                    <Image
                        source={require('../../../assets/McDonald.png')}
                        style={{ width: 55, height: 28 }}

                    />
                }
                alignItems='center'
            />
            {moreLabelContent?.map((item, i) => (
                <LabelItem
                    key={i}
                    content={<Text style={styles.titleText}>{item.name}</Text>}
                    alignItems='flex-start'
                    justifyContent='space-between'
                    flexDirection='row'
                    icon={<Icon name={item.icon} size={25} style={{ paddingTop: 10 }} />}
                    img={<Icon name={item.itemIcon} size={25} style={{ paddingTop: 10 }} />}
                    
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        color: 'gray',
        fontSize: 15,
        paddingLeft: 25,
        paddingTop: 10,
    },
});
