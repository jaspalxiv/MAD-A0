import React from "react";
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";

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
    const randomImage = images[Math.floor(Math.random() * 8)];

    return (
        <View style={styles.container}>
            <StatusBar style={"auto"} />
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
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.previewPic}
                    />
                    <View style={styles.plusContainer}>
                        <Text style={styles.plusIcon}>+</Text>
                    </View>
                    <Text style={styles.storyInfo}>Your story</Text>
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.previewPic}
                    />
                    <Text style={styles.storyInfo}>Person 1</Text>
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.previewPic}
                    />
                    <Text style={styles.storyInfo}>Person 2</Text>
                </View>

                <View style={styles.circularContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.previewPic}
                    />
                    <Text style={styles.storyInfo}>Person 3</Text>
                </View>
            </ScrollView>

            <View style={styles.instaContainer}>
                <Image source={randomImage} style={styles.instaPic} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    instaContainer: {
        height: 500,
        width: "100%",
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
