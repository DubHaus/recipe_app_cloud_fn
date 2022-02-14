import {
  FulfillmentInfo,
  IntentInfo,
  PageInfo,
  ResponseMessage,
  SentimentAnalysisResult,
  SessionInfo,
} from './others';

export type WebHookRequestBody = {
  detectIntentResponseId: string;
  languageCode: string;
  fulfillmentInfo: FulfillmentInfo;
  intentInfo: IntentInfo;
  pageInfo: PageInfo;
  sessionInfo: SessionInfo;
  messages: ResponseMessage[];
  payload: {};
  sentimentAnalysisResult: SentimentAnalysisResult;

  // Union field query can be only one of the following:
  text: string;
  triggerIntent: string;
  transcript: string;
  triggerEvent: string;
  // End of list of possible types for union field query.
};
