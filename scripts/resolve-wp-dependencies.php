#!/usr/bin/env bash php

<?php

// List of apps compiled using the WP environment setting - omitting all Gutenberg dependencies and some major libraries.
$apps = [
	'dashboard',
];

$dependencies = [];

$resolved = [];

function get_assets()

// Get all *.asset.php files from our builds - flatten them

// Get all *.asset.php from those gutenberg dependencies and also resolve their dependencies

// Spit out a list of all our gutenberg dependencies

// The bash script then takes over to concatenate and maybe repackage them for production so we end up with just a single gutenberg.js file

