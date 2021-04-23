'use strict';

import ChainKit from 'squeezer-chainkit';
import fs from 'fs';
import event from 'squeezer-event-node';

const vars = JSON.parse(fs.readFileSync('.vars.json', 'utf8'));

export function handler(...args) {
  const { accessKey, chainkit } = vars;
  const { environment } = chainkit;

  const chainKit = new ChainKit({
    accessKey,
    environment
  });

  event(vars, (req, res) => {
    const { amount, to, token, secret, walletId } = req.body;

    chainKit.sendTransaction({ amount, to, token, secret, walletId }, (err, response) => {
      if (err) res.json(400, err);

      res.json(200, response);
    });
  }, ...args);
}
