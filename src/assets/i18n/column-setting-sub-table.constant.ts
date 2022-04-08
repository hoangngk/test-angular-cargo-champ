
import { CounterPartyListComponent } from "../../app/@theme/components/custom-rander/counter-party-list/counter-party-list.component";

export const settingsENSUBTABLE = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            type: 'string',

        },
        name: {
            title: 'Name',
            type: 'string',

        },
        price: {
            title: 'Price',
            type: 'string',

        },
        city: {
            title: 'City',
            type: 'string',

        },
        hqAddress: {
            title: 'HQ-Address',
            type: 'string',

        },
        contacts: {
            title: 'Contact',
            type: 'string',

        },
        actions: {
            title: 'Action',
            position: 'left',
            display: true,
            filter: false,
            type: 'custom',
            renderComponent: CounterPartyListComponent,
            isSelected: false
        },
    },
};

export const settingsDESUBTABLE = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            type: 'string',

        },
        name: {
            title: 'Name',
            type: 'string',

        },
        price: {
            title: 'Preis',
            type: 'string',

        },
        city: {
            title: 'Stadt',
            type: 'string',

        },
        hqAddress: {
            title: 'HQ-Adresse',
            type: 'string',

        },
        contacts: {
            title: 'Kontakte',
            type: 'string',

        },
        actions: {
            title: 'Aktion',
            position: 'left',
            display: true,
            filter: false,
            type: 'custom',
            renderComponent: CounterPartyListComponent,
            isSelected: false
        },
    },
};



export const settingsColumn = [
    {
        title: 'id',
        hide: false,
        disabled: true
    },
    {
        title: 'name',
        hide: false,
        disabled: false
    },
    {
        title: 'breifDescription',
        hide: false,
        disabled: false
    },
    {
        title: 'contacts',
        hide: false,
        disabled: false
    },
    {
        title: 'actions',
        hide: false,
        disabled: true
    }
]