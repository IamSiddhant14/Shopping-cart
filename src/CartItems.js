import React from 'react';

class cartItem extends React.Component{

    constructor(){
        super()
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    // increaseQuantity=()=>{
    //     this.setState(()=>{
    //         return{
    //             qty:this.state.qty+1
    //         }
    //     })
    // }

    increaseQuantity=()=>{
        this.setState((prevState)=>{
            console.log(prevState)
            return{
                qty: prevState.qty+1  
            }
        })

    }

    decreaseQuantity=()=>{
        this.setState(()=>{
            if(this.state.qty<=1){
                return
            }
            return {
                qty:this.state.qty-1
            }
        })
    }

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

    render(){
        const{price, title, qty} = this.state
        return (
           
            <div className="cart-items">
                <div className="left-block">
            
                    <img style={style.image} />

                </div>

                <div className="right-block">
                        
                        <div style={{color: '#777'}}>{this.state.title}</div>
                        <div style={{ fontSize: 25}}>Rs {price}</div>
                        <div style={{ color: '#888'}}>Qty :{qty}</div>

                        <div className="cart-item-actions">
                            <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={this.increaseQuantity}/>
                            <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" onClick={this.decreaseQuantity} />
                            <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                        </div>
                    
                 </div>

            </div>

        )
    }

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