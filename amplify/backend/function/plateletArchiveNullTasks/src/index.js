/* Amplify Params - DO NOT EDIT
	API_PLATELET_GRAPHQLAPIENDPOINTOUTPUT
	API_PLATELET_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT = process.env.API_PLATELET_GRAPHQLAPIENDPOINTOUTPUT;

const listTasks = /* GraphQL */ `
    query listTasks($nextToken: String) {
        listTasks(nextToken: $nextToken) {
            items {
                id
                _version
                archived
            }
            nextToken
        }
    }
`;

const listComments = /* GraphQL */ `
    query listComments($nextToken: String) {
        listComments(nextToken: $nextToken) {
            items {
                id
                _version
                archived
            }
            nextToken
        }
    }
`;
const listLocations = /* GraphQL */ `
    query listLocations($nextToken: String) {
        listLocations(nextToken: $nextToken) {
            items {
                id
                _version
                archived
            }
            nextToken
        }
    }
`;

const listDeliverables = /* GraphQL */ `
    query listDeliverables($nextToken: String) {
        listDeliverables(nextToken: $nextToken) {
            items {
                id
                _version
                archived
            }
            nextToken
        }
    }
`;
const listTaskAssignees = /* GraphQL */ `
    query listTaskAssignees($nextToken: String) {
        listTaskAssignees(nextToken: $nextToken) {
            items {
                id
                _version
                archived
            }
            nextToken
        }
    }
`;

const updateTaskMutation = /* GraphQL */ `
    mutation UpdateTask($input: UpdateTaskInput!) {
        updateTask(input: $input) {
            id
            archived
        }
    }
`;

const updateDeliverableMutation = /* GraphQL */ `
    mutation UpdateDeliverable($input: UpdateDeliverableInput!) {
        updateDeliverable(input: $input) {
            id
            archived
        };
    };
`;

const updateCommentMutation = /* GraphQL */ `
    mutation UpdateComment($input: UpdateCommentInput!) {
        updateComment(input: $input) {
            id
            archived
        };
    };
`;

const updateLocationMutation = /* GraphQL */ `
    mutation UpdateLocation($input: UpdateLocationInput!) {
        updateLocation(input: $input) {
            id
            archived
        };
    };
`;

const updateTaskAssigneeMutation = /* GraphQL */ `
    mutation UpdateTaskAssignee($input: UpdateTaskAssigneeInput!) {
        updateTaskAssignee(input: $input) {
            id
            archived
        };
    };
`;

let makeNewRequest = async (query, variables) => {
    const endpoint = new URL(GRAPHQL_ENDPOINT);
    const signer = new SignatureV4({
        credentials: defaultProvider(),
        region: process.env.REGION,
        service: "appsync",
        sha256: Sha256,
    });

    const requestToBeSigned = new HttpRequest({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            host: endpoint.host,
        },
        hostname: endpoint.host,
        body: JSON.stringify({
            query,
            variables,
        }),
        path: endpoint.pathname,
    });

    const signed = await signer.sign(requestToBeSigned);
    return new Request(endpoint, signed);
};

exports.makeNewRequest = makeNewRequest;

const getItems = async (query, key) => {
    debugger;
    console.log(key);
    const items = [];
    let nextToken = null;
    do {
        const variables = {
            nextToken,
        };
        const request = await makeNewRequest(query, variables);
        const response = await fetch(request);
        const body = await response.json();
        if (body.data[key]) {
            items.push(...body.data[key].items);
            nextToken = body.data[key].nextToken;
        } else {
            nextToken = null;
        }
    } while (nextToken);
    const flat = items.flat();
    const filtered = flat.filter(filterNull);
    return filtered;
};

const filterNull = (item) => {
    return item.archived === null;
};

const updateTaskAssignee = async (assignment) => {
    const variables = {
        input: {
            id: assignment.id,
            archived: 0,
            _version: assignment._version,
        },
    };
    const request = await makeNewRequest(updateTaskAssigneeMutation, variables);
    const response = await fetch(request);
    const body = await response.json();
    return body.data.updateTaskAssignee;
};

const updateDeliverable = async (deliverable) => {
    const variables = {
        input: {
            id: deliverable.id,
            archived: 0,
            _version: deliverable._version,
        },
    };
    const request = await makeNewRequest(updateDeliverableMutation, variables);
    const response = await fetch(request);
    const body = await response.json();
    return body.data.updateDeliverable;
};

const updateComment = async (comment) => {
    const variables = {
        input: {
            id: comment.id,
            archived: 0,
            _version: comment._version,
        },
    };
    const request = await makeNewRequest(updateCommentMutation, variables);
    const response = await fetch(request);
    const body = await response.json();
    return body.data.updateComment;
};

const updateLocation = async (location) => {
    const variables = {
        input: {
            id: location.id,
            archived: 0,
            _version: location._version,
        },
    };
    const request = await makeNewRequest(updateLocationMutation, variables);
    const response = await fetch(request);
    const body = await response.json();
    return body.data.updateLocation;
};

const updateTask = async (task) => {
    const variables = {
        input: {
            id: task.id,
            archived: 0,
            _version: task._version,
        },
    };
    const request = await makeNewRequest(updateTaskMutation, variables);
    const response = await fetch(request);
    const body = await response.json();
    return body.data.updateTask;
};

exports.handler = async (event, makeNewRequestTest) => {
    if (makeNewRequestTest && process.env.NODE_ENV === "test") {
        console.log("TESTING");
        makeNewRequest = makeNewRequestTest;
    }
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const tasks = await getItems(listTasks, "listTasks");
    console.log("tasks", tasks);
    const comments = await getItems(listComments, "listComments");
    console.log("comments", comments);
    const locations = await getItems(listLocations, "listLocations");
    console.log("locations", locations);
    const deliverables = await getItems(listDeliverables, "listDeliverables");
    console.log("deliverables", deliverables);
    const taskAssignees = await getItems(
        listTaskAssignees,
        "listTaskAssignees"
    );
    console.log("taskAssignees", taskAssignees);
    const updateTasks = tasks.map(updateTask);
    const updateComments = comments.map(updateComment);
    const updateLocations = locations.map(updateLocation);
    const updateDeliverables = deliverables.map(updateDeliverable);
    const updateTaskAssignees = taskAssignees.map(updateTaskAssignee);
    const results = await Promise.all([
        ...updateTasks,
        ...updateComments,
        ...updateLocations,
        ...updateDeliverables,
        ...updateTaskAssignees,
    ]);
    console.log("RESULTS:", results);
    return results;
};