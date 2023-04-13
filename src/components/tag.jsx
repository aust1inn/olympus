import { useState } from "react";
import "./tag.css"

function Dropdown({selected, setSelected}) {
    const [isActive, setActive] = useState(false);
    const tags = ["Warmup", "Working Set", "Drop Set", "Burnout", "Max Attempt", "Assisted", "Negatives",];
    return (
        <div className="dropdown">
            <h3>Tags</h3>

            <div className="dropdown-btn" onClick={(e) =>
                setActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {tags.map((tag) => (
                        <div
                            onClick={(e) => {
                                setSelected(tag);
                                setActive(false);
                            }}
                            className="dropdown-item">
                            {tag}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;