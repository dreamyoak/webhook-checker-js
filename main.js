const readline = require('readline');
const fetch = require('node-fetch');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function check() {
  rl.question('webhook url >:', async (webhook) => {
    if (webhook === 'exit') {
      rl.close();
      return;
    }
    const wise = '"Invalid Webhook Token"';
    const haha = '"Unknown Webhook"';
    const oak = webhook;
    try {
      const response = await fetch(oak);
      const text = await response.text();
      if (text.includes(wise) || text.includes(haha) || !webhook.includes('discord.com/api/webhooks')) {
        console.clear();
        console.log('invalid webhook');
      } else {
        console.clear();
        console.log('valid webhook');
      }
    } catch (e) {
      console.clear();
      console.log('invalid webhook');
    }
    check();
  });
}

check();
