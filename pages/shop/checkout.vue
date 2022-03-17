<template>
    <div class="ps-checkout">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h3 class="ps-checkout__title">Проверка заказа</h3>
            <div class="ps-checkout__content" v-if="!success">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="ps-checkout__form">
                            <h3 class="ps-checkout__heading">
                                Платежные реквизиты
                            </h3>
                            <div class="row">
                                <div class="col-12">
                                    <form-billing @submit="formBilling" @validate="formBillingValidate" ref="formBilling" />
                                </div>
                                <div
                                    :class="['col-12', shipAddress ? '' : 'ps-hidden']"
                                >
                                    <form-different-address ref="formDifferent" @submit="formDifferentAddress" @validate="formDifferentValidate" />
                                </div>
                                <div class="col-12">
                                    <div class="ps-checkout__group">
                                        <label class="ps-checkout__label"
                                            >Примечания к заказу (необязательно)</label
                                        >
                                        <v-textarea
                                            class="form-control ps-textarea"
                                            placeholder="Примечания к вашему заказу, пример: специальные примечания для доставки."
                                            v-model="note"
                                            rounded
                                            rows="7"
                                        ></v-textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="ps-checkout__order">
                            <h3 class="ps-checkout__heading">Ваш заказ</h3>
                            <div class="ps-checkout__row">
                                <div class="ps-title">Товар</div>
                                <div class="ps-title">Цена</div>
                            </div>
                            <div class="ps-checkout__row ps-product" v-for="product in cartProducts" :key="product.id">
                                <div class="ps-product__name">{{ product.name }} x <span>{{ productQuantity(product) }}</span></div>
                                <div class="ps-product__price">${{ productTotal(product) }}</div>
                            </div>
                            <div class="ps-checkout__row">
                                <div class="ps-title">Цена</div>
                                <div class="ps-product__price">${{ totalCart }}</div>
                            </div>
                            <div class="ps-checkout__row">
                                <div class="ps-title">Доставка</div>
                                <div class="ps-checkout__checkbox">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="freeShip" id="free-ship" value="free" v-model="freeShip">
                                        <label class="form-check-label" for="free-ship">Самовывоз</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="freeShip" id="price-ship" value="price" v-model="freeShip">
                                        <label class="form-check-label" for="price-ship">Доставка курьером: <span>1000.00 тг.</span></label>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-checkout__row">
                                <div class="ps-title">Total</div>
                                <div class="ps-product__price">{{totalAllShip}} тг.</div>
                            </div>
                            <div class="ps-checkout__payment">
                                <div class="payment-method">
                                    <div class="form-check">
                                        <input class="form-check-input" name="payment" value="payment" type="radio" id="payment" v-model="payment">
                                        <label class="form-check-label" for="payment">Проверьте правильность введеных данных</label>
                                    </div>
                                    <p class="ps-note">Оставьте заявку, проверив введеные данные. И наш менеджер свяжется с вами в ближайшее время.</p>
                                </div>
                                <div class="check-faq">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="agree-faq" checked>
                                        <label class="form-check-label" for="agree-faq">Я прочитал и согласен с условиями сайта *</label>
                                    </div>
                                </div>
                                <button class="ps-btn ps-btn--warning" @click="placeOrder()">Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-checkout__content" v-else>
                <checkout-success />
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import FormDifferentAddress from '~/components/partials/cart/FormDifferentAddress';
import FormBilling from '~/components/partials/cart/FormBilling';
import { mapState } from 'vuex';
import CheckoutSuccess from '~/components/partials/shop/CheckoutSuccess';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        FormDifferentAddress,
        FormBilling,
        CheckoutSuccess
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/shop/checkout',
                    extraClass: 'active',
                    text: 'About us'
                }
            ],
            createAccount: false,
            password: null,
            show: false,
            shipAddress: false,
            note: null,
            passwordErrors: '',
            differentAddress: null,
            formAddress: null,
            checkValidateFormAddress: true,
            checkValidateFormDifferent: true,
            freeShip: 'free',
            payment: 'payment',
            success: false
        };
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            cartProducts: state => state.product.cartProducts
        }),
        totalCart() {
            let total = 0;
            this.cartProducts.forEach(element => {
                let price = this.productPrice(element);
                let quantity = this.productQuantity(element);
                total+= price * quantity;
            });
            return total.toFixed(2);
        },
        totalAllShip() {
            let total = this.totalCart;
            if (this.freeShip == 'price') {
                total = parseFloat(total) + 1000;
            }
            return parseFloat(total).toFixed(2);
        }
    },
    methods: {
        placeOrder() {
            this.$refs.formBilling.submitForm();
            if (this.shipAddress) {
                this.$refs.formDifferent.submitForm();
            }
            if (this.checkValidateFormAddress) {
                this.success = true;
                if (this.shipAddress && this.checkValidateFormDifferent) {
                    console.log('dataForm', this.formAddress, this.differentAddress);
                } else {
                    console.log('dataFormAddress', this.formAddress);
                }
            }
        },
        formDifferentAddress(form) {
            this.differentAddress = form;
        },
        formBilling(form) {
            this.formAddress = form;
        },
        formBillingValidate(val) {
            this.checkValidateFormAddress = val;
        },
        formDifferentValidate(val) {
            this.checkValidateFormDifferent = val;
        },
        productPrice(product) {
            if (product) {
                return product.sale_price ? product.sale_price : product.price;
            } else {
                return 0;
            }
        },
        productQuantity(product) {
            const item = this.cartItems.find(item => item.id === product.id);
            if (item) {
                return item.quantity;
            }
            return 1;
        },
        productTotal(product) {
            let total = this.productPrice(product) * this.productQuantity(product);
            return total.toFixed(2);
        }
    }
};
</script>
