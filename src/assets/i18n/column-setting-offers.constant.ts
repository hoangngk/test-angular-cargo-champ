// import { CustomCellComponent } from "../../app/@theme/components/cell-change/custom-cell/custom-cell.component";
import { OrdersListComponent } from "../../app/@theme/components/custom-rander/orders-list/orders-list.component";

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
      renderComponent: OrdersListComponent,
      isSelected: false,
    },
  },
};
