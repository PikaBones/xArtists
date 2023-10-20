mxpy --verbose contract call erd1neg4lkcy48kp5wmws23c900nypq8e792h49p6gefdc8r6k3vfj6qlpg0l9 \
    --proxy=https://devnet-gateway.multiversx.com --chain=D \
    --send --recall-nonce --pem=/home/joe/app/ping-pong/wallet-owner.pem \
    --gas-limit=10000000 \
    --value=1000000000000000000 \
    --function="stake"
