// @ts-ignore
import { ZoneAction, ZoneState } from '@types/field.types';

const initialState: ZoneState = {
  plots: [],
  currentPlot: {
    type: '',
    color: 'rgba(255,255,255,1)',
    geolocation: [],
    fieldID: 0,
  },
  isCreatorActive: false,
  isPlotConfirmationVisible: false,
  colorPickerVisible: false,
};

function zoneReducer(state: ZoneState, action: ZoneAction): ZoneState {
  switch (action.type) {
    case 'ADD_GEOLOCATION':
      return {
        ...state,
        currentPlot: {
          ...state.currentPlot,
          geolocation: [...state.currentPlot.geolocation, action.payload],
        },
      };
    case 'SET_ZONE_COLOR':
      return {
        ...state,
        currentPlot: {
          ...state.currentPlot,
          color: action.payload,
        },
      };
    case 'SET_ZONE_TYPE':
      return {
        ...state,
        currentPlot: {
          ...state.currentPlot,
          type: action.payload,
        },
      };
    case 'CREATE_PLOT':
      const newPlot = {
        ...state.currentPlot,
        fieldID: action.payload,
        id: action.payload.id,
      };
      return {
        ...state,
        plots: [...state.plots, newPlot],
        currentPlot: initialState.currentPlot,
      };
    case 'TOGGLE_PLOT_CONFIRMATION':
      return {
        ...state,
        isPlotConfirmationVisible: !state.isPlotConfirmationVisible,
      };
    case 'TOGGLE_CREATOR':
      return {
        ...state,
        isCreatorActive: action.payload,
      };
    case 'TOGGLE_COLOR_PICKER':
      return {
        ...state,
        colorPickerVisible: !state.colorPickerVisible,
      };
    case 'RESET_CURRENT_PLOT':
      return {
        ...state,
        currentPlot: initialState.currentPlot,
      };
    default:
      throw new Error('Unhandled action type in zoneReducer');
  }
}

export { initialState, zoneReducer };
