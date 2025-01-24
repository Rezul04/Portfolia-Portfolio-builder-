import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const PortfolioPDF = ({ formData }) => {
  const { name, title, education, skills, projects } = formData;

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{name || "Your Name"}</Text>
          <Text style={styles.text}>{title || "Your Title"}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Education</Text>
          <Text style={styles.text}>{education || "No education details provided."}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Skills</Text>
          <Text style={styles.text}>{skills || "No skills listed."}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Projects</Text>
          <Text style={styles.text}>{projects || "No projects provided."}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PortfolioPDF;
