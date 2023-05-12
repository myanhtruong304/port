import React, { useState, useRef } from "react";
import CardImage from "./src/components/cards/CardImage";
import CardBody from "./src/components/cards/CardBody";

function AddContent(props) {
  const [card, setCard] = useState({
    image_url: "",
    content: "",
    project_name: "",
    schedule: "",
    addContent: false,
  });

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/contents/upload-file",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to upload file ${file.name}.`);
    }
    return data.data;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const file = event.target.files && event.target.files[0];

    if (file) {
      uploadFile(file)
        .then((result) => {
          setCard((prevCard) => ({
            ...prevCard,
            image_url: result.image_url,
            file_name: result.file_name,
            addContent: true,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCard((prevCard) => ({
        ...prevCard,
        [name]: value,
      }));
    }
  }

  const fileInputRef = useRef(null);

  function handleClick() {
    fileInputRef.current.click();
  }
  function handleClickDelete() {
    setCard((prevCard) => ({
      ...prevCard,
      image_url: "",
    }));
  }

  return (
    <div className="card">
      <CardImage
        onClick={handleClick}
        onRef={fileInputRef}
        onDelete={handleClickDelete}
        onUpdate={handleChange}
        image_url={card.image_url}
        addContent={true}
        fileName={card.file_name}
        imageCheck={card.addContent}
      />
      <CardBody
        onUpdate={handleChange}
        addContent={true}
        content={card.content}
        project_name={card.project_name}
        image_url={card.image_url}
        schedule={card.schedule}
        fileName={card.file_name}
      />
    </div>
  );
}
export default AddContent;
