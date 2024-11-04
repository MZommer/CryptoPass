export const getEther = () => {
    return new Promise((resolve, reject) => {
      let ether
  
      if (window.ethereum) {
        ether = window.ethereum;
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(result => resolve(ether))
            .catch(err => reject())
      } 
      else if (window.web3) {
        ether = window.web3.currentProvider
        resolve(ether)
      } else {
        console.error('Please install a wallet')
        reject()
      }
    })
  }