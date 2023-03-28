import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";


export const Tags = (props) => {
    
    // create an array of tag options and initialize the selected tag state to null:
    const tagOptions = ["None", "Warmup", "Working Set", "Drop Set", "Burnout", "Max Attempt", "Assisted", "Negatives"];

    const [selectedTag, setSelectedTag] = useState(null);

    // create a function to handle the selection of a tag:


    const handleTagSelection = (tag) => {
        setSelectedTag(tag);
        toggleTagModal(false);
      };
      

    //   create the tag dropdown component:

    const TagDropdown = () => {
        const [showTagModal, toggleTagModal] = useState(false);
      
        return (
          <>
            <TouchableOpacity onPress={() => toggleTagModal(true)}>
              <Text>{selectedTag ? selectedTag : "Select Tag"}</Text>
            </TouchableOpacity>
      
            <Modal visible={showTagModal} animationType="slide">
              <View style={{ flex: 1 }}>
                {tagOptions.map((tag) => (
                  <TouchableOpacity
                    key={tag}
                    style={{ padding: 10 }}
                    onPress={() => handleTagSelection(tag)}
                  >
                    <Text>{tag}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Modal>
          </>
        );
      };

    //   incorporate the TagDropdown component into the main screen:

    const MainScreen = ({ route }) => {
        const { name } = route.params;
        const [exerciseName, setExerciseName] = useState("");
        const [sets, setSets] = useState([
          { weight: "", reps: "", rpe: "", tag: null },
          { weight: "", reps: "", rpe: "", tag: null },
          { weight: "", reps: "", rpe: "", tag: null },
        ]);
      
        const handleWeightChange = (text, index) => {
          const newSets = [...sets];
          newSets[index].weight = text;
          setSets(newSets);
        };
      
        const handleRepsChange = (text, index) => {
          const newSets = [...sets];
          newSets[index].reps = text;
          setSets(newSets);
        };
      
        const handleRpeChange = (text, index) => {
          const newSets = [...sets];
          newSets[index].rpe = text;
          setSets(newSets);
        };
      
        const handleTagChange = (tag, index) => {
          const newSets = [...sets];
          newSets[index].tag = tag;
          setSets(newSets);
        };
      
        return (
          <View style={{ flex: 1, backgroundColor: "#19191C", padding: 20 }}>
            <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
              Hi, {name}
            </Text>
      
            <TextInput
              style={{
                backgroundColor: "#232329",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#8D8D9C",
                color: "white",
                padding: 10 
              }}
              />
              </View>
      
      
    
}