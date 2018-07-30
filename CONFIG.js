var config = {}
config['domoticz_ip'] = 'https://192.168.1.200:443';
config['app_title'] = 'Dashticz';
config['domoticz_refresh'] = '5';
config['dashticz_refresh'] = '60';
config['default_news_url'] = 'https://www.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/';
config['last_update'] = 0;
config['news_scroll_after'] = '9';


/* Meteo */
var frames = {}
frames.weather = {refreshiframe:10000,height:230,frameurl:"//forecast.io/embed/#lat=45.9027&lon=6.0987&name=Cran-Gevrier&color=#00aaff&font=Helvetica&fontcolor=#ffffff&units=si&text-color=#fff",width:24}

var _LANGUAGE = 'en_US';
var _WEATHER_CITY = 'Annecy';
var _WEATHER_COUNTRY = 'FR';
var _USE_AUTO_POSITIONING = false;
var _USE_FAVORITES      = false;
var _NEWS_RSSFEED       = 'https://crossorigin.me/https://www.lemonde.fr/rss/une.xml';
var _SHOW_LASTUPDATE = false;

var blocks = {}
blocks['blocktitle_1'] = {}
blocks['blocktitle_1']['key'] = 'blocktitle_1';
blocks['blocktitle_1']['type'] = 'blocktitle';
blocks['blocktitle_1']['title'] = 'Controls';

/* block['log'] = {}
block['log']['height'] = 12; */

blocks[1] = {} //All
blocks[1]['title'] = 'All Bulbs'

blocks[12] = {} //Travail
blocks[12]['width'] = 3;
blocks[12]['icon'] = 'fa-briefcase';

blocks[13] = {} //10min
blocks[13]['width'] = 3;
blocks[13]['icon'] = 'fa-clock-o';

blocks[14] = {} //Stop
blocks[14]['width'] = 3;
blocks[14]['title'] = 'Stop'
blocks[14]['icon'] = 'fa-stop-circle';
blocks[14]['hide_data'] = true;

blocks[15] = {} //Ganja
blocks[15]['width'] = 3;
blocks[15]['title'] = 'Ganja'
blocks[15]['icon'] = 'fa-play';
blocks[15]['hide_data'] = true;

blocks[16] = {} //Lounge
blocks[16]['width'] = 3;
blocks[16]['title'] = 'Lounge'
blocks[16]['icon'] = 'fa-play';
blocks[16]['hide_data'] = true;

blocks[17] = {} //Mouv
blocks[17]['width'] = 3;
blocks[17]['title'] = 'Mouv'
blocks[17]['icon'] = 'fa-play';
blocks[17]['hide_data'] = true;

var columns = {}
columns['bar'] = {}
columns['bar']['blocks'] = ['miniclock','settings']
/*columns['bar']['blocks'] = ['logo','miniclock','settings'] */

columns[1] = {}
columns[1]['blocks'] = [frames.weather,1,13,12]
columns[1]['width'] = 6;

columns[2] = {}
columns[2]['blocks'] = [15,16,17,14,'news']
columns[2]['width'] = 6;

columns[3] = {}
columns[3]['blocks'] = ['log']
columns[3]['width'] = 12;

var columns_standby = {}
columns_standby[1] = {}
columns_standby[1]['blocks'] = ['clock','weather']
columns_standby[1]['width'] = 12;

var screens = {}
screens[1] = {}
screens[1]['background'] = 'sf.jpg';
screens[1]['columns'] = [1,2]

screens[2] = {}
screens[2]['background'] = 'sf.jpg';
screens[2]['columns'] = [3]
