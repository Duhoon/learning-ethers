import * as ethers from 'ethers';
import provider from './provider';
import Token from './contract/token.json';

export const TokenContract = new ethers.Contract(
  '0x5fbdb2315678afecb367f032d93f642f64180aa3', 
  Token.abi,  
  provider
)