<template>
    <div class="ps-noti" v-show="show">
        <div class="container">
            <p class="m-0">
                В связи с эпидемией <strong>COVID 19 </strong> заказы могут обрабатываться с небольшой задержкой.
            </p>
        </div>
        <a class="ps-noti__close" href="#" @click.prevent="show = false"><i class="icon-cross"></i></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        };
    }
};
</script>
