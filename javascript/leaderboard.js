var usernames = [];
var finalScores = [];

//to add values to array
function showOnBoard() {
    var name = document.getElementById("username").value;
    var score = document.getElementById("score").value;

    usernames.push(name);
    finalScores.push(score);

    printing();
}

//to print output
function printing() {
    var print = `
        <table>
            <tr>
                <th>Player</th>
                <th>Number of Tries</th>
            </tr>`;
                
    for (var i = 0; i < usernames.length; i++) {
        print += "<tr>";
        
        for (var j = 0; j < 1; j++) {
            print += "<td>" + usernames[i] + "</td>";
            print += "<td>" + finalScores[i] + "</td>";
        }

        print += "</tr>";
    }

    print += "</table>";
    document.getElementById("scoreTable").innerHTML = print;
}