# importOK Vue.js Component

This is a Vue.js component for [importOK](https://importok.io/).

## Installation

```
npm install --save @importok/vue
```

## Usage

```vue
<script>
import ImportokWizard from "@importok/vue";
 
export default {
    components: {
        ImportokWizard
    },
 
    methods: {
        /**
          * Push the provided record to the API
          * Check https://importok.io/docs/webhooks.html for more details
          */
        async saveRecord(record, meta) {}
    },
 
    data() {
        return {
            /**
              * Import fields to be mapped
              * Check https://importok.io/docs/fields.html for more details
              */
            fields: {}
        };
    }
};
</script>
<template>
    <ImportokWizard
      title="ImportOK Example for Vue"
      :fields="fields"
      sample-file="/sample.csv"
      @record-ready="saveRecord"
    />
</template>
```
