import { React, Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import { Menu } from "semantic-ui-react";

class Shop extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Menu pointing inverted fixed>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={this.state.activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Products
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            active={this.state.activeItem === "login"}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route path="/cart" exact component={Cart} />
          <Route render={() => <h3>Not Found</h3>} />
          {/* {this.state.auth ? <Route path="/secret" component={ccdd} /> : null } */}
        </Switch>
      </div>
    );
  }
}

export default Shop;
