// import { CustomRenderComponent, MaterialGroupCellRenderComponent } from "../../app/main/material/list/list.component";

import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { CounterPartyComponent } from "../../app/@theme/components/cell/cell.component";
import { CounterPartyListComponent } from "../../app/@theme/components/custom-rander/counter-party-list/counter-party-list.component";

export const settingsEN = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            type: 'custom',
            hide: true,
            renderComponent: CustomCellComponent,
            display: true,
            isSelected: false
        },
        name: {
            title: 'Name',
            type: 'custom',
            renderComponent: CounterPartyComponent,
            display: true,
            isSelected: false
        },
        breifDescription: {
            title: 'Brief Description',
            type: 'string',
            display: true,
            isSelected: false
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
            renderComponent: CounterPartyComponent,
            isSelected: false
        },
        breifDescription: {
            title: 'Kurze Beschreibung',
            type: 'string',
            isSelected: false
        },
        actions: {
            title: 'Aktion',
            position: 'left',
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
        title: 'actions',
        hide: false,
        disabled: true
    }
]