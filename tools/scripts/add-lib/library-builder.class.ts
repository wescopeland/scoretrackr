import * as prompts from 'prompts';
import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { prompt } from 'enquirer';
import { spawn } from 'child_process';

export type LibraryType = 'feature' | 'ui' | 'data-access' | 'util';
export type LibraryDomain = 'app-specific' | 'grouped app-specific' | 'shared';
export type SchematicType = 'angular' | 'react' | 'workspace';

export interface UserResponses {
  appName: string;
  domain: LibraryDomain;
  isDependentOnAppData: boolean;
  isDependentOnMultipleAppLibraries?: boolean;
  isDryRun: boolean;
  isGeneric: boolean;
  libraryName: string;
  libraryType: LibraryType;
  schematicType: SchematicType;
}

export default class LibraryBuilder {
  appName: string;
  domain: LibraryDomain;
  isDependentOnAppData: boolean;
  isDependentOnMultipleAppLibraries: boolean;
  isDryRun: boolean;
  isGeneric: boolean;
  libraryName: string;
  libraryType: LibraryType;
  schematicType: SchematicType;

  buildExecString(options: UserResponses): string {
    let commandBuilder: string[] = [
      `nx g @nrwl/${options.schematicType}:library`
    ];

    if (options.domain === 'shared') {
      commandBuilder.push(options.libraryName);
      commandBuilder.push(`--directory=shared/${options.libraryType}`);
    } else if (options.domain === 'app-specific') {
      commandBuilder.push(`${options.libraryType}-${options.libraryName}`);
      commandBuilder.push(`--directory=${options.appName}`);
    } else if (options.domain === 'grouped app-specific') {
      commandBuilder.push(`${options.libraryType}-${options.libraryName}`);
      commandBuilder.push(`--directory=shared/${options.appName}`);
    }

    commandBuilder.push(`--tags=${this.buildTags(options)}`);

    if (options.isDryRun) {
      commandBuilder.push('--dry-run');
    }

    console.log(commandBuilder.join(' '));
    return commandBuilder.join(' ');
  }

  buildTags(options: UserResponses): string {
    let tags: string[] = [];

    if (options.domain === 'shared') {
      tags.push('scope:shared');
    }

    tags.push(`type:${options.libraryType}`);

    return tags.join(',');
  }

  executeAddLibSchematic(options: UserResponses) {
    spawn(this.buildExecString(options), null, {
      stdio: 'inherit',
      shell: true
    }).on('exit', (error) => {
      if (!error) {
        console.log('All done! ✨ 🦄');
      }
    });
  }

  async getAppName(): Promise<string> {
    const response = await prompts({
      type: 'text',
      name: 'value',
      message:
        'What is the name of the app or feature this library will be used in?'
    });

    return dasherize(response.value as string);
  }

  async getUserToggleResponse(message: string): Promise<boolean> {
    const response = await prompts({
      message,
      type: 'toggle',
      name: 'value',
      active: 'yes',
      inactive: 'no'
    });

    return response.value;
  }

  async getSchematicType(): Promise<SchematicType> {
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'What framework will this library use?',
      choices: [
        {
          title: 'Angular',
          value: 'angular'
        },
        {
          title: 'React',
          value: 'react'
        },
        {
          title: 'None',
          value: 'workspace'
        }
      ]
    });

    return response.value;
  }

  async getLibraryType(): Promise<LibraryType> {
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'What type of library will this be?',
      choices: [
        {
          title: 'Feature',
          description:
            'Smart components that handle business logic, often app-specific, often lazy-loaded',
          value: 'feature'
        },
        {
          title: 'UI',
          description:
            'Related presentational components that have no services injected into them',
          value: 'ui'
        },
        {
          title: 'Data Access',
          description: 'HTTP access, interfaces, or state management',
          value: 'data-access'
        },
        {
          title: 'Util',
          description:
            'Common utilities/services used by many libraries, a collection of pure functions',
          value: 'util'
        }
      ],
      initial: 0
    });

    return response.value;
  }

  async getLibraryName(
    libraryType: LibraryType,
    domain: LibraryDomain
  ): Promise<{ libraryName: string }> {
    let message = 'What will this library be named?';

    if (domain === 'app-specific' && libraryType === 'feature') {
      message += ' (recommended: feature-shell)';
    }

    return await prompt({
      message,
      type: 'input',
      name: 'libraryName',
      format: function (userResponse) {
        if (domain === 'shared') {
          return dasherize(userResponse);
        } else {
          return dasherize(`${libraryType}-${userResponse}`);
        }
      },
      result: function (userResponse) {
        if (domain === 'shared') {
          return dasherize(userResponse);
        } else {
          if (userResponse.length && userResponse[0] === '-') {
            userResponse = userResponse.substring(1);
          }

          return dasherize(userResponse);
        }
      }
    });
  }

  getNeededDomain(
    isDependentOnAppData: boolean,
    isDependentOnMultipleAppLibraries: boolean,
    isGeneric: boolean
  ): LibraryDomain {
    let neededDomain: LibraryDomain;

    if (isDependentOnAppData) {
      if (!isDependentOnMultipleAppLibraries) {
        neededDomain = 'app-specific';
      } else if (isGeneric) {
        neededDomain = 'shared';
      } else if (!isGeneric) {
        neededDomain = 'grouped app-specific';
      }
    } else if (isGeneric) {
      neededDomain = 'shared';
    } else if (!isGeneric) {
      neededDomain = 'grouped app-specific';
    }

    return neededDomain;
  }

  async promptUser() {
    console.log('🚧 Scoretrackr Library Builder 🚧');

    this.isDryRun = await this.getUserToggleResponse('Will this be a dry run?');
    this.libraryType = await this.getLibraryType();
    this.isDependentOnAppData = await this.getUserToggleResponse(
      'Will this new library be dependent on any app-specific data?'
    );

    if (this.isDependentOnAppData) {
      this.isDependentOnMultipleAppLibraries = await this.getUserToggleResponse(
        'Will this new library depend on MORE THAN ONE app-specific library?'
      );

      if (this.isDependentOnMultipleAppLibraries) {
        this.isGeneric = await this.getUserToggleResponse(
          'Can this library be genericized and made reusable?'
        );
      }
    } else {
      this.isGeneric = await this.getUserToggleResponse(
        'Can this library be genericized and made reusable?'
      );
    }

    if (
      this.isGeneric === false ||
      this.isDependentOnMultipleAppLibraries === false
    ) {
      this.appName = await this.getAppName();
    }

    this.domain = this.getNeededDomain(
      this.isDependentOnAppData,
      this.isDependentOnMultipleAppLibraries,
      this.isGeneric
    );

    if (this.libraryType !== 'util') {
      this.schematicType = await this.getSchematicType();
    } else {
      this.schematicType = 'workspace';
    }

    this.libraryName = (
      await this.getLibraryName(this.libraryType, this.domain)
    ).libraryName;

    const userResponses: UserResponses = {
      appName: this.appName,
      domain: this.domain,
      isDependentOnAppData: this.isDependentOnAppData,
      isDependentOnMultipleAppLibraries: this.isDependentOnMultipleAppLibraries,
      isDryRun: this.isDryRun,
      isGeneric: this.isGeneric,
      libraryName: this.libraryName,
      libraryType: this.libraryType,
      schematicType: this.schematicType
    };

    console.log('');
    this.executeAddLibSchematic(userResponses);
  }
}
