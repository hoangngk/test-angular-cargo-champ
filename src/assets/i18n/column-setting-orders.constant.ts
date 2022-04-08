// import { CustomRenderComponent, MaterialGroupCellRenderComponent } from "../../app/main/material/list/list.component";

import { DatePipe } from "@angular/common";
import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { OrdersListComponent } from "../../app/@theme/components/custom-rander/orders-list/orders-list.component";

export const settingsEN = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            // type: 'number',
            // hide: true,
            type: 'custom',
            renderComponent: CustomCellComponent,
            isSelected: false
        },
        billedToContact: {
            title: 'Billed To',
            type: 'string',
            isSelected: false
        },
        loadingLocation: {
            title: 'Loading',
            type: 'string',
            isSelected: false
        },
        unLoadingLocation: {
            title: 'Unloading',
            type: 'string',
            isSelected: false
        },
        materialName: {
            title: 'Billed To',
            type: 'string',
            isSelected: false
        },
        priceUnit:{
            title: 'Price/Unit',
            type: 'string',
            isSelected: false  
        },
        minimumPrice:{
            title: 'Mininum Price',
            type: 'string',
            isSelected: false   
        },
        type: {
            title: 'Type',
            type: 'string',
            isSelected: false
        },
        validityFromTo:{
            title: 'Validity from to',
            type: 'string',
            isSelected: false  
        },
        // note: {
        //     title: 'Offer Title',
        //     // type: 'string',
        //     show: false,
        //     type: 'string',
        //     // renderComponent: CustomCellComponent,
        //     isSelected: false
        // },
        // offerDate: {
        //     title: 'Offer Date',
        //     type: 'string',
        //     // valuePrepareFunction: (value) => {
        //     //     var raw = new Date(value);
        //     //     var formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy');
        //     //     return value ? formatted : '-';
        //     // },
        //     isSelected: false
        // },
       
        // status: {
        //     title: 'Status',
        //     type: 'number',
        //     isSelected: false
        // },
    

        
        actions: {
            title: 'Action',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: OrdersListComponent,
            isSelected: false
        },
    },
};

export const settingsDE = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            // type: 'number',
            hide: true,
            type: 'custom',
            renderComponent: CustomCellComponent,
            isSelected: false
        },
        billedToContact: {
            title: 'Rechnung geschickt an',
            type: 'string',
            isSelected: false
        },
        loadingLocation: {
            title: 'Ladestellen',
            type: 'string',
            isSelected: false
        },
        unLoadingLocation: {
            title: 'Endladestellen',
            type: 'string',
            isSelected: false
        },
        materialName: {
            title: 'Material',
            type: 'string',
            isSelected: false
        },
        priceUnit:{
            title: 'Preise/inheit',
            type: 'string',
            isSelected: false  
        },
        minimumPrice:{
            title: 'Minimaler Preis',
            type: 'string',
            isSelected: false   
        },
        type: {
            title: 'Art der Angebot/Bestellung',
            type: 'string',
            isSelected: false
        },
        validityFromTo:{
            title: 'Gültigkeit von bis',
            type: 'string',
            isSelected: false  
        },
        actions: {
            title: 'Aktion',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: OrdersListComponent,
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
        title: 'billedToContact',
        hide: false,
        disabled: false
    },
    {
        title: 'loadingLocation',
        hide: false,
        disabled: false
    },
    {
        title: 'unLoadingLocation',
        hide: false,
        disabled: false
    },
    {
        title: 'materialName',
        hide: false,
        disabled: false
    },
    {
        title: 'priceUnit',
        hide: false,
        disabled: false
    },
    {
        title: 'minimumPrice',
        hide: false,
        disabled: false
    },
    {
        title: 'materialName',
        hide: false,
        disabled: false
    },
    {
        title: 'type',
        type: 'string',
        isSelected: false  
    },
    {
        title: 'validityFromTo',
        type: 'string',
        isSelected: false  
    },
    {
        title: 'actions',
        hide: false,
        disabled: true
    }
];

export const orderTypeEN = [
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


export const orderStatusEN = [
    {
        "const": "OFFER",
        "description": "Offer"
    },
    {
        "const": "SINGLE",
        "description": "Single"
    },
    {
        "const": "MULTI",
        "description": "Multi"
    },
    {
        "const": "IN-TRANSITION",
        "description": "In transition"
    },
    {
        "const": "PAID-IN-FULL",
        "description": "Paid in full"
    },
    {
        "const": "TOUR-COMPLETE",
        "description": "Complete"
    }
]



export const orderTypeDE = [
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
export const orderStatusDE = [
    {
        "const": "OFFER",
        "description": "​​Angebot"
    },
    {
        "const": "SINGLE",
        "description": "Einfach"
    },
    {
        "const": "MULTI",
        "description": "Multi"
    },
    {
        "const": "IN-TRANSITION",
        "description": "Transaktion"
    },
    {
        "const": "PAID-IN-FULL",
        "description": "Bezahlt"
    },
    {
        "const": "TOUR-COMPLETE",
        "description": "Abgeschlossen"
    }
];