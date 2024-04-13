import type { IncomingMessage, ServerResponse } from "http";

export function buildHandler(): void;

export function handler(_: IncomingMessage, res: ServerResponse): void;
