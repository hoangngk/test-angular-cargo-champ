import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { CounterPartyComponent, CounterPartyPriceComponent, LocationCommonComponent, LocationComponent, MaterialComponent } from "../../app/@theme/components/cell/cell.component";
import { PriceListComponent } from "../../app/@theme/components/custom-rander/price-list/price-list.component";

export const settingsEN = {
    actions: false,
    columns: {
        id: {
            title: 'ID',
            // type: 'number',
            hide: true,
            type: 'custom',
            renderComponent: CustomCellComponent,
            class: 'd-none',
            isSelected: false
        },
        // counterPartyId: el.counterparty ? el.counterparty.id : null,
        // counterPartyName: el.counterparty ? el.counterparty.name : null,
        // locationId: el.location.id  ? el.location.id : null,
        // locationName: el.location.name  ? el.location.name : null,
        // materialId: el.material.id  ? el.material.id : null,
        // materialName: el.material.name  ? el.material.name : null
        counterPartyName: {
            title: 'Counter Party',
            type: 'custom',
            renderComponent: CounterPartyPriceComponent,
            isSelected: false
        },
        locationName: {
            title: 'Location',
            type: 'custom',
            renderComponent: LocationCommonComponent,
            isSelected: false
        },
        materialName: {
            title: 'Material',
            type: 'custom',
            renderComponent: MaterialComponent,
            isSelected: false
        },
        price: {
            title: 'Price',
            type: 'number',
            isSelected: false
        },
        validFrom: {
            title: 'Valid From',
            type: 'date',
            isSelected: false
        },
        validUntil: {
            title: 'Valid Untill',
            type: 'date',
            isSelected: false
          
        },
        actions: {
            title: 'Action',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: PriceListComponent,
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
            isSelected: false,
            hide: true,
        },
        counterPartyName: {
            title: 'Kontakt',
            type: 'custom',
            renderComponent: CounterPartyPriceComponent,
            isSelected: false
        },
        locationName: {
            title: 'Standort',
            type: 'custom',
            renderComponent: LocationCommonComponent,
            isSelected: false
        },
        materialName: {
            title: 'Material',
            type: 'custom',
            renderComponent: MaterialComponent,
            isSelected: false
        },
        price: {
            title: 'Preis',
            type: 'number',
            isSelected: false
        },
        validFrom: {
            title: 'Gültig bis',
            type: 'string',
            isSelected: false
        },
        validUntil: {
            title: 'Gültig bis',
            type: 'string',
            isSelected: false
        },
        actions: {
            title: 'Aktion',
            position: 'left',
            filter: false,
            type: 'custom',
            renderComponent: PriceListComponent,
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
        title: 'counterpartyName',
        hide: false,
        disabled: false
    },
    {
        title: 'locationName',
        hide: false,
        disabled: false
    },
    {
        title: 'materialName',
        hide: false,
        disabled: false
    },
    {
        title: 'price',
        hide: false,
        disabled: false
    },
    {
        title: 'validFrom',
        hide: false,
        disabled: false
    },
    {
        title: 'validUntil',
        hide: false,
        disabled: false
    },
    {
        title: 'actions',
        hide: false,
        disabled: true
    }
];