<template>
    <section class="contact">
        <div class="container contact__container">
            <div class="contact__content">
                <h2 class="contact__title">Контакт</h2>
                <form class="contact__form" ref="contactForm" @submit.prevent="submitHandler($event)">
                    <div class="contact__row">
                        <div class="contact__col-key">Имя</div>
                        <div class="contact__col-data">
                            <CustomInput placeholderText="Например, Андрей..." errorText="Слишком короткое имя" type="name" />
                        </div>
                    </div>
                    <div class="contact__row">
                        <div class="contact__col-key">Телефон</div>
                        <div class="contact__col-data">
                            <CustomInput placeholderText="Номер телефона" errorText="Некорректный номер" type="phone" />
                        </div>
                    </div>
                    <div class="contact__row">
                        <div class="contact__col-key">E-mail</div>
                        <div class="contact__col-data">
                            <CustomInput placeholderText="Введите почту" errorText="Некорректный e-mail" type="email" />
                        </div>
                    </div>
                    <div class="contact__row">
                        <div class="contact__col-key">Категория</div>
                        <div class="contact__col-data">
                            <CustomSelect :isLong="true" errorText="Поле не можеть быть пустым" />
                        </div>
                    </div>
                    <div class="contact__row">
                        <div class="contact__col-key">Создан</div>
                        <div class="contact__col-data">
                            <CustomInput :isDisabled="true" type="createdAt" />
                        </div>
                    </div>
                    <div class="contact__row">
                        <div class="contact__col-key"></div>
                        <div class="contact__col-data">
                            <Button @click="submitHandler" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import Button from '@/components/Button.vue';

export default {
    name: 'ContactSection',
    props: {
        contact: {
            type: Object,
        },
    },
    components: { CustomInput, CustomSelect, Button },
    methods: {
        submitHandler() {
            if (this.validateFields()) {
                console.log('allvalid');
            } else {
                console.log('invalid');
            }
        },
        validateFields() {
            return true;
        },
    },
    created() {
        this.$store.commit('setNewCurrentContact', this.contact);
    },
    mounted() {
        // console.log(this.$store.state.formValidationState);
    },
};
</script>

<style scoped lang="scss">
.contact {
    padding-top: 24px;
    &__container {
        display: flex;
        justify-content: center;
    }
    &__content {
        width: 100%;
        max-width: 706px;
        background: var(--real-white-color);
        box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
        padding: 48px 64px 64px 64px;
    }
    &__title {
        color: var(--black-color);
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 24px;
    }
    &__row {
        display: flex;
        align-items: flex-start;
        min-height: 40px;
    }
    &__col {
        &-key {
            max-width: 136px;
            width: 100%;
            color: var(--black-color);
            font-size: 14px;
            font-weight: 700;
            line-height: 120%;
            margin-right: 32px;
            margin-top: 12px;
        }
        &-data {
            max-width: 408px;
            width: 100%;
        }
    }
    &__form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>
