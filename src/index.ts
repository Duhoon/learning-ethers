import provider from './provider';
import { TokenContract } from './contract';

(async () => {
  // get Block Number
  console.log( await provider.getBlockNumber() );

  // get Functions
  console.log( TokenContract.getFunction('transfer') )

  // Token Balance
  console.log( await TokenContract.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266') );
})()
