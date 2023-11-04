<template>
    <Header :isCentered="true" :contactName="getContactById.name" />
    <ContactSection :contact="getContactById" />
</template>

<script>
import ContactSection from '@/components/ContactSection.vue';
import Header from '@/components/Header.vue';

export default {
    name: 'ContactView',
    components: { ContactSection, Header },
    computed: {
        getContactById() {
            return this.$store.state.contacts.find((contact) => contact.id == this.$route.params.id);
        },
    },
};
</script>
