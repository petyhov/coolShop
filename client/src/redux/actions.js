import { createAction } from "@reduxjs/toolkit";

import { SET_PHONES, SET_ACTIVE_PHONE, ADD_PHONE, INCREMENT_ITEM, DECREMENT_ITEM, SET_LOADER } from "./types";

export const setPhones = createAction(SET_PHONES);
export const setActivePhone = createAction(SET_ACTIVE_PHONE);
export const addPhone = createAction(ADD_PHONE);
export const incrementItem = createAction(INCREMENT_ITEM);
export const decrementItem = createAction(DECREMENT_ITEM);
export const setLoader = createAction(SET_LOADER);
