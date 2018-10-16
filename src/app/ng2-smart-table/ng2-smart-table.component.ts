import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2-smart-table',
  templateUrl: './ng2-smart-table.component.html',
  styleUrls: ['./ng2-smart-table.component.css']
})
export class Ng2SmartTableComponent implements OnInit {
  settings: any;
  data: any;
  constructor() {
    this.settings = {
      columns: [
        {
          title: 'ID',
          filter: true,
          sort: true,
          sortDirection: 'DESC',
          type: 'list',
          config: {
            list: [{title: 'Lion King', value: '1'}, {title: 'The Matrix', value: '2'}]
          }
        },
        {
          title: 'Full Name',
          filter: true,
          sort: true,
          sortDirection: 'ASC',
          // valuePrepareFunction: (cell, row) => row.paymentStatus === 0 ? 'Pending' : 'Received',
          editor: {
            type: 'list',
            config: {
              list: [{ value: 0, title: 'Pending' }, { value: 1, title: 'Received' }]
            }
          },
          // editable: false
        },
        {
          title: 'User Name',
          filter: true,
          sort: true,
          sortDirection: 'ASC',
          editor: {
            type: 'list',
            config: {
              list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
                value: '<b>Samantha</b>',
                title: 'Samantha'
              }]
            }
          }
        },
        {
          title: 'Email',
          filter: true,
          sort: true,
          sortDirection: 'ASC',
          type: 'list',
          config: {
            list: [{title: 'Lion King', value: '1'}, {title: 'The Matrix', value: '2'}]
          },
        },
      ],

      hideHeader: false,

      mode: 'inline',

      actions: {
        columnTitle: 'Actions',
        add: true,
        edit: true,
        delete: true
      },

      editor: {
        type: 'checkbox',
        config: true
      },

      filter: {
        inputClass: ''
      },

      edit: {
        editButtonContent: 'Edit',
        confirmSave: true
      },

      pager: {
        display: true,
        perPage: 20
      }
    };

    this.data = [
      [1, 'Amin', 'Amin020', 'Amin@yahoo.com'],
      [2, 'Mohamed', 'Mohamed020', 'Mohamed@yahoo.com']
      // {
      //   id: 1,
      //   name: 'Leanne Graham',
      //   username: 'Bret',
      //   email: 'Sincere@april.biz'
      // },
      // // ... other rows here
      // {
      //   id: 11,
      //   name: 'Nicholas DuBuque',
      //   username: 'Nicholas.Stanton',
      //   email: 'Rey.Padberg@rosamond.biz'
      // }
    ];
  }

  ngOnInit() {
  }

  selectedRow(event) {
    console.log('UserRowSelect event`: ', event);
  }

  createNewRow(event) {
    console.log('Create event: ', event);
  }

  confirmEdit(event) {
    console.log('editConfirm event: ', event);
  }

}
