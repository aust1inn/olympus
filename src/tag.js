import React, { useState } from "react";

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
      
    
}