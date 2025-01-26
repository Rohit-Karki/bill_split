import { ThemedView } from '@/components/ThemedView';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const transactions = [
    { id: "1", title: "Coffee", icon: "☕", date: "30 May - 11:29AM", amount: "- $10.12" },
    { id: "2", title: "Dribbble", icon: "🎨", date: "30 May - 10:29AM", amount: "- $180.00" },
    { id: "3", title: "Spotify", icon: "🎵", date: "30 May - 09:21AM", amount: "- $29.00" },
    { id: "4", title: "Refund", icon: "🛒", date: "29 May - 09:21AM", amount: "+ $29.00" },
  ];

  const renderTransaction = ({ item }) => (
    <ThemedView style={styles.transactionItem}>
      <Text style={styles.transactionIcon}>{item.icon}</Text>
      <ThemedView style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </ThemedView>
      <Text style={item.amount.startsWith("+") ? styles.amountPositive : styles.amountNegative}>
        {item.amount}
      </Text>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image
          style={styles.profilePicture}
          source={{ uri: "https://example.com/profile.jpg" }}
        />
        <Text style={styles.name}>Billie Eilish</Text>
        <Text style={styles.balance}>You Owe her $736.29</Text>
      </ThemedView>
      <ThemedView style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>SETTLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonOutline}>
          <Text style={styles.actionTextOutline}>REQUEST</Text>
        </TouchableOpacity>
      </ThemedView>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Today</Text>}
        ListFooterComponent={<Text style={styles.sectionTitle}>Yesterday</Text>}
        contentContainerStyle={styles.transactionsList}
      />
    </ThemedView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  balance: {
    fontSize: 16,
    color: "#999",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  actionButtonOutline: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  actionText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  actionTextOutline: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  transactionsList: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  transactionIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  transactionDate: {
    fontSize: 14,
    color: "#999",
  },
  amountNegative: {
    fontSize: 16,
    color: "#E74C3C",
    fontWeight: "bold",
  },
  amountPositive: {
    fontSize: 16,
    color: "#2ECC71",
    fontWeight: "bold",
  },
});