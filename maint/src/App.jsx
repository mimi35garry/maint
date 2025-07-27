import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DialogBox from "./components/DialogBox";
import BasicPopover from "./components/popover.jsx";
import MaterialTable from "./components/materialtable.jsx";
import CreateMaterielForm from "./components/CreateMaterielForm";
import "./components/CreateMaterielForm.css";

function App() {
  const [count, setCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateMateriel = (data) => {
    // Ici, vous pouvez envoyer les données à votre backend ou les stocker dans un état
    alert(`Matériel créé : ${data.nom} (${data.type})`);
    setShowCreateForm(false);
  };

  return (
    <>
      {showDialog && (
        <DialogBox
          title="Bienvenue !"
          message="Ceci est une boîte de dialogue personnalisée."
          onClose={() => setShowDialog(false)}
        />
      )}
      {showCreateForm && (
        <CreateMaterielForm
          onSubmit={handleCreateMateriel}
          onCancel={() => setShowCreateForm(false)}
        />
      )}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => setShowDialog(true)}
        >
          Ouvrir la boîte de dialogue
        </button>
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => setShowCreateForm(true)}
        >
          Créer un matériel
        </button>
        <BasicPopover>
          <button>Ouvrir le popover</button>
          <div>Contenu du popover</div>
        </BasicPopover>
        <MaterialTable />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
