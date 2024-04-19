import { pubsub } from "./pubsub";
import { elements } from "./UI";

function handleAmerican() {
  console.log("run");
}
pubsub.subscribe("handleAmerican", handleAmerican);
