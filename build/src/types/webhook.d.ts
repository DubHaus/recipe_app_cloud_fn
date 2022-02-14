import { FieldValue } from 'google-protobuf';
export declare type WebHookRequestBody = {
    detectIntentResponseId: string;
    languageCode: string;
    fulfillmentInfo: FulfillmentInfo;
    intentInfo: IntentInfo;
    pageInfo: PageInfo;
    sessionInfo: SessionInfo;
    messages: ResponseMessage[];
    payload: {};
    sentimentAnalysisResult: SentimentAnalysisResult;
    text: string;
    triggerIntent: string;
    transcript: string;
    triggerEvent: string;
};
export declare type FulfillmentInfo = {
    tag: string;
};
export declare type IntentInfo = {
    lastMatchedIntent: string;
    displayName: string;
    parameters: {
        [key: string]: IntentParameterValue;
    };
    confidence: number;
};
export declare type PageInfo = {
    currentPage: string;
    displayName: string;
    formInfo: FormInfo;
};
export declare type SessionInfo = {
    session: string;
    parameters: {
        [key: string]: FieldValue;
    };
};
export declare type ResponseMessage = {
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
export declare type FormInfo = {
    parameterInfo: ParameterInfo[];
};
export declare type ParameterInfo = {
    displayName: string;
    required: boolean;
    state: ParameterState;
    value: FieldValue;
    justCollected: boolean;
};
export declare enum ParameterState {
    parameterStateUnspecified = "PARAMETER_STATE_UNSPECIFIED",
    empty = "EMPTY",
    invalid = "INVALID",
    filled = "FILLED"
}
export declare type IntentParameterValue = {
    originalValue: string;
    resolvedValue: FieldValue;
};
export declare type Text = {
    text: string[];
    allowPlaybackInterruption: boolean;
};
export declare type ConversationSuccess = {
    metadata: {};
};
export declare type LiveAgentHandoff = {
    metadata: {};
};
export declare type OutputAudioText = {
    allowPlaybackInterruption: boolean;
    text: string;
    ssml: string;
};
export declare type PlayAudio = {
    audioUri: string;
    allowPlaybackInterruption: boolean;
};
export declare type MixedAudio = {
    segments: Segment[];
};
export declare type Segment = {
    allowPlaybackInterruption: boolean;
    audio: string;
    uri: string;
};
export declare type TelephonyTransferCall = {
    phoneNumber: string;
};
export declare type SentimentAnalysisResult = {
    score: number;
    magnitude: number;
};
