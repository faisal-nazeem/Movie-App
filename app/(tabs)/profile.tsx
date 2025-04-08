import CustomInput from "@/components/textInput";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View style={styles.container}>
        <CustomInput
          label="First Name"
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <CustomInput
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <CustomInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          label="Location"
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
        />
        <CustomInput
          label="Bio"
          placeholder="Enter your bio"
          value={bio}
          onChangeText={setBio}
          multiline
          numberOfLines={6}
          style={styles.bioInput}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    gap: 20,
  },
  bioInput: {
    height: 200,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#333",
    textAlignVertical: "top", 
  },
});
