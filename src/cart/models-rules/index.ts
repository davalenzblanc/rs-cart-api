import { Cart, CartItem } from '../models';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: Cart): number {
  console.log(cart);
  // return cart ? cart.reduce((acc: number, { product: { price }, count }: CartItem) => {
  //   return acc += price * count;
  // }, 0) : 0;
  return 0;
}
