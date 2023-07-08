let score1 = 0;
let score2 = 0;

document.getElementById('team1score').addEventListener('click', function() {
    score1++;
    document.getElementById('team1').textContent = score1;
});

document.getElementById('team2score').addEventListener('click', function() {
    score2++;
    document.getElementById('team2').textContent = score2;
});

document.getElementById('reset').addEventListener('click', function() {
    score1 = 0;
    score2 = 0;
    document.getElementById('team1').textContent = score1;
    document.getElementById('team2').textContent = score2;
});