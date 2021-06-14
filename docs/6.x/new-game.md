[TOC]

## Creating the Rojo Project
Rojo has a built-in command to initialize a new game project.

First, open up a terminal window, like `cmd.exe` on Windows or Bash. Navigate to where you'd like to store your new project and run

```sh
rojo init my-new-game
```

Rojo will create a folder named `my-new-game` if it doesn't already exist and create everything you need to get started.

## Building Your Place
Now that we have a project, one thing we can do is build a Roblox place file for our project. This is a great way to get started with a project quickly with no fuss.

All we have to do is run `rojo build` from inside the project's folder:

```sh
rojo build -o MyNewGame.rbxlx
```

If you open `MyNewGame.rbxlx` in Roblox Studio now, you should see a baseplate, as well as code in services like `ReplicatedStorage`.

!!! info
    To generate a binary place file instead, use `MyNewGame.rbxl`. Note that support for binary model/place files (`rbxm` and `rbxl`) is currently very limited in Rojo.

## Live-Syncing into Studio
Building a place file is great for starting to work on a game, but for active iteration, you'll want something faster.

In Roblox Studio, make sure the Rojo plugin is installed. If you need it, check out [the installation guide](../installation) to learn how to install it.

To expose your project to the plugin, you'll need to start a new **live sync session** from the command line:

```sh
rojo serve
```

You should see output like this in your terminal:

```sh
$ rojo serve
Rojo server listening:
  Address: localhost
  Port:    34872

Visit http://localhost:34872/ in your browser for more information
```

Switch into Roblox Studio and press the **Rojo** plugin toolbar button. A dialog should appear:

![Rojo plugin connection dialog](../images/connection-dialog-6.0.0-rc.1.png)
{: class="feature-image" align="center" }

If the port number doesn't match the output from the command line, change it, and then press **Connect**.

If all went well, you should now be able to change files in your project directory and watch them sync into Roblox Studio in real time!

You can also visit the URL printed by Rojo to access extra information about the running session.

## Uploading Your Place
Aimed at teams that want serious levels of automation, Rojo can upload places to Roblox.com automatically.

You'll need an existing game on Roblox.com as well as the `.ROBLOSECURITY` cookie of an account that has write access to that game.

!!! warning
    It's recommended that you set up a Roblox account dedicated to deploying your game instead of your personal account in case your security cookie is compromised.

Generating and publishing your game is as simple as:

```sh
rojo upload --asset_id [PLACE ID] --cookie "[SECURITY COOKIE]"
```

### Upload Notes

This API is very temperamental. There are a few common issues:

 1. The cookie has been invalidated. This can happen if you pressed "Log Out" on the website or if the cookie expired after ~6 months.
 1. You are publishing to a universe/game/experience instead of a place. It's important to use the place ID.
 1. You're using the wrong account. This happens a lot to me when I switch between accounts in Studio.

I recommend not specifying the upload cookie yourself if possible. On Windows, rojo upload can find your cookie from Roblox Studio for you.

An example project is available on GitHub that deploys to Roblox.com via GitHub Actions automatically: [Desert Bus 2077](https://github.com/Roblox/desert-bus-2077)
