<template>
    <div class="input__container">
        <input
            type="text"
            class="input"
            :class="{ 'input-invalid': !isValid }"
            :placeholder="placeholderText"
            v-model="$store.state.currentContact[type]"
            @input="inputHandler($event)"
            :disabled="isDisabled"
        />
        <img src="../assets/img/error.svg" class="image input__icon" width="16" height="16" alt="Иконка ошибки" />
        <p class="input__text-error">{{ errorText }}</p>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    data() {
        return {
            isValid: true,
        };
    },
    props: {
        errorText: {
            type: String,
        },
        placeholderText: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        inputHandler() {
            if (this.type == 'phone') {
                this.formatByPhoneMask();
            }
        },
        formatByPhoneMask() {
            let matrix_def = '+7(___) ___-__-__';
            let matrix = matrix_def;
            let i = 0;
            let def = matrix.replace(/\D/g, '');
            let val = this.$store.state.currentContact.phone.replace(/\D/g, '');
            if (def.length >= val.length) val = def;
            this.$store.state.currentContact.phone = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
        },
    },
    mounted() {
        if (this.type == 'phone') {
            this.formatByPhoneMask();
        }
        // this.$store.commit('addNewFormField', this.type);
    },
};
</script>

<style scoped lang="scss">
.input {
    border-radius: 4px;
    width: 100%;
    padding: 8px 8px 8px 10px;
    border: 1px solid var(--border-color);
    color: var(--grey-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    transition: color 0.3s ease, border-color 0.3s ease;
    caret-color: var(--blue-color);
    &::placeholder {
        color: var(--light-grey-color);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        transition: color 0.3s ease;
    }
    &:hover {
        border-color: var(--blue-color);
    }
    &:focus {
        border-color: var(--blue-color);
        outline: none;
    }
    &:disabled {
        border-color: transparent;
        background: transparent;
    }
    &-invalid {
        border-color: var(--red-color) !important;
        color: var(--red-color);
        padding-right: 34px;
        &::placeholder {
            color: var(--red-color);
        }
        & + .input__icon {
            opacity: 1;
            visibility: visible;
        }
        & ~ .input__text-error {
            display: block;
        }
    }
    &__container {
        position: relative;
        max-width: 408px;
        width: 100%;
    }
    &__icon {
        position: absolute;
        right: 8px;
        top: 12px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    &__text {
        &-error {
            display: none;
            margin: 0;
            color: var(--red-color);
            font-size: 10px;
            font-weight: 400;
            line-height: 16px;
            text-align: right;
        }
    }
}
</style>
