/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            username
            contact {
                id
                name
                address {
                    id
                    ward
                    line1
                    line2
                    line3
                    town
                    county
                    state
                    country
                    postcode
                    zipcode
                    what3words
                    createdAt
                    updatedAt
                }
                telephoneNumber
                mobileNumber
                emailAddress
                createdAt
                updatedAt
            }
            displayName
            name
            roles
            dateOfBirth
            assignedVehicles {
                items {
                    id
                    assignedUserID
                    name
                    manufacturer
                    model
                    dateOfManufacture
                    dateOfRegistration
                    createdAt
                    updatedAt
                }
                nextToken
            }
            patch
            status
            profilePictureURL
            profilePictureThumbnailURL
            comments {
                id
                parentID
                body
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                publiclyVisible
                loggedAction {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                numEdits
                createdAt
                updatedAt
            }
            loggedActions {
                id
                ipAddress
                callingUser {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                dataFields
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;
export const listUsers = /* GraphQL */ `
    query ListUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                username
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                displayName
                name
                roles
                dateOfBirth
                assignedVehicles {
                    nextToken
                }
                patch
                status
                profilePictureURL
                profilePictureThumbnailURL
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getLocation = /* GraphQL */ `
    query GetLocation($id: ID!) {
        getLocation(id: $id) {
            id
            name
            contact {
                id
                name
                address {
                    id
                    ward
                    line1
                    line2
                    line3
                    town
                    county
                    state
                    country
                    postcode
                    zipcode
                    what3words
                    createdAt
                    updatedAt
                }
                telephoneNumber
                mobileNumber
                emailAddress
                createdAt
                updatedAt
            }
            address {
                id
                ward
                line1
                line2
                line3
                town
                county
                state
                country
                postcode
                zipcode
                what3words
                createdAt
                updatedAt
            }
            listed
            protected
            comments {
                id
                parentID
                body
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                publiclyVisible
                loggedAction {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                numEdits
                createdAt
                updatedAt
            }
            loggedActions {
                id
                ipAddress
                callingUser {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                dataFields
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;
export const listLocations = /* GraphQL */ `
    query ListLocations(
        $filter: ModelLocationFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                name
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                address {
                    id
                    ward
                    line1
                    line2
                    line3
                    town
                    county
                    state
                    country
                    postcode
                    zipcode
                    what3words
                    createdAt
                    updatedAt
                }
                listed
                protected
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getLogEntry = /* GraphQL */ `
    query GetLogEntry($id: ID!) {
        getLogEntry(id: $id) {
            id
            ipAddress
            callingUser {
                id
                username
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                displayName
                name
                roles
                dateOfBirth
                assignedVehicles {
                    nextToken
                }
                patch
                status
                profilePictureURL
                profilePictureThumbnailURL
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            dataFields
            createdAt
            updatedAt
        }
    }
`;
export const listLogEntries = /* GraphQL */ `
    query ListLogEntries(
        $filter: ModelLogEntryFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listLogEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                ipAddress
                callingUser {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                dataFields
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getVehicle = /* GraphQL */ `
    query GetVehicle($id: ID!) {
        getVehicle(id: $id) {
            id
            assignedUserID
            name
            manufacturer
            model
            dateOfManufacture
            dateOfRegistration
            assignedUser {
                id
                username
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                displayName
                name
                roles
                dateOfBirth
                assignedVehicles {
                    nextToken
                }
                patch
                status
                profilePictureURL
                profilePictureThumbnailURL
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            comments {
                id
                parentID
                body
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                publiclyVisible
                loggedAction {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                numEdits
                createdAt
                updatedAt
            }
            loggedActions {
                id
                ipAddress
                callingUser {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                dataFields
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;
export const listVehicles = /* GraphQL */ `
    query ListVehicles(
        $filter: ModelVehicleFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                assignedUserID
                name
                manufacturer
                model
                dateOfManufacture
                dateOfRegistration
                assignedUser {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getContact = /* GraphQL */ `
    query GetContact($id: ID!) {
        getContact(id: $id) {
            id
            name
            address {
                id
                ward
                line1
                line2
                line3
                town
                county
                state
                country
                postcode
                zipcode
                what3words
                createdAt
                updatedAt
            }
            telephoneNumber
            mobileNumber
            emailAddress
            createdAt
            updatedAt
        }
    }
`;
export const listContacts = /* GraphQL */ `
    query ListContacts(
        $filter: ModelContactFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                name
                address {
                    id
                    ward
                    line1
                    line2
                    line3
                    town
                    county
                    state
                    country
                    postcode
                    zipcode
                    what3words
                    createdAt
                    updatedAt
                }
                telephoneNumber
                mobileNumber
                emailAddress
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getAddress = /* GraphQL */ `
    query GetAddress($id: ID!) {
        getAddress(id: $id) {
            id
            ward
            line1
            line2
            line3
            town
            county
            state
            country
            postcode
            zipcode
            what3words
            createdAt
            updatedAt
        }
    }
`;
export const listAddresses = /* GraphQL */ `
    query ListAddresses(
        $filter: ModelAddressFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                ward
                line1
                line2
                line3
                town
                county
                state
                country
                postcode
                zipcode
                what3words
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getDeliverable = /* GraphQL */ `
    query GetDeliverable($id: ID!) {
        getDeliverable(id: $id) {
            id
            type
            count
            unit
            numBoxes
            comments {
                id
                parentID
                body
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                publiclyVisible
                loggedAction {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                numEdits
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;
export const listDeliverables = /* GraphQL */ `
    query ListDeliverables(
        $filter: ModelDeliverableFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listDeliverables(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                type
                count
                unit
                numBoxes
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getTask = /* GraphQL */ `
    query GetTask($id: ID!) {
        getTask(id: $id) {
            id
            reference
            orderInRelay
            author {
                id
                username
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                displayName
                name
                roles
                dateOfBirth
                assignedVehicles {
                    nextToken
                }
                patch
                status
                profilePictureURL
                profilePictureThumbnailURL
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            timeOfCall
            timePickedUp
            timeDroppedOff
            timeCancelled
            timeRejected
            requesterContact {
                id
                name
                address {
                    id
                    ward
                    line1
                    line2
                    line3
                    town
                    county
                    state
                    country
                    postcode
                    zipcode
                    what3words
                    createdAt
                    updatedAt
                }
                telephoneNumber
                mobileNumber
                emailAddress
                createdAt
                updatedAt
            }
            pickupLocation {
                id
                name
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                address {
                    id
                    ward
                    line1
                    line2
                    line3
                    town
                    county
                    state
                    country
                    postcode
                    zipcode
                    what3words
                    createdAt
                    updatedAt
                }
                listed
                protected
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            dropoffLocation {
                id
                name
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                address {
                    id
                    ward
                    line1
                    line2
                    line3
                    town
                    county
                    state
                    country
                    postcode
                    zipcode
                    what3words
                    createdAt
                    updatedAt
                }
                listed
                protected
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            patch
            priority
            deliverables {
                id
                type
                count
                unit
                numBoxes
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            assignedRidersDisplayString
            assignedCoordinatorsDisplayString
            assignees {
                items {
                    id
                    taskID
                    role
                    createdAt
                    updatedAt
                }
                nextToken
            }
            relayPrevious {
                id
                reference
                orderInRelay
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                timeOfCall
                timePickedUp
                timeDroppedOff
                timeCancelled
                timeRejected
                requesterContact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                pickupLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                dropoffLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                patch
                priority
                deliverables {
                    id
                    type
                    count
                    unit
                    numBoxes
                    createdAt
                    updatedAt
                }
                assignedRidersDisplayString
                assignedCoordinatorsDisplayString
                assignees {
                    nextToken
                }
                relayPrevious {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                relayNext {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                comments {
                    nextToken
                }
                status
                statusHumanReadable
                createdAt
                updatedAt
            }
            relayNext {
                id
                reference
                orderInRelay
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                timeOfCall
                timePickedUp
                timeDroppedOff
                timeCancelled
                timeRejected
                requesterContact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                pickupLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                dropoffLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                patch
                priority
                deliverables {
                    id
                    type
                    count
                    unit
                    numBoxes
                    createdAt
                    updatedAt
                }
                assignedRidersDisplayString
                assignedCoordinatorsDisplayString
                assignees {
                    nextToken
                }
                relayPrevious {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                relayNext {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                comments {
                    nextToken
                }
                status
                statusHumanReadable
                createdAt
                updatedAt
            }
            loggedActions {
                id
                ipAddress
                callingUser {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                dataFields
                createdAt
                updatedAt
            }
            comments {
                items {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                nextToken
            }
            status
            statusHumanReadable
            createdAt
            updatedAt
        }
    }
`;
export const listTasks = /* GraphQL */ `
    query ListTasks(
        $filter: ModelTaskFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                reference
                orderInRelay
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                timeOfCall
                timePickedUp
                timeDroppedOff
                timeCancelled
                timeRejected
                requesterContact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                pickupLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                dropoffLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                patch
                priority
                deliverables {
                    id
                    type
                    count
                    unit
                    numBoxes
                    createdAt
                    updatedAt
                }
                assignedRidersDisplayString
                assignedCoordinatorsDisplayString
                assignees {
                    nextToken
                }
                relayPrevious {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                relayNext {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                comments {
                    nextToken
                }
                status
                statusHumanReadable
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getAssignment = /* GraphQL */ `
    query GetAssignment($id: ID!) {
        getAssignment(id: $id) {
            id
            taskID
            assignee {
                id
                username
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                displayName
                name
                roles
                dateOfBirth
                assignedVehicles {
                    nextToken
                }
                patch
                status
                profilePictureURL
                profilePictureThumbnailURL
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            role
            createdAt
            updatedAt
        }
    }
`;
export const listAssignments = /* GraphQL */ `
    query ListAssignments(
        $filter: ModelAssignmentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                taskID
                assignee {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                role
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getComment = /* GraphQL */ `
    query GetComment($id: ID!) {
        getComment(id: $id) {
            id
            parentID
            body
            author {
                id
                username
                contact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                displayName
                name
                roles
                dateOfBirth
                assignedVehicles {
                    nextToken
                }
                patch
                status
                profilePictureURL
                profilePictureThumbnailURL
                comments {
                    id
                    parentID
                    body
                    publiclyVisible
                    numEdits
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            publiclyVisible
            loggedAction {
                id
                ipAddress
                callingUser {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                dataFields
                createdAt
                updatedAt
            }
            numEdits
            createdAt
            updatedAt
        }
    }
`;
export const listComments = /* GraphQL */ `
    query ListComments(
        $filter: ModelCommentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                parentID
                body
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                publiclyVisible
                loggedAction {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                numEdits
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getServerSettings = /* GraphQL */ `
    query GetServerSettings($id: ID!) {
        getServerSettings(id: $id) {
            id
            imageURL
            favicon
            version
            hostname
            createdAt
            updatedAt
        }
    }
`;
export const listServerSettings = /* GraphQL */ `
    query ListServerSettings(
        $filter: ModelServerSettingsFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listServerSettings(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                imageURL
                favicon
                version
                hostname
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getOrganisation = /* GraphQL */ `
    query GetOrganisation($id: ID!) {
        getOrganisation(id: $id) {
            id
            organisationName
            createdAt
            updatedAt
        }
    }
`;
export const listOrganisations = /* GraphQL */ `
    query ListOrganisations(
        $filter: ModelOrganisationFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listOrganisations(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                organisationName
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getGroup = /* GraphQL */ `
    query GetGroup($id: ID!) {
        getGroup(id: $id) {
            id
            groupName
            locale
            createdAt
            updatedAt
        }
    }
`;
export const listGroups = /* GraphQL */ `
    query ListGroups(
        $filter: ModelGroupFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                groupName
                locale
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const tasksByStatus = /* GraphQL */ `
    query TasksByStatus(
        $status: TaskStatus
        $sortDirection: ModelSortDirection
        $filter: ModelTaskFilterInput
        $limit: Int
        $nextToken: String
    ) {
        tasksByStatus(
            status: $status
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                reference
                orderInRelay
                author {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                timeOfCall
                timePickedUp
                timeDroppedOff
                timeCancelled
                timeRejected
                requesterContact {
                    id
                    name
                    telephoneNumber
                    mobileNumber
                    emailAddress
                    createdAt
                    updatedAt
                }
                pickupLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                dropoffLocation {
                    id
                    name
                    listed
                    protected
                    createdAt
                    updatedAt
                }
                patch
                priority
                deliverables {
                    id
                    type
                    count
                    unit
                    numBoxes
                    createdAt
                    updatedAt
                }
                assignedRidersDisplayString
                assignedCoordinatorsDisplayString
                assignees {
                    role
                    assignee {
                        id
                        displayName
                    }
                    nextToken
                }
                relayPrevious {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                relayNext {
                    id
                    reference
                    orderInRelay
                    timeOfCall
                    timePickedUp
                    timeDroppedOff
                    timeCancelled
                    timeRejected
                    patch
                    priority
                    assignedRidersDisplayString
                    assignedCoordinatorsDisplayString
                    status
                    statusHumanReadable
                    createdAt
                    updatedAt
                }
                loggedActions {
                    id
                    ipAddress
                    dataFields
                    createdAt
                    updatedAt
                }
                comments {
                    nextToken
                }
                status
                statusHumanReadable
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const assigneesByRole = /* GraphQL */ `
    query AssigneesByRole(
        $taskID: ID
        $role: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelAssignmentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        assigneesByRole(
            taskID: $taskID
            role: $role
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                taskID
                assignee {
                    id
                    username
                    displayName
                    name
                    roles
                    dateOfBirth
                    patch
                    status
                    profilePictureURL
                    profilePictureThumbnailURL
                    createdAt
                    updatedAt
                }
                role
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
