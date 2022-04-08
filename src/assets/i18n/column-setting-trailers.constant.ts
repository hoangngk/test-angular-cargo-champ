// import { CustomRenderComponent, MaterialGroupCellRenderComponent } from "../../app/main/material/list/list.component";

import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { TrailersListComponent } from "../../app/@theme/components/custom-rander/trailers-list/trailers-list.component";

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
            // type: 'string',
            show: false,
            type: 'custom',
            renderComponent: CustomCellComponent,
            isSelected: false
        },
        vehicleCategory: {
            title: 'Category',
            type: 'string',
            isSelected: false
        },
       
        actions: {
            title: 'Action',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: TrailersListComponent,
            isSelected: false
        },
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
            isSelected: false
        },
        name: {
            title: 'Name',
            type: 'custom',
            renderComponent: CustomCellComponent,
            show: false,
            isSelected: false
        },
        vehicleCategory: {
            title: 'Kategorie',
            type: 'string',
            isSelected: false
        },
        actions: {
            title: 'Aktion',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: TrailersListComponent,
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
        title: 'vehicleCategory',
        hide: false,
        disabled: false
    },
  
    {
        title: 'actions',
        hide: false,
        disabled: true
    }
]