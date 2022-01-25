export function reducer(state, { type, payload }) {
  switch (type) {
      case 'SET_GOODS': 
      return {
          ...state,
          goods: payload || [],
          laoding: false
      }
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };
    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }

    case "INC_QUANTITY": 
    return {
        ...state,
        order: state.order.map((el) => {
            if (el.id === payload.id) {
              const newQoantity = el.quantity + 1;
              return {
                ...el,
                quantity: newQoantity,
              };
            } else {
              return el;
            }
          }),
    }
    case 'DEC_QUANTITY' : 
    return {
        ...state,
        order: state.order.map((el) => {
            if (el.id === payload.id) {
              const newQoantity = el.quantity - 1;
              return {
                ...el,
                quantity: newQoantity >= 0 ? newQoantity : 0,
              };
            } else {
              return el;
            }
          })
    }
      
    default:
      return state;
  }
}
