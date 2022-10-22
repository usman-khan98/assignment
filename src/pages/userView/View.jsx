import React, {useEffect, useState} from 'react'
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import UserTable from '../../components/userTable/UserTable';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function User() {
    const [users, setusers] = useState([]);
    const [input, setinput] = useState('');


    const handleChange = (event) => {
        setinput(event.target.value);
    };

    async function getData() {
        await fetch('/getAllUsers', { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setusers(data);
            });
    }
    useEffect(() => {
        getData();
    }, []);
    
    console.log("users....", users);
    console.log("users data....", users.Data);


    return (
        <div >
            <div className="container">
                <div className="titleContainer" style={{ width: '100%' }}>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={8}
                    >
                        <Item>
                            <VerifiedUser style={{ padding: '10px', color: '#993297', fontSize: '150px' }} />
                        </Item>
                        <div style={{ display: 'flex'}}>
                            <h1 style={{ display: 'flex', alignItems: 'center', fontSize: '35px', fontWeight: 'bold', color: 'grey', justifyContent: 'center', margin: 'auto' }}>Registered Users</h1>
                        </div>
                        <div className="percentage" style={{ fontSize: '50px', width: '175px', height: '150px', padding: '15px' }}>
                            <CircularProgressbar value={(users.count*100)/1000} maxValue={1000} text={(users.count*100)/1000 + '%'} strokeWidth={5} styles={buildStyles({
                                pathColor: '#993297',
                                textColor: '#993297'
                            })} /> 
                        </div>
                    </Stack>
                </div>
            </div>
            <div className="titleContainer" style={{ width: '98%', height: 'max-content', margin: '15px' }}>
                <div className="title" style={{color: 'grey'}}>
                    Registered Users
                </div>
                <Item>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">search users</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={input}
                                label="user"
                                onChange={handleChange}
                            >
                                <MenuItem value={"All"}>All</MenuItem>
                                {users.Data?
                                    users.Data.map((user, index) => {
                                    return (
                                        <MenuItem value={user.name}>{user.name}</MenuItem>
                                    )
                                    }) : <MenuItem value={1}>no data</MenuItem>
                                }
                            </Select>
                        </FormControl>
                        <Button>Search</Button>
                    </Box>
                </Item>
                <UserTable />
            </div>
        </div>
    )
}
