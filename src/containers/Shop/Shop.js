import { React, Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import { Menu } from "semantic-ui-react";
import CreateProduct from "../../components/Products/CreateProduct";

import ContactInfo from '../ContactInfo/contactInfo'
import { connect } from 'react-redux';
import { logout } from '../../store/action/auth';

//user.UserName == "johndoe" && user.Password == "def@123"

class Shop extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      //create buttons in navigation bar
      <div>
        <Menu pointing inverted fixed ='top'>
          <Menu.Item
            as={Link}
            to="/products"
            name="products"
            active={this.state.activeItem === "products"}
            onClick={this.handleItemClick}
          >
            Products
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/createProduct"
            name="Create Product"
            active={this.state.activeItem === "Create Product"}
            onClick={this.handleItemClick}
          >
            Create Product
          </Menu.Item>

          { !this.props.isAuth ?
          <Menu.Item
            as={Link}
            to="/"
            name="login"
            active={this.state.activeItem === "login"}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
          :

          <Menu.Item
            as={Link} to="/"
            name='logout'
            active={this.state.activeItem === 'logout'}
            onClick={this.props.logout}
            >Logout
            </Menu.Item>
        }

        </Menu>

        <Switch>
          <Route path="/" exact component={Login} />

          {this.props.isAuth ?
            <Route path="/products" exact component={Products} />
          : <Route render={() => <h3>Not Found</h3>} />}
          

          <Route path="/createProduct" exact component={CreateProduct} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/contact-info" exact component={ContactInfo} />
          
          
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      isAuth: Object.keys(state.user).length !== 0
  }
}

export default connect(mapStateToProps, { logout })(Shop);
