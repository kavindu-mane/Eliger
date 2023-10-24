import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  invoiceDateContainer: {
    marginTop: 30,
  },
  invoiceDate: {
    fontSize: 11,
    fontStyle: "bold",
  },
});

const InvoiceNo = ({ invoice }) => (
  <Fragment>
    <View style={styles.invoiceDateContainer}>
      <Text style={styles.invoiceDate}>
        Invoice No:{" "}
        {new Date().toLocaleDateString().replaceAll("/", "") +
          "-" +
          invoice?.Booking_Id}
      </Text>

      <Text style={styles.invoiceDate}>
        Date: {new Date().toUTCString().slice(5, 16).replaceAll(" ", " / ")}
      </Text>
    </View>
  </Fragment>
);

export default InvoiceNo;
