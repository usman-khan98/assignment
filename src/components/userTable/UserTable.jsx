import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../table/table.css";


export default function UserTable() {
  


  // function table() {
  //       return(
  //           <TableContainer component={Paper}>
  //               <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //                   <TableHead>
  //                       <TableRow>
  //                           <TableCell className="tableCell">Id</TableCell>
  //                           <TableCell className="tableCell">Name</TableCell>
  //                           <TableCell className="tableCell">Email</TableCell>
  //                           <TableCell className="tableCell">Cell No</TableCell>
  //                           <TableCell className="tableCell">Created At</TableCell>
  //                           <TableCell className="tableCell">Is Deleted</TableCell>
  //                       </TableRow>
  //                   </TableHead>
  //                   <TableBody>
  //                       <TableRow key={entry.emailID}>
  //                           <TableCell className="tableCell" component="th" scope="row">
  //                               {entry.sellerName}
  //                           </TableCell>
  //                           <TableCell className="tableCell">{entry.storeName}</TableCell>
  //                           <TableCell className="status">{entry.emailID}</TableCell>
  //                           <TableCell className="status">{entry.phoneNo}</TableCell>
  //                           <TableCell className="tableCell"></TableCell>
  //                           <TableCell className="tableCell"></TableCell>
  //                       </TableRow>
  //                   </TableBody>
  //               </Table>
  //           </TableContainer>
  //       )
  // }



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Cell No</TableCell>
            <TableCell className="tableCell">Created At</TableCell>
            <TableCell className="tableCell">Is Deleted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
