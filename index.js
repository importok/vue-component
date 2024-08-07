import ImportOK from '@importok/javascript';
import { h } from 'vue';

const ImportokWizard = {
    props: {
        title: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().title,
        },
        subtitles: {
            type: Array,
            required: false,
            default: ImportOK.getDefaults().subtitles,
        },
        fields: {
            type: Array,
            required: true
        },
        sampleFile: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().sampleFile,
        },
        throttle: {
            type: [Boolean, Number],
            required: false,
            default: ImportOK.getDefaults().throttle,
        },
        meta: {
            type: Object,
            required: false,
            default: ImportOK.getDefaults().meta,
        },
        locale: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().locale,
        },
        onRecordReady: {
            type: Function,
            required: false,
            default: ImportOK.getDefaults().onRecordReady,
        },
        onImportReady: {
            type: Function,
            required: false,
            default: ImportOK.getDefaults().onImportReady,
        },
    },

    mounted() {
        ImportOK.defineCustomElements();

        this.wizard = ImportOK.add(
            this.$refs.elementRef,
            {
                ...this.$props,
                ...this.$attrs,
            }
        );
    },

    beforeUmount() {
        if (this.wizard) {
            this.wizard.destroy();
            this.wizard = undefined
        }
    },

    render() {
        return h('div', { className: 'ImportokWizardWrapper', ref: 'elementRef' });
    },
};

export default ImportokWizard;