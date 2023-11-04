<template>
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
    <router-view />
</template>

<style lang="scss">
:root {
    --font-family: 'Proxima Nova', sans-serif;
    --content-width: 990px;
    --container-offset: 12px;
    --container-width: calc(var(--content-width) + (var(--container-offset) * 2));
    --white-color: #e0e0e0;
    --real-white-color: #fff;
    --black-color: #282828;
    --real-black-color: #000;
    --grey-color: #545454;
    --light-grey-color: #a9a9a9;
    --border-color: #ddd;
    --yellow-color: #ffc700;
    --light-yellow-color: #ffd84c;
    --blue-color: #2f80ed;
    --red-color: #eb5757;
    --table-header-color: #b5b5b5;
    --select-hover-color: #eaf2fd;
    --select-background-color: #f9fcff;
}
@font-face {
    font-family: 'Proxima Nova';
    src: url('assets/fonts/ProximaNova-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: 'Proxima Nova';
    src: url('assets/fonts/ProximaNova-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
}
html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
*,
::after,
::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
.page {
    height: 100%;
    font-family: var(--font-family, sans-serif);
    -webkit-text-size-adjust: 100%;
    &__body {
        margin: 0;
        min-width: 320px;
        min-height: 100%;
        font-size: 16px;
    }
}
.site-container {
    overflow: hidden;
}
.btn-reset {
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
}
.list-reset {
    list-style: none;
    margin: 0;
    padding: 0;
}
.container {
    margin: 0 auto;
    padding: 0 var(--container-offset);
    max-width: var(--container-width);
}
#app {
    min-height: 100vh;
}
</style>
