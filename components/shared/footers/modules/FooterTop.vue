<template>
    <div class="ps-footer--top">
        <div :class="{'container': container}">
            <div class="row m-0">
                <div class="col-12 col-sm-4 p-0">
                    <p class="text-center"><nuxt-link class="ps-footer__link" to="/"><i class="icon-wallet"></i>100% возврат денег</nuxt-link></p>
                </div>
                <div class="col-12 col-sm-4 p-0">
                    <p class="text-center"><nuxt-link class="ps-footer__link" to="/"><i class="icon-bag2"></i>Бесконтактная доставка</nuxt-link></p>
                </div>
                <div class="col-12 col-sm-4 p-0">
                    <p class="text-center"><nuxt-link class="ps-footer__link" to="/"><i class="icon-truck"></i>Бесплатная доставка по договоренности</nuxt-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        container: {
            type: Boolean,
            default: false
        }
    }
}
</script>
