import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const categories = [
    { label: 'Ranqueada', icon: '🏆' },
    { label: 'Duelo 1x1', icon: '⚔️' },
    { label: 'Diversão', icon: '🎭' },
];

export default function ScheduleScreen({ onBack }) {
    const [selectedCategory, setSelectedCategory] = useState('Ranqueada');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} activeOpacity={0.8} style={styles.backButton}>
                    <Text style={styles.backIcon}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Agendar partida</Text>
                <View style={styles.headerSpacer} />
            </View>

            <View style={styles.body}>
                <Text style={styles.label}>Categoria</Text>
                <View style={styles.categoryRow}>
                    {categories.map((category) => {
                        const isSelected = selectedCategory === category.label;
                        return (
                            <TouchableOpacity
                                key={category.label}
                                onPress={() => setSelectedCategory(category.label)}
                                activeOpacity={0.8}
                                style={[styles.categoryCard, isSelected && styles.categoryCardSelected]}
                            >
                                <Text style={[styles.categoryIcon, !isSelected && styles.categoryIconMuted]}>{category.icon}</Text>
                                <Text style={styles.categoryLabel}>{category.label}</Text>
                                {isSelected && <View style={styles.selectedDot} />}
                            </TouchableOpacity>
                        );
                    })}
                    <View style={styles.categoryPeek} />
                </View>

                <TouchableOpacity activeOpacity={0.8} style={styles.gameSelector}>
                    <Image source={require('../assets/valorant.png')} resizeMode="cover" style={styles.gameImage} />
                    <View style={styles.gameText}>
                        <Text style={styles.gameName}>Valorosos</Text>
                        <Text style={styles.gameSubtitle}>Valorant</Text>
                    </View>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                <View style={styles.fieldLabels}>
                    <Text style={styles.label}>Dia e mês</Text>
                    <Text style={styles.label}>Horário</Text>
                </View>
                <View style={styles.inputRow}>
                    <TextInput value={day} onChangeText={setDay} keyboardType="number-pad" maxLength={2} placeholder="" placeholderTextColor="#8b93b8" style={styles.smallInput} />
                    <Text style={styles.separator}>/</Text>
                    <TextInput value={month} onChangeText={setMonth} keyboardType="number-pad" maxLength={2} placeholder="" placeholderTextColor="#8b93b8" style={styles.smallInput} />
                    <View style={styles.inputGap} />
                    <TextInput value={hour} onChangeText={setHour} keyboardType="number-pad" maxLength={2} placeholder="" placeholderTextColor="#8b93b8" style={styles.smallInput} />
                    <Text style={styles.separator}>:</Text>
                    <TextInput value={minute} onChangeText={setMinute} keyboardType="number-pad" maxLength={2} placeholder="" placeholderTextColor="#8b93b8" style={styles.smallInput} />
                </View>

                <View style={styles.descriptionHeader}>
                    <Text style={styles.label}>Descrição</Text>
                    <Text style={styles.counter}>Máx 100 caracteres</Text>
                </View>
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    maxLength={100}
                    multiline
                    textAlignVertical="top"
                    style={styles.descriptionInput}
                />

                <TouchableOpacity activeOpacity={0.82} style={styles.scheduleButton}>
                    <Text style={styles.scheduleButtonText}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0b123b' },
    header: { height: 89, paddingTop: 23, paddingHorizontal: 27, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#202c70' },
    backButton: { width: 40, height: 40, justifyContent: 'center' },
    backIcon: { color: '#e8ebfa', fontSize: 38, fontWeight: '300', lineHeight: 38 },
    headerTitle: { color: '#f1f3fc', fontSize: 16, fontWeight: '800' },
    headerSpacer: { width: 40 },
    body: { flex: 1, paddingHorizontal: 34, paddingTop: 28 },
    label: { color: '#e7e9f5', fontSize: 14, fontWeight: '800' },
    categoryRow: { flexDirection: 'row', marginTop: 12, marginHorizontal: 0, gap: 7, overflow: 'hidden' },
    categoryCard: { width: 88, height: 101, borderRadius: 7, borderWidth: 1, borderColor: '#1e2b72', backgroundColor: '#192567', alignItems: 'center', justifyContent: 'center', position: 'relative' },
    categoryCardSelected: { borderColor: '#27378e', backgroundColor: '#202f7a' },
    categoryIcon: { fontSize: 30, marginBottom: 12 },
    categoryIconMuted: { opacity: 0.6 },
    categoryLabel: { color: '#e4e6f4', fontSize: 11, fontWeight: '700' },
    selectedDot: { position: 'absolute', top: 7, right: 7, width: 7, height: 7, borderRadius: 2, backgroundColor: '#ed1648' },
    categoryPeek: { width: 24, height: 101, borderRadius: 7, borderWidth: 1, borderColor: '#1e2b72', backgroundColor: '#192567' },
    gameSelector: { height: 58, marginTop: 27, borderRadius: 7, borderWidth: 1, borderColor: '#263580', flexDirection: 'row', alignItems: 'center', overflow: 'hidden' },
    gameImage: { width: 59, height: 58 },
    gameText: { flex: 1, marginLeft: 12 },
    gameName: { color: '#e9eaf7', fontSize: 14, fontWeight: '800' },
    gameSubtitle: { color: '#9da4c2', fontSize: 11, marginTop: 5 },
    chevron: { color: '#dce0f2', fontSize: 25, marginRight: 17 },
    fieldLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 26, paddingRight: 43 },
    inputRow: { flexDirection: 'row', alignItems: 'center', marginTop: 11 },
    smallInput: { width: 41, height: 40, borderRadius: 7, backgroundColor: '#202e77', borderWidth: 1, borderColor: '#293983', color: '#fff', textAlign: 'center', fontSize: 15 },
    separator: { color: '#a7aec9', fontSize: 16, marginHorizontal: 4 },
    inputGap: { width: 99 },
    descriptionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 26 },
    counter: { color: '#9da4c2', fontSize: 11 },
    descriptionInput: { height: 81, marginTop: 11, padding: 12, borderRadius: 7, backgroundColor: '#202e77', borderWidth: 1, borderColor: '#293983', color: '#fff', fontSize: 14 },
    scheduleButton: { height: 48, marginTop: 47, borderRadius: 7, backgroundColor: '#ed1648', alignItems: 'center', justifyContent: 'center' },
    scheduleButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
});
