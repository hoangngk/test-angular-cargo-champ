// import { CustomRenderComponent, MaterialGroupCellRenderComponent } from "../../app/main/material/list/list.component";

import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { ContactComponent } from "../../app/@theme/components/cell/cell.component";
import { MaterialListComponent } from "../../app/@theme/components/custom-rander/material-list/material-list.component";
import { PlacesListComponent } from "../../app/@theme/components/custom-rander/places-list/places-list.component";

export const settingsEN  = {
    actions: false,

    columns: {
      id: {
        title: 'ID',
        type: 'number',
        hide: true,
        isSelected: false
      },
      name: {
        title: 'Name',
        type: 'custom',
        renderComponent: CustomCellComponent,
        isSelected: false
      },
      shortDesc: {
        title: 'Short Description',
        type: 'string',
        isSelected: false
      },
      // address: {
      //   title: 'Address',
      //   type: 'string',
      // },
      // contactsName : el.contacts && el.contacts?.length > 0  ? el.contacts[0].name : null,
      // contactsID : el.contacts && el.contacts?.length > 0  ? el.contacts[0].id : null
      contactsName: {
        title: 'Contacts',
        type: 'custom',
        renderComponent: ContactComponent,
        isSelected: false
      },
      actions: {
        title: 'Action',
        position: 'left',
        filter: false,
        type: 'custom',
        renderComponent: PlacesListComponent,
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
        isSelected: false
      },
      name: {
        title: 'Name',
        type: 'custom',
        renderComponent: CustomCellComponent,
        isSelected: false
      },
      shortDesc: {
        title: 'Kurze Beschreibung',
        type: 'string',
        isSelected: false
      },
      // address: {
      //   title: 'Die Anschrift',
      //   type: 'string',
      // },
      contactsName: {
        title: 'Kontakte',
        type: 'custom',
        renderComponent: ContactComponent,
        isSelected: false
      },
      actions: {
        title: 'Aktion',
        position: 'left',
        filter: false,
        type: 'custom',
        renderComponent: PlacesListComponent,
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
        title: 'shortDesc',
        hide: false,
        disabled: false
    },
    {
        title: 'contactsName',
        hide: false,
        disabled: false
    },
    {
        title: 'actions',
        hide: false,
        disabled: true
    }
]