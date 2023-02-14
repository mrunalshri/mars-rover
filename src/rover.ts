import { Coordinates, RoverCoordinates } from "./types";
import { changeRoverDirection, moveRover } from "./utils";

export const getFinalRoverPosition = (
  roverPosition: RoverCoordinates,
  instructions: string,
  maxPosition: Coordinates
): RoverCoordinates => {
  const instructionValues = instructions.split("");

  return instructionValues.reduce(
    (position: RoverCoordinates, instruction: string): RoverCoordinates => {
      return instruction === "M"
        ? moveRover(position, maxPosition)
        : changeRoverDirection(position, instruction);
    },
    roverPosition
  );
};
