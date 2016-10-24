#Duckuino
##Live version here: https://d4n5h.github.io/Duckuino/
Simple DuckyScript -> Arduino converter/compiler.
The original Rubber Ducky cannot perform Mouse control, But the Duckuino sure can.

```diff
- DEPENDENCY: https://github.com/NicoHood/HID (*IMPORTANT!*)
```
Download HID-Project from: https://github.com/NicoHood/HID/archive/master.zip and add it to Arduino Library.

### If you don't want to use the mouse emulation then use Thecakeisgit compiler: https://github.com/Thecakeisgit/Dckuino.js

###NOTE: You should update the Arduino IDE to the latest version for better cross-platform compatibility! (Or use the Arduino Create Web IDE)

###Commands: https://github.com/hak5darren/USB-Rubber-Ducky/wiki/Duckyscript
The commands are basically the same except that you can simulate a mouse with Duckuino like so:
"MOUSEMOVE xPos,yPos,wheelPos" for positioning and "MOUSECLICK left/right/middle" for clicks.
