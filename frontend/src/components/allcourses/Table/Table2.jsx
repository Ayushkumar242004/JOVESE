import React, { useState ,useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Table.css";
import { useAuth } from "../../store/auth";
import { toast } from 'react-toastify';

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "grey",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const { user,token} = useAuth();
  // const [user, setUser] = useState([])

  const userFields = [
    { label: "First Name", value: user.firstname },
    { label: "Last Name", value: user.lastname },
    { label: "Username", value: user.username },
    { label: "Gender", value: user.gender },
    { label: "Country", value: user.country },
    { label: "Work experiences", value: user.workExperiences },
    { label: "Profile link", value: user.profileLink },
    { label: "Github", value: user.github },
    { label: "LinkedIn", value: user.linkedIn },
    { label: "Twitter", value: user.twitter },
  ];

  const [rows, setRows] = useState(userFields);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].value = value;
    setRows(updatedRows);
  };

  const userAuthenticte=async()=>{
    try {
        const response=await fetch('http://localhost:5000/api/user/userdata',{
          method:"GET",
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        
        if(response.ok){
            const data=await response.json();
            console.log("auth ",data.userData);
            // setUser(data.userdata);
          }else {
            console.error("Error fetching user data");
          }
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    userAuthenticte();
  }, []);

  const toggleEdit = async (e) => {
    e.preventDefault();
    
    if (isEditing) {
      const userObject = rows.reduce((acc, { label, value }) => {
        acc[label.replace(/\s+/g, '').toLowerCase()] = value;
        return acc;
      }, {});

      try {
        const response = await fetch('http://localhost:5000/api/user/profileupdate', {
          method: "PATCH",
          headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
          },
          body: JSON.stringify(userObject)
        });

        if (response.ok) {
          const responseData = await response.json();
          toast.success(responseData.msg);
        } else {
          const responseError = await response.json();
          toast.error(responseError.extraDetails ? responseError.extraDetails : responseError.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while updating the profile.");
      }
    }
    
    setIsEditing(!isEditing);
  };

  return (
    <div className="Table"  style={{marginTop:'20px'}}>
      <h3>Personal Details</h3>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
            <Button variant="contained" color="primary" onClick={toggleEdit}>
              {isEditing ? "Save" : "Edit"}
            </Button>
        </div>

        <div>
        <a href="/loginform_mentors" style={{ color: '#000'}}>
          Fill complete details
        </a>
        </div>

      </div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody style={{ color: "white" }}>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell align="left">
                  {isEditing ? (
                    <TextField
                      value={row.value}
                      onChange={(e) => handleChange(index, e.target.value)}
                    />
                  ) : (
                    row.value
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
