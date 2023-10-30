import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native-web";

// Default value for button type is Primary
const CustomButton = ({
  onpress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onpress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}, // If bg color specified, assign property with bg color, other assign empty style.
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

// Keep styles that are the same for all types of containers. Extract individual styles for each type of button.
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_TERTIARY: {
    color: "gray",
  },
});
export default CustomButton;
