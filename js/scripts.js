var repository = [ 
    {name: 'Bulbasaur', height: 21, types: ['grass', 'poison'] },
    {name: 'Charmander', height: 14, types: ['fire'] },
    {name: 'Butterfree', height: 7, types: ['bug',] }
];

for (var i=0; i < repository.length; i++) {
    if (repository[i].height == 7) {
        document.write(repository[i].name + ' (height: '  + repository[i].height + ') ' + '<br>');
    } else if (repository[i].types[0] === 'grass') {
        document.write(repository[i].name +  ' (height: ' + repository[i].height + ') -Wow thats big! ' + '<br>');
    } else if (repository[i].types[0] === 'fire') {
        document.write(repository[i].name + '(height: ' + repository[i].height + ') ' + '<br>');
    } else if (repository[i].types[1] === 'bug') {
        document.write(repository[i].name + '(height: ' + repository[i].height + ') ' + '<br>');
    } else {
        document.write(repository[i].name + ' (height: ' + repository[i].height + ') -Wow thats big! ' + '<br>');
    }
}

