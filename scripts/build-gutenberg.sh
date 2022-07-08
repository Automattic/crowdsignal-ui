#!/usr/bin/env bash

# Initialize & update git submodules
git submodule init && git submodule update

# Enter Gutenberg directory
cd lib/gutenberg

# Install & build Gutenberg
npm ci && npm run build
