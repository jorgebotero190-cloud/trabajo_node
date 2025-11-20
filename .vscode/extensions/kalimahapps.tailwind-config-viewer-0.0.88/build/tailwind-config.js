"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailwindConfig = void 0;
/* eslint-disable max-depth */
/* eslint-disable guard-for-in */
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const dlv_1 = __importDefault(require("dlv"));
const module_from_string_1 = require("module-from-string");
/**
 * File not found exception
 *
 * @param {string} message The exception message
 */
const FileNotFoundException = function (message) {
    this.message = message;
    this.name = 'FileNotFoundException';
};
/**
 * Process and prepare the tailwind config.
 * This code is mostly taken from tailwindcss.com repo and it
 * has been minimally modified and converted to a class.
 * It should not be drastically changes and need to be as close to
 * the original as possible to ensure that it works as expected and
 * that it can be updated easily when needed in the future. This is
 * why some eslint rules have been disabled for the whole file.
 *
 * @see https://github.com/tailwindlabs/tailwindcss.com/blob/a29be90b7f2fb2560bfdc7778eb4de66af99d88a/next.config.js
 */
class TailwindConfig {
    /**
     * The workspace root
     */
    workspaceRoot;
    /**
     * The default tailwind config
     */
    defaultConfig;
    /**
     * The negate value function from tailwindcss npm package
     */
    negateValue;
    /**
     * The name class function from tailwindcss npm package
     */
    nameClass;
    /**
     * List of utilities
     */
    utilities;
    /**
     * Create a new TailwindConfig instance
     *
     * @param {string} workspaceRoot The workspace root
     */
    constructor(workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
    }
    /**
     * Get the tailwind config.
     * This is the main function that is called to get the tailwind config.
     * It is not called through the constructor because it is an async function
     *
     * @throws {FileNotFoundException} If the tailwind config file is not found
     * @return {object} The tailwind config
     */
    /* eslint max-lines-per-function: ["warn", 120] */
    async getConfig() {
        const workspaceConfigPathCjs = node_path_1.default.join(this.workspaceRoot, 'tailwind.config.cjs');
        const workspaceConfigPath = node_path_1.default.join(this.workspaceRoot, 'tailwind.config.js');
        const workspaceConfigPathTs = node_path_1.default.join(this.workspaceRoot, 'tailwind.config.ts');
        // Check if the workspace config exists
        const workspaceConfigExists = node_fs_1.default.existsSync(workspaceConfigPath);
        const workspaceConfigCjsExists = node_fs_1.default.existsSync(workspaceConfigPathCjs);
        const workspaceConfigTsExists = node_fs_1.default.existsSync(workspaceConfigPathTs);
        const doesConfigExist = [
            workspaceConfigExists,
            workspaceConfigCjsExists,
            workspaceConfigTsExists,
        ].some(Boolean);
        if (!doesConfigExist) {
            throw new FileNotFoundException([
                `No tailwind config found in ${this.workspaceRoot}.`,
                '\nTried: `tailwind.config.js`, `tailwind.config.cjs`,',
                `\`tailwind.config.ts\` in ${this.workspaceRoot}`,
            ].join(''));
        }
        const tailwindNodeModulesPath = node_path_1.default.join(this.workspaceRoot, 'node_modules', 'tailwindcss');
        // Check if the tailwindcss npm package is installed
        if (!node_fs_1.default.existsSync(tailwindNodeModulesPath)) {
            throw new FileNotFoundException([
                `tailwindcss package not found in ${this.workspaceRoot}`,
                `Tried: \`${tailwindNodeModulesPath}\``,
                'Did you forget to install the tailwindcss npm package?',
            ].join('\n'));
        }
        let workspaceConfig = {};
        if (workspaceConfigTsExists) {
            const { transpileModule, ModuleKind } = await this.getTypescriptModule();
            const transpile = transpileModule(node_fs_1.default.readFileSync(workspaceConfigPathTs, 'utf8'), {
                compilerOptions: {
                    module: ModuleKind.ES2022,
                },
            });
            const importConfig = await (0, module_from_string_1.importFromString)(transpile.outputText);
            workspaceConfig = importConfig.default;
        }
        else {
            // Get the available config options
            const configFilePath = workspaceConfigExists
                ? workspaceConfigPath
                : workspaceConfigPathCjs;
            workspaceConfig = await this.parseConfigFile(configFilePath);
        }
        const pluginDefs = await Promise.resolve(`${node_path_1.default.join(tailwindNodeModulesPath, 'lib', 'corePlugins.js')}`).then(s => __importStar(require(s)));
        const { corePlugins } = pluginDefs;
        const resolveConfig = await Promise.resolve(`${node_path_1.default.join(tailwindNodeModulesPath, 'resolveConfig')}`).then(s => __importStar(require(s)));
        this.defaultConfig = resolveConfig.default(workspaceConfig);
        this.nameClass = await Promise.resolve(`${node_path_1.default.join(tailwindNodeModulesPath, 'lib', 'util', 'nameClass')}`).then(s => __importStar(require(s)));
        this.negateValue = await Promise.resolve(`${node_path_1.default.join(tailwindNodeModulesPath, 'lib', 'util', 'negateValue')}`).then(s => __importStar(require(s)));
        const resolvedConfig = {};
        for (const pluginKey of Object.keys(corePlugins)) {
            const plugin = corePlugins[pluginKey];
            this.getUtilities(plugin, { includeNegativeValues: true });
            resolvedConfig[pluginKey] = this.utilities;
        }
        return resolvedConfig;
    }
    /**
     * Get local typescript module
     *
     * @throws {FileNotFoundException} If the typescript module is not found
     * @return {Promise<any>} The typescript module
     */
    async getTypescriptModule() {
        const tsNodeModulePath = node_path_1.default.join(this.workspaceRoot, 'node_modules', 'typescript');
        // Check if the typescript npm package is installed
        if (!node_fs_1.default.existsSync(tsNodeModulePath)) {
            throw new FileNotFoundException([
                `typescript package not found in ${this.workspaceRoot}`,
                `Tried: \`${tsNodeModulePath}\``,
                'Did you forget to install the typescript npm package?',
            ].join('\n'));
        }
        return await Promise.resolve(`${tsNodeModulePath}`).then(s => __importStar(require(s)));
    }
    /**
     * Parse tailwind config file based on package.json type
     *
     * @param  {string}       configFilePath The path to the config file
     * @return {Promise<any>}                The parsed config file
     */
    parseConfigFile(configFilePath) {
        // Check package.json for the type of the config file
        const packageJsonPath = node_path_1.default.join(this.workspaceRoot, 'package.json');
        if (!node_fs_1.default.existsSync(packageJsonPath)) {
            throw new FileNotFoundException(`package.json was not found in ${this.workspaceRoot}. \nTried: \`${packageJsonPath}\``);
        }
        // eslint-disable-next-line unicorn/prefer-json-parse-buffer
        const packageJson = JSON.parse(node_fs_1.default.readFileSync(packageJsonPath, 'utf8'));
        const { type } = packageJson;
        if (type !== 'module') {
            return Promise.resolve(`${configFilePath}`).then(s => __importStar(require(s)));
        }
        /*
        * Because VSCode extension is running in a electron environment,
        * which does not support ES modules, we need to convert the
        * config file to a commonjs file. This is a hacky way to do it
        * but it works. It should be removed when VSCode supports ES modules.
        */
        const configFileContent = node_fs_1.default.readFileSync(configFilePath, 'utf8');
        // replace export default with module.exports
        const newConfigFileContent = configFileContent.replace('export default', 'module.exports =');
        // If the config file is a module, we need to convert it to a commonjs file
        return (0, module_from_string_1.requireFromString)(newConfigFileContent, {
            filename: configFilePath,
        });
    }
    /**
     * Add a new utility to the utilities object
     *
     * @param {Array | object} utilities Utilities to process
     */
    addUtilities(utilities) {
        const utilitiesArray = Array.isArray(utilities) ? utilities : [utilities];
        for (const util of utilitiesArray) {
            for (const prop in util) {
                for (const p in util[prop]) {
                    if (p.startsWith('@defaults')) {
                        delete util[prop][p];
                    }
                }
                this.utilities[prop] = this.normalizeProperties(util[prop]);
            }
        }
    }
    /**
     * Get the utilities for a given plugin
     *
     * @param {Function} plugin  Plugin function
     * @param {object}   options Options object
     */
    getUtilities(plugin, options) {
        if (!plugin) {
            return;
        }
        const { includeNegativeValues = false } = options;
        this.utilities = {};
        plugin({
            addBase: () => { },
            addDefaults: () => { },
            addComponents: () => { },
            corePlugins: () => { return true; },
            prefix: (x) => { return x; },
            config: (option, defaultValue) => { return (option ? defaultValue : { future: {} }); },
            addUtilities: this.addUtilities.bind(this),
            theme: (key, defaultValue) => {
                return (0, dlv_1.default)(this.defaultConfig.theme, key, defaultValue);
            },
            // eslint-disable-next-line complexity
            matchUtilities: (matches, data) => {
                const values = data?.values;
                const supportsNegativeValues = data?.supportsNegativeValues;
                if (!values) {
                    return;
                }
                const modifierValues = Object.entries(values);
                if (includeNegativeValues && supportsNegativeValues) {
                    const negativeValues = [];
                    for (const [key, value] of modifierValues) {
                        const negatedValue = this.negateValue.default(value);
                        if (negatedValue) {
                            negativeValues.push([`-${key}`, negatedValue]);
                        }
                    }
                    modifierValues.push(...negativeValues);
                }
                const result = Object.entries(matches).flatMap(([name, utilityFunction]) => {
                    return modifierValues
                        .map(([modifier, value]) => {
                        // @ts-ignore-start
                        const declarations = utilityFunction(value, {
                            includeRules(rules) {
                                this.addUtilities(rules);
                            },
                        });
                        // @ts-ignore-end
                        if (!declarations) {
                            return null;
                        }
                        const nameClassKey = this.nameClass.default(name, modifier);
                        return {
                            [nameClassKey]: declarations,
                        };
                    })
                        .filter(Boolean);
                });
                for (const object of result) {
                    for (const key in object) {
                        let deleteKey = false;
                        for (const subkey in object[key]) {
                            if (subkey.startsWith('@defaults')) {
                                delete object[key][subkey];
                                continue;
                            }
                            if (subkey.includes('&')) {
                                result.push({
                                    [subkey.replaceAll('&', key)]: object[key][subkey],
                                });
                                deleteKey = true;
                            }
                        }
                        if (deleteKey) {
                            delete object[key];
                        }
                    }
                }
                this.addUtilities(result);
            },
        });
    }
    /**
     * Normalize the properties of an object
     *
     * @param  {object} input Object to normalize
     * @return {object}       Normalized object
     */
    normalizeProperties(input) {
        if (typeof input !== 'object') {
            return input;
        }
        if (Array.isArray(input)) {
            return input.map(this.normalizeProperties.bind(this));
        }
        return Object.keys(input).reduce((newObject, key) => {
            const value = input[key];
            const newValue = typeof value === 'object' ? this.normalizeProperties(value) : value;
            newObject[key.replaceAll(/([a-z])([A-Z])/g, (m, p1, p2) => {
                return `${p1}-${p2.toLowerCase()}`;
            })] = newValue;
            return newObject;
        }, {});
    }
}
exports.TailwindConfig = TailwindConfig;
