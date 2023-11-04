<template>
    <button class="btn-reset button" @click="$router.push('/add')">
        <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M7.99984 2.66699C8.36803 2.66699 8.6665 2.96547 8.6665 3.33366V7.33366H12.6665C13.0347 7.33366 13.3332 7.63214 13.3332 8.00033C13.3332 8.36852 13.0347 8.667 12.6665 8.667H8.6665V12.667C8.6665 13.0352 8.36803 13.3337 7.99984 13.3337C7.63165 13.3337 7.33317 13.0352 7.33317 12.667V8.667H3.33317C2.96498 8.667 2.6665 8.36852 2.6665 8.00033C2.6665 7.63214 2.96498 7.33366 3.33317 7.33366H7.33317V3.33366C7.33317 2.96547 7.63165 2.66699 7.99984 2.66699Z"
            />
        </svg>
        <span class="button__text">Добавить</span>
    </button>
</template>

<script>
export default {
    name: 'NewContactButton',
};
</script>

<style scoped lang="scss">
.button {
    color: var(--blue-color);
    background: var(--select-background-color);
    border: 1px solid var(--blue-color);
    border-radius: 28px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.3s ease, background 0.3s ease;
    &__text {
        color: inherit;
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
    }
    &__icon {
        fill: var(--blue-color);
        transition: fill 0.3s ease;
    }
    &:hover {
        background: var(--blue-color);
        color: var(--select-background-color);
        & .button__icon {
            fill: var(--select-background-color);
        }
    }
}
</style>
