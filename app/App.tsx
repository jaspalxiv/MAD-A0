import React from "react";
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Pacifico-Regular": require("../assets/fonts/Playwrite/static/PlaywriteVN-Light.ttf"), // Adjust the path if needed
    });

    return (
        <View style={styles.container}>
            <StatusBar style={"auto"} />
            <Text style={styles.title}>Instagram</Text>
            <Image source={require('../assets/heart.png')} style={styles.heart} />
            <Image source={require('../assets/send.png')} style={styles.send} />

            <ScrollView 
                horizontal={true} // Enables horizontal scrolling
                showsHorizontalScrollIndicator={false} // Hides the scroll bar (optional)
                contentContainerStyle={styles.scrollContainer} // Styles the inner content
            >
                <View style={styles.circularContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
                        style={styles.previewPic}
                    />
                    <View style={styles.plusContainer}>
                        <Text style={styles.plusIcon}>+</Text>
                    </View>
                </View>



                <View style={styles.circularContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
                        style={styles.previewPic}
                    />
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
                        style={styles.previewPic}
                    />
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
                        style={styles.previewPic}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000", // Black background for Instagram-like look
        alignItems: "center",
        height: "100%",
    },
    title: {
        position: "absolute",
        left: 20,
        top: 20,
        height:50,
        width: "100%",
        textAlign: "left",
        fontSize: 25,
        fontFamily: "Pacifico-Regular",
        color: "#fff", // White text
    },
    heart: {
        position: "absolute",
        right: 70,
        top: 50,
        height: 20,
        width: 20,
    },
    send: {
        position: "absolute",
        right: 35,
        top: 45,
        height: 25,
        width: 25,
    },
    scrollContainer: {
        height: "auto",
        width: "auto",
        left: 0,
        top: 0,
        flexDirection: "row", // Ensures content is laid out horizontally
        paddingHorizontal: 10,
        paddingTop: 100, // Pushes the content down (adjust as needed)
    },
    circularContainer: {
        width: 85, // Size of the circle
        height: 85, // Size of the circle
        borderRadius: 42.5, // Half of width/height for a perfect circle
        overflow: "visible", // Ensures the image doesn't go outside the circle
        borderWidth: 3, // Optional: adds a border
        borderColor: "#ff0099", // Optional: border color (like Instagram)
        marginHorizontal: 10, // Adds spacing between items
    },
    plusContainer: {
        position: "absolute",
        left: 45,
        top: 45,
        width: 40, // Size of the circle
        height: 40, // Size of the circle
        borderRadius: 42.5, // Half of width/height for a perfect circle
        backgroundColor: "#FFF", // White background
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10, // Adds spacing between items
    },
    plusIcon: {
        fontSize: 30, // Adjust size as needed
        color: "#000", // Black color for contrast
        fontWeight: "bold",
    },
    previewPic: {
        width: "100%",
        height: "100%",
        resizeMode: "cover", // Ensures the image covers the circle proportionally
    },
});
