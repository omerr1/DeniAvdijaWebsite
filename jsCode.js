const deni = 1630166;
const WASH = 1610612764;

let Last5Games;
let myGameStats;


function getPlayer() {
    let pID = httpGetPlayerID();
    setPicture(pID);
    httpGetPlayerStats(pID);
}
function getDeni() {
    setPicture(deni);
    httpGetPlayerStats(deni);
    getLast5GamesStatsOfDeni();
}

function httpGetPlayerID(name) {
}

function setPicture(id) {
    document.getElementById("p").src =
        "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + id + ".png";
    document.getElementById("p").alt = "DENI AVDIJA PICTURE";
}

function createTableHeaders() {
    let table = document.createElement("table");
    let headRow = document.createElement("tr");

    let thDate = document.createElement("th");
    let thTeam = document.createElement("th");
    let thMinutes = document.createElement("th");
    let thPoints = document.createElement("th");
    let thAssists = document.createElement("th");
    let thRebounds = document.createElement("th");
    let thDefensiveR = document.createElement("th");
    let thOffensiveR = document.createElement("th");
    let thFGs = document.createElement("th");
    let th3Gs = document.createElement("th");
    let thFreeGs = document.createElement("th");
    let thBlocks = document.createElement("th");
    let thSteals = document.createElement("th");
    let thFouls = document.createElement("th");
    let thTurnovers = document.createElement("th");
    let thPlusMinus = document.createElement("th");

    thDate.appendChild(document.createTextNode("Date"));
    thTeam.appendChild(document.createTextNode("Team"));
    thMinutes.appendChild(document.createTextNode("Minutes"));
    thPoints.appendChild(document.createTextNode("Points"));
    thAssists.appendChild(document.createTextNode("Assists"));
    thRebounds.appendChild(document.createTextNode("Rebounds"));
    thDefensiveR.appendChild(document.createTextNode("DefsensiveR"));
    thOffensiveR.appendChild(document.createTextNode("OffensiveR"));
    thFGs.appendChild(document.createTextNode("FGs"));
    th3Gs.appendChild(document.createTextNode("3Gs"));
    thFreeGs.appendChild(document.createTextNode("FreeThrows"));
    thBlocks.appendChild(document.createTextNode("Blocks"));
    thSteals.appendChild(document.createTextNode("Steals"));
    thFouls.appendChild(document.createTextNode("Fouls"));
    thTurnovers.appendChild(document.createTextNode("Turnovers"));
    thPlusMinus.appendChild(document.createTextNode("+-"));

    headRow.appendChild(thTeam);
    headRow.appendChild(thDate);
    headRow.appendChild(thMinutes);
    headRow.appendChild(thPoints);
    headRow.appendChild(thAssists);
    headRow.appendChild(thRebounds);
    headRow.appendChild(thDefensiveR);
    headRow.appendChild(thOffensiveR);
    headRow.appendChild(thFGs);
    headRow.appendChild(th3Gs);
    headRow.appendChild(thFreeGs);
    headRow.appendChild(thBlocks);
    headRow.appendChild(thSteals);
    headRow.appendChild(thFouls);
    headRow.appendChild(thTurnovers);
    headRow.appendChild(thPlusMinus);


    table.style.display = "block";
    table.style.marginTop = "10px";
    table.appendChild(headRow);
    document.getElementById("Stats5").appendChild(table);
    return table;
}
function getLast5GamesStatsOfDeni() {
    let table = createTableHeaders();
    getLast5GamesData(WASH);
    
    for(let i = Last5Games.length-1 ; i >=0; i --)
    {
        getGameRow(Last5Games[i]);
        console.log(myGameStats);
        if(myGameStats === undefined)
            continue;
        let playerStats = getGameStatsOfPlayer(myGameStats.stats.activePlayers,deni);
        console.log(Last5Games[i]);
        addToTable(myGameStats.basicGameData.homeStartDate, myGameStats.basicGameData.vTeam.triCode, myGameStats.basicGameData.hTeam.triCode,playerStats,table);
    }
}
function addToTable(date,away,home,stats,table){
    let headRow = document.createElement("tr");

    let thTeam = document.createElement("td");
    let thDate = document.createElement("td");
    let thMinutes = document.createElement("td");
    let thPoints = document.createElement("td");
    let thAssists = document.createElement("td");
    let thRebounds = document.createElement("td");
    let thDefensiveR = document.createElement("td");
    let thOffensiveR = document.createElement("td");
    let thFGs = document.createElement("td");
    let th3Gs = document.createElement("td");
    let thFreeGs = document.createElement("td");
    let thBlocks = document.createElement("td");
    let thSteals = document.createElement("td");
    let thFouls = document.createElement("td");
    let thTurnovers = document.createElement("td");
    let thPlusMinus = document.createElement("td");

    thDate.appendChild(document.createTextNode(date.slice(6,8) + "-" + date.substring(4,6) + "-" + date.toString().substring(0,4)));
    thTeam.appendChild(document.createTextNode(away + " AT " + home));
    thMinutes.appendChild(document.createTextNode(stats.min));
    thPoints.appendChild(document.createTextNode(parseInt(stats.fgm*2) + parseInt(stats.tpm) + parseInt(stats.ftm)));
    thAssists.appendChild(document.createTextNode(stats.assists));
    thRebounds.appendChild(document.createTextNode(stats.totReb));
    thDefensiveR.appendChild(document.createTextNode(stats.defReb));
    thOffensiveR.appendChild(document.createTextNode(stats.offReb));
    thFGs.appendChild(document.createTextNode(stats.fgm + "/" + stats.fga));
    th3Gs.appendChild(document.createTextNode(stats.tpm + "/" + stats.tpa));
    thFreeGs.appendChild(document.createTextNode(stats.ftm + "/" + stats.fta));
    thBlocks.appendChild(document.createTextNode(stats.blocks));
    thSteals.appendChild(document.createTextNode(stats.steals));
    thFouls.appendChild(document.createTextNode(stats.pFouls));
    thTurnovers.appendChild(document.createTextNode(stats.turnovers));
    thPlusMinus.appendChild(document.createTextNode(stats.plusMinus));

    headRow.appendChild(thTeam);
    headRow.appendChild(thDate);
    headRow.appendChild(thMinutes);
    headRow.appendChild(thPoints);
    headRow.appendChild(thAssists);
    headRow.appendChild(thRebounds);
    headRow.appendChild(thDefensiveR);
    headRow.appendChild(thOffensiveR);
    headRow.appendChild(thFGs);
    headRow.appendChild(th3Gs);
    headRow.appendChild(thFreeGs);
    headRow.appendChild(thBlocks);
    headRow.appendChild(thSteals);
    headRow.appendChild(thFouls);
    headRow.appendChild(thTurnovers);
    headRow.appendChild(thPlusMinus);


    table.style.display = "block";
    table.style.marginTop = "10px";
    table.appendChild(headRow);
    document.getElementById("Stats5").appendChild(table);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function getGameStatsOfPlayer(game, playerID)
{
    if(game === undefined)
    {
        return;
    }
    for(let i = 0 ; i < game.length; i++)
    {
        if(game[i].personId.toString() === playerID.toString())
        {
            return game[i];   
        }
    }
}
function getGameRow(game){
    const data = null;
    const xhr = new XMLHttpRequest();

    let dateID = game.startDateEastern;
    let gameID = game.gameId;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let x = this.responseText;
            const obj = JSON.parse(x);
            if(obj.stats !== undefined)
                myGameStats =  obj;
            else
                myGameStats = undefined;
        }
    });
    https://data.nba.net/prod/v1/20211005/0012100013_boxscore.json
    xhr.open("GET", "https://data.nba.net/prod/v1/" + dateID + "/" +gameID + "_boxscore.json",false);
    xhr.send(data);
}

