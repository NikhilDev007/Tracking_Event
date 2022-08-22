import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { Stored } from "../generated/eventTracking/eventTracking"

export function createStoredEvent(_id: BigInt, _password: BigInt): Stored {
  let storedEvent = changetype<Stored>(newMockEvent())

  storedEvent.parameters = new Array()

  storedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  storedEvent.parameters.push(
    new ethereum.EventParam(
      "_password",
      ethereum.Value.fromUnsignedBigInt(_password)
    )
  )

  return storedEvent
}
