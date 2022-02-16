require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember unique install basket frame giggle'; 
let testAccounts = [
"0xb3f9922be586388b2380860dfb5a81ddef846f99db2913e2f1e4e0c877ec43e7",
"0xa64922aa48723c1140f309041a7799ae01d65f8fdbfc52f9040e813b4a9033d6",
"0x74ad844d876c56acabd56e8c399fac757dfe906f463d245966a072416ea91b9f",
"0xa7c63ab4ea7df4de7dcb5b8b939e52375873937f06ae8113f31b7173629b2002",
"0x7b9f2a4b461e44a2b8f2f4f76a65e4cbba0bccb9db60386ec83279d1311d8b66",
"0xd21543bb43ea1e477268b601ad7361b3cad175d7fc53f4bce3aebc72914ea5a3",
"0x1185f6f94f7167b0d7eab2fb0ddbc7a153264c2abe71217985aa2dc7479ae420",
"0xe114abf19da3f0a0f6aaa81192792b902fe60e11f9b3bd963857301dc4be9f85",
"0xa71bb34d4ce658be1a9175eac35cbe5d4c7be6dad0a9bd5e9f45cdaed2bc1d74",
"0x37069386341b43fb3d78bd2cd24b61b34f0ce31f3221e01109655f9ac5969aff"
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
            version: '^0.8.0'
        }
    }
};

