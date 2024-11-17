import { EventEmitter } from "node:events";

import { AsyncEventEmitter } from "./emitter";

export const isEventEmitter = (obj: any) => obj instanceof EventEmitter;

export const isAsyncEventEmitter = (obj: any) => obj instanceof AsyncEventEmitter;
