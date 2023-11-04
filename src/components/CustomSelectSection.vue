<template>
    <section class="custom-select">
        <div class="container custom-select__container">
            <CustomFilter />
            <NewContactButton />
        </div>
    </section>
</template>

<script>
import CustomFilter from './CustomFilter.vue';
import NewContactButton from './NewContactButton.vue';

export default {
    name: 'CustomSelectSection',
    components: { CustomFilter, NewContactButton },
};
</script>

<style scoped lang="scss">
.custom-select {
    padding: 8px 0;
    border: 1px solid var(--select-hover-color);
    background: var(--select-background-color);
    &__container {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
