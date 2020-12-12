const newtTables = [
    {
        id: 'table-1',
        name: "Стол 1",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-2',
        name: "Стол 2",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-3',
        name: "Стол 3",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-4',
        name: "Стол 4",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-5',
        name: "Стол 5",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-6',
        name: "Стол 6",
        list: [],
        subtotal: 0,
        sale: 0,
        total: 0
    },
    {
        id: 'table-7',
        name: "Стол 7",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-8',
        name: "Стол 8",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-9',
        name: "Стол 9",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-10',
        name: "Стол 10",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-11',
        name: "Стол 11",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-12',
        name: "Стол 12",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-13',
        name: "Стол 13",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-14',
        name: "Стол 14",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'table-15',
        name: "Стол 15",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-1',
        name: "Самовывоз 1",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-2',
        name: "Самовывоз 2",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-3',
        name: "Самовывоз 3",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-4',
        name: "Самовывоз 4",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-5',
        name: "Самовывоз 5",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-6',
        name: "Самовывоз 6",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-7',
        name: "Самовывоз 7",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },
    {
        id: 'pickup-table-8',
        name: "Самовывоз 8",
        list: [],
        subtotal: 0,
        sale: 0,
        saleCapacity: 0,
        total: 0
    },

];
const localTables = JSON.parse(window.localStorage.getItem('tables'));
const tables = localTables || newtTables;

const total = window.localStorage.getItem('total') || 0;

const initialState = {
    loading: true,
    products: [],
    total,
    tables,
    descriptionParams: {
      isOpen: false,
      tableId: null,
      productId: null
    },

};

export default initialState;