document.getElementById('scrollHome').addEventListener('click', function(){
    document.getElementById('targetHome').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('scrollServ').addEventListener('click', function(){
    document.getElementById('targetServ').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('scrollPoints').addEventListener('click', function(){
    document.getElementById('targetPoints').scrollIntoView({behavior: 'smooth'});
});