import React from "react";
import "../Address/AddressComp2.css";
import { dividerClasses } from "@mui/material";
//mport Header from '../Header/Header'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function AdrressComp2(props){
    const closeComp2=()=>{
        props.toggling2();
    }
    return(
        <div className="Maincontaineraddress">
        <div className="headerAddress">
            <div className="CustomerDetails">
                Customer Details
            </div>
            <div className="AddnewAddress">
                <Button size="small" variant="outlined" style={{ width: '12vw', height: '6vh', textTransform: 'none', fontSize: '15px', borderColor: '#A03037', color: '#A03037', marginRight: '20px' }} >Add New Address</Button>
            </div>
        </div>

        <div className="fullnameaddress">
            <div className="fullname">
                <div style={{  display: 'flex', justifyContent: 'start', cursor: 'pointer',fontSize: '15px',marginRight:'60%' }}>Full Name</div>
                <TextField
                    id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }}
                />
            </div>

            <div className="mobilenumberaddress">
                <div style={{ display: 'flex',  cursor: 'pointer', fontSize: '15px' }}>Mobile Number</div>
                <TextField
                    id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }}
                />
            </div>
        </div>

        <div className="addressaddress">
            <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '15px' }}>Address</div>
            <TextField
                id="outlined-basic" variant="outlined" size="small" style={{ width: '73%', display: 'flex', justifyContent: 'start' }}
            />
        </div>

        <div className="cityTown">
            <div className="CityAddress">
                <div style={{ display: 'flex', justifyContent: 'start', fontSize: '15px' }}>City</div>
                <TextField
                    id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw', marginRight: '500px' }}
                />
            </div>

            <div className="mobilenumberaddress1">
                <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '15px', marginLeft: '1px' }}>Town</div>
                <TextField
                    id="outlined-basic" variant="outlined" size="small" style={{ width: '18vw' }}
                />
            </div>
        </div>
        <div className="TypeAddress">
            <div className="texttype">
            <div style={{ fontSize: '15px', marginRight: '76%' }}>Type</div> 
            </div>
        <FormControl className="addrestxt" style={{ display: 'flex', justifyContent: 'start', fontSize: '15px' }}  >

                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                className='radioIcon'
                            >
                                <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                <FormControlLabel value="Work" control={<Radio />} label="Work" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
        </div>
        <div className="continuebuttom">
        <Button 
        onClick={closeComp2}
        size="small" style={{ width: '10vw'}} variant="contained">Continue</Button>
        </div>
    </div>
    )
}
export default AdrressComp2