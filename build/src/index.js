"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWebhook = void 0;
const handleWebhook = (request, response) => {
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
exports.handleWebhook = handleWebhook;
//# sourceMappingURL=index.js.map