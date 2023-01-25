import { StyleSheet, View,Text, Image } from 'react-native';
import LabelItem from '../../Molecules/LabelItem/LabelItem';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LabelContent({dataContent}) {
    return (
        <View >
             {dataContent?.map((item, i) => (
                <LabelItem
                    key={i}
                    content={<Text style={styles.titleText}>{item.name}</Text>}
                    alignItems='flex-start'
                    justifyContent='space-between'
                    flexDirection='row'
                    icon={<Icon name={item.icon} size={25} style={{ paddingTop: 20 }} />}
                    img={<Image source={{ uri: item.img }} style={{ width: 45, height: 35 }} />}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 25,
        paddingTop: 10,
    },
})