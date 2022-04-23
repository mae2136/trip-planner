const router = require(`express`).Router();
const locationRoutes = require(`./locationroutes`);
const travellerRoutes = require(`./travellersroutes`);
const tripRoutes = require(`./triproutes`);

router.use(`/locations`, locationRoutes);
router.use(`/trips`, tripRoutes);
router.use(`/travellers`, travellerRoutes);

module.exports = router;