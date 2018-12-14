module.exports = {
    
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then((inventory) => {
            res.status(200).json(inventory)
        })
        .catch(err => console.log(err))
    },

}