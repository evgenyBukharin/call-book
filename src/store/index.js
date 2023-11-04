import { createStore } from 'vuex';

export default createStore({
    state: {
        contacts: [
            {
                id: 0,
                name: 'Айтишник Данила',
                phone: '79876547809',
                email: 'nelfeelingood@gmail.com',
                createdAt: '22.09.23',
                group: 'Коллеги',
            },
            {
                id: 1,
                name: 'Двери Вадим Брат',
                phone: '79876547811',
                email: 'nelfeelingood@gmail.com',
                createdAt: '23.09.23',
                group: 'Родственники',
            },
            {
                id: 2,
                name: 'Арендодатель Виктория',
                phone: '79876547810',
                email: 'nelfeelingood@gmail.com',
                createdAt: '22.09.23',
                group: 'Коллеги',
            },
            {
                id: 3,
                name: 'Ирина Сергеевна Тёща',
                phone: '79876547813',
                email: 'nelfeelingood@gmail.com',
                createdAt: '25.09.23',
                group: 'Родственники',
            },
            {
                id: 4,
                name: 'Доставка Андрей Стоянов',
                phone: '79876547812',
                email: 'nelfeelingood@gmail.com',
                createdAt: '24.09.23',
                group: 'Коллеги',
            },
        ],
        filteredContacts: [],
        defaultContact: {
            name: 'Контакт',
            phone: 'Телефон',
            email: 'E-mail',
            createdAt: 'Создан',
        },
        filtersList: [
            {
                id: 0,
                name: 'Все',
            },
            {
                id: 1,
                name: 'Родственники',
            },
            {
                id: 2,
                name: 'Коллеги',
            },
        ],
        selectedFilter: {
            id: 0,
            name: 'Все',
        },
        formValidationState: {
            group: '',
        },
    },
    mutations: {
        updateSelectedFilter(state, newFilter) {
            if (state.selectedFilter.id !== newFilter.id) {
                state.selectedFilter = newFilter;
            }
        },
        updateFilteredContacts(state, newValue) {
            state.filteredContacts = newValue;
        },
        prepareForSorting(state) {
            state.contacts.forEach((contact) => {
                let splittedDate = contact.createdAt.split('.');
                let firstEl = splittedDate[0];
                splittedDate[0] = '20' + splittedDate[splittedDate.length - 1];
                splittedDate[splittedDate.length - 1] = firstEl;
                contact.unixTime = new Date(splittedDate.join('.')).getTime();
            });
        },
        sortContactsByReduction(state) {
            state.contacts.sort((a, b) => b.unixTime - a.unixTime);
        },
        setNewCurrentContact(state, contact) {
            state.currentContact = contact;
        },
        updateCurrentContactGroup(state, newGroup) {
            state.currentContact.group = newGroup.name;
            console.log(state.currentContact);
        },
    },
    getters: {
        splicedFiltersList: (state) => {
            const tempFiltersList = state.filtersList;
            tempFiltersList.shift();
            return tempFiltersList;
        },
    },
    actions: {},
    modules: {},
});
