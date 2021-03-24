console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 2 .....');
console.log('......................................');
console.log('......................................');

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            margherita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    return `Olá ${order.order.delivery.deliveryPerson}, 
    entrega para: ${order.name}, 
    Telefone: ${order.phoneNumber},
    R. ${order.address.street}, 
    Nº: ${order.address.number}
    AP: ${order.address.apartment}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.order.delivery.price = 'R$50,00';
    return `Olá ${order.order.delivery.deliveryPerson},
    o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type}
    é de ${order.order.delivery.price}`;
}

console.log(orderModifier(order));