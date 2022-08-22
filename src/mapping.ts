import { 
    Stored, eventTracking
} from "../generated/eventTracking/eventTracking"

import { UserData } from "../generated/schema"


export function handleStored(event: Stored): void {
    let stored = UserData.load(event.transaction.from.toHex())

    // Entities only exist after they have been saved to the store;
    // `null` checks allow to create entities on demand
    if (!stored) {
      stored = new UserData(event.transaction.from.toHexString())
      //stored.timestamp = event.block.timestamp;

      //   let storedContract = eventTracking.bind(event.address);
      //   stored.PASSWORD = storedContract.data(event.params.USERNAME);

    }

    stored.USERNAME = event.params.USERNAME
    stored.PASSWORD = event.params.PASSWORD

    stored.save();


}

