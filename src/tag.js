// import React, { useState } from "react";
// import { Modal, Text, TextInput, TouchableOpacity, View } from "react";


// export const Tags = (props) => {
//   const tagOptions = ["None", "Warmup", "Working Set", "Drop Set", "Burnout", "Max Attempt", "Assisted", "Negatives"];
//   const [selectedTag, setSelectedTag] = useState(null);
//   const [showTagModal, setShowTagModal] = useState(false);

//   const handleTagSelection = (tag) => {
//     setSelectedTag(tag);
//     setShowTagModal(false);
//   };

    
//   const TagDropdown = () => {
//     return (
//       <>
//         <TouchableOpacity onPress={() => setShowTagModal(true)}>
//           <Text>{selectedTag ? selectedTag : "Select Tag"}</Text>
//         </TouchableOpacity>

//         <Modal visible={showTagModal} animationType="slide">
//           <View style={{ flex: 1 }}>
//             {tagOptions.map((tag) => (
//               <TouchableOpacity
//                 key={tag}
//                 style={{ padding: 10 }}
//                 onPress={() => handleTagSelection(tag)}
//               >
//                 <Text>{tag}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </Modal>
//       </>
//     );
  
//   };
  

// }


// // Part that should render the tag component. No css included yet

// const mainscreen = (props) => {
//   const [exerciseName, setExerciseName] = useState("");
//   const [weight1, setWeight1] = useState("");
//   const [reps1, setReps1] = useState("");
//   const [rpe1, setRpe1] = useState("");
//   const [weight2, setWeight2] = useState("");
//   const [reps2, setReps2] = useState("");
//   const [rpe2, setRpe2] = useState("");
//   const [weight3, setWeight3] = useState("");
//   const [reps3, setReps3] = useState("");
//   const [rpe3, setRpe3] = useState("");
//   const [selectedTag1, setSelectedTag1] = useState(null);
//   const [selectedTag2, setSelectedTag2] = useState(null);
//   const [selectedTag3, setSelectedTag3] = useState(null);

//   return (
//     <div>
//       <p>Hi, Name</p>
//       <input
//         type="text"
//         placeholder="Exercise Name"
//         value={exerciseName}
//         onChange={(event) => setExerciseName(event.target.value)}
//       />

//       {/* First set */}
//       <input
//         type="text"
//         placeholder="Weight"
//         value={weight1}
//         onChange={(event) => setWeight1(event.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Reps"
//         value={reps1}
//         onChange={(event) => setReps1(event.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="RPE"
//         value={rpe1}
//         onChange={(event) => setRpe1(event.target.value)}
//       />
//       <Tags selectedTag={selectedTag1} setSelectedTag={setSelectedTag1} />

//       {/* Second set */}
//       <input
//         type="text"
//         placeholder="Weight"
//         value={weight2}
//         onChange={(event) => setWeight2(event.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Reps"
//         value={reps2}
//         onChange={(event) => setReps2(event.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="RPE"
//         value={rpe2}
//         onChange={(event) => setRpe2(event.target.value)}
//       />
//       <Tags selectedTag={selectedTag2} setSelectedTag={setSelectedTag2} />

//       {/* Third set */}
//       <input
//         type="text"
//         placeholder="Weight"
//         value={weight3}
//         onChange={(event) => setWeight3(event.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Reps"
//         value={reps3}
//         onChange={(event) => setReps3(event.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="RPE"
//         value={rpe3}
//         onChange={(event) => setRpe3(event.target.value)}
//       />
//       <Tags selectedTag={selectedTag3} setSelectedTag={setSelectedTag3} />
//     </div>
//   );
// };

