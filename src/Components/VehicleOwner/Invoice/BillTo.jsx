import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  billTo: {
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
});

const BillTo = ({ invoice }) => (
  <>
    <View style={styles.headerContainer}>
      {/* customer */}
      <View>
        <Text style={styles.billTo}>Customer :</Text>
        <Text>
          Name :{" "}
          {`${invoice?.Customer_firstname} ${invoice?.Customer_lastname}`}
        </Text>
        <Text>Tel : {invoice.Customer_Tel}</Text>
      </View>
      {/* owner */}
      <View>
        <Text style={styles.billTo}>Owner :</Text>
        <Text>
          Name : {`${invoice?.Owner_firstname} ${invoice?.Owner_lastname}`}
        </Text>
        <Text>Tel : {invoice.Owner_Tel}</Text>
      </View>
    </View>
    {/* booking details */}
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.billTo}>Booking Details :</Text>
        <Text>
          Vehicle :{" "}
          {`${invoice?.Vehicle_type.toUpperCase()} (${
            invoice?.Vehicle_PlateNumber
          })`}
        </Text>
        <Text>
          Driver :{" "}
          {invoice?.Driver_firstname
            ? `${invoice?.Driver_firstname} ${invoice?.Driver_lastname}`
            : "Without Driver"}
        </Text>
        <Text>Start Date : {invoice?.Journey_Starting_Date}</Text>
        <Text>End Date : {invoice?.Journey_Ending_Date}</Text>
      </View>
    </View>
  </>
);

export default BillTo;
