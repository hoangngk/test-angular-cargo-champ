
import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { TripListComponent } from "../../app/@theme/components/custom-rander/trip-list/trip-list.component";

export const settingsEN = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            // type: 'number',
            hide: true,
            type: 'custom',
            renderComponent: CustomCellComponent,
            isSelected: false,
        },
        number: {
            title: 'Number',
            type: 'string',
            isSelected: false,
        },
        amount: {
            title: 'Amount',
            type: 'string',
            isSelected: false,
        },
        unit: {
            title: 'Unit',
            type: 'string',
            isSelected: false,
        },
        status: {
            title: 'Status',
            type: 'string',
            isSelected: false,
        },
        comments: {
            title: 'Comments',
            type: 'string',
            isSelected: false,
        },
        // actions: {
        //     title: 'Action',
        //     position: 'left',
        //     type: 'custom',
        //     renderComponent: TripListComponent,
        //     isSelected: false,
        // },
    },
};

export const settingsDE = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            type: 'custom',
            renderComponent: CustomCellComponent,
            hide: true,
            isSelected: false,
        },
        number: {
            title: 'Nummer',
            type: 'string',
            isSelected: false,
        },
        amount: {
            title: 'Menge',
            type: 'string',
            isSelected: false,
        },
        unit: {
            title: 'Maßeinheit',
            type: 'string',
            isSelected: false,
        },
        status: {
            title: 'Status',
            type: 'string',
            isSelected: false,
        },
        comments: {
            title: 'Anmerkung',
            type: 'string',
            isSelected: false,
        },
        // actions: {
        //     title: 'Aktion',
        //     position: 'left',
        //     type: 'custom',
        //     renderComponent: TripListComponent,
        //     isSelected: false,
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
        title: 'number',
        hide: false,
        disabled: false
    },
    {
        title: 'amount',
        hide: false,
        disabled: false
    },
    {
        title: 'unit',
        hide: false,
        disabled: false
    },
    {
        title: 'status',
        hide: false,
        disabled: false
    },
    // {
    //     title: 'actions',
    //     hide: false,
    //     disabled: true
    // }
];

export const tourTypesEN = [
    {
        "const": "TRADE",
        "description": "Trade"
    },
    {
        "const": "DISPOSAL",
        "description": "Disposal"
    },
    {
        "const": "FREIGHT",
        "description": "Freight"
    }
];


export const tourTypesDE = [
    {
        "const": "TRADE",
        "description": "Handel"
    },
    {
        "const": "DISPOSAL",
        "description": "Entsorgung"
    },
    {
        "const": "FREIGHT",
        "description": "Fracht"
    }
];