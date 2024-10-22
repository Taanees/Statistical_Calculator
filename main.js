console.log('from main.js');
const electron = require ("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const windowStateKeeper = require('electron-window-state')

let win ;
function createWindow(){
    let mainWindowState= windowStateKeeper({
        defaultWidth : 1500,
        defaultHeight :1000
    })
    win= new BrowserWindow({
        width: mainWindowState.width,
        height: mainWindowState.height,
        webPreferences : {
            nodeIntegration : true,
            contextIsolation: false
        }
        
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname , "./index.html"),
        protocol :'file',
        slashes : true
    }));
   
    
    win.on('closed', ()=>{
        win=null;
    })
}

app.on('ready', createWindow);

//refresh btn


app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});







 
