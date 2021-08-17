import React from 'react';
import './index.css';
import Cart from './Cart';
import Navbar from './Navbar';

//We are moving our state from cart.js to the app.js since in react the 
//flow of data is from parent child only and since here cart is the parent of all the other component
// The state is been transfered with the help of props
//Here navnbr requires the state of cart

//Here we are migrating the state from cart component to the app component




// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Cart />
//     </div>
//   );
// }

class App extends React.Component {

  constructor() {
    super()
    this.state = {

      products: [
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1901&q=80',
          id: 1
        },
        {
          price: 2000,
          title: 'watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80',
          id: 2
        },
        {
          price: 10000,
          title: 'laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
          id: 3
        }
      ]

    }
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) =>
      item.id !== id

    );

    this.setState({
      products: items
    })
  }


  handleIncreaseQuantity = (product) => {
    console.log('Please increase the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products
      //or simply "products" will also work
    })



  }

  handleDecreaseQuantity = (product) => {
    console.log('Please decrease the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty == 1) {
      this.handleDeleteProduct(products[index].id)
    }
    // if(products[index].qty == 1){
    //     return 
    // }
    products[index].qty -= 1;
    this.setState({
      products: products
    })

  }
  getCartCount=()=>{
    let count = 0;
    const {products}= this.state;

    products.forEach((product)=>{
      count+= product.qty;
    })

     return count
}

getCartTotal = () =>{
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product)=>{
    cartTotal= cartTotal+product.qty *product.price;
  })
  return cartTotal;
}
 


  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar coun={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct} 
        />
        <div>TOTAl :{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
