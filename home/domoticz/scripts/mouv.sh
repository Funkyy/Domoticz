#!/bin/bash
# echo Mouv
sudo killall mplayer
mplayer -noconsolecontrols -volume 85 http://direct.mouv.fr/live/mouv-midfi.mp3 &
