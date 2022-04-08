import { OffersListComponent } from "../../app/@theme/components/custom-rander/offers-list/offers-list.component";

export const settingsEN = {
  actions: false,
  columns: {
    id: {
      title: "ID",
      type: "string",
      isSelected: false,
    },
    billedToContact: {
      title: "Billed To",
      type: "string",
      isSelected: false,
    },
    loadingLocation: {
      title: "Loading",
      type: "string",
      isSelected: false,
    },
    unLoadingLocation: {
      title: "Unloading",
      type: "string",
      isSelected: false,
    },
    materialName: {
      title: "Material",
      type: "string",
      isSelected: false,
    },
    priceUnit: {
      title: "Price/Unit",
      type: "string",
      isSelected: false,
    },
    minimumPrice: {
      title: "Mininum Price",
      type: "string",
      isSelected: false,
    },
    type: {
      title: "Type",
      type: "string",
      isSelected: false,
    },
    validityFrom: {
      title: "Validity from",
      type: "string",
      isSelected: false,
    },
    validityTo: {
      title: "Validity to",
      type: "string",
      isSelected: false,
    },
    actions: {
      title: "Action",
      position: "left",
      filter: false,
      type: "custom",
      renderComponent: OffersListComponent,
      isSelected: false,
    },
  },
};

export const settingsDE = {
  actions: false,
  columns: {
    id: {
      title: "ID",
      type: "string",
      isSelected: false,
    },
    billedToContact: {
      title: "Rechnung geschickt an",
      type: "string",
      isSelected: false,
    },
    loadingLocation: {
      title: "Ladestellen",
      type: "string",
      isSelected: false,
    },
    unLoadingLocation: {
      title: "Endladestellen",
      type: "string",
      isSelected: false,
    },
    materialName: {
      title: "Material",
      type: "string",
      isSelected: false,
    },
    priceUnit: {
      title: "Preise/inheit",
      type: "string",
      isSelected: false,
    },
    minimumPrice: {
      title: "Minimaler Preis",
      type: "string",
      isSelected: false,
    },
    type: {
      title: "Geschäft",
      type: "string",
      isSelected: false,
    },
    validityFrom: {
      title: "Gültig Ab",
      type: "string",
      isSelected: false,
    },
    validityTo: {
      title: "Gültig Bis",
      type: "string",
      isSelected: false,
    },
    actions: {
      title: "Action",
      position: "left",
      filter: false,
      type: "custom",
      renderComponent: OffersListComponent,
      isSelected: false,
    },
  },
};



export const settingsColumn = [
  {
    title: "id",
    hide: false,
    disabled: true,
  },
  {
    title: "billedToContact",
    hide: false,
    disabled: false,
  },
  {
    title: "loadingLocation",
    hide: false,
    disabled: false,
  },
  {
    title: "unLoadingLocation",
    hide: false,
    disabled: false,
  },
  {
    title: "materialName",
    hide: false,
    disabled: false,
  },
  {
    title: "priceUnit",
    hide: false,
    disabled: false,
  },
  {
    title: "minimumPrice",
    hide: false,
    disabled: false,
  },
  {
    title: "materialName",
    hide: false,
    disabled: false,
  },
  {
    title: "type",
    type: "string",
    isSelected: false,
  },
  {
    title: "validityFrom",
    type: "string",
    isSelected: false,
  },
  {
    title: "validityTo",
    type: "string",
    isSelected: false,
  },
  {
    title: "actions",
    hide: false,
    disabled: true,
  },
];

export const orderTypeEN = [
  {
    const: "TRADE",
    description: "Trade",
  },
  {
    const: "DISPOSAL",
    description: "Disposal",
  },
  {
    const: "FREIGHT",
    description: "Freight",
  },
];

export const orderTypeDE = [
  {
    const: "TRADE",
    description: "Handel",
  },
  {
    const: "DISPOSAL",
    description: "Entsorgung",
  },
  {
    const: "FREIGHT",
    description: "Fracht",
  },
];
