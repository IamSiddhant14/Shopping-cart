import React from 'react';
import './index.css';
import firebase from 'firebase/app'
import 'firebase/firestore';
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
      products: [],
      loading:true
    }
  }

  componentDidMount(){
    firebase
      .firestore()//we are getting the data from firestone
      
      .collection('products')//name of collection on firebase is products, this will return us the refrence of that connection 
      
      .get()//this will return me a promise as resolve
     
      .then((snapshot)=>{ //this snapshot is the snapshot of the database at that particular time
        console.log(snapshot)
        snapshot.docs.map((doc)=>{// This will iterate over the documents in the collection
          
          console.log(doc.data())//this will print all the fields/data in the documnet as an object

        });
        const products = snapshot.docs.map((doc) =>{
          const data = doc.data();
          data['id']=doc.id//this is the id of the document
          return doc.data(); // This would return all the documents with the fields as an object
        })
        this.setState({
          products,
          loading:false
        })
      })
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
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar coun={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct} 
        />
        {loading && <h1>Loading Products...</h1>}
        <div>TOTAl :{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
