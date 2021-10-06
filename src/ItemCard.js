import React , {useState, useContext, useEffect} from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Custombutton from "./components/Custombutton"
import moneyContext from "./components/moneyContext";
import "./ItemCard.css"

const formatNumber =(num) =>{

  let dollarUSLocale = Intl.NumberFormat('en-US');
  return dollarUSLocale.format(num)

}



export default function ItemCard(props) {

  const [number, setNumber] = useState(0)
  const { money } = useContext(moneyContext);
  const [buy, canBuy] = useState(false)
  const [sell, canSell] = useState(true)
  

  useEffect(()=>{
    
    if(number > 0){
      if(money-props.price >= 0){
        canSell(false)
        canBuy(false)
      }
      
    }
    else{
      canSell(true)
      canBuy(false)
    }
    

  } , [number, money, props.price])
  return (
    <moneyContext.Consumer>
      {context =>(

    <Card sx={{width:"30vh" }}>
      <CardMedia
        component="img"
        height="150"
        width="250"
        image={props.imagesrc}
        alt={props.item}
        className="noselect"
        style={{objectFit:"scale-down"}}
      />
      <CardContent>
        <Typography className="noselect" gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>

        <Typography className="noselect" gutterBottom variant="h6" component="div">
          ${formatNumber(props.price)}
        </Typography>
     

      </CardContent>
      
      <CardActions style={{marginBottom:0}}>
     <Custombutton disabled={sell} style={{color:"white", backgroundColor:sell===true ? "grey" : "red"}} onClick={()=>{
       if(number>0){
         canSell(false)
        setNumber(number-1)
        context.dispatchUserEvent("SELL", props.price, props.name)
       }
      
     }}>
       Sell
       </Custombutton>

     <Typography className="noselect" style={{marginRight:"auto", marginLeft:"25%"}}  variant="h4" component="div">
          {number}
        </Typography>

     <Custombutton  disabled={buy} onClick={()=>{
       if(money-props.price >=0){
         canBuy(true)
        setNumber(number+1)
        context.dispatchUserEvent("BUY", props.price, props.name)
       }
       else{
         canBuy(false)
       }
       
     }}
      style={{color:"white", backgroundColor:buy === true ? "grey" : "green", marginRight:0, marginLeft:"auto"}}>
        Buy
      </Custombutton>

      </CardActions>
      
    </Card>
      )}
    
    </moneyContext.Consumer>
  
  );
}