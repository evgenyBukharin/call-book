<template>
    <button class="btn-reset button button__primary">
        <div class="button__container-icon">
            <img src="../assets/img/save.svg" class="image button__icon button__icon-save" width="16" height="16" alt="Иконка сохранить" />
            <img src="../assets/img/loader.svg" class="image button__icon button__icon-loader" width="16" height="16" alt="Иконка ожидания" />
        </div>
        Сохранить
    </button>
</template>

<script>
export default {
    name: 'Button',
};
</script>

<style scoped lang="scss">
.button {
    padding: 12px 16px;
    color: var(--grey-color);
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    transition: background 0.3s ease;
    &__primary {
        background: var(--yellow-color);
        &:hover {
            background: var(--light-yellow-color);
        }
        &-waiting {
            & .button__icon {
                &-save {
                    opacity: 0;
                    visibility: hidden;
                }
                &-loader {
                    opacity: 1;
                    visibility: visible;
                    animation: loading 6s linear infinite;
                }
            }
        }
    }
    &__container {
        &-icon {
            position: relative;
            min-width: 16px;
            min-height: 16px;
        }
    }
    &__icon {
        transition: opacity 0.3s ease, visibility 0.3s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &-loader {
            opacity: 0;
            visibility: hidden;
            transform-origin: 0 0;
        }
    }
}

@keyframes loading {
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg;
    }
}
</style>
