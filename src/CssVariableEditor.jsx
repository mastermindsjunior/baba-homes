import React, { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "./context/UserContext";
import toast from "react-hot-toast";
import { endLoading, startLoading } from "./lib/Loading";
import axios from "axios";

const CssVariableEditor = ({filePath}) => {

  const [variables, setVariables] = useState({});
  const {user} = useContext(UserContext);

  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const editorRef = useRef(null);

  const getCssVariables = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const cssVariables = {};

    for (const property of rootStyles) {
      if (property.startsWith('--clr-edit')) {
        cssVariables[property] = rootStyles.getPropertyValue(property).trim();
      }
    }
      
    return cssVariables;
  };

  useEffect(() => {
    if(user) {
      setVariables(getCssVariables());
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVariables((prev) => ({
      ...prev,
      [name]: value,
    }));

    document.documentElement.style.setProperty(`${name}`, value);

    // const themeStyles = document.querySelector(".dark-theme");
    // if (themeStyles) {
    //   themeStyles.style.setProperty(
    //     `--${name.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
    //     value
    //   );
    // }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;

    setPosition((prevPos) => ({
      top: prevPos.top + dy,
      left: prevPos.left + dx,
    }));

    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    if(user) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [user]);

  const handleColorSave = async () => {
    if(!filePath || filePath === "") {
      return toast.error("FilePath not Available")
    }
    startLoading();
    const data = {filePath, colorVariables:variables, user}    
    try {
        const response = await axios.post('https://0666-152-58-24-80.ngrok-free.app/api/github/editColor', data, {
            headers: {
                "Content-Type":"application/json"
            }
        })

        console.log((response.data));
        
    } catch (error) {
        console.log(error);
    }
    endLoading();
  }

  return (
    <>
    {user &&
    <div
      ref={editorRef}
      style={{
        position: "fixed",
        top: `${position.top}px`,
        left: `${position.left}px`,
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "8px",
        border: "1px solid #ccc",
        zIndex: 1000,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        userSelect: "none",
        width: isCollapsed ? "96px" : "400px",
        maxHeight:'75dvh',
        overflow:'scroll',
        cursor: isCollapsed ? "default" : "move",
      }}
      className="EditorWrapper"
      onMouseDown={!isCollapsed ? handleMouseDown : undefined}
    >
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isCollapsed ? "Expand" : "Collapse"}
      </button>

      {!isCollapsed && (
        <>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
        >
          {Object.entries(variables).map(([key, value]) => (
            <div key={key}>
              <label style={{width:'100%'}}>
                <span style={{fontSize:'12px', color:'black', lineHeight:'16px', margin:0}}>{key.slice(11)}:</span>
                <input
                  type="color"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              </label>
            </div>
          ))}
        </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"0.5rem"}}>
        <button 
          style={{
            padding: '5px 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleColorSave}
        >Save</button>
      </div>
      </>
      )}
    </div>
    }
    </>
  );
};

export default CssVariableEditor;
