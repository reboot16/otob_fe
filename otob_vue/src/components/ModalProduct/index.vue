<template>
  <b-modal id="modal-product-form">
    <template slot="modal-header" slot-scope="{ close }">
      <!-- Emulate built in modal header close button action -->
      <b-button size="sm" variant="outline-danger" @click="close()">
        Close Modal
      </b-button>
      <h5>Modal Header</h5>
    </template>

    <template slot="default" slot-scope="{ hide }">
      <p>Modal Body with button</p>
      <b-button @click="hide()">Hide Modal</b-button>
    </template>

    <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <b>Custom Footer</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="ok()">
        OK
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Forget it
      </b-button>
    </template>
  </b-modal>

</template>
