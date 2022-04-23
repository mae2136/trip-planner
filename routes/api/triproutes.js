const router = require(`express`).Router();
const { Trips } = require(`../../models`);

// POST creates trip data between associated travllers and locations
router.post(`/`, async (req, res) => {
    try {
        const tripData = await Trips.create(req.body);
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE by :id removes trip and returns a successful response in Insomnia
router.delete(`/:id`, async (req, res) => {
    try {
        const tripData = await Trips.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!tripData) {
            res.status(404).json({ message: `No trip found with that id!`});
            return;
        }

        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;