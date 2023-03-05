# Discord Webhook Checker

This is a simple Node.js program that allows you to check whether a Discord webhook URL is valid or not.

## Usage

1. Make sure you have Node.js installed on your machine.
2. Open your terminal or command prompt and navigate to the directory where the `index.js` file is located.
3. Run the command `node index.js`.
4. When prompted, enter the webhook URL you want to check.
5. The program will return either "valid webhook" or "invalid webhook".

## How it Works

The program uses the `node-fetch` package to make a request to the webhook URL provided by the user. If the response includes the strings "Invalid Webhook Token" or "Unknown Webhook", or if the URL does not contain "discord.com/api/webhooks", the program considers the URL to be invalid.

## Note

The program uses the `readline` package to prompt the user for input. The user can exit the program at any time by entering the word "exit" when prompted for the webhook URL.


