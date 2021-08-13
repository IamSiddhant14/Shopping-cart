import React from 'react';
//We could change the class component to function component if it doesnt have any states
// class Navbar extends React.Component
// By default props is been passed default as an argument in the function

const Navbar = (props) => {

        return (
           
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>

                <img style={styles.cartIcon} src="https://img-premium.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1628799671~hmac=9cf055b6e3d06deed225d77b5560174f" alt="cart-icon" />
                <span style={styles.cartCount}>3</span>

                </div>
            </div>

        )

} 


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }

}
export default Navbar;



