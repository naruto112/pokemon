import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 50
    },
    list: {
        padding: Platform.OS === 'android'? 15 : 40,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

    },
    labelValue: {
        marginTop: 20,
        fontSize: Platform.OS === 'android'? 14 : 18,
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
    },
    viewBtn:{
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 20
    },  
    action: {
        backgroundColor: '#1b95e0',
        borderRadius: 8,
        height: 50,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
})