const router = require(`express`).Router();
const { Traveller, Location: Traveller, Trips } = require(`../../models`);

// POST creates location data
router.post(`/`, async (req, res) => {
    try {
        const travellerData = await Traveller.create(req.body);
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET
router.get(`/`, async (req, res) => {
    try {
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET by :id
router.get(`/:id`, async (req, res) => {
    try {
        const travellerData = await Traveller.findByPk(req.params.id, {
            include: [{ model: Location, through: Trips, as: `travellers_location`}],
        });

        if (!travellerData) {
            res.status(404).json({ message: `No location found with that id!`});
            return;
        }

        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE by :id removes location and returns a successful response in Insomnia
router.delete(`/:id`, async (req, res) => {
    try {
        const travellerData = await Traveller.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!travellerData) {
            res.status(404).json({ message: `No location found with that id!`});
            return;
        }

        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;