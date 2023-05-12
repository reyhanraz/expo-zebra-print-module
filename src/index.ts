import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoZebraPrintModule.web.ts
// and on native platforms to ExpoZebraPrintModule.ts
import ExpoZebraPrintModule from './ExpoZebraPrintModule';
import ExpoZebraPrintModuleView from './ExpoZebraPrintModuleView';
import { ChangeEventPayload, ExpoZebraPrintModuleViewProps } from './ExpoZebraPrintModule.types';

// Get the native constant value.
export const PI = ExpoZebraPrintModule.PI;

export function hello(): string {
  return ExpoZebraPrintModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoZebraPrintModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoZebraPrintModule ?? NativeModulesProxy.ExpoZebraPrintModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoZebraPrintModuleView, ExpoZebraPrintModuleViewProps, ChangeEventPayload };
