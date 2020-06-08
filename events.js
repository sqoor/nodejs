const events = require('events');
const util2 = require('util');


const Person = function (name) {
    this.name = name;
}

util2.inherits(Person, events.EventEmitter);

const james = new Person('James');
const ryu = new Person('Ryu');
const marry = new Person('Marry');

const people = [james, ryu, marry];

people.forEach(person => {
    person.on('speak', words => {
        console.log(this.name + ' said: ' + words);
    });
});



james.emit('speak', 'Hi');
ryu.emit('speak', 'I don\'t to see you');
marry.emit('speak', 'Go go ');

