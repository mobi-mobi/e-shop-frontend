// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./SwiperComponent.css"
import ProductCardComponent from './ProductCardComponent';

const SwiperComponent = ({products}) => {
  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="productSwiper"
  >
    {
        products.map((product) => (
            <SwiperSlide key={product.id}><ProductCardComponent productData={product}/></SwiperSlide>
        ))
    }
  </Swiper>
  );
};

export default SwiperComponent