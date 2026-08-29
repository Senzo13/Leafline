export interface FieldData {
  name: string;
  type: string;
  geolocation: [
    {
      latitude: number;
      longitude: number;
    },
  ];
  id: number;
  plots: PlotData[];
}

export interface PlotData {
  type: string;
  color: string;
  geolocation: {
    latitude: number;
    longitude: number;
  }[];
  fieldID: number;
  id: number;
}

export interface ZoneState {
  plots: PlotData[];
  currentPlot: PlotData;
  isCreatorActive: boolean;
  isPlotConfirmationVisible: boolean;
  colorPickerVisible: boolean;
}

export type ZoneAction =
  | {
      type: 'ADD_GEOLOCATION';
      payload: { latitude: number; longitude: number };
    }
  | { type: 'SET_ZONE_COLOR'; payload: string }
  | { type: 'SET_ZONE_TYPE'; payload: string }
  | { type: 'CREATE_PLOT'; payload: number }
  | { type: 'TOGGLE_PLOT_CONFIRMATION' }
  | { type: 'TOGGLE_CREATOR'; payload: boolean }
  | { type: 'TOGGLE_COLOR_PICKER' }
  | { type: 'RESET_CURRENT_PLOT' };
