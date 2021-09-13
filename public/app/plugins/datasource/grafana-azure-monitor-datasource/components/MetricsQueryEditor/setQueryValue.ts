import { AzureMetricDimension, AzureMonitorQuery } from '../../types';

export function setResource(query: AzureMonitorQuery, resourceURI: string | undefined): AzureMonitorQuery {
  if (query.azureMonitor?.resource === resourceURI) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      resource: resourceURI,
    },
  };
}

export function setMetricNamespace(query: AzureMonitorQuery, metricNamespace: string | undefined): AzureMonitorQuery {
  if (query.azureMonitor?.metricNamespace === metricNamespace) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      metricNamespace: metricNamespace,
      metricName: undefined,
    },
  };
}

export function setMetricName(query: AzureMonitorQuery, metricName: string | undefined): AzureMonitorQuery {
  if (query.azureMonitor?.metricName === metricName) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      metricName: metricName,
    },
  };
}

export function setAggregation(query: AzureMonitorQuery, aggregation: string): AzureMonitorQuery {
  if (query.azureMonitor?.aggregation === aggregation) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      aggregation: aggregation,
    },
  };
}

export function setTimeGrain(query: AzureMonitorQuery, timeGrain: string): AzureMonitorQuery {
  if (query.azureMonitor?.timeGrain === timeGrain) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      timeGrain: timeGrain,
    },
  };
}

export function setDimensionFilters(query: AzureMonitorQuery, dimensions: AzureMetricDimension[]): AzureMonitorQuery {
  if (query.azureMonitor?.dimensionFilters === dimensions) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      dimensionFilters: dimensions,
    },
  };
}

export function appendDimensionFilter(
  query: AzureMonitorQuery,
  dimension = '',
  operator = 'eq',
  filter = ''
): AzureMonitorQuery {
  const existingFilters = query.azureMonitor?.dimensionFilters ?? [];

  return setDimensionFilters(query, [
    ...existingFilters,
    {
      dimension,
      operator,
      filter,
    },
  ]);
}

export function removeDimensionFilter(query: AzureMonitorQuery, indexToRemove: number): AzureMonitorQuery {
  const existingFilters = query.azureMonitor?.dimensionFilters ?? [];
  const newFilters = [...existingFilters];
  newFilters.splice(indexToRemove, 1);
  return setDimensionFilters(query, newFilters);
}

export function setDimensionFilterValue<Key extends keyof AzureMetricDimension>(
  query: AzureMonitorQuery,
  index: number,
  fieldName: Key,
  value: AzureMetricDimension[Key]
): AzureMonitorQuery {
  const existingFilters = query.azureMonitor?.dimensionFilters ?? [];
  const newFilters = [...existingFilters];
  const newFilter = newFilters[index];
  newFilter[fieldName] = value;
  return setDimensionFilters(query, newFilters);
}

export function setTop(query: AzureMonitorQuery, top: string): AzureMonitorQuery {
  if (query.azureMonitor?.top === top) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      top: top,
    },
  };
}

export function setLegendAlias(query: AzureMonitorQuery, alias: string): AzureMonitorQuery {
  if (query.azureMonitor?.alias === alias) {
    return query;
  }

  return {
    ...query,
    azureMonitor: {
      ...query.azureMonitor,
      alias: alias,
    },
  };
}
