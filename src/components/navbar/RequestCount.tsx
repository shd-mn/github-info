import React from "react";
import type { RateTypes } from "@/types/rateTypes";

function RequestCount({ rateLimit }: { rateLimit: RateTypes }) {
  
  return (
    <div>
      <h3 className="text-xl">
        Requests: {rateLimit.resources.core.remaining}/
        {rateLimit.resources.core.limit}
      </h3>
    </div>
  );
}

export default RequestCount;
