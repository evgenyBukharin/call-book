<template>
    <div
        class="custom-select__container-value"
        :class="{
            'custom-select__container-value-short': !isLong,
            'custom-select__container-value-long': isLong,
            'custom-select__container-value-invalid': !isValid,
        }"
        @click="showList"
    >
        <div class="custom-select__container-text">
            <span class="custom-select__value custom-select__value-default">{{ $store.state.currentContact.group }}</span>
            <span class="custom-select__value custom-select__value-hover">{{ $store.state.currentContact.group }}</span>
        </div>
        <svg class="image custom-select__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M10.9037 7C11.0733 7 11.1659 7.19777 11.0574 7.32804L8.15104 10.8156C8.07108 10.9116 7.92371 10.9116 7.84375 10.8156L4.93743 7.32804C4.82887 7.19777 4.9215 7 5.09107 7H10.9037Z"
                fill="#A9A9A9"
            />
        </svg>
        <ul class="list-reset custom-select__list" ref="customSelectList">
            <li v-for="(group, idx) in getGroupsList()" :key="'group' + idx" class="custom-select__item" @click="groupChangeHandler(group)">
                <span>{{ group.name }}</span>
            </li>
        </ul>
    </div>
    <p class="custom-select__text-error">{{ errorText }}</p>
</template>

<script>
export default {
    name: 'CustomSelect',
    data() {
        return {
            isValid: true,
        };
    },
    props: {
        isLong: {
            type: Boolean,
            default: false,
        },
        errorText: {
            type: String,
            default: '',
        },
    },
    methods: {
        showList() {
            this.$refs.customSelectList.classList.toggle('custom-select__list-visible');
        },
        groupChangeHandler(newGroup) {
            this.$store.commit('updateCurrentContactGroup', newGroup);
        },
        getGroupsList() {
            return this.$store.getters.splicedFiltersList;
        },
    },
};
</script>

<style scoped lang="scss">
.custom-select {
    &__container {
        &-value {
            position: relative;
            width: 100%;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            background: var(--real-white-color);
            padding: 10px 8px;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: border 0.3s ease;
            cursor: pointer;
            &:hover {
                border: 1px solid var(--blue-color);
                & .custom-select__value {
                    &-default {
                        opacity: 0;
                        visibility: hidden;
                    }
                    &-hover {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
            &-short {
                max-width: 237px;
            }
            &-long {
                max-width: 410px;
            }
            &-invalid {
                border-color: var(--red-color) !important;
                & .custom-select {
                    &__value {
                        color: var(--red-color);
                    }
                    &__icon * {
                        fill: var(--red-color);
                    }
                }
                & ~ .custom-select__text-error {
                    display: block;
                }
            }
        }
        &-text {
            width: 100%;
            position: relative;
        }
    }
    &__value {
        color: var(--grey-color);
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        &-hover {
            font-weight: 400;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            inset: 0;
            left: 1px;
        }
    }
    &__list {
        position: absolute;
        top: calc(100% + 8px);
        left: -1px;
        right: 0;
        border-radius: 4px;
        box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        z-index: 10;
        &-visible {
            opacity: 1;
            visibility: visible;
        }
    }
    &__item {
        background: var(--real-white-color);
        padding: 10px 8px 10px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background 0.3s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:hover {
            background: var(--select-hover-color);
        }
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
