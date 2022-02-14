import {FieldValue} from 'google-protobuf';

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

export type FulfillmentInfo = {
  tag: string;
};

export type IntentInfo = {
  lastMatchedIntent: string;
  displayName: string;
  parameters: {
    [key: string]: IntentParameterValue;
  };
  confidence: number;
};

export type PageInfo = {
  currentPage: string;
  displayName: string;
  formInfo: FormInfo;
};

export type SessionInfo = {
  session: string;
  parameters: {
    [key: string]: FieldValue;
  };
};

export type ResponseMessage = {
  text: Text;
  payload: {};
  conversationSuccess: ConversationSuccess;
  outputAudioText: OutputAudioText;
  liveAgentHandoff: LiveAgentHandoff;
  endInteraction: {};
  playAudio: PlayAudio;
  mixedAudio: MixedAudio;
  telephonyTransferCall: TelephonyTransferCall;
};

export type FormInfo = {
  parameterInfo: ParameterInfo[];
};

export type ParameterInfo = {
  displayName: string;
  required: boolean;
  state: ParameterState;
  value: FieldValue;
  justCollected: boolean;
};

export enum ParameterState {
  parameterStateUnspecified = 'PARAMETER_STATE_UNSPECIFIED',
  empty = 'EMPTY',
  invalid = 'INVALID',
  filled = 'FILLED',
}

export type IntentParameterValue = {
  originalValue: string;
  resolvedValue: FieldValue;
};

export type Text = {
  text: string[];
  allowPlaybackInterruption: boolean;
};

export type ConversationSuccess = {
  metadata: {};
};

export type LiveAgentHandoff = {
  metadata: {};
};

export type OutputAudioText = {
  allowPlaybackInterruption: boolean;
  text: string;
  ssml: string;
};

export type PlayAudio = {
  audioUri: string;
  allowPlaybackInterruption: boolean;
};

export type MixedAudio = {
  segments: Segment[];
};

export type Segment = {
  allowPlaybackInterruption: boolean;
  // Union field content can be only one of the following:
  audio: string;
  uri: string;
  // End of list of possible types for union field content.
};

export type TelephonyTransferCall = {
  phoneNumber: string;
};

export type SentimentAnalysisResult = {
  score: number;
  magnitude: number;
};
