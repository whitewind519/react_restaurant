import React from 'react';
import { connect } from 'react-redux';

/** Import components */
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

// Import actions
import { logout } from 'services/auth/authActions';
import { bindActionCreators } from 'redux';

/** Import assets */
import logo from 'assets/images/logo.jpg';
import './topNav.css';

class TopNav extends React.Component {
  handleLogoutClick(e) {
    this.props.authActions.logout();
  }
  render() {
    const { name } = this.props.currentUser;
    return (
      <div className="top-nav">
        <Navbar light expand className="shadow-sm bg-white p-0 h-100">
          <NavbarBrand href="/">
            <img src={logo} alt="ChatMatic" className="top-nav-logo" />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {name}
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem>
                  <li onClick={(e)=>this.handleLogoutClick(e)}>Log out</li>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default connect(
  state => ({
    currentUser: state.default.services.auth.currentUser
  }),
  dispatch => ({
    authActions: bindActionCreators({ logout }, dispatch)
  })
)(TopNav);
