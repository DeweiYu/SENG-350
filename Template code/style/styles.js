import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    /* SignIn.js, SignUp.js, ResetPassword.js, Home.js */
    container: {
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    description: {
        alignItems: 'center',
        fontSize: 20,
        padding: 20,
    },
    title: {
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
    },

    title_container: {
        flexDirection: "row",
        height: height*0.15,
        backgroundColor: "",
        alignItems: "center",
        justifyContent: "center",
        marginTop: height*0.01,
        marginBottom: height*0.01,
    },
    middle_container: {
        alignItems: 'center',
        padding: 60,
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        marginTop: -height*0.15,
    },

    button_container: {
        alignItems: 'center',
        padding: 50,
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        marginTop: 50,
    },

    /* SignUp.js */
    sign_up_button_container: {
        alignItems: 'center',
        padding: 50,
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        marginTop: 180,
    },

    /* InputValue.js */
    input_value_container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    textInput: {
        height: 35,
        fontSize: 17,
    },
    eyeIcon: {
        height: 35,
        marginLeft: '90%',
        marginTop: -28,
    },

    /* logo in TopHeader.js */
    logo: {
        maxHeight: 200,
        maxWidth: 300,
        marginRight: 20,
        marginTop: height * 0.015,
        marginBottom: 50,
        marginLeft: width * 0.2,
        alignItems: "center",
        justifyContent: "center",
    },
    logo_container: {
        marginLeft: width * 0.1,
        marginRight: width * 0.5,
        flexDirection: "row",
    },

    /* Help Button */
    help: {
        maxHeight: 200,
        maxWidth: 300,
        width: '100%',
        marginRight: 20,
        marginBottom: 20,
        marginLeft: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    help_container: {
        marginRight: 0,
        marginLeft: 200,
        marginTop: -155,
        marginBottom: 140,
    },
    /* Button.js */
    create_button_container: {
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
    },
    create_button_container_primaryButton: {
        backgroundColor: '#7BB055',
        marginVertical: 5,
        height: 45,
    },
    create_button_container_foodButton: {
        backgroundColor: '#00BFFF',
        marginVertical: 5,
        height: 45,
    },
    create_button_container_foodNameButton: {
        marginTop: 10,
        backgroundColor: '#00BFFF',
        marginVertical: 5,
        width: 310,
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    create_button_container_findStoreButton: {
        backgroundColor: '#fc4736',
        marginVertical: 5,
        height: 45,
    },
    create_button_container_secondaryButton: {
        borderColor: '#7BB055',
        borderWidth: 2,
        marginVertical: 5,
        height: 45,
    },
    create_button_container_tertiaryButton: {
        height: 35,
    },
    create_button_container_cancelButton: {
        height: 45,
    },
    button_text: {
        height: 35,
        fontWeight: 'bold',
        fontSize: 17,
    },
    button_text_primaryButton: {
        color: 'white',
    },
    button_text_foodButton: {
        color: 'white',
    },
    button_text_foodNameButton: {
        color: 'white',
    },
    button_text_findStoreButton: {
        color: 'white',
    },
    button_text_secondaryButton: {
        color: '#7BB055',
    },
    button_text_tertiaryButton: {
        color: '#7BB055',
        fontSize: 15,
    },
    button_text_cancelButton: {
        color: '#fc4736',
        fontSize: 15,
    },

    foodTitleContainer: {
        marginTop: height*0.01,
        flexDirection: "row",
        height: height*0.15,
        backgroundColor: "",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: -height*0.1,
    },
    foodMiddleContainer: {
        marginBottom: 100,
        flexDirection: "column",
        height: height*0.7,
        justifyContent: "space-between",
       
        marginLeft: "2%",
    },

    /* Scoll View */
    scrollView: {
        height: 50,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 100
    },
    scrollViewContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    /* Map */
    map_container: {
        height: height*0.01,
        alignItems: "center",
        justifyContent: "center",
        marginTop: height*0.40,
    },
    map: {
        height:height*1.15,
        width:width*1.15,
    },
    map_button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        //height: 40,
        width: '100%',
        marginVertical: height*0.25
        //borderRadius: 20,
        //marginTop: -height*0.15,
    },
    searched_map_button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7BB055',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: height*0.2,
        backgroundColor: 'white',
    },
    mapMiddleContainer: {
        width: '100%',
        height: '100%',
        marginBottom: 1000,
    },
    /* Help */
    helpTextContainer: {
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 200,
        marginBottom: 20,
        borderRadius: 7.5,
    },
    helpText: {
        color: 'black',
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold',
    },
    /* Store Page */
    store_page_title: {
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -20
    },
    store_picture: {
        maxHeight: 400,
        maxWidth: '100%',
        minHeight: 400,
        marginTop: -130,
        marginBottom: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    store_picture_container: {
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        width: width+20,
        marginTop: -height*0.15,
    },
    store_description_container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        //height: 40,
        borderColor: '#7BB055',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 150,
        //borderRadius: 20,
        //marginTop: -height*0.15,
    },
    store_picture: {
        maxHeight: 400,
        maxWidth: '100%',
        minHeight: 400,
        marginTop: -130,
        marginBottom: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    store_item: {
        alignItems: 'center',
        fontSize: 18,
        padding: 10,
    },
    store_items_container: {
        alignItems: 'flex-start',
        marginTop: -145,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#00BFFF',
    },
})