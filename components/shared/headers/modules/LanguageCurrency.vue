<template>
    <div class="ps-language-currency">
        <a class="ps-dropdown-value" href="#" @click.prevent="handleOpenLanguageDialog()">{{ language }}</a>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            language: state => state.app.language,
            currency: state => state.app.currency
        })
    },
    methods: {
        handleOpenLanguageDialog() {
            this.$store.commit('app/setDialogLanguage', true);
        }
    }
}
</script>
