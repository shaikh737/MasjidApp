import { useEffect, useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import axios from "axios";
import "./App.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function NamazTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://masjidapi.netlify.app/MasjidApp/data.json")

      .then((res) => setRows(res.data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" className="table">
        <TableHead>
          <div
            style={{ display: "flex", alignItems: "center", padding: "10px" }}
          >
            <h2
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                whiteSpace: "nowrap",
              }}
            >
              Masjid <br /> Baitul Mukkaramm
            </h2>
            <a
              href="https://maps.app.goo.gl/qDrYP4CNwTBz3Xh56"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <FmdGoodIcon style={{ fontSize: "20px", cursor: "pointer" }} />
            </a>
          </div>
          <br />
        </TableHead>

        <TableRow style={{ backgroundColor: "black", color: "white" }}>
          <StyledTableCell align="center">
            <h3>Namaz Name</h3>
          </StyledTableCell>
          <StyledTableCell align="center">
            <h3>Jamaat Time</h3>
          </StyledTableCell>
        </TableRow>

        <tbody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">
                <h3 style={{ borderLeft: "4px solid red" }}>{row.name}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3 style={{ borderRight: "4px solid green" }}>{row.time}</h3>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
