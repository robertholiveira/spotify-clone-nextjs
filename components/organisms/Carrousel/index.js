import { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import TrackItem from "@/components/molecules/TrackItem";
import PlaylistItem from "@/components/molecules/PlaylistItem";
import Title from "@/components/atoms/Title";
import ArtistItem from "@/components/molecules/ArtistItem";
import AlbumItem from "@/components/molecules/AlbumItem";

import styles from "./styles.module.scss";

function Carrousel({ items, title, type }) {
  const hasItems = items && items.length > 0;

  const paginationRef = useRef(null);

  const renderItem = (item) => {
    if (type === "artist") return <ArtistItem artist={item} />;
    if (type === "track") return <TrackItem track={item} />;
    if (type === "playlist") return <PlaylistItem playlist={item} />;
    if (type === "album") return <AlbumItem album={item} />;
  };

  return (
    hasItems && (
      <div className={styles.listWrapper}>
        <Title>{title}</Title>
        <Swiper
          pagination={{
            el: paginationRef.current,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1250: {
              slidesPerView: 6,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
              {renderItem(item)}
            </SwiperSlide>
          ))}
          <div ref={paginationRef} className={styles.swiperPagination} />
        </Swiper>
      </div>
    )
  );
}

export default Carrousel;
