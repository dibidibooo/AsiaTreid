<template>
    <v-main class="ps-page">
        <header-v1 />
        <header-mobile />
        <div class="ps-home ps-home--1">
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <div class="ps-promo ps-not-padding">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-4"
                                v-for="(item, index) in promotionTop"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <category-collection />
                <latest-product-carousel
                    title="Недавно просмотренные"
                    :dataList="latestProduct"
                />
                <div class="container">
                    <delivery />
                </div>
                <best-deals-product-carousel
                    title="Лучшие предложения недели!"
                    :dataList="bestDealProduct"
                />
                <bestsellers-product :dataList="bestsellerProduct" />
                <div class="ps-promo">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-6"
                                v-for="(item, index) in promotionCenter"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <featured-product
                    title="Рекомендуемые продукты"
                    :dataList="featuredProduct"
                />
                <latest-reviews-v1 />
                <newsletter />
            </div>
        </div>
        <footer-v1 />
    </v-main>
</template>
<script>
import FooterV1 from '~/components/shared/footers/FooterV1';
import HeaderV1 from '~/components/shared/headers/HeaderV1';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV1';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import PromoItem from '~/components/elements/commons/PromoItem';
import CategoryCollection from '~/components/partials/homepage/CategoryCollection';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import { getProducts } from '~/repositories/ProductRepository';
import { getProductByCollection } from '~/repositories/CollectionRepository';
import Delivery from '~/components/partials/homepage/Delivery';
import BestDealsProductCarousel from '~/components/partials/homepage/BestDealsProductCarousel';
import BestsellersProduct from '~/components/partials/homepage/BestsellersProduct';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import LatestReviewsV1 from '~/components/partials/homepage/LatestReviewsV1';
import Newsletter from '~/components/partials/homepage/Newsletter';
import { home1Banner } from '~/static/data/banners.json';

export default {
    layout: 'home-default',
    components: {
        FooterV1,
        HeaderV1,
        HeaderMobile,
        SectionBanner,
        PromoItem,
        CategoryCollection,
        LatestProductCarousel,
        Delivery,
        BestDealsProductCarousel,
        BestsellersProduct,
        FeaturedProduct,
        LatestReviewsV1,
        Newsletter
    },
    data() {
        return {
            banners: home1Banner,
            promotionTop: [
                {
                    banner: '/img/promotion/bgbanner3.png',
                    badge: 'Новое поступление',
                    title: 'Строительные <br>материалы',
                    btnName: 'Подробнее',
                    classTitle: 'mb-20'
                },
                {
                    banner: '/img/promotion/bgbanner2.png',
                    title: 'Все для дома',
                    btnName: 'Подробнее',
                    sale: '-10%'
                },
                {
                    banner: '/img/promotion/bgbanner1.png',
                    title: 'Уровнемер скважинный <br>тросовый лотовый',
                    btnName: 'Подробнее',
                    price: '275,000',
                    del: '300,000',
                    classTitle: 'text-white'
                }
            ],
            latestProduct: [],
            promotionCenter: [
                {
                    banner: '/img/promotion/bg-banner4.jpg',
                    badge: 'Новинка',
                    title: 'Все для чистки <br>и уборки',
                    btnName: 'Подробнее',
                    classTitle: 'mb-20'
                },
                {
                    banner: '/img/promotion/bgbanner1.jpg',
                    title: 'Канцтовары и <br>прочее для <br>офиса',
                    btnName: 'Подробнее',
                }
            ],
            featuredProduct: [],
            bestDealProduct: [],
            bestsellerProduct: []
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8
        }
        this.latestProduct = await getProducts(params);
        this.featuredProduct = await getProductByCollection('featured-products');
        this.bestDealProduct = await getProductByCollection('best-deal-of-week');
        this.bestsellerProduct = await getProductByCollection('top-5-best-sellers');
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-1.scss';
</style>
