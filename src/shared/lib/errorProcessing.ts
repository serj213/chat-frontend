import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const errorProcessing = (
  error: FetchBaseQueryError | SerializedError
) => {
  if (error && "data" in error) {
    alert(error.data);
  }
};
