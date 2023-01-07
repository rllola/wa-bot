# Work Adventure Bot

"Pixel" is a bot that can be added to your [Work Adventure](https://workadventu.re/) server. He is a bridge between the office/venue you created to others applications (slack, matrix, discord, etc...).

## Deploy

### Configuration

Under the `config/` folder create a `default.toml` (for development) file and a `production.toml` (for production).

example.toml
```
[main]
url = "<workadventure-url>"
token = "<workadventure-token>"
name = "Pixel"
roomId = "<workadevture-roomId>"
characterLayers = "characterLayers=body13&characterLayers=eyes1&characterLayers=hair1&characterLayers=clothes10&characterLayers=hat1&characterLayers=accessory1"

[main.position]
x = 1200
y = 900

[slack]
url = "<slack-incoming-webhook-created-after-installing-your-slack-app>"
```

### Start

```
$ npm start
```

### Docker

```
$ docker build -t wa-bot .
$ docker run -v "$(pwd)"/config:/usr/src/app/config wa-bot
```

## Development

TODO