import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductSuggestionCard from '../components/ProductSuggestionCard';

const Products = ()=>{

    return(
        <div className="ProductsPage">
            <div className="ProductsPageContent">
                           <div className='TopPicksBox'>
                <div className="TopPicksTitle">
                    Top Picks
                </div>
                <div className="TopPicksContent">
                    <ProductSuggestionCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratingCount={4} reviewCount={1043} />
                    <ProductSuggestionCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratingCount={4} reviewCount={1043} />
                                        <ProductSuggestionCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratingCount={4} reviewCount={1043} />
                                                            <ProductSuggestionCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratingCount={4} reviewCount={1043} />
                                                                                <ProductSuggestionCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratingCount={4} reviewCount={1043} />
                                                                                                    <ProductSuggestionCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratingCount={4} reviewCount={1043} />
                </div>
            </div>
            <div className="ProductsTitle eight">
                <p>Category Name</p>
            </div>

            <div className="ProductsContent">
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />

                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} /><ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />

                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
                <ProductCard url="https://artandcreativity.com/wp-content/uploads/2019/03/food-photography-101.jpg" title="Pizza" description="The Only pizza that can be brought to any occassion on any day." price="880" ratings={4} />
            </div>
            </div>
        </div>
    )
}

export default Products;