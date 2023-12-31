import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../libs/createRequestSaga';
import { produce } from 'immer';

const [CONTRACT_UPLOADFILE, CONTRACT_UPLOADFILE_SUCCESS, CONTRACT_UPLOADFILE_FAILURE] = createRequestActionTypes(
  'file/CONTRACT_UPLOADFILE',
);

const [BUILDING_UPLOADFILE, BUILDING_UPLOADFILE_SUCCESS, BUILDING_UPLOADFILE_FAILURE] = createRequestActionTypes(
  'file/BUILDING_UPLOADFILE',
);

const [REGISTER_UPLOADFILE, REGISTER_UPLOADFILE_SUCCESS, REGISTER_UPLOADFILE_FAILURE] = createRequestActionTypes(
  'file/REGISTER_UPLOADFILE',
);

const FIX_USER_ID = 'file/FIX_USER_ID';

const FIX_CONTRACT_ID = 'file/FIX_CONTRACT_ID';

export const contractUploadFile = createAction(CONTRACT_UPLOADFILE);
export const buildingUploadFile = createAction(BUILDING_UPLOADFILE);
export const registerUploadFile = createAction(REGISTER_UPLOADFILE);

export const contractUploadFileSuccess = createAction(CONTRACT_UPLOADFILE_SUCCESS,
  ({form, key, value}) => ({
  form,
  key,
  value,
  })
);

export const contractUploadFileFailure = createAction(CONTRACT_UPLOADFILE_FAILURE,
  ({form, key, value}) => ({
    form,
    key,
    value,
  })
);

export const buildingUploadFileSuccess = createAction(BUILDING_UPLOADFILE_SUCCESS,
  ({form, key, value}) => ({
  form,
  key,
  value,
  })
);

export const buildingUploadFileFailure = createAction(BUILDING_UPLOADFILE_FAILURE,
  ({form, key, value}) => ({
    form,
    key,
    value,
  })
);

export const registerUploadFileSuccess = createAction(REGISTER_UPLOADFILE_SUCCESS,
  ({form, key, value}) => ({
  form,
  key,
  value,
  })
);

export const registerUploadFileFailure = createAction(REGISTER_UPLOADFILE_FAILURE,
  ({form, key, value}) => ({
    form,
    key,
    value,
  })
);

export const fixUserId = createAction(FIX_USER_ID, userId => userId);
export const fixContractId = createAction(FIX_CONTRACT_ID, contractId => contractId);

const initialState = {
  contract: {
    file: null,
    error: null,
  },
  building: {
    file: null,
    error: null,
  },
  register: {
    file: null,
    error: null,
  },
  userId: '',
  contractId: '',
}

const file = handleActions(
  {
    [CONTRACT_UPLOADFILE_SUCCESS]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [CONTRACT_UPLOADFILE_FAILURE]: (state, { payload: {form, key, value}}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
    [BUILDING_UPLOADFILE_SUCCESS]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [BUILDING_UPLOADFILE_FAILURE]: (state, { payload: {form, key, value}}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
    [REGISTER_UPLOADFILE_SUCCESS]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [REGISTER_UPLOADFILE_FAILURE]: (state, { payload: {form, key, value}}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
    [FIX_USER_ID]: (state, {payload: userId}) => ({
      ...state,
      userId,
    }),
    [FIX_CONTRACT_ID]: (state, {payload: contractId}) => ({
      ...state,
      contractId,
    }),
  },
  initialState,
)

export default file;