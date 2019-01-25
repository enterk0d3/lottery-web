import Web3 from 'web3';
import contract from '../contract.json';

const web3 = new Web3(window.web3.currentProvider);
export const Contract = new web3.eth.Contract(contract.abi, contract.address);

export default web3;
