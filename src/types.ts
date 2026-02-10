export interface LocationData {
  peerId: string;
  name: string;
  lat: number;
  lng: number;
  heading: number | null;
  timestamp: number;
  isSelf?: boolean;
}

export type PeerMessage =
  | ({ type: "location" } & LocationData)
  | { type: "peers"; locations: LocationData[]; peerIds?: string[] }
  | { type: "peer-left"; peerId: string }
  | { type: "new-greeter" };

export interface AppState {
  name: string;
  code: string;
  isCreator: boolean;
  peer: Peer | null;
  greeterPeer: Peer | null;
  connections: Map<string, DataConnection>;
  locations: Map<string, LocationData>;
  geoWatchId: number | null;
  myLocation: LocationData | null;
  visibilityHandler: (() => void) | null;
  beforeUnloadHandler: (() => void) | null;
}

export interface GeoCallbacks {
  broadcastMyLocation: () => void;
  renderPeers: () => void;
  showToast: (msg: string, isError?: boolean) => void;
}

export interface PeerDeps {
  state: AppState;
  showToast: (msg: string, isError?: boolean) => void;
  showScreen: (screen: HTMLElement) => void;
  initMap: () => void;
  startGeo: () => void;
  startCompass: () => void;
  renderPeers: () => void;
  beaconCodeEl: HTMLElement;
  beaconScreen: HTMLElement;
  createBtn: HTMLButtonElement;
  joinBtn: HTMLButtonElement;
  codeInput: HTMLInputElement;
  generateCode: (len?: number) => string;
  peerIdFor: (code: string) => string;
  CHANNEL_CODE_LENGTH: number;
  leaveChannel: () => void;
  stopOrientation: () => void;
  cleanupMap: () => void;
  welcomeScreen: HTMLElement;
}
