<template>
    <div class="ps-contact">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-contact__content">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="ps-contact__info">
                            <h2 class="ps-contact__title">Как мы можем вам помочь?</h2>
                            <p class="ps-contact__text">Мы в вашем распоряжении 7 дней в неделю!</p>
                            <h3 class="ps-contact__fax">Контакты: +7(701)-335-49-09</h3>
                            <div class="ps-contact__work">Адрес: 040400 Алматинская обл. <br>Енбекшиказахский район<br>с. Рахат ул. Женис 43</div>
                            <div class="ps-contact__email"><a href="mailto:asia-trade.kz@mail.ru">asia-trade.kz@mail.ru</a></div>
                            <social-icon />
                        </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="ps-contact__map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.822845645748!2d-97.1301607845029!3d32.770434891627616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7dcf27b929d9%3A0xc63407d6f47753b9!2s1487%20Rocky%20Canyon%20Rd%2C%20Arlington%2C%20TX%2076012%2C%20USA!5e0!3m2!1sen!2s!4v1616124426616!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
                    </div>
                </div>
            </div>
            <div class="ps-form--contact">
                <h2 class="ps-form__title">Заполните форму, если у вас есть вопросы</h2>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="ps-form__group">
                            <v-text-field
                                class="form-control ps-form__input"
                                placeholder="Введите ФИО"
                                required
                                rounded
                                v-model="name"
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                                :error-messages="nameErrors"
                            />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="ps-form__group">
                            <v-text-field
                                class="form-control ps-form__input"
                                placeholder="Введите  E-mail"
                                type="email"
                                v-model="email"
                                required
                                rounded
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                                :error-messages="emailErrors"
                            />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="ps-form__group">
                            <v-text-field
                                class="form-control ps-form__input"
                                placeholder="Введите телефон"
                                rounded
                                v-model="phone"
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="ps-form__group">
                            <v-textarea
                                class="form-control ps-form__textarea"
                                placeholder="Сообщение"
                                v-model="message"
                                rounded
                                rows="3"
                            ></v-textarea>
                        </div>
                    </div>
                </div>
                <div class="ps-form__submit">
                    <button class="ps-btn ps-btn--warning" @click="formSubmit()">Отправить сообщение</button>
                </div>
            </div>
        </div>
        <instagram />
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import Instagram from '~/components/partials/homepage/Instagram';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
    layout: 'default',
    mixins: [validationMixin],
    validations: {
        name: { required },
        email: { required, email }
    },
    components: {
        Breadcrumb,
        Instagram
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: `/contact-us`,
                    extraClass: 'active',
                    text: 'Contact us'
                }
            ],
            name: null,
            email: null,
            message: null,
            phone: null
        }
    },
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push('Укажите имя');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push('Должен быть действующий адрес электронной почты');
            !this.$v.email.required && errors.push('Электронная почта обязательна');
            return errors;
        }
    },
    methods: {
        formSubmit() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                const params = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    phone: this.phone
                };
                console.log('data', params)
            }
        }
    }
}
</script>
