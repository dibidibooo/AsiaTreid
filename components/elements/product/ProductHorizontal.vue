<template>
    <div class="ps-product ps-product--horizontal">
        <div class="ps-product__thumbnail">
            <nuxt-link class="ps-product__image" to="/">
                <figure>
                    <img
                        :src="baseDomain + product.thumbnail.url"
                        alt="alt"
                        onerror="this.onerror=null; this.src='/img/placeholder.png'"
                    />
                </figure>
            </nuxt-link>
        </div>
        <div class="ps-product__content">
            <h5 class="ps-product__title">
                <a>{{ product.name }}</a>
            </h5>
            <p class="ps-product__desc">
                Study history up to 30 days Up to 5 users simultaneously Has
                HEALTH certificate
            </p>
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
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';

export default {
    props: {
        product: {
            type: Object
        }
    },
    data() {
        return {
            baseDomain: baseUrl
        };
    }
};
</script>
