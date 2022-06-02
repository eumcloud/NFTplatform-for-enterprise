## env setting in Ubuntu

#### nvm install
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

nvm install --lts
nvm use [version]
```

#### Truffle install
```
npm i -g truffle@latest

# or when Permission error
npm i -g npm@6
npm i -g truffle --unsafe-perm

#etc
npm config set user 0
npm config set unsafe-perm true
```
- result
    - Truffle v5.5.16 (core: 5.5.16)
    - Ganache v^7.1.0
    - Solidity v0.5.16 (solc-js)
    - Node v16.15.0
    - Web3.js v1.5.3

#### 가나슈 ganache-cli
```
npm i -g ganache-cli
```




#### 프로젝트 준비 
```
mkdir myproject
cd myproject

truffle init
```