import { V3InternalSettings } from './V3InternalSettings';

export const V3_DEFAULT_SETTINGS = {
  // Try to refresh the coordinates 5 minutes before they expire
  COORDINATES_EXPIRATION_ADVANCE_REFRESH_TIME_MS: 300_000,
  // Refresh no more frequently than 1 minute
  COORDINATES_EXPIRATION_MINIMAL_FREQUENCY_MS: 60_000,
  // Attempt to get new coordinates 3 times max
  COORDINATES_GET_API_CALL_MAX_RETRIES: 3,
  customInferenceCoordinatesGenerator: undefined,
} as const satisfies V3InternalSettings;
