import { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.module.scss";
import {
  TrackItem,
  PlaylistItem,
  Title,
  ArtistItem,
  AlbumItem,
} from "@/components";

function List({ items, title, type }) {
  const hasItems = items && items.length > 0;

  const paginationRef = useRef(null);

  const renderItem = (item, i) => {
    if (type === "artist") return <ArtistItem artist={item} key={i} />;
    if (type === "track") return <TrackItem track={item} key={i} />;
    if (type === "playlist") return <PlaylistItem playlist={item} key={i} />;
    if (type === "album") return <AlbumItem album={item} key={i} />;
  };

  return (
    hasItems && (
      <div className={styles.listWrapper}>
        <Title>{title}</Title>
        <Swiper
          // install Swiper modules
          pagination={{
            el: paginationRef.current,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={5}
        >
          {items.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide}>
              {renderItem(item, index)}
            </SwiperSlide>
          ))}
          <div ref={paginationRef} className={styles.swiperPagination} />
        </Swiper>
      </div>
    )
  );
}

export default List;
