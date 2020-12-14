import { React, Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Login from "../Login/Login";
import { Menu } from "semantic-ui-react";

class Shop extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Menu pointing secondary>
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

        {/* <header>
              <nav>
                  <ul>
                      <li>
                          <a href="/">Menu Items</a>
                          <Link to="/">Menu Items</Link>
                      </li>
                      <li>
                          <a href="/login">Login</a>
                          <Link to="/login">Login</Link>
                      </li>
                  </ul>
              </nav>
          </header> */}

        <h2>This is a Shop</h2>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route render={() => <h3>Not Found</h3>} />
          {/* {this.state.auth ? <Route path="/secret" component={ccdd} /> : null } */}
        </Switch>
      </div>
    );
  }
}

export default Shop;
