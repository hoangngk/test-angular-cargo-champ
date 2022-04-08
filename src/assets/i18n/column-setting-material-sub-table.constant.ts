

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
        validUntil: {
            title: 'Valid Untill',
            type: 'string',

        },
        granulation: {
            title: 'Granulation',
            type: 'string',

        },
        conversionTonneCubicMeter: {
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
        conversionTonneCubicMeter: {
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
        title: 'conversionTonneCubicMeter',
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