const Brand = require('./Brand.js');
const Wine = require('./Wine.js');
const Vintage = require('./Vintage.js');
const Transaction = require('./Transaction.js');
const User = require('./User.js');

// Brand vs Wine - one to many
Brand.hasMany(Wine, {
    foreignKey: 'brand_id',
    onDelete: 'CASCADE',
});

Wine.belongsTo(Brand, {
    foreignKey: 'brand_id',
});

// Wine vs Vintage - one to many

Wine.hasMany(Vintage, {
    foreignKey: 'wine_id',
    onDelete: 'CASCADE',
});

Vintage.belongsTo(Wine, {
    foreignKey: 'wine_id',
});

// Vintage vs Transaction - one to many

Vintage.hasMany(Transaction, {
    foreignKey: 'vintage_id',
    onDelete: 'CASCADE',
});

Transaction.belongsTo(Vintage, {
    foreignKey: 'vintage_id',
});

// User vs Transaction - one to Many

User.hasMany(Transaction, {
    foreignKey: 'user_id',    
});

Transaction.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = {
    Brand,
    Wine,
    Vintage,
    Transaction,
    User,
};
