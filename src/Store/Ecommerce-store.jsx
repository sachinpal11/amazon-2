import { createContext, useEffect, useState } from "react";


export const EcommerceStoreContext = createContext({
    AllProductData: [],
    BannerData: [],
    CategoryProductBanner: [],
    GeneralCardData: []
});

function EcommerceStoreProvider({ children }) {

    const [AllProductData, setAllProductData] = useState([]);

    const Category_Product_Banner = [
        {
            img: "https://img-prd-pim.poorvika.com/product/Apple-iphone-16-white-128gb-Front-Back-View.png",
            Category: "Smart Phones"
        },
        {
            img: "https://www.qnetindia.net/wp-content/uploads/2023/01/Personal_Care_Groupshot_Mobile.png",
            Category: "Beauity Products"
        }, {
            img: "https://sslimages.shoppersstop.com/sys-master/images/h13/hca/9308844064798/200347265_9900.png_2000Wx3000H",
            Category: "Children Toys "
        }, {
            img: "https://gadgetshieldz.com/cdn/shop/files/playstation-5-ps5-disc-edition-skins-fabrix.webp?v=1705989610",
            Category: "Video Games"
        }
    ]

    const GeneralCard_Data = [
        {
            title: "Amazon Basics",
            Desc: "Shop Trendy things with On day Delivery!",
            img: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/03/xbox-elite-wireless-controller-series-2-product.png"
        },
        {
            title: "Deals & Promotions",
            desc: "Shop Trendy things with On day Delivery!",
            img: "https://cdn.pixabay.com/photo/2013/07/12/13/46/clock-147257_640.png"
        }]
    const Banner_Default_Data = [
        {
            MainTitle: "COMPUTER & ASSESSORIES",
            MainDesc: "Discover the latest in computing technology with our wide range.",
            img: "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha",
            price: "2,999",
            reviews: "1,233",
            ProductTitle: "20LXPR Sony HeadPhone",
            discount: "30%"
        },
        {
            MainTitle: "GAMING MOUSE",
            MainDesc: "Elevate your gaming experience with precision and speed.",
            img: "https://images-cdn.ubuy.co.in/663dfd792dcfd3416738e2f9-razer-basilisk-v3-x-hyperspeed-wireless.jpg",
            price: "2,199",
            reviews: "2,345",
            ProductTitle: "Razer DeathAdder V2 Gaming Mouse",
            discount: "40%"
        },
        {
            MainTitle: "LUXURY PERFUMES",
            MainDesc: "Indulge in the elegance of our exclusive perfume collection .",
            img: "https://www.themancompany.com/cdn/shop/products/1_38.png?v=1669887524",
            price: "4,999",
            reviews: "567",
            ProductTitle: "The Men Company Perfume",
            discount: "50%"
        },
        {
            MainTitle: "FASHION WATCHES",
            MainDesc: "Discover timeless elegance with our luxury collection of fashion watches.",
            img: "https://cdn.prod.website-files.com/645cf4984224ff40baa713c3/64678387fa0d1378f3676813_Product-Page-Image-Rolex-OP-41-124300-0005.png",
            price: "7,999",
            reviews: "876",
            ProductTitle: "Rolex Submariner Stainless Steel Watch",
            discount: "10%"
        }];
    const [BannerData, setBannerData] = useState(Banner_Default_Data);
    const [CategoryProductBanner, setCategoryProductBanner] = useState(Category_Product_Banner);
    const [GeneralCardData, setGeneralCardData] = useState([
        {
            title: "Amazon Basics",
            desc: "Shop Trendy things with On day Delivery!",
            img: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/03/xbox-elite-wireless-controller-series-2-product.png"
        },
        {
            title: "Deals & Promotions",
            desc: "Shop Trendy things with On day Delivery!",
            img: "https://cdn.pixabay.com/photo/2013/07/12/13/46/clock-147257_640.png"
        }]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProductData(data.products);
            }
            );
    }, []);


    return (
        <EcommerceStoreContext.Provider value={{ AllProductData, BannerData, CategoryProductBanner, GeneralCardData }}>
            {children}
        </EcommerceStoreContext.Provider >
    )
}

export default EcommerceStoreProvider
