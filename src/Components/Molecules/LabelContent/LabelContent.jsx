import { View } from 'react-native';

export default function LabelContent({
    content,
    alignItems,
    icon,
    flexDirection,
    justifyContent,
    img,
}) {
    return (
        <View
            style={{
                display: 'flex',
                alignItems: alignItems,
                flexDirection: flexDirection,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 0.9,
                padding: 10,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 3 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 5,
                justifyContent: justifyContent,
            }}
        >
            {img && content ? (
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    {img}
                    {content}
                </View>
            ) : (
                content
            )}

            {icon}
        </View>
    );
}
