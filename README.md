# Crowdsignal UI

This repository contains the front-end code for Crowdsignal.com


## Development

After cloning the repo here are the steps to run the project. **NOTE: This project needs exactly Node `v14.15.0` and NPM `6.14.8`. You will also need to install Yarn.**

### Install dependencies

```sh
yarn install
yarn build-gutenberg
```
We recommend running `yarn install` often to pull in added/updated packages. This will make sure you are all up to date.

### Update Host File

For the CS-UI project to run in your browser, you will need to add this record in your hosts file:

`127.0.0.1 crowdsignal.localhost`

This can be done with [iHosts](https://apps.apple.com/us/app/ihosts-etc-hosts-editor/id1102004240?mt=12) or [Gasmask](https://github.com/2ndalpha/gasmask)

To be able to load resources on localhost, you'll need to be sandboxed. You can open up a blank terminal window and connect to sandbox.

In addition, add these to the host file:

```
192.0.123.182 app.crowdsignal.com
192.0.123.182 api.crowdsignal.com
192.0.123.182 survey.fm
192.0.123.182 poll.fm
192.0.123.182 polldaddy.com
192.0.123.182 api.polldaddy.com
192.0.123.182 files.polldaddy.com
```

where `192.0.123.182` is your Polldaddy sandbox ID
 
### Clear Cache

Whenever a change is made to the hosts file, it's good to clear out the browser's host cache. Use this script to run:

```sh
# Flush DNS cache.
sudo dscacheutil -flushcache;
sudo killall -HUP mDNSResponder;

# Clear Chrome's DNS cache.
osascript <<EOD
        tell application "Google Chrome"
                tell front window

                set curTab to active tab index

                set dnsTab to make new tab with properties {URL:"chrome://net-internals/#dns"}
                set dnsTabReady to not loading of dnsTab

                repeat until dnsTabReady
                        set dnsTabReady to not loading of dnsTab
                end repeat

                execute dnsTab javascript "
                        document.getElementById('dns-view-clear-cache').click();
                        document.getElementById('sockets-view-flush-button').click();
                "
                close dnsTab
                set active tab index to curTab

                end tell
        end tell
EOD
```

### Start development

```sh
yarn start
```

Site can be viewed at https://crowdsignal.localhost:9000/project

### Run storybook

To leverage Storybook running on `http://localhost:8000` run

```sh
yarn storybook
```

### Generate release build

```sh
yarn build
```

Then copy the files in `/dist` to your crowdsignal sandbox at `/app.crowdsignal.com/public_html/ui/`:
- `/next` is for internal testing
- `/stable` is for public release

Create a PR and deploy once you're satisfied everything is working.

### Troubleshooting

**How to Install Node 14.15**
If you have an M1 Machine (non-Intel), you'll need to use [Terminal in a Rosetta](https://www.jurnalanas.com/node-js-mac-m1/#create-a-rosetta-terminal) to install Node 14.15

**Check for correct IP Address**
Some assets won't load properly if you aren't connected to your sandbox. Run `ping app.crowdsignal.com`. This should return your sandbox IP address.

