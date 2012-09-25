#!javascript
//<autoquvi___SCRIPT
extensions.load("autoquvi", {
//<autoquvi___CONFIG
  // The quvi command
  quvi      : "quvi",  

  // External player command
  player    : "mplayer %u", 

  // Whether to automatically play videos when quvi find a playable
  // video
  autoPlay  : true, 

  // Whether to choose the quality before quvi starts
  chooseQuality : true,

  // A shortcut that spawns quvi for the current website
  shortcut  : "eq",

  // A command that spawns quvi for the current website 
  command  : "autoquvi"

//>autoquvi___CONFIG
});
//>autoquvi___SCRIPT
