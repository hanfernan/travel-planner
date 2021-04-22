const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');


Traveller.hasMany(Location, {
    foreignKey: 'traveller_id',
});

Traveller.belongsToMany(Location, {through: Trip})

Location.hasMany(Traveller, {
    foreignKey: 'traveller_id',
});

//locations belong to many travelers through trips

module.exports = { Traveller, Location, Trip};