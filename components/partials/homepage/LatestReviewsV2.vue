<template>
    <section class="ps-section--reviews ps-reviews--2">
        <div class="ps-section__content">
            <div class="row">
                <div class="col-12 col-sm-3 col-md-3">
                    <img class="ps-section__thumbnail" src="/img/promotion/home6-latest-review_280x.png" alt="">
                </div>
                <div class="col-12 col-sm-9 col-md-9">
                    <div class="ps-section__carousel">
                        <h3 class="ps-section__title"> <img src="/img/quote-icon.png" alt>Отзывы наших клиентов</h3>
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
                </div>
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
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }
            },
            reviews: reviews
        }
    }
}
</script>
