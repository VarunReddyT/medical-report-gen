import { StyleSheet } from "@react-pdf/renderer";



export default StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
    fontFamily: "Times-Roman",
    fontSize: 11,
  },
  body: {
    // marginTop: "48.25mm",
  },
  heading: {
    alignItems: "center",
    fontSize: 12,
    fontWeight: "bold",
    // fontStyle:
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  infoGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    fontWeight: "extrabold"
  },
  infoItem: {
    // width: "50%",
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    textDecoration: "underline",
  },
  list: {
    marginLeft: 20,
  },
  listItem: {
    marginBottom: 5,
  },
  boldUnderline: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  bold: {
    fontWeight: "bold",
  },
  chart: {
    width: "100%",
    height: 200, // Adjust this value as needed
    backgroundColor: "#E0E0E0", // Light gray color for placeholder
    marginTop: 10,
    marginBottom: 10,
  },
});
