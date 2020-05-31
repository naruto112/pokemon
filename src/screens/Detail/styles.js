import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    detail: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#e6e6e6',
        marginBottom: 16,
        marginTop: 48,
    },
    detailDescription: {
        padding: 25,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 10,
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },

    action: {
        backgroundColor: '#1b95e0',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    safeAreaView: {
        width: 345,
        height: 250,
        marginTop: 10,
    },
    detailText: {
        marginBottom: 50
    }
});