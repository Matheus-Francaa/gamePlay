import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const players = [
    { name: 'Tiago Luchtenberg', status: 'Disponível', color: '#2fc45b', initials: 'TL' },
    { name: 'Rodrigo Gonçalves', status: 'Ocupado', color: '#ed1648', initials: 'RG' },
    { name: 'Diego Fernandes', status: 'Ocupado', color: '#ed1648', initials: 'DF' },
];

export default function DetailsScreen({ onBack }) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.topBar}>
                <TouchableOpacity onPress={onBack} style={styles.backButton} activeOpacity={0.8}>
                    <Text style={styles.backIcon}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detalhes</Text>
                <TouchableOpacity style={styles.shareButton} activeOpacity={0.8}>
                    <View style={styles.shareConnectionTop} />
                    <View style={styles.shareConnectionBottom} />
                    <View style={[styles.shareNode, styles.shareNodeTop]} />
                    <View style={[styles.shareNode, styles.shareNodeMiddle]} />
                    <View style={[styles.shareNode, styles.shareNodeBottom]} />
                </TouchableOpacity>
            </View>

            <ImageBackground source={require('../assets/lol2.jpg')} resizeMode="cover" style={styles.banner}>
                <View style={styles.bannerShade} />
                <View style={styles.bannerText}>
                    <Text style={styles.matchTitle}>Lendários</Text>
                    <Text style={styles.matchDescription}>É hoje que vamos chegar ao challenger sem{`\n`}perder uma partida da md10</Text>
                </View>
            </ImageBackground>

            <View style={styles.playersHeader}>
                <Text style={styles.playersTitle}>Jogadores</Text>
                <Text style={styles.playersTotal}>Total 3</Text>
            </View>

            <View style={styles.playersList}>
                {players.map((player) => (
                    <View key={player.name} style={styles.playerRow}>
                        <View style={styles.playerAvatar}><Text style={styles.playerInitials}>{player.initials}</Text></View>
                        <View style={styles.playerInfo}>
                            <Text style={styles.playerName}>{player.name}</Text>
                            <Text style={styles.playerStatus}><Text style={{ color: player.color }}>●</Text> {player.status}</Text>
                        </View>
                    </View>
                ))}
            </View>

            <TouchableOpacity style={styles.joinButton} activeOpacity={0.82}>
                <View style={styles.joinIconBox}>
                    <Image source={require('../assets/Vector.png')} resizeMode="contain" style={styles.discordIcon} />
                </View>
                <Text style={styles.joinLabel}>Entrar na partida</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0b123b' },
    topBar: { height: 96, paddingTop: 25, paddingHorizontal: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#202c70' },
    backButton: { width: 38, height: 40, justifyContent: 'center' },
    backIcon: { color: '#e8ebfa', fontSize: 38, fontWeight: '300', lineHeight: 38 },
    headerTitle: { color: '#f1f3fc', fontSize: 17, fontWeight: '800' },
    shareButton: { width: 30, height: 34, alignItems: 'center', justifyContent: 'center' },
    shareConnectionTop: { position: 'absolute', width: 15, height: 3, backgroundColor: '#ed1648', top: 11, left: 6, transform: [{ rotate: '-28deg' }] },
    shareConnectionBottom: { position: 'absolute', width: 15, height: 3, backgroundColor: '#ed1648', top: 20, left: 6, transform: [{ rotate: '28deg' }] },
    shareNode: { position: 'absolute', width: 8, height: 8, borderRadius: 4, backgroundColor: '#ed1648' },
    shareNodeTop: { top: 6, right: 1 },
    shareNodeMiddle: { top: 15, left: 1 },
    shareNodeBottom: { bottom: 4, right: 1 },
    banner: { height: 222, justifyContent: 'flex-end' },
    bannerShade: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(6, 16, 54, 0.38)' },
    bannerText: { paddingHorizontal: 31, paddingBottom: 24 },
    matchTitle: { color: '#f3f4fb', fontSize: 25, fontWeight: '800' },
    matchDescription: { marginTop: 14, color: '#d4d8e9', fontSize: 13, lineHeight: 20 },
    playersHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 31, paddingTop: 24, paddingBottom: 12 },
    playersTitle: { color: '#e8eaf6', fontSize: 15, fontWeight: '800' },
    playersTotal: { color: '#9da4c2', fontSize: 13 },
    playersList: { paddingHorizontal: 31 },
    playerRow: { height: 68, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#18245e' },
    playerAvatar: { width: 45, height: 45, borderRadius: 8, backgroundColor: '#69718e', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#c0c6d7' },
    playerInitials: { color: '#fff', fontSize: 13, fontWeight: '800' },
    playerInfo: { marginLeft: 15 },
    playerName: { color: '#e6e8f5', fontSize: 15, fontWeight: '800' },
    playerStatus: { color: '#aab0c9', fontSize: 13, marginTop: 5 },
    joinButton: { position: 'absolute', left: 31, right: 31, bottom: 36, height: 54, borderRadius: 8, backgroundColor: '#ed1648', flexDirection: 'row', alignItems: 'center', overflow: 'hidden' },
    joinIconBox: { width: 55, height: '100%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: 'rgba(100, 0, 31, 0.2)' },
    discordIcon: { width: 25, height: 20 },
    joinLabel: { flex: 1, color: '#fff', fontSize: 15, fontWeight: '600', textAlign: 'center' },
});
