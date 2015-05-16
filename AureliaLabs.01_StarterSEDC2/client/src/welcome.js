import {computedFrom} from 'aurelia-framework';

export class Welcome{
    heading = 'QWERT - Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';

    numberA = 5;
    numberB= 10;
    get result() {
        return parseInt(this.numberA) + parseInt(this.numberB);
    }

    //Getters can't be observed with Object.observe, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
    //@computedFrom('firstName', 'lastName')
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    welcome(){
        alert(`Welcome, ${this.fullName}!`);
}
}

export class UpperValueConverter {
    toView(value){
        return value && value.toUpperCase();
    }
}