function getLast5GamesData(teamID) {
    const data = null;
    const xhr = new XMLHttpRequest();
    let g;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let x = this.responseText;
            const obj = JSON.parse(x);
            let lastGame = obj.league.lastStandardGamePlayedIndex;
            let stats = obj.league.standard;

            Last5Games = (stats.slice(lastGame - 3, lastGame + 2));

            
        }
    });
    xhr.open("GET", "https://data.nba.net/prod/v1/2021/teams/" + teamID + "/schedule.json",false);
    xhr.send(data);
    
}

function httpGetPlayerStats(id) {
    const data = null;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let x = this.responseText;
            const obj = JSON.parse(x);
            let stats = obj.league.standard.stats.latest;
            let ppg = stats.ppg;
            let rpg = stats.rpg;
            let mpg = stats.mpg;
            let apg = stats.apg;
            let spg = stats.spg;
            let bpg = stats.bpg;
            let fgp = stats.fgp;
            let threepg = stats.tpp;
            let freethrowpg = stats.ftp;

            let bl = document.getElementById("myTBL");
            bl.style.display = "block";

            document.getElementById("ppg").innerText = ppg;
            document.getElementById("rpg").innerText = rpg;
            document.getElementById("mpg").innerText = mpg;
            document.getElementById("apg").innerText = apg;
            document.getElementById("spg").innerText = spg;
            document.getElementById("bpg").innerText = bpg;
            document.getElementById("fgp").innerText = fgp;
            document.getElementById("threegp").innerText = threepg;
            document.getElementById("freegp").innerText = freethrowpg;
        }
    });

    xhr.open("GET", "https://data.nba.net/prod/v1/2021/players/" + id + "_profile.json");
    xhr.send(data);
}