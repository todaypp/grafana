//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This file was autogenerated by cuetsy. DO NOT EDIT!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import * as ui from '@grafana/schema';

export const modelVersion = Object.freeze([0, 0]);

export enum TimelineMode {
  Changes = 'changes',
  Samples = 'samples',
}

export type TimelineValueAlignment = 'center' | 'left' | 'right';

export interface PanelOptions extends ui.OptionsWithLegend, ui.OptionsWithTooltip {
  alignValue?: string;
  colWidth?: number;
  mergeValues?: boolean;
  mode?: string;
  rowHeight: number;
  showValue: string;
}

export const defaultPanelOptions: PanelOptions = {
  alignValue: 'left',
  mergeValues: true,
  rowHeight: 0.9,
  showValue: 'auto',
};

export interface PanelFieldConfig extends ui.HideableFieldConfig {
  fillOpacity?: number;
  lineWidth?: number;
}

export const defaultPanelFieldConfig: PanelFieldConfig = {
  fillOpacity: 70,
  lineWidth: 0,
};