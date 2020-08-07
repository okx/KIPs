'use strict';

import crypto from 'crypto';
import event from 'squeezer-event-node';
import fs from 'fs';

const vars = JSON.parse(fs.readFileSync('.vars.json', 'utf8'));

export function handler(...args) {
  event(vars, (req, res) => {
    const { accessKey } = vars;
    const { accessKeyHash } = req.body;
    const digestHash = crypto.createHmac('SHA256', accessKey).update(accessKey).digest('hex');

    console.log(req.body);

    if (accessKeyHash === digestHash) {
      // ADD YOUR CODE LOGIC HERE

      res.json(200, {
        message: 'success'
      });
    } else {
      res.json(400, {
        message: 'invalid access key hash'
      });
    }
  }, ...args);
}
