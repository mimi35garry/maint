import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Exemple de type de données (tu peux remplacer ou enrichir)
const sampleData = [
  {
    id: "M001",
    reference: "ABB-MTR-120",
    type: "Moteur",
    marque: "ABB",
    lienDoc: "https://docs.abb.com/mtr120.pdf",
    personnalise: "Ligne A1 - Cuve 3",
  },
  {
    id: "C021",
    reference: "PEPPERL-VK200",
    type: "Capteur inductif",
    marque: "Pepperl+Fuchs",
    lienDoc: "https://pepperl-fuchs.com/vk200.pdf",
    personnalise: "Ligne B4 - Tapis",
  },
];

const MaterialTable = ({ data = sampleData }) => {
  return (
    <TableContainer component={Paper}>
      {" "}
      <Table sx={{ minWidth: 650 }} aria-label="matériel table">
        {" "}
        <TableHead>
          {" "}
          <TableRow>
            {" "}
            <TableCell>Repère</TableCell> <TableCell>Référence</TableCell>{" "}
            <TableCell>Type</TableCell> <TableCell>Marque</TableCell>{" "}
            <TableCell>Documentation</TableCell>{" "}
            <TableCell>Colonne personnalisée</TableCell>{" "}
          </TableRow>{" "}
        </TableHead>{" "}
        <TableBody>
          {" "}
          {data.map((mat) => (
            <TableRow key={mat.id}>
              {" "}
              <TableCell>{mat.id}</TableCell>{" "}
              <TableCell>{mat.reference}</TableCell>{" "}
              <TableCell>{mat.type}</TableCell>{" "}
              <TableCell>{mat.marque}</TableCell>{" "}
              <TableCell>
                {" "}
                <a href={mat.lienDoc} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Voir doc{" "}
                </a>{" "}
              </TableCell>{" "}
              <TableCell>{mat.personnalise}</TableCell>{" "}
            </TableRow>
          ))}{" "}
        </TableBody>{" "}
      </Table>{" "}
    </TableContainer>
  );
};

export default MaterialTable;
