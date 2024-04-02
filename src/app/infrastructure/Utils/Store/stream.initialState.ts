import { StreamState } from "src/app/core/domain/Interfaces/IStream.state";

export const state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };