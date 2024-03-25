declare module '@importok/vue' {
    import Vue from 'vue';

    import { ImportConfigWithOptionals } from '@importok/javascript/MainElement';

    export class ImportokWizard extends Vue {
        props: ImportConfigWithOptionals;
    }
}