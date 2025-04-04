import React, { useState, useRef, useEffect, useContext } from 'react';
import { UserContext } from './context/UserContext';
import axios from "axios"
import { endLoading, startLoading } from './lib/Loading';

const TextEditor = ({ children, filePath, id }) => {


  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(children.props.children);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [menuPosition, setMenuPosition] = useState('right'); // Track if menu should be on the right or left
  const inputRef = useRef(null);
  const textRef = useRef(null);
  const menuRef = useRef(null);
  const {user} = useContext(UserContext);

  const onSave = async (filePath, currentText, id) => {
    startLoading();
    const data = {filePath, editorId:id, newContent:currentText, user}    
try {
    const response = await axios.post('https://0666-152-58-24-80.ngrok-free.app/api/github/edit', data, {
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
  

  const handleTextClick = (e) => {
    const rect = textRef.current.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });

    // Check if there is enough space on the right side of the text element
    const spaceOnRight = window.innerWidth - rect.right;
    if (spaceOnRight < 200) { // Adjust this threshold based on the width of your menu
      setMenuPosition('left');
    } else {
      setMenuPosition('right');
    }

    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleSave = () => {
    if (onSave && filePath && id) {
      onSave(filePath, currentText, id);
    }
    setIsEditing(false);
  };

  const handleClickOutside = (e) => {
    
    if (
      textRef.current && !textRef.current.contains(e.target) &&
      menuRef.current && !menuRef.current.contains(e.target)
    ) {
      
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if(user) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [user]);

  const renderChildWithEditing = () => {
    const childType = React.Children.only(children).type;
    const childProps = React.Children.only(children).props;
  
    // Determine the new className
    const additionalClass = "Editable-hover";
    const existingClassName = childProps.className || "";
    const updatedClassName = `${existingClassName} ${additionalClass}`.trim();
  
    return React.createElement(
      childType,
      {
        ...childProps,
        ref: textRef,
        onClick: handleTextClick,
        className: updatedClassName, // Add or update className
        children: currentText,
      }
    );
  };

  return (
    <div style={{ position: 'relative' }}>
    {user ?
<>
{renderChildWithEditing()}

{isEditing && (
  <div
    ref={menuRef}
    style={{
      position: 'fixed',
      top: position.top,
      left: menuPosition === 'right'
        ? position.left + textRef.current.offsetWidth + 10 // On the right side
        : position.left - 210, // On the left side (adjust the value as needed)
      border: '1px solid #ccc',
      padding: '10px',
      backgroundColor: 'white',
      zIndex: 1000,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      gap:'0.5rem'
    }}
  >
    <input
      ref={inputRef}
      type="text"
      value={currentText}
      onChange={handleInputChange}
      autoFocus
      style={{ width: '200px' }}
    />
    <button
      onClick={handleSave}
      style={{
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Save
    </button>
  </div>
)}
</>
:
<>
{children}
</>
    }
    </div>
  );
};

export default TextEditor;
