import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontSize: 12,
    fontStyle: "bold",
  },
  description: {
    width: "85%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  total: {
    width: "20%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableFooter = ({ invoice }) => {
  const date1 = new Date(invoice?.Journey_Starting_Date);
  const date2 = new Date(invoice?.Journey_Ending_Date);
  const timwDiff = date2.getTime() - date1.getTime();
  const dateDiff = timwDiff / (1000 * 3600 * 24);
  return (
    <View style={styles.row}>
      <Text style={styles.description}>TOTAL</Text>
      <Text style={styles.total}>
        {(invoice.Price * (dateDiff + 1)).toFixed(2)}
      </Text>
    </View>
  );
};

export default InvoiceTableFooter;
