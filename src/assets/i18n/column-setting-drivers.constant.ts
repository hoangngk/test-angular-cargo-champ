import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { OrdersListComponent } from "../../app/@theme/components/custom-rander/orders-list/orders-list.component";

export const settingsEN = {
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
        name: {
            title: 'Name',
            type: 'string',
            isSelected: false
        },
        lastName: {
            title: 'Last Name',
            type: 'string',
            isSelected: false
        },
        
        
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
        name: {
            title: 'Name',
            type: 'string',
            isSelected: false
        },
        lastName: {
            title: 'Last Name',
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
        title: 'name',
        hide: false,
        disabled: false
    },
    {
        title: 'lastName',
        hide: false,
        disabled: false
    },
      {
        title: 'actions',
        hide: false,
        disabled: true
    }
];
