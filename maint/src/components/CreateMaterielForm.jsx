import React, { useState } from "react";
import "./CreateMaterielForm.css";

function CreateMaterielForm({ onSubmit, onCancel }) {
  const [nom, setNom] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nom, type, description });
    setNom("");
    setType("");
    setDescription("");
  };

  return (
    <div className="form-backdrop">
      <form className="materiel-form" onSubmit={handleSubmit}>
        <h2>Créer un matériel</h2>
        <label>
          Nom :
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>
        <label>
          Type :
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </label>
        <label>
          Description :
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="form-actions">
          <button type="submit">Créer</button>
          <button type="button" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateMaterielForm;
