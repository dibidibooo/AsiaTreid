<template>
    <section class="ps-landing--block">
        <div class="container">
            <h3 class="ps-landing__title" id="home-block">{{ title }}</h3>
            <div class="ps-landing__content">
                <div class="row">
                    <div
                        :class="['col-12 col-md-6 col-lg-3', col5 ? 'col-lg-2dot4' : '']"
                        v-for="(item, index) in dataList"
                        :key="index"
                    >
                        <div :class="['ps-landing__item', itemClass]">
                            <a :href="item.url" target="_blank">
                                <img :src="item.image" :alt="item.name"
                            /></a>

                            <div class="ps-landing__text">
                                <a :href="item.url" target="_blank">{{
                                    item.name
                                }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        dataList: {
            type: Array,
            default: () => []
        },
        col5: {
            type: Boolean,
            default: false
        },
        itemClass: {
            type: String,
            default: ''
        }
    }
};
</script>
