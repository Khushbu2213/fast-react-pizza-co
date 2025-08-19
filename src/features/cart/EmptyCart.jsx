import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='py-8 px-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='p-8 uppercase font-bold border rounded-md'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
