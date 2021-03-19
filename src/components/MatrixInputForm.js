import React from 'react';
import {TextField, Grid, Button, MenuItem, FormControl, InputLabel, Select} from '@material-ui/core';
import '../assets/boxcontainer.css';
import BoxContainer from "./BoxContainer";

export default class MatrixInputForm extends React.Component{

    constructor(){
        super();
        this.state ={
            matrixRowCount:"",matrixColCount:'', time:'', numbeOfBoxes:'', flag: false
        }
    }

    /*function for change input values*/
     handleChangeMatrixRowCount(e) {
        this.setState({matrixRowCount: e.target.value});
    }

    handleChangeMatrixColCount(e) {
        this.setState({matrixColCount: e.target.value});
    }

    handleChangeTime(e) {
        this.setState({time: e.target.value});
    }

    handleChangeBoxes(e) {
        this.setState({numbeOfBoxes: e.target.value});
    }

    /*Reset form fields function*/
    resetForm = () => {
        this.setState({ matrixRowCount: '', matrixColCount:'',time: '', numbeOfBoxes: '' });
    };

    /*submit acction for create new user*/
      handelSubmit(event) {
        event.preventDefault();
        const {matrixRowCount, matrixColCount, time, numbeOfBoxes } = this.state;
        if (matrixRowCount === '' || matrixRowCount === null) {
            alert("Matrix Row Count field can't be empty.");
        }else if(matrixColCount === '' || matrixColCount === null) {
            alert("Matrix Column Count field can't be empty.");
        }
         else if (time === '' || time === null) {
            alert("Time field can't be empty.");
        } else if (numbeOfBoxes === '' || numbeOfBoxes === null) {
            alert("Please,select Boxes.");
        }
        else {
               this.setState({flag:true});
       }
    }


    render(){
        return(
            <div className="profile-card">
                {!this.state.flag ?
                    <form 
                    onSubmit={e=>this.handelSubmit(e)} 
                    autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3} sm={6}>
                                <TextField
                                    autoComplete="matrix"
                                    variant="outlined"
                                    fullWidth
                                    label="Matrix Row"
                                    autoFocus
                                    value={this.state.matrixRowCount}
                                    onChange={e=>this.handleChangeMatrixRowCount(e)}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} md={3} sm={6}>
                                <TextField
                                    autoComplete="matrix"
                                    variant="outlined"
                                    fullWidth
                                    label="Matrix Column"
                                    autoFocus
                                    value={this.state.matrixColCount}
                                    onChange={e=>this.handleChangeMatrixColCount(e)}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} md={3} sm={6}>
                                <TextField
                                    autoComplete="emailId"
                                    variant="outlined"
                                    fullWidth
                                    label="Time"
                                    autoFocus
                                    name="time"
                                    value={this.state.time}
                                    onChange={e=>this.handleChangeTime(e)}
                                    required
                                />
                            </Grid>

                                <Grid item xs={12} md={3} sm={6}>
                                    <FormControl variant="outlined" className="formControl" style={{ minWidth:'100%' }}>
                                    <InputLabel id="demo-simple-select-outlined-label">Number Of Boxes</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="No Of Boxes"
                                        name="numberOfBoxes"
                                        value={this.state.numbeOfBoxes}
                                        onChange={e=>this.handleChangeBoxes(e)}
                                    >
                                        <MenuItem value="">- Select Boxes -</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                        <MenuItem value="6">6</MenuItem>
                                        <MenuItem value="9">9</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={3} sm={6}>
                                    <div>
                                        <Button variant="contained" color="primary" size="large" type="submit">
                                            Submit
                                        </Button>&nbsp;
                                        <Button variant="contained" size="large" 
                                        onClick={this.resetForm}
                                        >Clear</Button >
                                    </div>
                                
                            </Grid>
                            </Grid>
                    </form>
                :<BoxContainer
                    rowCount={parseInt(this.state.matrixRowCount)}
                    colCount={parseInt(this.state.matrixColCount)}
                    timeInterval={parseInt(this.state.time)}
                    boxes={parseInt(this.state.numbeOfBoxes)}
                />
                }
                </div>
        );
    }

}