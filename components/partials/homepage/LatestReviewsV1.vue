<template>
    <section class="ps-section--reviews" style="background-image: url('/img/roundbg.png');"> 
        <h3 class="ps-section__title"> <img src="/img/quote-icon.png" alt>Отзывы наших клиентов</h3>
        <div class="ps-section__content">
            <div class="ps-swiper">
                <div class="swiper" v-swiper:reviewSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(item, index) in reviews"
                            :key="index"
                        >
                            <review-item :item="item" />
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination pagination-review-1"></div>
            </div>
        </div>
    </section>
</template>

<script>
import { reviews } from '~/static/data/common.json';
import ReviewItem from '~/components/elements/commons/ReviewItem';

export default {
    components: { ReviewItem },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 11000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.pagination-review-1',
                    clickable: true
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 5
                    },
                    1200: {
                        slidesPerView: 5
                    }
                }
            },
            reviews: reviews
        }
    }
}
</script>
