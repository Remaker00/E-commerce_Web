const Item = require('../model/items');

const addItem = async (req, res) => {
    try {
        let cartItems = req.body;

        if (!Array.isArray(cartItems)) {
            cartItems = [cartItems];
        }

        const { email, id } = req.user;

        const itemsWithUser = cartItems.map((item) => ({
            ...item,
            user: {
                email,
                id
            }
        }));

        const savedItems = await Item.insertMany(itemsWithUser);
        res.json(savedItems);
    } catch (error) {
        console.error('Error saving items:', error);
        res.status(500).json({ error: 'An error occurred while saving the items' });
    }
};

const getCartItems = async (req, res) => {
    try {
        const { email, id } = req.user;

        const cartItems = await Item.find({
            'user.email': email,
            'user.id': id
        });
        res.json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'An error occurred while fetching cart items' });
    }
};

module.exports = {
    addItem,
    getCartItems
};
