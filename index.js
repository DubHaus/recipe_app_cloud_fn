

// TODO: change entry point to exports.handleWebhook in cloud function
exports.handleWebhook = (request, response) => {

    const jsonResponse = {
      fulfillment_response: {
        messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: ["Hi! this is webhook responce from GC repo"],
            },
          },
        ],
      },
    };
  
    response.send(jsonResponse);
  };
  