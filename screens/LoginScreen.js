import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ onLogin }) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.ambientShapeTop} />
            <View style={styles.ambientShapeMiddle} />
            <View style={styles.ambientShapeBottom} />
            <View style={styles.heroArea}>
                <Image source={require('../assets/ryu.png')} resizeMode="contain" style={styles.fighterImage} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Conecte-se{`\n`}e organize suas{`\n`}jogatinas</Text>
                <Text style={styles.description}>Crie grupos para jogar seus games{`\n`}favoritos com seus amigos</Text>
                <TouchableOpacity activeOpacity={0.82} onPress={onLogin} style={styles.discordButton}>
                    <LinearGradient colors={['#f21f4f', '#ee1745']} style={styles.buttonBackground}>
                        <View style={styles.iconBox}>
                            <Image source={require('../assets/Vector.png')} resizeMode="contain" style={styles.discordIcon} />
                        </View>
                        <Text style={styles.buttonLabel}>Entrar com Discord</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0b123b', alignItems: 'center', overflow: 'hidden' },
    ambientShapeTop: { position: 'absolute', width: 390, height: 88, top: 190, left: -60, backgroundColor: '#d21553', transform: [{ rotate: '-31deg' }], opacity: 0.95 },
    ambientShapeMiddle: { position: 'absolute', width: 310, height: 42, top: 272, right: -100, backgroundColor: '#ac134a', transform: [{ rotate: '-31deg' }] },
    ambientShapeBottom: { position: 'absolute', width: 280, height: 20, top: 380, left: -120, backgroundColor: '#431446', transform: [{ rotate: '-31deg' }] },
    heroArea: { width: '100%', height: '50%', minHeight: 330, alignItems: 'center', justifyContent: 'flex-end', zIndex: 1 },
    fighterImage: { width: 365, height: 430, marginBottom: -28, marginLeft: 4 },
    content: { width: '100%', alignItems: 'center', paddingHorizontal: 24, zIndex: 2 },
    title: { color: '#f2f4ff', fontSize: 34, lineHeight: 36, fontWeight: '800', textAlign: 'center' },
    description: { marginTop: 24, color: '#c6cbe2', fontSize: 16, lineHeight: 25, textAlign: 'center' },
    discordButton: { width: '100%', maxWidth: 274, height: 56, marginTop: 48, marginBottom: 28, borderRadius: 8, overflow: 'hidden' },
    buttonBackground: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    iconBox: { width: 56, height: '100%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: 'rgba(100, 0, 31, 0.2)' },
    discordIcon: { width: 25, height: 20 },
    buttonLabel: { flex: 1, color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
