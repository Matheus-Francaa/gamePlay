import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categorias = [
    { label: 'Ranqueada', icon: '🏆' },
    { label: 'Duelo 1x1', icon: '⚔️' },
    { label: 'Diversão', icon: '🎭' },
];

const partidas = [
    { title: 'Lendários', type: 'Ranqueada', date: '18/06 às 21:00h', role: 'Anfitrião', roleColor: '#ed1648', image: require('../assets/lol.png') },
    { title: 'Yeah, boy', type: 'Diversão', date: '23/06 às 19:00h', role: 'Visitante', roleColor: '#2fc45b', image: require('../assets/read.png') },
    { title: 'Rumo ao topo', type: '1×1', date: '20/06 às 09:00h', role: 'Anfitrião', roleColor: '#ed1648', image: require('../assets/cs.png') },
    { title: 'Bora queimar tudo', type: 'Ranqueada', date: '20/06 às 14:20h', role: 'Anfitrião', roleColor: '#ed1648', image: require('../assets/apex.png') },
    { title: 'Valorosos', type: 'Diversão', date: '19/06 às 21:00h', role: 'Anfitrião', roleColor: '#ed1648', image: require('../assets/valorant.png') },
];

export default function TelaInicial({ onOpenDetails, onOpenSchedule, onLogout }) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <View style={styles.avatar}><Text style={styles.avatarText}>TF</Text></View>
                    <View style={styles.greeting}><Text style={styles.hello}>Olá, <Text style={styles.name}>Tiago</Text></Text><Text style={styles.subtitle}>Hoje é dia de vitória</Text></View>
                    <TouchableOpacity onPress={onOpenSchedule} activeOpacity={0.8} style={styles.addButton}><Text style={styles.addText}>+</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
                    {categorias.map((categoria) => <TouchableOpacity key={categoria.label} activeOpacity={0.8} style={styles.categoryCard}><Text style={styles.categoryIcon}>{categoria.icon}</Text><Text style={styles.categoryLabel}>{categoria.label}</Text></TouchableOpacity>)}
                </ScrollView>
                <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Partidas agendadas</Text><Text style={styles.total}>Total 6</Text></View>
                <View style={styles.matchList}>
                    {partidas.map((partida) => <TouchableOpacity key={partida.title} onPress={partida.title === 'Lendários' ? onOpenDetails : undefined} activeOpacity={0.8} style={styles.matchRow}>
                        <Image source={partida.image} resizeMode="cover" style={styles.gameImage} />
                        <View style={styles.matchInfo}>
                            <View style={styles.matchTopLine}><Text style={styles.matchTitle} numberOfLines={1}>{partida.title}</Text><Text style={styles.matchType}>{partida.type}</Text></View>
                            <View style={styles.matchBottomLine}><Text style={styles.date}><Text style={styles.calendar}>■</Text> {partida.date}</Text><Text style={[styles.role, { color: partida.roleColor }]}>● {partida.role}</Text></View>
                        </View>
                    </TouchableOpacity>)}
                </View>
                <TouchableOpacity onPress={onLogout} activeOpacity={0.8} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0b123b' },
    content: { paddingTop: 30, paddingBottom: 20 },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 31 },
    avatar: { width: 44, height: 44, borderRadius: 7, backgroundColor: '#ef1a4b', alignItems: 'center', justifyContent: 'center' },
    avatarText: { color: '#fff', fontSize: 18, fontWeight: '800' },
    greeting: { flex: 1, marginLeft: 20 },
    hello: { color: '#c9cde2', fontSize: 19 },
    name: { color: '#f1f3fc', fontWeight: '800' },
    subtitle: { color: '#9da4c2', fontSize: 13, marginTop: 3 },
    addButton: { width: 46, height: 46, borderRadius: 8, backgroundColor: '#ef1a4b', alignItems: 'center', justifyContent: 'center' },
    addText: { color: '#fff', fontSize: 28, fontWeight: '300' },
    categories: { paddingLeft: 31, paddingRight: 20, gap: 7, marginTop: 38 },
    categoryCard: { width: 99, height: 113, borderRadius: 7, backgroundColor: '#1a276b', alignItems: 'center', justifyContent: 'center' },
    categoryIcon: { fontSize: 32, marginBottom: 12 },
    categoryLabel: { color: '#e4e6f4', fontSize: 12, fontWeight: '700' },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingHorizontal: 31 },
    sectionTitle: { color: '#e6e8f5', fontSize: 16, fontWeight: '800' },
    total: { color: '#9da4c2', fontSize: 13 },
    matchList: { marginTop: 14, paddingHorizontal: 31 },
    matchRow: { minHeight: 96, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#18245e' },
    gameImage: { width: 60, height: 64, borderRadius: 8, backgroundColor: '#17235f' },
    matchInfo: { flex: 1, marginLeft: 19, paddingVertical: 15 },
    matchTopLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    matchTitle: { flex: 1, color: '#e8eaf6', fontSize: 15, fontWeight: '800' },
    matchType: { color: '#aab0c9', fontSize: 12, marginLeft: 8 },
    matchBottomLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 },
    date: { color: '#d9dced', fontSize: 12 },
    calendar: { color: '#ed1648', fontSize: 12 },
    role: { fontSize: 12 },
    logoutButton: { alignSelf: 'center', marginTop: 30, marginBottom: 18, padding: 10 },
    logoutText: { color: '#ed1648', fontSize: 15, fontWeight: '700' },
});
