// import { CustomRenderComponent, MaterialGroupCellRenderComponent } from "../../app/main/material/list/list.component";

import { ClassNameComponent, ContactComponent, LocationComponent, LocationLoadingComponent, LocationUnLoadingComponent, MaterialComponent, OrderComponent } from "../../app/@theme/components/cell/cell.component";
import { ToursListComponent } from "../../app/@theme/components/custom-rander/tours-list/tours-list.component";

export const settingsEN = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            type: 'number',
            hide: true,
            width: '200px',
            isSelected: false
        },

        // loadingId : el.loadingLocation ? el.loadingLocation.id : null ,
        // loadingName : el.loadingLocation ? el.loadingLocation.name : null,
        // unloadingId : el.unloadingLocation ? el.unloadingLocation.id : null,
        // unloadingName : el.unloadingLocation ? el.unloadingLocation.name : null

        loadingName: {
            title: 'Loading Location',
            type: 'custom',
            width: '300px',
            renderComponent: LocationLoadingComponent,
            isSelected: false
        },
        unloadingName: {
            title: 'Unloading Location',
            type: 'custom',
            width: '300px',
            renderComponent: LocationUnLoadingComponent,
            isSelected: false
        },
        deadlineDate: {
            title: 'Deadline Date',
            type: 'string',
            width: '200px',
            isSelected: false
        },
        executionDate: {
            title: 'Execution Date',
            type: 'string',
            width: '200px',
            isSelected: false
        },

        materialName: {
            title: 'Material',
            type: 'custom',
            width: '200px',
            renderComponent: MaterialComponent,
            isSelected: false
        },
        amount: {
            title: 'Amount ',
            type: 'string',
            width: '200px',
            isSelected: false
        },
        // order: {
        //     title: 'Order ID',
        //     type: 'custom',
        //     width: '200px',
        //     renderComponent: OrderComponent,
        //     isSelected: false
        // },
        type: {
            title: 'Type ',
            type: 'custom',
            width: '200px',
            renderComponent: ClassNameComponent,
            isSelected: false
        },
        // billedToContact: {
        //     title: 'Billed To Contact',
        //     type: 'custom',
        //     width: '200px',
        //     renderComponent: ContactComponent,
        //     isSelected: false
        // },
        driver: {
            title: 'Driver',
            type: 'string',
            width: '100px',
            isSelected: false
        },
        status: {
            title: 'Status',
            type: 'string',
            width: '100px',
            isSelected: false
        },
        comments: {
            title: 'Comments',
            type: 'string',
            width: '200px',
            isSelected: false
        },
        actions: {
            title: 'Action',
            position: 'left',
            filter: false,
            type: 'custom',
            width: '150px',
            renderComponent: ToursListComponent,
            isSelected: false
        },
    },
};

export const settingsDE = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            type: 'number',
            hide: true,
            width: '200px',
            isSelected: false

        },
        loadingName: {
            title: 'Ladestellen',
            type: 'custom',
            width: '300px',
            renderComponent: LocationComponent,
            isSelected: false
        },
        unloadingName: {
            title: 'Entladestellen',
            type: 'custom',
            width: '300px',
            renderComponent: LocationComponent,
            isSelected: false

        },
        deadlineDate: {
            title: 'Auslieferungs Deadline',
            type: 'string',
            width: '200px',
            isSelected: false
        },
        executionDate: {
            title: 'Ausführungsdatum',
            type: 'string',
            width: '200px',
            isSelected: false

        },

        materialName: {
            title: 'Materialien',
            type: 'custom',
            renderComponent: MaterialComponent,
            isSelected: false

        },
        amount: {
            title: 'Menge ',
            type: 'string',
            isSelected: false

        },
        // order: {
        //     title: 'Auftragsnummer',
        //     type: 'custom',
        //     width: '200px',
        //     renderComponent: OrderComponent,
        //     isSelected: false

        // },
        type: {
            title: 'Typ ',
            type: 'custom',
            width: '200px',
            renderComponent: ClassNameComponent,
            isSelected: false
        },
        driver: {
            title: 'Fahrer',
            type: 'string',
            width: '100px',
            isSelected: false
        },
        status: {
            title: 'Status',
            type: 'string',
            width: '100px',
            isSelected: false
        },
        comments: {
            title: 'Anmerkung',
            type: 'string',
            width: '200px',
            isSelected: false
        },
        // billedToContact: {
        //     title: 'In Rechnung gestellt an',
        //     type: 'custom',
        //     width: '200px',
        //     renderComponent: ContactComponent,
        //     isSelected: false
        // },
        actions: {
            title: 'Aktion',
            position: 'left',
            filter: false,
            type: 'custom',
            width: '150px',
            isSelected: false,
            renderComponent: ToursListComponent,
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
        title: 'loadingName',
        hide: false,
        disabled: false
    },
    {
        title: 'unloadingName',
        hide: false,
        disabled: false
    },
    {
        title: 'deadlineDate',
        hide: false,
        disabled: false
    },
    {
        title: 'executionDate',
        hide: false,
        disabled: false
    },

    {
        title: 'materialName',
        hide: false,
        disabled: false
    },
    {
        title: 'amount',
        hide: false,
        disabled: false
    },
    // {
    //     title: 'order',
    //     hide: false,
    //     disabled: false
    // },  
    {
        title: 'type',
        hide: false,
        disabled: false
    },
    {
        title: 'driver',
        hide: false,
        disabled: false
    },
    {
        title: 'status',
        hide: false,
        disabled: false
    },
    {
        title: 'comments',
        hide: false,
        disabled: false
    },
    // {
    //     title: 'billedToContact',
    //     hide: false,
    //     disabled: false
    // },
    {
        title: 'actions',
        hide: false,
        disabled: true
    }
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



export const tourStatusEN = [ 
    {
        "const": "OPEN",
        "description": "Open"
     },
     {
        "const": "TRIPS-COMPLETED",
        "description": "Trip(s) completed"
     },
     {
        "const": "FINISHED",
        "description": "Finished"
     }
];


export const tourStatusDE = [
    {
        "const": "OPEN",
        "description": "Offene Einzelfahrten"
     },
     {
        "const": "TRIPS-COMPLETED",
        "description": "Abgeschlossene Einzelfahrten"
     },
     {
        "const": "FINISHED",
        "description": "Abgeschlossene Tour"
     }
];

