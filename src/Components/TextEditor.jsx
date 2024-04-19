import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./Editor.css"

const TextEditor = () => {

    const [content, setContent] = useState('');

    const handleChange = (value) => {
      setContent(value);
    };
    
    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], 
          [{ header: [1, 2, 3, 4, 5, 6, false] }],  
          [{ list: 'ordered' }, { list: 'bullet' }], 
          ['link', 'image'],                        
          ['clean'],                                
        ],
      };
      
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',    
        'list', 'bullet',                           
        'link', 'image',                            
      ];
      
    
  return (
    <>
    <div className="w-1/2 mt-5 m-auto border-black">
    <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow" 
        placeholder="Enter Title"
        className=""
      />
   
    </div>
    
    </>
  )
}

export default TextEditor

