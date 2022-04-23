const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Traveller.hasMany(Trips,{
    foreignKey: 'trips_id',
    unique: false,
    onDelete: 'CASCADE',
  });

Trips.belongsTo(Traveller,{
    foreignKey: 'traveller_id',
    unique: false,
    onDelete: 'CASCADE',
  });

Location.hasMany(Traveller,{
    foreignKey: 'traveller_id',
    unique: false
});

Traveller.hasMany(Location,{
    foreignKey: 'location_id',
    unique: false,
    onDelete: 'CASCADE',
  });
  
module.exports = { Traveller, Trips, Location };