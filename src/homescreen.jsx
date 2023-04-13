import React, { useState } from "react";
import Dropdown from "./components/tag";


function HomeScreen({ name }) {
  const [selected, setSelected] = useState("None");
  const [exerciseName, setExerciseName] = useState("");
  const [workoutSets, setWorkoutSets] = useState([{ weight: "", reps: "", rpe: "", tag: "None" }, { weight: "", reps: "", rpe: "", tag: "None" }, { weight: "", reps: "", rpe: "", tag: "None" },]);
  const [tagMenuOpen, setTagMenuOpen] = useState(false);

  function handleTagSelect(setIndex, selectedTag) {
    const updatedSets = [...workoutSets];
    updatedSets[setIndex].tag = selectedTag;
    setWorkoutSets(updatedSets);
    setTagMenuOpen(false);
  }

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-3xl font-bold mb-4">Hi, Name</h1>
      <div className="flex mb-4">
        <h2 className="mr-2">Exercise name</h2>
        <input
          type="text"
          placeholder="Enter exercise name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          className="bg-gray-200 border-b-2 border-gray-500 flex-1 py-1 px-2"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginRight: "20px" }}>
        <h3 style={{ marginLeft: "150px", marginRight: "150px", padding: "10px" }}>Weight</h3>
        <h3 style={{ marginRight: "150px", padding: "10px" }}>Reps</h3>
        <h3 style={{ marginRight: "130px", padding: "10px" }}>RPE</h3>
      </div>

      {workoutSets.map((set, index) => (
        <div key={index} className="mb-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Weight"
              value={set.weight}
              onChange={(e) => {
                const updatedSets = [...workoutSets];
                updatedSets[index].weight = e.target.value;
                setWorkoutSets(updatedSets);
              }}
              className="bg-gray-200 border-b-2 border-gray-500 flex-1 mr-2 py-1 px-2 border-l-0 border-r-0 border-t-0"
            />
            <input
              type="text"
              placeholder="Reps"
              value={set.reps}
              onChange={(e) => {
                const updatedSets = [...workoutSets];
                updatedSets[index].reps = e.target.value;
                setWorkoutSets(updatedSets);
              }}
              className="bg-gray-200 border-b-2 border-gray-500 flex-1 mr-2 py-1 px-2 border-l-0 border-r-0 border-t-0"
            />
            <input
              type="text"
              placeholder="RPE"
              value={set.rpe}
              onChange={(e) => {
                const updatedSets = [...workoutSets];
                updatedSets[index].rpe = e.target.value;
                setWorkoutSets(updatedSets);
              }}
              className="bg-gray-200 border-b-2 border-gray-500 flex-1 py-1 px-2 border-l-0 border-r-0 border-t-0"
            />
            {/* <button
              type="button"
              className="block w-full text-left bg-gray-200 border-b-2 border-gray-500 py-1 px-2"
              onClick={() => setTagMenuOpen(!tagMenuOpen)}
            >
              {set.tag}
            </button>
            {tagMenuOpen && (
              <div className="absolute top-10 left-0 w-full bg-gray-200 border border-gray-500 py-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="block w-full text-left hover:bg-gray-400 px-4 py-2"
                    onClick={() => handleTagSelect(index, tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )} */}
            <Dropdown selected={selected} setSelected={setSelected}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;