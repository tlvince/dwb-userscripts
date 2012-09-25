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
//<requestpolicy___SCRIPT
extensions.load("requestpolicy", {
//<requestpolicy___CONFIG
  // path to a whitelist 
  whiteList : data.configDir + "/" + data.profile + "/requestpolicy.json",

  // shortcut to block/allow requests
  shortcut : "erp",

  // shortcut to unblock requests from current site that are blocked on all
  // sites
  unblockCurrent : "erC",

  // shortcut to unblock requests that are blocked on all sites
  unblockAll : "erA",

  // reload current site after blocking / unblocking a request
  autoreload : true, 

  // notify about blocked requests
  notify : false

//>requestpolicy___CONFIG
});
//>requestpolicy___SCRIPT
//<userscripts___SCRIPT
extensions.load("userscripts", {
//<userscripts___CONFIG
  // paths to userscripts, this extension will also load all scripts in from 
  // $XDG_CONFIG_HOME/.config/dwb/scripts
  scripts : []
//>userscripts___CONFIG
});
//>userscripts___SCRIPT
