// import { CustomRenderComponent, MaterialGroupCellRenderComponent } from "../../app/main/material/list/list.component";

import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { MaterialListComponent } from "../../app/@theme/components/custom-rander/material-list/material-list.component";

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
        description: {
            title: 'Short Description',
            type: 'string',
            isSelected: false
        },
        // materialGroup: {
        //     title: 'Material Group',
        //     type: 'custom',
        //     renderComponent: MaterialGroupCellRenderComponent,
        // },

        density: {
            title: 'Density',
            type: 'number',
            isSelected: false
        },
        granulation: {
            title: 'Granulation',
            type: 'number',
            isSelected: false
        },
        actions: {
            title: 'Action',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: MaterialListComponent,
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
        description: {
            title: 'Kurze Beschreibung',
            type: 'string',
            isSelected: false
        },
        // materialGroup: {
        //     title: 'Materialgruppe',
        //     type: 'custom',
        //     renderComponent: MaterialGroupCellRenderComponent,
        // },

        density: {
            title: 'Dichte',
            type: 'number',
            isSelected: false
        },
        granulation: {
            title: 'Granulation',
            type: 'number',
        },
        actions: {
            title: 'Aktion',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: MaterialListComponent,
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
        title: 'description',
        hide: false,
        disabled: false
    },
    {
        title: 'density',
        hide: false,
        disabled: false
    },
    {
        title: 'granulation',
        hide: false,
        disabled: false
    },
    {
        title: 'actions',
        hide: false,
        disabled: true
    }
]