import {  Text, StyleSheet, ScrollView } from 'react-native';
import ProductDetailContent from '../Organisms/ProductDetailContent/ProductDetailContent';

export default function ProductDetail({ route }) {
    const { dataContent } = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <Text style={styles.calorieContent}>
                Calories do not reflect customization or additional ingredients. Adults and youth
                (ages 13 and older) need an average of 2,000 calories a day
            </Text>
            <ProductDetailContent dataContent={dataContent} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 2,
        backgroundColor: 'lightgray',
    },
    calorieContent: {
        padding: 15,
    },
});
