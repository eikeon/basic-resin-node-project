#!/bin/bash

set -o errexit

apt-get -q update
apt-get install -y cowsay avahi-daemon
/etc/init.d/avahi-daemon restart
/usr/games/cowsay "Install dependencies using a script like this!"
