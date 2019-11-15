import loadAccount from 'my-account-loader';
import React from 'react';
import ReactList from 'react-list';
 
class Listbook extends React.Component {
  state = {
    accounts: []
  };
 
  componentWillMount() {
    loadAccounts(this.handleAccounts);
  }
 
  handleAccounts(accounts) {
    this.setState({accounts});
  }
 
  renderItem(index, key) {
    return <div key={key}>{this.state.accounts[index].name}</div>;
  }
 
  render() {
    return (
      <div>
        <h1>Accounts</h1>
        <div style={{overflow: 'auto', maxHeight: 400}}>
          <ReactList
            itemRenderer={this.renderItem}
            length={this.state.accounts.length}
            type='uniform'
          />
        </div>
      </div>
    );
  }
}
export default Listbook;