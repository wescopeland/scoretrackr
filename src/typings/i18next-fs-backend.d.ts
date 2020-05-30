declare namespace I18next {
  interface I18nextOptions extends i18nextFsBackEnd.I18nextOptions {}
}

declare namespace i18nextFsBackEnd {
  /**
   * @summary Options for "i18next-node-fs-backend".
   * @interface
   */
  interface i18nextFsBackEndOptions {
    /**
     * @summary Path where resources get loaded from.
     * @type {string}
     */
    loadPath: string;

    /**
     * @summary Path to post missing resources
     * @type {string}
     */
    addPath: string;

    /**
     * @summary jsonIndent to use when storing json files
     * @type {number}
     */
    jsonIndent: number;

    /**
     * @summary custom parser
     * @type {function}
     */
    parse?: (data: any) => any;
  }

  /**
   * @summary Options for "i18next".
   * @interface
   */
  interface I18nextOptions {
    backend?: i18nextFsBackEndOptions;
  }
}

declare module 'i18next-fs-backend' {
  import * as i18next from 'i18next';

  class Backend
    implements i18next.BackendModule<i18nextFsBackEnd.i18nextFsBackEndOptions> {
    type: 'backend';
    constructor(
      services?: any,
      options?: i18nextFsBackEnd.i18nextFsBackEndOptions
    );
    init(
      services: i18next.Services,
      backendOptions?: i18nextFsBackEnd.i18nextFsBackEndOptions,
      i18nextOptions?: i18next.InitOptions
    ): void;
    read(
      language: string,
      namespace: string,
      callback: i18next.ReadCallback
    ): void;
    create(
      languages: string[],
      namespace: string,
      key: string,
      fallbackValue: string
    ): void;
  }

  const module: typeof Backend;
  export = module;
}
