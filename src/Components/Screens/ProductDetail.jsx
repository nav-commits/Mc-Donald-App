import {  Text, StyleSheet, ScrollView } from 'react-native';
import ProductDetailContent from '../Organisms/ProductDetailContent/ProductDetailContent';

export default function ProductDetail({ route }) {
    const { dataContent } = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <Text style={styles.calorieContent}>
                Calories do not reflect customization or additional
                ingredients. Adults and youth (ages 13 and older) need an
                average of 2,000 calories a day, and children (ages 4 to 12)
                need an average of 1,500 calories a day. However, individual
                needs vary
            </Text>
            <ProductDetailContent dataContent={dataContent} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 2,
        backgroundColor: '#F5F5F5',
    },
    calorieContent: {
        padding: 15,
    },
});
