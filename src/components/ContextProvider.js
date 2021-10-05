import React from "react"

import moneyContext from "./moneyContext"
import items from "../items"


export default function ContextProvider(props){
    const [money, setMoney] = React.useState(19800000000)
    const [itemsArray, setItems] = React.useState(items)
    const [totalCost, setTotalCost] = React.useState(0)
    React.useEffect(()=>{
        let sum = 0;
        for(let j=0; j<=32;j++){
            sum += (itemsArray[j].quantity) * (itemsArray[j].price)
        }
        setTotalCost(sum)

    })
    const dispatchUserEvent = (actionType, payload, payload2) => {
        const tempMoney = money
		switch (actionType) {
            
			case 'SELL':
                console.log(actionType)
				let finalSellSum = money+payload
                console.log(finalSellSum)
                if(finalSellSum <= 19800000000){
                    setMoney(finalSellSum)
                    for(let i=0; i<=32;i++){
                        if(itemsArray[i].name===payload2){
                            itemsArray[i].quantity -= 1;
                            setItems(itemsArray)
                            console.log(itemsArray)
                        }
                    }
                
                }
				return;
           
                
			case 'BUY':
                console.log(actionType)
				let finalBuySum = money-payload
                if(tempMoney >= payload){
                    setMoney(finalBuySum)
                    for(let i=0; i<=32;i++){
                        if(itemsArray[i].name===payload2){
                            itemsArray[i].quantity += 1;
                            setItems(itemsArray)
                         
                        }
                    }
                }
				return;
			default:
				return;
		}
	};
    return(

        <moneyContext.Provider value={{
            money,
            dispatchUserEvent,
            itemsArray,
            totalCost
            
        }}>
        
        {props.children}
        </moneyContext.Provider>
    )
}