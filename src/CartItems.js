import React from 'react';

const cartItem =(props)=>{
         
//We could change the class component to function component if it doesnt have any states
// class Navbar extends React.Component
// By default props is been passed default as an argument in the function


    
        const{price, title, qty} = props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        console.log(props)
        return (
           
            <div className="cart-items">
                <div className="left-block">
            
                    <img style={style.image} src={product.img}/>

                </div>

                <div className="right-block">
                        
                        <div style={{color: '#777'}}>{title}</div>
                        <div style={{ fontSize: 25}}>Rs {price}</div>
                        <div style={{ color: '#888'}}>Qty :{qty}</div>

                        <div className="cart-item-actions">
                            <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={()=>onIncreaseQuantity(product)}/>
                            <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" onClick={()=>onDecreaseQuantity(product)} />
                            <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"  onClick={()=>onDeleteProduct(product.id)}/>
                        </div>
                    
                 </div>

            </div>

        )
    

} 

const style={
    image:{
        height: 130,
        width: 130,
        borderRadius: 4,
        background: '#ccc',
        margin: 5
    }
}

export default cartItem;




/*The commented code */
/************************************************************/

    // increaseQuantity=()=>{
    //     this.setState(()=>{
    //         return{
    //             qty:this.state.qty+1
    //         }
    //     })
    // }

    // increaseQuantity=()=>{
    //     this.setState((prevState)=>{
    //         console.log(prevState)
    //         return{
    //             qty: prevState.qty+1  
    //         }
    //     })

    // }

    // decreaseQuantity=()=>{
    //     this.setState(()=>{
    //         if(this.state.qty<=1){
    //             return
    //         }
    //         return {
    //             qty:this.state.qty-1
    //         }
    //     })
    // }

    // decreaseQuantity=()=>{
    //       this.setState((prevState)=>{
        // if(prevState.qty<=1){
        //     return
        // }
    //           return{
    //               qty:prevState.qty-1
    //             }
    //       })
    // }