require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain quality harvest cloth forward topple'; 
let testAccounts = [
"0x7ea542ed5aed77cf17a8472d94319992d0673c8c72da661b543356ae245f54af",
"0x035c0ff66847c4095dddbc48b6d77cb2057bc8fc7d34b8b2d17a0717dc8cbafb",
"0x1022c2bd5f2ed68768246510d76c9331ca2d1d28657d6663608b4effeee3781d",
"0xad3e1ae00ea65882681dd50103e948c59fd6c7d8517edee4fd9971a930b8d349",
"0x49067217686ef56fc71cc5d96435ad37fda7831432acf71329490c0df28710bf",
"0x3aa1a436c507edd5349039b57fff5320421bc8fd5e5aa8f0902a18a69dac55c8",
"0xced8a515b3bad0a422fb0e094ac20565e509ddac7b5aef5ee3c160eafbb6099c",
"0xe87337a76aee705ab528c0dc2d8c53724f902e56a3f78e431428bdb4a05f31f7",
"0xe6dec9fc2737326d3bcf84e3760aa7680d321a6968536622113712db3f6ee321",
"0xad55126951df44ee5d84f139e06348add4d24b5a2c218337e3beb37c51612b9a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
