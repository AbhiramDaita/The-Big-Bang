import React from 'react';
import ReviewBox from '../components/ReviewBox';
import ProductSuggestionCard from '../components/ProductSuggestionCard';
import RightButton from '../components/RightButton';
import { InputLabel, Rating, Select,MenuItem,FormControl, Box } from '@mui/material';
import Burgir from '../images/Burgir.svg';
import Cart from '../images/shopping_cart.svg';
import Heart from '../images/Heart.svg';
import Header from '../components/Header';
const ProductPage = ()=>{
    const [quantity,setQuantity] = React.useState(0);
    const handleChange =(event) =>{
        setQuantity(event.target.value);
    }
    return(
        <div style={{width:"100%"}}>
        <Header />
                    <div className="ProductPage">
            <div className="ProductDet">
                <div className="ProductImages">
                <div className="SelectedImage">
        
                    <img src={Burgir} alt="Burgir" />
                </div>
                <div className="ImagesList">
                    <img src={Burgir} alt="Burgir" width="12%"  style={{marginRight:"10px"}}/>
                    <img src={Burgir} alt="Burgir" width="12%" style={{marginRight:"10px"}}/>
                    <img src={Burgir} alt="Burgir" width="12%" style={{marginRight:"10px"}}/>
                    <img src={Burgir} alt="Burgir" width="12%" style={{marginRight:"10px"}}/>
                </div>
            </div>
            <div className="ProductContent">
                <div className="ProductTitle">
                    <h1 style={{marginBottom:"5px"}}>Veg Burger</h1>
                    <Rating name="read-only" value="4.5" readOnly /><span>10,040</span>
                </div>
                <div className="ProductDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet placerat arcu. Phasellus fermentum mi sem, et convallis orci tempus eu. Nam quis vulputate velit, ut condimentum nibh. Morbi placerat ipsum rhoncus eros tempor, nec rhoncus sem aliquet. Aliquam quis purus tristique, imperdiet augue eu, tempus arcu. Phasellus vitae ex pretium, vehicula turpis sed, dictum est. Sed mattis nisl sed felis feugiat vestibulum. Donec rhoncus at tortor ut luctus. Donec urna dui, varius suscipit semper nec, posuere sit amet dui. Nullam pulvinar sollicitudin dolor sit amet sagittis. Mauris id laoreet metus. Pellentesque euismod augue ut tincidunt pharetra. Quisque ac viverra nunc. Duis non quam eget lacus interdum lobortis nec vel dui.

In hac habitasse platea dictumst. Nulla volutpat fringilla orci id blandit. Nullam eget molestie ante, sit amet tristique erat. Suspendisse molestie vel turpis quis auctor. Integer orci sem, ultricies non ante ut, tincidunt porttitor dui. Morbi lobortis posuere dictum. Aenean euismod purus eget tortor dignissim, non porta tellus ultricies. Nam ligula sem, rutrum eget pellentesque ac, lacinia nec sapien. Curabitur et consequat arcu. Quisque ut dui lacus. Proin varius dapibus neque et accumsan. Suspendisse dictum nulla nisi, quis tempor lacus facilisis eget.


                </div>
                <div className="ProductPriceDet">
                    <div className="ProductPrice">
                        <p style={{fontSize:"25px",marginTop:"10px",fontFamily:"Ubuntu,sans-serif"}}>&#8377; 980 <sub>/kg</sub></p>
                    </div>
                    <div className="ProductQuantity">
                        <Box sx={{minWidth:120}}>
                                      <FormControl fullWidth>
                            <InputLabel id="quantity-Select-label">Quantity</InputLabel>
                            <Select labelId='quantity-Select-label'
                            id="quantitiy-Select"
                            value={quantity}
                            label="Quantity"
                            onChange={handleChange}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </div>
                </div>
                <div className="ActionButtons">
                    <div className="CartBtn">
                        <img src={Cart} alt="Cart"/>
                        <p style={{marginLeft:"20px"}}>Add to cart</p>
                    </div>
                    <div className="FavBtn">
                        <img src={Heart} alt="Heart" width="12%"/>
                        <p style={{marginLeft:"20px"}}>Favourite</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="FeaturedProducts">
            <h2 style={{textDecoration:"underline",textDecorationColor:"#FBBC04",textAlign:"start"}}>Featured Products</h2>
 
            <div style={{display:"flex",alignItems:"center"}}>
            <div className="btns">
                <RightButton reversed={true}/>
                <RightButton />
            </div>
            <ProductSuggestionCard />
            <ProductSuggestionCard />
            <ProductSuggestionCard />
            <ProductSuggestionCard />
            <ProductSuggestionCard />
            <ProductSuggestionCard />
            <ProductSuggestionCard />
           

            </div>
        </div>
        <div className="ProductReviews">
                <h2 style={{textDecoration:"underline",textDecorationColor:"#FBBC04",textAlign:"start"}}>Product Reviews</h2>
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
        </div>

        </div>
        </div>
    )
}

export default ProductPage;