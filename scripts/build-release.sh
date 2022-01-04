#!/usr/bin/env bash

set -e

PROJECT_DIR="$(dirname "$0")/.."
TARGET_DIR="$PROJECT_DIR/dist"

APPS=(
	"dashboard"
	"project-renderer"
)

PACKAGES=(
	"theme-compatibility"
)

rm -rf "$TARGET_DIR"
mkdir -p "$TARGET_DIR"

for app in ${APPS[@]}; do
	rm -rf "$PROJECT_DIR/apps/$app/dist"

	NODE_ENV=production yarn workspace @crowdsignal/${app} build

	cp -R "$PROJECT_DIR/apps/$app/dist" "$TARGET_DIR/$app"
done

for pkg in ${PACKAGES[@]}; do
	rm -rf "${PROJECT_DIR}/packages/$pkg/dist"

	NODE_ENV=production yarn workspace @crowdsignal/${pkg} build

	cp -R "${PROJECT_DIR}/packages/$pkg/dist" "$TARGET_DIR/$pkg"
done
