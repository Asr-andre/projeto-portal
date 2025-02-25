import { ActionReducerMap } from "@ngrx/store";
import { LayoutState, layoutReducer } from "./layouts/layout-reducers";
import { ApplicationReducer, ApplicationState } from "./Jobs/jobs_reducer";
import { ApikeyReducer, ApikeyState } from "./APIKey/apikey_reducer";
// import { authenticationReducer, AuthenticationState } from "./Authentication/authentication.reducer";

export interface RootReducerState {
    layout: LayoutState;
    Jobs: ApplicationState;
    APIKey: ApikeyState;
    // authentication: AuthenticationState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    Jobs: ApplicationReducer,
    APIKey: ApikeyReducer,
    // authentication: authenticationReducer,

}