module.exports = {
    getAll: (req, res, next) => {
        console.log('contact_cotrollers.getAll hit!')
        const dbInstance = req.app.get('db');

        dbInstance.read_contacts()
            .then((contacts) => res.status(200).send(contacts))
            .catch((err) => res.status(500).send(err))
    }
}