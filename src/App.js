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
          img: '',
          id: 1
        },
        {
          price: 2000,
          title: 'watch',
          qty: 1,
          img: '',
          id: 2
        },
        {
          price: 10000,
          title: 'laptop',
          qty: 1,
          img: '',
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
      </div>
    );
  }
}

export default App;
