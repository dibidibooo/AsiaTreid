<template>
    <section class="ps-section--newsletter"> 
        <div class="container" style="background-image: url('/img/newsletter-bg.jpg');">
            <h3 class="ps-section__title" v-html="title"></h3>
            <p class="ps-section__text" v-if="desc">{{ desc }}</p>
            <div class="ps-section__content">
                <form-subscribe @handleSubscribe="handleSubscribe" />
            </div>
        </div>
    </section>
</template>

<script>
import FormSubscribe from '~/components/elements/commons/FormSubscribe';
export default {
    props: {
        title: {
            type: String,
            default: 'Подпишитесь на нашу рассылку <br>и получайте свежие новости первыми!'
        },
        desc: {
            type: String,
            default: ''
        }
    },
    components: { FormSubscribe },
    methods: {
        handleSubscribe(email) {
            console.log('email', email);
            const message = {
                message: 'Спасибо за подписку.',
                icon: 'icon-shield-check'
            }
            this.$store.commit('app/setMessageNotify', message)
            this.$store.commit('app/setDialogNotify', true);
        }
    }
}
</script>
