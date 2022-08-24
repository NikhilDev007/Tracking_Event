import { 
    Stored
} from "../generated/eventTracking/eventTracking"

import { UserData } from "../generated/schema"


export function handleStored(event: Stored): void {
    // load the data from all events
    let stored = new UserData(
      event.transaction.hash
        .toHexString()
        .concat("-").
        concat(event.logIndex.toString())
    );

    // stored data in specific variables
    stored.USERNAME = event.params.USERNAME
    stored.PASSWORD = event.params.PASSWORD

    // store whole data obtained from events.
    stored.save();
}

