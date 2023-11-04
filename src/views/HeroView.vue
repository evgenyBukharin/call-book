<template>
    <Header :isCentered="false" />
    <CustomSelectSection />
    <HeroSection />
</template>

<script>
import CustomSelectSection from '@/components/CustomSelectSection.vue';
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';

export default {
    name: 'HomeView',
    components: { HeroSection, Header, CustomSelectSection },
};
</script>
