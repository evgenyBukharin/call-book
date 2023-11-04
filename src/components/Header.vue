<template>
    <header
        class="header"
        :class="{
            'header-centered': isCentered,
        }"
    >
        <div class="header__container" v-if="!isCentered">
            <img src="../assets/img/logo.svg" class="image header__logo" width="42" height="32" alt="Логотип" />
            <h3 class="header__title">Книга контактов</h3>
        </div>
        <div class="header__container" v-if="isCentered">
            <CustomLogo :letter="contactName.split('')[0]" />
            <h3 class="header__title header__title-normal">{{ contactName }}</h3>
        </div>
    </header>
</template>

<script>
import CustomLogo from '@/components/CustomLogo.vue';
export default {
    name: 'Header',
    components: { CustomLogo },
    props: {
        isCentered: {
            type: Boolean,
            default: false,
        },
        contactName: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped lang="scss">
.header {
    background: var(--black-color);
    min-height: 48px;
    display: flex;
    align-items: center;
    padding: 0px 48px;
    &__container {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    &__title {
        color: var(--white-color);
        font-size: 18px;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        &-normal {
            text-transform: unset;
        }
    }
    &-centered {
        padding: 0px 32px;
        justify-content: center;
        & .header {
            &__title {
                color: var(--border-color);
            }
            &__container {
                gap: 0;
            }
        }
    }
}

@media (max-width: 768px) {
    .header {
        &__logo {
            width: 32px;
            height: 24px;
        }
        &__title {
            font-size: 14px;
        }
    }
}
@media (max-width: 576px) {
    .header {
        padding: 0px 12px;
    }
}
</style>
