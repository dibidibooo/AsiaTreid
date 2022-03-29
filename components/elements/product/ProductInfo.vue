<template>
    <div class="ps-product__info">
        <div
            class="ps-product__badge"
            v-if="
                design &&
                    !design.extent &&
                    (design.outStock || design.inStock || design.leftStock)
            "
        >
            <span class="ps-badge ps-badge--instock" v-if="design.inStock">
                {{ design.available && design.available }} В НАЛИЧИИ</span
            >
            <span class="ps-badge ps-badge--outstock" v-if="design.outStock">
                НЕТ В НАЛИЧИИ</span
            >
            <span class="ps-badge ps-badge--leftstock" v-if="design.leftStock">
                Осталось {{ design.available && design.available }} в наличии</span
            >
        </div>
        <div class="ps-product__branch" v-if="design && design.branch">
            <a href="#">{{ design.branch }}</a>
        </div>
        <div class="ps-product__title">
            <nuxt-link to="/">{{ product.name }}</nuxt-link>
        </div>
        <div class="ps-product__rating">
            <rating-component :value="rating" />
            <span class="ps-product__review">(5 Отзывов)</span>
        </div>
        <template v-if="design && !design.extent">
            <div class="ps-product__meta">
                <div v-if="design.priceTo">
                    <span
                        class="ps-product__price sale"
                        >{{ product.sale_price }} - ${{product.price}}тг.</span
                    >
                </div>
                <div v-else>
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
            </div>
            <div class="ps-product__feature-group" v-if="design && design.feature">
                <div class="ps-product__group" v-for="(val, index) in design.feature" :key="index">
                    <h6>{{ val.text }}</h6>
                    <div
                        class="ps-product__color ps-select--feature"
                        v-if="val.text == 'Color'"
                    >
                        <a
                            href="#"
                            v-for="color in val.items"
                            :key="color.value"
                            @click.prevent="
                                handleSelectFeature(val.text, color.value)
                            "
                            :class="checkActive(val.text, color.value) ? 'active' : ''"
                            :title="color.text"
                            :style="{ backgroundColor: color.value }"
                        ></a>
                    </div>
                    <div
                        class="ps-product__size ps-select--feature"
                        v-if="val.text == 'Size'"
                    >
                        <a
                            href="#"
                            v-for="size in val.items"
                            :key="size.value"
                            @click.prevent="
                                handleSelectFeature(val.text, size.value)
                            "
                            :class="checkActive(val.text, size.value) ? 'active' : ''"
                            :title="size.text"
                            >{{ size.text }}</a
                        >
                    </div>
                </div>
            </div>
            <div
                class="ps-product__quantity"
                v-if="
                    design && (design.inStock || design.leftStock)
                "
            >
                <h6>Количество</h6>
                <div class="d-md-flex align-items-center">
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
            </div>
            <div
                class="ps-product__variations"
                v-if="design && !design.quickview"
            >
                <a
                    class="ps-product__link"
                    href="#"
                    @click.prevent="addProductToWishlist()"
                    >Добавить в список желаний</a
                >
            </div>
        </template>
        <ul class="ps-product__bundle" v-if="design && design.shipping">
            <li><i class="icon-wallet"></i>100% Money back</li>
            <li><i class="icon-bag2"></i>Non-contact shipping</li>
            <li><i class="icon-truck"></i>Free delivery for order over $200</li>
        </ul>
        <div class="ps-product__social" v-if="design && design.social">
            <social-icon-color />
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import RatingComponent from '~/components/elements/commons/RatingComponent';
import { mapState } from 'vuex';
import SocialIconColor from '~/components/shared/SocialIconColor';

export default {
    props: {
        product: {
            type: Object
        },
        design: {
            type: Object,
            default: () => {}
        }
    },
    components: { RatingComponent, SocialIconColor },
    data() {
        return {
            baseDomain: baseUrl,
            quantity: 1,
            selectFeature: []
        };
    },
    computed: {
        ...mapState({
            wishlist: state => state.wishlist.items
        }),
        isWishlist() {
            const item = this.wishlist.find(
                item => item.id === this.product.id
            );
            if (item) {
                return true;
            }
            return false;
        },
        rating() {
            return Math.floor(Math.random() * Math.floor(6) + 3);
        }
    },
    methods: {
        handleSelectFeature(text, value) {
            if (this.selectFeature.length) {
                let check = false;
                this.selectFeature.forEach(element => {
                    if (element.text == text) {
                        element.value = value;
                        check = true;
                    }
                });
                if (!check) {
                    const data = {
                        text: text,
                        value: value
                    };
                    this.selectFeature.push(data);
                }
            } else {
                const data = {
                    text: text,
                    value: value
                };
                this.selectFeature.push(data);
            }
        },
        checkActive(text, value) {
            if (this.selectFeature.length) {
                let check = false;
                this.selectFeature.forEach(element => {
                    if (element.text == text && element.value == value) {
                        check = true;
                    }
                });
                return check;
            }
            return false;
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
        },
        addToCart() {
            const params = {
                id: this.product.id,
                quantity: this.quantity
            };
            this.$store.commit('cart/setDialogQuickview', false);
            this.$store.commit('compare/setDialogCompare', false);
            this.$store.dispatch('cart/addProductToCart', params);
            this.$store.commit('cart/setDialogAddCart', false);
            this.$store.commit('cart/setDialogAddCart2', true);
            this.$store.commit('cart/setProductOverview', this.product);
            this.$store.commit('product/addCartProduct', this.product);
        }
    }
};
</script>
