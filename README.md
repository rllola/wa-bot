# Work Adventure Bot

"Pixel" is a bot that can be added to your [Work Adventure](https://workadventu.re/) server. He is a bridge between the office/venue you created to others applications (slack, matrix, discord, etc...).

## Deploy

### Configuration

Under the `config/` folder create a `default.toml` (for development) file and a `production.toml` (for production).

example.toml
```
[main]
url = "pusher.<workadventure-url>"
token = "<workadventure-token>"
name = "Pixel"
roomId = "<workadevture-roomId>"
characterLayers = "characterLayers=color_13&characterLayers=eyes_22&characterLayers=hair_1&characterLayers=clothes_10&characterLayers=hats_1&characterLayers=accessory_1"

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