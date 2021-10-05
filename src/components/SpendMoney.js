
import ReactRoundedImage from "react-rounded-image";
import MuskImage from "../elonmusklogo.jfif"
import 'react-js-stickynav/dist/index.css'
import React , {useState, useEffect, useContext} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import "../Navbar.css"
import ItemCard from "../ItemCard";
import moneyContext from "./moneyContext"
import { Grid, GridItem } from "@chakra-ui/react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Custombutton from "./Custombutton"
import html2canvas from 'html2canvas'

function SpendMoney() {
  

  const { money, itemsArray, totalCost } = useContext(moneyContext);

  const formatNumber =(num) =>{

  let dollarUSLocale = Intl.NumberFormat('en-US');
  return dollarUSLocale.format(num)

  }

  return (
    <moneyContext.Consumer>
      {context=>(
        
        <div>
        <nav class="navbar py-3 sticky-top navbar-dark bg-dark" role="navigation">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span  class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>    
              </div>
              <a class="navbar-brand" href="#">${formatNumber(money)} left!</a>
           
            </nav>
         <br/>
      
         <center><Box
      
            sx={{
              width: "50%",
              height: "30vh",
              bgcolor: '#f7f7f7',
          
              
            }}
          >
            <br/>
            <center><ReactRoundedImage imageWidth="150"
            
          imageHeight="150" 
          image={MuskImage} />
          </center>
          <br/>
          <center><h1>Spend Elon Musk's money!</h1></center>
      
          
        
            
            </Box></center>
      
          <br/>
          <br/>
         <center><Box
            sx={{
              width: "50%",
              height: "370vh",
              bgcolor: '#F7F7F7',
             
              
            }}
          >
         
            
        
         <Grid templateColumns="repeat(3, 1fr)" columnGap={15} gap={15}>
              {
                itemsArray.map(item=>{
                  return(
                    <Grid item xs={2} sm={4} md={4}>
            
                    <ItemCard price={item.price} imagesrc={item.imagesrc} name={item.name} />
                    
                  </Grid>
                  )
                })
              }
          
          
          
          
      
              </Grid>
      
          </Box></center>
         <br/>
         <br/>
         <center><h2>Your Invoice</h2></center>
         <br/>
        <center> 
          <TableContainer id="table-container-image-area" style={{width:"50%"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Cost</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
         
         
           {
           itemsArray.map(item=>{
             return(
                 <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
              {item.name}
              </TableCell>
              <TableCell align="right">${formatNumber(item.price)}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
            
              <TableCell align="right">${formatNumber((item.price) * (item.quantity))}</TableCell>
            </TableRow>
             )
           })
         
            }
            <TableCell style={{fontWeight:"800"}} component="th" scope="row">
              Total Cost: ${formatNumber(totalCost)}
              </TableCell>
             
      
        </TableBody>
      </Table>
    </TableContainer></center>
      <br/>
    <Custombutton onClick={()=>{
       html2canvas(document.getElementById("table-container-image-area")).then(canvas => {
         var fileName=""
         fetch("https://www.uuidtools.com/api/generate/v4/count/1").then(res=>res.json()).then(response=>{
          fileName = "Receipt"+response[0]+".png"
         })
       var downloadLink = document.createElement("a");
        downloadLink.href = canvas.toDataURL();
        downloadLink.download = fileName;
        downloadLink.click();
       }
        
      ) 
    }} style={{backgroundColor:"red", color:"white"}}>Download Invoice</Custombutton>

     <br/>
     <br/>
        <center><h1>Made by Souritra Kar</h1></center>
        <br/>
          </div>
      )}
    
    </moneyContext.Consumer>
  );
}

export default SpendMoney;
