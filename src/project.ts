import {makeProject} from '@motion-canvas/core';

import intro from './scenes/intro?scene';
import chatStats from './scenes/chat-stats?scene';
import chatterStats from './scenes/chatter-stats?scene';
import userStats from './scenes/user-stats?scene';
import { Stats } from '../private/stats';

// Pasted output from running ../private/genstats.ts on database instance
export const stats:Stats = {"liveChat":{"total":569857,"stops":[{"id":"tr","title":"🇹🇷","label":"Türkçe","value":305899,"colour":"#E30A17"},{"id":"es","title":"🇪🇸","label":"Español","value":197656,"colour":"#FFC300"},{"id":"en","title":"🇬🇧","label":"English","value":37353,"colour":"#0033A0"},{"id":"jp","title":"🇯🇵","label":"日本語","value":5873,"colour":"#BC002D"},{"id":"ru","title":"🇷🇺","label":"pусский","value":3881,"colour":"#D52B1E"},{"id":"fa","title":"🇮🇹","label":"فارسی","value":3817,"colour":"#E00034"},{"id":"zh","title":"🇨🇳","label":"中文","value":3284,"colour":"#DE2910"},{"id":"de","title":"🇩🇪","label":"Deutsch","value":2996,"colour":"#000000"},{"id":"az","title":"🇦🇿","label":"Azərbaycan","value":2014,"colour":"#3F9C35"},{"id":"pt","title":"🇧🇷","label":"Português","value":1859,"colour":"#009B3A"},{"id":"it","title":"🇮🇹","label":"Italiana","value":1749,"colour":"#009246"},{"id":"hi","title":"🇮🇳","label":"हिन्दी","value":819,"colour":"#FF9933"},{"id":"ko","title":"🇰🇷","label":"한국인","value":697,"colour":"#003478"},{"id":"fr","title":"🇫🇷","label":"Français","value":491,"colour":"#0055A4"},{"id":"sr","title":"🇷🇸","label":"Српски","value":363,"colour":"#C8102E"},{"id":"vi","title":"🇻🇳","label":"Tiếng Việt","value":327,"colour":"#DA251D"},{"id":"ar","title":"🇸🇦","label":"عربي","value":156,"colour":"#006341"},{"id":"ur","title":"🇵🇰","label":"اردو","value":106,"colour":"#00853F"},{"id":"bn","title":"🇧🇩","label":"বাংলা","value":82,"colour":"#006A4E"}]},"placeChat":{"total":84007,"stops":[{"id":1698796740000,"title":"October","label":"Messages","colour":"#ffc31f","value":20487},{"id":1701475140000,"title":"November","label":"Messages","colour":"#007ba7","value":39797},{"id":1704067140000,"title":"December","label":"Messages","colour":"#687a6d","value":23723}]},"chatters":{"topTotal":190197,"topRange":21803,"top":[{"id":7266,"title":"thiagoxnahuel","total":27013},{"id":42161,"title":"alguien_random","total":16345},{"id":7584,"title":"baldiback","total":14773},{"id":7206,"title":"zubigri","total":12283},{"id":12860,"title":"turkish_ece","total":11422},{"id":37555,"title":"elraenn","total":9062},{"id":73698,"title":"silver","total":8623},{"id":8500,"title":"lazvell","total":8327},{"id":49610,"title":"hola","total":8315},{"id":9909,"title":"omersiker","total":8312},{"id":33007,"title":"lazvell","total":8250},{"id":7059,"title":"bruhhizm✓","total":7142},{"id":11587,"title":"beyazvoid","total":6916},{"id":19064,"title":"selamss✓","total":6850},{"id":7080,"title":"xd","total":6672},{"id":19198,"title":"biskivitlitost","total":6550},{"id":18113,"title":"vicky","total":6532},{"id":85761,"title":"wuwvoid_gt","total":6044},{"id":52771,"title":"google","total":5556},{"id":11604,"title":"spidertr","total":5210}]},"time":{"totalSeconds":257426764}}

export default makeProject({
  scenes: [intro, chatStats, chatterStats, userStats],
});
