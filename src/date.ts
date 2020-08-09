export enum dateAlias {
  'Y' = 'year',
  'Q' = 'quarter',
  'M' = 'month',
  'W' = 'week',
  'D' = 'day',
  'H' = 'hour',
  'MIN' = 'minute',
  'S' = 'second',
  'MS' = 'millisecond'
}

// seconds
export const SECONDS_A_MINUTE = 60
export const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60
export const SECONDS_A_DAY = SECONDS_A_HOUR * 24
export const SECONDS_A_WEEK = SECONDS_A_DAY * 7

// milliseconds
export const MILLISECONDS_A_SECOND = 1e3
export const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND
export const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND
export const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND
