module.exports = {

    getFavorites: (req, res) => {
        const userId = req.session.passport.user.id;
        const dbInstance = req.app.get('db');
        dbInstance.get_favorites(userId).then((result) => {
            res.status(200).send(result.data);
        })
    },

    addToFavorites: (req, res) => {
        const userId = req.session.passport.user.id;
        const dbInstance = req.app.get('db');
        dbInstance.add_to_favorites([
            userId,
            req.body.name,
            req.body.url,
            req.body.type,
            req.body.index
        ]).then((result) => {
            res.status(200).send(result.data);
        })
    },

    remFromFavorites: (req, res) => {
        const userId = req.session.passport.user.id;
        const dbInstance = req.app.get('db');
        dbInstance.rem_from_favorites([
            req.params.id,
            userId
        ]).then((result) => {
            res.status(200).send(result.data)
        })
    },
}