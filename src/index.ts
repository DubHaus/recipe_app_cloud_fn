import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import {WebHookRequestBody} from './types/webhook';

export const handleWebhook: HttpFunction = (request, response) => {
  const body = request.body as WebHookRequestBody;

  const jsonResponse = {
    fulfillment_response: {
      messages: [
        {
          text: {
            //fulfillment text response to be sent to the agent
            text: ['Hi! this is webhook responce from GC repo'],
          },
        },
      ],
    },
  };

  response.send(jsonResponse);
};
