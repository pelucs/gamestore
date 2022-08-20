import { CircleNotch } from "phosphor-react";

export default () => {
  return(
    <div className="flex-1 mt-10 flex justify-center">
      <CircleNotch
        size={30}
        className="animate-spin"
      />
    </div>
  );
}