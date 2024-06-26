// Hide output blocks
document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', 
function(e) {
    let lbs = e.target.value;
    document.getElementById('output').style.visibility = 'visible';

    document.getElementById('gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(2);
    document.getElementById('ocOutput').innerHTML = (lbs*16).toFixed(2);
});