import { Tab } from "../models/tab";

export type CreateTabRequest = Omit<Tab, "tabId">;
