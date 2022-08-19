#!/usr/bin/env bash

yarn workspace @crowdsignal/dashboard start &
yarn workspace @crowdsignal/project-renderer start &
yarn workspace @crowdsignal/theme-compatibility build --watch &
yarn workspace @crowdsignal/embed build --watch
