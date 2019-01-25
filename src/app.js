import React, { Component, Fragment } from 'react';

import Web3, { Contract } from './utils/web3';

import Styles, { Button, Card, Content, Input, Loading } from './components';
import { H1, H2, Strong, Small } from './components/typo';

class App extends Component {
  state = {
    isLoading: true,
    account: '',
    contract: {
      balance: '',
      manager: '',
      winner: '',
      players: []
    },
    amount: ''
  };

  componentDidMount = async () => {
    await this.handleFetchContract();
  }

  handleLoading = async () => {
    await this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }))
  }

  handleChange = async (event) => {
    const amount = event.target.value;
    await this.setState({
      amount
    })
  }

  handleFetchContract = async () => {
    const accounts = await Web3.eth.getAccounts();
    const balance = await Web3.eth.getBalance(Contract.options.address);
    const manager = await Contract.methods.manager().call();
    const players = await Contract.methods.getPlayers().call();
    this.setState({
      account: accounts[0],
      contract: {
        balance,
        manager,
        players
      }
    });
    this.handleLoading();
  }

  handleOnSubmit = async event => {
    event.preventDefault();
    this.handleLoading();
    const { account, amount } = this.state;
    await Contract.methods.enter().send({
      from: account,
      value: Web3.utils.toWei(amount, 'ether')
    });
    await this.handleFetchContract();
  };


  handleOnPickWinner = async () => {
    this.handleLoading();
    const accounts = await Web3.eth.getAccounts();
    await Contract.methods.pickWinner().send({
      from: accounts[0]
    });
    const winner = await Contract.methods.winner().call();
    this.setState({
      contract: {
        winner
      }
    });
    this.handleFetchContract();
  };

  renderManager = () => {
    const { contract } = this.state;
    return(
      contract.manager ? (
        <H2>
          This contract is managed by
          <br/>
          { contract.manager }
        </H2>
      ) : (
        <H2><i>cruching the contract manager...</i></H2>
      )
    )
  }

  renderStatus = () => {
    const { account, contract } = this.state;
    const currentAccount = account || 'Your address is not available now';
    const playersCount = contract.players ? contract.players.length : 0;
    const contractBalance = contract.balance ? Web3.utils.fromWei(contract.balance, 'ether') : 0;
    return(
      <div>
        <p>{ currentAccount }</p>
        <hr/>
        There are currently
        <br/>
        <Strong>{ playersCount }</Strong>
        <br/>
        <Small>human being</Small>
        <br/>
        Competing to win
        <br/>
        <Strong>{ contractBalance } </Strong>
        <br/>
        <Small>ETH</Small>
      </div>
    )
  }

  renderForm = () => {
    const { amount } = this.state;
    return(
      <form onSubmit={this.handleOnSubmit}>
          <Small>Maybe it's your luck! Enter your amount to join</Small>
          <Input type="number" step="0.001" value={amount} onChange={this.handleChange} placeholder="let me guess...0.001?" />
        <Button type="submit">I'm join!</Button>
      </form>
    )
  }

  renderPickWinner = () => {
    const { account, contract } = this.state;
    return(
      account === contract.manager && <Button type="button" onClick={this.handleOnPickWinner}>Pick a WINNER!</Button>
    )
  }

  renderWinner = () => {
    const { contract } = this.state;
    return(
      contract.winner ? (
        alert(`Congrats, ${contract.winner} is running with happiness! :D`)
      ) : false
    )
  }


  render = () => {
    const { isLoading } = this.state;
    return (
      <Fragment>
        <Styles/>
        <Card>
            <Content>
              <H1>
                Lottery
                <br/>
                Smart Contract
              </H1>
              { this.renderManager() }
              { this.renderStatus() }
              { this.renderForm() }
              { this.renderPickWinner() }
              { this.renderWinner() }
            </Content>
          <Loading isLoading={isLoading}/>
        </Card>
      </Fragment>
    );
  }
}

export default App;
