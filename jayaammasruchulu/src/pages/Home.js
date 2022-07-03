import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import AddressBox from '../components/AddressBox';
import ReviewBox from '../components/ReviewBox';
import ProductSuggestionCard from '../components/ProductSuggestionCard';
import RightButton from '../components/RightButton';
import CategoryBox from '../components/CategoryBox';

export default class Home extends Component {
  render() {
    return (
      <div style={{width:"100%"}}>
        <Header />
        <ProductCard />
        <AddressBox />
        <ReviewBox />
        <ProductSuggestionCard />
        <RightButton reversed={true}/>
        <RightButton reversed={false} />
        <div style={{display:"flex",justifyContent:"space-between"}}>
           <CategoryBox title="Pastries"/>
        <CategoryBox title="Cookies"/>
        </div>
             <CategoryBox title="Breads" />
        <Footer/>
      </div>
    )
  }
}
