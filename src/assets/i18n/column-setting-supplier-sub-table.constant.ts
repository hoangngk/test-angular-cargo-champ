
// import { CounterPartyListComponent } from "../../app/@theme/components/custom-rander/counter-party-list/counter-party-list.component";

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
        validUntill: {
            title: 'Valid Untill',
            type: 'string',

        },
        granulation: {
            title: 'Granulation',
            type: 'string',

        },
        measure: {
            title: 'Unit Of Measurement',
            type: 'string',

        },
        density: {
            title: 'Density',
            type: 'string',

        },
        // actions: {
        //     title: 'Action',
        //     position: 'left',
        //     display: true,
        //     filter: false,
        //     type: 'custom',
        //     renderComponent: CounterPartyListComponent,
        //     isSelected: false
        // },
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
        validUntil: {
            title: 'Gültig bis',
            type: 'string',

        },
        granulation: {
            title: 'Granulation',
            type: 'string',

        },
        measure: {
            title: 'Maßeinheit',
            type: 'string',

        },
        density: {
            title: 'Dichte',
            type: 'string',

        },
        // actions: {
        //     title: 'Aktion',
        //     position: 'left',
        //     display: true,
        //     filter: false,
        //     type: 'custom',
        //     renderComponent: CounterPartyListComponent,
        //     isSelected: false
        // },
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
        title: 'price',
        hide: false,
        disabled: false
    },
    {
        title: 'measure',
        hide: false,
        disabled: false
    },
    {
        title: 'validUntil',
        hide: false,
        disabled: false
    },
    {
        title: 'granulation',
        hide: false,
        disabled: false
    },
    {
        title: 'density',
        hide: false,
        disabled: false
    },
    // {
    //     title: 'actions',
    //     hide: false,
    //     disabled: true
    // }
]