#!/bin/bash
echo $(geth --identity 'PrivateNetwork' --datadir ./ethereum/data/ --port "30303" --http --http.addr 127.0.0.1 --http.port "8001" --http.corsdomain '*' --nodiscover --networkid 1001 --nat "any" --http.api "db, eth, net, web3, miner" --allow-insecure-unlock console)
