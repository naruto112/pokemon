import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 50
    },
    list: {
        padding: 40,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

    },
    labelValue: {
        marginTop: 20,
        fontSize: 18,
        marginBottom: 24,
        color: '#403f3f',
        fontWeight: 'bold'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
})