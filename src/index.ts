import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import {WebHookRequestBody} from './types/webhooks/reqest';
import {WebHooksResponceBody} from './types/webhooks/responce';

export const handleWebhook: HttpFunction = (request, response) => {
  const body = request.body as WebHookRequestBody;

  const jsonResponse = {
    fulfillmentResponse: {
      sessionInfo: {
        parameters: [
          {
            recipeName: 'Pasta Carbonara',
          },
        ],
      },
    },
  } as WebHooksResponceBody;

  response.send(jsonResponse);
};
