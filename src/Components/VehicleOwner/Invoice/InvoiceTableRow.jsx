import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "40%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  total: {
    width: "20%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "20%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "20%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ invoice }) => {
  const date1 = new Date(invoice.Journey_Starting_Date);
  const date2 = new Date(invoice?.Journey_Ending_Date);
  const timwDiff = date2.getTime() - date1.getTime();
  const dateDiff = timwDiff / (1000 * 3600 * 24);
  return (
    <Fragment>
      <View style={styles.row}>
        <Text style={styles.description}>Rent-out vehicle rent</Text>
        <Text style={styles.total}>{dateDiff + 1}</Text>
        <Text style={styles.rate}>{invoice.Price}</Text>
        <Text style={styles.amount}>
          {(invoice.Price * (dateDiff + 1)).toFixed(2)}
        </Text>
      </View>
      {/* empty 5 rows */}
      {[1, 2, 3, 4, 5].map((key) => {
        return (
          <View style={styles.row} key={key}>
            <Text style={styles.description}> </Text>
            <Text style={styles.total}> </Text>
            <Text style={styles.rate}> </Text>
            <Text style={styles.amount}> </Text>
          </View>
        );
      })}
    </Fragment>
  );
};

export default InvoiceTableRow;
