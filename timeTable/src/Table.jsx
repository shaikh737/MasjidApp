import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import "./App.css";
import Clock from "./clock";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(namazName, time) {
  return { namazName, time };
}

const rows = [
  createData("Fajr", "5:45 AM"),
  createData("Zuhr", "1:03 PM"),
  createData("Asar", "4:30 PM"),
  createData("Magrib", "6:03 PM"),
  createData("Isha", "7:45 PM"),
  createData("Jummah", "1:03 PM"),
];

export default function NamazTable() {
  return (
    <div>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="customized table" className="table">
          <TableHead
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            {/* Group the Masjid text and location icon together */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 style={{ marginRight: "10px", whiteSpace: "nowrap" }}>
                Masjid :<br /> Baitul Mukkaramm
              </h2>
              <a
                href="https://maps.app.goo.gl/qDrYP4CNwTBz3Xh56"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <FmdGoodIcon style={{ fontSize: "30px", cursor: "pointer" }} />
              </a>
            </div>

            {/* Push the clock to the far right */}
            <div style={{ marginLeft: "12em" }}>
              <Clock />
            </div>
          </TableHead>

          <TableRow style={{ backgroundColor: "black", color: "white" }}>
            <StyledTableCell align="center">
              <h3>Namaz Name</h3>
            </StyledTableCell>
            <StyledTableCell align="center">
              <h3>Jammat Time</h3>
            </StyledTableCell>
          </TableRow>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">
                  <h3 style={{ borderLeft: "4px solid red" }}>
                    {row.namazName}
                  </h3>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <h3>{row.time}</h3>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
