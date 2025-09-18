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
            type: Object,
            required: true
        },
        transformers: {
            type: Object,
            required: false,
            default: ImportOK.getDefaults().transformers,
        },
        validators: {
            type: Object,
            required: false,
            default: ImportOK.getDefaults().validators,
        },
        providers: {
            type: Object,
            required: false,
            default: ImportOK.getDefaults().providers,
        },
        mapper: {
            type: Function,
            required: false,
            default: ImportOK.getDefaults().mapper,
        },
        locale: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().locale,
        },
        translations: {
            type: Object,
            required: false,
            default: ImportOK.getDefaults().translations,
        },
        sampleFile: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().sampleFile,
        },
        uploadedFile: {
            type: File,
            required: false,
            default: ImportOK.getDefaults().uploadedFile,
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
        onImportProgress: {
            type: Function,
            required: false,
            default: ImportOK.getDefaults().onImportProgress,
        },
        onStepEnter: {
            type: Function,
            required: false,
            default: ImportOK.getDefaults().onStepEnter,
        },
        onStepExit: {
            type: Function,
            required: false,
            default: ImportOK.getDefaults().onStepExit,
        },
        style: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().style,
        },
        editorMode: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().editorMode,
        },
        license: {
            type: String,
            required: false,
            default: ImportOK.getDefaults().license,
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