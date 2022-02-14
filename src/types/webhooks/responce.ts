import {PageInfo, ResponseMessage, SessionInfo} from './others';

export type WebHooksResponceBody = {
  fulfillmentResponse?: FulfillmentResponse;
  pageInfo?: PageInfo;
  sessionInfo?: SessionInfo;
  payload?: {};
  // Union field transition can be only one of the following:
  targetPage?: string;
  targetFlow?: string;
  // End of list of possible types for union field transition.
};

export type FulfillmentResponse = {
  messages?: ResponseMessage[];
  mergeBehavior?: MergeBehavior;
};

export enum MergeBehavior {
  unspecified = 'MERGE_BEHAVIOR_UNSPECIFIED',
  append = 'APPEND',
  replace = 'REPLACE',
}
