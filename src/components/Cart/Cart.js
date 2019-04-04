import React, {Component} from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';

export default class Navbar extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumn />
                                    <CartList value={value} />
                                </React.Fragment>
                            );
                        }

                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}