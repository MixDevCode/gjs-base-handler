# Guilded.JS Base Handler
This repository contains a base handler bot for Guilded, using the Guilded.JS library. The bot already has an example command and is easily customizable to fit your needs.

## Prerequisites
Before using this bot, you will need:
* Node.js installed on your machine. You can download it from the [official website](https://nodejs.org/).
* A Guilded bot token. You can learn how to get one by following the instructions in [this article from the official website](https://support.guilded.gg/hc/en-us/articles/7135869418007-Guilded-API).

## Installation
To use this handler, you need to follow these steps:

1. Clone this repository to your local machine using the command:
```bash
git clone https://github.com/MixDevCode/gjs-base-handler.git
```

2. Install the required dependencies using the command:
```bash
npm install
```

3. Create a `.env` file in the root of the project and configure the necessary environment variables. You can use the `.env.example` file as a reference.

4. Run the bot using the command:
```bash
node index.js
```

5. Your bot should now be up and running on Guilded.

## Used Modules
* `@discordjs/collection`: To store the commands in a collection and later search for them using a handler.
* `dotenv`: To use environment variables and protect sensitive information.
* `glob`: To get the list of command and event files.
* `guilded.js`: To connect to the Guilded API and receive server information.

## Contributions
Feel free to contribute to this project by opening a Pull Request. Any improvements or suggestions are welcome.

## License
This project is licensed under the ISC License. See the LICENSE file.

