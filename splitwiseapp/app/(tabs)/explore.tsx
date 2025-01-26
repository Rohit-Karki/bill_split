import { StyleSheet, Image, Platform, Text, TouchableOpacity } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <Text style={styles.logo}>Split_wise.</Text>
        <ThemedView style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      {/* Balance Card */}
      <ThemedView style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>$ 76,256.91</Text>
        <Text style={styles.balancePercentage}>6.5%</Text>
        <TouchableOpacity style={styles.addExpenseButton}>
          <Text style={styles.addExpenseText}>+ ADD EXPENSE</Text>
        </TouchableOpacity>
      </ThemedView>

      {/* Expense Summary */}
      <ThemedView style={styles.expenseSummary}>
        <ThemedView style={styles.expenseCard}>
          <Text style={styles.expenseTitle}>YOU OWE</Text>
          <Text style={styles.expenseAmount}>$562.72</Text>
        </ThemedView>
        <ThemedView style={styles.expenseCard}>
          <Text style={styles.expenseTitle}>YOU OWED</Text>
          <Text style={styles.expenseAmount}>$38,822.72</Text>
        </ThemedView>
      </ThemedView>

      {/* Notification */}
      <Text style={styles.notificationText}>
        You’ve Reached your Monthly expense limit.{" "}
        <Text style={styles.upgradeText}>Upgrade Plan</Text>
      </Text>

      {/* View Plans Button */}
      <TouchableOpacity style={styles.viewPlansButton}>
        <Text style={styles.viewPlansText}>VIEW PLANS</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <ThemedView style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navText}>ANALYTICS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💳</Text>
          <Text style={styles.navText}>MY CARDS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>PROFILE</Text>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  balanceCard: {
    backgroundColor: "#6BD4A5",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  balancePercentage: {
    fontSize: 16,
    color: "#FFF",
    marginTop: 5,
  },
  addExpenseButton: {
    marginTop: 20,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addExpenseText: {
    color: "#6BD4A5",
    fontWeight: "bold",
  },
  expenseSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  expenseCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
    elevation: 3,
  },
  expenseTitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  expenseAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  notificationText: {
    textAlign: "center",
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
  upgradeText: {
    color: "#6BD4A5",
    fontWeight: "bold",
  },
  viewPlansButton: {
    backgroundColor: "#6BD4A5",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  viewPlansText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: "#999",
  },
});

