import React from 'react';
import cartItem from './CartItems';
import CartItem from './CartItems';


const Cart =(props)=>{

    //We should always modifie the state from a place where the state relis
    //Whether you declare a component as a function or a class, it must never modify its own props. A component cannot update its own props but can update its state and the props of its children.
    //Props in React are read-only data that can be passed and used by the various components into the application. Props are generally a static value, objects, array, or an event handler.


//Tje below code is commented as we are migrating the state from cart to the app



    // constructor(){
    //     super()
    //     this.state = {

    //         products:[
    //             {
    //                 price: 999,
    //                 title: 'Mobile Phone',
    //                 qty: 1,
    //                 img: '',
    //                 id: 1
    //             },
    //             {
    //                 price: 2000,
    //                 title: 'watch',
    //                 qty: 1,
    //                 img: '',
    //                 id: 2
    //             },
    //             {
    //                 price: 10000,
    //                 title: 'laptop',
    //                 qty: 1,
    //                 img: '',
    //                 id: 3
    //             }
    //         ]

    //     }
    // }

    // handleDeleteProduct=(id)=>{
    //     const {products} = this.state;
    //     const items = products.filter((item)=>
    //         item.id !== id

    //     );

    //     this.setState({
    //         products :items
    //     })
    // }


    // handleIncreaseQuantity = (product)=>{
    //     console.log('Please increase the qty of', product);
    //     const{products}= this.state;
    //     const index = products.indexOf(product);

    //     products[index].qty +=1;
    //     this.setState({
    //         products:products
    //         //or simply "products" will also work
    //     })



    // }   

    // handleDecreaseQuantity=(product)=>{
    //     console.log('Please decrease the qty of', product);
    //     const {products}= this.state;
    //     const index = products.indexOf(product);
    //     if(products[index].qty == 1){
    //         this.handleDeleteProduct(products[index].id)
    //     }
    //     // if(products[index].qty == 1){
    //     //     return 
    //     // }
    //     products[index].qty -= 1;
    //     this.setState({
    //         products:products
    //     })

    // }


    
        const {products} = props;
        return (
           <div className="cart">
               {products.map((product)=>{
                   return(
                       <CartItem 
                       //Here mentioned below all things are colletively know as props
                       // to access a particular among them we use "this.props.<name_of_feild>"
                       product={product} 
                       key={product.id}
                       onIncreaseQuantity={props.onIncreaseQuantity}
                       onDecreaseQuantity={props.onDecreaseQuantity}
                       onDeleteProduct={props. onDeleteProduct}
                       isloggedin={false}
                       jsx={<h1>Test</h1>}
                       comp={<CartItem/>}
                       />
                    )
               })}


            </div>
        ) 
    
 
} 

export default Cart;








/***********************************************/
// Below code is for understanding purpose
/*

1> const arr =[1,2,3,4];

Here items represent each value of arr when iterated

{arr.map((item)=>{

    return item+5
})}




2>To pass data from cart to the cartitems we use props,props are like arguments to a function
<cartitems qty={1} price={99} title={"watch"} img={''} />
To see this just console.log(this.props)
This will give an object containg all the properties

*/










