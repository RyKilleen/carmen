/// <reference types="leaflet" />

export {};

declare global {
  // PeerJS is loaded as global `Peer` from CDN
  const Peer: typeof import("peerjs").default;
  type Peer = import("peerjs").default;
  type DataConnection = import("peerjs").DataConnection;

  // iOS Safari extensions
  interface DeviceOrientationEvent {
    webkitCompassHeading?: number;
  }

  // DeviceOrientationEvent.requestPermission (iOS Safari)
  interface DeviceOrientationEventWithPermission {
    requestPermission?: () => Promise<"granted" | "denied">;
  }
}
