<template>
    <div class="custom-logo">{{ letter }}</div>
</template>

<script>
export default {
    name: 'CustomLogo',
    props: {
        letter: {
            type: [String, Number],
            validator: function (value) {
                return value.length == 1;
            },
        },
    },
};
</script>

<style scoped lang="scss">
.custom-logo {
    min-width: 24px;
    min-height: 24px;
    color: var(--grey-color);
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    border-radius: 56px;
    background: var(--yellow-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
}
</style>
