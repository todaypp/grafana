import React, { useCallback } from 'react';
import { isNumber } from 'lodash';
import { SelectableValue } from '@grafana/data';
import { Select } from '../Select/Select';
import { selectors } from '@grafana/e2e-selectors';

export interface Props {
  onChange: (weekStart: number) => void;
  value: number;
  width?: number;
  autoFocus?: boolean;
  onBlur?: () => void;
  includeInternal?: boolean;
  disabled?: boolean;
  inputId?: string;
}

const weekStarts: SelectableValue[] = [
  { value: -1, label: 'Default' },
  { value: 6, label: 'Saturday' },
  { value: 0, label: 'Sunday' },
  { value: 1, label: 'Monday' },
];

export const WeekStartPicker: React.FC<Props> = (props) => {
  const { onChange, width, autoFocus = false, onBlur, value, disabled = false, inputId } = props;

  const onChangeWeekStart = useCallback(
    (selectable: SelectableValue<number>) => {
      if (!selectable || !isNumber(selectable.value)) {
        return onChange(value);
      }
      onChange(selectable.value);
    },
    [onChange, value]
  );

  return (
    <Select
      inputId={inputId}
      value={weekStarts.find((item) => item.value === value)?.value}
      placeholder="Choose starting day of the week"
      autoFocus={autoFocus}
      openMenuOnFocus={true}
      width={width}
      options={weekStarts}
      onChange={onChangeWeekStart}
      onBlur={onBlur}
      disabled={disabled}
      aria-label={selectors.components.WeekStartPicker.container}
      menuShouldPortal={true}
    />
  );
};
