function Tour(country, people, days, tariff){
    this.country = country;
    this.people = people;
    this.days = days;
    this.tariff = tariff;
    this.cost = function(){
        return people*days*tariff;
    }
}
var turkeyTour  = new Tour("Turkey", 5, 7, 87);
console.log('Country:',turkeyTour.country,'\nNumber of people:', turkeyTour.people,'\nNumber of days: '+
+ turkeyTour.days,'\nCountry tariff: $' + turkeyTour.tariff,'\nCost: $' + turkeyTour.cost())