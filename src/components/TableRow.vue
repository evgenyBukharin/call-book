<template>
    <div
        class="row"
        :class="{
            'row-header': isTableHeader,
        }"
        @click="$router.push('/contact/' + contact.id)"
    >
        <div class="row__cell row__cell-fio">
            <CustomLogo v-if="!isTableHeader" :letter="contact.name.split('')[0]" />
            {{ contact.name }}
        </div>
        <div class="row__cell row__cell-column">
            <div class="row__cell row__cell-phone">{{ contact.phone }}</div>
            <div class="row__cell row__cell-email">{{ contact.email }}</div>
        </div>
        <div class="row__cell row__cell-phone">{{ contact.phone }}</div>
        <div class="row__cell row__cell-email">{{ contact.email }}</div>
        <div class="row__cell row__cell-date">{{ contact.createdAt }}</div>
    </div>
</template>

<script>
import CustomLogo from '@/components/CustomLogo.vue';
export default {
    name: 'TableRow',
    components: { CustomLogo },
    props: {
        contact: {
            type: Object,
        },
        isTableHeader: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        if (!this.isTableHeader) {
            let matrix_def = '+7(___) ___-__-__';
            let matrix = matrix_def;
            let i = 0;
            let def = matrix.replace(/\D/g, '');
            let val = this.contact.phone.replace(/\D/g, '');
            if (def.length >= val.length) val = def;
            this.contact.phone = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
        }
    },
};
</script>

<style scoped lang="scss">
.row {
    width: 100%;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    &__cell {
        color: var(--grey-color);
        font-size: 12px;
        line-height: normal;
        width: 100%;
        &-fio {
            max-width: 294px;
            width: 100%;
            color: var(--grey-color);
            font-size: 14px;
            line-height: 160%;
            display: flex;
            align-items: center;
        }
        &-phone {
            max-width: 112px;
        }
        &-email {
            max-width: 208px;
        }
        &-date {
            max-width: 112px;
            text-align: right;
        }
        &-column {
            display: none;
        }
    }
    &-header {
        height: 24px;
        & .row__cell {
            color: var(--table-header-color);
            font-size: 10px;
            line-height: 16px;
            text-transform: uppercase;
        }
    }
}

@media (max-width: 768px) {
    .row {
        justify-content: unset;
        &__cell {
            &-fio {
                font-size: 12px;
            }
        }
    }
}

@media (max-width: 576px) {
    .row {
        &__cell {
            &-column {
                display: block;
            }
            &-column ~ .row__cell-phone,
            &-column ~ .row__cell-email {
                display: none;
            }
            &-fio {
                max-width: 143px;
            }
            &-date {
                max-width: 58px;
            }
        }
    }
}
@media (max-width: 376px) {
    .row {
        &__cell {
            & .custom-logo {
                display: none;
            }
        }
    }
}
</style>
