<template>
    <section class="hero">
        <div class="container hero__container">
            <div class="hero__table">
                <TableRow :isTableHeader="true" :contact="$store.state.defaultContact" />
                <TableRow v-for="contact in $store.state.filteredContacts" :key="'contact' + contact.id" :contact="contact" />
            </div>
        </div>
    </section>
</template>

<script>
import Button from '@/components/Button.vue';
import TableRow from '@/components/TableRow.vue';
export default {
    name: 'HeroSection',
    components: { Button, TableRow },
    created() {
        this.$store.commit('prepareForSorting');
        this.$store.commit('sortContactsByReduction');
        this.$store.commit('updateFilteredContacts', this.$store.state.contacts);
    },
};
</script>

<style scoped lang="scss">
.hero {
    padding-top: 16px;
    &__container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
    }
    &__table {
        width: 100%;
    }
}
</style>
