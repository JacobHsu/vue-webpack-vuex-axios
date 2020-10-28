const _products = [
    { id: 4, title: 'iPhone 12 Pro', price: 399, inventory: 3 }
]

function getProducts(cb) {
    setTimeout(() => cb(_products), 100)
};

const Request = ({ commit /*, dispatch, state*/ }, type, options, cbs) => {
    return new Promise((resolve, reject) => {
        getProducts(products => {
          commit(type, products);
          resolve();
        });
    });
};

export default Request;
