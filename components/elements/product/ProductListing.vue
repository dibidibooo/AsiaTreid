<template>
    <div class="ps-product ps-product--list" v-if="product">
        <div class="ps-product__content">
            <div class="ps-product__thumbnail">
                <nuxt-link
                    class="ps-product__image"
                    :to="`/product/layout/layout-1/${product.id}`"
                    v-if="product.thumbnail"
                >
                    <figure>
                        <img
                            :src="baseDomain + product.thumbnail.url"
                            alt="alt"
                            onerror="this.onerror=null; this.src='/img/placeholder.png'"
                        />
                        <img
                            :src="baseDomain + product.thumbnail_back.url"
                            alt="alt"
                            onerror="this.onerror=null; this.src='/img/placeholder.png'"
                        /></figure
                ></nuxt-link>
                <div class="ps-product__actions">
                    <div
                        class="ps-product__item"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Quick view"
                    >
                        <a href="#" @click.prevent="productQuickview()"
                            ><i class="fa fa-search"></i
                        ></a>
                    </div>
                </div>
                <div class="ps-product__badge"></div>
            </div>
            <div class="ps-product__info">
                <nuxt-link class="ps-product__branch" to="/">Asia-Treid</nuxt-link>
                <h5 class="ps-product__title">
                    <nuxt-link :to="`/product/layout/layout-1/${product.id}`">{{
                        product.name
                    }}</nuxt-link>
                </h5>
                <div class="ps-product__rating">
                    <rating-component :value="rating" />
                    <span class="ps-product__review">(Оценка)</span>
                </div>
                <div class="ps-product__desc">
                    <ul class="ps-product__list">
                        <li>Study histvfvfory up to 30 days</li>
                        <li>Up to 5 users simultaneously</li>
                        <li>Has HEALTH certificate</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ps-product__footer">
            <div class="ps-product__meta">
                <span
                    :class="[
                        'ps-product__price',
                        product.sale_price ? 'sale' : ''
                    ]"
                    >{{
                        product.sale_price ? product.sale_price : product.price
                    }}тг.</span
                >
                <span class="ps-product__del" v-if="product.sale_price"
                    >{{ product.price }}тг.</span
                >
            </div>
            <div class="ps-product__quantity">
                <h6>Количество</h6>
                <div class="def-number-input number-input safari_only">
                    <button
                        class="minus"
                        @click="quantity > 0 ? quantity-- : quantity"
                    >
                        <i class="icon-minus"></i>
                    </button>
                    <input
                        class="quantity"
                        min="0"
                        v-model="quantity"
                        type="number"
                    />
                    <button class="plus" @click="quantity++">
                        <i class="icon-plus"></i>
                    </button>
                </div>
                <a
                    class="ps-btn ps-btn--warning"
                    href="#"
                    @click.prevent="addToCart()"
                    >Добавить в корзину</a
                >
            </div>
            <div class="ps-product__variations">
                <a
                    class="ps-product__link"
                    href="#"
                    @click.prevent="addProductToWishlist()"
                    >Добавить в список желаний</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import RatingComponent from '~/components/elements/commons/RatingComponent';

export default {
    props: {
        product: {
            type: Object
        }
    },
    data() {
        return {
            baseDomain: baseUrl,
            quantity: 1
        };
    },
    components: { RatingComponent },
    computed: {
        rating() {
            return Math.floor(Math.random() * Math.floor(6) + 3);
        }
    },
    methods: {
        addToCart() {
            const params = {
                id: this.product.id,
                quantity: this.quantity
            };
            this.$store.dispatch('cart/addProductToCart', params);
            this.$store.commit('cart/setDialogAddCart', true);
            this.$store.commit('cart/setProductOverview', this.product);
            this.$store.commit('compare/setDialogCompare', false);
            this.$store.commit('cart/setDialogQuickview', false);
            this.$store.commit('product/addCartProduct', this.product);
            this.$store.commit('cart/setDialogAddCart2', false);
        },
        productQuickview() {
            this.$store.commit('cart/setProductOverview', this.product);
            this.$store.commit('cart/setDialogQuickview', true);
            this.$store.commit('cart/setDialogAddCart', false);
            this.$store.commit('compare/setDialogCompare', false);
            this.$store.commit('cart/setDialogAddCart2', false);
        },
        addProductCompare() {
            this.$store.commit('cart/setDialogQuickview', false);
            this.$store.commit('cart/setDialogAddCart', false);
            this.$store.commit('compare/setDialogCompare', true);
            this.$store.dispatch('compare/addItemToCompare', this.product);
            this.$store.commit('cart/setDialogAddCart2', false);
        },
        addProductToWishlist() {
            const params = {
                id: this.product.id
            };
            const title = this.product ? this.product.name : '';
            const message = {
                icon: 'icon-shield-check',
                message: title + ' был добавлен в ваш список желаний !'
            };
            this.$store.dispatch('wishlist/addItemToWishlist', params);
            this.$store.commit('product/addWishlistItem', this.product);
            this.$store.commit('cart/setDialogAddCart2', false);
            this.$store.commit('app/setMessageNotify', message);
            this.$store.commit('app/setDialogNotify', true);
        }
    }
};
</script>
