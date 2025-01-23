import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Pacifico-Regular": require("../assets/fonts/Playwrite/static/PlaywriteVN-Light.ttf"),
    });
    const images = [
        require('../assets/meme/1.jpg'),
        require('../assets/meme/2.jpg'),
        require('../assets/meme/3.jpg'),
        require('../assets/meme/4.jpg'),
        require('../assets/meme/5.jpg'),
        require('../assets/meme/6.jpg'),
        require('../assets/meme/7.jpg'),
        require('../assets/meme/8.jpg'),
    ];
    //var randomImage = images[Math.floor(Math.random() * 8)];


    const [randomImage, setRandomImage] = useState(images[Math.floor(Math.random() * images.length)]);

    // Use useEffect to set up the interval
    useEffect(() => {
        const interval = setInterval(() => {
            setRandomImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [images]);

    const [buttonPressed, setButtonPressed] = useState(false);

    const handlePress = () => {
        setButtonPressed(!buttonPressed); // Toggle the button state
        Alert.alert("Button Pressed", buttonPressed ? "Button Released!" : "You pressed me!");
    };
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Instagram</Text>
            <Image source={require('../assets/heart.png')} style={styles.heart} />
            <Image source={require('../assets/send.png')} style={styles.send} />

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                <View style={styles.circularContainer}>
                    <Image
                        source={require("../assets/stories/2.png")}
                        style={styles.previewPic}
                    />
                    <View style={styles.plusContainer}>
                        <Text style={styles.plusIcon}>+</Text>
                    </View>
                    <Text style={styles.storyInfo}>Your story</Text>
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={require("../assets/stories/1.png")}
                        style={styles.previewPic}
                    />
                    <Text style={styles.storyInfo}>Person 1</Text>
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={require("../assets/stories/3.png")}
                        style={styles.previewPic}
                    />
                    <Text style={styles.storyInfo}>Person 2</Text>
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={require("../assets/stories/4.png")}
                        style={styles.previewPic}
                    />
                    <Text style={styles.storyInfo}>Person 3</Text>
                </View>
            </ScrollView>

            <View style={styles.instaContainer}>
                <View style={styles.instaAuth}>
                    <Image
                        source={require("../assets/stories/5.png")}
                        style={styles.previewPic}
                    />
                    <Text style={styles.instaInfo}>MemeMaster</Text>
                </View>
                <Image source={randomImage} style={styles.instaPic} />
            </View>

            <View style={styles.footer}>
                <Image
                    source={require("../assets/home.png")}
                    style={styles.footerOptions}
                />

                <Image
                    source={require("../assets/search.png")}
                    style={styles.footerOptions}
                />

                <Image
                    source={require("../assets/add.png")}
                    style={styles.footerOptions}
                />

                <Image
                    source={require("../assets/reel.png")}
                    style={styles.footerOptions}
                />

                <View style={[styles.footerOptions, styles.footerprofile]}>
                    <Image
                        source={require("../assets/stories/2.png")}
                        style={styles.previewPic}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={[styles.button, buttonPressed && styles.buttonPressed]}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>
                    {buttonPressed ? "Release Me" : "Press Me"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#6200ea",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonPressed: {
        backgroundColor: "#3700b3",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    footerprofile: {
        width: 30,
        height: 30,
        borderRadius: 42.5,
        overflow: "hidden",
        top: 10,
        left: 35,
    },
    footerOptions: {
        width: 30,
        height: 30,
        top: 10,
        left: 35,
    },
    footer: {
        backgroundColor: '#000000',
        width: '100%',
        height: 50,
        top: -50,
        flexDirection: "row",
        gap: 45,

    },
    instaInfo: {
        color: '#fff',
        fontSize: 12,
        left: 45,
        top: -30,
        width: 90,
    },
    instaAuth: {
        width: 45,
        height: 45,
        borderRadius: 42.5,
        overflow: "visible",
        borderWidth: 3,
        borderColor: "#ff0099",
        marginHorizontal: 10,
    },
    instaContainer: {
        height: 400,
        width: "100%",
        top: -50,
    },
    instaPic: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
    },
    storyInfo: {
        color: '#fff',
        fontSize: 12,
        left: 15,
        top: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        height: "100%",
    },
    title: {
        position: "absolute",
        left: 20,
        top: 20,
        height: 50,
        width: "100%",
        textAlign: "left",
        fontSize: 25,
        fontFamily: "Pacifico-Regular",
        color: "#fff",
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
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 100,
    },
    circularContainer: {
        width: 85,
        height: 85,
        borderRadius: 42.5,
        overflow: "visible",
        borderWidth: 3,
        borderColor: "#ff0099",
        marginHorizontal: 10,
    },
    plusContainer: {
        position: "absolute",
        left: 45,
        top: 45,
        width: 40,
        height: 40,
        borderRadius: 42.5,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    plusIcon: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
    },
    previewPic: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});