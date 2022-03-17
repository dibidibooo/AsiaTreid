<template>
    <div class="ps-page ps-layout">
        <div class="ps-landing">
            <banner-landing />
            <section-landing
                :data-list="listHome"
                title="Home pages"
                id="home-block"
            />
            <section-landing
                :data-list="listCategory"
                title="Category / Shop"
            />
            <section-landing :data-list="listProduct" title="Product pages" />
            <section-landing
                :data-list="listOther"
                title="Other"
                item-class="no-margin"
            />
            <landing-footer />
        </div>
    </div>
</template>

<script>
import BannerLanding from '~/components/partials/landingpage/BannerLanding';
import SectionLanding from '~/components/partials/landingpage/SectionLanding';
import LandingFooter from '~/components/partials/landingpage/LandingFooter';

export default {
    layout: 'empty',
    components: {
        BannerLanding,
        SectionLanding,
        LandingFooter
    },
    data() {
        return {
            listHome: [
                {
                    image: 'img/landing/Home-1.png',
                    name: 'Home 1',
                    url: 'https://mymedi.vuetemplate.com'
                },
                {
                    image: 'img/landing/Home-2.png',
                    name: 'Home 2',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-2'
                },
                {
                    image: 'img/landing/Home-3.png',
                    name: 'Home 3',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-3'
                },
                {
                    image: 'img/landing/Home-4.png',
                    name: 'Home 4',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-4'
                },
                {
                    image: 'img/landing/Home-5.png',
                    name: 'Home 5',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-5'
                },
                {
                    image: 'img/landing/Home-6.png',
                    name: 'Home 6',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-6'
                },
                {
                    image: 'img/landing/Home-7.png',
                    name: 'Home 7',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-7'
                },
                {
                    image: 'img/landing/Home-8.png',
                    name: 'Home 8',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-8'
                },
                {
                    image: 'img/landing/Home-9.png',
                    name: 'Home 9',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-9'
                },
                {
                    image: 'img/landing/Home-10.png',
                    name: 'Home 10',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-10'
                },
                {
                    image: 'img/landing/Home-11.png',
                    name: 'Home 11',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-11'
                },
                {
                    image: 'img/landing/Home-12.png',
                    name: 'Home 12',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-12'
                },
                {
                    image: 'img/landing/Home-13.png',
                    name: 'Home 13',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-13'
                },
                {
                    image: 'img/landing/Home-14.png',
                    name: 'Home 14',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-14'
                },
                {
                    image: 'img/landing/Home-15.png',
                    name: 'Home 15',
                    url: 'https://mymedi.vuetemplate.com/homepage/home-15'
                }
            ],
            listCategory: [
                {
                    image: '/img/landing/Category-1.png',
                    name: 'Promo category',
                    url: 'https://mymedi.vuetemplate.com/shop/promo-category'
                },
                {
                    image: '/img/landing/Category-2.png',
                    name: 'Category grid with bestsellers',
                    url: 'https://mymedi.vuetemplate.com/shop/grid'
                },
                {
                    image: '/img/landing/Category-3.png',
                    name: 'Category grid with product features',
                    url: 'https://mymedi.vuetemplate.com/shop/grid-detail'
                },
                {
                    image: '/img/landing/Category-4.png',
                    name: 'List',
                    url: 'https://mymedi.vuetemplate.com/shop/list'
                },
                {
                    image: '/img/landing/Category-5.png',
                    name: 'Advanced Grid',
                    url: 'https://mymedi.vuetemplate.com/shop/list-load-more'
                },
                {
                    image: '/img/landing/Category-5.png',
                    name: 'Category Grid with header green',
                    url: 'https://mymedi.vuetemplate.com/shop/grid-green'
                },
                {
                    image: '/img/landing/Category-5.png',
                    name: 'Category Grid with header dark',
                    url: 'https://mymedi.vuetemplate.com/shop/grid-dark'
                }
            ],
            listProduct: [
                {
                    image: '/img/landing/Product-1.png',
                    name: 'Product with column',
                    url: 'https://mymedi.vuetemplate.com/product/layout/layout-1/2'
                },
                {
                    image: '/img/landing/Product-2.png',
                    name: 'Full width product',
                    url: 'https://mymedi.vuetemplate.com/product/layout/layout-2/3'
                },
                {
                    image: '/img/landing/Product-3.png',
                    name: 'Product without tabs',
                    url: 'https://mymedi.vuetemplate.com/product/layout/layout-3/4'
                },
                {
                    image: '/img/landing/Product-4.png',
                    name: '2 columns with simple description',
                    url: 'https://mymedi.vuetemplate.com/product/layout/layout-4/5'
                },
                {
                    image: '/img/landing/Product-5.png',
                    name: 'Advanced product on color background',
                    url: 'https://mymedi.vuetemplate.com/product/layout/layout-5/6'
                },
                {
                    image: '/img/landing/Product-5.png',
                    name: 'Product with header green',
                    url: 'https://mymedi.vuetemplate.com/product/layout/layout-6/7'
                },
                {
                    image: '/img/landing/Product-5.png',
                    name: 'Product with header dark',
                    url: 'https://mymedi.vuetemplate.com/product/layout/layout-7/8'
                }
            ],
            listOther: [
                {
                    image: '/img/landing/Blog-1.png',
                    name: 'Blog 1',
                    url: 'https://mymedi.vuetemplate.com/blog/sidebar-1'
                },
                {
                    image: '/img/landing/Blog-2.png',
                    name: 'Blog 2',
                    url: 'https://mymedi.vuetemplate.com/blog/sidebar-2'
                },
                {
                    image: '/img/landing/Blog-post-1.png',
                    name: 'Blog post with column',
                    url: 'https://mymedi.vuetemplate.com/blog/post-detail-1/2'
                },
                {
                    image: '/img/landing/Blog-post-2.png',
                    name: 'Blog post full width',
                    url: 'https://mymedi.vuetemplate.com/blog/post-detail-2/2'
                },
                {
                    image: '/img/landing/Portfolio-1.png',
                    name: 'Portfolio',
                    url: 'https://mymedi.vuetemplate.com/portfolio'
                },
                {
                    image: '/img/landing/About-Us.png',
                    name: 'About',
                    url: 'https://mymedi.vuetemplate.com/about-us'
                },
                {
                    image: '/img/landing/Comming-Soon-1.png',
                    name: 'Comming Soon 1',
                    url: 'https://mymedi.vuetemplate.com/coming-soon/v1'
                },
                {
                    image: '/img/landing/Comming-Soon-2.png',
                    name: 'Comming Soon 2',
                    url: 'https://mymedi.vuetemplate.com/coming-soon/v2'
                },
                {
                    image: '/img/landing/Contact.png',
                    name: 'Contact',
                    url: 'https://mymedi.vuetemplate.com/contact-us'
                },
                {
                    image: '/img/landing/404.png',
                    name: '404',
                    url: 'https://mymedi.vuetemplate.com/404'
                }
            ]
        };
    }
};
</script>
