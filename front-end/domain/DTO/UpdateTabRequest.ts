import { Tab } from "../models/tab";

export type UpdateTabRequest = Omit<Tab, "tabId">;
